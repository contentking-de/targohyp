import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, Download, TrendingUp, TrendingDown, Shield } from "lucide-react";

export const metadata = {
  title: "Festzins vs. variabler Zins - Vor- und Nachteile im Vergleich | Targohyp",
  description: "Detaillierter Vergleich von festen und variablen Zinssätzen für Ihre Baufinanzierung. Planungssicherheit vs. Flexibilität - welche Option ist die richtige für Sie?",
};

export default function ZinsvergleichPage() {
  const festzins = {
    name: "Festzins",
    beschreibung: "Ein fester Zinssatz bleibt über die gesamte Zinsbindungsdauer konstant.",
    vorteile: [
      "Planungssicherheit: Monatliche Rate bleibt konstant",
      "Schutz vor Zinssteigerungen",
      "Einfache Budgetplanung",
      "Ideal für langfristige Finanzierungen",
    ],
    nachteile: [
      "Höhere Zinssätze als bei variablen Zinsen",
      "Keine Vorteile bei Zinssenkungen",
      "Weniger Flexibilität",
    ],
    zinsbeispiel: "3,45%",
    laufzeit: "5-30 Jahre",
    zielgruppe: "Für Kunden, die Planungssicherheit bevorzugen",
  };

  const variabelzins = {
    name: "Variabler Zins",
    beschreibung: "Der Zinssatz kann sich während der Laufzeit ändern, abhängig vom Marktzins.",
    vorteile: [
      "Niedrigere Zinssätze zu Beginn",
      "Vorteile bei Zinssenkungen",
      "Mehr Flexibilität",
      "Kürzere Kündigungsfristen",
    ],
    nachteile: [
      "Zinsrisiko bei steigenden Zinsen",
      "Schwierigere Budgetplanung",
      "Ungewissheit über zukünftige Raten",
    ],
    zinsbeispiel: "3,15%",
    laufzeit: "1-10 Jahre",
    zielgruppe: "Für Kunden mit höherer Risikobereitschaft",
  };

  const vergleichstabelle = [
    {
      kriterium: "Zinssatz zu Beginn",
      festzins: "3,45%",
      variabel: "3,15%",
      sieger: "variabel",
    },
    {
      kriterium: "Planungssicherheit",
      festzins: "Sehr hoch",
      variabel: "Niedrig",
      sieger: "festzins",
    },
    {
      kriterium: "Flexibilität",
      festzins: "Niedrig",
      variabel: "Hoch",
      sieger: "variabel",
    },
    {
      kriterium: "Zinsrisiko",
      festzins: "Kein Risiko",
      variabel: "Höheres Risiko",
      sieger: "festzins",
    },
    {
      kriterium: "Laufzeit",
      festzins: "5-30 Jahre",
      variabel: "1-10 Jahre",
      sieger: "festzins",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="mb-6 text-sm">
              <Link href="/vergleiche" className="text-targo-blue hover:underline">
                Vergleiche
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Zinsvergleich</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Festzins vs. variabler Zins
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Eine der wichtigsten Entscheidungen bei der Baufinanzierung: Sollten Sie sich für einen festen oder variablen Zinssatz entscheiden? Wir helfen Ihnen, die Unterschiede zu verstehen und die richtige Wahl zu treffen.
            </p>
          </div>
        </div>
      </section>

      {/* Vergleichs-Übersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Festzins Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-targo-blue" />
                </div>
                <h2 className="text-2xl font-bold">{festzins.name}</h2>
              </div>
              <p className="text-gray-700 mb-6">{festzins.beschreibung}</p>
              
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Zinssatz (Beispiel)</div>
                <div className="text-3xl font-bold text-targo-blue">{festzins.zinsbeispiel}</div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Laufzeit</div>
                <div className="text-lg font-semibold">{festzins.laufzeit}</div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Vorteile
                </h3>
                <ul className="space-y-2">
                  {festzins.vorteile.map((vorteil, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{vorteil}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Nachteile
                </h3>
                <ul className="space-y-2">
                  {festzins.nachteile.map((nachteil, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 mt-1">✗</span>
                      <span className="text-gray-600">{nachteil}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Variabler Zins Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-targo-blue" />
                </div>
                <h2 className="text-2xl font-bold">{variabelzins.name}</h2>
              </div>
              <p className="text-gray-700 mb-6">{variabelzins.beschreibung}</p>
              
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Zinssatz (Beispiel)</div>
                <div className="text-3xl font-bold text-targo-blue">{variabelzins.zinsbeispiel}</div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Laufzeit</div>
                <div className="text-lg font-semibold">{variabelzins.laufzeit}</div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Vorteile
                </h3>
                <ul className="space-y-2">
                  {variabelzins.vorteile.map((vorteil, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{vorteil}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Nachteile
                </h3>
                <ul className="space-y-2">
                  {variabelzins.nachteile.map((nachteil, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 mt-1">✗</span>
                      <span className="text-gray-600">{nachteil}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Vergleichstabelle */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold">Direkter Vergleich</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Kriterium
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Festzins
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Variabler Zins
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {vergleichstabelle.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.kriterium}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.festzins}
                          {row.sieger === "festzins" && (
                            <span className="text-green-600">✓</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.variabel}
                          {row.sieger === "variabel" && (
                            <span className="text-green-600">✓</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Entscheidungshilfe */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Welche Option passt zu Ihnen?</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Festzins wählen, wenn:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie Planungssicherheit benötigen und Ihre monatliche Rate konstant halten möchten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie eine langfristige Finanzierung planen (über 10 Jahre)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie sich vor steigenden Zinsen schützen möchten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Ihr Budget keine Zinsschwankungen zulässt</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Variablen Zins wählen, wenn:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie eine kurzfristige Finanzierung planen (unter 10 Jahre)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie von möglichen Zinssenkungen profitieren möchten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie flexibel bleiben und die Finanzierung frühzeitig ablösen möchten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie höhere Risikobereitschaft haben</span>
                  </li>
                </ul>
              </div>
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
              Unsere Experten helfen Ihnen dabei, die richtige Zinsoption für Ihre Situation zu finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/finanzierungsanfrage" className="flex items-center whitespace-nowrap">
                  Beratung anfragen
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/rechner/baufinanzierung" className="flex items-center whitespace-nowrap">
                  Finanzierung berechnen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

