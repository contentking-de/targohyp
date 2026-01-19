import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, Download } from "lucide-react";
import { createMetadata } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata = createMetadata({
  title: "Baufinanzierungsprodukte im Vergleich - Classic, Flex & Premium | Targohyp",
  description: "Detaillierter Vergleich unserer Baufinanzierungsprodukte: Classic, Flex und Premium. Zinssätze, Laufzeiten, Tilgung und Konditionen im direkten Vergleich. Finden Sie Ihr passendes Produkt.",
}, { path: "/vergleiche/produktvergleich" });

export default function ProduktvergleichPage() {
  const produkte = [
    {
      produkt: "Baufinanzierung Classic",
      zins: "3,45%",
      laufzeit: "10-30 Jahre",
      tilgung: "ab 1%",
      sondertilgung: "5% p.a.",
      mindestbetrag: "50.000 €",
      vorteile: ["Fester Zins", "Flexible Laufzeit", "Sondertilgung möglich", "Gute Konditionen"],
      nachteile: ["Höherer Zins als Premium-Varianten"],
      zielgruppe: "Für die meisten Baufinanzierungen",
      beschreibung: "Unser Standard-Produkt für Baufinanzierungen mit festem Zinssatz und flexiblen Laufzeiten.",
    },
    {
      produkt: "Baufinanzierung Flex",
      zins: "3,15%",
      laufzeit: "5-15 Jahre",
      tilgung: "ab 2%",
      sondertilgung: "10% p.a.",
      mindestbetrag: "100.000 €",
      vorteile: ["Niedriger Zins", "Kurze Laufzeit", "Hohe Sondertilgung", "Flexible Rückzahlung"],
      nachteile: ["Variable Zinsen möglich", "Kürzere Laufzeit", "Höhere Mindestsumme"],
      zielgruppe: "Für kurzfristige Finanzierungen",
      beschreibung: "Ideal für Kunden, die eine kurzfristige Finanzierung mit niedrigem Zinssatz suchen.",
    },
    {
      produkt: "Baufinanzierung Premium",
      zins: "2,95%",
      laufzeit: "15-35 Jahre",
      tilgung: "ab 1%",
      sondertilgung: "5% p.a.",
      mindestbetrag: "250.000 €",
      vorteile: ["Top-Zins", "Lange Laufzeit", "Planungssicherheit", "Exklusive Konditionen"],
      nachteile: ["Hohe Mindestsumme", "Längere Bindung"],
      zielgruppe: "Für größere Finanzierungen",
      beschreibung: "Unser Premium-Produkt mit besonders günstigen Zinssätzen für größere Finanzierungsbeträge.",
    },
  ];

  const vergleichskriterien = [
    { kriterium: "Zinssatz", einheit: "%" },
    { kriterium: "Laufzeit", einheit: "Jahre" },
    { kriterium: "Mindesttilgung", einheit: "%" },
    { kriterium: "Sondertilgung", einheit: "% p.a." },
    { kriterium: "Mindestbetrag", einheit: "€" },
  ];

  return (
    <div className="w-full">
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Vergleiche", url: "/vergleiche" },
        { name: "Produktvergleich", url: "/vergleiche/produktvergleich" }
      ]} />
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="mb-6 text-sm">
              <Link href="/vergleiche" className="text-targo-blue hover:underline">
                Vergleiche
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Produktvergleich</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Baufinanzierungsprodukte im Vergleich
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vergleichen Sie unsere verschiedenen Baufinanzierungsprodukte und finden Sie die passende Lösung für Ihre Immobilienfinanzierung. Alle Produkte im direkten Vergleich.
            </p>
          </div>
        </div>
      </section>

      {/* Produktvergleich-Tabelle */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Produktvergleich</h2>
            <Button className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Als PDF exportieren
            </Button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-12">
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
                      Mindestbetrag
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Aktion
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {produkte.map((produkt, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-lg">{produkt.produkt}</div>
                        <div className="text-sm text-gray-600 mt-1">{produkt.beschreibung}</div>
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
                      <td className="px-6 py-4 text-gray-700">
                        {produkt.mindestbetrag}
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                          asChild
                        >
                          <Link href="/finanzierung">
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

          {/* Detaillierte Produktkarten */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {produkte.map((produkt, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{produkt.produkt}</h3>
                <p className="text-sm text-gray-600 mb-4">{produkt.beschreibung}</p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Zinssatz</div>
                  <div className="text-2xl font-bold text-targo-blue">{produkt.zins}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Zielgruppe</div>
                  <div className="text-sm font-medium">{produkt.zielgruppe}</div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Vorteile
                  </h4>
                  <ul className="space-y-1">
                    {produkt.vorteile.map((vorteil, vIdx) => (
                      <li key={vIdx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{vorteil}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    Nachteile
                  </h4>
                  <ul className="space-y-1">
                    {produkt.nachteile.map((nachteil, nIdx) => (
                      <li key={nIdx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{nachteil}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entscheidungshilfe */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Welches Produkt passt zu Ihnen?</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-targo-blue">Baufinanzierung Classic</h3>
                <p className="text-gray-700 mb-4">
                  Ideal für die meisten Baufinanzierungen. Gute Konditionen, flexible Laufzeiten und die Möglichkeit zur Sondertilgung machen dieses Produkt zur Standard-Wahl.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Finanzierungsbetrag zwischen 50.000 € und 250.000 €</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie möchten eine langfristige Finanzierung (10-30 Jahre)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie benötigen Planungssicherheit mit festem Zinssatz</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-targo-blue">Baufinanzierung Flex</h3>
                <p className="text-gray-700 mb-4">
                  Perfekt für kurzfristige Finanzierungen mit niedrigem Zinssatz. Ideal wenn Sie die Finanzierung schnell zurückzahlen möchten.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Finanzierungsbetrag ab 100.000 €</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie planen eine kurzfristige Finanzierung (5-15 Jahre)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie möchten von niedrigeren Zinsen profitieren</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-targo-blue">Baufinanzierung Premium</h3>
                <p className="text-gray-700 mb-4">
                  Unser Premium-Produkt mit besonders günstigen Zinssätzen für größere Finanzierungsbeträge. Exklusive Konditionen für anspruchsvolle Kunden.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Finanzierungsbetrag ab 250.000 €</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie suchen die besten Zinssätze am Markt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie planen eine sehr langfristige Finanzierung (15-35 Jahre)</span>
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
              Unsere Experten helfen Ihnen dabei, das passende Produkt für Ihre Situation zu finden.
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

