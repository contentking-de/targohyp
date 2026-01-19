"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Percent, ArrowLeft, Download, Calendar, CheckCircle } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function MonatsrateRechnerPage() {
  const [monatlichesEinkommen, setMonatlichesEinkommen] = useState<string>("4000");
  const [monatlicheAusgaben, setMonatlicheAusgaben] = useState<string>("2000");
  const [darlehensbetrag, setDarlehensbetrag] = useState<string>("300000");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");

  // Berechnungen
  const einkommen = parseFloat(monatlichesEinkommen) || 0;
  const ausgaben = parseFloat(monatlicheAusgaben) || 0;
  const darlehen = parseFloat(darlehensbetrag) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;

  // Verfügbares Einkommen
  const verfuegbaresEinkommen = einkommen - ausgaben;

  // Monatliche Rate berechnen
  const monatlicherZinssatz = zins / 100 / 12;
  const monatlicheTilgung = tilgung / 100 / 12;
  const monatlicheRate =
    darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0
      ? darlehen * (monatlicherZinssatz + monatlicheTilgung)
      : 0;

  // Belastbarkeit prüfen
  const belastungsquote = einkommen > 0 ? (monatlicheRate / einkommen) * 100 : 0;
  const verfuegbarNachRate = verfuegbaresEinkommen - monatlicheRate;
  const istTragbar = verfuegbarNachRate >= 0;

  // Empfehlungen
  const empfehlungen: string[] = [];
  if (belastungsquote > 40) {
    empfehlungen.push(
      "Die Belastungsquote ist sehr hoch (>40%). Erwägen Sie eine längere Laufzeit oder einen höheren Eigenkapitalanteil."
    );
  } else if (belastungsquote > 35) {
    empfehlungen.push(
      "Die Belastungsquote ist erhöht (>35%). Prüfen Sie Ihre finanzielle Flexibilität."
    );
  } else if (belastungsquote <= 35 && belastungsquote > 0) {
    empfehlungen.push(
      "Die Belastungsquote liegt im empfohlenen Bereich (≤35%). Die Finanzierung ist grundsätzlich tragbar."
    );
  }

  if (verfuegbarNachRate < 500) {
    empfehlungen.push(
      "Nach Abzug der Rate bleibt wenig Spielraum. Planen Sie einen Puffer für unerwartete Ausgaben ein."
    );
  }

  if (istTragbar && verfuegbarNachRate >= 500) {
    empfehlungen.push(
      "Gute finanzielle Situation! Die Rate ist gut tragbar und Sie haben ausreichend Puffer."
    );
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
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "/" },
        { name: "Rechner", url: "/rechner" },
        { name: "Monatsrate-Rechner", url: "/rechner/monatsrate" }
      ]} />
      {/* Header */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/rechner" className="text-targo-blue hover:underline">
              Rechner
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Monatsrate-Rechner</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Percent className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">
                Monatsrate-Rechner
              </h1>
            </div>
            <p className="text-lg text-gray-700">
              Prüfen Sie Ihre Belastbarkeit und spielen Sie verschiedene
              Finanzierungsszenarien durch.
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
                    Ihre regelmäßigen monatlichen Ausgaben (ohne Rate)
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Finanzierungsdaten
                  </h3>
                  <div className="space-y-4">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Ergebnisse */}
            <div className="space-y-6">
              {/* Belastbarkeitsprüfung */}
              <div
                className={`bg-white rounded-lg p-6 lg:p-8 border-4 ${
                  istTragbar
                    ? "border-green-500"
                    : "border-red-500"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {istTragbar ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : (
                    <Percent className="w-8 h-8 text-red-600" />
                  )}
                  <h2 className="text-2xl font-bold text-gray-900">
                    {istTragbar ? "Finanzierung tragbar" : "Finanzierung kritisch"}
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Monatliche Rate:</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(monatlicheRate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Verfügbar nach Rate:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(verfuegbarNachRate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Belastungsquote:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {belastungsquote.toFixed(1)}%
                    </span>
                  </div>
                </div>
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
                    <span className="text-gray-600">Monatliche Rate:</span>
                    <span className="font-semibold">
                      {formatCurrency(monatlicheRate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verbleibend:</span>
                    <span
                      className={`font-semibold ${
                        verfuegbarNachRate < 0
                          ? "text-red-600"
                          : verfuegbarNachRate < 500
                          ? "text-orange-600"
                          : "text-green-600"
                      }`}
                    >
                      {formatCurrency(verfuegbarNachRate)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Empfehlungen */}
              {empfehlungen.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-targo-blue">
                    Empfehlungen
                  </h3>
                  <ul className="space-y-2">
                    {empfehlungen.map((empfehlung, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start"
                      >
                        <span className="text-targo-blue mr-2">•</span>
                        <span>{empfehlung}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
                • Eine Belastungsquote von maximal 35% des Nettoeinkommens wird
                empfohlen.
              </li>
              <li>
                • Planen Sie einen Puffer für unerwartete Ausgaben und
                Lebenshaltungskosten ein.
              </li>
              <li>
                • Die Berechnung dient der ersten Orientierung und ersetzt keine
                individuelle Beratung.
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

