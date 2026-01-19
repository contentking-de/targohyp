import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, FileText, CheckCircle2, Home, Clock, Users } from "lucide-react";
import { createMetadata } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata = createMetadata({
  title: "TargoHome - Sicherer Bereich für Ihre Finanzierungsunterlagen | Targohyp",
  description: "TargoHome ist Ihr persönlicher, sicherer Bereich zur Verwaltung Ihrer Finanzierungsunterlagen. Laden Sie Dokumente hoch, bereiten Sie sich auf Beratungsgespräche vor und behalten Sie den Überblick über Ihre Baufinanzierung.",
}, { path: "/targohome" });

export default function TargoHomePage() {
  const features = [
    {
      icon: Shield,
      title: "Sicherer Dokumentenupload",
      description: "Laden Sie Ihre Unterlagen sicher und verschlüsselt hoch. Ihre Daten sind bei uns in besten Händen.",
    },
    {
      icon: FileText,
      title: "Dokumentenverwaltung",
      description: "Behalten Sie alle wichtigen Unterlagen für Ihre Baufinanzierung an einem zentralen Ort.",
    },
    {
      icon: Clock,
      title: "Vorbereitung auf Beratung",
      description: "Bereiten Sie sich optimal auf Ihr Beratungsgespräch vor und sparen Sie Zeit.",
    },
    {
      icon: Users,
      title: "Direkter Kontakt",
      description: "Ihre Berater haben Zugriff auf Ihre Unterlagen und können Sie gezielt unterstützen.",
    },
  ];

  const benefits = [
    "Kostenloser Zugang zu Ihrem persönlichen Bereich",
    "Sichere Speicherung Ihrer Dokumente",
    "Einfache Vorbereitung auf Beratungsgespräche",
    "Schnellere Bearbeitung Ihrer Finanzierungsanfrage",
    "Übersichtliche Verwaltung aller Unterlagen",
    "Direkter Austausch mit Ihren Beratern",
  ];

  return (
    <div className="w-full">
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "TargoHome", url: "/targohome" }
      ]} />
      
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-targo-blue hover:underline">
                Startseite
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">TargoHome</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                TargoHome
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ihr persönlicher, sicherer Bereich zur Verwaltung Ihrer Finanzierungsunterlagen. Bereiten Sie sich optimal auf Ihr Beratungsgespräch vor und behalten Sie den Überblick über alle wichtigen Dokumente.
            </p>
            <Button
              className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/auth/signin" className="flex items-center whitespace-nowrap">
                Jetzt zu TargoHome
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Was ist TargoHome? */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Was ist TargoHome?</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                TargoHome ist Ihr persönlicher, geschützter Bereich, in dem Sie alle Unterlagen für Ihre Baufinanzierung sicher verwalten können. 
                Egal ob Sie gerade eine Finanzierung planen oder bereits eine Beratung vereinbart haben – mit TargoHome sind Sie bestens vorbereitet.
              </p>
              <p>
                Laden Sie Ihre Dokumente hoch, organisieren Sie Ihre Unterlagen und bereiten Sie sich optimal auf Ihr Beratungsgespräch vor. 
                Ihre Berater haben Zugriff auf die von Ihnen hochgeladenen Dokumente und können Sie so noch gezielter unterstützen.
              </p>
              <p>
                <strong>Ihre Vorteile:</strong> Schnellere Bearbeitung Ihrer Anfrage, weniger Papierkram und eine reibungslose Vorbereitung auf Ihr Beratungsgespräch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Das bietet Ihnen TargoHome</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-targo-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Ihre Vorteile im Überblick</h2>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sicherheit */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Lock className="w-8 h-8 text-targo-blue" />
              </div>
              <h2 className="text-2xl font-bold">Sicherheit und Datenschutz</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ihre Sicherheit und der Schutz Ihrer Daten haben für uns höchste Priorität. Alle Dokumente werden verschlüsselt gespeichert 
                und sind nur für Sie und Ihre autorisierten Berater zugänglich.
              </p>
              <p>
                Wir halten uns an die strengen Datenschutzbestimmungen der DSGVO und setzen modernste Sicherheitstechnologien ein, 
                um Ihre persönlichen Daten zu schützen.
              </p>
              <p>
                <Link href="/datenschutz" className="text-targo-blue hover:underline font-semibold">
                  Mehr über unseren Datenschutz erfahren
                </Link>
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
              Bereit für TargoHome?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Erstellen Sie jetzt kostenlos Ihren TargoHome-Account und profitieren Sie von allen Vorteilen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/auth/signin" className="flex items-center whitespace-nowrap">
                  Jetzt registrieren
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/finanzierungsanfrage" className="flex items-center whitespace-nowrap">
                  Finanzierungsanfrage stellen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
