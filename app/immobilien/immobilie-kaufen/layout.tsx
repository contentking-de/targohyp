import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Immobilie kaufen – Finanzierung & Beratung | Targohyp",
  description: "Wir begleiten Sie beim Kauf Ihrer Immobilie. Von der ersten Beratung bis zur erfolgreichen Finanzierung – wir unterstützen Sie bei jedem Schritt.",
}, { path: "/immobilien/immobilie-kaufen" });

export default function ImmobilieKaufenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
