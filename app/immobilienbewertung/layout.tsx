import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Immobilienbewertung - Kostenlose Wertermittlung | Targohyp",
  description: "Lassen Sie Ihre Immobilie kostenlos von Experten bewerten. Professionelle Wertermittlung für Käufer und Verkäufer. Einfach Daten eingeben und unverbindlich anfragen.",
}, { path: "/immobilienbewertung" });

export default function ImmobilienbewertungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

