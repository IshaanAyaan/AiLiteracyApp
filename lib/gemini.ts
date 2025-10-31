const API_BASE = 'https://generativelanguage.googleapis.com/v1beta';

export async function callGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set.');
  }

  const configuredModel = process.env.GEMINI_MODEL ?? 'models/gemini-1.5-flash';
  const modelPath = configuredModel.startsWith('models/') ? configuredModel : `models/${configuredModel}`;
  const url = `${API_BASE}/${modelPath}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  const data = (await response.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{ text?: string }>;
      };
    }>;
  };

  const text = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text ?? '')
    .join('\n')
    .trim();

  if (!text) {
    throw new Error('Gemini API returned no text.');
  }

  return text;
}
