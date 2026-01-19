import { NextRequest, NextResponse } from "next/server";

/**
 * Cron-Job Route für automatisches Scraping der Zinsdaten
 * 
 * Wird automatisch von Vercel Cron Jobs ausgeführt (vercel.json Konfiguration)
 * Oder kann manuell aufgerufen werden mit dem Secret-Token
 */
export async function GET(request: NextRequest) {
  try {
    // Prüfe Authorization Header für manuellen Aufruf
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;
    
    // Wenn CRON_SECRET gesetzt ist, prüfe Authorization
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      // Für Vercel Cron: Prüfe auf Vercel-Cron-Request Header
      const vercelCron = request.headers.get("x-vercel-cron");
      if (!vercelCron) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        );
      }
    }
    
    // Rufe den Scraper-Endpoint auf
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                    'http://localhost:3000';
    
    const scrapeResponse = await fetch(`${baseUrl}/api/zinsen/scrape`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!scrapeResponse.ok) {
      const errorData = await scrapeResponse.json().catch(() => ({}));
      throw new Error(errorData.error || `Scraper returned ${scrapeResponse.status}`);
    }
    
    const scrapeData = await scrapeResponse.json();
    
    return NextResponse.json({
      success: true,
      message: "Zinsdaten erfolgreich aktualisiert",
      scrapedAt: new Date().toISOString(),
      data: scrapeData,
    });
    
  } catch (error) {
    console.error("Fehler im Cron-Job:", error);
    return NextResponse.json(
      { 
        error: "Fehler beim automatischen Scraping",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
