import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { appointmentRequests } from "@/db/schema/other";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validierung der erforderlichen Felder
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    if (!data.preferredDate || !data.preferredTime) {
      return NextResponse.json(
        { error: "Bitte geben Sie ein gewünschtes Datum und eine Uhrzeit an." },
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

    // Validierung: Datum sollte in der Zukunft liegen
    const preferredDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (preferredDate < today) {
      return NextResponse.json(
        { error: "Bitte wählen Sie ein Datum in der Zukunft." },
        { status: 400 }
      );
    }

    // Speichern der Terminanfrage
    // TODO: userId hinzufügen, wenn User eingeloggt ist
    const [result] = await db.insert(appointmentRequests).values({
      userId: null, // Wird später mit Session verknüpft
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email.toLowerCase(),
      phone: data.phone,
      preferredDate: preferredDate,
      preferredTime: data.preferredTime,
      topic: data.topic || null,
      message: data.message || null,
      status: "pending",
      updatedAt: new Date(),
    }).returning();

    return NextResponse.json(
      { message: "Terminanfrage erfolgreich gespeichert.", id: result.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Fehler beim Speichern der Terminanfrage:", error);
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
