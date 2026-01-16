import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, TrendingUp, Shield } from "lucide-react";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Darlehensarten für Baufinanzierung | Übersicht | Targohyp",
  description: "Übersicht der verschiedenen Darlehensarten für Ihre Baufinanzierung. Von Annuitätendarlehen bis Bauspardarlehen - finden Sie die passende Lösung.",
}, { path: "/finanzierung/darlehensarten" });

export default function DarlehensartenPage() {
  const darlehensarten = [
    {
      titel: "Annuitätendarlehen",
      beschreibung: "Das klassische Baufinanzierungsdarlehen mit konstanter monatlicher Rate. Die Rate setzt sich aus Zins und Tilgung zusammen.",
      vorteile: [
        "Feste monatliche Rate für Planungssicherheit",
        "Fester Zinssatz für die gesamte Laufzeit",
        "Einfache Berechnung und Übersicht",
        "Sondertilgungen möglich",
      ],
      nachteile: [
        "Keine Flexibilität bei Zinssenkungen",
        "Höhere Zinsbelastung bei langer Laufzeit",
      ],
    },
    {
      titel: "Tilgungsdarlehen",
      beschreibung: "Bei einem Tilgungsdarlehen bleibt die Tilgungsrate konstant, während die Zinsbelastung im Laufe der Zeit sinkt.",
      vorteile: [
        "Sinkende monatliche Belastung",
        "Schnellere Tilgung möglich",
        "Geringere Gesamtzinsbelastung",
      ],
      nachteile: [
        "Höhere Anfangslast",
        "Weniger verbreitet",
      ],
    },
    {
      titel: "Bauspardarlehen",
      beschreibung: "Ein Bauspardarlehen kombiniert Sparen und Darlehen. Nach einer Ansparphase folgt die Darlehensphase.",
      vorteile: [
        "Günstige Zinssätze",
        "Staatliche Förderung möglich",
        "Diszipliniertes Sparen",
      ],
      nachteile: [
        "Längere Vorlaufzeit",
        "Weniger flexibel",
      ],
    },
    {
      titel: "Volltilgerdarlehen",
      beschreibung: "Ein Volltilgerdarlehen wird vollständig während der Zinsbindung getilgt. Keine Restschuld am Ende.",
      vorteile: [
        "Keine Restschuld am Ende",
        "Vollständige Tilgung",
        "Planungssicherheit",
      ],
      nachteile: [
        "Höhere monatliche Belastung",
        "Längere Laufzeit bei niedriger Tilgung",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/finanzierung" className="text-targo-blue hover:underline">
              Finanzierung
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Darlehensarten</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Darlehensarten
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Es gibt verschiedene Arten von Darlehen für Ihre Baufinanzierung. Jede Darlehensart hat ihre Vor- und Nachteile. Erfahren Sie, welche Darlehensart zu Ihrer Situation passt.
            </p>
          </div>
        </div>
      </section>

      {/* Darlehensarten Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {darlehensarten.map((art, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-targo-blue" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{art.titel}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{art.beschreibung}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-targo-blue">Vorteile</h3>
                        <ul className="space-y-2">
                          {art.vorteile.map((vorteil, vIdx) => (
                            <li key={vIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{vorteil}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">Nachteile</h3>
                        <ul className="space-y-2">
                          {art.nachteile.map((nachteil, nIdx) => (
                            <li key={nIdx} className="flex items-start gap-2">
                              <Shield className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{nachteil}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Welche Darlehensart ist die richtige?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Die Wahl der richtigen Darlehensart hängt von Ihrer individuellen Situation ab. Faktoren wie Ihre finanzielle Situation, Ihre Risikobereitschaft und Ihre langfristigen Pläne spielen eine wichtige Rolle.
              </p>
              <p>
                <strong>Das Annuitätendarlehen</strong> ist die häufigste Darlehensart für Baufinanzierungen, da es Planungssicherheit bietet und einfach zu verstehen ist. Es eignet sich besonders für Kreditnehmer, die eine konstante monatliche Belastung bevorzugen.
              </p>
              <p>
                <strong>Wichtig:</strong> Lassen Sie sich von unseren Experten beraten, welche Darlehensart zu Ihrer Situation passt. Wir helfen Ihnen dabei, die beste Lösung für Ihre Baufinanzierung zu finden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#003366] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Fragen zu Darlehensarten?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und helfen Ihnen dabei, die passende Darlehensart für Ihre Baufinanzierung zu finden.
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
