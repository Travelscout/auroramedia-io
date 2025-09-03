import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Nachricht ist erforderlich' },
        { status: 400 }
      );
    }

    // Use environment variable for API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'Du bist ein KI-Assistent von AuroraMedia.io, einer KI-Agentur aus Düsseldorf. Antworte freundlich und professionell auf Fragen über KI-Agenten, Chatbots und Automatisierung. Halte die Antworten kurz und prägnant.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 300,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error('OpenAI API request failed');
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || 'Entschuldigung, ich konnte Ihre Anfrage nicht verarbeiten.';

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('AI Preview API Fehler:', error);
    
    // Fallback response
    const fallbackResponse = `Vielen Dank für Ihre Nachricht.

Ich bin der AI-Assistent von AuroraMedia.io, einer KI-Agentur aus Düsseldorf. 

Unsere Spezialitäten:
🤖 Voicebots und Chatbots
📊 RAG-Systeme für Wissensmanagement  
🔗 CRM-Integration
🏥 Besonders für Ärzte, Kliniken und KMU
🔒 DSGVO-konform und lokale Lösungen

Für eine persönliche Beratung kontaktieren Sie uns:
📧 info@auroramedia.io
📞 +49 (0) 123 456 789`;

    return NextResponse.json({ reply: fallbackResponse });
  }
}
