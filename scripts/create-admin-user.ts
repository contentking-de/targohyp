/**
 * Script zum Erstellen eines Admin-Users
 * 
 * Usage: npx tsx scripts/create-admin-user.ts
 * 
 * Oder mit ts-node:
 * ts-node scripts/create-admin-user.ts
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
  // Versuche auch ohne expliziten Pfad (lädt automatisch .env.local, .env, etc.)
  dotenv.config();
  console.log(`📁 Versuche Umgebungsvariablen automatisch zu laden...`);
}

// Prüfe, ob DATABASE_URL gesetzt ist
if (!process.env.DATABASE_URL) {
  console.error("❌ Fehler: DATABASE_URL ist nicht gesetzt!");
  console.error(`   Bitte erstelle eine .env.local oder .env Datei im Projekt-Root mit:`);
  console.error(`   DATABASE_URL=deine-datenbank-url`);
  console.error(`   AUTH_SECRET=dein-secret`);
  console.error(`\n   Gesuchte Dateien:`);
  console.error(`   - ${envLocalPath}`);
  console.error(`   - ${envPath}`);
  process.exit(1);
}

async function createAdminUser() {
  const email = "nico@contentking.de";
  const role = "super_admin";

  // Dynamischer Import NACH dem Laden der Umgebungsvariablen
  const { db } = await import("../db");
  const { cmsUsers } = await import("../db/schema/users");
  const { eq } = await import("drizzle-orm");

  try {
    // Prüfe, ob User bereits existiert
    const existingUsers = await db
      .select()
      .from(cmsUsers)
      .where(eq(cmsUsers.email, email))
      .limit(1);

    if (existingUsers.length > 0) {
      const existingUser = existingUsers[0];
      console.log(`✅ User ${email} existiert bereits:`);
      console.log(`   ID: ${existingUser.id}`);
      console.log(`   Rolle: ${existingUser.role}`);
      console.log(`   Status: ${existingUser.status}`);
      console.log(`   Erstellt am: ${existingUser.createdAt}`);
      
      // Update Rolle falls nötig
      if (existingUser.role !== role) {
        await db
          .update(cmsUsers)
          .set({ role, status: "active" })
          .where(eq(cmsUsers.id, existingUser.id));
        console.log(`   ✅ Rolle wurde auf ${role} aktualisiert.`);
      }
      
      return;
    }

    // Erstelle neuen User
    // Hinweis: passwordHash wird als leerer String gesetzt, da Magic Link kein Passwort benötigt
    // Nach der Migration kann dies entfernt werden
    const [newUser] = await db
      .insert(cmsUsers)
      .values({
        email,
        role,
        status: "active",
        passwordHash: "", // Dummy-Wert für Magic Link (wird nach Migration entfernt)
      })
      .returning();

    console.log(`✅ Admin-User erfolgreich erstellt:`);
    console.log(`   E-Mail: ${newUser.email}`);
    console.log(`   ID: ${newUser.id}`);
    console.log(`   Rolle: ${newUser.role}`);
    console.log(`   Status: ${newUser.status}`);
    console.log(`\n📧 Du kannst dich jetzt mit ${email} anmelden, indem du einen Magic Link anforderst.`);
  } catch (error) {
    console.error("❌ Fehler beim Erstellen des Admin-Users:", error);
    process.exit(1);
  }
}

// Führe das Script aus
createAdminUser()
  .then(() => {
    console.log("\n✅ Script erfolgreich abgeschlossen.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Unerwarteter Fehler:", error);
    process.exit(1);
  });
