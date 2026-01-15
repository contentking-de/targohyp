"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, ArrowLeft, Download, Share2 } from "lucide-react";

export default function RenditerechnerPage() {
  const [kaufpreis, setKaufpreis] = useState<string>("300000");
  const [eigenkapital, setEigenkapital] = useState<string>("60000");
  const [nebenkosten, setNebenkosten] = useState<string>("30000");
  const [monatlicheMiete, setMonatlicheMiete] = useState<string>("1200");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");
  const [verwaltungskosten, setVerwaltungskosten] = useState<string>("50");
  const [instandhaltung, setInstandhaltung] = useState<string>("100");
  const [mietsteigerung, setMietsteigerung] = useState<string>("2.0");

  // Berechnungen
  const preis = parseFloat(kaufpreis) || 0;
  const ek = parseFloat(eigenkapital) || 0;
  const nk = parseFloat(nebenkosten) || 0;
  const miete = parseFloat(monatlicheMiete) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;
  const verwaltung = parseFloat(verwaltungskosten) || 0;
  const instandhaltungMonatlich = parseFloat(instandhaltung) || 0;
  const mietsteigerungProzent = parseFloat(mietsteigerung) || 0;

  // Gesamtkosten und Darlehensbetrag
  const gesamtKosten = preis + nk;
  const darlehensbetrag = gesamtKosten - ek;

  // Monatliche Rate berechnen
  const monatlicherZinssatz = zins / 100 / 12;
  const monatlicheTilgung = tilgung / 100 / 12;
  const monatlicheRate =
    darlehensbetrag > 0 && zins > 0 && jahre > 0 && tilgung > 0
      ? darlehensbetrag * (monatlicherZinssatz + monatlicheTilgung)
      : 0;

  // Monatliche Einnahmen und Ausgaben
  const jaehrlicheMiete = miete * 12;
  const monatlicheAusgaben = monatlicheRate + verwaltung + instandhaltungMonatlich;
  const jaehrlicheAusgaben = monatlicheAusgaben * 12;
  const monatlicherCashflow = miete - monatlicheAusgaben;
  const jaehrlicherCashflow = monatlicherCashflow * 12;

  // Renditeberechnungen
  const mietrenditeBrutto = preis > 0 ? (jaehrlicheMiete / preis) * 100 : 0;
  const mietrenditeNetto = gesamtKosten > 0 ? (jaehrlicherCashflow / gesamtKosten) * 100 : 0;
  const eigenkapitalrendite = ek > 0 ? (jaehrlicherCashflow / ek) * 100 : 0;

  // Langfristige Rendite (mit Mietsteigerung)
  let gesamtMieteinnahmen = 0;
  let gesamtAusgaben = 0;
  let aktuelleMiete = miete;

  for (let jahr = 1; jahr <= Math.min(10, jahre); jahr++) {
    gesamtMieteinnahmen += aktuelleMiete * 12;
    gesamtAusgaben += jaehrlicheAusgaben;
    aktuelleMiete *= 1 + mietsteigerungProzent / 100;
  }

  const gesamtCashflow = gesamtMieteinnahmen - gesamtAusgaben;
  const langfristigeRendite = ek > 0 ? (gesamtCashflow / ek) * 100 : 0;

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
              <h1 className="text-3xl lg:text-4xl font-bold">Renditerechner</h1>
            </div>
            <p className="text-lg text-gray-700">
              Berechnen Sie die Rendite Ihrer Kapitalanlage-Immobilie - Mietrendite, Cashflow und langfristige Rendite.
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
              <h2 className="text-2xl font-bold mb-6">Immobiliendaten</h2>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="kaufpreis"
                    className="block text-sm font-semibold mb-2"
                  >
                    Kaufpreis (€)
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
                </div>

                <div>
                  <label
                    htmlFor="monatlicheMiete"
                    className="block text-sm font-semibold mb-2"
                  >
                    Monatliche Mieteinnahmen (€)
                  </label>
                  <Input
                    id="monatlicheMiete"
                    type="number"
                    value={monatlicheMiete}
                    onChange={(e) => setMonatlicheMiete(e.target.value)}
                    placeholder="1.200"
                    className="w-full"
                  />
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Finanzierung
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

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Betriebskosten
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="verwaltungskosten"
                        className="block text-sm font-semibold mb-2"
                      >
                        Verwaltungskosten (€/Monat)
                      </label>
                      <Input
                        id="verwaltungskosten"
                        type="number"
                        value={verwaltungskosten}
                        onChange={(e) => setVerwaltungskosten(e.target.value)}
                        placeholder="50"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="instandhaltung"
                        className="block text-sm font-semibold mb-2"
                      >
                        Instandhaltung (€/Monat)
                      </label>
                      <Input
                        id="instandhaltung"
                        type="number"
                        value={instandhaltung}
                        onChange={(e) => setInstandhaltung(e.target.value)}
                        placeholder="100"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mietsteigerung"
                        className="block text-sm font-semibold mb-2"
                      >
                        Jährliche Mietsteigerung (%)
                      </label>
                      <Input
                        id="mietsteigerung"
                        type="number"
                        step="0.1"
                        value={mietsteigerung}
                        onChange={(e) => setMietsteigerung(e.target.value)}
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
              {/* Renditeübersicht */}
              <div className="bg-white border-4 border-[#003366] rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Renditeübersicht</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Brutto-Mietrendite:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {mietrenditeBrutto.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Netto-Mietrendite:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {mietrenditeNetto.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Eigenkapitalrendite:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {eigenkapitalrendite.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Monatlicher Cashflow:</span>
                    <span className={`text-xl font-semibold ${monatlicherCashflow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(monatlicherCashflow)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cashflow-Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Cashflow-Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monatliche Mieteinnahmen:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(miete)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monatliche Rate:</span>
                    <span className="font-semibold">
                      {formatCurrency(monatlicheRate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verwaltungskosten:</span>
                    <span className="font-semibold">
                      {formatCurrency(verwaltung)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instandhaltung:</span>
                    <span className="font-semibold">
                      {formatCurrency(instandhaltungMonatlich)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Monatlicher Cashflow:</span>
                    <span className={`font-semibold ${monatlicherCashflow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(monatlicherCashflow)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jährlicher Cashflow:</span>
                    <span className={`font-semibold ${jaehrlicherCashflow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(jaehrlicherCashflow)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Langfristige Rendite */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Langfristige Rendite (10 Jahre)</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gesamte Mieteinnahmen:</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtMieteinnahmen)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gesamte Ausgaben:</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtAusgaben)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Gesamter Cashflow:</span>
                    <span className={`font-semibold ${gesamtCashflow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(gesamtCashflow)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durchschnittliche Rendite:</span>
                    <span className="font-semibold">
                      {(langfristigeRendite / 10).toFixed(2)}% p.a.
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
                • Die Brutto-Mietrendite berechnet sich aus Jahresmiete / Kaufpreis.
              </li>
              <li>
                • Die Netto-Mietrendite berücksichtigt alle Kosten und Finanzierungskosten.
              </li>
              <li>
                • Die Eigenkapitalrendite zeigt die Rendite auf das eingesetzte Eigenkapital.
              </li>
              <li>
                • Ein positiver Cashflow bedeutet, dass die Mieteinnahmen die Ausgaben übersteigen.
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
