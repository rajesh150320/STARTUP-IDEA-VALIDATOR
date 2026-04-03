import assert from 'node:assert/strict';
import test from 'node:test';

import { analyzeStartupIdea } from '../../src/controllers/validator.controller.js';
import { analysisService } from '../../src/services/analysis.service.js';
import { persistenceService } from '../../src/services/persistence.service.js';

const createMockResponse = () => {
  const response = {
    statusCode: 200,
    payload: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.payload = body;
      return this;
    },
  };

  return response;
};

test('analyzeStartupIdea delegates to services and returns a success response', async (t) => {
  const buildAnalysisMock = t.mock.method(analysisService, 'buildAnalysisResponse', async () => ({
    marketDemand: 'Strong demand',
    competition: 'Moderate competition',
    feasibility: 'Feasible',
    suggestions: ['Talk to users first'],
    mvpSuggestions: ['Core workflow'],
    score: 7.8,
    roast: 'Still needs a sharper wedge.',
    metrics: {
      marketDemand: 8,
      competition: 6,
      feasibility: 7,
    },
    metricExplanations: {
      marketDemand: 'Urgent problem',
      competition: 'Manageable niche',
      feasibility: 'Realistic scope',
    },
    marketSignals: {
      keywords: ['startup idea'],
      source: 'fallback',
      averageInterest: null,
      trendSummary: 'Fallback summary',
      trendTimeline: [],
      topRegions: [],
    },
    competitorInsights: {
      competitors: [],
      saturation: 'Moderate',
      gap: 'Niche opportunity exists',
    },
    analysisMode: 'fallback',
    analysisSource: 'Local analysis engine',
  }));

  const saveHistoryMock = t.mock.method(
    persistenceService,
    'saveAnalysisHistory',
    async () => true
  );

  const req = {
    body: {
      idea: 'Startup idea',
      location: 'Bhubaneswar, Odisha',
      targetAudience: 'Busy professionals',
      budgetCategory: 'Medium',
      min: '10000',
      max: '50000',
      timeline: '3 months',
      platform: 'Web',
      problem: 'Users waste time finding trusted local services.',
    },
    user: {
      _id: 'user-123',
    },
  };
  const res = createMockResponse();
  await new Promise((resolve, reject) => {
    const originalJson = res.json.bind(res);
    res.json = (body) => {
      originalJson(body);
      resolve(body);
      return res;
    };

    analyzeStartupIdea(req, res, reject);
  });

  assert.equal(buildAnalysisMock.mock.callCount(), 1);
  assert.deepEqual(buildAnalysisMock.mock.calls[0].arguments[0], {
    idea: 'Startup idea',
    location: 'Bhubaneswar, Odisha',
    targetAudience: 'Busy professionals',
    budgetCategory: 'Medium',
    budgetMin: 10000,
    budgetMax: 50000,
    timeline: '3 months',
    platform: 'Web',
    problem: 'Users waste time finding trusted local services.',
  });

  assert.equal(saveHistoryMock.mock.callCount(), 1);
  assert.equal(res.statusCode, 200);
  assert.equal(res.payload.success, true);
  assert.equal(res.payload.message, 'Startup idea analysis generated successfully');
  assert.equal(res.payload.data.score, 7.8);
});
