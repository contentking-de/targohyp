import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Calculator, BookOpen } from "lucide-react";

export const metadata = {
  title: "Firmenkunden - Targohyp",
  description: "Baufinanzierung für Firmenkunden",
};

export default function FirmenkundenPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Baufinanzierung für Firmenkunden
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Umfassende Finanzierungslösungen für Unternehmen. Von Immobilieninvestitionen bis hin zu Unternehmensfinanzierungen - wir bieten maßgeschneiderte Lösungen für Ihre Bedürfnisse.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/produkte"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Unternehmensfinanzierung
              </h3>
              <p className="text-gray-700 mb-4">
                Finanzierungslösungen für Unternehmen und Investitionsvorhaben.
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
                Berechnen Sie Ihre Finanzierungskosten und verschiedene Szenarien.
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
                Ratgeber und Informationen zur Firmenkunden-Finanzierung.
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
      <section className="w-full bg-targo-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Individuelle Beratung gewünscht?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Unsere Experten helfen Ihnen dabei, die passende Finanzierungslösung für Ihr Unternehmen zu finden.
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

