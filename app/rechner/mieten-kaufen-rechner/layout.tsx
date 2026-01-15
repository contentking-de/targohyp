import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mieten oder Kaufen Rechner - Vergleich berechnen | Targohyp",
  description: "Vergleichen Sie die Kosten und den Vermögenswert von Mieten und Kaufen über einen bestimmten Zeitraum.",
};

export default function MietenKaufenRechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
