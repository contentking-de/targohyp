import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Zinsrechner - Zinskosten berechnen | Targohyp",
  description: "Berechnen Sie die Zinskosten für Ihr Darlehen - jährlich, monatlich und über die gesamte Laufzeit.",
}, { path: "/rechner/zinsrechner" });

export default function ZinsrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
