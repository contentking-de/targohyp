import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Building2, TrendingUp, Shield, Calculator } from "lucide-react";

export const metadata = {
  title: "Immobilienfinanzierung - Kauf & Kapitalanlage | Targohyp",
  description: "Finanzierung für den Kauf von Immobilien. Flexible Lösungen für Eigennutzung oder Kapitalanlage. Günstige Zinsen und maßgeschneiderte Konditionen für Ihre Immobilienfinanzierung.",
};

export default function ImmobilienfinanzierungPage() {
  const vorteile = [
    "Finanzierung für Eigennutzung und Kapitalanlage",
    "Attraktive Zinssätze für Immobilienkäufe",
    "Flexible Laufzeiten und Tilgungsmodelle",
    "Finanzierung von Bestandsimmobilien möglich",
    "Berücksichtigung von Mieteinnahmen bei Kapitalanlagen",
    "Schnelle Bearbeitung und Zusage",
  ];

  const produkte = [
    {
      name: "Immobilienfinanzierung Classic",
      zins: "3,50%",
      laufzeit: "10-30 Jahre",
      beschreibung: "Die klassische Immobilienfinanzierung für den Kauf von Bestandsimmobilien.",
    },
    {
      name: "Immobilienfinanzierung Invest",
      zins: "3,65%",
      laufzeit: "10-25 Jahre",
      beschreibung: "Speziell für Kapitalanleger: Finanzierung unter Berücksichtigung von Mieteinnahmen.",
    },
    {
      name: "Immobilienfinanzierung Premium",
      zins: "3,00%",
      laufzeit: "15-35 Jahre",
      beschreibung: "Premium-Finanzierung mit besonders günstigen Konditionen für hohe Darlehenssummen.",
    },
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
            <span className="text-gray-700">Immobilienfinanzierung</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Immobilienfinanzierung
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Finanzieren Sie den Kauf Ihrer Traumimmobilie. Ob für die Eigennutzung oder als Kapitalanlage – wir bieten flexible Lösungen mit attraktiven Zinssätzen.
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Warum eine Immobilienfinanzierung bei uns?</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Eine Immobilie zu kaufen ist eine wichtige Investition. Wir unterstützen Sie dabei mit maßgeschneiderten Finanzierungslösungen, die zu Ihren Zielen passen – ob Sie selbst einziehen möchten oder die Immobilie als Kapitalanlage nutzen.
              </p>
              <div className="space-y-4">
                {vorteile.map((vorteil, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-targo-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{vorteil}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Unsere Produkte</h3>
              <div className="space-y-6">
                {produkte.map((produkt, idx) => (
                  <div key={idx} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold">{produkt.name}</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-targo-blue">{produkt.zins}</div>
                        <div className="text-sm text-gray-600">p.a.</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{produkt.beschreibung}</p>
                    <div className="text-sm text-gray-600">Laufzeit: {produkt.laufzeit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Eigennutzung vs. Kapitalanlage</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-targo-blue">Eigennutzung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie die Immobilie selbst bewohnen möchten, können Sie von günstigen Zinssätzen profitieren. Die Finanzierung kann bis zu 100% des Kaufpreises betragen, abhängig von Ihrer Bonität und dem Objektwert.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-targo-blue">Kapitalanlage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bei einer Kapitalanlage können Mieteinnahmen bei der Finanzierung berücksichtigt werden. Dies ermöglicht es Ihnen, auch mit weniger Eigenkapital zu investieren. Die Konditionen sind speziell auf die Bedürfnisse von Investoren ausgerichtet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Hilfreiche Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/rechner/baufinanzierung"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Finanzierungsrechner
              </h3>
              <p className="text-gray-700 mb-4">
                Berechnen Sie Ihre monatliche Rate und Gesamtkosten.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Rechner öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/rechner/eigenkapital"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Eigenkapitalrechner
              </h3>
              <p className="text-gray-700 mb-4">
                Prüfen Sie Ihr verfügbares Eigenkapital.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Rechner öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/vergleiche/produktvergleich"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Produktvergleich
              </h3>
              <p className="text-gray-700 mb-4">
                Vergleichen Sie unsere Finanzierungsprodukte.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Vergleich ansehen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#003366] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Bereit für Ihre Immobilienfinanzierung?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und finden die passende Lösung für Ihre Immobilienfinanzierung.
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

