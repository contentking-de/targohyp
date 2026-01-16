import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Auslandsimmobilien – Investment & Finanzierung | Targohyp",
  description: "Investieren Sie in Immobilien im Ausland. Wir beraten Sie zu Finanzierung, rechtlichen Aspekten und steuerlichen Fragen bei Auslandsimmobilien.",
}, { path: "/immobilien/auslandsimmobilien" });

export default function AuslandsimmobilienLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
