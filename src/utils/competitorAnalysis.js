import { getOpenAIClient, getOpenAIModel } from './openai.js';

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
  'tool',
  'platform',
  'service',
  'users',
  'user',
  'startup',
  'idea',
]);

const fallbackCompetitorMap = [
  {
    keywords: ['food delivery', 'restaurant delivery', 'meal delivery', 'cloud kitchen'],
    competitors: [
      { name: 'Swiggy', description: 'Indian food delivery and quick commerce platform.', region: 'India' },
      { name: 'Zomato', description: 'Restaurant discovery and food delivery platform.', region: 'India' },
      { name: 'Uber Eats', description: 'Global food delivery marketplace integrated with Uber.', region: 'Global' },
    ],
  },
  {
    keywords: ['freelance', 'freelancer', 'gig work', 'gig marketplace'],
    competitors: [
      { name: 'Fiverr', description: 'Global freelance services marketplace with packaged gigs.', region: 'Global' },
      { name: 'Upwork', description: 'Freelance hiring platform for businesses and independent professionals.', region: 'Global' },
      { name: 'Flexing It', description: 'Indian consulting and freelance talent platform.', region: 'India' },
    ],
  },
  {
    keywords: ['ride sharing', 'ride hailing', 'cab booking', 'taxi app'],
    competitors: [
      { name: 'Uber', description: 'Global ride hailing and mobility platform.', region: 'Global' },
      { name: 'Ola', description: 'Indian ride hailing and mobility platform.', region: 'India' },
      { name: 'Rapido', description: 'Bike taxi and mobility platform expanding across India.', region: 'India' },
    ],
  },
  {
    keywords: ['edtech', 'online learning', 'test prep', 'course platform'],
    competitors: [
      { name: 'BYJU’S', description: 'Indian digital learning platform for school and test prep.', region: 'India' },
      { name: 'Unacademy', description: 'Online learning and exam preparation platform.', region: 'India' },
      { name: 'Coursera', description: 'Global online learning marketplace with professional courses.', region: 'Global' },
    ],
  },
  {
    keywords: ['telemedicine', 'health consultation', 'doctor booking', 'healthtech'],
    competitors: [
      { name: 'Practo', description: 'Doctor discovery, consultation, and health records platform.', region: 'India' },
      { name: 'Tata 1mg', description: 'Digital health platform for medicine delivery and consultation.', region: 'India' },
      { name: 'Teladoc', description: 'Global virtual care and telehealth company.', region: 'Global' },
    ],
  },
  {
    keywords: ['crm', 'sales automation', 'lead management'],
    competitors: [
      { name: 'Salesforce', description: 'Global CRM and sales workflow platform.', region: 'Global' },
      { name: 'HubSpot', description: 'CRM and marketing automation suite for growing teams.', region: 'Global' },
      { name: 'Freshsales', description: 'CRM platform from Freshworks with strong SMB focus.', region: 'Global' },
    ],
  },
  {
    keywords: ['ai tool', 'ai assistant', 'productivity ai', 'writing assistant'],
    competitors: [
      { name: 'ChatGPT', description: 'General-purpose AI assistant used across productivity workflows.', region: 'Global' },
      { name: 'Claude', description: 'AI assistant focused on writing, reasoning, and workflow support.', region: 'Global' },
      { name: 'Jasper', description: 'AI writing and content generation platform for teams.', region: 'Global' },
    ],
  },
  {
    keywords: ['payments', 'payment gateway', 'checkout', 'fintech'],
    competitors: [
      { name: 'Razorpay', description: 'Indian payments and banking platform for businesses.', region: 'India' },
      { name: 'Cashfree', description: 'Indian payment gateway and payouts platform.', region: 'India' },
      { name: 'Stripe', description: 'Global online payments infrastructure platform.', region: 'Global' },
    ],
  },
];

const extractKeywords = ({ idea, targetAudience, problem, keywords = [] }) => {
  if (Array.isArray(keywords) && keywords.length) {
    return keywords.slice(0, 5);
  }

  return [...new Set([...splitWords(idea), ...splitWords(targetAudience), ...splitWords(problem)])]
    .filter((word) => word.length > 3 && !stopWords.has(word))
    .slice(0, 5);
};

const findFallbackCompetitors = ({ idea, targetAudience, problem, keywords }) => {
  const corpus = `${idea} ${targetAudience} ${problem}`.toLowerCase();
  const matched = fallbackCompetitorMap.find((entry) =>
    entry.keywords.some((keyword) => corpus.includes(keyword) || keywords.some((item) => keyword.includes(item) || item.includes(keyword)))
  );

  if (matched) {
    return matched.competitors.slice(0, 5);
  }

  return [
    {
      name: 'Generic incumbents',
      description: 'Broad horizontal products may already serve part of this use case.',
      region: /india|indian|bengaluru|mumbai|delhi|hyderabad|pune|chennai|kolkata/i.test(corpus) ? 'India' : 'Global',
    },
    {
      name: 'Manual alternatives',
      description: 'Many users may still rely on spreadsheets, agencies, or offline workflows.',
      region: 'Local / Existing workflow',
    },
  ];
};

const getSaturationLevel = ({ competitorCount, keywords = [] }) => {
  let effectiveCount = competitorCount;

  if (keywords.some((keyword) => /marketplace|ai|tool|delivery|crm|payments|edtech/i.test(keyword))) {
    effectiveCount += 1;
  }

  if (effectiveCount >= 4) return 'High';
  if (effectiveCount >= 2) return 'Moderate';
  return 'Low';
};

const buildGapInsight = ({ targetAudience, location, problem, saturation, competitors }) => {
  const lowerAudience = targetAudience.toLowerCase();
  const lowerLocation = location.toLowerCase();
  const lowerProblem = problem.toLowerCase();

  if (/india|indian|bengaluru|mumbai|delhi|hyderabad|pune|chennai|kolkata/i.test(lowerLocation)) {
    return 'Many existing products are still broad or global-first. There may be room for a more localized experience, pricing model, or go-to-market tailored to Indian users.';
  }

  if (/student|freelancer|creator|doctor|lawyer|designer|restaurant|sme|small business|founder/i.test(lowerAudience)) {
    return `Most competitors likely serve a wider market. There may be a niche wedge in building specifically for ${targetAudience}.`;
  }

  if (/expensive|costly|price|pricing|afford/i.test(lowerProblem)) {
    return 'Pricing innovation looks like a possible wedge here. If current alternatives are expensive, a simpler or more affordable offer could stand out.';
  }

  if (/slow|delay|manual|trust|verification|local/i.test(lowerProblem)) {
    return 'A faster, more trusted, or operationally local experience could be the gap. Existing products may solve the category broadly without solving this exact pain well.';
  }

  if (saturation === 'High') {
    return `The market looks crowded with players like ${competitors.slice(0, 2).map((item) => item.name).join(' and ')}. A sharper niche, better workflow, or geographic focus is likely the strongest opening.`;
  }

  return 'The category still appears open to sharper positioning. A focused audience, simpler workflow, or stronger local distribution could create a meaningful gap.';
};

const competitorResponseFormat = {
  type: 'json_schema',
  name: 'competitor_insights',
  strict: true,
  schema: {
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
      gap: {
        type: 'string',
      },
    },
    required: ['competitors', 'gap'],
  },
};

const analyzeCompetitorsWithOpenAI = async ({ idea, targetAudience, location, problem, keywords }) => {
  const client = getOpenAIClient();
  if (!client) return null;

  const response = await client.responses.create({
    model: getOpenAIModel(),
    input: [
      {
        role: 'system',
        content: [
          {
            type: 'input_text',
            text:
              'You are a startup market analyst. Return only JSON matching the provided schema. Identify 3 to 5 real or highly plausible competitors, include concise descriptions, include region like India or Global, and provide one short market gap insight.',
          },
        ],
      },
      {
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: `Startup idea: ${idea}
Target audience: ${targetAudience}
Location: ${location}
Problem: ${problem}
Keywords: ${keywords.join(', ')}

Return similar startups, direct competitors, or adjacent products that users would compare against.`,
          },
        ],
      },
    ],
    text: {
      format: competitorResponseFormat,
    },
  });

  if (!response.output_text) {
    throw new Error('OpenAI returned empty competitor analysis');
  }

  return JSON.parse(response.output_text);
};

const normalizeCompetitors = (competitors = []) =>
  competitors
    .filter((item) => item?.name)
    .slice(0, 5)
    .map((item) => ({
      name: String(item.name).trim(),
      description: String(item.description || 'Similar product in this category.').trim(),
      region: String(item.region || 'Global').trim(),
    }));

const analyzeCompetitorInsights = async ({ idea, targetAudience, location, problem, keywords }) => {
  const keywordList = extractKeywords({ idea, targetAudience, problem, keywords });
  let competitors = [];
  let gap = '';

  try {
    const aiResult = await analyzeCompetitorsWithOpenAI({
      idea,
      targetAudience,
      location,
      problem,
      keywords: keywordList,
    });

    competitors = normalizeCompetitors(aiResult?.competitors);
    gap = String(aiResult?.gap || '').trim();
  } catch (_error) {
    // Fall through to fast internal mapping.
  }

  if (!competitors.length) {
    competitors = findFallbackCompetitors({
      idea,
      targetAudience,
      problem,
      keywords: keywordList,
    });
  }

  const saturation = getSaturationLevel({
    competitorCount: competitors.length,
    keywords: keywordList,
  });

  if (!gap) {
    gap = buildGapInsight({
      targetAudience,
      location,
      problem,
      saturation,
      competitors,
    });
  }

  return {
    competitors,
    saturation,
    gap,
  };
};

export { analyzeCompetitorInsights };
