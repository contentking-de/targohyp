import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Home, TrendingUp, Shield, Calculator, Award } from "lucide-react";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Baufinanzierung für Beamte | Günstige Zinsen | Targohyp",
  description: "Spezielle Baufinanzierung für Beamte mit besonders günstigen Konditionen. Nutzen Sie Ihre sichere berufliche Situation für attraktive Zinssätze. Jetzt unverbindlich anfragen.",
}, { path: "/finanzierung/baufinanzierung/beamte" });

export default function BaufinanzierungBeamtePage() {
  const vorteile = [
    "Besonders günstige Zinssätze durch sichere berufliche Situation",
    "Finanzierung bis zu 110% des Kaufpreises möglich",
    "Lange Laufzeiten bis zu 35 Jahren",
    "Niedrigere Tilgungsraten möglich",
    "Keine zusätzlichen Sicherheiten erforderlich",
    "Schnelle Bearbeitung und Zusage",
  ];

  const produkte = [
    {
      name: "Baufinanzierung Beamte Classic",
      zins: "2,85%",
      laufzeit: "10-35 Jahre",
      beschreibung: "Die klassische Baufinanzierung für Beamte mit besonders günstigen Konditionen.",
    },
    {
      name: "Baufinanzierung Beamte Premium",
      zins: "2,65%",
      laufzeit: "15-35 Jahre",
      beschreibung: "Premium-Baufinanzierung für Beamte mit Top-Zinssätzen und langen Laufzeiten.",
    },
    {
      name: "Baufinanzierung Beamte Flex",
      zins: "2,75%",
      laufzeit: "5-20 Jahre",
      beschreibung: "Flexible Baufinanzierung für Beamte mit variablen Zinssätzen.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/finanzierung" className="text-targo-blue hover:underline">
              Finanzierung
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/finanzierung/baufinanzierung" className="text-targo-blue hover:underline">
              Baufinanzierung
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Baufinanzierung für Beamte</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Baufinanzierung für Beamte
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Als Beamter profitieren Sie von besonders günstigen Konditionen bei Ihrer Baufinanzierung. Ihre sichere berufliche Situation ermöglicht attraktive Zinssätze und flexible Finanzierungsmodelle für Ihr Eigenheim.
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Warum eine Baufinanzierung für Beamte bei uns?</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Als Beamter haben Sie eine besonders sichere berufliche Situation, die Banken schätzen. Wir bieten Ihnen daher speziell auf Ihre Bedürfnisse zugeschnittene Baufinanzierungen mit besonders attraktiven Konditionen.
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
              <h3 className="text-2xl font-bold mb-4">Unsere Produkte für Beamte</h3>
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
            <h2 className="text-2xl font-bold mb-6">Besondere Vorteile für Beamte</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Als Beamter genießen Sie bei der Baufinanzierung besondere Vorteile. Ihre sichere berufliche Situation und das garantierte Einkommen werden von Banken besonders geschätzt, was sich in günstigeren Zinssätzen und flexibleren Konditionen niederschlägt.
              </p>
              <p>
                Viele Banken bieten Beamten Finanzierungen bis zu 110% des Kaufpreises an, da das Ausfallrisiko als geringer eingestuft wird. Zudem sind längere Laufzeiten und niedrigere Tilgungsraten möglich, was Ihre monatliche Belastung reduziert.
              </p>
              <p>
                <strong>Wichtig:</strong> Nutzen Sie Ihre berufliche Situation optimal aus. Unsere Experten kennen die speziellen Konditionen für Beamte und helfen Ihnen dabei, die beste Lösung für Ihre Baufinanzierung zu finden.
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
                Baufinanzierungsrechner
              </h3>
              <p className="text-gray-700 mb-4">
                Berechnen Sie Ihre monatliche Rate und Gesamtkosten.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Rechner öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/rechner/eigenkapital"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Eigenkapitalrechner
              </h3>
              <p className="text-gray-700 mb-4">
                Prüfen Sie Ihr verfügbares Eigenkapital.
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
                Vergleichen Sie verschiedene Zinsoptionen.
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
              Bereit für Ihre Baufinanzierung als Beamter?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und finden die passende Lösung für Ihre Baufinanzierung. Profitieren Sie von den besonderen Konditionen für Beamte.
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
