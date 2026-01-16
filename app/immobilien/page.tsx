"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, TrendingUp, MapPin, Calculator, FileText } from "lucide-react";

export default function ImmobilienPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[rgb(0,47,95)]">
              Immobilien – Ihr Weg zum Traumhaus
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ob Kauf, Verkauf oder Finanzierung – wir unterstützen Sie bei allen Fragen rund um Ihre Immobilie. 
              Von der ersten Beratung bis zur erfolgreichen Umsetzung.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            Unsere Immobilien-Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Immobilienbewertung */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#bb133e] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[rgb(0,47,95)]">
                Immobilienbewertung
              </h3>
              <p className="text-gray-700 mb-6">
                Lassen Sie Ihre Immobilie kostenlos von unseren Experten bewerten. 
                Professionelle Wertermittlung für Käufer und Verkäufer.
              </p>
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                asChild
              >
                <Link href="/immobilienbewertung" className="flex items-center gap-2">
                  Zur Bewertung
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Finanzierung */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#bb133e] rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[rgb(0,47,95)]">
                Immobilienfinanzierung
              </h3>
              <p className="text-gray-700 mb-6">
                Finden Sie die passende Finanzierung für Ihre Immobilie. 
                Von der Baufinanzierung bis zur Anschlussfinanzierung.
              </p>
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                asChild
              >
                <Link href="/finanzierung" className="flex items-center gap-2">
                  Zur Finanzierung
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Rechner */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#bb133e] rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[rgb(0,47,95)]">
                Finanzierungsrechner
              </h3>
              <p className="text-gray-700 mb-6">
                Berechnen Sie Ihre monatliche Rate, Eigenkapitalbedarf oder 
                die Gesamtkosten Ihrer Immobilienfinanzierung.
              </p>
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                asChild
              >
                <Link href="/rechner" className="flex items-center gap-2">
                  Zu den Rechnern
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Ratgeber */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#bb133e] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[rgb(0,47,95)]">
                Immobilien-Ratgeber
              </h3>
              <p className="text-gray-700 mb-6">
                Wertvolle Tipps und Informationen rund um Kauf, Verkauf 
                und Finanzierung von Immobilien.
              </p>
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                asChild
              >
                <Link href="/ratgeber" className="flex items-center gap-2">
                  Zum Ratgeber
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Standorte */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#bb133e] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[rgb(0,47,95)]">
                Unsere Standorte
              </h3>
              <p className="text-gray-700 mb-6">
                Besuchen Sie uns in einer unserer Filialen oder vereinbaren 
                Sie einen persönlichen Beratungstermin.
              </p>
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                asChild
              >
                <Link href="/standorte" className="flex items-center gap-2">
                  Standorte finden
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Termin vereinbaren */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#bb133e] rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[rgb(0,47,95)]">
                Beratungstermin
              </h3>
              <p className="text-gray-700 mb-6">
                Vereinbaren Sie einen persönlichen Beratungstermin mit 
                unseren Immobilienexperten.
              </p>
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                asChild
              >
                <Link href="/termin-vereinbaren" className="flex items-center gap-2">
                  Termin vereinbaren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="w-full bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-900">
              Alles rund um Immobilien
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[rgb(0,47,95)]">
                  Immobilien kaufen
                </h3>
                <p className="text-gray-700 mb-4">
                  Der Kauf einer Immobilie ist eine der wichtigsten Entscheidungen im Leben. 
                  Wir unterstützen Sie bei der Finanzierung und helfen Ihnen, die passende 
                  Immobilie zu finden.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb133e] mt-1">•</span>
                    <span>Baufinanzierung für Ihr Eigenheim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb133e] mt-1">•</span>
                    <span>Finanzierung von Kapitalanlagen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb133e] mt-1">•</span>
                    <span>Individuelle Beratung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[rgb(0,47,95)]">
                  Immobilien verkaufen
                </h3>
                <p className="text-gray-700 mb-4">
                  Beim Verkauf Ihrer Immobilie ist eine professionelle Bewertung entscheidend. 
                  Wir helfen Ihnen, den richtigen Preis zu finden und unterstützen Sie bei 
                  der Finanzierung für Ihre Käufer.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb133e] mt-1">•</span>
                    <span>Kostenlose Immobilienbewertung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb133e] mt-1">•</span>
                    <span>Marktanalyse und Preisempfehlung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb133e] mt-1">•</span>
                    <span>Finanzierungsunterstützung für Käufer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#003366] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Individuelle Beratung gewünscht?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Immobilienexperten helfen Ihnen bei allen Fragen rund um Kauf, 
              Verkauf und Finanzierung Ihrer Immobilie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/termin-vereinbaren" className="flex items-center justify-center whitespace-nowrap">
                  Termin vereinbaren
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/immobilienbewertung" className="flex items-center justify-center whitespace-nowrap">
                  Kostenlose Bewertung
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
