import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Nebenkostenrechner - Kaufnebenkosten berechnen | Targohyp",
  description: "Berechnen Sie die Kaufnebenkosten für Ihre Immobilie - Makler, Grunderwerbsteuer, Notar und Grundbuch.",
}, { path: "/rechner/nebenkostenrechner" });

export default function NebenkostenrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
