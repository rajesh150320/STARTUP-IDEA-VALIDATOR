import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

import { Otp } from '../models/otp.model.js';
import { ApiError } from '../utils/ApiError.js';
import { logger } from '../utils/logger.js';

const OTP_EXPIRY_MINUTES = 5;
const OTP_MAX_ATTEMPTS = 5;
const OTP_COOLDOWN_SECONDS = 60;

const getTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    throw new ApiError(500, 'EMAIL_USER and EMAIL_PASS must be configured');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

const generateOTP = () => String(Math.floor(100000 + Math.random() * 900000));

const normalizeEmail = (email = '') => String(email).trim().toLowerCase();

const sendOTP = async (email) => {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) {
    throw new ApiError(400, 'Email is required');
  }

  const existingOtp = await Otp.findOne({ email: normalizedEmail });
  if (existingOtp?.resendAvailableAt && existingOtp.resendAvailableAt.getTime() > Date.now()) {
    const retryAfterSeconds = Math.ceil(
      (existingOtp.resendAvailableAt.getTime() - Date.now()) / 1000
    );
    throw new ApiError(
      429,
      `Please wait ${retryAfterSeconds} seconds before requesting another OTP`
    );
  }

  const otpValue = generateOTP();
  const otpHash = await bcrypt.hash(otpValue, 10);
  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
  const resendAvailableAt = new Date(Date.now() + OTP_COOLDOWN_SECONDS * 1000);

  await Otp.findOneAndUpdate(
    { email: normalizedEmail },
    {
      email: normalizedEmail,
      otp: otpHash,
      expiresAt,
      attempts: 0,
      resendAvailableAt,
    },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    }
  );

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Startup Idea Validator" <${process.env.EMAIL_USER}>`,
    to: normalizedEmail,
    subject: 'Your Startup Idea Validator OTP',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #16324a;">
        <h2 style="margin: 0 0 12px;">Verify your email</h2>
        <p style="margin: 0 0 18px; line-height: 1.6;">
          Use the OTP below to continue with Startup Idea Validator. It expires in ${OTP_EXPIRY_MINUTES} minutes.
        </p>
        <div style="margin: 18px 0; padding: 18px 20px; border-radius: 16px; background: #eef7ff; border: 1px solid #cce5ff; text-align: center;">
          <span style="display: inline-block; font-size: 30px; font-weight: 700; letter-spacing: 8px; color: #155a8f;">
            ${otpValue}
          </span>
        </div>
        <p style="margin: 18px 0 0; color: #627d93; line-height: 1.6;">
          If you did not request this OTP, you can safely ignore this email.
        </p>
      </div>
    `,
  });

  logger.info({ email: normalizedEmail }, 'OTP email sent');

  return {
    email: normalizedEmail,
    expiresInMinutes: OTP_EXPIRY_MINUTES,
    cooldownSeconds: OTP_COOLDOWN_SECONDS,
  };
};

const verifyOTP = async (email, otp) => {
  const normalizedEmail = normalizeEmail(email);
  const normalizedOtp = String(otp || '').trim();

  const otpRecord = await Otp.findOne({ email: normalizedEmail });
  if (!otpRecord) {
    throw new ApiError(400, 'OTP session not found or already expired');
  }

  if (otpRecord.expiresAt.getTime() < Date.now()) {
    await otpRecord.deleteOne();
    throw new ApiError(400, 'OTP has expired. Please request a new one.');
  }

  if (otpRecord.attempts >= OTP_MAX_ATTEMPTS) {
    await otpRecord.deleteOne();
    throw new ApiError(429, 'Too many invalid OTP attempts. Please request a new OTP.');
  }

  const isOtpValid = await bcrypt.compare(normalizedOtp, otpRecord.otp);
  if (!isOtpValid) {
    otpRecord.attempts += 1;
    await otpRecord.save();
    throw new ApiError(400, 'Invalid OTP');
  }

  await otpRecord.deleteOne();
  return true;
};

export { generateOTP, sendOTP, verifyOTP };
