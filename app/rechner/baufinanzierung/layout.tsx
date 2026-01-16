import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Baufinanzierungsrechner - Monatliche Rate berechnen | Targohyp",
  description: "Berechnen Sie Ihre monatliche Rate, Gesamtkosten und Tilgungsplan für Ihre Baufinanzierung. Kostenloser Rechner mit detaillierter Auswertung und PDF-Export.",
}, { path: "/rechner/baufinanzierung" });

export default function BaufinanzierungsrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

