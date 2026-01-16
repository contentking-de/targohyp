import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Testimonials } from "@/components/layout/testimonials";
import { Newsletter } from "@/components/layout/newsletter";
import { ExitIntentPopup } from "@/components/layout/exit-intent-popup";
import { Providers } from "./providers";

const handelGo = localFont({
  src: "./fonts/HandelGo.ttf",
  variable: "--font-handel-go",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Targohyp - Baufinanzierung",
  description: "Content-Plattform für Baufinanzierung",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Testimonials />
            <Newsletter />
            <Footer />
          </div>
          <ExitIntentPopup />
        </Providers>
      </body>
    </html>
  );
}

