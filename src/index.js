import dotenv from 'dotenv';

import { app } from './app.js';
import connectDB from './db/index.js';
import { logger } from './utils/logger.js';

dotenv.config({
  path: './.env',
});

const port = process.env.PORT || 8000;

connectDB().finally(() => {
  app.listen(port, () => {
    logger.info({ port }, 'Server is listening');
  });
});
