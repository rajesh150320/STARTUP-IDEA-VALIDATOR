import { analyzeCompetitorInsights as analyzeCompetitorInsightsUtil } from '../utils/competitorAnalysis.js';
import { buildCacheKey, getOrSetCachedValue } from '../utils/cache.js';

const COMPETITOR_CACHE_TTL_MS = 1000 * 60 * 30;

const analyzeCompetitorInsights = async ({ idea, targetAudience, location, problem, keywords }) => {
  const cacheKey = buildCacheKey('competitor-insights', {
    idea,
    targetAudience,
    location,
    problem,
    keywords,
  });

  return getOrSetCachedValue(
    cacheKey,
    () =>
      analyzeCompetitorInsightsUtil({
        idea,
        targetAudience,
        location,
        problem,
        keywords,
      }),
    COMPETITOR_CACHE_TTL_MS
  );
};

export { analyzeCompetitorInsights };
