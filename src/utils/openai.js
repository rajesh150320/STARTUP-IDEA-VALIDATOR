import OpenAI from 'openai';

let clientInstance = null;

const getOpenAIClient = () => {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  if (!clientInstance) {
    clientInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  return clientInstance;
};

const getOpenAIModel = () => process.env.OPENAI_MODEL || 'gpt-5-mini';

export { getOpenAIClient, getOpenAIModel };
