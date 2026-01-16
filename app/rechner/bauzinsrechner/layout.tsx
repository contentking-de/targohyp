import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Bauzinsrechner - Zinsänderung berechnen | Targohyp",
  description: "Berechnen Sie die Auswirkungen einer Zinsänderung nach Ablauf der Zinsbindung auf Ihre Baufinanzierung.",
}, { path: "/rechner/bauzinsrechner" });

export default function BauzinsrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
