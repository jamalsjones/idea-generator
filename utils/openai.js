import { Configuration, OpenAIApi } from 'openai';

let openaiInstance = null;

export function getOpenAIClient() {
  if (!openaiInstance) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("❌ OPENAI_API_KEY is missing from environment variables.");
    }

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    });

    openaiInstance = new OpenAIApi(configuration);
  }

  return openaiInstance;
}