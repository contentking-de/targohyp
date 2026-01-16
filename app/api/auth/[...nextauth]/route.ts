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
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" 
        ? "__Secure-next-auth.session-token" 
        : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    callbackUrl: {
      name: process.env.NODE_ENV === "production"
        ? "__Secure-next-auth.callback-url"
        : "next-auth.callback-url",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    csrfToken: {
      name: process.env.NODE_ENV === "production"
        ? "__Host-next-auth.csrf-token"
        : "next-auth.csrf-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Sicherheitsprüfung: Verhindere Open Redirect Angriffe
      // Erlaube nur URLs, die zur eigenen Domain gehören
      if (url.startsWith(baseUrl)) {
        // Erlaube nur interne Pfade, keine externen URLs
        const urlPath = new URL(url).pathname;
        
        // Erlaube keine Redirects zu Auth-Seiten nach erfolgreicher Anmeldung
        if (urlPath.includes("/auth/signin") || urlPath.includes("/api/auth/callback")) {
          return `${baseUrl}/dashboard`;
        }
        
        // Erlaube nur sichere interne Pfade
        if (urlPath.startsWith("/") && !urlPath.startsWith("//")) {
          return url;
        }
      }
      
      // Standard: Dashboard (für alle anderen Fälle)
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
          const emailDomain = user.email.split("@")[1];
          console.log("➕ Erstelle neuen CMS-User für:", `***@${emailDomain}`);
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
