import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArtikelByAuthor } from "@/lib/ratgeber-data";
import { getAuthorInfo, getAuthorNameFromSlug, getAllAuthors } from "@/lib/ratgeber-content";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    autor: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { autor: autorSlug } = await params;
  const authorName = getAuthorNameFromSlug(autorSlug);
  
  if (!authorName) {
    return createMetadata({
      title: "Autor nicht gefunden | Targohyp",
      description: "Der angeforderte Autor konnte im Ratgeber nicht gefunden werden.",
    }, { path: `/ratgeber/autor/${autorSlug}` });
  }

  return createMetadata({
    title: `Artikel von ${authorName} - Ratgeber | Targohyp`,
    description: `Alle Ratgeber-Artikel von ${authorName} zum Thema Immobilienfinanzierung.`,
  }, { path: `/ratgeber/autor/${autorSlug}` });
}

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    autor: author.slug,
  }));
}

export default async function AutorPage({ params }: PageProps) {
  const { autor: autorSlug } = await params;
  const authorName = getAuthorNameFromSlug(autorSlug);

  if (!authorName) {
    notFound();
  }

  const authorInfo = getAuthorInfo(authorName);
  const artikel = getArtikelByAuthor(authorName);

  if (!authorInfo) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Link
            href="/ratgeber"
            className="inline-flex items-center text-targo-blue hover:text-targo-blue/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Ratgeber-Übersicht
          </Link>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={authorInfo.avatar}
                  alt={authorInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Artikel von {authorInfo.name}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {authorInfo.bio}
              </p>
              <div>
                <h2 className="text-sm font-semibold text-gray-900 mb-2">
                  Expertise:
                </h2>
                <div className="flex flex-wrap gap-2">
                  {authorInfo.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-block bg-targo-blue/10 text-targo-blue text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel-Übersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          {artikel.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Alle Artikel ({artikel.length})
                </h2>
                <p className="text-gray-600">
                  Hier finden Sie alle Ratgeber-Artikel von {authorInfo.name}.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {artikel.map(({ kategorie, artikel }) => (
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
                      <span className="inline-block text-xs font-semibold text-targo-blue bg-targo-blue/10 px-2 py-1 rounded-full mb-2">
                        {kategorie.title}
                      </span>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-targo-blue transition-colors">
                        {artikel.title}
                      </h3>
                      {artikel.subtitle && (
                        <p className="text-sm text-gray-600 mb-3">
                          {artikel.subtitle}
                        </p>
                      )}
                      <div className="flex items-center text-sm text-targo-blue font-semibold mt-4">
                        Weiterlesen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-600">
                Noch keine Artikel von {authorInfo.name} verfügbar.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Haben Sie Fragen?
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Unsere Experten beraten Sie gerne persönlich zu Ihrer individuellen Situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/kontakt" className="flex items-center whitespace-nowrap">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-targo-blue text-targo-blue hover:bg-targo-blue hover:text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/ratgeber" className="flex items-center whitespace-nowrap">
                  Zurück zur Übersicht
                  <ArrowLeft className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
