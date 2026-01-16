import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale, ArrowRight, CheckCircle2, XCircle, Download } from "lucide-react";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Baufinanzierung vergleichen - Produkte & Optionen | Targohyp",
  description: "Vergleichen Sie verschiedene Baufinanzierungsprodukte, Tilgungsmodelle und Zinsoptionen. Finden Sie die beste Lösung für Ihre Immobilienfinanzierung im direkten Vergleich.",
}, { path: "/vergleiche" });

export default function VergleichePage() {
  // Beispiel-Vergleiche (später aus Datenbank)
  const vergleiche = [
    {
      id: 1,
      slug: "zinsvergleich",
      title: "Festzins vs. variabler Zins",
      description: "Vergleichen Sie die Vor- und Nachteile von festen und variablen Zinssätzen.",
      type: "Zinsvergleich",
    },
    {
      id: 2,
      slug: "zinsentwicklung",
      title: "Zinsentwicklung im Zeitverlauf",
      description: "Verfolgen Sie die historische Entwicklung der Bauzinsen und informieren Sie sich über aktuelle Zinssätze.",
      type: "Zinsentwicklung",
    },
    {
      id: 3,
      slug: "produktvergleich",
      title: "Baufinanzierungsprodukte im Vergleich",
      description: "Übersicht und Vergleich unserer verschiedenen Baufinanzierungsprodukte.",
      type: "Produktvergleich",
    },
    {
      id: 4,
      slug: "tilgungsvergleich",
      title: "Tilgungsmodelle vergleichen",
      description: "Welches Tilgungsmodell passt zu Ihrer Situation? Ein detaillierter Vergleich.",
      type: "Tilgungsvergleich",
    },
  ];

  // Beispiel-Vergleichstabelle
  const produktvergleich = [
    {
      produkt: "Baufinanzierung Classic",
      zins: "3,45%",
      laufzeit: "10-30 Jahre",
      tilgung: "ab 1%",
      sondertilgung: "5% p.a.",
      vorteile: ["Fester Zins", "Flexible Laufzeit", "Sondertilgung"],
      nachteile: ["Höherer Zins"],
    },
    {
      produkt: "Baufinanzierung Flex",
      zins: "3,15%",
      laufzeit: "5-15 Jahre",
      tilgung: "ab 2%",
      sondertilgung: "10% p.a.",
      vorteile: ["Niedriger Zins", "Kurze Laufzeit"],
      nachteile: ["Variable Zinsen", "Kürzere Laufzeit"],
    },
    {
      produkt: "Baufinanzierung Premium",
      zins: "2,95%",
      laufzeit: "15-35 Jahre",
      tilgung: "ab 1%",
      sondertilgung: "5% p.a.",
      vorteile: ["Top-Zins", "Lange Laufzeit"],
      nachteile: ["Hohe Mindestsumme"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Produkte und Optionen vergleichen
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vergleichen Sie verschiedene Baufinanzierungsprodukte, Zinsmodelle und Tilgungsoptionen, um die beste Lösung für sich zu finden.
            </p>
          </div>
        </div>
      </section>

      {/* Vergleichs-Übersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Verfügbare Vergleiche</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vergleiche.map((vergleich) => (
              <Link
                key={vergleich.id}
                href={`/vergleiche/${vergleich.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-targo-blue" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-targo-blue bg-targo-blue/10 px-2 py-1 rounded-full mb-2 inline-block">
                      {vergleich.type}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                      {vergleich.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{vergleich.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-targo-blue font-semibold">
                  Vergleich ansehen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produktvergleich-Tabelle */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Produktvergleich</h2>
            <Button className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Als PDF exportieren
            </Button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Produkt
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Zinssatz
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Laufzeit
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Tilgung
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Sondertilgung
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Vorteile
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Aktion
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {produktvergleich.map((produkt, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold">{produkt.produkt}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-bold text-targo-blue">
                          {produkt.zins}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {produkt.laufzeit}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {produkt.tilgung}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {produkt.sondertilgung}
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {produkt.vorteile.map((vorteil, vIdx) => (
                            <div key={vIdx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{vorteil}</span>
                            </div>
                          ))}
                          {produkt.nachteile.map((nachteil, nIdx) => (
                            <div key={nIdx} className="flex items-center gap-2 text-sm">
                              <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                              <span className="text-gray-500">{nachteil}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                          asChild
                        >
                          <Link href={`/finanzierung/${idx + 1}`}>
                            Details
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#003366] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Individuelle Beratung gewünscht?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten helfen Ihnen dabei, die passende Baufinanzierung zu finden und alle Optionen zu vergleichen.
            </p>
            <Button
              className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/finanzierungsanfrage" className="flex items-center whitespace-nowrap">
                Beratung anfragen
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

