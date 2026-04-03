const normalizeNumber = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const clampScore = (value) => Math.max(1, Math.min(10, Math.round(value * 10) / 10));

const splitWords = (value = '') =>
  value
    .toLowerCase()
    .split(/[^a-z0-9+/-]+/i)
    .filter(Boolean);

const hasAnyPhrase = (value = '', phrases = []) => {
  const lower = value.toLowerCase();
  return phrases.some((phrase) => lower.includes(phrase));
};

const ratioScore = (value, thresholds) => {
  for (const [threshold, score] of thresholds) {
    if (value >= threshold) return score;
  }

  return thresholds[thresholds.length - 1][1];
};

const weightedAverage = (parts) => {
  const totalWeight = parts.reduce((sum, part) => sum + part.weight, 0);
  const totalScore = parts.reduce((sum, part) => sum + part.score * part.weight, 0);
  return clampScore(totalScore / totalWeight);
};

const getSignalScores = ({
  idea,
  targetAudience,
  problem,
  platform,
  location,
  budgetCategory,
  budgetMin,
  budgetMax,
  timeline,
}) => {
  const ideaWords = splitWords(idea);
  const audienceWords = splitWords(targetAudience);
  const problemWords = splitWords(problem);
  const platformLower = platform.toLowerCase();
  const locationLower = location.toLowerCase();
  const budgetLower = budgetCategory.toLowerCase();
  const timelineLower = timeline.toLowerCase();

  const ideaClarity =
    ratioScore(ideaWords.length, [
      [10, 9],
      [7, 8],
      [5, 7],
      [3, 5.5],
      [0, 4],
    ]) +
    (hasAnyPhrase(idea, ['for ', 'marketplace', 'platform', 'tool', 'assistant', 'app']) ? 0.5 : 0);

  const audienceFocus =
    ratioScore(audienceWords.length, [
      [7, 8.5],
      [5, 7.5],
      [3, 6.5],
      [1, 5],
      [0, 4],
    ]) -
    (hasAnyPhrase(targetAudience, ['everyone', 'all users', 'all businesses', 'anyone']) ? 2 : 0);

  const problemUrgency =
    ratioScore(problemWords.length, [
      [25, 8.5],
      [18, 7.5],
      [12, 6.5],
      [8, 5.5],
      [0, 4],
    ]) +
    (hasAnyPhrase(problem, ['lose', 'delay', 'waste', 'urgent', 'expensive', 'stress', 'slow']) ? 1 : 0);

  const distributionFocus =
    hasAnyPhrase(locationLower, ['global', 'worldwide']) || hasAnyPhrase(locationLower, ['remote', 'pan-india'])
      ? 5.5
      : 8;

  const channelComplexity =
    hasAnyPhrase(platformLower, ['web + mobile']) || (platformLower.includes('ios') && platformLower.includes('android'))
      ? 5.5
      : hasAnyPhrase(platformLower, ['web', 'mobile', 'whatsapp'])
        ? 8
        : 6.5;

  const budgetStrength =
    ratioScore(budgetMax, [
      [500000, 9],
      [250000, 8],
      [100000, 7],
      [50000, 6],
      [0, 4.5],
    ]) + (budgetLower === 'high' ? 0.5 : budgetLower === 'low' ? -0.5 : 0);

  const timelineRealism =
    hasAnyPhrase(timelineLower, ['4 week', '1 month']) ? 5.5 :
    hasAnyPhrase(timelineLower, ['6 week', '2 month', '3 month']) ? 8 :
    hasAnyPhrase(timelineLower, ['6 month']) ? 7 :
    6.5;

  return {
    ideaClarity: clampScore(ideaClarity),
    audienceFocus: clampScore(audienceFocus),
    problemUrgency: clampScore(problemUrgency),
    distributionFocus: clampScore(distributionFocus),
    channelComplexity: clampScore(channelComplexity),
    budgetStrength: clampScore(budgetStrength),
    timelineRealism: clampScore(timelineRealism),
  };
};

const getMarketDemandScore = (input, trendSignals = null) => {
  const signals = getSignalScores(input);
  const trendScore = trendSignals?.averageInterest ? trendSignals.averageInterest : 6;

  const baseScore = weightedAverage([
    { score: signals.problemUrgency, weight: 0.45 },
    { score: signals.audienceFocus, weight: 0.35 },
    { score: signals.distributionFocus, weight: 0.2 },
  ]);

  return clampScore(baseScore + (trendSignals?.demandBoost || 0) + (trendScore - 6) * 0.15);
};

const explainMarketDemandMetric = (input, trendSignals, score) => {
  const signals = getSignalScores(input);
  const reasons = [];

  if (signals.problemUrgency >= 7) reasons.push('the problem feels urgent');
  else if (signals.problemUrgency <= 5.5) reasons.push('the pain point still feels soft');

  if (signals.audienceFocus >= 7) reasons.push('the target audience is clearly defined');
  else if (signals.audienceFocus <= 5.5) reasons.push('the target audience is still broad');

  if (trendSignals?.source === 'google_trends' && trendSignals.averageInterest !== null) {
    if (trendSignals.averageInterest >= 7) reasons.push('Google Trends shows strong search interest');
    else if (trendSignals.averageInterest <= 4.5) reasons.push('live search demand looks limited');
  }

  const lead =
    score >= 7.5 ? 'Market demand scored high because ' :
    score >= 6 ? 'Market demand scored in the middle because ' :
    'Market demand scored lower because ';

  return `${lead}${reasons.slice(0, 3).join(', ')}.`;
};

const analyzeMarketDemand = (input, trendSignals = null) => {
  const score = getMarketDemandScore(input, trendSignals);

  if (score >= 7.5) {
    return 'Strong demand potential if the problem is urgent and repeatedly felt by the target audience.';
  }

  if (score >= 6) {
    return 'Moderate demand potential. The idea looks promising, but demand should be validated with early user interviews.';
  }

  return 'Demand is uncertain right now. The idea needs sharper positioning and stronger evidence that users actively want a solution.';
};

const getCompetitionScore = (input) => {
  const signals = getSignalScores(input);

  return clampScore(
    weightedAverage([
      { score: 11 - signals.audienceFocus, weight: 0.45 },
      { score: 11 - signals.distributionFocus, weight: 0.2 },
      { score: 11 - signals.ideaClarity, weight: 0.2 },
      { score: 11 - signals.channelComplexity, weight: 0.15 },
    ])
  );
};

const explainCompetitionMetric = (input, score) => {
  const signals = getSignalScores(input);
  const reasons = [];

  if (signals.audienceFocus >= 7.5) reasons.push('a sharper niche reduces direct rivalry');
  else reasons.push('a broad audience increases the chance of crowded competitors');

  if (signals.distributionFocus >= 7) reasons.push('a focused launch market gives you a clearer wedge');
  else reasons.push('a wide launch market makes differentiation harder');

  if (signals.ideaClarity >= 7.5) reasons.push('the idea has some differentiation');
  else reasons.push('the value proposition still overlaps with common products');

  const lead =
    score >= 7 ? 'Competition risk scored high because ' :
    score >= 5 ? 'Competition risk scored moderate because ' :
    'Competition risk scored lower because ';

  return `${lead}${reasons.slice(0, 3).join(', ')}.`;
};

const analyzeCompetition = (input) => {
  const score = getCompetitionScore(input);

  if (score >= 7) {
    return 'Competition is likely high. Similar solutions probably exist, so differentiation and niche focus will matter a lot.';
  }

  if (score >= 5) {
    return 'Competition is moderate. There is room to enter if the product experience or positioning is more specific.';
  }

  return 'Competition may be manageable, especially if you target an underserved niche or local use case.';
};

const buildRoast = ({
  idea,
  targetAudience,
  marketDemandText,
  competitionScore,
  ideaClarityScore,
}) => {
  const lowerAudience = targetAudience.toLowerCase();
  const lowerIdea = idea.toLowerCase();
  const lowerDemand = marketDemandText.toLowerCase();

  if (/everyone|all users|anyone|all businesses|students|professionals/.test(lowerAudience)) {
    return 'You are still targeting everyone, which usually means no one feels this product is truly built for them. Pick a smaller wedge or this idea will disappear into the noise.';
  }

  if (competitionScore >= 7.5) {
    return 'This space already looks crowded, so a vague "better experience" pitch will not be enough. Strong competitors likely own the market while you are still describing a generic wrapper around existing products.';
  }

  if (ideaClarityScore <= 5.5) {
    return 'Right now this reads more like a category than a startup. If you cannot explain the wedge in one sharp sentence, users and investors will assume it is just another copycat idea.';
  }

  if (lowerDemand.includes('uncertain') || lowerDemand.includes('needs sharper positioning')) {
    return 'The painful truth is that this may be a founder-interest idea more than a user-need idea. If demand is still fuzzy, building fast just means you will learn expensively.';
  }

  if (/ai|assistant|platform|marketplace|app|tool/.test(lowerIdea) && ideaClarityScore < 7) {
    return 'This sounds dangerously close to "AI + common category = startup." Unless the wedge is painfully specific, the market will treat it like another generic product with a fresh landing page.';
  }

  return 'The idea is not terrible, but it is still easier to describe than to defend. If you cannot prove why this must exist now and for this exact niche, stronger founders will beat you on execution.';
};

const getFeasibilityScore = (input) => {
  const signals = getSignalScores(input);

  return weightedAverage([
    { score: signals.budgetStrength, weight: 0.4 },
    { score: signals.timelineRealism, weight: 0.3 },
    { score: signals.channelComplexity, weight: 0.2 },
    { score: signals.ideaClarity, weight: 0.1 },
  ]);
};

const explainFeasibilityMetric = (input, score) => {
  const signals = getSignalScores(input);
  const reasons = [];

  if (signals.budgetStrength >= 7) reasons.push('the stated budget can support an MVP');
  else reasons.push('the budget looks tight for the current scope');

  if (signals.timelineRealism >= 7) reasons.push('the timeline looks realistic');
  else reasons.push('the timeline feels aggressive');

  if (signals.channelComplexity >= 7) reasons.push('the platform scope is reasonably focused');
  else reasons.push('the platform scope adds execution complexity');

  const lead =
    score >= 7 ? 'Feasibility scored high because ' :
    score >= 5 ? 'Feasibility scored moderate because ' :
    'Feasibility scored lower because ';

  return `${lead}${reasons.slice(0, 3).join(', ')}.`;
};

const analyzeFeasibility = (input) => {
  const score = getFeasibilityScore(input);

  if (score >= 7) return 'Feasibility is good for an MVP. The scope appears realistic if you stay focused on one core workflow first.';
  if (score >= 5) return 'Feasibility is fair. You can build this, but the MVP should avoid extra features and keep execution tight.';
  return 'Feasibility is currently weak. The idea may need a smaller first version, more budget, or a longer timeline.';
};

const buildSuggestions = ({
  targetAudience,
  budgetCategory,
  platform,
  location,
  timeline,
}) => {
  return [
    `Interview 10-15 ${targetAudience || 'target'} users before building to validate the biggest pain point.`,
    `Start with a focused ${platform || 'digital'} MVP instead of a full product suite.`,
    `Design pricing around a ${budgetCategory || 'realistic'} budget and test willingness to pay early.`,
    `Launch with one narrow market in ${location || 'your initial market'} before expanding wider.`,
    `Use the first ${timeline || 'few months'} to measure retention, referrals, and conversion instead of just signups.`,
  ];
};

const buildMvpSuggestions = ({
  idea,
  targetAudience,
  problem,
  platform,
}) => {
  const lowerIdea = idea.toLowerCase();
  const lowerAudience = targetAudience.toLowerCase();
  const lowerProblem = problem.toLowerCase();
  const lowerPlatform = platform.toLowerCase();

  const features = [];

  if (/user|customer|buyer|seller|freelancer|creator|student|doctor|founder|business/i.test(lowerAudience)) {
    features.push('User sign up and login for the primary user flow');
  }

  if (/marketplace|booking|delivery|match|hire|connect|discover/i.test(lowerIdea + lowerProblem)) {
    features.push('Core search, discovery, or matching workflow that solves the main user problem');
  } else if (/dashboard|analytics|tracking|manage/i.test(lowerIdea + lowerProblem)) {
    features.push('A focused dashboard showing the single most important user outcome');
  } else {
    features.push('The core workflow that proves the product solves the main pain point');
  }

  if (/web|mobile|app|platform|dashboard/i.test(lowerPlatform)) {
    features.push(`A simple ${platform || 'product'} interface for completing the main action in as few steps as possible`);
  }

  if (/payment|subscription|pricing|pay|charge|commission/i.test(lowerIdea + lowerProblem)) {
    features.push('Basic payment or subscription flow only if charging is central to validation');
  }

  if (/admin|ops|verification|review|approve|vendor|provider/i.test(lowerIdea + lowerProblem)) {
    features.push('Lightweight admin panel for approvals, moderation, or operational oversight');
  }

  features.push('Feedback capture with basic analytics to learn from early users');

  return [...new Set(features)].slice(0, 6);
};

const calculateScore = ({
  idea,
  location,
  problem,
  targetAudience,
  budgetCategory,
  budgetMin,
  budgetMax,
  timeline,
  platform,
}) => {
  const signals = getSignalScores({
    idea,
    location,
    targetAudience,
    problem,
    platform,
    budgetCategory,
    budgetMin,
    budgetMax,
    timeline,
  });

  return weightedAverage([
    { score: signals.ideaClarity, weight: 0.15 },
    { score: signals.audienceFocus, weight: 0.15 },
    { score: signals.problemUrgency, weight: 0.2 },
    { score: signals.distributionFocus, weight: 0.1 },
    { score: signals.channelComplexity, weight: 0.1 },
    { score: signals.budgetStrength, weight: 0.15 },
    { score: signals.timelineRealism, weight: 0.15 },
  ]);
};

const buildRuleBasedResponse = ({
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
}) => {
  const baseInput = {
    idea,
    location,
    targetAudience,
    problem,
    platform,
    budgetCategory,
    budgetMin,
    budgetMax,
    timeline,
  };

  const marketDemandText = analyzeMarketDemand(baseInput, trendSignals);
  const metrics = {
    marketDemand: getMarketDemandScore(baseInput, trendSignals),
    competition: getCompetitionScore(baseInput),
    feasibility: getFeasibilityScore(baseInput),
  };

  const metricExplanations = {
    marketDemand: explainMarketDemandMetric(baseInput, trendSignals, metrics.marketDemand),
    competition: explainCompetitionMetric(baseInput, metrics.competition),
    feasibility: explainFeasibilityMetric(baseInput, metrics.feasibility),
  };

  return {
    marketDemand: marketDemandText,
    competition: analyzeCompetition(baseInput),
    feasibility: analyzeFeasibility(baseInput),
    suggestions: buildSuggestions({
      targetAudience,
      budgetCategory,
      platform,
      location,
      timeline,
    }),
    mvpSuggestions: buildMvpSuggestions({
      idea,
      targetAudience,
      problem,
      platform,
    }),
    score: calculateScore({
      idea,
      location,
      problem,
      targetAudience,
      budgetCategory,
      budgetMin,
      budgetMax,
      timeline,
      platform,
    }),
    metrics,
    metricExplanations,
    roast: buildRoast({
      idea,
      targetAudience,
      marketDemandText,
      competitionScore: metrics.competition,
      ideaClarityScore: getSignalScores(baseInput).ideaClarity,
    }),
    marketSignals: {
      keywords: trendSignals?.keywords || [],
      source: trendSignals?.source || 'fallback',
      averageInterest: trendSignals?.averageInterest,
      trendSummary: trendSignals?.trendSummary || 'Market signal data unavailable.',
      trendTimeline: trendSignals?.trendTimeline || [],
      topRegions: trendSignals?.topRegions || [],
    },
  };
};

export {
  analyzeCompetition,
  analyzeFeasibility,
  analyzeMarketDemand,
  buildMvpSuggestions,
  buildRoast,
  buildRuleBasedResponse,
  buildSuggestions,
  calculateScore,
  clampScore,
  explainCompetitionMetric,
  explainFeasibilityMetric,
  explainMarketDemandMetric,
  getCompetitionScore,
  getFeasibilityScore,
  getMarketDemandScore,
  getSignalScores,
  normalizeNumber,
};
