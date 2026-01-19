import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { interestRates } from "@/db/schema/other";
import { eq, desc, and, gte } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const period = searchParams.get("period"); // Optional: Filter nach Zinsbindung (10, 15, 20)
    const loanToValue = searchParams.get("ltv"); // Optional: Filter nach Beleihungsauslauf (70, 80, 90)
    const days = parseInt(searchParams.get("days") || "365"); // Anzahl Tage zurück (Standard: 1 Jahr)
    
    // Berechne das Startdatum
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    startDate.setHours(0, 0, 0, 0); // Setze auf Mitternacht für konsistente Vergleiche
    
    // Baue die Bedingungen für die Query auf
    const conditions = [
      gte(interestRates.rateDate, startDate),
      eq(interestRates.source, "interhyp")
    ];
    
    if (period) {
      conditions.push(eq(interestRates.interestPeriod, parseInt(period)));
    }
    
    if (loanToValue) {
      conditions.push(eq(interestRates.loanToValue, parseInt(loanToValue)));
    }
    
    // Führe die Query aus - mit try-catch für den Fall, dass die Tabelle noch nicht existiert
    let rates;
    try {
      rates = await db
        .select()
        .from(interestRates)
        .where(and(...conditions))
        .orderBy(desc(interestRates.rateDate), desc(interestRates.createdAt));
    } catch (dbError: any) {
      // Wenn die Tabelle nicht existiert, gib leere Daten zurück
      if (dbError?.message?.includes("does not exist") || dbError?.code === "42P01") {
        console.log("Tabelle interest_rates existiert noch nicht. Bitte Migration ausführen.");
        return NextResponse.json({
          success: true,
          chartData: [],
          tableData: [],
          latestDate: null,
          totalRecords: 0,
          message: "Keine Daten vorhanden. Bitte Migration ausführen und Scraper starten."
        });
      }
      throw dbError;
    }
    
    // Gruppiere nach Datum für das Chart
    const groupedByDate: Record<string, {
      datum: string;
      zins10?: number;
      zins15?: number;
      zins20?: number;
    }> = {};
    
    rates.forEach(rate => {
      const dateKey = new Date(rate.rateDate).toISOString().split('T')[0];
      if (!groupedByDate[dateKey]) {
        groupedByDate[dateKey] = {
          datum: new Date(rate.rateDate).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' })
        };
      }
      
      // Verwende den Wert für Beleihungsauslauf 80% als Standard für das Chart
      if (rate.loanToValue === 80 && rate.annualPercentageRate) {
        const rateValue = parseFloat(String(rate.annualPercentageRate));
        if (!isNaN(rateValue)) {
          if (rate.interestPeriod === 10) {
            groupedByDate[dateKey].zins10 = rateValue;
          } else if (rate.interestPeriod === 15) {
            groupedByDate[dateKey].zins15 = rateValue;
          } else if (rate.interestPeriod === 20) {
            groupedByDate[dateKey].zins20 = rateValue;
          }
        }
      }
    });
    
    // Konvertiere zu Array und sortiere nach Datum
    const chartData = Object.values(groupedByDate).sort((a, b) => {
      try {
        // Versuche das Datum zu parsen
        const dateA = new Date(a.datum);
        const dateB = new Date(b.datum);
        if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
          return dateA.getTime() - dateB.getTime();
        }
        // Fallback: Versuche manuelles Parsen
        const partsA = a.datum.split(' ');
        const partsB = b.datum.split(' ');
        if (partsA.length >= 2 && partsB.length >= 2) {
          const dateA2 = new Date(partsA[1] + ' ' + partsA[0]);
          const dateB2 = new Date(partsB[1] + ' ' + partsB[0]);
          return dateA2.getTime() - dateB2.getTime();
        }
      } catch (e) {
        // Bei Fehler: Behalte die ursprüngliche Reihenfolge
      }
      return 0;
    });
    
    // Hole die aktuellsten Zinssätze für die Tabelle
    const latestDate = rates.length > 0 ? rates[0].rateDate : null;
    const latestRates = latestDate
      ? await db
          .select()
          .from(interestRates)
          .where(
            and(
              eq(interestRates.rateDate, latestDate),
              eq(interestRates.source, "interhyp")
            )
          )
          .orderBy(interestRates.interestPeriod, interestRates.loanToValue)
      : [];
    
    // Formatiere für die Tabelle
    const formatRate = (rate: string | null | undefined): string => {
      if (!rate) return "N/A";
      const numRate = typeof rate === 'string' ? rate : String(rate);
      // Entferne führende/trailing Leerzeichen und formatiere
      return numRate.trim();
    };
    
    const tableData = [
      {
        zinsbindung: "10 Jahre",
        beleihung70: formatRate(latestRates.find(r => r.interestPeriod === 10 && r.loanToValue === 70)?.annualPercentageRate),
        beleihung80: formatRate(latestRates.find(r => r.interestPeriod === 10 && r.loanToValue === 80)?.annualPercentageRate),
        beleihung90: formatRate(latestRates.find(r => r.interestPeriod === 10 && r.loanToValue === 90)?.annualPercentageRate),
      },
      {
        zinsbindung: "15 Jahre",
        beleihung70: formatRate(latestRates.find(r => r.interestPeriod === 15 && r.loanToValue === 70)?.annualPercentageRate),
        beleihung80: formatRate(latestRates.find(r => r.interestPeriod === 15 && r.loanToValue === 80)?.annualPercentageRate),
        beleihung90: formatRate(latestRates.find(r => r.interestPeriod === 15 && r.loanToValue === 90)?.annualPercentageRate),
      },
      {
        zinsbindung: "20 Jahre",
        beleihung70: formatRate(latestRates.find(r => r.interestPeriod === 20 && r.loanToValue === 70)?.annualPercentageRate),
        beleihung80: formatRate(latestRates.find(r => r.interestPeriod === 20 && r.loanToValue === 80)?.annualPercentageRate),
        beleihung90: formatRate(latestRates.find(r => r.interestPeriod === 20 && r.loanToValue === 90)?.annualPercentageRate),
      },
    ];
    
    return NextResponse.json({
      success: true,
      chartData,
      tableData,
      latestDate: latestDate ? new Date(latestDate).toISOString() : null,
      totalRecords: rates.length,
    });
    
  } catch (error) {
    console.error("Fehler beim Abrufen der Zinsdaten:", error);
    return NextResponse.json(
      { error: "Fehler beim Abrufen der Zinsdaten", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
