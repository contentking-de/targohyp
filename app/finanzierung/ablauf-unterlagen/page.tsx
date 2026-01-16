import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, ClipboardList, CreditCard } from "lucide-react";

export const metadata = {
  title: "Ablauf & Unterlagen für Baufinanzierung | Targohyp",
  description: "Alles Wichtige zum Ablauf einer Baufinanzierung und welche Unterlagen Sie benötigen. Von der ersten Beratung bis zur Auszahlung - wir begleiten Sie durch den gesamten Prozess.",
};

export default function AblaufUnterlagenPage() {
  const schritte = [
    {
      nummer: "1",
      titel: "Erstberatung",
      beschreibung: "In einem ersten Gespräch klären wir Ihre Wünsche und Möglichkeiten. Wir analysieren Ihre finanzielle Situation und erarbeiten erste Finanzierungsvorschläge.",
    },
    {
      nummer: "2",
      titel: "Angebotserstellung",
      beschreibung: "Basierend auf Ihren Angaben erstellen wir Ihnen ein individuelles Finanzierungsangebot mit transparenten Konditionen.",
    },
    {
      nummer: "3",
      titel: "Unterlagenprüfung",
      beschreibung: "Wir prüfen alle notwendigen Unterlagen und führen eine Bonitätsprüfung durch. Bei Fragen stehen wir Ihnen jederzeit zur Verfügung.",
    },
    {
      nummer: "4",
      titel: "Finanzierungszusage",
      beschreibung: "Nach erfolgreicher Prüfung erhalten Sie die Finanzierungszusage. Alle Konditionen werden schriftlich festgehalten.",
    },
    {
      nummer: "5",
      titel: "Notartermin",
      beschreibung: "Beim Notar wird der Kaufvertrag unterzeichnet und die Finanzierung wird notariell beurkundet.",
    },
    {
      nummer: "6",
      titel: "Auszahlung",
      beschreibung: "Nach Eintragung der Grundschuld erfolgt die Auszahlung des Darlehensbetrags an den Verkäufer oder Bauträger.",
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
            <span className="text-gray-700">Ablauf & Unterlagen</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Ablauf & Unterlagen
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Erfahren Sie, wie der Ablauf einer Baufinanzierung aussieht und welche Unterlagen Sie benötigen. Wir begleiten Sie Schritt für Schritt durch den gesamten Prozess.
            </p>
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Der Ablauf Ihrer Baufinanzierung</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {schritte.map((schritt, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-targo-blue">{schritt.nummer}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{schritt.titel}</h3>
                    <p className="text-gray-700 leading-relaxed">{schritt.beschreibung}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unterlagen Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Benötigte Unterlagen</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Für eine schnelle Bearbeitung Ihrer Baufinanzierung benötigen wir verschiedene Unterlagen. Die genaue Liste hängt von Ihrer individuellen Situation ab.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-targo-blue">Persönliche Unterlagen</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span>Personalausweis oder Reisepass (Kopie)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span>Einkommensnachweise (Lohnabrechnungen der letzten 3 Monate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span>Arbeitsvertrag oder unbefristeter Arbeitsvertrag</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span>Kontoauszüge der letzten 3 Monate</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-targo-blue">Immobilienunterlagen</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span>Kaufvertrag oder Bauvertrag</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span>Grundbuchauszug</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span>Grundriss und Lageplan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-targo-blue flex-shrink-0 mt-0.5" />
                  <span>Wertgutachten oder Beleihungsauskunft</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Weitere Informationen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/finanzierung/ablauf-unterlagen/checklisten"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <ClipboardList className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Checklists
              </h3>
              <p className="text-gray-700 mb-4">
                Praktische Checklisten für Ihre Baufinanzierung zum Download.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Checklisten ansehen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/finanzierung/ablauf-unterlagen/bonitaet-schufa"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-targo-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                Bonität / Schufa
              </h3>
              <p className="text-gray-700 mb-4">
                Alles Wichtige zur Bonitätsprüfung und Schufa-Auskunft.
              </p>
              <div className="flex items-center text-targo-blue font-semibold">
                Mehr erfahren
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
              Fragen zum Ablauf oder benötigten Unterlagen?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten beraten Sie gerne persönlich und helfen Ihnen bei der Zusammenstellung aller notwendigen Unterlagen.
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
