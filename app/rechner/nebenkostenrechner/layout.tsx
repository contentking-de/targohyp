import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebenkostenrechner - Kaufnebenkosten berechnen | Targohyp",
  description: "Berechnen Sie die Kaufnebenkosten für Ihre Immobilie - Makler, Grunderwerbsteuer, Notar und Grundbuch.",
};

export default function NebenkostenrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
