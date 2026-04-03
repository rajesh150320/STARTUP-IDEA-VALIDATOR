import { z } from 'zod';

import { ApiError } from '../utils/ApiError.js';

const formatIssues = (issues = []) =>
  issues.map((issue) => ({
    path: issue.path.join('.') || 'body',
    message: issue.message,
  }));

const validateRequest = (schema) => (req, _res, next) => {
  const result = schema.safeParse({
    body: req.body,
    params: req.params,
    query: req.query,
  });

  if (!result.success) {
    return next(
      new ApiError(400, 'Request validation failed', formatIssues(result.error.issues))
    );
  }

  req.body = result.data.body;
  req.params = result.data.params;
  req.query = result.data.query;

  return next();
};

export { validateRequest, z };
