import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllAuthors, getAuthorInfo, getAuthorSlug } from "@/lib/ratgeber-content";
import { getArtikelByAuthor } from "@/lib/ratgeber-data";
import { createMetadata } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata = createMetadata({
  title: "Experten und Autoren - Unsere Finanzierungsexperten | Targohyp",
  description: "Lernen Sie unsere Experten und Autoren kennen. Erfahrene Finanzierungsexperten, die Ihnen bei Ihrer Immobilienfinanzierung helfen.",
}, { path: "/ratgeber/experten-autoren" });

export default function ExpertenAutorenPage() {
  const authors = getAllAuthors();

  return (
    <div className="w-full">
      {/* BreadcrumbList Schema-Markup */}
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Ratgeber", url: "/ratgeber" },
        { name: "Experten und Autoren", url: "/ratgeber/experten-autoren" }
      ]} />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-targo-blue hover:underline">
              Startseite
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/ratgeber" className="text-targo-blue hover:underline">
              Ratgeber
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Experten und Autoren</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Experten und Autoren
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unsere erfahrenen Finanzierungsexperten und Autoren begleiten Sie mit fundiertem Wissen und praxisnahen Tipps durch alle Fragen rund um die Immobilienfinanzierung.
            </p>
          </div>
        </div>
      </section>

      {/* Autoren-Übersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {authors.map((author) => {
              const authorInfo = getAuthorInfo(author.name);
              const artikel = getArtikelByAuthor(author.name);
              
              if (!authorInfo) return null;

              return (
                <div
                  key={author.name}
                  className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 hover:shadow-lg hover:border-targo-blue transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar */}
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

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold mb-2 text-gray-900">
                        {authorInfo.name}
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                        {authorInfo.bio}
                      </p>

                      {/* Expertise */}
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                          Expertise:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {authorInfo.expertise.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="inline-block bg-targo-blue/10 text-targo-blue text-xs font-semibold px-3 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                          {authorInfo.expertise.length > 3 && (
                            <span className="inline-block text-xs text-gray-500 px-3 py-1">
                              +{authorInfo.expertise.length - 3} weitere
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Artikel-Anzahl und Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <BookOpen className="w-4 h-4" />
                          <span>
                            {artikel.length} {artikel.length === 1 ? "Artikel" : "Artikel"}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          className="border-targo-blue text-targo-blue hover:bg-targo-blue hover:text-white rounded-full"
                          asChild
                        >
                          <Link href={`/ratgeber/autor/${author.slug}`} className="flex items-center">
                            Artikel ansehen
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
                  Zurück zum Ratgeber
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
