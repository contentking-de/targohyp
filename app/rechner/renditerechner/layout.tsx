import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Renditerechner - Immobilienrendite berechnen | Targohyp",
  description: "Berechnen Sie die Rendite Ihrer Kapitalanlage-Immobilie - Mietrendite, Cashflow und langfristige Rendite.",
}, { path: "/rechner/renditerechner" });

export default function RenditerechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
