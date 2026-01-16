import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Termin vereinbaren - Beratungstermin buchen | Targohyp",
  description: "Vereinbaren Sie einen persönlichen Beratungstermin für Ihre Baufinanzierung. Wählen Sie Datum, Uhrzeit und Thema. Unsere Experten beraten Sie gerne.",
}, { path: "/termin-vereinbaren" });

export default function TerminVereinbarenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
