import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { idea } = req.body;
  if (!idea) {
    return res.status(400).json({ error: 'Idea is required' });
  }

  const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
  const openai = new OpenAIApi(configuration);

  const prompt = `
You're an expert in startup ideation. Given the idea below, return 5 related startup ideas, each with a one-sentence description.

Input Idea: "${idea}"
`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    });

    const response = completion.data.choices[0].message.content;
    res.status(200).json({ idea, related_ideas: response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to find related ideas' });
  }
}