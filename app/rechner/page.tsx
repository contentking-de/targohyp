import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Percent, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Rechner - Targohyp",
  description: "Interaktive Rechner für Ihre Baufinanzierung",
};

export default function RechnerPage() {
  const rechner = [
    {
      id: "baufinanzierung",
      name: "Baufinanzierungsrechner",
      description: "Berechnen Sie Ihre monatliche Rate, Gesamtkosten und Tilgungsplan für Ihre Baufinanzierung.",
      icon: Calculator,
      features: ["Monatliche Rate", "Gesamtkosten", "Tilgungsplan", "PDF-Export"],
    },
    {
      id: "tilgung",
      name: "Tilgungsrechner",
      description: "Vergleichen Sie verschiedene Tilgungsmodelle und simulieren Sie Sondertilgungen.",
      icon: TrendingUp,
      features: ["Tilgungsmodelle", "Sondertilgungen", "Zinsänderungen", "Vergleich"],
    },
    {
      id: "eigenkapital",
      name: "Eigenkapitalrechner",
      description: "Berechnen Sie Ihr verfügbares Eigenkapital und identifizieren Sie Finanzierungslücken.",
      icon: DollarSign,
      features: ["Eigenkapital", "Förderungen", "Finanzierungslücke", "Empfehlungen"],
    },
    {
      id: "monatsrate",
      name: "Monatsrate-Rechner",
      description: "Prüfen Sie Ihre Belastbarkeit und spielen Sie verschiedene Finanzierungsszenarien durch.",
      icon: Percent,
      features: ["Belastbarkeit", "Szenarien", "Empfehlungen", "Speicherung"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Baufinanzierung berechnen
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nutzen Sie unsere interaktiven Rechner, um Ihre Baufinanzierung zu planen und die besten Konditionen zu finden.
            </p>
          </div>
        </div>
      </section>

      {/* Rechner-Übersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {rechner.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link
                  key={calc.id}
                  href={`/rechner/${calc.id}`}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-targo-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                        {calc.name}
                      </h3>
                      <p className="text-gray-700 mb-4">{calc.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-gray-600">Funktionen:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {calc.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-targo-blue font-semibold">
                    Rechner öffnen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              So funktionieren unsere Rechner
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-targo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Daten eingeben</h3>
                <p className="text-sm text-gray-600">
                  Geben Sie Ihre Finanzierungsdaten in den Rechner ein.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-targo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Berechnung</h3>
                <p className="text-sm text-gray-600">
                  Der Rechner berechnet automatisch alle relevanten Werte.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-targo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Ergebnis speichern</h3>
                <p className="text-sm text-gray-600">
                  Speichern Sie Ihre Berechnung oder exportieren Sie sie als PDF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

