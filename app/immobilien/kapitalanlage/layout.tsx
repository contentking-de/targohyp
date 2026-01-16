import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Immobilie als Kapitalanlage – Investment & Finanzierung | Targohyp",
  description: "Investieren Sie in Immobilien als Kapitalanlage. Wir unterstützen Sie bei der Auswahl, Finanzierung und dem Management Ihrer Immobilieninvestition.",
}, { path: "/immobilien/kapitalanlage" });

export default function KapitalanlageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
