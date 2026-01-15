import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "Regionale Fördermittel für Baufinanzierung | Bundesländer & Kommunen | Targohyp",
  description: "Übersicht regionaler Fördermittel für Baufinanzierungen. Förderprogramme der Bundesländer und Kommunen nutzen.",
};

export default function RegionaleFoerdermittelPage() {
  const regionen = [
    {
      bundesland: "Bayern",
      beschreibung: "Verschiedene Förderprogramme für energieeffizientes Bauen und Sanieren.",
      programme: [
        "Bayerische Wohnungsbauprämie",
        "Energieeffizient Sanieren",
        "Wohneigentumsprogramm",
      ],
    },
    {
      bundesland: "Baden-Württemberg",
      beschreibung: "Umfangreiche Förderung für nachhaltiges Bauen und energetische Sanierung.",
      programme: [
        "Wohnraumförderung",
        "Energieeffizienzprogramm",
        "Klimaschutz-Plus",
      ],
    },
    {
      bundesland: "Nordrhein-Westfalen",
      beschreibung: "Förderprogramme für Wohnungsbau und energetische Modernisierung.",
      programme: [
        "Wohnraumförderung NRW",
        "Progres.NRW",
        "Klimaschutzprogramm",
      ],
    },
    {
      bundesland: "Hessen",
      beschreibung: "Förderung für energieeffizientes Bauen und Sanieren.",
      programme: [
        "Hessisches Wohnraumförderungsprogramm",
        "Energieeffizienz-Förderung",
        "Wohneigentumsprogramm",
      ],
    },
  ];

  const vorteile = [
    "Zusätzliche Förderung zu Bundesprogrammen",
    "Regionale Anpassung an lokale Bedürfnisse",
    "Oft kombinierbar mit KfW und Bafa",
    "Für verschiedene Zielgruppen",
    "Attraktive Konditionen",
    "Schnelle Bearbeitung möglich",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/finanzierung" className="text-targo-blue hover:underline">
              Finanzierung
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/finanzierung/foerdermittel" className="text-targo-blue hover:underline">
              Fördermittel
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Regionale Fördermittel</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Regionale Fördermittel
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Viele Bundesländer und Kommunen bieten eigene Förderprogramme für Baufinanzierungen. Nutzen Sie diese zusätzlichen Möglichkeiten zur Finanzierung Ihrer Immobilie.
            </p>
          </div>
        </div>
      </section>

      {/* Regionen Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Förderprogramme nach Bundesländern</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regionen.map((region, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-targo-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{region.bundesland}</h3>
                    <p className="text-gray-700 mb-4">{region.beschreibung}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Förderprogramme:</div>
                  {region.programme.map((programm, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-targo-blue flex-shrink-0 mt-0.5" />
                      <span>{programm}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Vorteile regionaler Fördermittel</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {vorteile.map((vorteil, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{vorteil}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">So finden Sie regionale Fördermittel</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Regionale Fördermittel werden von den Bundesländern, Kommunen oder regionalen Förderbanken angeboten. Die Programme und Konditionen unterscheiden sich je nach Region erheblich.
              </p>
              <p>
                <strong>Wichtig:</strong> Informieren Sie sich frühzeitig über die verfügbaren regionalen Fördermittel in Ihrer Region. Viele Programme haben begrenzte Mittel und werden nach dem Prinzip "Wer zuerst kommt, mahlt zuerst" vergeben.
              </p>
              <p>
                Regionale Fördermittel können oft mit Bundesprogrammen wie KfW oder Bafa kombiniert werden. So können Sie die Gesamtkosten Ihrer Baufinanzierung deutlich reduzieren. Unsere Experten kennen die regionalen Förderprogramme und helfen Ihnen dabei, alle Möglichkeiten zu nutzen.
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
              Fragen zu regionalen Fördermitteln?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und helfen Ihnen dabei, alle verfügbaren regionalen Fördermittel in Ihrer Region zu finden und zu beantragen.
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
