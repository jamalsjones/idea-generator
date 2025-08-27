import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { idea } = req.body;
  if (!idea || typeof idea !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid idea text' });
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });

  const openai = new OpenAIApi(configuration);

  const prompt = `
You are a creative strategist helping entrepreneurs brainstorm business ideas.

Expand on the following idea with:
- 3 business models
- 3 technical approaches
- 3 potential user personas

Idea: "${idea}"
`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });

    const responseText = completion.data.choices[0].message.content;

    res.status(200).json({
      input: idea,
      expansion: responseText.trim()
    });

  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to generate expansion' });
  }
}