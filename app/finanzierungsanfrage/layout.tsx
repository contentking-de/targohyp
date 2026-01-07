import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finanzierungsanfrage stellen - Unverbindlich anfragen | Targohyp",
  description: "Stellen Sie Ihre individuelle Finanzierungsanfrage. In wenigen Schritten zur passenden Baufinanzierung. Unverbindlich, kostenlos und professionell beraten.",
};

export default function FinanzierungsanfrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

