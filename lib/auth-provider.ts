import type { Provider } from "next-auth/providers";
import { sendMagicLinkEmail } from "./email";
import { db } from "@/db";
import { cmsUsers } from "@/db/schema/users";
import { eq } from "drizzle-orm";

/**
 * Custom Email Provider für NextAuth v5, der Resend verwendet statt nodemailer
 * Basierend auf dem Email Provider, aber ohne nodemailer Abhängigkeit
 */
export function CustomEmailProvider(): Provider {
  return {
    id: "email",
    type: "email",
    name: "Email",
    maxAge: 24 * 60 * 60, // 24 hours
    async sendVerificationRequest({ identifier: email, url, provider }: { identifier: string; url: string; provider: any }) {
      // Prüfe, ob es ein CMS-User ist
      const userResults = await db
        .select()
        .from(cmsUsers)
        .where(eq(cmsUsers.email, email))
        .limit(1);

      // Wenn kein CMS-User gefunden, erstelle einen neuen mit super_admin Rolle
      if (userResults.length === 0) {
        await db.insert(cmsUsers).values({
          email,
          role: "super_admin",
          status: "active",
        });
      }

      // Sende Magic Link E-Mail über Resend
      await sendMagicLinkEmail({ email, url });
    },
  };
}
