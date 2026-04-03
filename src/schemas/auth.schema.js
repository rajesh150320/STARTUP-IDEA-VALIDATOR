import { z } from '../middlewares/validateRequest.middleware.js';

const nonEmptyTrimmedString = z
  .string()
  .trim()
  .min(1, 'This field is required');

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email('Enter a valid email address');

const passwordSchema = z
  .string()
  .min(6, 'Password must be at least 6 characters long');

const registerRequestOtpSchema = z.object({
  body: z
    .object({
      firstName: nonEmptyTrimmedString,
      lastName: nonEmptyTrimmedString,
      email: emailSchema,
      password: passwordSchema,
      confirmPassword: passwordSchema,
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Password and confirm password must match',
          path: ['confirmPassword'],
        });
      }
    }),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

const verifyRegisterOtpSchema = z.object({
  body: z.object({
    email: emailSchema,
    verificationToken: nonEmptyTrimmedString,
    otp: z.string().trim().length(6, 'OTP must be 6 digits'),
  }),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

const sendOtpSchema = z.object({
  body: z.object({
    email: emailSchema,
  }),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

const verifyOtpSchema = z.object({
  body: z.object({
    email: emailSchema,
    verificationToken: nonEmptyTrimmedString,
    otp: z.string().trim().length(6, 'OTP must be 6 digits'),
  }),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

const loginSchema = z.object({
  body: z.object({
    email: emailSchema,
    password: passwordSchema,
  }),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

export {
  loginSchema,
  registerRequestOtpSchema,
  sendOtpSchema,
  verifyOtpSchema,
  verifyRegisterOtpSchema,
};
