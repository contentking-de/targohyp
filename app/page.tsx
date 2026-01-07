import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, BookOpen, FileText, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Targohyp - Ihr Finanzierungspartner für Bau und Immobilien",
  description: "Finden Sie die passende Baufinanzierung für Ihr Vorhaben. Mit unseren Rechnern, umfassenden Informationen und professioneller Beratung machen wir Ihre Immobilienfinanzierung einfach und transparent.",
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/targohyp-baufinanzierung.jpg)' }}
        ></div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 py-16 lg:py-24">
          <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 lg:p-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-0 mb-6">
              <Link
                href="/finanzierung"
                className="text-sm font-medium text-targo-blue border-b-2 border-targo-blue pb-1 mr-4"
              >
                Finanzierung
              </Link>
              <Link
                href="/rechner"
                className="text-sm font-medium text-gray-700 hover:text-targo-blue pb-1 mr-4"
              >
                Rechner
              </Link>
              <Link
                href="/ratgeber"
                className="text-sm font-medium text-gray-700 hover:text-targo-blue pb-1"
              >
                Top-Zinssätze
              </Link>
            </div>

            {/* Headline */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              IHR FINANZIERUNGSPARTER FÜR BAU UND IMMOBILIEN
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl">
              Finden Sie die passende Baufinanzierung für Ihr Vorhaben. Mit
              unseren Rechnern, umfassenden Informationen und professioneller
              Beratung machen wir Ihre Immobilienfinanzierung einfach und
              transparent.
            </p>

            {/* CTA Button */}
            <Button
              className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/finanzierungsanfrage">Jetzt von unsere Experten beraten lassen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-12 text-[rgb(0,47,95)] text-center max-w-4xl mx-auto">
              Finanzierung ist mehr als Zahlen. Es geht um Entscheidungen fürs Leben.
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 text-lg text-gray-700 leading-relaxed max-w-7xl mx-auto">
              <div className="space-y-6">
                <p>
                  Eine Immobilie zu finanzieren ist kein kleiner Schritt. Es geht um große Summen, langfristige Verpflichtungen und viele Fragen, die man nicht jeden Tag trifft. <strong>Das wissen wir. Und genau deshalb nehmen wir uns Zeit, zuzuhören und zu verstehen, was Ihnen wirklich wichtig ist.</strong>
                </p>
                <p>
                  Ob Sie den Traum vom eigenen Zuhause verwirklichen möchten oder gezielt in Immobilien investieren wollen: Jede Situation ist anders. Lebenspläne, finanzielle Möglichkeiten und persönliche Ziele lassen sich nicht in starre Modelle pressen. Eine gute Finanzierung beginnt deshalb nicht mit einem Produkt, sondern mit einem Gespräch.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Eine eigene Immobilie kann Sicherheit geben, Freiheit schaffen und Werte für die Zukunft aufbauen. Für Eigennutzer ebenso wie für Kapitalanleger kann sie ein wichtiger Baustein einer soliden finanziellen Planung sein – wenn sie gut durchdacht und passend finanziert ist.
                </p>
                <p>
                  Wir begleiten Sie auf diesem Weg: transparent, verständlich und auf Augenhöhe. Schritt für Schritt. Damit aus einem komplexen Thema eine klare Entscheidung wird – und aus einer Idee ein gutes Gefühl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Text */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Wie können wir Ihnen helfen?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sie möchten eine Baufinanzierung für Ihr Eigenheim, eine
                Anschlussfinanzierung oder benötigen Informationen zu aktuellen
                Zinssätzen? Wir unterstützen Sie mit umfassenden Informationen,
                interaktiven Rechnern und professioneller Beratung bei Ihrer
                Baufinanzierung.
              </p>
            </div>

            {/* Right Side - Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <Link
                href="/finanzierung"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-targo-blue transition-all group cursor-pointer flex items-start justify-between"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-targo-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-targo-blue transition-colors">
                      Finanzierung vergleichen
                    </h3>
                    <p className="text-sm text-gray-600">
                      Finden Sie die passende Baufinanzierung
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-targo-blue transition-colors flex-shrink-0 ml-2" />
              </Link>

              {/* Card 2 */}
              <Link
                href="/rechner"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-targo-blue transition-all group cursor-pointer flex items-start justify-between"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-5 h-5 text-targo-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-targo-blue transition-colors">
                      Finanzierung berechnen
                    </h3>
                    <p className="text-sm text-gray-600">
                      Nutzen Sie unsere interaktiven Rechner
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-targo-blue transition-colors flex-shrink-0 ml-2" />
              </Link>

              {/* Card 3 */}
              <Link
                href="/ratgeber"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-targo-blue transition-all group cursor-pointer flex items-start justify-between"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-targo-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-targo-blue transition-colors">
                      Ratgeber lesen
                    </h3>
                    <p className="text-sm text-gray-600">
                      Umfassende Informationen zur Baufinanzierung
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-targo-blue transition-colors flex-shrink-0 ml-2" />
              </Link>

              {/* Card 4 */}
              <Link
                href="/kontakt"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-targo-blue transition-all group cursor-pointer flex items-start justify-between"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-targo-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-targo-blue transition-colors">
                      Beratung anfragen
                    </h3>
                    <p className="text-sm text-gray-600">
                      Lassen Sie sich persönlich beraten
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-targo-blue transition-colors flex-shrink-0 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
