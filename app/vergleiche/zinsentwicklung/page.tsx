"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Info } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartDataPoint {
  datum: string;
  zins10?: number;
  zins15?: number;
  zins20?: number;
}

interface TableRow {
  zinsbindung: string;
  beleihung70: string;
  beleihung80: string;
  beleihung90: string;
}

export default function ZinsentwicklungPage() {
  const [zinsdaten, setZinsdaten] = useState<ChartDataPoint[]>([]);
  const [aktuelleZinsen, setAktuelleZinsen] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [latestDate, setLatestDate] = useState<string | null>(null);

  useEffect(() => {
    async function fetchZinsdaten() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/zinsen?days=730"); // Letzte 2 Jahre
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP ${response.status}: Fehler beim Laden der Zinsdaten`);
        }
        
        const data = await response.json();
        
        // Prüfe, ob die Antwort einen Fehler enthält
        if (data.error) {
          throw new Error(data.error);
        }
        
        if (data.success) {
          setZinsdaten(data.chartData || []);
          setAktuelleZinsen(data.tableData || []);
          setLatestDate(data.latestDate);
          
          // Wenn keine Daten vorhanden sind, verwende Fallback-Daten
          if (data.chartData.length === 0) {
            setZinsdaten([
              { datum: "Jan 2023", zins10: 3.2, zins15: 3.4, zins20: 3.6 },
              { datum: "Apr 2023", zins10: 3.5, zins15: 3.7, zins20: 3.9 },
              { datum: "Jul 2023", zins10: 3.8, zins15: 4.0, zins20: 4.2 },
              { datum: "Okt 2023", zins10: 3.6, zins15: 3.8, zins20: 4.0 },
              { datum: "Jan 2024", zins10: 3.4, zins15: 3.6, zins20: 3.8 },
              { datum: "Apr 2024", zins10: 3.3, zins15: 3.5, zins20: 3.7 },
              { datum: "Jul 2024", zins10: 3.5, zins15: 3.7, zins20: 3.9 },
              { datum: "Okt 2024", zins10: 3.7, zins15: 3.9, zins20: 4.1 },
              { datum: "Jan 2025", zins10: 3.8, zins15: 4.0, zins20: 4.2 },
              { datum: "Apr 2025", zins10: 3.9, zins15: 4.1, zins20: 4.3 },
              { datum: "Jul 2025", zins10: 3.85, zins15: 4.05, zins20: 4.25 },
              { datum: "Okt 2025", zins10: 3.9, zins15: 4.1, zins20: 4.3 },
              { datum: "Jan 2026", zins10: 3.95, zins15: 4.15, zins20: 4.35 },
            ]);
          }
          
          if (data.tableData.length === 0) {
            setAktuelleZinsen([
              {
                zinsbindung: "10 Jahre",
                beleihung70: "3,56",
                beleihung80: "3,67",
                beleihung90: "4,00",
              },
              {
                zinsbindung: "15 Jahre",
                beleihung70: "3,85",
                beleihung80: "3,92",
                beleihung90: "4,20",
              },
              {
                zinsbindung: "20 Jahre",
                beleihung70: "3,97",
                beleihung80: "4,07",
                beleihung90: "4,30",
              },
            ]);
          }
        }
      } catch (err) {
        console.error("Fehler beim Laden der Zinsdaten:", err);
        const errorMessage = err instanceof Error ? err.message : "Fehler beim Laden der Zinsdaten. Bitte versuchen Sie es später erneut.";
        setError(errorMessage);
        
        // Fallback-Daten bei Fehler
        setZinsdaten([
          { datum: "Jan 2023", zins10: 3.2, zins15: 3.4, zins20: 3.6 },
          { datum: "Apr 2023", zins10: 3.5, zins15: 3.7, zins20: 3.9 },
          { datum: "Jul 2023", zins10: 3.8, zins15: 4.0, zins20: 4.2 },
          { datum: "Okt 2023", zins10: 3.6, zins15: 3.8, zins20: 4.0 },
          { datum: "Jan 2024", zins10: 3.4, zins15: 3.6, zins20: 3.8 },
          { datum: "Apr 2024", zins10: 3.3, zins15: 3.5, zins20: 3.7 },
          { datum: "Jul 2024", zins10: 3.5, zins15: 3.7, zins20: 3.9 },
          { datum: "Okt 2024", zins10: 3.7, zins15: 3.9, zins20: 4.1 },
          { datum: "Jan 2025", zins10: 3.8, zins15: 4.0, zins20: 4.2 },
          { datum: "Apr 2025", zins10: 3.9, zins15: 4.1, zins20: 4.3 },
          { datum: "Jul 2025", zins10: 3.85, zins15: 4.05, zins20: 4.25 },
          { datum: "Okt 2025", zins10: 3.9, zins15: 4.1, zins20: 4.3 },
          { datum: "Jan 2026", zins10: 3.95, zins15: 4.15, zins20: 4.35 },
        ]);
        setAktuelleZinsen([
          {
            zinsbindung: "10 Jahre",
            beleihung70: "3,56",
            beleihung80: "3,67",
            beleihung90: "4,00",
          },
          {
            zinsbindung: "15 Jahre",
            beleihung70: "3,85",
            beleihung80: "3,92",
            beleihung90: "4,20",
          },
          {
            zinsbindung: "20 Jahre",
            beleihung70: "3,97",
            beleihung80: "4,07",
            beleihung90: "4,30",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchZinsdaten();
  }, []);

  // Custom Tooltip für das Chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <p className="font-semibold mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Vergleiche", url: "/vergleiche" },
        { name: "Zinsentwicklung", url: "/vergleiche/zinsentwicklung" }
      ]} />
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="mb-6 text-sm">
              <Link href="/vergleiche" className="text-targo-blue hover:underline">
                Vergleiche
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Zinsentwicklung</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Bauzinsen aktuell: Zinsentwicklung bei Immobiliendarlehen
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Verfolgen Sie die Entwicklung der Bauzinsen über die Zeit und informieren Sie sich über aktuelle Zinssätze für verschiedene Zinsbindungen und Beleihungsausläufe.
            </p>
          </div>
        </div>
      </section>

      {/* Zinsentwicklungs-Chart */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Zinsentwicklung im Zeitverlauf</h2>
              <p className="text-gray-600 text-sm">
                Entwicklung der Bauzinsen für verschiedene Zinsbindungsdauern (Effektiver Jahreszins)
              </p>
            </div>
            
            <div className="w-full h-[400px] lg:h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={zinsdaten}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="datum"
                    stroke="#6b7280"
                    style={{ fontSize: "12px" }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis
                    stroke="#6b7280"
                    style={{ fontSize: "12px" }}
                    label={{ value: "Zinssatz (%)", angle: -90, position: "insideLeft" }}
                    domain={[3.0, 4.5]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ paddingTop: "20px" }}
                    iconType="line"
                  />
                  <Line
                    type="monotone"
                    dataKey="zins10"
                    name="10 Jahre Zinsbindung"
                    stroke="#bb133e"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="zins15"
                    name="15 Jahre Zinsbindung"
                    stroke="#003366"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="zins20"
                    name="20 Jahre Zinsbindung"
                    stroke="#0066cc"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Hinweis zur Zinsentwicklung</p>
                <p>
                  Die dargestellten Zinssätze sind beispielhaft und basieren auf den Konditionsangeboten verschiedener Darlehensgeber. 
                  Die tatsächlichen Zinssätze können je nach individueller Situation (Bonität, Eigenkapital, Beleihungsauslauf) variieren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuelle Zinssätze Tabelle */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Aktuelle Zinssätze</h2>
            <p className="text-gray-600">
              Effektiver Jahreszins nach Zinsbindung und Beleihungsauslauf
              {latestDate && (
                <> (Stand: {new Date(latestDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })})</>
              )}
              {!latestDate && <> (Stand: Januar 2026)</>}
            </p>
            {loading && (
              <p className="text-sm text-gray-500 mt-2">Lade Zinsdaten...</p>
            )}
            {error && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 font-semibold mb-2">Hinweis:</p>
                <p className="text-sm text-yellow-800 mb-2">{error}</p>
                {error.includes("Migration") || error.includes("Tabelle") ? (
                  <div className="mt-3 text-sm text-yellow-900">
                    <p className="font-semibold mb-1">Nächste Schritte:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Führen Sie die Migration aus: <code className="bg-yellow-100 px-1 rounded">npm run db:migrate</code></li>
                      <li>Starten Sie den Scraper: <code className="bg-yellow-100 px-1 rounded">POST /api/zinsen/scrape</code></li>
                    </ol>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Zinsbindung
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Beleihungsauslauf &lt;70%
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Beleihungsauslauf =80%
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Beleihungsauslauf &gt;90%
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {aktuelleZinsen.map((zins, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold">{zins.zinsbindung}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-bold text-targo-blue">
                          {typeof zins.beleihung70 === 'string' && zins.beleihung70.includes('%') 
                            ? zins.beleihung70 
                            : `${zins.beleihung70} %`}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-bold text-targo-blue">
                          {typeof zins.beleihung80 === 'string' && zins.beleihung80.includes('%') 
                            ? zins.beleihung80 
                            : `${zins.beleihung80} %`}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-bold text-targo-blue">
                          {typeof zins.beleihung90 === 'string' && zins.beleihung90.includes('%') 
                            ? zins.beleihung90 
                            : `${zins.beleihung90} %`}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Hinweis:</strong> Die Zinssätze basieren auf den Konditionsangeboten verschiedener Darlehensgeber. 
              Keine Haftung für die Darstellung. Die aktuellen Zinssätze für Ihre individuelle Baufinanzierung erfahren Sie in der Beratung.
            </p>
          </div>
        </div>
      </section>

      {/* Zinsprognose */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Zinsprognose</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-targo-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Aktuelle Einschätzung</h3>
                  <p className="text-gray-700 mb-4">
                    Die Bauzinsen bewegen sich aktuell nahe der 4-Prozent-Marke. Für die nächsten sechs Monate 
                    halten Experten gleichbleibende Zinsen für möglich. Geopolitische Unsicherheiten und die 
                    Entwicklung der Staatsverschuldung können die Kapitalmarktzinsen beeinflussen.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-targo-blue p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Wichtig:</strong> Zinsprognosen sind keine Garantie für die zukünftige Entwicklung. 
                      Die tatsächliche Zinsentwicklung hängt von vielen wirtschaftlichen, geopolitischen und 
                      geldpolitischen Faktoren ab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#003366] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Persönliches Zinsangebot erhalten
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Lassen Sie sich von unseren Experten ein individuelles Zinsangebot für Ihre Baufinanzierung erstellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/finanzierungsanfrage" className="flex items-center whitespace-nowrap">
                  Zinsangebot anfragen
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
