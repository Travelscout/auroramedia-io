import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Nachricht ist erforderlich" }, { status: 400 });
    }

    // Fallback response when API key is not available
    const fallbackResponse = `Vielen Dank für Ihre Nachricht: "${message}". 

Unser KI-Assistent ist derzeit in der Einrichtung. Für eine persönliche Beratung kontaktieren Sie uns gerne direkt:

📧 E-Mail: info@auroramedia.io
📞 Telefon: +49 (0) 123 456 789
💬 Kontaktformular: /kontakt

Wir freuen uns auf Ihre Anfrage!`;

    return NextResponse.json({ 
      reply: fallbackResponse, 
      sources: [] 
    });
  } catch {
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}