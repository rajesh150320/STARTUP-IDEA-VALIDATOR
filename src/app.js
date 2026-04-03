import express from 'express';
import cors from 'cors';

import { apiRateLimiter, authRateLimiter, validatorRateLimiter } from './middlewares/rateLimit.middleware.js';
import { requestLogger } from './middlewares/requestLogger.middleware.js';
import authRouter from './routes/auth.routes.js';
import dashboardRouter from './routes/dashboard.routes.js';
import validatorRouter from './routes/validator.routes.js';
import { ApiError } from './utils/ApiError.js';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  })
);

app.use(requestLogger);
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));

app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
  });
});

app.use('/api/v1', apiRateLimiter);
app.use('/api/v1/auth', authRateLimiter, authRouter);
app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/validator', validatorRateLimiter, validatorRouter);

app.use((err, _req, res, _next) => {
  const statusCode = err instanceof ApiError ? err.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal server error',
    errors: err.errors || [],
  });
});

export { app };
