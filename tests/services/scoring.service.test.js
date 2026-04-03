import assert from 'node:assert/strict';
import test from 'node:test';

import { buildRuleBasedResponse } from '../../src/services/scoring.service.js';

test('buildRuleBasedResponse returns a complete MVP-oriented fallback payload', () => {
  const result = buildRuleBasedResponse({
    idea: 'AI marketplace for local service booking and payments',
    location: 'Bhubaneswar, Odisha',
    targetAudience: 'Busy working professionals',
    budgetCategory: 'Medium',
    budgetMin: 50000,
    budgetMax: 200000,
    timeline: '3 months',
    platform: 'Web + Mobile',
    problem: 'People struggle to compare, book, and pay trusted local service providers quickly and end up wasting time.',
    trendSignals: {
      keywords: ['service marketplace', 'provider booking'],
      source: 'fallback',
      averageInterest: null,
      trendSummary: 'Fallback trend summary',
      trendTimeline: [],
      topRegions: [],
    },
  });

  assert.equal(typeof result.marketDemand, 'string');
  assert.equal(typeof result.competition, 'string');
  assert.equal(typeof result.feasibility, 'string');
  assert.equal(Array.isArray(result.suggestions), true);
  assert.equal(Array.isArray(result.mvpSuggestions), true);
  assert.equal(Array.isArray(result.marketSignals.keywords), true);
  assert.equal(typeof result.metrics.marketDemand, 'number');
  assert.equal(typeof result.roast, 'string');
  assert.ok(result.mvpSuggestions.length >= 4 && result.mvpSuggestions.length <= 6);
});
