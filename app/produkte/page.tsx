import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Produkte - Targohyp",
  description: "Übersicht unserer Baufinanzierungsprodukte",
};

export default function ProduktePage() {
  // Beispiel-Produkte (später aus Datenbank)
  const produkte = [
    {
      id: 1,
      name: "Baufinanzierung Classic",
      zins: "3,45%",
      laufzeit: "10-30 Jahre",
      tilgung: "ab 1%",
      beschreibung: "Die klassische Baufinanzierung für Ihr Eigenheim mit festem Zinssatz.",
      vorteile: ["Fester Zinssatz", "Flexible Laufzeit", "Sondertilgung möglich"],
    },
    {
      id: 2,
      name: "Baufinanzierung Flex",
      zins: "3,15%",
      laufzeit: "5-15 Jahre",
      tilgung: "ab 2%",
      beschreibung: "Flexible Baufinanzierung mit variablen Zinssätzen und kurzer Laufzeit.",
      vorteile: ["Niedrige Zinsen", "Kurze Laufzeit", "Hohe Flexibilität"],
    },
    {
      id: 3,
      name: "Baufinanzierung Premium",
      zins: "2,95%",
      laufzeit: "15-35 Jahre",
      tilgung: "ab 1%",
      beschreibung: "Premium-Baufinanzierung mit besonders günstigen Konditionen für hohe Darlehenssummen.",
      vorteile: ["Top-Zinssatz", "Lange Laufzeit", "Individuelle Beratung"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Unsere Baufinanzierungsprodukte
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Finden Sie die passende Baufinanzierung für Ihr Vorhaben. Vergleichen Sie unsere Produkte und finden Sie die besten Konditionen.
            </p>
          </div>
        </div>
      </section>

      {/* Produktübersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          {/* Filter & Sortierung */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="rounded-full">
                Alle Produkte
              </Button>
              <Button variant="outline" className="rounded-full">
                Feste Zinsen
              </Button>
              <Button variant="outline" className="rounded-full">
                Variable Zinsen
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              {produkte.length} Produkte verfügbar
            </div>
          </div>

          {/* Produktliste */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {produkte.map((produkt) => (
              <div
                key={produkt.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{produkt.name}</h3>
                    <div className="flex items-center gap-2 text-targo-blue">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-2xl font-bold">{produkt.zins}</span>
                      <span className="text-sm text-gray-600">p.a.</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{produkt.beschreibung}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>Laufzeit: {produkt.laufzeit}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>Tilgung: {produkt.tilgung}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Vorteile:</h4>
                  <ul className="space-y-1">
                    {produkt.vorteile.map((vorteil, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-targo-blue flex-shrink-0" />
                        {vorteil}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-targo-blueLight hover:bg-targo-blue text-white rounded-full"
                    asChild
                  >
                    <Link href={`/produkte/${produkt.id}`}>
                      Details ansehen
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    asChild
                  >
                    <Link href="/vergleiche">
                      Vergleichen
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-targo-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Individuelle Beratung gewünscht?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Unsere Experten helfen Ihnen dabei, die passende Baufinanzierung zu finden.
            </p>
            <Button
              className="bg-white text-targo-blue hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/kontakt">
                Beratung anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

