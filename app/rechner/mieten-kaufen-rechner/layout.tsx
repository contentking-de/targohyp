import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Mieten oder Kaufen Rechner - Vergleich berechnen | Targohyp",
  description: "Vergleichen Sie die Kosten und den Vermögenswert von Mieten und Kaufen über einen bestimmten Zeitraum.",
}, { path: "/rechner/mieten-kaufen-rechner" });

export default function MietenKaufenRechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
