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

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY not found');
      return NextResponse.json(
        { error: 'API-Konfiguration fehlt' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `Du bist ein AI-Assistent für AuroraMedia.io, eine KI-Agentur aus Düsseldorf. 

Deine Aufgabe:
- Beantworte Fragen zu KI-Agenten, Automatisierung und digitalen Lösungen
- Fokus auf Voicebots, RAG-Systeme, CRM-Integration
- Besonders für Ärzte, Kliniken und KMU
- Immer DSGVO-konform und lokale Lösung betonen
- Freundlich, professionell und lösungsorientiert

Angebote:
- Aurora Start (199€): Basis-Automatisierung für kleine Praxen
- Aurora Scale (499€): Erweiterte KI mit Intent-Erkennung
- Aurora Enterprise: Individuelle Lösungen

Antworte auf Deutsch und halte es prägnant (max. 3 Sätze).`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API Fehler: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Entschuldigung, ich konnte keine Antwort generieren.';

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('AI Demo API Fehler:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
