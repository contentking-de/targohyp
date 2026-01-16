import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Monatsrate-Rechner - Belastbarkeit prüfen | Targohyp",
  description: "Prüfen Sie Ihre finanzielle Belastbarkeit und spielen Sie verschiedene Finanzierungsszenarien durch. Kostenloser Rechner zur Berechnung der monatlichen Rate und Belastungsquote.",
}, { path: "/rechner/monatsrate" });

export default function MonatsrateRechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

