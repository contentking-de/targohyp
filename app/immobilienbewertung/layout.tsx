import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienbewertung - Kostenlose Wertermittlung | Targohyp",
  description: "Lassen Sie Ihre Immobilie kostenlos von Experten bewerten. Professionelle Wertermittlung für Käufer und Verkäufer. Einfach Daten eingeben und unverbindlich anfragen.",
};

export default function ImmobilienbewertungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

