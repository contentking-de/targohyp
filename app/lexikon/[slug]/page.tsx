import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { findBegriffBySlug, findVerwandteBegriffe, lexikonBegriffe } from "@/lib/lexikon-data";
import type { Metadata } from "next";

// Generiere statische Pfade für alle Begriffe
export async function generateStaticParams() {
  return lexikonBegriffe.map((begriff) => ({
    slug: begriff.slug,
  }));
}

// Generiere Metadaten für jede Seite
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const begriff = findBegriffBySlug(slug);

  if (!begriff) {
    return {
      title: "Begriff nicht gefunden | Targohyp",
    };
  }

  return {
    title: `${begriff.begriff} - Lexikon Baufinanzierung | Targohyp`,
    description: begriff.definition,
  };
}

export default async function LexikonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const begriff = findBegriffBySlug(slug);

  if (!begriff) {
    notFound();
  }

  const verwandteBegriffe = findVerwandteBegriffe(begriff);

  // FAQ Schema-Markup generieren
  const faqSchema = begriff.faqs && begriff.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": begriff.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.frage,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.antwort
      }
    }))
  } : null;

  return (
    <>
      {/* FAQ Schema-Markup */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      )}
      <div className="w-full">
      {/* Header */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/lexikon"
            className="inline-flex items-center text-targo-blue hover:text-targo-blue/80 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Lexikon
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-targo-blue" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                  {begriff.begriff}
                </h1>
                <span className="inline-block text-sm font-semibold text-targo-blue bg-targo-blue/10 px-3 py-1 rounded-full">
                  {begriff.kategorie}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inhalt */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Hauptinhalt */}
              <div className="lg:col-span-2">
                {/* Definition */}
                <div className="bg-white border-4 border-[#003366] rounded-lg p-6 lg:p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition: {begriff.begriff}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {begriff.definition}
                  </p>
                </div>

                {/* Beschreibung */}
                {begriff.beschreibung && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Ausführliche Erklärung</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {begriff.beschreibung}
                    </p>
                  </div>
                )}

                {/* Details */}
                {begriff.details && begriff.details.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Wichtige Details</h2>
                    <ul className="space-y-3">
                      {begriff.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-targo-blue font-bold mt-1">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQs */}
                {begriff.faqs && begriff.faqs.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Häufige Fragen: {begriff.begriff}</h2>
                    <div className="space-y-6">
                      {begriff.faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            {faq.frage}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {faq.antwort}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verwandte Begriffe */}
                {verwandteBegriffe.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Verwandte Begriffe</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {verwandteBegriffe.map((verwandterBegriff) => (
                        <Link
                          key={verwandterBegriff.slug}
                          href={`/lexikon/${verwandterBegriff.slug}`}
                          className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-targo-blue hover:shadow-md transition-all group"
                        >
                          <BookOpen className="w-5 h-5 text-targo-blue flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-targo-blue transition-colors">
                              {verwandterBegriff.begriff}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {verwandterBegriff.definition}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-targo-blue transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-20">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Kategorie</h3>
                  <span className="inline-block text-sm font-semibold text-targo-blue bg-targo-blue/10 px-3 py-1 rounded-full mb-6">
                    {begriff.kategorie}
                  </span>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Weitere Informationen</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Haben Sie Fragen zu diesem Begriff oder benötigen Sie eine persönliche Beratung?
                    </p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center text-targo-blue hover:text-targo-blue/80 font-semibold text-sm"
                    >
                      Kontakt aufnehmen
                      <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
