"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CheckCircle2, Calculator, FileText, Shield } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function KapitalanlagePage() {
  const vorteile = [
    "Regelmäßige Mieteinnahmen",
    "Langfristige Wertsteigerung",
    "Inflationsschutz",
    "Steuerliche Vorteile",
    "Diversifikation des Portfolios",
    "Sicherheit durch Sachwerte",
  ];

  const schritte = [
    {
      title: "Ziel definieren",
      description: "Definieren Sie Ihre Anlageziele: Rendite, Sicherheit oder langfristige Wertsteigerung.",
    },
    {
      title: "Immobilie finden",
      description: "Finden Sie die passende Immobilie mit optimalem Rendite-Risiko-Verhältnis.",
    },
    {
      title: "Finanzierung optimieren",
      description: "Wir finden die beste Finanzierungslösung für Ihre Kapitalanlage.",
    },
    {
      title: "Vermietung & Management",
      description: "Unterstützung bei der Vermietung und dem Management Ihrer Immobilie.",
    },
  ];

  return (
    <div className="w-full">
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Immobilien", url: "/immobilien" },
        { name: "Immobilie als Kapitalanlage", url: "/immobilien/kapitalanlage" }
      ]} />

      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/immobilien" className="text-targo-blue hover:underline">
              Immobilien
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Immobilie als Kapitalanlage</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[rgb(0,47,95)]">
                Immobilie als Kapitalanlage
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Immobilien sind eine bewährte Form der Kapitalanlage. Wir unterstützen Sie bei der 
              Auswahl, Finanzierung und dem Management Ihrer Immobilieninvestition.
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            Vorteile von Immobilien als Kapitalanlage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {vorteile.map((vorteil, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{vorteil}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schritte Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            So investieren Sie erfolgreich
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {schritte.map((schritt, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#bb133e] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
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

      {/* Tools Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Hilfreiche Tools</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/rechner/renditerechner"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Renditerechner
              </h3>
              <p className="text-gray-700 mb-4">
                Berechnen Sie die Rendite Ihrer Immobilieninvestition.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Rechner öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/finanzierung/kapitalanlage-finanzieren"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Kapitalanlage-Finanzierung
              </h3>
              <p className="text-gray-700 mb-4">
                Informieren Sie sich über Finanzierungsmöglichkeiten.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Mehr erfahren
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
                Investment-Ratgeber
              </h3>
              <p className="text-gray-700 mb-4">
                Wertvolle Tipps für Immobilieninvestitionen.
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
              Bereit für Ihre Immobilieninvestition?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne zu allen Aspekten der Immobilieninvestition und finden die passende Finanzierung.
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
                <Link href="/rechner/renditerechner" className="flex items-center justify-center whitespace-nowrap">
                  Rendite berechnen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
