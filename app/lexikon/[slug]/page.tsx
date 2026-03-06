import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, List, MessageCircle } from "lucide-react";
import { findBegriffBySlug, findVerwandteBegriffe, lexikonBegriffe, createSlug } from "@/lib/lexikon-data";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

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
    return createMetadata({
      title: "Begriff nicht gefunden | Targohyp",
      description: "Der angeforderte Begriff konnte im Lexikon nicht gefunden werden.",
    }, { path: `/lexikon/${slug}` });
  }

  return createMetadata({
    title: `${begriff.begriff} - Lexikon Baufinanzierung | Targohyp`,
    description: begriff.definition,
  }, { path: `/lexikon/${slug}` });
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
      {/* BreadcrumbList Schema-Markup */}
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Lexikon", url: "/lexikon" },
        { name: begriff.begriff, url: `/lexikon/${slug}` }
      ]} />
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
              <h1 className="text-3xl lg:text-4xl font-bold">
                {begriff.begriff}
              </h1>
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
                <div id="definition" className="bg-white border-4 border-[#003366] rounded-lg p-6 lg:p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition: {begriff.begriff}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {begriff.definition}
                  </p>
                </div>

                {/* Beschreibung */}
                {begriff.beschreibung && (
                  <div id="erklaerung" className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Ausführliche Erklärung</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {begriff.beschreibung}
                    </p>
                  </div>
                )}

                {/* Sektionen */}
                {begriff.sektionen && begriff.sektionen.length > 0 && (
                  begriff.sektionen.map((sektion, sektionIndex) => (
                    <div key={sektionIndex} id={createSlug(sektion.ueberschrift)} className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 mb-8">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900">{sektion.ueberschrift}</h2>
                      <ul className="space-y-3">
                        {sektion.inhalt.map((absatz, absatzIndex) => (
                          <li key={absatzIndex} className="flex items-start gap-3">
                            <span className="text-targo-blue font-bold mt-1">•</span>
                            <span className="text-gray-700 leading-relaxed">{absatz}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}

                {/* Details */}
                {begriff.details && begriff.details.length > 0 && (
                  <div id="wichtige-details" className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 mb-8">
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
                  <div id="haeufige-fragen" className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 mb-8">
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
                  <div id="verwandte-begriffe" className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
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

              {/* Sidebar – Inhaltsverzeichnis */}
              <div className="lg:col-span-1">
                <nav className="bg-white border border-gray-200 rounded-lg p-6 sticky top-20">
                  <div className="flex items-center gap-2 mb-4">
                    <List className="w-5 h-5 text-targo-blue" />
                    <h3 className="text-lg font-bold text-gray-900">Inhalt</h3>
                  </div>
                  <ul className="space-y-1">
                    <li>
                      <a href="#definition" className="block text-sm text-gray-600 hover:text-targo-blue hover:bg-targo-blue/5 rounded px-3 py-2 transition-colors">
                        Definition
                      </a>
                    </li>
                    {begriff.beschreibung && (
                      <li>
                        <a href="#erklaerung" className="block text-sm text-gray-600 hover:text-targo-blue hover:bg-targo-blue/5 rounded px-3 py-2 transition-colors">
                          Ausführliche Erklärung
                        </a>
                      </li>
                    )}
                    {begriff.sektionen?.map((sektion, i) => (
                      <li key={i}>
                        <a href={`#${createSlug(sektion.ueberschrift)}`} className="block text-sm text-gray-600 hover:text-targo-blue hover:bg-targo-blue/5 rounded px-3 py-2 transition-colors">
                          {sektion.ueberschrift}
                        </a>
                      </li>
                    ))}
                    {begriff.details && begriff.details.length > 0 && (
                      <li>
                        <a href="#wichtige-details" className="block text-sm text-gray-600 hover:text-targo-blue hover:bg-targo-blue/5 rounded px-3 py-2 transition-colors">
                          Wichtige Details
                        </a>
                      </li>
                    )}
                    {begriff.faqs && begriff.faqs.length > 0 && (
                      <li>
                        <a href="#haeufige-fragen" className="block text-sm text-gray-600 hover:text-targo-blue hover:bg-targo-blue/5 rounded px-3 py-2 transition-colors">
                          Häufige Fragen
                        </a>
                      </li>
                    )}
                    {verwandteBegriffe.length > 0 && (
                      <li>
                        <a href="#verwandte-begriffe" className="block text-sm text-gray-600 hover:text-targo-blue hover:bg-targo-blue/5 rounded px-3 py-2 transition-colors">
                          Verwandte Begriffe
                        </a>
                      </li>
                    )}
                  </ul>

                  <div className="mt-6 bg-gray-100 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageCircle className="w-5 h-5 text-targo-blue" />
                      <h4 className="font-bold text-gray-900">Beratung gewünscht?</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Unsere Experten beantworten Ihre Fragen rund um die Baufinanzierung – kostenlos und unverbindlich.
                    </p>
                    <Link
                      href="/kontakt"
                      className="flex items-center justify-center gap-2 w-full bg-[#003366] text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[#002244] transition-colors"
                    >
                      Kontakt aufnehmen
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
