import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapWrapper } from "@/components/standorte/map-wrapper";
import { ArrowRight, MapPin, Phone, Clock, Building2, Calculator, FileText, Users } from "lucide-react";
import { readFileSync } from "fs";
import { join } from "path";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

interface Standort {
  Address: string;
  Latitude: string;
  Longitude: string;
  Name: string;
  Phone: string;
  Status: string;
  Rating?: string;
  Reviews?: string;
  Timing?: Array<{
    day: string;
    open_interval: string;
  }>;
}

// Funktion zum Extrahieren der Stadt aus der Adresse
function extractCity(address: string): string {
  const parts = address.split(",");
  if (parts.length >= 2) {
    const cityPart = parts[1].trim();
    const city = cityPart.replace(/^\d{5}\s*/, "").trim();
    return city.split("-")[0].trim() || "Unbekannt";
  }
  return "Unbekannt";
}

// Funktion zum Parsen der Adresse für Schema.org
function parseAddress(address: string): {
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressCountry: string;
} {
  // Format: "Straße 123, 12345 Stadt, Germany"
  const parts = address.split(",").map(p => p.trim());
  
  const streetAddress = parts[0] || "";
  
  let postalCode = "";
  let addressLocality = "";
  
  if (parts.length >= 2) {
    const cityPart = parts[1].trim();
    const match = cityPart.match(/^(\d{5})\s+(.+)$/);
    if (match) {
      postalCode = match[1];
      addressLocality = match[2];
    } else {
      addressLocality = cityPart;
    }
  }
  
  const addressCountry = parts.length >= 3 && parts[2].includes("Germany") ? "DE" : "DE";
  
  return {
    streetAddress,
    postalCode,
    addressLocality,
    addressCountry,
  };
}

// Funktion zum Erstellen eines URL-Slugs
function createSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// Lade alle Standorte
function getStandorte(): Standort[] {
  const filePath = join(process.cwd(), "public", "targobank-filialen.json");
  const fileContents = readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as Standort[];
}

// Finde Standort nach Stadt-Slug
function getStandortBySlug(slug: string): { standort: Standort; city: string } | null {
  const standorte = getStandorte();
  
  for (const standort of standorte) {
    const city = extractCity(standort.Address);
    if (createSlug(city) === slug) {
      return { standort, city };
    }
  }
  
  return null;
}

// Generiere statische Params für alle Städte
export async function generateStaticParams() {
  const standorte = getStandorte();
  const cities = new Set<string>();
  
  for (const standort of standorte) {
    const city = extractCity(standort.Address);
    cities.add(createSlug(city));
  }
  
  return Array.from(cities).map((stadt) => ({ stadt }));
}

// Generiere Metadata für SEO
export async function generateMetadata({ params }: { params: Promise<{ stadt: string }> }): Promise<Metadata> {
  const { stadt } = await params;
  const result = getStandortBySlug(stadt);
  
  if (!result) {
    return {
      title: "Standort nicht gefunden | Targohyp",
    };
  }
  
  const { city } = result;
  
  return {
    title: `Baufinanzierung ${city} | TARGOBANK Beratung vor Ort | Targohyp`,
    description: `Baufinanzierung in ${city}: Persönliche Beratung in Ihrer TARGOBANK Filiale. ✓ Günstige Zinsen ✓ Individuelle Lösungen ✓ Kompetente Berater. Jetzt Termin vereinbaren!`,
    keywords: [
      `Baufinanzierung ${city}`,
      `Immobilienfinanzierung ${city}`,
      `Hausfinanzierung ${city}`,
      `TARGOBANK ${city}`,
      `Baukredit ${city}`,
      `Hypothek ${city}`,
    ],
    openGraph: {
      title: `Baufinanzierung ${city} | TARGOBANK Beratung`,
      description: `Persönliche Baufinanzierungsberatung in ${city}. Günstige Konditionen und individuelle Lösungen von Ihrer TARGOBANK.`,
      type: "website",
    },
  };
}

export default async function StandortDetailPage({ params }: { params: Promise<{ stadt: string }> }) {
  const { stadt } = await params;
  const result = getStandortBySlug(stadt);
  
  if (!result) {
    notFound();
  }
  
  const { standort, city } = result;

  const vorteile = [
    {
      icon: Users,
      titel: "Persönliche Beratung",
      beschreibung: `Unsere erfahrenen Baufinanzierungsberater in ${city} nehmen sich Zeit für Ihre individuellen Wünsche und Ziele.`,
    },
    {
      icon: Calculator,
      titel: "Maßgeschneiderte Finanzierung",
      beschreibung: "Wir analysieren Ihre finanzielle Situation und erstellen ein passgenaues Finanzierungskonzept.",
    },
    {
      icon: FileText,
      titel: "Transparente Konditionen",
      beschreibung: "Keine versteckten Kosten – Sie erhalten eine klare Übersicht über Zinsen, Tilgung und Gesamtkosten.",
    },
    {
      icon: Building2,
      titel: "Regionale Expertise",
      beschreibung: `Wir kennen den Immobilienmarkt in ${city} und Umgebung und beraten Sie kompetent zu lokalen Besonderheiten.`,
    },
  ];

  const leistungen = [
    "Erstfinanzierung für Eigenheim und Eigentumswohnung",
    "Anschlussfinanzierung und Umschuldung",
    "Finanzierung von Kapitalanlage-Immobilien",
    "KfW-Fördermittel und Zuschüsse",
    "Modernisierungs- und Renovierungsfinanzierung",
    "Forward-Darlehen zur Zinssicherung",
  ];

  const parsedAddress = parseAddress(standort.Address);
  
  // LocalBusiness Schema für SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": `TARGOBANK Baufinanzierung ${city}`,
    "description": `Baufinanzierungsberatung der TARGOBANK in ${city}. Persönliche Beratung für Ihre Immobilienfinanzierung.`,
    "url": `https://www.targohyp.de/standorte/${stadt}`,
    "telephone": standort.Phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": parsedAddress.streetAddress,
      "addressLocality": parsedAddress.addressLocality,
      "postalCode": parsedAddress.postalCode,
      "addressCountry": parsedAddress.addressCountry,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": parseFloat(standort.Latitude),
      "longitude": parseFloat(standort.Longitude),
    },
    ...(standort.Rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": standort.Rating,
        "reviewCount": standort.Reviews || "1",
      },
    }),
    "parentOrganization": {
      "@type": "Organization",
      "name": "TARGOBANK AG",
      "url": "https://www.targobank.de",
    },
    "areaServed": {
      "@type": "City",
      "name": city,
    },
    "serviceType": [
      "Baufinanzierung",
      "Immobilienfinanzierung",
      "Anschlussfinanzierung",
      "KfW-Förderung",
    ],
  };

  return (
    <div className="w-full">
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "/" },
          { name: "Standorte", url: "/standorte" },
          { name: `Baufinanzierung ${city}`, url: `/standorte/${stadt}` },
        ]}
      />
      
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/standorte" className="text-targo-blue hover:underline">
              Standorte
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">{city}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Baufinanzierung {city}
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ihr Traum von den eigenen vier Wänden in {city}? Wir machen ihn möglich! 
              Besuchen Sie uns in unserer TARGOBANK Filiale und lassen Sie sich persönlich 
              zu Ihrer Baufinanzierung beraten.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-6 py-3"
                asChild
              >
                <Link href="/finanzierungsanfrage" className="flex items-center">
                  Finanzierung anfragen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 border-targo-blue text-targo-blue hover:bg-targo-blue/5"
                asChild
              >
                <Link href="/termin-vereinbaren">
                  Termin vereinbaren
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filiale Info Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Ihre TARGOBANK Filiale in {city}</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg text-targo-blue mb-4">{standort.Name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-targo-blue mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{standort.Address}</span>
                  </div>
                  {standort.Phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-targo-blue flex-shrink-0" />
                      <a
                        href={`tel:${standort.Phone}`}
                        className="text-targo-blue hover:underline"
                      >
                        {standort.Phone}
                      </a>
                    </div>
                  )}
                  {standort.Status && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-targo-blue mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{standort.Status}</span>
                    </div>
                  )}
                </div>
                
                {standort.Timing && standort.Timing.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-sm text-gray-600 mb-3">Öffnungszeiten:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {standort.Timing.map((time, idx) => (
                        <div key={idx} className="flex justify-between text-sm text-gray-600">
                          <span>{time.day}:</span>
                          <span>{time.open_interval}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {standort.Rating && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{standort.Rating}</span>
                      {standort.Reviews && (
                        <span className="text-sm text-gray-600">({standort.Reviews} Bewertungen)</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapWrapper standorte={[standort]} />
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ihre Vorteile bei der Baufinanzierung in {city}
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Profitieren Sie von unserer langjährigen Erfahrung und persönlichen Beratung vor Ort.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vorteile.map((vorteil, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <vorteil.icon className="w-6 h-6 text-targo-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">{vorteil.titel}</h3>
                <p className="text-gray-700 text-sm">{vorteil.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Unsere Finanzierungsleistungen in {city}
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Von der Erstfinanzierung bis zur Anschlussfinanzierung – wir unterstützen Sie bei allen Finanzierungsvorhaben.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {leistungen.map((leistung, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{leistung}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-6">Baufinanzierung in {city} – Ihr Weg ins Eigenheim</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {city} ist eine attraktive Stadt für Immobilienkäufer und bietet vielfältige Möglichkeiten 
              für den Erwerb von Eigenheimen und Eigentumswohnungen. Ob Sie eine Immobilie zur 
              Eigennutzung suchen oder als Kapitalanlage investieren möchten – die TARGOBANK 
              unterstützt Sie mit maßgeschneiderten Finanzierungslösungen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unsere erfahrenen Baufinanzierungsberater in {city} kennen den lokalen Immobilienmarkt 
              und können Sie kompetent zu Preisen, Lagen und Finanzierungsmöglichkeiten beraten. 
              Gemeinsam entwickeln wir eine Finanzierungsstrategie, die zu Ihrem Budget und 
              Ihren Lebensumständen passt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Profitieren Sie von unseren günstigen Zinsen, flexiblen Tilgungsoptionen und der 
              Möglichkeit, staatliche Fördermittel wie KfW-Darlehen optimal in Ihre Finanzierung 
              einzubinden. Vereinbaren Sie noch heute einen Beratungstermin in unserer Filiale 
              in {city}.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#003366] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Jetzt Baufinanzierung in {city} anfragen
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Lassen Sie sich unverbindlich beraten und erhalten Sie Ihr persönliches Finanzierungsangebot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/finanzierungsanfrage" className="flex items-center whitespace-nowrap">
                  Finanzierung anfragen
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                className="rounded-full px-8 py-6 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#003366]"
                asChild
              >
                <Link href={`tel:${standort.Phone}`}>
                  Jetzt anrufen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
