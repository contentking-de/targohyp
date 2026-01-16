import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Building2, Calculator, Shield } from "lucide-react";

export const metadata = {
  title: "Kapitalanlage finanzieren | Immobilien als Investment | Targohyp",
  description: "Finanzierung für Immobilien als Kapitalanlage. Attraktive Konditionen für Investoren. Mieteinnahmen werden bei der Finanzierung berücksichtigt. Jetzt unverbindlich anfragen.",
};

export default function KapitalanlageFinanzierenPage() {
  const vorteile = [
    "Berücksichtigung von Mieteinnahmen bei der Finanzierung",
    "Attraktive Zinssätze für Kapitalanleger",
    "Flexible Laufzeiten und Tilgungsmodelle",
    "Finanzierung für Bestandsimmobilien möglich",
    "Steuerliche Vorteile nutzbar",
    "Langfristige Wertsteigerung möglich",
  ];

  const produkte = [
    {
      name: "Kapitalanlage Classic",
      zins: "3,65%",
      laufzeit: "10-30 Jahre",
      beschreibung: "Die klassische Finanzierung für Immobilien als Kapitalanlage mit festem Zinssatz.",
    },
    {
      name: "Kapitalanlage Invest",
      zins: "3,80%",
      laufzeit: "10-25 Jahre",
      beschreibung: "Speziell für Kapitalanleger: Finanzierung unter Berücksichtigung von Mieteinnahmen.",
    },
    {
      name: "Kapitalanlage Premium",
      zins: "3,40%",
      laufzeit: "15-35 Jahre",
      beschreibung: "Premium-Finanzierung mit besonders günstigen Konditionen für hohe Darlehenssummen.",
    },
  ];

  const vorteileKapitalanlage = [
    {
      titel: "Regelmäßige Mieteinnahmen",
      beschreibung: "Immobilien als Kapitalanlage generieren regelmäßige Mieteinnahmen, die Ihre monatliche Belastung reduzieren können.",
    },
    {
      titel: "Steuerliche Vorteile",
      beschreibung: "Als Kapitalanleger können Sie verschiedene steuerliche Vorteile nutzen, wie Abschreibungen und Werbungskosten.",
    },
    {
      titel: "Langfristige Wertsteigerung",
      beschreibung: "Immobilien haben historisch eine gute Wertentwicklung gezeigt und können langfristig an Wert gewinnen.",
    },
    {
      titel: "Diversifikation des Portfolios",
      beschreibung: "Immobilien bieten eine gute Möglichkeit, Ihr Portfolio zu diversifizieren und Risiken zu streuen.",
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
            <span className="text-gray-700">Kapitalanlage finanzieren</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Kapitalanlage finanzieren
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Finanzieren Sie Immobilien als Kapitalanlage. Wir bieten attraktive Konditionen für Investoren und berücksichtigen Mieteinnahmen bei der Finanzierung. So können Sie auch mit weniger Eigenkapital investieren.
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Warum eine Kapitalanlage finanzieren?</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Immobilien als Kapitalanlage bieten viele Vorteile: Regelmäßige Mieteinnahmen, langfristige Wertsteigerung und steuerliche Vorteile. Wir unterstützen Sie dabei, Ihre Investition optimal zu finanzieren.
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
              <h3 className="text-2xl font-bold mb-4">Unsere Produkte für Kapitalanleger</h3>
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

      {/* Vorteile Kapitalanlage Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Vorteile einer Immobilie als Kapitalanlage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {vorteileKapitalanlage.map((vorteil, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-targo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">{vorteil.titel}</h3>
                <p className="text-gray-700 leading-relaxed">{vorteil.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Mieteinnahmen bei der Finanzierung</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ein großer Vorteil bei der Finanzierung von Immobilien als Kapitalanlage ist, dass Mieteinnahmen bei der Bonitätsprüfung berücksichtigt werden können. Dies ermöglicht es Ihnen, auch mit weniger Eigenkapital zu investieren.
              </p>
              <p>
                Banken bewerten in der Regel 70-80% der erwarteten Mieteinnahmen als zusätzliches Einkommen. Dies kann Ihre Finanzierungskapazität deutlich erhöhen und ermöglicht es Ihnen, auch größere Objekte zu finanzieren.
              </p>
              <p>
                <strong>Wichtig:</strong> Für die Berücksichtigung von Mieteinnahmen benötigen Sie in der Regel eine Mietwertbescheinigung oder eine entsprechende Marktanalyse. Unsere Experten helfen Ihnen dabei, alle notwendigen Unterlagen zusammenzustellen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="w-full py-16 bg-gray-50">
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
              Bereit für Ihre Kapitalanlage?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und finden die passende Finanzierungslösung für Ihre Immobilie als Kapitalanlage.
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
