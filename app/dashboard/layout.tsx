import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Dashboard - Meine Finanzierung | Targohyp",
  description: "Ihr persönliches Dashboard für Baufinanzierung. Verwalten Sie Ihre Anfragen, Berechnungen und Dokumente an einem Ort.",
}, { path: "/dashboard" });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
