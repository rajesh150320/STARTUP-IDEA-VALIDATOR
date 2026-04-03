import mongoose, { Schema } from 'mongoose';

const otpVerificationSchema = new Schema(
  {
    purpose: {
      type: String,
      required: true,
      enum: ['register'],
    },
    channel: {
      type: String,
      required: true,
      enum: ['email', 'phone'],
    },
    identifier: {
      type: String,
      required: true,
      index: true,
    },
    otpHash: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
    pendingUser: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, default: null },
      phone: { type: String, default: null },
      password: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

export const OtpVerification = mongoose.model('OtpVerification', otpVerificationSchema);
