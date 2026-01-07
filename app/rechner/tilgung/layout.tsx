import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilgungsrechner - Sondertilgungen simulieren | Targohyp",
  description: "Vergleichen Sie verschiedene Tilgungsmodelle und simulieren Sie Sondertilgungen. Berechnen Sie Zinsersparnis und Laufzeitverkürzung für Ihre Baufinanzierung.",
};

export default function TilgungsrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

