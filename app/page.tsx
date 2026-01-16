import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, BookOpen, FileText, Scale } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { createMetadata } from "@/lib/utils";
import { kategorien, getAllArtikel } from "@/lib/ratgeber-data";
import { getArtikelContent } from "@/lib/ratgeber-content";

export const metadata: Metadata = createMetadata({
  title: "Targohyp - Ihr Finanzierungspartner für Bau und Immobilien",
  description: "Finden Sie die passende Baufinanzierung für Ihr Vorhaben. Mit unseren Rechnern, umfassenden Informationen und professioneller Beratung machen wir Ihre Immobilienfinanzierung einfach und transparent.",
}, { path: "/" });

export default function Home() {
  // Hole alle Artikel und sortiere nach Erstellungsdatum (neueste zuerst)
  const allArtikel = getAllArtikel()
    .map(({ kategorie, artikel }) => {
      const content = getArtikelContent(kategorie.id, artikel.id);
      return {
        kategorie,
        artikel,
        content,
        createdAt: content?.createdAt || artikel.createdAt || "2000-01-01",
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA; // Neueste zuerst
    })
    .slice(0, 3); // Nimm die 3 neuesten

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

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
                href="/termin-vereinbaren"
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

      {/* Neueste Ratgeber-Artikel Section */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[rgb(0,47,95)]">
              Neueste Ratgeber-Artikel
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Bleiben Sie auf dem Laufenden mit unseren aktuellsten Artikeln rund um Baufinanzierung und Immobilien.
            </p>
          </div>

          {allArtikel.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allArtikel.map(({ kategorie, artikel, content }) => (
                <Link
                  key={`${kategorie.id}-${artikel.id}`}
                  href={`/ratgeber/${kategorie.id}/${artikel.id}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-targo-blue transition-all group"
                >
                  {artikel.image && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={artikel.image}
                        alt={artikel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-targo-blue bg-targo-blue/10 px-3 py-1 rounded-full">
                        {kategorie.title}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                      {artikel.title}
                    </h3>
                    {content?.intro && (
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {content.intro.length > 150 ? `${content.intro.substring(0, 150)}...` : content.intro}
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        {content?.createdAt && (
                          <span>
                            {new Date(content.createdAt).toLocaleDateString('de-DE', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-targo-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Aktuell sind keine Artikel verfügbar.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Button
              className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/ratgeber" className="flex items-center justify-center gap-2">
                Alle Ratgeber-Artikel ansehen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
