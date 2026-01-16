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
    const userRole = session.user.role;

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

    // Prüfe, ob User aktiv ist
    if (cmsUser.status !== "active") {
      return NextResponse.json({ error: "Account is not active" }, { status: 403 });
    }

    // Prüfe Berechtigung: Nur super_admin und admin können alle Daten sehen
    if (userRole !== "super_admin" && userRole !== "admin") {
      return NextResponse.json({ error: "Insufficient permissions" }, { status: 403 });
    }

    // Für Bankberater: Lade alle Kundendaten (nicht nur eigene)
    // Hier könnten wir später Filter nach Berater-Zuordnung hinzufügen
    const [allUsers, allProfiles, allDocuments, allCalculations, allComparisons, allAdvisoryRequests, allFinancingRequests, allValuations] = await Promise.all([
      // Alle User-Daten (für Übersicht) - ohne sensible Daten
      db.select({
        id: users.id,
        email: users.email,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
      }).from(users),
      
      // Alle Profil-Daten - ohne sensible Daten
      db.select({
        id: userProfiles.id,
        userId: userProfiles.userId,
        createdAt: userProfiles.createdAt,
        updatedAt: userProfiles.updatedAt,
      }).from(userProfiles),
      
      // Alle Dokumente - ohne Dateipfade
      db.select({
        id: userDocuments.id,
        userId: userDocuments.userId,
        category: userDocuments.category,
        uploadedAt: userDocuments.uploadedAt,
      }).from(userDocuments),
      
      // Alle Berechnungen
      db.select().from(userCalculations),
      
      // Alle Vergleiche
      db.select().from(userComparisons),
      
      // Alle Beratungsanfragen - ohne sensible persönliche Daten
      db.select({
        id: advisoryRequests.id,
        userId: advisoryRequests.userId,
        preferredDate: advisoryRequests.preferredDate,
        status: advisoryRequests.status,
        createdAt: advisoryRequests.createdAt,
      }).from(advisoryRequests),
      
      // Alle Finanzierungsanfragen - ohne sensible persönliche Daten
      db.select({
        id: financingRequests.id,
        userId: financingRequests.userId,
        financingType: financingRequests.financingType,
        propertyType: financingRequests.propertyType,
        status: financingRequests.status,
        createdAt: financingRequests.createdAt,
      }).from(financingRequests),
      
      // Alle Immobilienbewertungen - ohne sensible persönliche Daten
      db.select({
        id: propertyValuations.id,
        userId: propertyValuations.userId,
        propertyType: propertyValuations.propertyType,
        status: propertyValuations.status,
        createdAt: propertyValuations.createdAt,
      }).from(propertyValuations),
    ]);

    return NextResponse.json({
      cmsUser: {
        id: cmsUser.id,
        email: cmsUser.email,
        role: cmsUser.role,
        status: cmsUser.status,
        lastLogin: cmsUser.lastLogin,
      },
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
      // Alle Kundendaten für Übersicht (ohne sensible Daten)
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
    // Logge Fehler ohne sensible Daten
    console.error("Dashboard API error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

