import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Finanzierungsanfrage stellen - Unverbindlich anfragen | Targohyp",
  description: "Stellen Sie Ihre individuelle Finanzierungsanfrage. In wenigen Schritten zur passenden Baufinanzierung. Unverbindlich, kostenlos und professionell beraten.",
}, { path: "/finanzierungsanfrage" });

export default function FinanzierungsanfrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

