import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Calculator, BookOpen } from "lucide-react";

export const metadata = {
  title: "Baufinanzierung für Geschäftskunden - Gewerbeimmobilien | Targohyp",
  description: "Spezialisierte Baufinanzierung für Geschäftskunden. Finanzierungslösungen für Gewerbeimmobilien, Bürogebäude und gewerbliche Nutzung. Individuelle Konditionen.",
};

export default function GeschaeftskundenPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Baufinanzierung für Geschäftskunden
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Spezialisierte Finanzierungslösungen für Ihr Geschäft. Von Gewerbeimmobilien bis hin zu Investitionsvorhaben - wir unterstützen Sie mit maßgeschneiderten Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/finanzierung"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Gewerbeimmobilien
              </h3>
              <p className="text-gray-700 mb-4">
                Finanzierungslösungen für Gewerbeimmobilien und Geschäftsräume.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Mehr erfahren
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/rechner"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Rechner
              </h3>
              <p className="text-gray-700 mb-4">
                Berechnen Sie Ihre Finanzierungskosten und monatlichen Raten.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Rechner öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/ratgeber"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Informationen
              </h3>
              <p className="text-gray-700 mb-4">
                Ratgeber und Informationen zur Geschäftskunden-Finanzierung.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Ratgeber lesen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#003366] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Individuelle Beratung gewünscht?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten helfen Ihnen dabei, die passende Finanzierungslösung für Ihr Geschäft zu finden.
            </p>
            <Button
              className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/finanzierungsanfrage" className="flex items-center whitespace-nowrap">
                Beratung anfragen
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

