import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, RefreshCw, TrendingUp, Shield, Calculator } from "lucide-react";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Anschlussfinanzierung - Günstige Zinsen sichern | Targohyp",
  description: "Günstige Anschlussfinanzierung für Ihre bestehende Immobilie. Profitieren Sie von aktuellen Zinssätzen, besseren Konditionen und flexiblen Laufzeiten. Jetzt umschulden und sparen.",
}, { path: "/finanzierung/anschlussfinanzierung" });

export default function AnschlussfinanzierungPage() {
  const vorteile = [
    "Profitieren Sie von aktuellen Zinssätzen",
    "Mögliche Zinssenkung bei günstigeren Marktlagen",
    "Flexible Anpassung der Laufzeit und Tilgung",
    "Schnelle Bearbeitung und Umschuldung",
    "Keine Vorfälligkeitsentschädigung bei rechtzeitiger Planung",
    "Individuelle Beratung für Ihre Situation",
  ];

  const produkte = [
    {
      name: "Anschlussfinanzierung Classic",
      zins: "3,40%",
      laufzeit: "10-30 Jahre",
      beschreibung: "Die klassische Anschlussfinanzierung mit festem Zinssatz für langfristige Planungssicherheit.",
    },
    {
      name: "Anschlussfinanzierung Flex",
      zins: "3,10%",
      laufzeit: "5-15 Jahre",
      beschreibung: "Flexible Anschlussfinanzierung mit variablen Zinssätzen für kurzfristige Lösungen.",
    },
    {
      name: "Anschlussfinanzierung Premium",
      zins: "2,90%",
      laufzeit: "15-35 Jahre",
      beschreibung: "Premium-Anschlussfinanzierung mit besonders günstigen Konditionen.",
    },
  ];

  // FinancialProduct Schema-Markup für alle Produkte
  const financialProductsSchema = produkte.map((produkt) => ({
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": produkt.name,
    "description": produkt.beschreibung,
    "interestRate": parseFloat(produkt.zins.replace(",", ".")),
    "provider": {
      "@type": "Organization",
      "name": "TARGOBANK AG",
      "url": "https://www.targobank.de"
    },
    "offers": {
      "@type": "Offer",
      "description": `${produkt.name}: ${produkt.beschreibung}`,
      "availability": "https://schema.org/InStock"
    },
    "category": "Anschlussfinanzierung",
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    }
  }));

  return (
    <div className="w-full">
      {/* FinancialProduct Schema-Markup */}
      {financialProductsSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/finanzierung" className="text-targo-blue hover:underline">
              Finanzierung
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Anschlussfinanzierung</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Anschlussfinanzierung
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ihre aktuelle Finanzierung läuft ab? Nutzen Sie die Gelegenheit für eine günstige Anschlussfinanzierung. Wir helfen Ihnen dabei, die besten Konditionen zu finden und Ihre Finanzierung zu optimieren.
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Warum eine Anschlussfinanzierung bei uns?</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Wenn Ihre aktuelle Finanzierung ausläuft, haben Sie die Chance, von aktuellen Zinssätzen zu profitieren und Ihre Finanzierung zu optimieren. Wir unterstützen Sie dabei, die beste Lösung für Ihre Situation zu finden.
              </p>
              <div className="space-y-4">
                {vorteile.map((vorteil, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-targo-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{vorteil}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Unsere Produkte</h3>
              <div className="space-y-6">
                {produkte.map((produkt, idx) => (
                  <div key={idx} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold">{produkt.name}</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-targo-blue">{produkt.zins}</div>
                        <div className="text-sm text-gray-600">p.a.</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{produkt.beschreibung}</p>
                    <div className="text-sm text-gray-600">Laufzeit: {produkt.laufzeit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Wann ist eine Anschlussfinanzierung sinnvoll?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Eine Anschlussfinanzierung ist sinnvoll, wenn Ihre aktuelle Finanzierung ausläuft und Sie die Immobilie weiterhin finanzieren möchten. Dies ist der ideale Zeitpunkt, um:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Von aktuellen, möglicherweise günstigeren Zinssätzen zu profitieren</li>
                <li>Die Laufzeit und Tilgung an Ihre aktuelle Situation anzupassen</li>
                <li>Die monatliche Rate zu optimieren</li>
                <li>Zusätzliche Mittel freizusetzen (z.B. durch höhere Tilgung)</li>
                <li>Die Finanzierung zu einem anderen Anbieter zu wechseln</li>
              </ul>
              <p className="mt-4">
                <strong>Wichtig:</strong> Planen Sie rechtzeitig! Beginnen Sie etwa 6 Monate vor Ablauf Ihrer aktuellen Finanzierung mit der Suche nach einer Anschlussfinanzierung, um die besten Konditionen zu erhalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Hilfreiche Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/rechner/baufinanzierung"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Finanzierungsrechner
              </h3>
              <p className="text-gray-700 mb-4">
                Berechnen Sie Ihre neue monatliche Rate.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Rechner öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/rechner/tilgung"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Tilgungsrechner
              </h3>
              <p className="text-gray-700 mb-4">
                Vergleichen Sie verschiedene Tilgungsmodelle.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Rechner öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/vergleiche/zinsvergleich"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Zinsvergleich
              </h3>
              <p className="text-gray-700 mb-4">
                Vergleichen Sie Festzins und variable Zinsen.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Vergleich ansehen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#003366] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Bereit für Ihre Anschlussfinanzierung?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und finden die passende Lösung für Ihre Anschlussfinanzierung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/finanzierungsanfrage" className="flex items-center whitespace-nowrap">
                  Beratung anfragen
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/rechner/baufinanzierung" className="flex items-center whitespace-nowrap">
                  Finanzierung berechnen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

