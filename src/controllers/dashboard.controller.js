import mongoose from 'mongoose';

import { IdeaAnalysis } from '../models/ideaAnalysis.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const normalizeScore = (value) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 0;
  return Math.round(parsed * 10) / 10;
};

const getDashboardData = asyncHandler(async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          totalIdeas: 0,
          bestScore: 0,
          averageScore: 0,
          metricsSummary: {
            marketDemand: 0,
            competition: 0,
            feasibility: 0,
          },
          last5Ideas: [],
          scoreTimeline: [],
          marketTrendTimeline: [],
        },
        'Dashboard is unavailable because MongoDB is not connected'
      )
    );
  }

  const [dashboardData] = await IdeaAnalysis.aggregate([
    {
      $match: {
        userId: req.user._id,
      },
    },
    {
      $facet: {
        stats: [
          {
            $group: {
              _id: null,
              totalIdeas: { $sum: 1 },
              bestScore: { $max: '$result.score' },
              averageScore: { $avg: '$result.score' },
              averageMarketDemand: { $avg: '$result.metrics.marketDemand' },
              averageCompetition: { $avg: '$result.metrics.competition' },
              averageFeasibility: { $avg: '$result.metrics.feasibility' },
            },
          },
        ],
        last5Ideas: [
          { $sort: { createdAt: -1 } },
          { $limit: 5 },
          {
            $project: {
              _id: 1,
              idea: '$input.idea',
              score: '$result.score',
              createdAt: 1,
            },
          },
        ],
        scoreTimeline: [
          { $sort: { createdAt: -1 } },
          { $limit: 15 },
          { $sort: { createdAt: 1 } },
          {
            $project: {
              _id: 1,
              idea: '$input.idea',
              score: '$result.score',
              createdAt: 1,
            },
          },
        ],
        latestMarketTrend: [
          { $sort: { createdAt: -1 } },
          { $limit: 1 },
          {
            $project: {
              trendTimeline: '$result.marketSignals.trendTimeline',
            },
          },
        ],
      },
    },
  ]);

  const stats = dashboardData?.stats?.[0] || {
    totalIdeas: 0,
    bestScore: 0,
    averageScore: 0,
    averageMarketDemand: 0,
    averageCompetition: 0,
    averageFeasibility: 0,
  };

  const payload = {
    totalIdeas: Number(stats.totalIdeas || 0),
    bestScore: normalizeScore(stats.bestScore || 0),
    averageScore: normalizeScore(stats.averageScore || 0),
    metricsSummary: {
      marketDemand: normalizeScore(stats.averageMarketDemand || 0),
      competition: normalizeScore(stats.averageCompetition || 0),
      feasibility: normalizeScore(stats.averageFeasibility || 0),
    },
    last5Ideas: (dashboardData?.last5Ideas || []).map((item) => ({
      id: String(item._id),
      idea: item.idea || 'Untitled idea',
      score: normalizeScore(item.score || 0),
      createdAt: item.createdAt,
    })),
    scoreTimeline: (dashboardData?.scoreTimeline || []).map((item) => ({
      id: String(item._id),
      idea: item.idea || 'Untitled idea',
      score: normalizeScore(item.score || 0),
      date: item.createdAt,
      createdAt: item.createdAt,
    })),
    marketTrendTimeline: (dashboardData?.latestMarketTrend?.[0]?.trendTimeline || []).map((item) => ({
      label: item.label || '',
      interest: normalizeScore(item.interest || 0),
    })),
  };

  return res
    .status(200)
    .json(new ApiResponse(200, payload, 'Dashboard fetched successfully'));
});

export { getDashboardData };
