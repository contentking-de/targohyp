import Link from "next/link";
import { BookOpen, Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { lexikonBegriffe } from "@/lib/lexikon-data";

export const metadata = {
  title: "Lexikon Baufinanzierung - Fachbegriffe erklärt | Targohyp",
  description: "Umfassendes Glossar mit allen wichtigen Fachbegriffen zur Baufinanzierung. Von Annuität bis Zinsbindung - verständlich erklärt für Ihre Immobilienfinanzierung.",
};

export default function LexikonPage() {
  const begriffe = lexikonBegriffe;

  // Alphabet für Navigation
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Kategorien
  const kategorien = ["Alle", "Finanzierung", "Zinsen", "Tilgung", "Bewertung", "Sicherheit"];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Lexikon der Baufinanzierung
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Erklärungen zu allen wichtigen Fachbegriffen rund um die Baufinanzierung. Von A wie Annuität bis Z wie Zinsbindungsfrist.
            </p>
          </div>
        </div>
      </section>

      {/* Suche & Filter */}
      <section className="w-full py-8 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Begriff suchen..."
                className="pl-10 rounded-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {kategorien.map((kat) => (
                <Button
                  key={kat}
                  className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                >
                  {kat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alphabetische Navigation */}
      <section className="w-full py-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-8 h-8 flex items-center justify-center text-sm font-semibold text-gray-700 hover:bg-targo-blue hover:text-white rounded transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Begriffe nach Alphabet */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          {alphabet.map((letter) => {
            const begriffeFuerBuchstabe = begriffe.filter(
              (b) => b.begriff.charAt(0).toUpperCase() === letter
            );

            if (begriffeFuerBuchstabe.length === 0) return null;

            return (
              <div key={letter} id={letter} className="mb-12 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-targo-blue">
                  {letter}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {begriffeFuerBuchstabe.map((begriff) => (
                    <Link
                      key={begriff.slug}
                      href={`/lexikon/${begriff.slug}`}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <BookOpen className="w-5 h-5 text-targo-blue flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold group-hover:text-targo-blue transition-colors">
                              {begriff.begriff}
                            </h3>
                            <span className="text-xs font-semibold text-targo-blue bg-targo-blue/10 px-2 py-1 rounded-full">
                              {begriff.kategorie}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-3">
                            {begriff.definition}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-targo-blue font-semibold mt-4">
                        Weiterlesen
                        <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Begriff nicht gefunden?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Wenn Sie einen Begriff vermissen oder Fragen haben, kontaktieren Sie uns gerne.
            </p>
            <Button
              className="bg-targo-blueLight hover:bg-targo-blue text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/kontakt" className="flex items-center whitespace-nowrap">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

