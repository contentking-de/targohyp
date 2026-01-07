import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { newsletterSubscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { randomBytes } from "crypto";

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

    // Check if email already exists
    const existingSubscription = await db
      .select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, email.toLowerCase()))
      .limit(1);

    if (existingSubscription.length > 0) {
      const subscription = existingSubscription[0];
      
      // If already confirmed, return success message
      if (subscription.status === "confirmed") {
        return NextResponse.json(
          { message: "Diese E-Mail-Adresse ist bereits für den Newsletter angemeldet." },
          { status: 200 }
        );
      }

      // If pending or unsubscribed, update to pending and generate new token
      if (subscription.status === "pending" || subscription.status === "unsubscribed") {
        const confirmationToken = randomBytes(32).toString("hex");
        await db
          .update(newsletterSubscriptions)
          .set({
            status: "pending",
            confirmationToken,
            subscribedAt: new Date(),
            unsubscribedAt: null,
          })
          .where(eq(newsletterSubscriptions.email, email.toLowerCase()));

        // TODO: Send confirmation email with token
        // For now, we'll auto-confirm for simplicity
        await db
          .update(newsletterSubscriptions)
          .set({
            status: "confirmed",
            confirmedAt: new Date(),
          })
          .where(eq(newsletterSubscriptions.email, email.toLowerCase()));

        return NextResponse.json(
          { message: "Newsletter-Anmeldung erfolgreich." },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    const confirmationToken = randomBytes(32).toString("hex");
    await db.insert(newsletterSubscriptions).values({
      email: email.toLowerCase(),
      status: "pending",
      confirmationToken,
    });

    // TODO: Send confirmation email with token
    // For now, we'll auto-confirm for simplicity
    await db
      .update(newsletterSubscriptions)
      .set({
        status: "confirmed",
        confirmedAt: new Date(),
      })
      .where(eq(newsletterSubscriptions.email, email.toLowerCase()));

    return NextResponse.json(
      { message: "Newsletter-Anmeldung erfolgreich." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut." },
      { status: 500 }
    );
  }
}

