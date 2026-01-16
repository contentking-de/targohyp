import { generateBreadcrumbListSchema, type BreadcrumbItem } from "@/lib/utils";

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Komponente für BreadcrumbList Schema.org Markup
 * Verwendung:
 * <BreadcrumbSchema items={[
 *   { name: "Startseite", url: "/" },
 *   { name: "Finanzierung", url: "/finanzierung" },
 *   { name: "Baufinanzierung", url: "/finanzierung/baufinanzierung" }
 * ]} />
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = generateBreadcrumbListSchema(items);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
