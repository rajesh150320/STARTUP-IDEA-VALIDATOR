import { logger } from '../utils/logger.js';

const requestLogger = (req, res, next) => {
  const startedAt = Date.now();

  res.on('finish', () => {
    logger.info(
      {
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        durationMs: Date.now() - startedAt,
        ip: req.ip,
      },
      'Request completed'
    );
  });

  next();
};

export { requestLogger };
