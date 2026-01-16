import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Budgetrechner - Was kann ich mir leisten? | Targohyp",
  description: "Berechnen Sie, was Sie sich leisten können. Finden Sie heraus, welcher Kaufpreis und Darlehensbetrag zu Ihrem Budget passt.",
}, { path: "/rechner/budgetrechner" });

export default function BudgetrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
