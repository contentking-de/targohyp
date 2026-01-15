import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renditerechner - Immobilienrendite berechnen | Targohyp",
  description: "Berechnen Sie die Rendite Ihrer Kapitalanlage-Immobilie - Mietrendite, Cashflow und langfristige Rendite.",
};

export default function RenditerechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
