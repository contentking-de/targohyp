import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Download, FileText, ClipboardList } from "lucide-react";

export const metadata = {
  title: "Checklisten für Baufinanzierung | Download | Targohyp",
  description: "Praktische Checklisten für Ihre Baufinanzierung zum Download. Von der ersten Beratung bis zur Auszahlung - behalten Sie den Überblick.",
};

export default function ChecklistsPage() {
  const checklisten = [
    {
      titel: "Checkliste: Erste Beratung",
      beschreibung: "Alle wichtigen Fragen und Unterlagen für das erste Beratungsgespräch.",
      kategorien: [
        "Persönliche Daten",
        "Einkommensnachweise",
        "Immobilieninformationen",
        "Finanzierungsziele",
      ],
    },
    {
      titel: "Checkliste: Unterlagen für Baufinanzierung",
      beschreibung: "Vollständige Übersicht aller benötigten Unterlagen für Ihre Baufinanzierung.",
      kategorien: [
        "Persönliche Unterlagen",
        "Einkommensnachweise",
        "Immobilienunterlagen",
        "Weitere Dokumente",
      ],
    },
    {
      titel: "Checkliste: Vor dem Notartermin",
      beschreibung: "Was Sie vor dem Notartermin beachten sollten.",
      kategorien: [
        "Unterlagen prüfen",
        "Finanzierungszusage",
        "Versicherungen",
        "Notartermin vorbereiten",
      ],
    },
    {
      titel: "Checkliste: Nach der Auszahlung",
      beschreibung: "Wichtige Schritte nach der Auszahlung des Darlehens.",
      kategorien: [
        "Grundschuld eintragen",
        "Versicherungen abschließen",
        "Tilgungsplan prüfen",
        "Dokumente aufbewahren",
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
            <Link href="/finanzierung/ablauf-unterlagen" className="text-targo-blue hover:underline">
              Ablauf & Unterlagen
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Checklisten</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Checklists
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Praktische Checklisten für Ihre Baufinanzierung. Laden Sie sich die Checklisten herunter und behalten Sie den Überblick über alle wichtigen Schritte und Unterlagen.
            </p>
          </div>
        </div>
      </section>

      {/* Checklists Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {checklisten.map((checkliste, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-targo-blue" />
                  </div>
                  <Button
                    className="bg-targo-blue hover:bg-targo-blue/90 text-white rounded-full"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <h3 className="text-xl font-bold mb-2">{checkliste.titel}</h3>
                <p className="text-gray-700 mb-4">{checkliste.beschreibung}</p>
                <div className="space-y-2">
                  {checkliste.kategorien.map((kategorie, kIdx) => (
                    <div key={kIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-targo-blue flex-shrink-0" />
                      <span>{kategorie}</span>
                    </div>
                  ))}
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
            <h2 className="text-2xl font-bold mb-6">Wie Sie die Checklisten nutzen</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Unsere Checklisten helfen Ihnen dabei, den Überblick über alle wichtigen Schritte und benötigten Unterlagen zu behalten. Laden Sie sich die entsprechenden Checklisten herunter und arbeiten Sie diese Schritt für Schritt ab.
              </p>
              <p>
                <strong>Tipp:</strong> Drucken Sie die Checklisten aus und haken Sie die erledigten Punkte ab. So behalten Sie stets den Überblick über Ihren aktuellen Stand im Finanzierungsprozess.
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
              Fragen zu den Checklisten?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Experten helfen Ihnen gerne dabei, die Checklisten richtig zu nutzen und alle Punkte abzuarbeiten.
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
