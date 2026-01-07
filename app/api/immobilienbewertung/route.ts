import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { propertyValuations } from "@/db/schema/other";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validierung der erforderlichen Felder
    if (
      !data.constructionYear ||
      !data.squareMeters ||
      !data.energyEfficiencyClass ||
      !data.location
    ) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    // Validierung: Baujahr
    const constructionYear = parseInt(data.constructionYear);
    const currentYear = new Date().getFullYear();
    if (
      isNaN(constructionYear) ||
      constructionYear < 1800 ||
      constructionYear > currentYear
    ) {
      return NextResponse.json(
        {
          error: `Bitte geben Sie ein gültiges Baujahr zwischen 1800 und ${currentYear} ein.`,
        },
        { status: 400 }
      );
    }

    // Validierung: Quadratmeter
    const squareMeters = parseFloat(data.squareMeters);
    if (isNaN(squareMeters) || squareMeters <= 0) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige Anzahl von Quadratmetern ein." },
        { status: 400 }
      );
    }

    // Validierung: Energieeffizienzklasse
    const validEnergyClasses = ["A+", "A", "B", "C", "D", "E", "F", "G", "H"];
    if (!validEnergyClasses.includes(data.energyEfficiencyClass)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige Energieeffizienzklasse ein." },
        { status: 400 }
      );
    }

    // Speichern der Immobilienbewertung
    // TODO: userId hinzufügen, wenn User eingeloggt ist
    const [result] = await db
      .insert(propertyValuations)
      .values({
        userId: null, // Wird später mit Session verknüpft
        constructionYear: constructionYear,
        squareMeters: squareMeters.toString(),
        energyEfficiencyClass: data.energyEfficiencyClass,
        location: data.location,
        status: "new",
        updatedAt: new Date(),
      })
      .returning();

    return NextResponse.json(
      {
        message: "Immobilienbewertungsanfrage erfolgreich gespeichert.",
        id: result.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Fehler beim Speichern der Immobilienbewertung:", error);
    return NextResponse.json(
      {
        error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
      },
      { status: 500 }
    );
  }
}

