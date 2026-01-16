import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Immobilie verkaufen – Kostenlose Bewertung | Targohyp",
  description: "Verkaufen Sie Ihre Immobilie zum besten Preis. Kostenlose Bewertung, professionelle Marktanalyse und Unterstützung bei allen Schritten des Verkaufsprozesses.",
}, { path: "/immobilien/immobilie-verkaufen" });

export default function ImmobilieVerkaufenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
