import rateLimit from 'express-rate-limit';

const createRateLimiter = ({ windowMs, max, message }) =>
  rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message,
    },
  });

const authRateLimiter = createRateLimiter({
  windowMs: 1000 * 60 * 15,
  max: 20,
  message: 'Too many authentication attempts. Please wait a few minutes and try again.',
});

const validatorRateLimiter = createRateLimiter({
  windowMs: 1000 * 60 * 10,
  max: 40,
  message: 'Too many analysis requests. Please slow down and try again shortly.',
});

const apiRateLimiter = createRateLimiter({
  windowMs: 1000 * 60 * 15,
  max: 200,
  message: 'Too many API requests. Please try again later.',
});

export { apiRateLimiter, authRateLimiter, validatorRateLimiter };
