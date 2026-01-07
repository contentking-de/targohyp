import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, BookOpen, FileText, Scale } from "lucide-react";

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
                href="/produkte"
                className="text-sm font-medium text-targo-blue border-b-2 border-targo-blue pb-1 mr-4"
              >
                Produkte
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
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              IHR PARTNER FÜR DIE BAUFINANZIERUNG
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl">
              Finden Sie die passende Baufinanzierung für Ihr Vorhaben. Mit
              unseren Rechnern, umfassenden Informationen und professioneller
              Beratung machen wir Ihre Immobilienfinanzierung einfach und
              transparent.
            </p>

            {/* CTA Button */}
            <Button
              className="bg-targo-blueLight hover:bg-targo-blue text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/produkte">Zur Baufinanzierung</Link>
            </Button>
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
                href="/produkte"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-targo-blue transition-all group cursor-pointer flex items-start justify-between"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-targo-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-targo-blue transition-colors">
                      Produkte vergleichen
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
