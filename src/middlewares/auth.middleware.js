import jwt from 'jsonwebtoken';

import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const extractTokenFromHeader = (authorizationHeader = '') => {
  if (!authorizationHeader.startsWith('Bearer ')) {
    return null;
  }

  return authorizationHeader.slice(7).trim();
};

const verifyTokenAndLoadUser = async (token) => {
  if (!process.env.JWT_SECRET) {
    throw new ApiError(500, 'JWT_SECRET is not configured');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.userId).select('-password');

  if (!user) {
    throw new ApiError(401, 'User linked to this token no longer exists');
  }

  return user;
};

const requireAuth = asyncHandler(async (req, _res, next) => {
  const token = extractTokenFromHeader(req.header('Authorization'));

  if (!token) {
    throw new ApiError(401, 'Authorization token is required');
  }

  try {
    req.user = await verifyTokenAndLoadUser(token);
    next();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(401, 'Invalid or expired token');
  }
});

const optionalAuth = asyncHandler(async (req, _res, next) => {
  const token = extractTokenFromHeader(req.header('Authorization'));

  if (!token) {
    req.user = null;
    return next();
  }

  try {
    req.user = await verifyTokenAndLoadUser(token);
  } catch (_error) {
    req.user = null;
  }

  next();
});

export { requireAuth, optionalAuth };
