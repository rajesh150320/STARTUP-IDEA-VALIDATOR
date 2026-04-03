import { analysisService } from '../services/analysis.service.js';
import { persistenceService } from '../services/persistence.service.js';
import { normalizeNumber } from '../services/scoring.service.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const analyzeStartupIdea = asyncHandler(async (req, res) => {
  const {
    idea,
    location,
    targetAudience,
    budgetCategory,
    min,
    max,
    timeline,
    platform,
    problem,
  } = req.body;

  const budgetMin = normalizeNumber(min);
  const budgetMax = normalizeNumber(max);

  const finalResponse = await analysisService.buildAnalysisResponse({
    idea,
    location,
    targetAudience,
    budgetCategory,
    budgetMin,
    budgetMax,
    timeline,
    platform,
    problem,
  });

  await persistenceService.saveAnalysisHistory({
    userId: req.user?._id,
    input: {
      idea,
      location,
      targetAudience,
      budgetCategory,
      min: budgetMin,
      max: budgetMax,
      timeline,
      platform,
      problem,
    },
    result: finalResponse,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        finalResponse,
        'Startup idea analysis generated successfully'
      )
    );
});

const getAnalysisHistory = asyncHandler(async (req, res) => {
  const { history, summary, message } = await persistenceService.getUserAnalysisHistory(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        history,
        summary,
      },
      message
    )
  );
});

export { analyzeStartupIdea, getAnalysisHistory };
