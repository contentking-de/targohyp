import { auth } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/db";
import { cmsUsers } from "@/db/schema/users";
import { users, userProfiles } from "@/db/schema/users";
import { userDocuments } from "@/db/schema/user-data";
import { userCalculations } from "@/db/schema/user-data";
import { userComparisons } from "@/db/schema/user-data";
import { advisoryRequests } from "@/db/schema/other";
import { financingRequests } from "@/db/schema/other";
import { propertyValuations } from "@/db/schema/other";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const userEmail = session.user.email;

    // Lade CMS-User-Daten
    const cmsUserResults = await db
      .select()
      .from(cmsUsers)
      .where(eq(cmsUsers.id, userId))
      .limit(1);

    if (cmsUserResults.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const cmsUser = cmsUserResults[0];

    // Für Bankberater: Lade alle Kundendaten (nicht nur eigene)
    // Hier könnten wir später Filter nach Berater-Zuordnung hinzufügen
    const [allUsers, allProfiles, allDocuments, allCalculations, allComparisons, allAdvisoryRequests, allFinancingRequests, allValuations] = await Promise.all([
      // Alle User-Daten (für Übersicht)
      db.select().from(users),
      
      // Alle Profil-Daten
      db.select().from(userProfiles),
      
      // Alle Dokumente
      db.select().from(userDocuments),
      
      // Alle Berechnungen
      db.select().from(userCalculations),
      
      // Alle Vergleiche
      db.select().from(userComparisons),
      
      // Alle Beratungsanfragen
      db.select().from(advisoryRequests),
      
      // Alle Finanzierungsanfragen
      db.select().from(financingRequests),
      
      // Alle Immobilienbewertungen
      db.select().from(propertyValuations),
    ]);

    return NextResponse.json({
      cmsUser,
      // Statistiken für alle Kunden
      stats: {
        totalUsers: allUsers.length,
        totalDocuments: allDocuments.length,
        totalCalculations: allCalculations.length,
        totalComparisons: allComparisons.length,
        totalAdvisoryRequests: allAdvisoryRequests.length,
        totalFinancingRequests: allFinancingRequests.length,
        totalValuations: allValuations.length,
      },
      // Alle Kundendaten für Übersicht
      allUsers,
      allProfiles,
      allDocuments,
      allCalculations,
      allComparisons,
      allAdvisoryRequests,
      allFinancingRequests,
      allValuations,
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

