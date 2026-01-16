import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Darlehensrechner - Darlehensbetrag berechnen | Targohyp",
  description: "Berechnen Sie Ihren Darlehensbetrag, monatliche Rate und Gesamtkosten für Ihre Immobilienfinanzierung.",
}, { path: "/rechner/darlehensrechner" });

export default function DarlehensrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
