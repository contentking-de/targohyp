import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Ratgeber - Targohyp",
  description: "Umfassende Informationen und Ratgeber zur Baufinanzierung",
};

export default function RatgeberPage() {
  // Beispiel-Artikel (später aus Datenbank)
  const artikel = [
    {
      id: 1,
      title: "Baufinanzierung: Der komplette Leitfaden",
      excerpt: "Alles was Sie über Baufinanzierung wissen müssen - von der ersten Planung bis zur Umsetzung.",
      category: "Grundlagen",
      readTime: "15 Min.",
      date: "2024-01-15",
      featured: true,
    },
    {
      id: 2,
      title: "Eigenkapital: So viel sollten Sie mitbringen",
      excerpt: "Erfahren Sie, wie viel Eigenkapital für eine Baufinanzierung empfohlen wird und welche Alternativen es gibt.",
      category: "Eigenkapital",
      readTime: "8 Min.",
      date: "2024-01-10",
      featured: false,
    },
    {
      id: 3,
      title: "Zinsen verstehen: Festzins vs. variabler Zins",
      excerpt: "Der Unterschied zwischen festen und variablen Zinsen und welche Option für Sie die richtige ist.",
      category: "Zinsen",
      readTime: "10 Min.",
      date: "2024-01-05",
      featured: false,
    },
    {
      id: 4,
      title: "Tilgung optimieren: So sparen Sie Zinsen",
      excerpt: "Tipps und Strategien, um Ihre Baufinanzierung schneller abzuzahlen und Zinskosten zu reduzieren.",
      category: "Tilgung",
      readTime: "12 Min.",
      date: "2024-01-01",
      featured: false,
    },
  ];

  const kategorien = ["Alle", "Grundlagen", "Eigenkapital", "Zinsen", "Tilgung", "Checklisten"];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
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
              {kategorien.map((kat) => (
                <Button
                  key={kat}
                  variant={kat === "Alle" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {kat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artikel-Übersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          {/* Featured Article */}
          {artikel.find((a) => a.featured) && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Empfohlener Artikel</h2>
              {(() => {
                const featured = artikel.find((a) => a.featured)!;
                return (
                  <Link
                    href={`/ratgeber/${featured.id}`}
                    className="block bg-white border-2 border-targo-blue rounded-lg p-8 hover:shadow-lg transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/3 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-gray-400" />
                      </div>
                      <div className="lg:w-2/3">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-sm font-semibold text-targo-blue bg-targo-blue/10 px-3 py-1 rounded-full">
                            {featured.category}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {featured.readTime}
                          </div>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-targo-blue transition-colors">
                          {featured.title}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {featured.excerpt}
                        </p>
                        <div className="flex items-center text-targo-blue font-semibold">
                          Artikel lesen
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })()}
            </div>
          )}

          {/* Weitere Artikel */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Weitere Artikel</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {artikel
                .filter((a) => !a.featured)
                .map((art) => (
                  <Link
                    key={art.id}
                    href={`/ratgeber/${art.id}`}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
                  >
                    <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4">
                      <BookOpen className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-targo-blue bg-targo-blue/10 px-2 py-1 rounded-full">
                        {art.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Clock className="w-3 h-3" />
                        {art.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-targo-blue transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                      {art.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-targo-blue font-semibold">
                      Weiterlesen
                      <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full bg-targo-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Bleiben Sie informiert
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Abonnieren Sie unseren Newsletter und erhalten Sie regelmäßig neue Ratgeber-Artikel und Tipps zur Baufinanzierung.
            </p>
            <Button
              className="bg-white text-targo-blue hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/newsletter">
                Newsletter abonnieren
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

