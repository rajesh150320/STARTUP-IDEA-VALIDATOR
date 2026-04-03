import { Router } from 'express';

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  requestRegisterOtp,
  sendAuthOtp,
  verifyAuthOtp,
  verifyRegisterOtp,
} from '../controllers/auth.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';
import { validateRequest } from '../middlewares/validateRequest.middleware.js';
import {
  loginSchema,
  registerRequestOtpSchema,
  sendOtpSchema,
  verifyOtpSchema,
  verifyRegisterOtpSchema,
} from '../schemas/auth.schema.js';

const router = Router();

router.route('/send-otp').post(validateRequest(sendOtpSchema), sendAuthOtp);
router.route('/verify-otp').post(validateRequest(verifyOtpSchema), verifyAuthOtp);
router.route('/register/request-otp').post(validateRequest(registerRequestOtpSchema), requestRegisterOtp);
router.route('/register/verify-otp').post(validateRequest(verifyRegisterOtpSchema), verifyRegisterOtp);
router.route('/login').post(validateRequest(loginSchema), loginUser);
router.route('/me').get(requireAuth, getCurrentUser);
router.route('/logout').post(requireAuth, logoutUser);

export default router;
