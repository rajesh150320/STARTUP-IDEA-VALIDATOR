import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return true;

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    logger.warn('MONGODB_URI is not configured. Analysis history will not be saved.');
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    isConnected = true;
    logger.info({ host: mongoose.connection.host }, 'MongoDB connected');
    return true;
  } catch (error) {
    logger.warn({ error: error.message }, 'MongoDB connection failed. Continuing without persistence.');
    return false;
  }
};

export default connectDB;
