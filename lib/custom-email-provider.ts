import type { Provider } from "next-auth/providers";
import { sendMagicLinkEmail } from "./email";
import { db } from "@/db";
import { cmsUsers } from "@/db/schema/users";
import { eq } from "drizzle-orm";

/**
 * Custom Email Provider für NextAuth v5, der Resend verwendet
 * Erstellt einen eigenen Provider, der nicht auf NextAuth's Email Provider basiert
 */
export function CustomEmailProvider(): Provider {
  return {
    id: "email",
    type: "email",
    name: "Email",
    maxAge: 24 * 60 * 60, // 24 hours
    async sendVerificationRequest({ identifier: email, url, provider, theme }) {
      console.log("📧 Sende Magic Link an:", email);
      console.log("🔗 URL:", url);
      
      try {
        // Prüfe, ob es ein CMS-User ist
        const userResults = await db
          .select()
          .from(cmsUsers)
          .where(eq(cmsUsers.email, email))
          .limit(1);

        // Wenn kein CMS-User gefunden, erstelle einen neuen mit super_admin Rolle
        if (userResults.length === 0) {
          console.log("👤 Erstelle neuen CMS-User für:", email);
          await db.insert(cmsUsers).values({
            email,
            role: "super_admin",
            status: "active",
          });
        }

        // Sende Magic Link E-Mail über Resend
        const result = await sendMagicLinkEmail({ email, url });
        
        if (!result.success) {
          console.error("❌ Fehler beim Senden der E-Mail:", result.error);
          throw new Error("Failed to send email");
        }
        
        console.log("✅ Magic Link erfolgreich gesendet");
      } catch (error) {
        console.error("❌ Fehler in sendVerificationRequest:", error);
        throw error;
      }
    },
  };
}

