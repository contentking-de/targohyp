import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { kategorien } from "@/lib/ratgeber-data";
import { getArtikelContent } from "@/lib/ratgeber-content";
import { createMetadata } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata = createMetadata({
  title: "Ratgeber zur Baufinanzierung - Tipps & Informationen | Targohyp",
  description: "Umfassende Ratgeber und Informationen zur Baufinanzierung. Von der ersten Planung bis zur Umschuldung - alles was Sie über Immobilienfinanzierung wissen müssen.",
}, { path: "/ratgeber" });

export default function RatgeberPage() {

  const allKategorien = ["Alle", ...kategorien.map((k) => k.title)];

  return (
    <div className="w-full">
      {/* BreadcrumbList Schema-Markup */}
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Ratgeber", url: "/ratgeber" }
      ]} />
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-targo-blue hover:underline">
              Startseite
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Ratgeber</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ratgeber zur Baufinanzierung
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Umfassende Informationen, Checklisten und Schritt-für-Schritt-Anleitungen für Ihre Baufinanzierung.
            </p>
          </div>
        </div>
      </section>

      {/* Suche & Filter */}
      <section className="w-full py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Artikel durchsuchen..."
                className="pl-10 rounded-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                className="bg-white border border-gray-600 text-gray-900 hover:bg-gray-50 rounded-full"
              >
                Alle
              </Button>
              {kategorien.map((kat) => (
                <Button
                  key={kat.id}
                  className="bg-white border border-gray-600 text-gray-900 hover:bg-gray-50 rounded-full"
                  asChild
                >
                  <Link href={`/ratgeber/${kat.id}`}>{kat.title}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kategorien & Artikel */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {kategorien.map((kategorie) => {
              const Icon = kategorie.icon;
              return (
                <div key={kategorie.id} className="space-y-6">
                  {/* Kategorie-Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-targo-blue" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {kategorie.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed max-w-4xl">
                      {kategorie.description}
                    </p>
                  </div>

                  {/* Artikel-Vorschau & Link zur Kategorie-Seite */}
                  {kategorie.artikel.length > 0 ? (
                    <div>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
                        {kategorie.artikel.slice(0, 3).map((artikel) => {
                          const content = getArtikelContent(kategorie.id, artikel.id);
                          return (
                            <Link
                              key={artikel.id}
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
                                <h3 className="text-lg font-bold mb-2 group-hover:text-targo-blue transition-colors">
                                  {artikel.title}
                                </h3>
                                {content?.intro && (
                                  <p className="text-base text-gray-600 leading-relaxed mb-3">
                                    {content.intro.length > 150 ? `${content.intro.substring(0, 150)}...` : content.intro}
                                  </p>
                                )}
                                {(content?.author || content?.createdAt) && (
                                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 pt-3 border-t border-gray-100">
                                    {content.author && (
                                      <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                                        <User className="w-3 h-3" />
                                        {content.author}
                                      </span>
                                    )}
                                    {content.createdAt && (
                                      <span>
                                        {new Date(content.createdAt).toLocaleDateString('de-DE', {
                                          year: 'numeric',
                                          month: 'long',
                                          day: 'numeric'
                                        })}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <Link
                        href={`/ratgeber/${kategorie.id}`}
                        className="inline-flex items-center text-targo-blue font-semibold hover:text-targo-blue/80 transition-colors"
                      >
                        Alle Artikel in dieser Kategorie anzeigen
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                      <p className="text-gray-600">
                        FAQs werden in Kürze verfügbar sein.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Bleiben Sie informiert
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Abonnieren Sie unseren Newsletter und erhalten Sie regelmäßig neue Ratgeber-Artikel und Tipps zur Baufinanzierung.
            </p>
            <Button
              className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/newsletter" className="flex items-center whitespace-nowrap">
                Newsletter abonnieren
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
