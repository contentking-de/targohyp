import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { financingRequests } from "@/db/schema/other";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validierung der erforderlichen Felder
    if (!data.financingType || !data.propertyType || !data.usage || !data.step) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    if (!data.postalCode || !data.city) {
      return NextResponse.json(
        { error: "Bitte geben Sie Postleitzahl und Ort an." },
        { status: 400 }
      );
    }

    if (!data.purchasePrice || !data.equity) {
      return NextResponse.json(
        { error: "Bitte geben Sie Kaufpreis und Eigenkapital an." },
        { status: 400 }
      );
    }

    if (!data.employmentType || !data.income) {
      return NextResponse.json(
        { error: "Bitte geben Sie Beschäftigungsverhältnis und Einkommen an." },
        { status: 400 }
      );
    }

    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.street ||
      !data.addressPostalCode ||
      !data.addressCity
    ) {
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

    // Speichern der Finanzierungsanfrage
    // TODO: userId hinzufügen, wenn User eingeloggt ist
    const [result] = await db.insert(financingRequests).values({
      userId: null, // Wird später mit Session verknüpft
      financingType: data.financingType,
      propertyType: data.propertyType,
      usage: data.usage,
      step: data.step,
      postalCode: data.postalCode,
      city: data.city,
      purchasePrice: data.purchasePrice,
      equity: data.equity,
      employmentType: data.employmentType,
      income: data.income,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email.toLowerCase(),
      phone: data.phone,
      street: data.street,
      addressPostalCode: data.addressPostalCode,
      addressCity: data.addressCity,
      status: "new",
      updatedAt: new Date(),
    }).returning();

    return NextResponse.json(
      { message: "Finanzierungsanfrage erfolgreich gespeichert.", id: result.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Fehler beim Speichern der Finanzierungsanfrage:", error);
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}

