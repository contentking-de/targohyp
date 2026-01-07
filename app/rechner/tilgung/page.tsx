"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, ArrowLeft, Download, Share2 } from "lucide-react";

export default function TilgungsrechnerPage() {
  const [darlehensbetrag, setDarlehensbetrag] = useState<string>("300000");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");
  const [sondertilgung, setSondertilgung] = useState<string>("0");
  const [sondertilgungJahr, setSondertilgungJahr] = useState<string>("5");

  // Berechnungen
  const darlehen = parseFloat(darlehensbetrag) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;
  const sondertilgungBetrag = parseFloat(sondertilgung) || 0;
  const sondertilgungNachJahren = parseInt(sondertilgungJahr) || 0;

  // Monatliche Rate berechnen
  const monatlicherZinssatz = zins / 100 / 12;
  const monatlicheTilgung = tilgung / 100 / 12;
  const monatlicheRate =
    darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0
      ? darlehen * (monatlicherZinssatz + monatlicheTilgung)
      : 0;

  // Berechnung mit Sondertilgung
  let restschuldMitSondertilgung = darlehen;
  let gesamtZinsenMitSondertilgung = 0;
  let neueLaufzeitMitSondertilgung = jahre;

  if (darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0) {
    for (let jahr = 1; jahr <= jahre; jahr++) {
      for (let monat = 1; monat <= 12; monat++) {
        const zinsanteil = restschuldMitSondertilgung * monatlicherZinssatz;
        const tilgungsanteil = monatlicheRate - zinsanteil;
        gesamtZinsenMitSondertilgung += zinsanteil;
        restschuldMitSondertilgung -= tilgungsanteil;

        // Sondertilgung nach X Jahren
        if (
          jahr === sondertilgungNachJahren &&
          monat === 12 &&
          sondertilgungBetrag > 0
        ) {
          restschuldMitSondertilgung -= sondertilgungBetrag;
        }

        if (restschuldMitSondertilgung <= 0) {
          neueLaufzeitMitSondertilgung = jahr;
          break;
        }
      }
      if (restschuldMitSondertilgung <= 0) break;
    }
  }

  // Berechnung ohne Sondertilgung
  let restschuldOhneSondertilgung = darlehen;
  let gesamtZinsenOhneSondertilgung = 0;

  if (darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0) {
    for (let jahr = 1; jahr <= jahre; jahr++) {
      for (let monat = 1; monat <= 12; monat++) {
        const zinsanteil = restschuldOhneSondertilgung * monatlicherZinssatz;
        const tilgungsanteil = monatlicheRate - zinsanteil;
        gesamtZinsenOhneSondertilgung += zinsanteil;
        restschuldOhneSondertilgung -= tilgungsanteil;
        if (restschuldOhneSondertilgung <= 0) break;
      }
      if (restschuldOhneSondertilgung <= 0) break;
    }
  }

  const ersparnis = gesamtZinsenOhneSondertilgung - gesamtZinsenMitSondertilgung;
  const laufzeitErsparnis = jahre - neueLaufzeitMitSondertilgung;

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
                <TrendingUp className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Tilgungsrechner</h1>
            </div>
            <p className="text-lg text-gray-700">
              Vergleichen Sie verschiedene Tilgungsmodelle und simulieren Sie
              Sondertilgungen.
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

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Sondertilgung
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="sondertilgung"
                        className="block text-sm font-semibold mb-2"
                      >
                        Sondertilgungsbetrag (€)
                      </label>
                      <Input
                        id="sondertilgung"
                        type="number"
                        value={sondertilgung}
                        onChange={(e) => setSondertilgung(e.target.value)}
                        placeholder="10.000"
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Optional: Einmalige Sondertilgung
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="sondertilgungJahr"
                        className="block text-sm font-semibold mb-2"
                      >
                        Nach wie vielen Jahren?
                      </label>
                      <Input
                        id="sondertilgungJahr"
                        type="number"
                        value={sondertilgungJahr}
                        onChange={(e) => setSondertilgungJahr(e.target.value)}
                        placeholder="5"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vergleich */}
            <div className="space-y-6">
              {/* Ohne Sondertilgung */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Ohne Sondertilgung</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monatliche Rate:</span>
                    <span className="font-semibold">
                      {formatCurrency(monatlicheRate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gesamtzinsen:</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtZinsenOhneSondertilgung)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Laufzeit:</span>
                    <span className="font-semibold">{jahre} Jahre</span>
                  </div>
                </div>
              </div>

              {/* Mit Sondertilgung */}
              {sondertilgungBetrag > 0 && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-700">
                    Mit Sondertilgung
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monatliche Rate:</span>
                      <span className="font-semibold">
                        {formatCurrency(monatlicheRate)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gesamtzinsen:</span>
                      <span className="font-semibold">
                        {formatCurrency(gesamtZinsenMitSondertilgung)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Laufzeit:</span>
                      <span className="font-semibold">
                        {neueLaufzeitMitSondertilgung} Jahre
                      </span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-green-200">
                      <div className="flex justify-between text-green-700 font-semibold">
                        <span>Zinsersparnis:</span>
                        <span>{formatCurrency(ersparnis)}</span>
                      </div>
                      <div className="flex justify-between text-green-700 font-semibold">
                        <span>Laufzeitverkürzung:</span>
                        <span>{laufzeitErsparnis} Jahre</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-targo-blue">
              Wichtige Hinweise
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Sondertilgungen können die Laufzeit verkürzen und Zinsen
                sparen.
              </li>
              <li>
                • Die Berechnung erfolgt nach der Annuitätenmethode und dient
                der ersten Orientierung.
              </li>
              <li>
                • Bitte prüfen Sie in Ihrem Darlehensvertrag, welche
                Sondertilgungsmöglichkeiten bestehen.
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

