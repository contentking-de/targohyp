import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Testimonials } from "@/components/layout/testimonials";
import { Newsletter } from "@/components/layout/newsletter";
import { ExitIntentPopup } from "@/components/layout/exit-intent-popup";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { FloatingCTA } from "@/components/floating-cta";
import { Providers } from "./providers";
import { db } from "@/db";
import { banksOrCreditUnions } from "@/db/schema/other";
import { eq } from "drizzle-orm";

const handelGo = localFont({
  src: "./fonts/HandelGo.ttf",
  variable: "--font-handel-go",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Targohyp - Baufinanzierung",
  description: "Content-Plattform für Baufinanzierung",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Targohyp - Baufinanzierung",
    description: "Content-Plattform für Baufinanzierung",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Targohyp - Baufinanzierung",
    description: "Content-Plattform für Baufinanzierung",
  },
  alternates: {
    canonical: "https://www.targohyp.de/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Lade Targobank-Daten aus der Datenbank
  const targobankData = await db
    .select()
    .from(banksOrCreditUnions)
    .where(eq(banksOrCreditUnions.name, "TARGOBANK"))
    .limit(1);

  const targobank = targobankData[0];

  // Organization Schema-Markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TARGOBANK AG",
    "legalName": "TARGOBANK AG",
    "url": "https://www.targobank.de",
    "logo": "https://www.targobank.de/targobank-logo-baufi.svg",
    "foundingDate": "1929",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kasernenstr. 10",
      "addressLocality": "Düsseldorf",
      "postalCode": "40213",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-211-8984-0",
      "contactType": "customer service",
      "email": "kontakt@targobank.de",
      "availableLanguage": ["de"]
    },
    "sameAs": [
      "https://www.targobank.de"
    ],
    "vatID": "DE 811285485",
    "taxID": "DE 811 623 326",
    "duns": "HRB 83351",
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    }
  };

  // BankOrCreditUnion Schema-Markup (falls Daten vorhanden)
  const bankOrCreditUnionSchema = targobank ? (() => {
    const schema: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "BankOrCreditUnion",
      "name": targobank.name,
      "legalName": targobank.legalName,
      "description": targobank.description,
      "logo": targobank.logo?.startsWith("http") ? targobank.logo : `https://www.targohyp.de${targobank.logo}`,
      "url": targobank.url,
      "foundingDate": targobank.foundingDate?.toString(),
      "hasMap": targobank.hasMap,
    };

    if (targobank.awards && Array.isArray(targobank.awards) && targobank.awards.length > 0) {
      schema.award = targobank.awards;
    }

    if (targobank.sameAs && Array.isArray(targobank.sameAs) && targobank.sameAs.length > 0) {
      schema.sameAs = targobank.sameAs;
    }

    if (targobank.address && typeof targobank.address === "object") {
      schema.address = targobank.address;
    }

    if (targobank.aggregateRating && typeof targobank.aggregateRating === "object") {
      schema.aggregateRating = targobank.aggregateRating;
    }

    if (targobank.areaServed && Array.isArray(targobank.areaServed) && targobank.areaServed.length > 0) {
      schema.areaServed = targobank.areaServed;
    }

    if (targobank.contactPoint && Array.isArray(targobank.contactPoint) && targobank.contactPoint.length > 0) {
      schema.contactPoint = targobank.contactPoint;
    }

    if (targobank.employee && Array.isArray(targobank.employee) && targobank.employee.length > 0) {
      schema.employee = targobank.employee;
    }

    return schema;
  })() : null;

  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${handelGo.variable} antialiased bg-white`}>
        {/* Organization Schema-Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        {/* BankOrCreditUnion Schema-Markup */}
        {bankOrCreditUnionSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(bankOrCreditUnionSchema)
            }}
          />
        )}
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Testimonials />
            <Newsletter />
            <Footer />
          </div>
          <ExitIntentPopup />
          <CookieConsent />
          <FloatingCTA />
        </Providers>
      </body>
    </html>
  );
}

