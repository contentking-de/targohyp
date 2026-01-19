import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Metadata } from "next"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Basis-URL für canonical Tags (kann über Umgebungsvariable überschrieben werden)
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || (process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : "https://www.targohyp.de");

// Breadcrumb Item Interface
export interface BreadcrumbItem {
  name: string;
  url: string;
}

// Generiere BreadcrumbList Schema.org Markup
export function generateBreadcrumbListSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url.startsWith("/") ? item.url : `/${item.url}`}`
    }))
  };
}

// Helper-Funktion für Metadata mit robots noindex, nofollow, Open Graph Tags und canonical URL
export function createMetadata(
  metadata: Omit<Metadata, "robots" | "openGraph" | "twitter" | "alternates">,
  options?: { path?: string }
): Metadata {
  // Extrahiere Titel als String
  const title = typeof metadata.title === "string" 
    ? metadata.title 
    : (metadata.title && typeof metadata.title === "object" && "default" in metadata.title)
      ? metadata.title.default || ""
      : "";

  // Extrahiere Beschreibung als String
  const description = typeof metadata.description === "string" 
    ? metadata.description 
    : "";

  // Erstelle canonical URL
  const canonicalUrl = options?.path 
    ? `${BASE_URL}${options.path.startsWith("/") ? options.path : `/${options.path}`}`
    : undefined;

  return {
    ...metadata,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: title,
      description: description,
      type: "website",
      locale: "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },
    alternates: canonicalUrl ? {
      canonical: canonicalUrl,
    } : undefined,
  }
}
