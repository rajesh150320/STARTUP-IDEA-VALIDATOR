import { analyzeWithOpenAI } from './ai.service.js';
import { analyzeCompetitorInsights } from './competitor.service.js';
import { buildRuleBasedResponse } from './scoring.service.js';
import { fetchTrendSignals } from './trend.service.js';

const buildAnalysisResponse = async ({
  idea,
  location,
  targetAudience,
  budgetCategory,
  budgetMin,
  budgetMax,
  timeline,
  platform,
  problem,
}) => {
  const trendSignals = await fetchTrendSignals({
    idea,
    targetAudience,
    problem,
    location,
  });

  const competitorInsightsPromise = analyzeCompetitorInsights({
    idea,
    location,
    targetAudience,
    problem,
    keywords: trendSignals.keywords,
  });

  let analysis;

  try {
    analysis = await analyzeWithOpenAI({
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

    analysis.analysisMode = 'ai';
    analysis.analysisSource = 'OpenAI enhanced analysis';

    if (!analysis.marketSignals?.keywords?.length && trendSignals.keywords?.length) {
      analysis.marketSignals = {
        keywords: trendSignals.keywords,
        source: trendSignals.source || analysis.marketSignals?.source || 'google_trends',
        averageInterest:
          trendSignals.averageInterest === null || trendSignals.averageInterest === undefined
            ? analysis.marketSignals?.averageInterest ?? null
            : trendSignals.averageInterest,
        trendSummary: analysis.marketSignals?.trendSummary || trendSignals.trendSummary,
        trendTimeline:
          Array.isArray(analysis.marketSignals?.trendTimeline) && analysis.marketSignals.trendTimeline.length
            ? analysis.marketSignals.trendTimeline
            : trendSignals.trendTimeline || [],
        topRegions:
          Array.isArray(analysis.marketSignals?.topRegions) && analysis.marketSignals.topRegions.length
            ? analysis.marketSignals.topRegions
            : trendSignals.topRegions || [],
      };
    }
  } catch (_error) {
    analysis = buildRuleBasedResponse({
      idea,
      location,
      targetAudience,
      budgetCategory,
      budgetMin,
      budgetMax,
      timeline,
      platform,
      problem,
      trendSignals,
    });

    analysis.analysisMode = 'fallback';
    analysis.analysisSource = 'Local analysis engine';
  }

  const competitorInsights = await competitorInsightsPromise;

  return {
    ...analysis,
    competitorInsights,
  };
};

const analysisService = {
  buildAnalysisResponse,
};

export { analysisService, buildAnalysisResponse };
