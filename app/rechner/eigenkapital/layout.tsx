import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Eigenkapitalrechner - Finanzierungslücke berechnen | Targohyp",
  description: "Berechnen Sie Ihr verfügbares Eigenkapital, die Eigenkapitalquote und identifizieren Sie Finanzierungslücken. Kostenloser Rechner mit Empfehlungen für Ihre Baufinanzierung.",
}, { path: "/rechner/eigenkapital" });

export default function EigenkapitalrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

