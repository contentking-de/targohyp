"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, CheckCircle2, Calculator, FileText, Shield } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function ImmobilieKaufenPage() {
  const schritte = [
    {
      step: "1",
      title: "Finanzierung planen",
      description: "Berechnen Sie Ihr Budget und finden Sie die passende Finanzierung.",
    },
    {
      step: "2",
      title: "Immobilie finden",
      description: "Nutzen Sie unsere Tools und Ratgeber für die Suche nach der perfekten Immobilie.",
    },
    {
      step: "3",
      title: "Besichtigung & Bewertung",
      description: "Lassen Sie die Immobilie professionell bewerten und prüfen Sie alle Details.",
    },
    {
      step: "4",
      title: "Kaufvertrag & Finanzierung",
      description: "Wir unterstützen Sie bei der Vertragsprüfung und der finalen Finanzierung.",
    },
  ];

  const vorteile = [
    "Individuelle Beratung von Experten",
    "Günstige Finanzierungskonditionen",
    "Professionelle Immobilienbewertung",
    "Unterstützung bei der Vertragsprüfung",
    "Schnelle Bearbeitung und Zusage",
    "Langfristige Betreuung",
  ];

  return (
    <div className="w-full">
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Immobilien", url: "/immobilien" },
        { name: "Immobilie kaufen", url: "/immobilien/immobilie-kaufen" }
      ]} />

      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/immobilien" className="text-targo-blue hover:underline">
              Immobilien
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Immobilie kaufen</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[rgb(0,47,95)]">
                Immobilie kaufen
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Der Kauf einer Immobilie ist eine der wichtigsten Entscheidungen in Ihrem Leben. 
              Wir begleiten Sie von der ersten Beratung bis zum erfolgreichen Kauf und unterstützen 
              Sie bei der Finanzierung.
            </p>
          </div>
        </div>
      </section>

      {/* Schritte Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            So funktioniert der Immobilienkauf
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {schritte.map((schritt, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#bb133e] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{schritt.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[rgb(0,47,95)]">
                      {schritt.title}
                    </h3>
                    <p className="text-gray-700">
                      {schritt.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-900">
              Warum mit uns kaufen?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {vorteile.map((vorteil, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{vorteil}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Hilfreiche Tools</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                Berechnen Sie Ihre monatliche Rate und Gesamtkosten.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Rechner öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/immobilienbewertung"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Immobilienbewertung
              </h3>
              <p className="text-gray-700 mb-4">
                Lassen Sie Ihre Wunschimmobilie kostenlos bewerten.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Zur Bewertung
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/ratgeber"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Kauf-Ratgeber
              </h3>
              <p className="text-gray-700 mb-4">
                Wertvolle Tipps und Checklisten für den Immobilienkauf.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Zum Ratgeber
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
              Bereit für den Immobilienkauf?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und finden die passende Finanzierung für Ihre Immobilie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/finanzierungsanfrage" className="flex items-center justify-center whitespace-nowrap">
                  Beratung anfragen
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/rechner/baufinanzierung" className="flex items-center justify-center whitespace-nowrap">
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
