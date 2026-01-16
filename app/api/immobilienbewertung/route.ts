import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { propertyValuations } from "@/db/schema/other";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validierung der erforderlichen Felder
    if (
      !data.propertyType ||
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

    // Validierung: Weitere Details
    if (!data.isRenovated || !data.hasPhotovoltaik || !data.heatingType) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Immobiliendetails aus." },
        { status: 400 }
      );
    }

    // Wenn saniert = ja, dann muss auch das Datum angegeben werden
    if (data.isRenovated === "ja" && !data.renovationDate) {
      return NextResponse.json(
        { error: "Bitte geben Sie das Sanierungsdatum an." },
        { status: 400 }
      );
    }

    // Validierung: Persönliche Daten
    if (!data.firstName || !data.lastName || !data.email || !data.userType) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle persönlichen Daten aus." },
        { status: 400 }
      );
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    // Speichern der Immobilienbewertung
    // TODO: userId hinzufügen, wenn User eingeloggt ist
    const [result] = await db
      .insert(propertyValuations)
      .values({
        userId: null, // Wird später mit Session verknüpft
        propertyType: data.propertyType,
        constructionYear: constructionYear,
        squareMeters: squareMeters.toString(),
        plotArea: data.plotArea ? data.plotArea.toString() : null,
        energyEfficiencyClass: data.energyEfficiencyClass,
        location: data.location,
        isRenovated: data.isRenovated,
        renovationDate: data.renovationDate ? new Date(data.renovationDate) : null,
        hasPhotovoltaik: data.hasPhotovoltaik,
        heatingType: data.heatingType,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email.toLowerCase(),
        userType: data.userType,
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

