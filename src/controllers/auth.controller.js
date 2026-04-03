import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { sendOTP, verifyOTP } from '../services/otp.service.js';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { logger } from '../utils/logger.js';

const getJwtSecret = () => {
  if (!process.env.JWT_SECRET) {
    throw new ApiError(500, 'JWT_SECRET is not configured');
  }

  return process.env.JWT_SECRET;
};

const ensureDatabaseReady = () => {
  if (mongoose.connection.readyState !== 1) {
    throw new ApiError(503, 'MongoDB is not connected. Please check MONGODB_URI and restart the server.');
  }
};

const signToken = (userId) =>
  jwt.sign({ userId }, getJwtSecret(), {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  });

const signOtpPayloadToken = (payload) =>
  jwt.sign(payload, getJwtSecret(), {
    expiresIn: `${Number(process.env.OTP_EXPIRES_IN_MINUTES || 5)}m`,
  });

const sanitizeUser = (user) => ({
  _id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  fullName: `${user.firstName} ${user.lastName}`.trim(),
  email: user.email,
  phone: user.phone,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const buildRegisterPayload = async ({ firstName, lastName, email, password }) => ({
  firstName: String(firstName).trim(),
  lastName: String(lastName).trim(),
  email: String(email).trim().toLowerCase(),
  password: await bcrypt.hash(String(password), 10),
});

const decodeOtpPayloadToken = (token, expectedPurpose, email) => {
  if (!token) {
    throw new ApiError(400, 'Verification token is required');
  }

  let payload;

  try {
    payload = jwt.verify(token, getJwtSecret());
  } catch (_error) {
    throw new ApiError(400, 'Verification token is invalid or expired');
  }

  if (payload.purpose !== expectedPurpose) {
    throw new ApiError(400, 'Verification token purpose mismatch');
  }

  if ((payload.email || '').toLowerCase() !== String(email || '').trim().toLowerCase()) {
    throw new ApiError(400, 'Verification token email mismatch');
  }

  return payload;
};

const requestRegisterOtp = asyncHandler(async (req, res) => {
  ensureDatabaseReady();

  const { firstName, lastName, email, password } = req.body;
  const normalizedEmail = String(email).trim().toLowerCase();
  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    throw new ApiError(409, 'User already exists with this email');
  }

  const otpMeta = await sendOTP(normalizedEmail);
  const verificationToken = signOtpPayloadToken({
    purpose: 'register',
    email: normalizedEmail,
    pendingUser: await buildRegisterPayload({
      firstName,
      lastName,
      email: normalizedEmail,
      password,
    }),
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        ...otpMeta,
        purpose: 'register',
        channel: 'email',
        identifier: normalizedEmail,
        verificationToken,
      },
      'OTP sent successfully to your email'
    )
  );
});

const verifyRegisterOtp = asyncHandler(async (req, res) => {
  getJwtSecret();
  ensureDatabaseReady();

  const { email, otp, verificationToken } = req.body;
  const normalizedEmail = String(email).trim().toLowerCase();
  const payload = decodeOtpPayloadToken(verificationToken, 'register', normalizedEmail);

  await verifyOTP(normalizedEmail, otp);

  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    throw new ApiError(409, 'User already exists with this email');
  }

  const userPayload = {
    firstName: payload.pendingUser.firstName,
    lastName: payload.pendingUser.lastName,
    email: normalizedEmail,
    password: payload.pendingUser.password,
  };

  const user = await User.create(userPayload);

  const token = signToken(user._id);

  return res.status(201).json(
    new ApiResponse(
      201,
      {
        user: sanitizeUser(user),
        token,
      },
      'Account created successfully after OTP verification'
    )
  );
});

const sendAuthOtp = asyncHandler(async (req, res) => {
  ensureDatabaseReady();

  const { email } = req.body;
  const normalizedEmail = String(email).trim().toLowerCase();

  const user = await User.findOne({ email: normalizedEmail });
  if (!user) {
    throw new ApiError(404, 'No user found with this email');
  }

  const otpMeta = await sendOTP(normalizedEmail);
  const verificationToken = signOtpPayloadToken({
    purpose: 'login',
    email: normalizedEmail,
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        ...otpMeta,
        purpose: 'login',
        channel: 'email',
        identifier: normalizedEmail,
        verificationToken,
      },
      'OTP sent successfully to your email'
    )
  );
});

const verifyAuthOtp = asyncHandler(async (req, res) => {
  getJwtSecret();
  ensureDatabaseReady();

  const { email, otp, verificationToken } = req.body;
  const normalizedEmail = String(email).trim().toLowerCase();
  const payload = decodeOtpPayloadToken(verificationToken, 'login', normalizedEmail);

  await verifyOTP(normalizedEmail, otp);

  const user = await User.findOne({ email: normalizedEmail });
  if (!user) {
    throw new ApiError(404, 'No user found with this email');
  }

  const token = signToken(user._id);

  logger.info({ email: normalizedEmail, purpose: payload.purpose }, 'Email OTP verified successfully');

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user: sanitizeUser(user),
        token,
      },
      'OTP verified successfully'
    )
  );
});

const loginUser = asyncHandler(async (req, res) => {
  getJwtSecret();
  ensureDatabaseReady();

  const { email, password } = req.body;
  const normalizedEmail = String(email).trim().toLowerCase();

  const user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const isPasswordValid = await user.comparePassword(String(password));
  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = signToken(user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user: sanitizeUser(user),
        token,
      },
      'User logged in successfully'
    )
  );
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, { user: sanitizeUser(req.user) }, 'Current user fetched successfully'));
});

const logoutUser = asyncHandler(async (_req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, { loggedOut: true }, 'Logout successful. Remove the token on the client.'));
});

export {
  requestRegisterOtp,
  verifyRegisterOtp,
  sendAuthOtp,
  verifyAuthOtp,
  loginUser,
  getCurrentUser,
  logoutUser,
};
