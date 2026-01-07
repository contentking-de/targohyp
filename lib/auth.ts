// TODO: NextAuth v5 Konfiguration - wird später vollständig implementiert
// Temporär vereinfacht für Build-Test
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/db";
import bcrypt from "bcryptjs";

export const authOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // TODO: Implementiere User-Lookup und Passwort-Verifizierung
        // const user = await db.select().from(users).where(eq(users.email, credentials.email)).limit(1);
        // if (!user || !await bcrypt.compare(credentials.password, user.passwordHash)) {
        //   return null;
        // }

        return null; // Placeholder
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

