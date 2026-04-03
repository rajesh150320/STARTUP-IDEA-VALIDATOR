import { getOpenAIClient, getOpenAIModel } from '../utils/openai.js';
import { buildCacheKey, getOrSetCachedValue } from '../utils/cache.js';
import { clampScore } from './scoring.service.js';

const AI_CACHE_TTL_MS = 1000 * 60 * 30;

const validatorResponseFormat = {
  type: 'json_schema',
  name: 'startup_idea_analysis',
  strict: true,
  schema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      marketDemand: { type: 'string' },
      competition: { type: 'string' },
      feasibility: { type: 'string' },
      suggestions: {
        type: 'array',
        items: { type: 'string' },
      },
      mvpSuggestions: {
        type: 'array',
        items: { type: 'string' },
      },
      score: { type: 'number' },
      roast: { type: 'string' },
      metrics: {
        type: 'object',
        additionalProperties: false,
        properties: {
          marketDemand: { type: 'number' },
          competition: { type: 'number' },
          feasibility: { type: 'number' },
        },
        required: ['marketDemand', 'competition', 'feasibility'],
      },
      metricExplanations: {
        type: 'object',
        additionalProperties: false,
        properties: {
          marketDemand: { type: 'string' },
          competition: { type: 'string' },
          feasibility: { type: 'string' },
        },
        required: ['marketDemand', 'competition', 'feasibility'],
      },
      marketSignals: {
        type: 'object',
        additionalProperties: false,
        properties: {
          keywords: {
            type: 'array',
            items: { type: 'string' },
          },
          source: { type: 'string' },
          averageInterest: { type: ['number', 'null'] },
          trendSummary: { type: 'string' },
          trendTimeline: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                label: { type: 'string' },
                interest: { type: 'number' },
              },
              required: ['label', 'interest'],
            },
          },
          topRegions: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                name: { type: 'string' },
                interest: { type: 'number' },
              },
              required: ['name', 'interest'],
            },
          },
        },
        required: ['keywords', 'source', 'averageInterest', 'trendSummary', 'trendTimeline', 'topRegions'],
      },
      competitorInsights: {
        type: 'object',
        additionalProperties: false,
        properties: {
          competitors: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                region: { type: 'string' },
              },
              required: ['name', 'description', 'region'],
            },
          },
          saturation: {
            type: 'string',
            enum: ['Low', 'Moderate', 'High'],
          },
          gap: { type: 'string' },
        },
        required: ['competitors', 'saturation', 'gap'],
      },
    },
    required: ['marketDemand', 'competition', 'feasibility', 'suggestions', 'mvpSuggestions', 'score', 'roast', 'metrics', 'metricExplanations', 'marketSignals', 'competitorInsights'],
  },
};

const analyzeWithOpenAI = async ({
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
  const client = getOpenAIClient();

  if (!client) {
    return null;
  }

  const cacheKey = buildCacheKey('openai-analysis', {
    idea,
    location,
    targetAudience,
    budgetCategory,
    budgetMin,
    budgetMax,
    timeline,
    platform,
    problem,
    model: getOpenAIModel(),
  });

  return getOrSetCachedValue(
    cacheKey,
    async () => {
      const response = await client.responses.create({
        model: getOpenAIModel(),
        input: [
          {
            role: 'system',
            content: [
              {
                type: 'input_text',
                text:
                  'You are a startup analyst. Return only a JSON object matching the provided schema. Keep each field concise, practical, and investor-friendly. Suggestions must be actionable. MVP suggestions must include only the first 4 to 6 buildable features needed to validate the idea. Score must be a number from 1 to 10. In metrics, provide marketDemand, competition, and feasibility as numeric values from 1 to 10. In metricExplanations, explain briefly why each metric got that score. In marketSignals, summarize keyword demand and mention top regions if present. In competitorInsights, include 3 to 5 relevant competitors, a market saturation level of Low, Moderate, or High, and one concise gap insight.',
              },
            ],
          },
          {
            role: 'user',
            content: [
              {
                type: 'input_text',
                text: `Analyze this startup idea:

Idea: ${idea}
Location: ${location}
Target Audience: ${targetAudience}
Budget: ${budgetCategory} (INR ${budgetMin}-${budgetMax})
Timeline: ${timeline}
Platform: ${platform}
Problem: ${problem}

Give:
- marketDemand
- competition
- feasibility
- suggestions (array)
- mvpSuggestions (array of 4 to 6 essential MVP features)
- roast (1 to 3 lines of harsh but realistic product criticism)
- score (number out of 10)
- competitorInsights with competitors, saturation, and gap`,
              },
            ],
          },
        ],
        text: {
          format: validatorResponseFormat,
        },
      });

      if (!response.output_text) {
        throw new Error('OpenAI returned an empty response');
      }

      const parsed = JSON.parse(response.output_text);

      return {
        marketDemand: parsed.marketDemand,
        competition: parsed.competition,
        feasibility: parsed.feasibility,
        suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : [],
        mvpSuggestions: Array.isArray(parsed.mvpSuggestions) ? parsed.mvpSuggestions.slice(0, 6) : [],
        score: clampScore(Number(parsed.score) || 0),
        roast: parsed.roast || '',
        metrics: {
          marketDemand: clampScore(Number(parsed.metrics?.marketDemand) || 0),
          competition: clampScore(Number(parsed.metrics?.competition) || 0),
          feasibility: clampScore(Number(parsed.metrics?.feasibility) || 0),
        },
        metricExplanations: {
          marketDemand: parsed.metricExplanations?.marketDemand || 'This score reflects demand clarity and urgency signals.',
          competition: parsed.metricExplanations?.competition || 'This score reflects niche overlap and competitive intensity.',
          feasibility: parsed.metricExplanations?.feasibility || 'This score reflects scope, budget, and timeline realism.',
        },
        marketSignals: {
          keywords: Array.isArray(parsed.marketSignals?.keywords) ? parsed.marketSignals.keywords : [],
          source: parsed.marketSignals?.source || 'ai',
          averageInterest:
            parsed.marketSignals?.averageInterest === null || parsed.marketSignals?.averageInterest === undefined
              ? null
              : clampScore(Number(parsed.marketSignals.averageInterest) || 0),
          trendSummary: parsed.marketSignals?.trendSummary || 'No market signal summary available.',
          trendTimeline: Array.isArray(parsed.marketSignals?.trendTimeline) ? parsed.marketSignals.trendTimeline : [],
          topRegions: Array.isArray(parsed.marketSignals?.topRegions) ? parsed.marketSignals.topRegions : [],
        },
        competitorInsights: {
          competitors: Array.isArray(parsed.competitorInsights?.competitors) ? parsed.competitorInsights.competitors.slice(0, 5) : [],
          saturation: ['Low', 'Moderate', 'High'].includes(parsed.competitorInsights?.saturation)
            ? parsed.competitorInsights.saturation
            : 'Moderate',
          gap: parsed.competitorInsights?.gap || '',
        },
      };
    },
    AI_CACHE_TTL_MS
  );
};

export { analyzeWithOpenAI };
