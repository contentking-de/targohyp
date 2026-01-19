"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, ArrowLeft, Download, Calendar } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function BauzinsrechnerPage() {
  const [darlehensbetrag, setDarlehensbetrag] = useState<string>("300000");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");
  const [zinsbindung, setZinsbindung] = useState<string>("10");
  const [neuerZinssatz, setNeuerZinssatz] = useState<string>("4.0");

  // Berechnungen
  const darlehen = parseFloat(darlehensbetrag) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;
  const zinsbindungJahre = parseInt(zinsbindung) || 0;
  const neuerZins = parseFloat(neuerZinssatz) || 0;

  // Monatliche Rate berechnen
  const monatlicherZinssatz = zins / 100 / 12;
  const monatlicheTilgung = tilgung / 100 / 12;
  const monatlicheRate =
    darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0
      ? darlehen * (monatlicherZinssatz + monatlicheTilgung)
      : 0;

  // Restschuld nach Zinsbindung
  let restschuldNachZinsbindung = darlehen;
  let zinsenErstePhase = 0;

  if (darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0) {
    for (let jahr = 1; jahr <= Math.min(zinsbindungJahre, jahre); jahr++) {
      for (let monat = 1; monat <= 12; monat++) {
        const zinsanteil = restschuldNachZinsbindung * monatlicherZinssatz;
        zinsenErstePhase += zinsanteil;
        const tilgungsanteil = monatlicheRate - zinsanteil;
        restschuldNachZinsbindung -= tilgungsanteil;
        if (restschuldNachZinsbindung <= 0) break;
      }
      if (restschuldNachZinsbindung <= 0) break;
    }
  }

  // Neue Rate nach Zinsänderung
  const neuerMonatlicherZinssatz = neuerZins / 100 / 12;
  const verbleibendeLaufzeit = Math.max(0, jahre - zinsbindungJahre);
  const neueMonatlicheRate =
    restschuldNachZinsbindung > 0 && neuerZins > 0 && verbleibendeLaufzeit > 0 && tilgung > 0
      ? restschuldNachZinsbindung * (neuerMonatlicherZinssatz + monatlicheTilgung)
      : 0;

  // Zinsen zweite Phase
  let zinsenZweitePhase = 0;
  let restschuldEnde = restschuldNachZinsbindung;

  if (restschuldNachZinsbindung > 0 && neuerZins > 0 && verbleibendeLaufzeit > 0) {
    for (let jahr = 1; jahr <= verbleibendeLaufzeit; jahr++) {
      for (let monat = 1; monat <= 12; monat++) {
        const zinsanteil = restschuldEnde * neuerMonatlicherZinssatz;
        zinsenZweitePhase += zinsanteil;
        const tilgungsanteil = neueMonatlicheRate - zinsanteil;
        restschuldEnde -= tilgungsanteil;
        if (restschuldEnde <= 0) break;
      }
      if (restschuldEnde <= 0) break;
    }
  }

  const gesamtZinsen = zinsenErstePhase + zinsenZweitePhase;
  const rateUnterschied = neueMonatlicheRate - monatlicheRate;

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
                <Home className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Bauzinsrechner</h1>
            </div>
            <p className="text-lg text-gray-700">
              Berechnen Sie die Auswirkungen einer Zinsänderung nach Ablauf der Zinsbindung auf Ihre Baufinanzierung.
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
                    Aktueller Sollzinssatz (% p.a.)
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
                    Gesamtlaufzeit (Jahre)
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
                    Zinsbindung & Anschlussfinanzierung
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="zinsbindung"
                        className="block text-sm font-semibold mb-2"
                      >
                        Zinsbindung (Jahre)
                      </label>
                      <Input
                        id="zinsbindung"
                        type="number"
                        value={zinsbindung}
                        onChange={(e) => setZinsbindung(e.target.value)}
                        placeholder="10"
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Dauer der aktuellen Zinsbindung
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="neuerZinssatz"
                        className="block text-sm font-semibold mb-2"
                      >
                        Neuer Zinssatz nach Zinsbindung (% p.a.)
                      </label>
                      <Input
                        id="neuerZinssatz"
                        type="number"
                        step="0.01"
                        value={neuerZinssatz}
                        onChange={(e) => setNeuerZinssatz(e.target.value)}
                        placeholder="4.0"
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Geschätzter Zinssatz für die Anschlussfinanzierung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ergebnisse */}
            <div className="space-y-6">
              {/* Erste Phase */}
              <div className="bg-white border-4 border-[#003366] rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Erste Phase (Zinsbindung)</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Monatliche Rate:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(monatlicheRate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Zinssatz:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {zins}% p.a.
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Zinsbindung:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {zinsbindungJahre} Jahre
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Restschuld nach Zinsbindung:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(restschuldNachZinsbindung)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Zweite Phase */}
              {verbleibendeLaufzeit > 0 && (
                <div className="bg-white border-4 border-orange-500 rounded-lg p-6 lg:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Anschlussfinanzierung</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-700">Neue monatliche Rate:</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatCurrency(neueMonatlicheRate)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-700">Neuer Zinssatz:</span>
                      <span className="text-xl font-semibold text-gray-900">
                        {neuerZins}% p.a.
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-700">Verbleibende Laufzeit:</span>
                      <span className="text-xl font-semibold text-gray-900">
                        {verbleibendeLaufzeit} Jahre
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Rate-Unterschied:</span>
                      <span className={`text-xl font-semibold ${rateUnterschied > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {rateUnterschied > 0 ? '+' : ''}{formatCurrency(rateUnterschied)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Gesamtübersicht */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Gesamtübersicht</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gesamtzinsen:</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtZinsen)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zinsen erste Phase:</span>
                    <span className="font-semibold">
                      {formatCurrency(zinsenErstePhase)}
                    </span>
                  </div>
                  {verbleibendeLaufzeit > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zinsen zweite Phase:</span>
                      <span className="font-semibold">
                        {formatCurrency(zinsenZweitePhase)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Gesamtkosten:</span>
                    <span className="font-semibold">
                      {formatCurrency(darlehen + gesamtZinsen)}
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
                <Link
                  href="/termin-vereinbaren"
                  className="flex-1 bg-[#bb133e] hover:bg-[#a01135] text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 h-10"
                >
                  <Calendar className="w-4 h-4" />
                  Beratungstermin vereinbaren
                </Link>
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
                • Die Berechnung zeigt die Auswirkungen einer Zinsänderung nach Ablauf der Zinsbindung.
              </li>
              <li>
                • Der zukünftige Zinssatz ist geschätzt und kann sich ändern.
              </li>
              <li>
                • Planen Sie rechtzeitig die Anschlussfinanzierung und vergleichen Sie Angebote.
              </li>
              <li>
                • Eine längere Zinsbindung kann Sicherheit bieten, ist aber meist teurer.
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
