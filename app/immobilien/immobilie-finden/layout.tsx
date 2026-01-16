import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Immobilie finden – Tools & Guides | Targohyp",
  description: "Finden Sie die perfekte Immobilie mit unseren Tools und Ratgebern. Von der Suche bis zur Finanzierung – wir unterstützen Sie bei jedem Schritt.",
}, { path: "/immobilien/immobilie-finden" });

export default function ImmobilieFindenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
