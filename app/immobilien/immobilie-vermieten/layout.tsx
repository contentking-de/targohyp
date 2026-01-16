import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Immobilie vermieten – Finanzierung & Beratung | Targohyp",
  description: "Erfahren Sie alles über die Vermietung Ihrer Immobilie. Von der Finanzierung bis zu steuerlichen Aspekten – wir beraten Sie umfassend.",
}, { path: "/immobilien/immobilie-vermieten" });

export default function ImmobilieVermietenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
