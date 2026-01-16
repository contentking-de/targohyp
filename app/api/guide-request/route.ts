import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { guideRequests } from "@/db/schema";
import { and, eq, gte } from "drizzle-orm";
import { rateLimit } from "@/lib/rate-limit";
import { secureApiHandler } from "@/lib/api-utils";
import { z } from "zod";

const guideRequestSchema = z.object({
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
});

export async function POST(request: NextRequest) {
  // Rate Limiting: 5 Requests pro 15 Minuten
  const rateLimitResult = rateLimit(request, {
    interval: 15 * 60 * 1000, // 15 Minuten
    maxRequests: 5,
  });

  if (!rateLimitResult || !rateLimitResult.success) {
    const response = NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    );
    if (rateLimitResult) {
      response.headers.set("Retry-After", String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)));
      response.headers.set("X-RateLimit-Limit", "5");
      response.headers.set("X-RateLimit-Remaining", String(rateLimitResult.remaining));
    }
    return response;
  }

  return secureApiHandler(
    request,
    async (data) => {
      try {
        const { email } = data;

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
        // Logge Fehler ohne sensible Daten
        console.error("Guide request error:", error instanceof Error ? error.message : "Unknown error");
        return NextResponse.json(
          { error: "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut." },
          { status: 500 }
        );
      }
    },
    {
      method: "POST",
      schema: guideRequestSchema,
    }
  );
}
