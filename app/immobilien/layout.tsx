import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Immobilien – Kauf, Verkauf & Finanzierung | Targohyp",
  description: "Alles rund um Immobilien: Von der kostenlosen Bewertung über die Finanzierung bis zur individuellen Beratung. Wir unterstützen Sie bei Kauf und Verkauf Ihrer Immobilie.",
}, { path: "/immobilien" });

export default function ImmobilienLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
