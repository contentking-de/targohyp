import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BookOpen, Home, Wallet, TrendingUp, Lock, Receipt, ClipboardCheck, Search, ListChecks, RefreshCw, CheckCircle, Calculator, Scale, FileText, CreditCard, ArrowDown, PiggyBank, Target, Building2, BarChart, ArrowLeftRight, DollarSign, Handshake, Zap, Shield, FileCheck, ClipboardList, MapPin, Navigation, Star, AlertTriangle, XCircle, ShieldCheck, AlertCircle, Calendar, Clock, Hammer, Wrench, Brain, Lightbulb, LineChart, Percent, Building, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { kategorien, getKategorieById, getArtikelById, getAllArtikel } from "@/lib/ratgeber-data";
import { notFound } from "next/navigation";
import { getArtikelContent, getAuthorInfo, getAuthorSlug } from "@/lib/ratgeber-content";
import { createMetadata } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ChecklistPdfForm } from "@/components/checklist-pdf-form";
import { NewsletterCTA } from "@/components/newsletter-cta";
import { ArticleReviewButton } from "@/components/article-review-button";

function renderContentWithLinks(
  text: string,
  lexikonLinks?: Array<{ term: string; slug: string }>
): React.ReactNode {
  if (!lexikonLinks || lexikonLinks.length === 0) return text;

  const parts: React.ReactNode[] = [];
  let remaining = text;
  const usedTerms = new Set<string>();

  while (remaining.length > 0) {
    let earliestMatch: { index: number; term: string; slug: string } | null = null;

    for (const link of lexikonLinks) {
      if (usedTerms.has(link.term)) continue;
      const idx = remaining.indexOf(link.term);
      if (idx !== -1 && (earliestMatch === null || idx < earliestMatch.index)) {
        earliestMatch = { index: idx, term: link.term, slug: link.slug };
      }
    }

    if (!earliestMatch) {
      parts.push(remaining);
      break;
    }

    if (earliestMatch.index > 0) {
      parts.push(remaining.slice(0, earliestMatch.index));
    }

    parts.push(
      <Link
        key={`lexikon-${earliestMatch.slug}`}
        href={`/lexikon/${earliestMatch.slug}`}
        className="text-targo-blue font-bold underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-targo-blue/80 transition-colors"
      >
        {earliestMatch.term}
      </Link>
    );

    usedTerms.add(earliestMatch.term);
    remaining = remaining.slice(earliestMatch.index + earliestMatch.term.length);
  }

  return parts;
}

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
      {/* BreadcrumbList Schema-Markup */}
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Ratgeber", url: "/ratgeber" },
        { name: kategorie.title, url: `/ratgeber/${kategorie.id}` },
        { name: artikel.title, url: `/ratgeber/${kategorie.id}/${artikel.id}` }
      ]} />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white pt-6 lg:pt-8 pb-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <Link
            href={`/ratgeber/${kategorie.id}`}
            className="inline-flex items-center text-targo-blue hover:text-targo-blue/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu {kategorie.title}
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            {/* Teaserbox - auf Mobile zuerst, auf Desktop rechts */}
            <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:flex-1 order-1 lg:order-2">
              <div className="hidden lg:flex w-12 h-12 bg-targo-blue/10 rounded-lg items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-targo-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-sm font-semibold text-targo-blue bg-targo-blue/10 px-3 py-1 rounded-full mb-2">
                  {kategorie.title}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 break-words hyphens-auto">
                  {artikel.title}
                </h1>
                {content?.intro && (
                  <p className="text-base sm:text-lg font-bold text-gray-700 leading-relaxed mb-4 break-words">
                    {content.intro}
                  </p>
                )}
                {(content?.author || content?.createdAt) && (
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 mb-0 break-words">
                    {content.author && (
                      <Link
                        href="#author-box"
                        className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity group min-w-0"
                      >
                        {content.authorAvatar && (
                          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-targo-blue transition-colors flex-shrink-0">
                            <Image
                              src={content.authorAvatar}
                              alt={content.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <span className="font-semibold text-gray-700">Autor:</span>
                          <span className="ml-1 text-targo-blue group-hover:underline break-words">{content.author}</span>
                        </div>
                      </Link>
                    )}
                    {content.createdAt && (
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-semibold text-gray-700 whitespace-nowrap">Veröffentlicht:</span>
                        <span className="break-words">
                          {new Date(content.createdAt).toLocaleDateString('de-DE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                    <ArticleReviewButton
                      articleTitle={artikel.title}
                      articleUrl={`/ratgeber/${kategorie.id}/${artikel.id}`}
                    />
                  </div>
                )}
              </div>
            </div>
            
            {/* Bild - auf Mobile nach der Teaserbox, auf Desktop links */}
            {artikel.image && (
              <div className="relative w-full lg:w-1/2 lg:flex-shrink-0 h-64 lg:h-96 rounded-lg overflow-hidden mb-8 lg:mb-0 order-2 lg:order-1">
                <Image
                  src={artikel.image}
                  alt={artikel.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full pt-8 lg:pt-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none">
              {content ? (
                <>
                  {/* Sections Grid oder vertikal */}
                  <div className={
                    kategorieId === "checklisten" && content.sections?.length === 3
                      ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8"
                      : kategorieId === "checklisten" && content.sections?.length === 2
                      ? "grid gap-6 md:grid-cols-2 mb-8"
                      : "space-y-8"
                  }>
                    {content.sections && (() => {
                    const iconMap: Record<string, any> = {
                      BookOpen,
                      Home,
                      Wallet,
                      TrendingUp,
                      Lock,
                      Receipt,
                      ClipboardCheck,
                      Search,
                      ListChecks,
                      RefreshCw,
                      CheckCircle,
                      Calculator,
                      Scale,
                      FileText,
                      CreditCard,
                      ArrowDown,
                      PiggyBank,
                      Target,
                      Building2,
                      BarChart,
                      ArrowLeftRight,
                      DollarSign,
                      Handshake,
                      Zap,
                      Shield,
                      FileCheck,
                      ClipboardList,
                      MapPin,
                      Navigation,
                      Star,
                      AlertTriangle,
                      XCircle,
                      ShieldCheck,
                      AlertCircle,
                      Calendar,
                      Clock,
                      Hammer,
                      Wrench,
                      Brain,
                      Lightbulb,
                      LineChart,
                      Percent,
                      Building,
                    };

                    const renderSection = (section: NonNullable<typeof content.sections>[number], index: number) => {
                      const IconComponent = section.icon ? iconMap[section.icon] : null;
                      return (
                        <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
                          <div className="flex items-start gap-4 mb-4">
                            {IconComponent && (
                              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <IconComponent className="w-6 h-6 text-targo-blue" />
                              </div>
                            )}
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                              {section.title}
                            </h2>
                          </div>
                          {section.content && (
                            <div className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                              {renderContentWithLinks(section.content, section.lexikonLinks)}
                            </div>
                          )}
                          {section.table && (
                            <div className="mt-4 overflow-x-auto">
                              <table className="w-full text-sm sm:text-base border-collapse">
                                <thead>
                                  <tr className="bg-targo-blue/5">
                                    {section.table.headers.map((header, hIdx) => (
                                      <th key={hIdx} className="text-left px-4 py-3 font-semibold text-gray-900 border-b-2 border-targo-blue/20">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.table.rows.map((row, rIdx) => (
                                    <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                      {row.map((cell, cIdx) => (
                                        <td key={cIdx} className={`px-4 py-3 border-b border-gray-200 text-gray-700 ${cIdx === 0 ? "font-medium" : ""}`}>
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
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
                      );
                    };

                    const renderCta = (index: number) => {
                      const ctaAfterThis = content.ctas?.find(cta => cta.afterSection === index);
                      if (!ctaAfterThis) return null;
                      if (ctaAfterThis.type === "link") {
                        const CtaIcon = ctaAfterThis.icon ? iconMap[ctaAfterThis.icon] : null;
                        return (
                          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 lg:p-8 text-center">
                            <div className="max-w-2xl mx-auto">
                              {CtaIcon && (
                                <div className="w-14 h-14 bg-targo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <CtaIcon className="w-7 h-7 text-targo-blue" />
                                </div>
                              )}
                              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                {ctaAfterThis.title}
                              </h3>
                              {ctaAfterThis.description && (
                                <p className="text-gray-700 mb-6 text-base lg:text-lg">
                                  {ctaAfterThis.description}
                                </p>
                              )}
                              <Button
                                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                                asChild
                              >
                                <Link href={ctaAfterThis.buttonHref || "#"} className="inline-flex items-center">
                                  {ctaAfterThis.buttonText}
                                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        );
                      }
                      if (ctaAfterThis.type === "newsletter") {
                        return (
                          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 lg:p-8">
                            <div className="max-w-2xl mx-auto text-center mb-4">
                              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                {ctaAfterThis.title}
                              </h3>
                              {ctaAfterThis.description && (
                                <p className="text-gray-700 text-base lg:text-lg">
                                  {ctaAfterThis.description}
                                </p>
                              )}
                            </div>
                            <NewsletterCTA />
                          </div>
                        );
                      }
                      return null;
                    };

                    const elements: React.ReactNode[] = [];
                    const sections = content.sections!;
                    let i = 0;
                    while (i < sections.length) {
                      if (sections[i].twoColumn) {
                        const groupStart = i;
                        const group: number[] = [];
                        while (i < sections.length && sections[i].twoColumn) {
                          group.push(i);
                          i++;
                        }
                        elements.push(
                          <div key={`grid-${groupStart}`} className="grid gap-6 md:grid-cols-2">
                            {group.map(idx => (
                              <React.Fragment key={idx}>
                                {renderSection(sections[idx], idx)}
                              </React.Fragment>
                            ))}
                          </div>
                        );
                        const lastIdx = group[group.length - 1];
                        const ctaEl = renderCta(lastIdx);
                        if (ctaEl) elements.push(<React.Fragment key={`cta-${lastIdx}`}>{ctaEl}</React.Fragment>);
                      } else {
                        elements.push(
                          <React.Fragment key={i}>
                            {renderSection(sections[i], i)}
                          </React.Fragment>
                        );
                        const ctaEl = renderCta(i);
                        if (ctaEl) elements.push(<React.Fragment key={`cta-${i}`}>{ctaEl}</React.Fragment>);
                        i++;
                      }
                    }
                    return elements;
                    })()}
                  </div>

                  {/* Checkliste PDF CTA - für alle Checklisten-Artikel, über volle Breite */}
                  {kategorieId === "checklisten" && (
                    <div className="mt-8 -mx-4 px-4">
                      <ChecklistPdfForm checklistType={artikelId} />
                    </div>
                  )}

                  {/* FAQs */}
                  {content.faqs && content.faqs.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 mt-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-6 h-6 text-targo-blue" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          Häufige Fragen
                        </h2>
                      </div>
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
                </>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                  <p className="text-gray-600">
                    Dieser Artikel wird in Kürze verfügbar sein.
                  </p>
                </div>
              )}
            </div>

            {/* Newsletter CTA */}
            {content && (
              <NewsletterCTA />
            )}

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
