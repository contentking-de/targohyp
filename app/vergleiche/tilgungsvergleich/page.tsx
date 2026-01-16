import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, Download, TrendingUp, Calendar, Target } from "lucide-react";
import { createMetadata } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata = createMetadata({
  title: "Tilgungsmodelle vergleichen - Annuität, Raten & tilgungsfrei | Targohyp",
  description: "Welches Tilgungsmodell passt zu Ihrer Situation? Detaillierter Vergleich von Annuitätentilgung, Ratentilgung und tilgungsfreien Jahren. Vor- und Nachteile im Überblick.",
}, { path: "/vergleiche/tilgungsvergleich" });

export default function TilgungsvergleichPage() {
  const tilgungsmodelle = [
    {
      name: "Annuitätentilgung",
      beschreibung: "Die klassische Tilgungsform: Monatliche Rate bleibt konstant, der Tilgungsanteil steigt mit der Zeit.",
      vorteile: [
        "Konstante monatliche Belastung",
        "Einfache Planung",
        "Automatische Tilgungssteigerung",
        "Am weitesten verbreitet",
      ],
      nachteile: [
        "Zu Beginn niedrige Tilgung",
        "Längere Laufzeit bei niedriger Tilgung",
      ],
      zielgruppe: "Für die meisten Baufinanzierungen",
      beispiel: "100.000 € Kredit, 3% Zins, 2% Tilgung → Rate: 416,67 €/Monat",
      icon: Calendar,
    },
    {
      name: "Raten tilgung",
      beschreibung: "Feste Tilgungsrate, Zinsanteil sinkt mit der Zeit. Monatliche Rate wird geringer.",
      vorteile: [
        "Feste Tilgungsrate",
        "Sinkende monatliche Belastung",
        "Schnellere Tilgung möglich",
      ],
      nachteile: [
        "Höhere Anfangslast",
        "Weniger verbreitet",
        "Komplexere Berechnung",
      ],
      zielgruppe: "Für Kunden mit hoher Anfangstilgung",
      beispiel: "100.000 € Kredit, 3% Zins, 2% Tilgung → Startrate: 500 €/Monat, sinkt auf 250 €",
      icon: TrendingUp,
    },
    {
      name: "Tilgungsfreie Jahre",
      beschreibung: "Zu Beginn nur Zinsen zahlen, Tilgung beginnt später. Geringere Anfangslast.",
      vorteile: [
        "Niedrige Anfangslast",
        "Mehr Flexibilität zu Beginn",
        "Ideal bei erwarteten Einkommenssteigerungen",
      ],
      nachteile: [
        "Höhere Gesamtkosten",
        "Längere Laufzeit",
        "Höhere Zinslast",
      ],
      zielgruppe: "Für Kunden mit niedrigem Einstiegseinkommen",
      beispiel: "100.000 € Kredit, 3% Zins, 5 Jahre tilgungsfrei → Rate: 250 €/Monat (nur Zinsen)",
      icon: Target,
    },
  ];

  const vergleichstabelle = [
    {
      kriterium: "Monatliche Rate",
      annuitaet: "Konstant",
      ratentilgung: "Sinkend",
      tilgungsfrei: "Niedrig zu Beginn",
    },
    {
      kriterium: "Tilgungsanteil",
      annuitaet: "Steigend",
      ratentilgung: "Konstant",
      tilgungsfrei: "Später beginnend",
    },
    {
      kriterium: "Planungssicherheit",
      annuitaet: "Sehr hoch",
      ratentilgung: "Mittel",
      tilgungsfrei: "Niedrig",
    },
    {
      kriterium: "Gesamtkosten",
      annuitaet: "Mittel",
      ratentilgung: "Niedrig",
      tilgungsfrei: "Hoch",
    },
    {
      kriterium: "Laufzeit",
      annuitaet: "Standard",
      ratentilgung: "Kürzer möglich",
      tilgungsfrei: "Länger",
    },
  ];

  return (
    <div className="w-full">
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Vergleiche", url: "/vergleiche" },
        { name: "Tilgungsvergleich", url: "/vergleiche/tilgungsvergleich" }
      ]} />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="mb-6 text-sm">
              <Link href="/vergleiche" className="text-targo-blue hover:underline">
                Vergleiche
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Tilgungsvergleich</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tilgungsmodelle vergleichen
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Die Wahl des richtigen Tilgungsmodells ist entscheidend für Ihre Baufinanzierung. Vergleichen Sie die verschiedenen Optionen und finden Sie die passende Lösung für Ihre Situation.
            </p>
          </div>
        </div>
      </section>

      {/* Tilgungsmodelle Übersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {tilgungsmodelle.map((modell, idx) => {
              const Icon = modell.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-targo-blue" />
                    </div>
                    <h2 className="text-2xl font-bold">{modell.name}</h2>
                  </div>
                  <p className="text-gray-700 mb-6">{modell.beschreibung}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Beispiel</div>
                    <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                      {modell.beispiel}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Vorteile
                    </h3>
                    <ul className="space-y-2">
                      {modell.vorteile.map((vorteil, vIdx) => (
                        <li key={vIdx} className="flex items-start gap-2 text-sm">
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
                      {modell.nachteile.map((nachteil, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-2 text-sm">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-600">{nachteil}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">Zielgruppe</div>
                    <div className="text-sm font-medium">{modell.zielgruppe}</div>
                  </div>
                </div>
              );
            })}
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
                      Annuitätentilgung
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Raten tilgung
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Tilgungsfreie Jahre
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {vergleichstabelle.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.kriterium}</td>
                      <td className="px-6 py-4 text-center text-sm">{row.annuitaet}</td>
                      <td className="px-6 py-4 text-center text-sm">{row.ratentilgung}</td>
                      <td className="px-6 py-4 text-center text-sm">{row.tilgungsfrei}</td>
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
            <h2 className="text-2xl font-bold mb-6">Welches Tilgungsmodell passt zu Ihnen?</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-targo-blue">Annuitätentilgung wählen, wenn:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie eine konstante monatliche Belastung bevorzugen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie Planungssicherheit benötigen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie eine Standard-Baufinanzierung suchen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie von automatisch steigender Tilgung profitieren möchten</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-targo-blue">Raten tilgung wählen, wenn:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie eine hohe Anfangstilgung leisten können</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie die Finanzierung schneller zurückzahlen möchten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie mit sinkender monatlicher Belastung planen können</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-targo-blue">Tilgungsfreie Jahre wählen, wenn:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie zu Beginn der Finanzierung eine niedrige Belastung benötigen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie mit steigendem Einkommen rechnen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie kurzfristig mehr Flexibilität benötigen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-targo-blue mt-1">•</span>
                    <span>Sie bereit sind, höhere Gesamtkosten zu akzeptieren</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rechner CTA */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Tilgung berechnen</h2>
            <p className="text-gray-700 mb-6">
              Nutzen Sie unseren Tilgungsrechner, um verschiedene Tilgungsmodelle für Ihre Situation zu berechnen und zu vergleichen.
            </p>
            <Button
              className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/rechner/tilgung" className="flex items-center whitespace-nowrap">
                Zum Tilgungsrechner
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Link>
            </Button>
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
              Unsere Experten helfen Ihnen dabei, das passende Tilgungsmodell für Ihre Situation zu finden.
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

