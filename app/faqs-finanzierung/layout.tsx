import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "FAQs zur Finanzierung - Häufige Fragen & Antworten | Targohyp",
  description: "Antworten auf die häufigsten Fragen zur Baufinanzierung. Von Zinssätzen über Tilgung bis hin zu Fördermitteln - finden Sie schnell die Informationen, die Sie suchen.",
}, { path: "/faqs-finanzierung" });

export default function FAQsFinanzierungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
