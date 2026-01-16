import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Gift, TrendingUp, Building2 } from "lucide-react";

export const metadata = {
  title: "Fördermittel für Baufinanzierung | KfW, Bafa & mehr | Targohyp",
  description: "Übersicht der Fördermittel für Ihre Baufinanzierung. Von KfW-Förderung über Bafa bis zu regionalen Fördermitteln - nutzen Sie alle Möglichkeiten.",
};

export default function FoerdermittelPage() {
  const foerdermittel = [
    {
      titel: "KfW-Förderung",
      beschreibung: "Die KfW Bank bietet verschiedene Förderprogramme für energieeffizientes Bauen und Sanieren.",
      vorteile: [
        "Günstige Zinssätze",
        "Tilgungszuschüsse möglich",
        "Für Neubau und Sanierung",
        "Energieeffizienz wird belohnt",
      ],
      link: "/finanzierung/foerdermittel/kfw",
    },
    {
      titel: "Bafa-Förderung",
      beschreibung: "Das Bundesamt für Wirtschaft und Ausfuhrkontrolle fördert energieeffiziente Maßnahmen.",
      vorteile: [
        "Direkte Zuschüsse",
        "Für Heizungsanlagen",
        "Für energetische Sanierung",
        "Einfache Beantragung",
      ],
      link: "/finanzierung/foerdermittel/bafa",
    },
    {
      titel: "Regionale Fördermittel",
      beschreibung: "Viele Bundesländer und Kommunen bieten eigene Förderprogramme für Baufinanzierungen.",
      vorteile: [
        "Regionale Anpassung",
        "Zusätzliche Förderung",
        "Für verschiedene Zielgruppen",
        "Oft kombinierbar",
      ],
      link: "/finanzierung/foerdermittel/regionale-foerdermittel",
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
            <span className="text-gray-700">Fördermittel</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Gift className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Fördermittel
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nutzen Sie staatliche und regionale Fördermittel für Ihre Baufinanzierung. Von KfW-Förderung über Bafa bis zu regionalen Programmen - wir helfen Ihnen dabei, alle Möglichkeiten zu nutzen.
            </p>
          </div>
        </div>
      </section>

      {/* Fördermittel Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {foerdermittel.map((foerderung, idx) => (
              <Link
                key={idx}
                href={foerderung.link}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-targo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                  {foerderung.titel}
                </h3>
                <p className="text-gray-700 mb-4">{foerderung.beschreibung}</p>
                <div className="space-y-2 mb-4">
                  {foerderung.vorteile.map((vorteil, vIdx) => (
                    <div key={vIdx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-targo-blue flex-shrink-0 mt-0.5" />
                      <span>{vorteil}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-targo-blue font-semibold">
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Fördermittel kombinieren</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Viele Fördermittel können miteinander kombiniert werden. So können Sie beispielsweise KfW-Förderung mit regionalen Fördermitteln kombinieren und so die Gesamtkosten Ihrer Baufinanzierung deutlich reduzieren.
              </p>
              <p>
                <strong>Wichtig:</strong> Die Beantragung von Fördermitteln sollte frühzeitig erfolgen, idealerweise vor dem Kauf oder Baubeginn. Unsere Experten helfen Ihnen dabei, alle verfügbaren Fördermittel zu identifizieren und zu beantragen.
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
              Fragen zu Fördermitteln?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und helfen Ihnen dabei, alle verfügbaren Fördermittel zu nutzen.
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
