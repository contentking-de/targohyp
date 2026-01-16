"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: "Allgemeine Fragen",
    question: "Was ist eine Baufinanzierung?",
    answer: "Eine Baufinanzierung ist ein Darlehen zur Finanzierung des Kaufs, Baus oder der Modernisierung einer Immobilie. Sie wird in der Regel über einen langen Zeitraum (meist 10-35 Jahre) zurückgezahlt und ist durch die Immobilie selbst abgesichert.",
  },
  {
    category: "Allgemeine Fragen",
    question: "Wie viel Eigenkapital benötige ich für eine Baufinanzierung?",
    answer: "Idealerweise sollten Sie 20-30% des Kaufpreises als Eigenkapital einbringen. Dies verbessert Ihre Konditionen erheblich. Mit weniger Eigenkapital sind höhere Zinsen und zusätzliche Absicherungen möglich. In einigen Fällen ist auch eine Finanzierung ohne Eigenkapital möglich, allerdings zu deutlich höheren Zinsen.",
  },
  {
    category: "Zinsen & Konditionen",
    question: "Wie hoch sind die aktuellen Bauzinsen?",
    answer: "Die Bauzinsen variieren je nach Laufzeit, Bonität und Marktlage. Aktuell liegen die Zinsen für eine 10-jährige Zinsbindung bei etwa 3,5-4,0% p.a. Die genauen Konditionen hängen von Ihrer individuellen Situation ab. Wir empfehlen eine persönliche Beratung für ein maßgeschneidertes Angebot.",
  },
  {
    category: "Zinsen & Konditionen",
    question: "Was ist der Unterschied zwischen festem und variablem Zins?",
    answer: "Bei einem festen Zins bleibt der Zinssatz für die vereinbarte Zinsbindungsdauer (z.B. 5, 10 oder 15 Jahre) konstant. Bei einem variablen Zins kann sich der Zinssatz während der Laufzeit ändern. Feste Zinsen bieten Planungssicherheit, variable Zinsen können bei sinkenden Zinsen günstiger sein, bergen aber das Risiko steigender Zinsen.",
  },
  {
    category: "Zinsen & Konditionen",
    question: "Was ist eine Zinsbindung?",
    answer: "Die Zinsbindung ist der Zeitraum, für den der vereinbarte Zinssatz festgeschrieben ist. Nach Ablauf können Sie die Finanzierung zu neuen Konditionen fortsetzen oder umschulden. Typische Zinsbindungen sind 5, 10, 15 oder 20 Jahre.",
  },
  {
    category: "Tilgung & Rückzahlung",
    question: "Wie hoch sollte die Tilgung sein?",
    answer: "Die empfohlene Tilgung liegt bei 2-3% pro Jahr. Bei einer höheren Tilgung zahlen Sie das Darlehen schneller zurück und sparen Zinsen. Allerdings steigt auch die monatliche Belastung. Die optimale Tilgung hängt von Ihrer finanziellen Situation und Ihren Zielen ab.",
  },
  {
    category: "Tilgung & Rückzahlung",
    question: "Was sind Sondertilgungen?",
    answer: "Sondertilgungen ermöglichen es Ihnen, zusätzlich zur regulären Rate zu tilgen und so Zinsen zu sparen. Meist sind 5-10% der Darlehenssumme pro Jahr möglich. Dies kann die Gesamtlaufzeit erheblich verkürzen und die Gesamtzinskosten reduzieren.",
  },
  {
    category: "Tilgung & Rückzahlung",
    question: "Kann ich mein Darlehen vorzeitig zurückzahlen?",
    answer: "Ja, in der Regel können Sie Ihr Darlehen vorzeitig zurückzahlen. Allerdings kann eine Vorfälligkeitsentschädigung anfallen, wenn Sie vor Ablauf der Zinsbindung kündigen. Diese beträgt meist 0,5-1% der Restschuld. Prüfen Sie Ihren Vertrag genau oder sprechen Sie mit uns über die Möglichkeiten.",
  },
  {
    category: "Bonität & Voraussetzungen",
    question: "Welche Voraussetzungen muss ich erfüllen?",
    answer: "Für eine Baufinanzierung benötigen Sie: ein regelmäßiges Einkommen, eine gute Bonität (Schufa-Auskunft), Eigenkapital (idealerweise 20-30%), eine zu finanzierende Immobilie und alle notwendigen Unterlagen (Einkommensnachweise, Kaufvertrag, etc.).",
  },
  {
    category: "Bonität & Voraussetzungen",
    question: "Wie wichtig ist die Schufa-Auskunft?",
    answer: "Die Schufa-Auskunft ist sehr wichtig für die Bonitätsprüfung. Eine gute Bonität verbessert Ihre Konditionen erheblich. Negative Einträge können die Finanzierung erschweren oder teurer machen. Wir empfehlen, vor der Finanzierungsanfrage eine kostenlose Schufa-Auskunft einzuholen.",
  },
  {
    category: "Bonität & Voraussetzungen",
    question: "Kann ich auch als Selbstständiger eine Baufinanzierung erhalten?",
    answer: "Ja, auch Selbstständige können eine Baufinanzierung erhalten. Allerdings sind die Anforderungen oft höher. Sie benötigen meist 2-3 Jahre Bilanzen oder Steuerbescheide, eine positive Geschäftsentwicklung und oft mehr Eigenkapital. Wir beraten Sie gerne zu den speziellen Anforderungen für Selbstständige.",
  },
  {
    category: "Kosten & Nebenkosten",
    question: "Welche Kosten fallen bei einer Baufinanzierung an?",
    answer: "Neben den Zinsen fallen verschiedene Kosten an: Bereitstellungsprovision (wenn das Darlehen nicht sofort ausgezahlt wird), Notarkosten für die Grundschuld, Grundbucheintragung, ggf. eine Restschuldversicherung und die Grunderwerbsteuer beim Kauf. Planen Sie etwa 10-15% des Kaufpreises für Nebenkosten ein.",
  },
  {
    category: "Kosten & Nebenkosten",
    question: "Was ist die Grunderwerbsteuer?",
    answer: "Die Grunderwerbsteuer ist eine Steuer, die beim Kauf einer Immobilie anfällt. Sie wird vom Käufer gezahlt und beträgt je nach Bundesland 3,5% bis 6,5% des Kaufpreises. Diese Steuer gehört zu den Kaufnebenkosten und muss zusätzlich zum Kaufpreis eingeplant werden.",
  },
  {
    category: "Anschlussfinanzierung",
    question: "Was passiert nach Ablauf der Zinsbindung?",
    answer: "Nach Ablauf der Zinsbindung haben Sie mehrere Optionen: Sie können die Finanzierung bei Ihrer bisherigen Bank zu neuen Konditionen fortsetzen, zu einer anderen Bank umschulden oder das Darlehen vollständig zurückzahlen. Wir empfehlen, sich bereits 6-12 Monate vor Ablauf um die Anschlussfinanzierung zu kümmern.",
  },
  {
    category: "Anschlussfinanzierung",
    question: "Wann lohnt sich eine Umschuldung?",
    answer: "Eine Umschuldung lohnt sich, wenn die Zinsen deutlich gesunken sind, Ihre Bonität sich verbessert hat oder Sie bessere Konditionen erhalten können. Wichtig ist, dass die Ersparnis durch niedrigere Zinsen die Kosten der Umschuldung (Vorfälligkeitsentschädigung, Notarkosten, etc.) übersteigt.",
  },
  {
    category: "Fördermittel",
    question: "Welche Fördermittel gibt es?",
    answer: "Es gibt verschiedene Fördermittel für Baufinanzierungen: KfW-Förderprogramme (z.B. für energieeffizientes Bauen), BAFA-Förderung (für energetische Sanierung), regionale Förderprogramme und steuerliche Vorteile. Wir beraten Sie gerne zu den für Sie passenden Fördermitteln.",
  },
  {
    category: "Fördermittel",
    question: "Kann ich Fördermittel mit einer normalen Finanzierung kombinieren?",
    answer: "Ja, Fördermittel können in der Regel mit einer normalen Baufinanzierung kombiniert werden. Oft werden Fördermittel als zweites Darlehen zusätzlich zur Hauptfinanzierung gewährt. Wir helfen Ihnen dabei, die optimale Kombination aus Eigenkapital, Hauptfinanzierung und Fördermitteln zu finden.",
  },
];

const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

export default function FAQsFinanzierungPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");

  useEffect(() => {
    document.title = "FAQs zur Finanzierung - Häufige Fragen & Antworten | Targohyp";
  }, []);

  const filteredFAQs =
    selectedCategory === "Alle"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                FAQs zur Finanzierung
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hier finden Sie Antworten auf die häufigsten Fragen zur
              Baufinanzierung. Von grundlegenden Fragen zu Zinsen und Tilgung
              bis hin zu spezifischen Themen wie Fördermitteln und
              Anschlussfinanzierung – wir haben die wichtigsten Informationen
              für Sie zusammengestellt.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full py-8 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <Button
              className={`rounded-full ${
                selectedCategory === "Alle"
                  ? "bg-[#bb133e] hover:bg-[#a01135] text-white"
                  : "bg-white border border-gray-600 text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedCategory("Alle")}
            >
              Alle Kategorien
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                className={`rounded-full ${
                  selectedCategory === category
                    ? "bg-[#bb133e] hover:bg-[#a01135] text-white"
                    : "bg-white border border-gray-600 text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => {
              const globalIndex = faqs.findIndex((f) => f === faq);
              const isOpen = openIndex === globalIndex;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : globalIndex)
                    }
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-0">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Haben Sie weitere Fragen?
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Unsere Experten beraten Sie gerne persönlich zu Ihrer
              individuellen Situation und helfen Ihnen bei allen Fragen zur
              Baufinanzierung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/kontakt" className="flex items-center whitespace-nowrap">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-targo-blue text-targo-blue hover:bg-targo-blue hover:text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/termin-vereinbaren" className="flex items-center whitespace-nowrap">
                  Termin vereinbaren
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
