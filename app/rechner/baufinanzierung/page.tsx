"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, ArrowLeft, Download, Share2 } from "lucide-react";

export default function BaufinanzierungsrechnerPage() {
  const [darlehensbetrag, setDarlehensbetrag] = useState<string>("300000");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");

  // Berechnungen
  const darlehen = parseFloat(darlehensbetrag) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;

  // Monatliche Rate berechnen
  const monatlicherZinssatz = zins / 100 / 12;
  const monatlicheTilgung = tilgung / 100 / 12;
  const monatlicheRate =
    darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0
      ? darlehen * (monatlicherZinssatz + monatlicheTilgung)
      : 0;

  // Gesamtkosten
  const gesamtZinsen = monatlicheRate * jahre * 12 - darlehen;
  const gesamtKosten = darlehen + gesamtZinsen;

  // Tilgungsplan (erste 12 Monate)
  const tilgungsplan: Array<{
    monat: number;
    rate: number;
    zinsanteil: number;
    tilgungsanteil: number;
    restschuld: number;
  }> = [];

  if (darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0) {
    let restschuld = darlehen;
    for (let i = 1; i <= Math.min(12, jahre * 12); i++) {
      const zinsanteil = restschuld * monatlicherZinssatz;
      const tilgungsanteil = monatlicheRate - zinsanteil;
      restschuld -= tilgungsanteil;
      tilgungsplan.push({
        monat: i,
        rate: monatlicheRate,
        zinsanteil,
        tilgungsanteil,
        restschuld: Math.max(0, restschuld),
      });
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/rechner"
            className="inline-flex items-center text-targo-blue hover:text-targo-blue/80 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Rechner-Übersicht
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">
                Baufinanzierungsrechner
              </h1>
            </div>
            <p className="text-lg text-gray-700">
              Berechnen Sie Ihre monatliche Rate, Gesamtkosten und Tilgungsplan
              für Ihre Baufinanzierung.
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
              <h2 className="text-2xl font-bold mb-6">Finanzierungsdaten</h2>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="darlehensbetrag"
                    className="block text-sm font-semibold mb-2"
                  >
                    Darlehensbetrag (€)
                  </label>
                  <Input
                    id="darlehensbetrag"
                    type="number"
                    value={darlehensbetrag}
                    onChange={(e) => setDarlehensbetrag(e.target.value)}
                    placeholder="300.000"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Der Betrag, den Sie finanzieren möchten
                  </p>
                </div>

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
                  <p className="text-xs text-gray-500 mt-1">
                    Der jährliche Zinssatz für Ihr Darlehen
                  </p>
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
                  <p className="text-xs text-gray-500 mt-1">
                    Die Dauer der Finanzierung in Jahren
                  </p>
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
                  <p className="text-xs text-gray-500 mt-1">
                    Die jährliche Tilgungsrate zu Beginn
                  </p>
                </div>
              </div>
            </div>

            {/* Ergebnisse */}
            <div className="space-y-6">
              {/* Zusammenfassung */}
              <div className="bg-gradient-to-br from-targo-blue to-targo-blue/90 text-white rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6">Ihre Finanzierung</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/90">Monatliche Rate</span>
                    <span className="text-3xl font-bold">
                      {formatCurrency(monatlicheRate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/90">Gesamtzinsen</span>
                    <span className="text-xl font-semibold">
                      {formatCurrency(gesamtZinsen)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Gesamtkosten</span>
                    <span className="text-xl font-semibold">
                      {formatCurrency(gesamtKosten)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Finanzierungsdetails</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darlehensbetrag:</span>
                    <span className="font-semibold">
                      {formatCurrency(darlehen)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zinssatz:</span>
                    <span className="font-semibold">{zins}% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Laufzeit:</span>
                    <span className="font-semibold">{jahre} Jahre</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Anfängliche Tilgung:</span>
                    <span className="font-semibold">{tilgung}% p.a.</span>
                  </div>
                </div>
              </div>

              {/* Aktionen */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.print()}
                >
                  <Download className="w-4 h-4 mr-2" />
                  PDF exportieren
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Teilen
                </Button>
              </div>
            </div>
          </div>

          {/* Tilgungsplan */}
          {tilgungsplan.length > 0 && (
            <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-6">Tilgungsplan (erste 12 Monate)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold">Monat</th>
                      <th className="text-right py-3 px-4 font-semibold">Rate</th>
                      <th className="text-right py-3 px-4 font-semibold">
                        Zinsanteil
                      </th>
                      <th className="text-right py-3 px-4 font-semibold">
                        Tilgungsanteil
                      </th>
                      <th className="text-right py-3 px-4 font-semibold">
                        Restschuld
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tilgungsplan.map((row) => (
                      <tr
                        key={row.monat}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">{row.monat}</td>
                        <td className="py-3 px-4 text-right">
                          {formatCurrency(row.rate)}
                        </td>
                        <td className="py-3 px-4 text-right text-gray-600">
                          {formatCurrency(row.zinsanteil)}
                        </td>
                        <td className="py-3 px-4 text-right text-green-600">
                          {formatCurrency(row.tilgungsanteil)}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {formatCurrency(row.restschuld)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-targo-blue">
              Wichtige Hinweise
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Die Berechnung erfolgt nach der Annuitätenmethode und dient
                der ersten Orientierung.
              </li>
              <li>
                • Die tatsächlichen Konditionen können abweichen und werden
                individuell vereinbart.
              </li>
              <li>
                • Sondertilgungen und Zinsänderungen sind nicht berücksichtigt.
              </li>
              <li>
                • Für eine detaillierte Beratung kontaktieren Sie bitte unsere
                Experten.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

