import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eigenkapitalrechner - Finanzierungslücke berechnen | Targohyp",
  description: "Berechnen Sie Ihr verfügbares Eigenkapital, die Eigenkapitalquote und identifizieren Sie Finanzierungslücken. Kostenloser Rechner mit Empfehlungen für Ihre Baufinanzierung.",
};

export default function EigenkapitalrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

