"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, ArrowLeft, Download, Share2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function MietenKaufenRechnerPage() {
  const [kaufpreis, setKaufpreis] = useState<string>("300000");
  const [eigenkapital, setEigenkapital] = useState<string>("60000");
  const [nebenkosten, setNebenkosten] = useState<string>("30000");
  const [monatlicheMiete, setMonatlicheMiete] = useState<string>("1200");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");
  const [mietsteigerung, setMietsteigerung] = useState<string>("2.0");
  const [wertsteigerung, setWertsteigerung] = useState<string>("2.0");
  const [instandhaltung, setInstandhaltung] = useState<string>("100");
  const [betrachtungszeitraum, setBetrachtungszeitraum] = useState<string>("10");

  // Berechnungen
  const preis = parseFloat(kaufpreis) || 0;
  const ek = parseFloat(eigenkapital) || 0;
  const nk = parseFloat(nebenkosten) || 0;
  const miete = parseFloat(monatlicheMiete) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;
  const mietsteigerungProzent = parseFloat(mietsteigerung) || 0;
  const wertsteigerungProzent = parseFloat(wertsteigerung) || 0;
  const instandhaltungMonatlich = parseFloat(instandhaltung) || 0;
  const betrachtungsJahre = parseInt(betrachtungszeitraum) || 0;

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

  // Kosten beim Kaufen
  let gesamtKostenKaufen = gesamtKosten; // Anfangsinvestition
  let restschuld = darlehensbetrag;
  let gesamtZinsenKaufen = 0;
  let gesamtInstandhaltungKaufen = 0;

  if (darlehensbetrag > 0 && zins > 0 && jahre > 0 && tilgung > 0) {
    for (let jahr = 1; jahr <= Math.min(betrachtungsJahre, jahre); jahr++) {
      for (let monat = 1; monat <= 12; monat++) {
        const zinsanteil = restschuld * monatlicherZinssatz;
        gesamtZinsenKaufen += zinsanteil;
        const tilgungsanteil = monatlicheRate - zinsanteil;
        restschuld -= tilgungsanteil;
        if (restschuld <= 0) break;
      }
      if (restschuld <= 0) break;
      gesamtInstandhaltungKaufen += instandhaltungMonatlich * 12;
    }
  }

  gesamtKostenKaufen += gesamtZinsenKaufen + gesamtInstandhaltungKaufen;

  // Immobilienwert nach Betrachtungszeitraum
  const wertNachZeitraum = preis * Math.pow(1 + wertsteigerungProzent / 100, betrachtungsJahre);
  const wertsteigerungBetrag = wertNachZeitraum - preis;
  const restschuldNachZeitraum = Math.max(0, restschuld);
  const eigenkapitalNachZeitraum = wertNachZeitraum - restschuldNachZeitraum;
  const vermoegenswertKaufen = eigenkapitalNachZeitraum - ek;

  // Kosten beim Mieten
  let gesamtMieteKosten = 0;
  let aktuelleMiete = miete;

  for (let jahr = 1; jahr <= betrachtungsJahre; jahr++) {
    gesamtMieteKosten += aktuelleMiete * 12;
    aktuelleMiete *= 1 + mietsteigerungProzent / 100;
  }

  // Alternative Anlage des Eigenkapitals (z.B. 4% Rendite)
  const alternativeRendite = 4.0;
  const eigenkapitalNachAnlage = ek * Math.pow(1 + alternativeRendite / 100, betrachtungsJahre);
  const gewinnAusAnlage = eigenkapitalNachAnlage - ek;
  const vermoegenswertMieten = gewinnAusAnlage - gesamtMieteKosten;

  // Vergleich
  const unterschied = vermoegenswertKaufen - vermoegenswertMieten;
  const istKaufenBesser = unterschied > 0;

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
        { name: "Mieten oder Kaufen?", url: "/rechner/mieten-kaufen-rechner" }
      ]} />
      {/* Header */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/rechner" className="text-targo-blue hover:underline">
              Rechner
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Mieten oder Kaufen?</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Mieten oder Kaufen?</h1>
            </div>
            <p className="text-lg text-gray-700">
              Vergleichen Sie die Kosten und den Vermögenswert von Mieten und Kaufen über einen bestimmten Zeitraum.
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
              <h2 className="text-2xl font-bold mb-6">Vergleichsdaten</h2>
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
                    htmlFor="monatlicheMiete"
                    className="block text-sm font-semibold mb-2"
                  >
                    Monatliche Miete (€)
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
                    Entwicklung & Kosten
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="betrachtungszeitraum"
                        className="block text-sm font-semibold mb-2"
                      >
                        Betrachtungszeitraum (Jahre)
                      </label>
                      <Input
                        id="betrachtungszeitraum"
                        type="number"
                        value={betrachtungszeitraum}
                        onChange={(e) => setBetrachtungszeitraum(e.target.value)}
                        placeholder="10"
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

                    <div>
                      <label
                        htmlFor="wertsteigerung"
                        className="block text-sm font-semibold mb-2"
                      >
                        Jährliche Wertsteigerung (%)
                      </label>
                      <Input
                        id="wertsteigerung"
                        type="number"
                        step="0.1"
                        value={wertsteigerung}
                        onChange={(e) => setWertsteigerung(e.target.value)}
                        placeholder="2.0"
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
                  </div>
                </div>
              </div>
            </div>

            {/* Ergebnisse */}
            <div className="space-y-6">
              {/* Vergleichsergebnis */}
              <div className={`bg-white rounded-lg p-6 lg:p-8 border-4 ${istKaufenBesser ? 'border-green-500' : 'border-blue-500'}`}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {istKaufenBesser ? "Kaufen ist günstiger" : "Mieten kann günstiger sein"}
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Vermögenswert (Kaufen):</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(vermoegenswertKaufen)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Vermögenswert (Mieten):</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(vermoegenswertMieten)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Unterschied:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(Math.abs(unterschied))}
                    </span>
                  </div>
                </div>
              </div>

              {/* Kosten beim Kaufen */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Kosten beim Kaufen</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Anfangsinvestition:</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtKosten)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zinskosten ({betrachtungsJahre} Jahre):</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtZinsenKaufen)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instandhaltung:</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtInstandhaltungKaufen)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Gesamtkosten:</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtKostenKaufen)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Immobilienwert nach {betrachtungsJahre} Jahren:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(wertNachZeitraum)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wertsteigerung:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(wertsteigerungBetrag)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Restschuld:</span>
                    <span className="font-semibold">
                      {formatCurrency(restschuldNachZeitraum)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Kosten beim Mieten */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Kosten beim Mieten</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gesamte Mietkosten ({betrachtungsJahre} Jahre):</span>
                    <span className="font-semibold">
                      {formatCurrency(gesamtMieteKosten)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eigenkapital (Anfang):</span>
                    <span className="font-semibold">
                      {formatCurrency(ek)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eigenkapital nach Anlage ({betrachtungsJahre} Jahre):</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(eigenkapitalNachAnlage)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Gewinn aus Anlage:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(gewinnAusAnlage)}
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
                • Der Vergleich berücksichtigt Zinskosten, Instandhaltung, Mietsteigerung und Wertsteigerung.
              </li>
              <li>
                • Beim Mieten wird das Eigenkapital alternativ angelegt (angenommen: 4% Rendite).
              </li>
              <li>
                • Die Berechnung berücksichtigt keine Steuervorteile oder weitere Kosten (z.B. Versicherungen).
              </li>
              <li>
                • Die Wertsteigerung und Mietsteigerung sind Schätzungen und können sich ändern.
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
