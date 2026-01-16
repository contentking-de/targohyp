import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Shield } from "lucide-react";
import { createMetadata } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata = createMetadata({
  title: "Bafa-Förderung für Baufinanzierung | Heizung & Sanierung | Targohyp",
  description: "Bafa-Förderung für energieeffiziente Heizungsanlagen und energetische Sanierung. Direkte Zuschüsse für Ihre Baufinanzierung nutzen.",
}, { path: "/finanzierung/foerdermittel/bafa" });

export default function BafaFoerdermittelPage() {
  const foerderungen = [
    {
      titel: "Heizungsoptimierung",
      beschreibung: "Förderung für den Austausch alter Heizungsanlagen durch energieeffiziente Systeme.",
      zuschuss: "Bis zu 30% der Kosten",
      maxBetrag: "Bis zu 15.000 €",
    },
    {
      titel: "Wärmepumpen",
      beschreibung: "Förderung für den Einbau von Wärmepumpen zur umweltfreundlichen Wärmeerzeugung.",
      zuschuss: "Bis zu 40% der Kosten",
      maxBetrag: "Bis zu 20.000 €",
    },
    {
      titel: "Solarthermie",
      beschreibung: "Förderung für Solarthermieanlagen zur Warmwasserbereitung und Heizungsunterstützung.",
      zuschuss: "Bis zu 30% der Kosten",
      maxBetrag: "Bis zu 10.000 €",
    },
    {
      titel: "Energetische Sanierung",
      beschreibung: "Förderung für umfassende energetische Sanierungsmaßnahmen an Gebäuden.",
      zuschuss: "Bis zu 20% der Kosten",
      maxBetrag: "Bis zu 50.000 €",
    },
  ];

  const vorteile = [
    "Direkte Zuschüsse (kein Darlehen)",
    "Einfache Beantragung online",
    "Schnelle Bearbeitung",
    "Für verschiedene Maßnahmen",
    "Kombinierbar mit anderen Fördermitteln",
    "Keine Rückzahlung erforderlich",
  ];

  return (
    <div className="w-full">
      {/* BreadcrumbList Schema-Markup */}
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Finanzierung", url: "/finanzierung" },
        { name: "Fördermittel", url: "/finanzierung/foerdermittel" },
        { name: "Bafa", url: "/finanzierung/foerdermittel/bafa" }
      ]} />
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
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
            <span className="text-gray-700">Bafa</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Bafa-Förderung
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (Bafa) fördert energieeffiziente Maßnahmen mit direkten Zuschüssen. Nutzen Sie diese Förderung für Ihre Baufinanzierung.
            </p>
          </div>
        </div>
      </section>

      {/* Förderungen Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Bafa-Förderprogramme</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {foerderungen.map((foerderung, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-targo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">{foerderung.titel}</h3>
                <p className="text-gray-700 mb-4">{foerderung.beschreibung}</p>
                <div className="space-y-2">
                  <div>
                    <div className="text-sm text-gray-600">Fördersatz</div>
                    <div className="font-semibold text-targo-blue">{foerderung.zuschuss}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Maximaler Zuschuss</div>
                    <div className="font-semibold text-gray-900">{foerderung.maxBetrag}</div>
                  </div>
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
            <h2 className="text-2xl font-bold mb-6">Vorteile der Bafa-Förderung</h2>
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
            <h2 className="text-2xl font-bold mb-6">So funktioniert die Bafa-Förderung</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Die Bafa-Förderung wird direkt beim Bundesamt für Wirtschaft und Ausfuhrkontrolle beantragt. Im Gegensatz zur KfW-Förderung erhalten Sie hier keine Darlehen, sondern direkte Zuschüsse, die Sie nicht zurückzahlen müssen.
              </p>
              <p>
                <strong>Wichtig:</strong> Die Bafa-Förderung muss vor Beginn der Maßnahme beantragt werden. Eine nachträgliche Beantragung ist nicht möglich. Planen Sie daher frühzeitig und lassen Sie sich von unseren Experten beraten.
              </p>
              <p>
                Die Beantragung erfolgt online über das Bafa-Portal. Nach der Prüfung erhalten Sie einen Förderbescheid, der die Höhe des Zuschusses festlegt. Nach Abschluss der Maßnahme reichen Sie die Rechnungen ein und erhalten den Zuschuss ausgezahlt.
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
              Fragen zur Bafa-Förderung?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und helfen Ihnen dabei, die passende Bafa-Förderung zu finden und zu beantragen.
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
