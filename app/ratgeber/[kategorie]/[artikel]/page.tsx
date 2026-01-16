import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { kategorien, getKategorieById, getArtikelById, getAllArtikel } from "@/lib/ratgeber-data";
import { notFound } from "next/navigation";
import { getArtikelContent, getAuthorInfo, getAuthorSlug } from "@/lib/ratgeber-content";
import { createMetadata } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    kategorie: string;
    artikel: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { kategorie: kategorieId, artikel: artikelId } = await params;
  const artikel = getArtikelById(kategorieId, artikelId);
  const kategorie = getKategorieById(kategorieId);
  
  if (!artikel || !kategorie) {
    return createMetadata({
      title: "Artikel nicht gefunden | Targohyp",
      description: "Der angeforderte Artikel konnte im Ratgeber nicht gefunden werden.",
    }, { path: `/ratgeber/${kategorieId}/${artikelId}` });
  }

  return createMetadata({
    title: `${artikel.title} - ${kategorie.title} | Targohyp`,
    description: artikel.subtitle || kategorie.description,
  }, { path: `/ratgeber/${kategorieId}/${artikelId}` });
}

export async function generateStaticParams() {
  return getAllArtikel().map(({ kategorie, artikel }) => ({
    kategorie: kategorie.id,
    artikel: artikel.id,
  }));
}

export default async function ArtikelPage({ params }: PageProps) {
  const { kategorie: kategorieId, artikel: artikelId } = await params;
  const artikel = getArtikelById(kategorieId, artikelId);
  const kategorie = getKategorieById(kategorieId);

  if (!artikel || !kategorie) {
    notFound();
  }

  const content = getArtikelContent(kategorieId, artikelId);
  const Icon = kategorie.icon;
  const andereArtikel = kategorie.artikel.filter((a) => a.id !== artikel.id);
  const authorInfo = content?.author ? getAuthorInfo(content.author) : null;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white pt-6 lg:pt-8 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href={`/ratgeber/${kategorie.id}`}
            className="inline-flex items-center text-targo-blue hover:text-targo-blue/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu {kategorie.title}
          </Link>
          {artikel.image && (
            <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={artikel.image}
                alt={artikel.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-targo-blue" />
            </div>
            <div className="flex-1">
              <span className="inline-block text-sm font-semibold text-targo-blue bg-targo-blue/10 px-3 py-1 rounded-full mb-2">
                {kategorie.title}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                {artikel.title}
              </h1>
              {content?.intro && (
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {content.intro}
                </p>
              )}
              {(content?.author || content?.createdAt) && (
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-0">
                  {content.author && (
                    <Link
                      href="#author-box"
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
                    >
                      {content.authorAvatar && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-targo-blue transition-colors">
                          <Image
                            src={content.authorAvatar}
                            alt={content.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <span className="font-semibold text-gray-700">Autor:</span>
                        <span className="ml-1 text-targo-blue group-hover:underline">{content.author}</span>
                      </div>
                    </Link>
                  )}
                  {content.createdAt && (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700">Veröffentlicht:</span>
                      <span>
                        {new Date(content.createdAt).toLocaleDateString('de-DE', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full pt-0 pb-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none">
              {content ? (
                <div className="space-y-8 -mt-20">
                  {content.sections && content.sections.map((section, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                        {section.title}
                      </h2>
                      {section.content && (
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      )}
                      {section.points && section.points.length > 0 && (
                        <ul className="mt-4 space-y-3">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3">
                              <span className="text-targo-blue font-bold mt-1">•</span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {content.faqs && content.faqs.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
                      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
                        Häufige Fragen
                      </h2>
                      <div className="space-y-6">
                        {content.faqs.map((faq, index) => (
                          <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                            <h3 className="text-lg font-semibold mb-3 text-gray-900">
                              {faq.question}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                  <p className="text-gray-600">
                    Dieser Artikel wird in Kürze verfügbar sein.
                  </p>
                </div>
              )}
            </div>

            {/* Autorenbox */}
            {authorInfo && (
              <div id="author-box" className="mt-12 bg-gradient-to-br from-targo-blue/5 to-white border-2 border-targo-blue/20 rounded-lg p-6 lg:p-8 scroll-mt-20">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={authorInfo.avatar}
                        alt={authorInfo.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gray-900">
                      Über den Autor
                    </h3>
                    <h4 className="text-lg font-semibold mb-3 text-targo-blue">
                      {authorInfo.name}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {authorInfo.bio}
                    </p>
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">
                        Expertise:
                      </h5>
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
                    <Button
                      className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full mt-4 inline-flex items-center whitespace-nowrap"
                      asChild
                    >
                      <Link href={`/ratgeber/autor/${getAuthorSlug(authorInfo.name)}`} className="flex items-center">
                        Weitere Artikel von {authorInfo.name}
                        <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}

          {/* Weitere Artikel */}
          {andereArtikel.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
                Weitere Artikel in dieser Kategorie
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {andereArtikel.slice(0, 3).map((otherArtikel) => (
                  <Link
                    key={otherArtikel.id}
                    href={`/ratgeber/${kategorie.id}/${otherArtikel.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-targo-blue transition-all group"
                  >
                    {otherArtikel.image && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={otherArtikel.image}
                          alt={otherArtikel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-targo-blue transition-colors">
                        {otherArtikel.title}
                      </h3>
                      {otherArtikel.subtitle && (
                        <p className="text-sm text-gray-600 mb-3">
                          {otherArtikel.subtitle}
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
