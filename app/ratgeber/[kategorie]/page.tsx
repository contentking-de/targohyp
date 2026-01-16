import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, ArrowLeft, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { kategorien, getKategorieById } from "@/lib/ratgeber-data";
import { getArtikelContent } from "@/lib/ratgeber-content";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    kategorie: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { kategorie: kategorieId } = await params;
  const kategorie = getKategorieById(kategorieId);
  
  if (!kategorie) {
    return createMetadata({
      title: "Kategorie nicht gefunden | Targohyp",
      description: "Die angeforderte Kategorie konnte im Ratgeber nicht gefunden werden.",
    }, { path: `/ratgeber/${kategorieId}` });
  }

  return createMetadata({
    title: `${kategorie.title} - Ratgeber | Targohyp`,
    description: kategorie.description,
  }, { path: `/ratgeber/${kategorieId}` });
}

export async function generateStaticParams() {
  return kategorien.map((kategorie) => ({
    kategorie: kategorie.id,
  }));
}

export default async function KategoriePage({ params }: PageProps) {
  const { kategorie: kategorieId } = await params;
  const kategorie = getKategorieById(kategorieId);

  if (!kategorie) {
    notFound();
  }

  const Icon = kategorie.icon;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Link
              href="/ratgeber"
              className="inline-flex items-center text-targo-blue hover:text-targo-blue/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Ratgeber-Übersicht
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {kategorie.title}
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {kategorie.description}
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
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                asChild
              >
                <Link href="/ratgeber">Alle Kategorien</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel-Übersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          {kategorie.artikel.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {kategorie.artikel.map((artikel) => {
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
                        <p className="text-base text-gray-600 mb-3 leading-relaxed">
                          {content.intro.length > 150 ? `${content.intro.substring(0, 150)}...` : content.intro}
                        </p>
                      )}
                      {(content?.author || content?.createdAt) && (
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3 pt-3 border-t border-gray-100">
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
                      <div className="flex items-center text-sm text-targo-blue font-semibold mt-4">
                        Weiterlesen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-600">
                FAQs werden in Kürze verfügbar sein.
              </p>
            </div>
          )}
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
