import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgetrechner - Was kann ich mir leisten? | Targohyp",
  description: "Berechnen Sie, was Sie sich leisten können. Finden Sie heraus, welcher Kaufpreis und Darlehensbetrag zu Ihrem Budget passt.",
};

export default function BudgetrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
