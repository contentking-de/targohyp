/**
 * Script zum Erstellen der NextAuth-Tabellen
 * 
 * Usage: npx tsx scripts/create-nextauth-tables.ts
 */

import * as dotenv from "dotenv";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

// Lade Umgebungsvariablen aus .env.local oder .env
const envLocalPath = resolve(process.cwd(), ".env.local");
const envPath = resolve(process.cwd(), ".env");

if (existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
  console.log(`📁 Lade Umgebungsvariablen aus: ${envLocalPath}`);
} else if (existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log(`📁 Lade Umgebungsvariablen aus: ${envPath}`);
} else {
  dotenv.config();
  console.log(`📁 Versuche Umgebungsvariablen automatisch zu laden...`);
}

// Prüfe, ob DATABASE_URL gesetzt ist
if (!process.env.DATABASE_URL) {
  console.error("❌ Fehler: DATABASE_URL ist nicht gesetzt!");
  console.error(`   Bitte erstelle eine .env.local oder .env Datei im Projekt-Root mit:`);
  console.error(`   DATABASE_URL=deine-datenbank-url`);
  console.error(`\n   Gesuchte Dateien:`);
  console.error(`   - ${envLocalPath}`);
  console.error(`   - ${envPath}`);
  process.exit(1);
}

async function createNextAuthTables() {
  // Dynamischer Import NACH dem Laden der Umgebungsvariablen
  const { neon } = await import("@neondatabase/serverless");
  const sql = neon(process.env.DATABASE_URL!);

  try {
    console.log("🔨 Erstelle NextAuth-Tabellen...\n");

    // user Tabelle
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS "user" (
          "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
          "name" varchar(255),
          "email" varchar(255) NOT NULL UNIQUE,
          "emailVerified" timestamp,
          "image" varchar(500)
        )
      `;
      console.log("✅ user Tabelle erstellt/überprüft");
    } catch (error: any) {
      if (error.message?.includes("already exists") || error.code === "42P07") {
        console.log("ℹ️  user Tabelle existiert bereits");
      } else {
        throw error;
      }
    }

    // account Tabelle
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS "account" (
          "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
          "userId" uuid NOT NULL,
          "type" varchar(255) NOT NULL,
          "provider" varchar(255) NOT NULL,
          "providerAccountId" varchar(255) NOT NULL,
          "refresh_token" text,
          "access_token" text,
          "expires_at" timestamp,
          "token_type" varchar(255),
          "scope" varchar(255),
          "id_token" text,
          "session_state" varchar(255)
        )
      `;
      // Foreign Key separat hinzufügen
      try {
        await sql`
          ALTER TABLE "account" 
          ADD CONSTRAINT "account_userId_user_id_fk" 
          FOREIGN KEY ("userId") 
          REFERENCES "public"."user"("id") 
          ON DELETE cascade 
          ON UPDATE no action
        `;
      } catch (error: any) {
        if (error.message?.includes("already exists") || error.code === "42710") {
          // Constraint existiert bereits, ignorieren
        } else {
          throw error;
        }
      }
      console.log("✅ account Tabelle erstellt/überprüft");
    } catch (error: any) {
      if (error.message?.includes("already exists") || error.code === "42P07") {
        console.log("ℹ️  account Tabelle existiert bereits");
      } else {
        throw error;
      }
    }

    // session Tabelle
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS "session" (
          "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
          "sessionToken" varchar(255) NOT NULL UNIQUE,
          "userId" uuid NOT NULL,
          "expires" timestamp NOT NULL
        )
      `;
      // Foreign Key separat hinzufügen
      try {
        await sql`
          ALTER TABLE "session" 
          ADD CONSTRAINT "session_userId_user_id_fk" 
          FOREIGN KEY ("userId") 
          REFERENCES "public"."user"("id") 
          ON DELETE cascade 
          ON UPDATE no action
        `;
      } catch (error: any) {
        if (error.message?.includes("already exists") || error.code === "42710") {
          // Constraint existiert bereits, ignorieren
        } else {
          throw error;
        }
      }
      console.log("✅ session Tabelle erstellt/überprüft");
    } catch (error: any) {
      if (error.message?.includes("already exists") || error.code === "42P07") {
        console.log("ℹ️  session Tabelle existiert bereits");
      } else {
        throw error;
      }
    }

    // verificationToken Tabelle
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS "verificationToken" (
          "identifier" varchar(255) NOT NULL,
          "token" varchar(255) NOT NULL,
          "expires" timestamp NOT NULL
        )
      `;
      // Primary Key separat hinzufügen
      try {
        await sql`
          ALTER TABLE "verificationToken" 
          ADD CONSTRAINT "verificationToken_pkey" 
          PRIMARY KEY ("identifier", "token")
        `;
      } catch (error: any) {
        if (error.message?.includes("already exists") || error.code === "42710") {
          // Constraint existiert bereits, ignorieren
        } else {
          throw error;
        }
      }
      console.log("✅ verificationToken Tabelle erstellt/überprüft");
    } catch (error: any) {
      if (error.message?.includes("already exists") || error.code === "42P07") {
        console.log("ℹ️  verificationToken Tabelle existiert bereits");
      } else {
        throw error;
      }
    }

    console.log("\n✅ Alle NextAuth-Tabellen wurden erfolgreich erstellt/überprüft!");
  } catch (error) {
    console.error("❌ Fehler beim Erstellen der Tabellen:", error);
    process.exit(1);
  }
}

// Führe das Script aus
createNextAuthTables()
  .then(() => {
    console.log("\n✅ Script erfolgreich abgeschlossen.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Unerwarteter Fehler:", error);
    process.exit(1);
  });

