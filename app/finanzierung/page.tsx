"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function FinanzierungPage() {
  // Zinsdaten für das Chart (10 Jahre Sollzinsbindung)
  const zinsdaten10Jahre = [
    { datum: "Apr 25", zins: 3.50 },
    { datum: "Jul 25", zins: 3.35 },
    { datum: "Okt 25", zins: 3.70 },
    { datum: "Jan 26", zins: 3.90 },
  ];

  // Custom Tooltip für das Chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="font-semibold mb-1">{label}</p>
          <p className="text-sm text-targo-blue">
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };
  // Beispiel-Produkte (später aus Datenbank)
  const produkte = [
    {
      id: 1,
      name: "Baufinanzierung Classic",
      zins: "3,45%",
      laufzeit: "10-30 Jahre",
      tilgung: "ab 1%",
      beschreibung: "Die klassische Baufinanzierung für Ihr Eigenheim mit festem Zinssatz.",
      vorteile: ["Fester Zinssatz", "Flexible Laufzeit", "Sondertilgung möglich"],
    },
    {
      id: 2,
      name: "Baufinanzierung Flex",
      zins: "3,15%",
      laufzeit: "5-15 Jahre",
      tilgung: "ab 2%",
      beschreibung: "Flexible Baufinanzierung mit variablen Zinssätzen und kurzer Laufzeit.",
      vorteile: ["Niedrige Zinsen", "Kurze Laufzeit", "Hohe Flexibilität"],
    },
    {
      id: 3,
      name: "Baufinanzierung Premium",
      zins: "2,95%",
      laufzeit: "15-35 Jahre",
      tilgung: "ab 1%",
      beschreibung: "Premium-Baufinanzierung mit besonders günstigen Konditionen für hohe Darlehenssummen.",
      vorteile: ["Top-Zinssatz", "Lange Laufzeit", "Individuelle Beratung"],
    },
  ];

  // FinancialProduct Schema-Markup für alle Produkte
  const financialProductsSchema = produkte.map((produkt) => ({
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": produkt.name,
    "description": produkt.beschreibung,
    "interestRate": parseFloat(produkt.zins.replace(",", ".")),
    "provider": {
      "@type": "Organization",
      "name": "TARGOBANK AG",
      "url": "https://www.targobank.de"
    },
    "offers": {
      "@type": "Offer",
      "description": `${produkt.name}: ${produkt.beschreibung}`,
      "availability": "https://schema.org/InStock"
    },
    "category": "Baufinanzierung",
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    }
  }));

  return (
    <div className="w-full">
      {/* FinancialProduct Schema-Markup */}
      {financialProductsSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Unsere Baufinanzierungsprodukte
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Finden Sie die passende Baufinanzierung für Ihr Vorhaben. Vergleichen Sie unsere Produkte und finden Sie die besten Konditionen.
            </p>
          </div>
        </div>
      </section>

      {/* Zinsentwicklung Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            Baufinanzierung aktuell: Zinsen und Marktsituation
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Linke Spalte: Text */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
                Zinseinschätzung: Wie hoch sind die Bauzinsen?
              </h3>
              <div className="text-gray-700 leading-relaxed mb-6 text-lg space-y-4">
                <p>
                  Nach dem deutlichen Zinsanstieg zum Ende des Jahres 2025 liegen die Bauzinsen zu Beginn des neuen Jahres nahe der 4-Prozent-Marke. Für die kommenden sechs Monate rechnen 60 % der im Interhyp-Bankenpanel befragten Experten mit einem stabilen Zinsniveau, während 40 % einen weiteren Anstieg für möglich halten. Die anhaltenden geopolitischen Unsicherheiten sorgen weiterhin für Zurückhaltung an den Finanzmärkten und dürften auch im Jahr 2026 ein prägender Einflussfaktor bleiben.
                </p>
                <p>
                  Vor diesem Hintergrund ist die weitere Zinsentwicklung nur schwer vorhersehbar. Kreditinteressenten sollten die Marktentwicklung daher aufmerksam beobachten und eine vorausschauende Finanzierungsplanung in Betracht ziehen. Eine frühzeitige Beratung kann helfen, mögliche Risiken besser einzuschätzen.
                </p>
                <p className="text-sm text-gray-600">
                  (Stand: 14.01.2026)
                </p>
              </div>
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/vergleiche/zinsentwicklung" className="flex items-center whitespace-nowrap">
                  Mehr über Bauzinsen
                  <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
            </div>

            {/* Rechte Spalte: Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 shadow-sm">
              <div className="w-full h-[300px] lg:h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={zinsdaten10Jahre}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="datum"
                      stroke="#6b7280"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis
                      stroke="#6b7280"
                      style={{ fontSize: "12px" }}
                      domain={[3.3, 3.95]}
                      tickFormatter={(value) => `${value.toFixed(2)}%`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="zins"
                      stroke="#14b8a6"
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#14b8a6" }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Sollzinsbindung: 10 Jahre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produktübersicht */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          {/* Filter & Sortierung */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Button className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full">
                Alle Produkte
              </Button>
              <Button className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full">
                Feste Zinsen
              </Button>
              <Button className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full">
                Variable Zinsen
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              {produkte.length} Produkte verfügbar
            </div>
          </div>

          {/* Produktliste */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {produkte.map((produkt) => (
              <div
                key={produkt.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{produkt.name}</h3>
                    <div className="flex items-center gap-2 text-targo-blue">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-2xl font-bold">{produkt.zins}</span>
                      <span className="text-sm text-gray-600">p.a.</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{produkt.beschreibung}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>Laufzeit: {produkt.laufzeit}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>Tilgung: {produkt.tilgung}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Vorteile:</h4>
                  <ul className="space-y-1">
                    {produkt.vorteile.map((vorteil, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-targo-blue flex-shrink-0" />
                        {vorteil}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                    asChild
                  >
                    <Link href={`/finanzierung/${produkt.id}`}>
                      Details ansehen
                    </Link>
                  </Button>
                  <Button
                    className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                    asChild
                  >
                    <Link href="/vergleiche">
                      Vergleichen
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
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
              Unsere Experten helfen Ihnen dabei, die passende Baufinanzierung zu finden.
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

