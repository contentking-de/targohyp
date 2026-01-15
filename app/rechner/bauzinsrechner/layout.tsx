import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bauzinsrechner - Zinsänderung berechnen | Targohyp",
  description: "Berechnen Sie die Auswirkungen einer Zinsänderung nach Ablauf der Zinsbindung auf Ihre Baufinanzierung.",
};

export default function BauzinsrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
