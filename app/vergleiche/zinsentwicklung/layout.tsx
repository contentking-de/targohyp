import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Zinsentwicklung - Historische Bauzinsen & Prognose | Targohyp",
  description: "Verfolgen Sie die Entwicklung der Bauzinsen über die Zeit. Historische Daten, aktuelle Trends und Prognosen für Ihre Finanzierungsplanung.",
}, { path: "/vergleiche/zinsentwicklung" });

export default function ZinsentwicklungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
