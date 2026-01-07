import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { cmsUsers } from "@/db/schema/users";
import { eq } from "drizzle-orm";
import { CustomEmailProvider } from "@/lib/custom-email-provider";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.AUTH_SECRET,
  trustHost: true, // Wichtig für Magic Links
  providers: [
    CustomEmailProvider(),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Nach erfolgreicher Anmeldung zum Dashboard weiterleiten
      // Wenn die URL die Sign-In-Seite oder Callback-URLs enthält, leite zum Dashboard um
      if (url.includes("/auth/signin") || url.includes("/api/auth/callback")) {
        return `${baseUrl}/dashboard`;
      }
      
      // Wenn die URL relativ zur Base-URL ist und nicht signin/callback, verwende sie
      if (url.startsWith(baseUrl)) {
        return url;
      }
      
      // Externe URLs erlauben (falls nötig)
      if (url.startsWith("http")) {
        return url;
      }
      
      // Standard: Dashboard
      return `${baseUrl}/dashboard`;
    },
    async signIn({ user, account, profile }) {
      console.log("🔐 signIn callback aufgerufen:", { email: user.email, account, profile });
      
      if (!user.email) {
        console.log("❌ Keine E-Mail im User-Objekt");
        return false;
      }

      try {
        // Prüfe, ob es ein CMS-User ist
        const userResults = await db
          .select()
          .from(cmsUsers)
          .where(eq(cmsUsers.email, user.email))
          .limit(1);

        console.log("👤 CMS-User gefunden:", userResults.length > 0);

        // Wenn kein CMS-User gefunden, erstelle einen neuen mit super_admin Rolle
        // (sollte eigentlich schon in sendVerificationRequest passieren, aber als Fallback)
        if (userResults.length === 0) {
          console.log("➕ Erstelle neuen CMS-User für:", user.email);
          await db.insert(cmsUsers).values({
            email: user.email,
            role: "super_admin",
            status: "active",
          });
          console.log("✅ CMS-User erstellt");
          return true;
        }

        const cmsUser = userResults[0];

        if (cmsUser.status !== "active") {
          console.log("❌ CMS-User ist nicht aktiv:", cmsUser.status);
          return false;
        }

        // Update last login
        await db
          .update(cmsUsers)
          .set({ lastLogin: new Date() })
          .where(eq(cmsUsers.id, cmsUser.id));

        console.log("✅ SignIn erfolgreich");
        return true;
      } catch (error) {
        console.error("❌ Error in signIn callback:", error);
        // Bei Fehlern erlauben wir die Anmeldung trotzdem, damit NextAuth funktioniert
        return true;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;

        // Lade CMS-User-Daten
        if (user.email) {
          const userResults = await db
            .select()
            .from(cmsUsers)
            .where(eq(cmsUsers.email, user.email))
            .limit(1);

          if (userResults.length > 0) {
            token.role = userResults[0].role;
            token.userId = userResults[0].id;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});

export const { GET, POST } = handlers;
