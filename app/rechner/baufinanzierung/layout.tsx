import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baufinanzierungsrechner - Monatliche Rate berechnen | Targohyp",
  description: "Berechnen Sie Ihre monatliche Rate, Gesamtkosten und Tilgungsplan für Ihre Baufinanzierung. Kostenloser Rechner mit detaillierter Auswertung und PDF-Export.",
};

export default function BaufinanzierungsrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

