import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Building2, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "KfW-Förderung für Baufinanzierung | Programme & Antrag | Targohyp",
  description: "KfW-Förderprogramme für energieeffizientes Bauen und Sanieren. Günstige Zinssätze und Tilgungszuschüsse für Ihre Baufinanzierung nutzen.",
};

export default function KfWFoerdermittelPage() {
  const programme = [
    {
      name: "KfW 124 - Energieeffizient Bauen",
      beschreibung: "Förderung für energieeffiziente Neubauten mit KfW-Effizienzhaus-Standard.",
      zins: "ab 0,75%",
      zuschuss: "Bis zu 15.000 € Tilgungszuschuss",
      laufzeit: "Bis zu 30 Jahre",
    },
    {
      name: "KfW 151/152 - Energieeffizient Sanieren",
      beschreibung: "Förderung für die energetische Sanierung von Bestandsimmobilien.",
      zins: "ab 0,75%",
      zuschuss: "Bis zu 48.000 € Tilgungszuschuss",
      laufzeit: "Bis zu 30 Jahre",
    },
    {
      name: "KfW 261 - Erneuerbare Energien",
      beschreibung: "Förderung für den Einsatz erneuerbarer Energien wie Photovoltaik oder Wärmepumpen.",
      zins: "ab 1,00%",
      zuschuss: "Bis zu 30.000 € Tilgungszuschuss",
      laufzeit: "Bis zu 20 Jahre",
    },
  ];

  const vorteile = [
    "Besonders günstige Zinssätze",
    "Tilgungszuschüsse möglich",
    "Lange Laufzeiten bis zu 30 Jahren",
    "Für Neubau und Sanierung",
    "Energieeffizienz wird belohnt",
    "Kombinierbar mit anderen Fördermitteln",
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
            <span className="text-gray-700">KfW</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                KfW-Förderung
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Die KfW Bank bietet attraktive Förderprogramme für energieeffizientes Bauen und Sanieren. Nutzen Sie günstige Zinssätze und Tilgungszuschüsse für Ihre Baufinanzierung.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">KfW-Förderprogramme</h2>
          <div className="space-y-6">
            {programme.map((programm, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{programm.name}</h3>
                    <p className="text-gray-700 mb-4">{programm.beschreibung}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-targo-blue">{programm.zins}</div>
                    <div className="text-sm text-gray-600">p.a.</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Tilgungszuschuss</div>
                    <div className="font-semibold text-gray-900">{programm.zuschuss}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Laufzeit</div>
                    <div className="font-semibold text-gray-900">{programm.laufzeit}</div>
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
            <h2 className="text-2xl font-bold mb-6">Vorteile der KfW-Förderung</h2>
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
            <h2 className="text-2xl font-bold mb-6">So funktioniert die KfW-Förderung</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Die KfW-Förderung wird über Ihre Hausbank beantragt. Die KfW vergibt die Darlehen nicht direkt, sondern arbeitet mit Banken zusammen. Sie beantragen das KfW-Darlehen also bei Ihrer Bank, die es dann an die KfW weiterleitet.
              </p>
              <p>
                <strong>Wichtig:</strong> Die KfW-Förderung muss vor Baubeginn oder Kauf beantragt werden. Eine nachträgliche Beantragung ist nicht möglich. Planen Sie daher frühzeitig und lassen Sie sich von unseren Experten beraten.
              </p>
              <p>
                Die Konditionen der KfW-Förderung sind besonders attraktiv, da die KfW als staatliche Förderbank günstige Zinssätze anbieten kann. Zusätzlich können Sie von Tilgungszuschüssen profitieren, die einen Teil der Darlehenssumme erlassen.
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
              Fragen zur KfW-Förderung?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und helfen Ihnen dabei, die passende KfW-Förderung zu finden und zu beantragen.
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
