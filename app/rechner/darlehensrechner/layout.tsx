import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darlehensrechner - Darlehensbetrag berechnen | Targohyp",
  description: "Berechnen Sie Ihren Darlehensbetrag, monatliche Rate und Gesamtkosten für Ihre Immobilienfinanzierung.",
};

export default function DarlehensrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
