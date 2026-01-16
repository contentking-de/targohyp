import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Baufinanzierungsprodukte - Übersicht & Vergleich | Targohyp",
  description: "Finden Sie die passende Baufinanzierung für Ihr Vorhaben. Vergleichen Sie unsere Produkte und finden Sie die besten Konditionen für Ihre Immobilienfinanzierung.",
}, { path: "/finanzierung" });

export default function FinanzierungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
