"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Percent, ArrowLeft, Download, Share2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function ZinsrechnerPage() {
  const [darlehensbetrag, setDarlehensbetrag] = useState<string>("300000");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");

  // Berechnungen
  const darlehen = parseFloat(darlehensbetrag) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;

  // Zinsberechnungen
  const monatlicherZinssatz = zins / 100 / 12;
  const jaehrlicherZins = (darlehen * zins) / 100;
  const monatlicherZins = jaehrlicherZins / 12;

  // Gesamtzinsen über die Laufzeit
  let gesamtZinsen = 0;
  let restschuld = darlehen;

  if (darlehen > 0 && zins > 0 && jahre > 0) {
    // Annuität berechnen (vereinfacht mit 2% Tilgung)
    const monatlicheTilgung = 0.02 / 12;
    const monatlicheRate = darlehen * (monatlicherZinssatz + monatlicheTilgung);

    for (let jahr = 1; jahr <= jahre; jahr++) {
      for (let monat = 1; monat <= 12; monat++) {
        const zinsanteil = restschuld * monatlicherZinssatz;
        gesamtZinsen += zinsanteil;
        const tilgungsanteil = monatlicheRate - zinsanteil;
        restschuld -= tilgungsanteil;
        if (restschuld <= 0) break;
      }
      if (restschuld <= 0) break;
    }
  }

  // Effektiver Jahreszins (vereinfacht)
  const effektiverJahreszins = zins; // Vereinfacht gleich dem Nominalzins

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
        { name: "Zinsrechner", url: "/rechner/zinsrechner" }
      ]} />
      {/* Header */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/rechner" className="text-targo-blue hover:underline">
              Rechner
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Zinsrechner</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Percent className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Zinsrechner</h1>
            </div>
            <p className="text-lg text-gray-700">
              Berechnen Sie die Zinskosten für Ihr Darlehen - jährlich, monatlich und über die gesamte Laufzeit.
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
              <h2 className="text-2xl font-bold mb-6">Darlehensdaten</h2>
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
              </div>
            </div>

            {/* Ergebnisse */}
            <div className="space-y-6">
              {/* Zusammenfassung */}
              <div className="bg-white border-4 border-[#003366] rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Zinsübersicht</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Gesamtzinsen:</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(gesamtZinsen)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Jährliche Zinsen:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(jaehrlicherZins)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Monatliche Zinsen:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(monatlicherZins)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Zinssatz:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {zins}% p.a.
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Zinsdetails</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darlehensbetrag:</span>
                    <span className="font-semibold">
                      {formatCurrency(darlehen)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nominalzins:</span>
                    <span className="font-semibold">{zins}% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Laufzeit:</span>
                    <span className="font-semibold">{jahre} Jahre</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Gesamtzinsen:</span>
                    <span className="font-semibold text-red-600">
                      {formatCurrency(gesamtZinsen)}
                    </span>
                  </div>
                  <div className="flex justify-between">
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
                • Die Berechnung erfolgt nach der Annuitätenmethode mit einer angenommenen Tilgung von 2% p.a.
              </li>
              <li>
                • Die tatsächlichen Zinskosten können je nach Tilgungsrate variieren.
              </li>
              <li>
                • Der effektive Jahreszins kann vom Nominalzins abweichen (Gebühren, etc.).
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
