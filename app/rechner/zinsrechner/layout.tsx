import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zinsrechner - Zinskosten berechnen | Targohyp",
  description: "Berechnen Sie die Zinskosten für Ihr Darlehen - jährlich, monatlich und über die gesamte Laufzeit.",
};

export default function ZinsrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
