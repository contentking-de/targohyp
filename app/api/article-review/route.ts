import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { secureApiHandler } from "@/lib/api-utils";
import { rateLimit } from "@/lib/rate-limit";

const reviewSchema = z.object({
  articleTitle: z.string().min(1, "Artikeltitel fehlt."),
  articleUrl: z.string().min(1, "Artikel-URL fehlt."),
  contentFeedback: z.string().optional().default(""),
  structureFeedback: z.string().optional().default(""),
  generalNotes: z.string().optional().default(""),
  reviewDecision: z.enum(["revision", "approved"]),
});

const REVIEW_RECIPIENT = "nico@contentking.de";

export async function POST(request: NextRequest) {
  const rateLimitResult = rateLimit(request, {
    interval: 15 * 60 * 1000,
    maxRequests: 20,
  });

  if (!rateLimitResult || !rateLimitResult.success) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    );
  }

  return secureApiHandler(
    request,
    async (data) => {
      try {
        const { articleTitle, articleUrl, contentFeedback, structureFeedback, generalNotes, reviewDecision } = data;
        const isApproval = reviewDecision === "approved";

        if (!isApproval && !contentFeedback && !structureFeedback && !generalNotes) {
          return NextResponse.json(
            { error: "Bitte füllen Sie mindestens ein Feedback-Feld aus." },
            { status: 400 }
          );
        }

        const feedbackSections = [];

        if (contentFeedback) {
          feedbackSections.push({
            label: "Inhalt / Content",
            text: contentFeedback,
            color: "#002f5f",
          });
        }

        if (structureFeedback) {
          feedbackSections.push({
            label: "Aufbau / Struktur",
            text: structureFeedback,
            color: "#bb133e",
          });
        }

        if (generalNotes) {
          feedbackSections.push({
            label: "Allgemeine Anmerkungen",
            text: generalNotes,
            color: "#6b7280",
          });
        }

        const decisionBadge = isApproval
          ? `<div style="background-color: #dcfce7; border: 2px solid #16a34a; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; text-align: center;">
              <span style="color: #16a34a; font-size: 16px; font-weight: 700;">✅ Freigabe erteilt</span>
            </div>`
          : `<div style="background-color: #fef3c7; border: 2px solid #d97706; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; text-align: center;">
              <span style="color: #d97706; font-size: 16px; font-weight: 700;">⚠️ Überarbeitung erbeten</span>
            </div>`;

        const feedbackHtml = feedbackSections
          .map(
            (s) => `
            <div style="margin-bottom: 24px; border-left: 4px solid ${s.color}; padding-left: 16px;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: ${s.color};">${s.label}</h3>
              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(s.text)}</p>
            </div>`
          )
          .join("");

        const feedbackText = feedbackSections
          .map((s) => `${s.label}:\n${s.text}`)
          .join("\n\n---\n\n");

        const html = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 640px; margin: 0 auto; padding: 20px; background-color: #f3f4f6;">
              <div style="background-color: ${isApproval ? "#16a34a" : "#002f5f"}; color: white; padding: 24px 30px; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 22px; font-weight: 700;">${isApproval ? "✅ Freigabe erteilt" : "📝 Neues Artikel-Review"}</h1>
                <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.85;">${isApproval ? "Der Artikel wurde geprüft und freigegeben" : "Überarbeitung erbeten"}</p>
              </div>
              <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
                <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                  <table style="width: 100%; font-size: 14px;">
                    <tr>
                      <td style="padding: 4px 12px 4px 0; color: #6b7280; font-weight: 600; white-space: nowrap; vertical-align: top;">Artikel:</td>
                      <td style="padding: 4px 0; color: #111827; font-weight: 700;">${escapeHtml(articleTitle)}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 12px 4px 0; color: #6b7280; font-weight: 600; white-space: nowrap; vertical-align: top;">URL:</td>
                      <td style="padding: 4px 0;"><a href="${escapeHtml(articleUrl)}" style="color: #002f5f; text-decoration: underline; word-break: break-all;">${escapeHtml(articleUrl)}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 12px 4px 0; color: #6b7280; font-weight: 600; white-space: nowrap; vertical-align: top;">Datum:</td>
                      <td style="padding: 4px 0; color: #111827;">${new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</td>
                    </tr>
                  </table>
                </div>
                <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Bewertung</h2>
                ${decisionBadge}
                ${feedbackHtml ? `<h2 style="margin: 24px 0 16px 0; font-size: 18px; color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Feedback</h2>${feedbackHtml}` : ""}
              </div>
              <div style="background-color: #f9fafb; padding: 16px 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
                <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">
                  Gesendet über das Targohyp Content Review System
                </p>
              </div>
            </body>
          </html>
        `;

        const decisionLabel = isApproval ? "Freigabe erteilt" : "Überarbeitung erbeten";
        const textContent = `Neues Artikel-Review\n\nBewertung: ${decisionLabel}\nArtikel: ${articleTitle}\nURL: ${articleUrl}\nDatum: ${new Date().toLocaleDateString("de-DE")}\n\n${feedbackText}`;

        if (!process.env.RESEND_API_KEY) {
          console.log("📝 Article Review (no RESEND_API_KEY):", { articleTitle, articleUrl, reviewDecision, contentFeedback, structureFeedback, generalNotes });
          return NextResponse.json(
            { message: "Review erfolgreich gesendet. Vielen Dank für Ihr Feedback!" },
            { status: 200 }
          );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: process.env.EMAIL_FROM || "targohyp@tasketeer.com",
          to: REVIEW_RECIPIENT,
          subject: `${isApproval ? "✅ Freigabe" : "⚠️ Überarbeitung"}: ${articleTitle}`,
          html,
          text: textContent,
        });

        return NextResponse.json(
          { message: "Review erfolgreich gesendet. Vielen Dank für Ihr Feedback!" },
          { status: 200 }
        );
      } catch (error) {
        console.error("Article review error:", error instanceof Error ? error.message : "Unknown error");
        return NextResponse.json(
          { error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." },
          { status: 500 }
        );
      }
    },
    {
      method: "POST",
      schema: reviewSchema,
    }
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
