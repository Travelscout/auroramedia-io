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

    // Fallback response when API key is not available
    const fallbackResponse = `Vielen Dank für Ihre Nachricht: "${message}".

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

  } catch (error) {
    console.error('AI Demo API Fehler:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}