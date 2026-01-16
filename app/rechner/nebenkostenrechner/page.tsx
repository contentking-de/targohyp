"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Receipt, ArrowLeft, Download, Share2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function NebenkostenrechnerPage() {
  const [kaufpreis, setKaufpreis] = useState<string>("300000");
  const [maklerprovision, setMaklerprovision] = useState<string>("3.57");
  const [grunderwerbsteuer, setGrunderwerbsteuer] = useState<string>("6.5");
  const [notarGrundbuch, setNotarGrundbuch] = useState<string>("2.0");

  // Berechnungen
  const preis = parseFloat(kaufpreis) || 0;
  const maklerProzent = parseFloat(maklerprovision) || 0;
  const grunderwerbProzent = parseFloat(grunderwerbsteuer) || 0;
  const notarProzent = parseFloat(notarGrundbuch) || 0;

  // Einzelne Kosten
  const maklerKosten = (preis * maklerProzent) / 100;
  const grunderwerbKosten = (preis * grunderwerbProzent) / 100;
  const notarKosten = (preis * notarProzent) / 100;

  // Gesamtnebenkosten
  const gesamtNebenkosten = maklerKosten + grunderwerbKosten + notarKosten;
  const gesamtKosten = preis + gesamtNebenkosten;
  const nebenkostenQuote = preis > 0 ? (gesamtNebenkosten / preis) * 100 : 0;

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
        { name: "Nebenkostenrechner", url: "/rechner/nebenkostenrechner" }
      ]} />
      {/* Header */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/rechner" className="text-targo-blue hover:underline">
              Rechner
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Nebenkostenrechner</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <Receipt className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Nebenkostenrechner</h1>
            </div>
            <p className="text-lg text-gray-700">
              Berechnen Sie die Kaufnebenkosten für Ihre Immobilie - Makler, Grunderwerbsteuer, Notar und Grundbuch.
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
              <h2 className="text-2xl font-bold mb-6">Kaufdaten</h2>
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
                    htmlFor="maklerprovision"
                    className="block text-sm font-semibold mb-2"
                  >
                    Maklerprovision (%)
                  </label>
                  <Input
                    id="maklerprovision"
                    type="number"
                    step="0.01"
                    value={maklerprovision}
                    onChange={(e) => setMaklerprovision(e.target.value)}
                    placeholder="3.57"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Standard: 3,57% (inkl. MwSt.) oder 3% (ohne MwSt.)
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="grunderwerbsteuer"
                    className="block text-sm font-semibold mb-2"
                  >
                    Grunderwerbsteuer (%)
                  </label>
                  <Input
                    id="grunderwerbsteuer"
                    type="number"
                    step="0.1"
                    value={grunderwerbsteuer}
                    onChange={(e) => setGrunderwerbsteuer(e.target.value)}
                    placeholder="6.5"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Variiert je nach Bundesland (3,5% - 6,5%)
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="notarGrundbuch"
                    className="block text-sm font-semibold mb-2"
                  >
                    Notar & Grundbuch (%)
                  </label>
                  <Input
                    id="notarGrundbuch"
                    type="number"
                    step="0.1"
                    value={notarGrundbuch}
                    onChange={(e) => setNotarGrundbuch(e.target.value)}
                    placeholder="2.0"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ca. 1,5% - 2,5% des Kaufpreises
                  </p>
                </div>
              </div>
            </div>

            {/* Ergebnisse */}
            <div className="space-y-6">
              {/* Zusammenfassung */}
              <div className="bg-white border-4 border-[#003366] rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Kostenübersicht</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Kaufpreis:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(preis)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Gesamtnebenkosten:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(gesamtNebenkosten)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Gesamtkosten:</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(gesamtKosten)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Aufschlüsselung der Nebenkosten</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Maklerprovision:</span>
                    <span className="font-semibold">
                      {formatCurrency(maklerKosten)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grunderwerbsteuer:</span>
                    <span className="font-semibold">
                      {formatCurrency(grunderwerbKosten)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Notar & Grundbuch:</span>
                    <span className="font-semibold">
                      {formatCurrency(notarKosten)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Nebenkostenquote:</span>
                    <span className="font-semibold">
                      {nebenkostenQuote.toFixed(1)}%
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
                • Die Grunderwerbsteuer variiert je nach Bundesland zwischen 3,5% und 6,5%.
              </li>
              <li>
                • Die Maklerprovision beträgt in der Regel 3,57% (inkl. MwSt.) oder 3% (ohne MwSt.) des Kaufpreises.
              </li>
              <li>
                • Notar- und Grundbuchkosten liegen typischerweise bei 1,5% - 2,5% des Kaufpreises.
              </li>
              <li>
                • Die Gesamtnebenkosten betragen in der Regel 10-15% des Kaufpreises.
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
