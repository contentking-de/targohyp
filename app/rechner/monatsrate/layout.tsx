import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monatsrate-Rechner - Belastbarkeit prüfen | Targohyp",
  description: "Prüfen Sie Ihre finanzielle Belastbarkeit und spielen Sie verschiedene Finanzierungsszenarien durch. Kostenloser Rechner zur Berechnung der monatlichen Rate und Belastungsquote.",
};

export default function MonatsrateRechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

