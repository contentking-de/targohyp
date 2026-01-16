import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Anmelden - TargoHome Login | Targohyp",
  description: "Melden Sie sich bei TargoHome an, um auf Ihre persönlichen Finanzierungsdaten zuzugreifen und Ihre Anfragen zu verwalten.",
}, { path: "/auth/signin" });

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
