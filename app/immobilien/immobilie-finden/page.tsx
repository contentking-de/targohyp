"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, FileText, Calculator, MapPin, TrendingUp } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function ImmobilieFindenPage() {
  const tools = [
    {
      icon: Search,
      title: "Immobiliensuche",
      description: "Durchsuchen Sie unsere Datenbank nach passenden Immobilien in Ihrer Wunschregion.",
      link: "#",
    },
    {
      icon: Calculator,
      title: "Finanzierungsrechner",
      description: "Berechnen Sie Ihre monatliche Rate und finden Sie die passende Finanzierung.",
      link: "/rechner",
    },
    {
      icon: FileText,
      title: "Immobilien-Ratgeber",
      description: "Wertvolle Tipps und Checklisten für die Immobiliensuche.",
      link: "/ratgeber",
    },
    {
      icon: MapPin,
      title: "Standortanalyse",
      description: "Erfahren Sie mehr über die Lage und den Wert von Immobilien in verschiedenen Regionen.",
      link: "/standorte",
    },
    {
      icon: TrendingUp,
      title: "Marktanalyse",
      description: "Aktuelle Marktdaten und Preisentwicklungen für Ihre Region.",
      link: "/vergleiche/zinsentwicklung",
    },
  ];

  const guides = [
    {
      title: "Die perfekte Immobilie finden",
      description: "Erfahren Sie, worauf Sie bei der Suche nach Ihrer Traumimmobilie achten sollten.",
    },
    {
      title: "Finanzierung vorbereiten",
      description: "So bereiten Sie sich optimal auf die Immobilienfinanzierung vor.",
    },
    {
      title: "Besichtigungstipps",
      description: "Checkliste für die Immobilienbesichtigung – nichts übersehen.",
    },
    {
      title: "Kaufvertrag prüfen",
      description: "Wichtige Punkte, die Sie vor dem Unterschreiben beachten sollten.",
    },
  ];

  return (
    <div className="w-full">
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Immobilien", url: "/immobilien" },
        { name: "Immobilie finden", url: "/immobilien/immobilie-finden" }
      ]} />

      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/immobilien" className="text-targo-blue hover:underline">
              Immobilien
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Immobilie finden</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[rgb(0,47,95)]">
                Immobilie finden
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mit unseren Tools und Guides finden Sie die perfekte Immobilie für Ihre Bedürfnisse. 
              Von der Suche bis zur Finanzierung – wir unterstützen Sie bei jedem Schritt.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            Hilfreiche Tools für die Immobiliensuche
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={idx}
                  href={tool.link}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-targo-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-targo-blue transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-targo-blue font-semibold">
                    Tool öffnen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            Ratgeber & Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guides.map((guide, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-[rgb(0,47,95)]">
                  {guide.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {guide.description}
                </p>
                <Link
                  href="/ratgeber"
                  className="text-targo-blue font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">So finden Sie Ihre Traumimmobilie</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Die Suche nach der perfekten Immobilie kann eine Herausforderung sein. Mit unseren 
                Tools und Ratgebern unterstützen wir Sie dabei, die richtige Immobilie zu finden, 
                die zu Ihren Bedürfnissen und Ihrem Budget passt.
              </p>
              <p>
                <strong>Wichtig:</strong> Bevor Sie mit der Suche beginnen, sollten Sie sich über 
                Ihre finanziellen Möglichkeiten im Klaren sein. Nutzen Sie unsere Rechner, um 
                Ihre monatliche Rate zu berechnen und zu prüfen, welche Immobilie Sie sich leisten können.
              </p>
              <p>
                Unsere Experten stehen Ihnen gerne zur Verfügung, um Sie bei der Immobiliensuche 
                zu unterstützen und gemeinsam die passende Finanzierung zu finden.
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
              Individuelle Beratung gewünscht?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Unsere Immobilienexperten helfen Ihnen bei der Suche nach Ihrer Traumimmobilie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/termin-vereinbaren" className="flex items-center justify-center whitespace-nowrap">
                  Termin vereinbaren
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/rechner" className="flex items-center justify-center whitespace-nowrap">
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
