import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, CreditCard, Shield, TrendingUp } from "lucide-react";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Bonität & Schufa für Baufinanzierung | Targohyp",
  description: "Alles Wichtige zur Bonitätsprüfung und Schufa-Auskunft bei der Baufinanzierung. Erfahren Sie, wie Ihre Bonität die Konditionen beeinflusst.",
}, { path: "/finanzierung/ablauf-unterlagen/bonitaet-schufa" });

export default function BonitaetSchufaPage() {
  const faktoren = [
    {
      titel: "Einkommen und Beschäftigung",
      beschreibung: "Ein sicheres und regelmäßiges Einkommen ist ein wichtiger Faktor für eine gute Bonität. Angestellte mit unbefristetem Arbeitsvertrag haben hier Vorteile.",
    },
    {
      titel: "Schufa-Score",
      beschreibung: "Ihr Schufa-Score gibt Auskunft über Ihre Kreditwürdigkeit. Ein guter Score kann zu besseren Zinskonditionen führen.",
    },
    {
      titel: "Eigenkapital",
      beschreibung: "Je mehr Eigenkapital Sie einbringen können, desto besser ist Ihre Bonität. Eigenkapital reduziert das Risiko für die Bank.",
    },
    {
      titel: "Bestehende Verbindlichkeiten",
      beschreibung: "Bestehende Kredite oder Ratenzahlungen werden bei der Bonitätsprüfung berücksichtigt. Eine geringe Verschuldung wirkt sich positiv aus.",
    },
  ];

  const schufaTipps = [
    "Prüfen Sie regelmäßig Ihre Schufa-Auskunft",
    "Bezahlen Sie Rechnungen pünktlich",
    "Vermeiden Sie zu viele Kreditanträge",
    "Kündigen Sie nicht genutzte Kreditkarten",
    "Klären Sie negative Einträge schnellstmöglich",
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
            <Link href="/finanzierung/ablauf-unterlagen" className="text-targo-blue hover:underline">
              Ablauf & Unterlagen
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Bonität / Schufa</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Bonität / Schufa
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ihre Bonität ist ein entscheidender Faktor für die Konditionen Ihrer Baufinanzierung. Erfahren Sie, wie die Bonitätsprüfung funktioniert und was Sie beachten sollten.
            </p>
          </div>
        </div>
      </section>

      {/* Bonität Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Was ist Bonität?</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Die Bonität beschreibt die Kreditwürdigkeit einer Person oder eines Unternehmens. Sie gibt Auskunft darüber, wie wahrscheinlich es ist, dass ein Kredit zurückgezahlt wird. Banken prüfen die Bonität, um das Risiko einer Finanzierung einzuschätzen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Eine gute Bonität kann zu besseren Zinskonditionen führen, während eine schlechte Bonität die Finanzierung erschweren oder teurer machen kann.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6">Faktoren der Bonität</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faktoren.map((faktor, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-targo-blue" />
                </div>
                <h4 className="text-xl font-bold mb-2">{faktor.titel}</h4>
                <p className="text-gray-700 leading-relaxed">{faktor.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schufa Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Die Schufa-Auskunft</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                Die Schufa (Schutzgemeinschaft für allgemeine Kreditsicherung) sammelt Daten über die Kreditwürdigkeit von Personen in Deutschland. Banken nutzen diese Daten, um die Bonität von Kreditnehmern zu bewerten.
              </p>
              <p>
                Ihr Schufa-Score liegt zwischen 0 und 100. Ein höherer Score bedeutet eine bessere Bonität. Die Schufa berücksichtigt dabei verschiedene Faktoren wie Zahlungsverhalten, bestehende Kredite und Kreditkarten.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-targo-blue">Tipps für eine gute Schufa-Bewertung</h3>
              <div className="space-y-3">
                {schufaTipps.map((tipp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tipp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Kostenlose Schufa-Auskunft</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sie haben das Recht, einmal pro Jahr kostenlos eine Schufa-Auskunft anzufordern. So können Sie überprüfen, welche Daten über Sie gespeichert sind und ob alle Informationen korrekt sind.
              </p>
              <p>
                <strong>Wichtig:</strong> Prüfen Sie Ihre Schufa-Auskunft regelmäßig, besonders vor einer geplanten Baufinanzierung. So können Sie frühzeitig Probleme erkennen und beheben.
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
              Fragen zur Bonität oder Schufa?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und helfen Ihnen dabei, Ihre Bonität zu verbessern und die besten Konditionen zu erhalten.
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
