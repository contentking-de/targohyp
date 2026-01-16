"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet, ArrowLeft, Download, Share2, TrendingUp } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function BudgetrechnerPage() {
  const [monatlichesEinkommen, setMonatlichesEinkommen] = useState<string>("4000");
  const [monatlicheAusgaben, setMonatlicheAusgaben] = useState<string>("2000");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");
  const [eigenkapital, setEigenkapital] = useState<string>("60000");

  // Berechnungen
  const einkommen = parseFloat(monatlichesEinkommen) || 0;
  const ausgaben = parseFloat(monatlicheAusgaben) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;
  const ek = parseFloat(eigenkapital) || 0;

  // Verfügbares Einkommen
  const verfuegbaresEinkommen = einkommen - ausgaben;

  // Maximale monatliche Rate (35% des Nettoeinkommens als Empfehlung)
  const maxRateEmpfohlen = einkommen * 0.35;
  const maxRateMaximal = verfuegbaresEinkommen * 0.9; // 90% des verfügbaren Einkommens als absolute Obergrenze

  // Maximaler Darlehensbetrag berechnen
  const monatlicherZinssatz = zins / 100 / 12;
  const monatlicheTilgung = tilgung / 100 / 12;
  const monatlicheRateProzent = monatlicherZinssatz + monatlicheTilgung;

  const maxDarlehenEmpfohlen =
    monatlicheRateProzent > 0 ? maxRateEmpfohlen / monatlicheRateProzent : 0;
  const maxDarlehenMaximal =
    monatlicheRateProzent > 0 ? maxRateMaximal / monatlicheRateProzent : 0;

  // Maximaler Kaufpreis
  const maxKaufpreisEmpfohlen = maxDarlehenEmpfohlen + ek;
  const maxKaufpreisMaximal = maxDarlehenMaximal + ek;

  // Belastungsquote bei empfohlener Rate
  const belastungsquoteEmpfohlen = einkommen > 0 ? (maxRateEmpfohlen / einkommen) * 100 : 0;
  const belastungsquoteMaximal = einkommen > 0 ? (maxRateMaximal / einkommen) * 100 : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full">
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Rechner", url: "/rechner" },
        { name: "Budgetrechner", url: "/rechner/budgetrechner" }
      ]} />
      {/* Header */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/rechner" className="text-targo-blue hover:underline">
              Rechner
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Budgetrechner</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Budgetrechner</h1>
            </div>
            <p className="text-lg text-gray-700">
              Berechnen Sie, was Sie sich leisten können - finden Sie heraus, welcher Kaufpreis und Darlehensbetrag zu Ihrem Budget passt.
            </p>
          </div>
        </div>
      </section>

      {/* Rechner */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Eingabeformular */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-6">Ihre Finanzsituation</h2>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="einkommen"
                    className="block text-sm font-semibold mb-2"
                  >
                    Monatliches Nettoeinkommen (€)
                  </label>
                  <Input
                    id="einkommen"
                    type="number"
                    value={monatlichesEinkommen}
                    onChange={(e) => setMonatlichesEinkommen(e.target.value)}
                    placeholder="4.000"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ihr verfügbares Nettoeinkommen pro Monat
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="ausgaben"
                    className="block text-sm font-semibold mb-2"
                  >
                    Monatliche Ausgaben (€)
                  </label>
                  <Input
                    id="ausgaben"
                    type="number"
                    value={monatlicheAusgaben}
                    onChange={(e) => setMonatlicheAusgaben(e.target.value)}
                    placeholder="2.000"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ihre regelmäßigen monatlichen Ausgaben
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="eigenkapital"
                    className="block text-sm font-semibold mb-2"
                  >
                    Verfügbares Eigenkapital (€)
                  </label>
                  <Input
                    id="eigenkapital"
                    type="number"
                    value={eigenkapital}
                    onChange={(e) => setEigenkapital(e.target.value)}
                    placeholder="60.000"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ihr verfügbares Eigenkapital
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Finanzierungsdaten
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="zinssatz"
                        className="block text-sm font-semibold mb-2"
                      >
                        Sollzinssatz (% p.a.)
                      </label>
                      <Input
                        id="zinssatz"
                        type="number"
                        step="0.01"
                        value={zinssatz}
                        onChange={(e) => setZinssatz(e.target.value)}
                        placeholder="3.5"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="laufzeit"
                        className="block text-sm font-semibold mb-2"
                      >
                        Laufzeit (Jahre)
                      </label>
                      <Input
                        id="laufzeit"
                        type="number"
                        value={laufzeit}
                        onChange={(e) => setLaufzeit(e.target.value)}
                        placeholder="30"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="tilgung"
                        className="block text-sm font-semibold mb-2"
                      >
                        Anfängliche Tilgung (% p.a.)
                      </label>
                      <Input
                        id="tilgung"
                        type="number"
                        step="0.1"
                        value={anfangsTilgung}
                        onChange={(e) => setAnfangsTilgung(e.target.value)}
                        placeholder="2.0"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ergebnisse */}
            <div className="space-y-6">
              {/* Empfohlener Kaufpreis */}
              <div className="bg-white border-4 border-green-500 rounded-lg p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Empfohlener Rahmen</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Max. Kaufpreis:</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(maxKaufpreisEmpfohlen)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Max. Darlehensbetrag:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(maxDarlehenEmpfohlen)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Monatliche Rate:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(maxRateEmpfohlen)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Belastungsquote:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {belastungsquoteEmpfohlen.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  ✓ Empfohlene Belastungsquote von max. 35% des Nettoeinkommens
                </p>
              </div>

              {/* Maximaler Rahmen */}
              <div className="bg-white border-4 border-orange-500 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Maximaler Rahmen
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max. Kaufpreis:</span>
                    <span className="font-semibold">
                      {formatCurrency(maxKaufpreisMaximal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max. Darlehensbetrag:</span>
                    <span className="font-semibold">
                      {formatCurrency(maxDarlehenMaximal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monatliche Rate:</span>
                    <span className="font-semibold">
                      {formatCurrency(maxRateMaximal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Belastungsquote:</span>
                    <span className="font-semibold text-orange-600">
                      {belastungsquoteMaximal.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <p className="text-xs text-orange-600 mt-3">
                  ⚠️ Sehr hohe Belastung - nur bei sehr stabiler finanzieller Situation empfohlen
                </p>
              </div>

              {/* Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Finanzübersicht</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monatliches Einkommen:</span>
                    <span className="font-semibold">
                      {formatCurrency(einkommen)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monatliche Ausgaben:</span>
                    <span className="font-semibold">
                      {formatCurrency(ausgaben)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Verfügbares Einkommen:
                    </span>
                    <span className="font-semibold">
                      {formatCurrency(verfuegbaresEinkommen)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Eigenkapital:</span>
                    <span className="font-semibold">
                      {formatCurrency(ek)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Aktionen */}
              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-[#bb133e] hover:bg-[#a01135] text-white"
                  onClick={() => window.print()}
                >
                  <Download className="w-4 h-4 mr-2" />
                  PDF exportieren
                </Button>
                <Button className="flex-1 bg-[#bb133e] hover:bg-[#a01135] text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Teilen
                </Button>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-targo-blue">
              Wichtige Hinweise
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Eine Belastungsquote von maximal 35% des Nettoeinkommens wird empfohlen.
              </li>
              <li>
                • Die Berechnung berücksichtigt keine Kaufnebenkosten (ca. 10-15% des Kaufpreises).
              </li>
              <li>
                • Planen Sie einen Puffer für unerwartete Ausgaben und Lebenshaltungskosten ein.
              </li>
              <li>
                • Die Berechnung dient der ersten Orientierung und ersetzt keine individuelle Beratung.
              </li>
              <li>
                • Für eine detaillierte Beratung kontaktieren Sie bitte unsere Experten.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
