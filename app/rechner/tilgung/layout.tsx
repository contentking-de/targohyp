import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Tilgungsrechner - Sondertilgungen simulieren | Targohyp",
  description: "Vergleichen Sie verschiedene Tilgungsmodelle und simulieren Sie Sondertilgungen. Berechnen Sie Zinsersparnis und Laufzeitverkürzung für Ihre Baufinanzierung.",
}, { path: "/rechner/tilgung" });

export default function TilgungsrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

