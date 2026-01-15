"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, ArrowLeft, Download, Share2 } from "lucide-react";

export default function DarlehensrechnerPage() {
  const [kaufpreis, setKaufpreis] = useState<string>("300000");
  const [eigenkapital, setEigenkapital] = useState<string>("60000");
  const [nebenkosten, setNebenkosten] = useState<string>("30000");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");

  // Berechnungen
  const preis = parseFloat(kaufpreis) || 0;
  const ek = parseFloat(eigenkapital) || 0;
  const nk = parseFloat(nebenkosten) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;

  // Gesamtkosten und Darlehensbetrag
  const gesamtKosten = preis + nk;
  const darlehensbetrag = gesamtKosten - ek;
  const eigenkapitalQuote = gesamtKosten > 0 ? (ek / gesamtKosten) * 100 : 0;

  // Monatliche Rate berechnen
  const monatlicherZinssatz = zins / 100 / 12;
  const monatlicheTilgung = tilgung / 100 / 12;
  const monatlicheRate =
    darlehensbetrag > 0 && zins > 0 && jahre > 0 && tilgung > 0
      ? darlehensbetrag * (monatlicherZinssatz + monatlicheTilgung)
      : 0;

  // Gesamtkosten
  const gesamtZinsen = monatlicheRate * jahre * 12 - darlehensbetrag;
  const gesamtKostenFinanzierung = darlehensbetrag + gesamtZinsen;

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
                <FileText className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Darlehensrechner</h1>
            </div>
            <p className="text-lg text-gray-700">
              Berechnen Sie Ihren Darlehensbetrag, monatliche Rate und Gesamtkosten für Ihre Immobilienfinanzierung.
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
                    htmlFor="kaufpreis"
                    className="block text-sm font-semibold mb-2"
                  >
                    Kaufpreis der Immobilie (€)
                  </label>
                  <Input
                    id="kaufpreis"
                    type="number"
                    value={kaufpreis}
                    onChange={(e) => setKaufpreis(e.target.value)}
                    placeholder="300.000"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eigenkapital"
                    className="block text-sm font-semibold mb-2"
                  >
                    Eigenkapital (€)
                  </label>
                  <Input
                    id="eigenkapital"
                    type="number"
                    value={eigenkapital}
                    onChange={(e) => setEigenkapital(e.target.value)}
                    placeholder="60.000"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="nebenkosten"
                    className="block text-sm font-semibold mb-2"
                  >
                    Kaufnebenkosten (€)
                  </label>
                  <Input
                    id="nebenkosten"
                    type="number"
                    value={nebenkosten}
                    onChange={(e) => setNebenkosten(e.target.value)}
                    placeholder="30.000"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ca. 10-15% des Kaufpreises
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Darlehenskonditionen
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
              {/* Zusammenfassung */}
              <div className="bg-white border-4 border-[#003366] rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Darlehensübersicht</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Darlehensbetrag:</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(darlehensbetrag)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Monatliche Rate:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(monatlicheRate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Gesamtzinsen:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(gesamtZinsen)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Gesamtkosten:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(gesamtKostenFinanzierung)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Finanzierungsdetails</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kaufpreis:</span>
                    <span className="font-semibold">
                      {formatCurrency(preis)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kaufnebenkosten:</span>
                    <span className="font-semibold">
                      {formatCurrency(nk)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gesamtkosten:</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtKosten)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eigenkapital:</span>
                    <span className="font-semibold">
                      {formatCurrency(ek)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Eigenkapitalquote:</span>
                    <span className="font-semibold">
                      {eigenkapitalQuote.toFixed(1)}%
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
                • Die Berechnung erfolgt nach der Annuitätenmethode und dient der ersten Orientierung.
              </li>
              <li>
                • Die tatsächlichen Konditionen können abweichen und werden individuell vereinbart.
              </li>
              <li>
                • Sondertilgungen und Zinsänderungen sind nicht berücksichtigt.
              </li>
              <li>
                • Eine Eigenkapitalquote von mindestens 20% wird für gute Zinskonditionen empfohlen.
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
