import googleTrends from 'google-trends-api';

import { buildCacheKey, getOrSetCachedValue } from '../utils/cache.js';
import { clampScore } from './scoring.service.js';

const TREND_CACHE_TTL_MS = 1000 * 60 * 20;

const splitWords = (value = '') =>
  value
    .toLowerCase()
    .split(/[^a-z0-9+/-]+/i)
    .filter(Boolean);

const stopWords = new Set([
  'the',
  'and',
  'for',
  'with',
  'that',
  'this',
  'from',
  'into',
  'your',
  'their',
  'they',
  'will',
  'have',
  'into',
  'app',
  'platform',
  'tool',
  'service',
  'users',
  'user',
]);

const extractTrendKeywords = ({ idea, targetAudience, problem }) => {
  const words = [...splitWords(idea), ...splitWords(targetAudience), ...splitWords(problem)]
    .filter((word) => word.length > 3 && !stopWords.has(word))
    .slice(0, 24);

  const phraseSeed = [idea, targetAudience]
    .flatMap((value) => value.split(','))
    .map((value) => value.trim())
    .filter((value) => value.length > 3);

  const keywords = [...new Set([...phraseSeed, ...words])].slice(0, 5);
  return keywords.length ? keywords : [idea.trim()];
};

const buildTrendSummary = ({ averageInterest, topRegion, keywords, source }) => {
  if (source === 'fallback') {
    return 'Live trend data was unavailable, so market signals are currently estimated from the interview inputs.';
  }

  if (averageInterest >= 70) {
    return `Search interest looks strong for ${keywords[0]} with especially notable activity in ${topRegion || 'the selected market'}.`;
  }

  if (averageInterest >= 40) {
    return `Search interest is moderate for ${keywords[0]}. There is visible demand, but the niche may need sharper positioning.`;
  }

  return `Search interest appears limited for ${keywords[0]}. This idea may need stronger demand validation or a narrower niche.`;
};

const buildTrendTimeline = (timeline = []) =>
  timeline.slice(-12).map((item) => ({
    label: item.formattedTime || '',
    interest: Number(item.value?.[0] || 0),
  }));

const fetchTrendSignals = async ({ idea, targetAudience, problem, location }) => {
  const keywords = extractTrendKeywords({ idea, targetAudience, problem });
  const geo =
    location && !['global', 'worldwide'].includes(location.toLowerCase())
      ? location.split(',').slice(-1)[0].trim().slice(0, 2).toUpperCase()
      : '';

  const cacheKey = buildCacheKey('trend-signals', { keywords, geo });

  return getOrSetCachedValue(
    cacheKey,
    async () => {
      try {
        const [interestRaw, regionRaw] = await Promise.all([
          googleTrends.interestOverTime({
            keyword: keywords,
            geo,
          }),
          googleTrends.interestByRegion({
            keyword: keywords[0],
            geo,
          }),
        ]);

        const interestJson = JSON.parse(interestRaw);
        const regionJson = JSON.parse(regionRaw);

        const timeline = interestJson.default.timelineData || [];
        const regionData = regionJson.default.geoMapData || [];
        const averageInterest =
          timeline.length > 0
            ? timeline.reduce((sum, item) => sum + (item.value?.[0] || 0), 0) / timeline.length
            : 0;

        const topRegions = regionData
          .filter((item) => Number(item.value?.[0] || 0) > 0)
          .sort((a, b) => (b.value?.[0] || 0) - (a.value?.[0] || 0))
          .slice(0, 3)
          .map((item) => ({
            name: item.geoName,
            interest: item.value?.[0] || 0,
          }));

        const topRegion = topRegions[0]?.name || null;
        const trendTimeline = buildTrendTimeline(timeline);
        const demandBoost =
          averageInterest >= 70 ? 1 :
          averageInterest >= 50 ? 0.6 :
          averageInterest >= 30 ? 0.2 :
          -0.4;

        return {
          source: 'google_trends',
          keywords,
          averageInterest: clampScore(averageInterest / 10),
          trendSummary: buildTrendSummary({
            averageInterest,
            topRegion,
            keywords,
            source: 'google_trends',
          }),
          trendTimeline,
          topRegions,
          demandBoost,
        };
      } catch (_error) {
        return {
          source: 'fallback',
          keywords,
          averageInterest: null,
          trendSummary: buildTrendSummary({
            averageInterest: 0,
            topRegion: null,
            keywords,
            source: 'fallback',
          }),
          trendTimeline: [],
          topRegions: [],
          demandBoost: 0,
        };
      }
    },
    TREND_CACHE_TTL_MS
  );
};

export { extractTrendKeywords, fetchTrendSignals };
