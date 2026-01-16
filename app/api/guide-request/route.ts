import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { guideRequests } from "@/db/schema";
import { and, eq, gte } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "E-Mail-Adresse ist erforderlich." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    // Check if email already requested guide recently (within last 24 hours)
    const recentRequest = await db
      .select()
      .from(guideRequests)
      .where(
        and(
          eq(guideRequests.email, email.toLowerCase()),
          eq(guideRequests.guideType, "erstfinanzierer"),
          gte(
            guideRequests.createdAt,
            new Date(Date.now() - 24 * 60 * 60 * 1000)
          )
        )
      )
      .limit(1);

    if (recentRequest.length > 0) {
      // If already requested recently, return success but don't create duplicate
      return NextResponse.json(
        { message: "Der Guide wurde bereits an diese E-Mail-Adresse gesendet." },
        { status: 200 }
      );
    }

    // Create new guide request
    await db.insert(guideRequests).values({
      email: email.toLowerCase(),
      guideType: "erstfinanzierer",
      status: "pending",
    });

    // TODO: Hier die E-Mail-Versand-Logik einfügen
    // Beispiel: await sendGuideEmail(email, "erstfinanzierer");
    // Nach erfolgreichem Versand: status auf "sent" setzen

    return NextResponse.json(
      { message: "Vielen Dank! Der Erstfinanzierer-Guide wurde an Ihre E-Mail-Adresse gesendet." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Guide request error:", error);
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut." },
      { status: 500 }
    );
  }
}
