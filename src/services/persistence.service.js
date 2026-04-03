import mongoose from 'mongoose';

import { IdeaAnalysis } from '../models/ideaAnalysis.model.js';
import { clampScore } from './scoring.service.js';
import { logger } from '../utils/logger.js';

const saveAnalysisHistory = async ({ userId, input, result }) => {
  if (mongoose.connection.readyState !== 1 || !userId) {
    return false;
  }

  try {
    await IdeaAnalysis.create({
      userId,
      input,
      result,
    });

    return true;
  } catch (error) {
    logger.warn({ error: error.message, userId }, 'Failed to save analysis history');
    return false;
  }
};

const getUserAnalysisHistory = async (userId) => {
  if (mongoose.connection.readyState !== 1) {
    return {
      history: [],
      summary: {
        totalAnalyses: 0,
        scoreChange: 0,
        trendLabel: 'History is unavailable until MongoDB is connected.',
      },
      message: 'Analysis history is unavailable because MongoDB is not connected',
    };
  }

  const [totalAnalyses, records, latestTwo] = await Promise.all([
    IdeaAnalysis.countDocuments({ userId }),
    IdeaAnalysis.find({ userId })
      .sort({ createdAt: -1 })
      .limit(8)
      .select({
        'input.idea': 1,
        'input.location': 1,
        'input.targetAudience': 1,
        'result.score': 1,
        'result.metrics': 1,
        createdAt: 1,
      })
      .lean(),
    IdeaAnalysis.find({ userId })
      .sort({ createdAt: -1 })
      .limit(2)
      .select({
        'result.score': 1,
      })
      .lean(),
  ]);

  const latestScore = clampScore(latestTwo[0]?.result?.score || 0);
  const previousScore = clampScore(latestTwo[1]?.result?.score || 0);
  const scoreChange = latestTwo.length > 1 ? Math.round((latestScore - previousScore) * 10) / 10 : 0;
  const trendLabel =
    latestTwo.length <= 1
      ? 'Run one more analysis to start tracking score movement.'
      : scoreChange > 0
        ? `Latest score improved by ${scoreChange.toFixed(1)} points compared with the previous analysis.`
        : scoreChange < 0
          ? `Latest score dropped by ${Math.abs(scoreChange).toFixed(1)} points compared with the previous analysis.`
          : 'Latest score is unchanged compared with the previous analysis.';

  const history = records.map((record) => ({
    id: String(record._id),
    idea: record.input?.idea || 'Untitled idea',
    location: record.input?.location || '',
    targetAudience: record.input?.targetAudience || '',
    score: clampScore(record.result?.score || 0),
    metrics: {
      marketDemand: clampScore(record.result?.metrics?.marketDemand || 0),
      competition: clampScore(record.result?.metrics?.competition || 0),
      feasibility: clampScore(record.result?.metrics?.feasibility || 0),
    },
    createdAt: record.createdAt,
  }));

  return {
    history,
    summary: {
      totalAnalyses,
      scoreChange: Number(scoreChange.toFixed(1)),
      trendLabel,
    },
    message: 'Analysis history fetched successfully',
  };
};

const persistenceService = {
  getUserAnalysisHistory,
  saveAnalysisHistory,
};

export { getUserAnalysisHistory, persistenceService, saveAnalysisHistory };
