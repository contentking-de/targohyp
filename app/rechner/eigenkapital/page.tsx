"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign, ArrowLeft, Download, Share2, AlertCircle } from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export default function EigenkapitalrechnerPage() {
  const [eigenkapital, setEigenkapital] = useState<string>("60000");
  const [kaufpreis, setKaufpreis] = useState<string>("300000");
  const [kaufnebenkosten, setKaufnebenkosten] = useState<string>("30000");
  const [foerderung, setFoerderung] = useState<string>("0");

  // Berechnungen
  const ek = parseFloat(eigenkapital) || 0;
  const preis = parseFloat(kaufpreis) || 0;
  const nebenkosten = parseFloat(kaufnebenkosten) || 0;
  const foerderungBetrag = parseFloat(foerderung) || 0;

  const gesamtKosten = preis + nebenkosten;
  const verfuegbaresKapital = ek + foerderungBetrag;
  const finanzierungsbedarf = gesamtKosten - verfuegbaresKapital;
  const eigenkapitalQuote = gesamtKosten > 0 ? (verfuegbaresKapital / gesamtKosten) * 100 : 0;
  const finanzierungsluecke = finanzierungsbedarf > 0 ? finanzierungsbedarf : 0;

  // Empfehlungen
  const empfehlungen: string[] = [];
  if (eigenkapitalQuote < 20) {
    empfehlungen.push(
      "Eine Eigenkapitalquote von mindestens 20% wird empfohlen, um bessere Zinskonditionen zu erhalten."
    );
  }
  if (finanzierungsluecke > 0) {
    empfehlungen.push(
      `Sie haben eine Finanzierungslücke von ${new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }).format(finanzierungsluecke)}. Erwägen Sie zusätzliche Eigenmittel oder Förderungen.`
    );
  }
  if (eigenkapitalQuote >= 20 && eigenkapitalQuote < 30) {
    empfehlungen.push(
      "Gute Eigenkapitalquote! Mit 30% oder mehr erhalten Sie die besten Konditionen."
    );
  }
  if (eigenkapitalQuote >= 30) {
    empfehlungen.push(
      "Ausgezeichnete Eigenkapitalquote! Sie erhalten voraussichtlich sehr gute Zinskonditionen."
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
        { name: "Eigenkapitalrechner", url: "/rechner/eigenkapital" }
      ]} />
      {/* Header */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/rechner" className="text-targo-blue hover:underline">
              Rechner
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Eigenkapitalrechner</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">
                Eigenkapitalrechner
              </h1>
            </div>
            <p className="text-lg text-gray-700">
              Berechnen Sie Ihr verfügbares Eigenkapital und identifizieren Sie
              Finanzierungslücken.
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
              <h2 className="text-2xl font-bold mb-6">Ihre Daten</h2>
              <div className="space-y-6">
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
                    Ihr verfügbares Kapital (Ersparnisse, Bausparvertrag, etc.)
                  </p>
                </div>

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
                    htmlFor="kaufnebenkosten"
                    className="block text-sm font-semibold mb-2"
                  >
                    Kaufnebenkosten (€)
                  </label>
                  <Input
                    id="kaufnebenkosten"
                    type="number"
                    value={kaufnebenkosten}
                    onChange={(e) => setKaufnebenkosten(e.target.value)}
                    placeholder="30.000"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Grunderwerbsteuer, Notar, Grundbuch, Makler (ca. 10-15% des
                    Kaufpreises)
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="foerderung"
                    className="block text-sm font-semibold mb-2"
                  >
                    Förderungen (€)
                  </label>
                  <Input
                    id="foerderung"
                    type="number"
                    value={foerderung}
                    onChange={(e) => setFoerderung(e.target.value)}
                    placeholder="0"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Z.B. KfW-Förderung, Baukindergeld, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Ergebnisse */}
            <div className="space-y-6">
              {/* Zusammenfassung */}
              <div className="bg-white border-4 border-[#003366] rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Finanzierungsübersicht</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Gesamtkosten</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(gesamtKosten)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Verfügbares Kapital</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(verfuegbaresKapital)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Finanzierungsbedarf</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(finanzierungsbedarf)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Eigenkapitalquote</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {eigenkapitalQuote.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Aufschlüsselung</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eigenkapital:</span>
                    <span className="font-semibold">{formatCurrency(ek)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Förderungen:</span>
                    <span className="font-semibold">
                      {formatCurrency(foerderungBetrag)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kaufpreis:</span>
                    <span className="font-semibold">{formatCurrency(preis)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kaufnebenkosten:</span>
                    <span className="font-semibold">
                      {formatCurrency(nebenkosten)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Finanzierungslücke Warnung */}
              {finanzierungsluecke > 0 && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-700 mb-2">
                        Finanzierungslücke
                      </h3>
                      <p className="text-sm text-red-600">
                        Es besteht eine Finanzierungslücke von{" "}
                        <span className="font-bold">
                          {formatCurrency(finanzierungsluecke)}
                        </span>
                        . Bitte prüfen Sie Ihre Finanzierungsmöglichkeiten.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Empfehlungen */}
              {empfehlungen.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-targo-blue">
                    Empfehlungen
                  </h3>
                  <ul className="space-y-2">
                    {empfehlungen.map((empfehlung, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
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
                • Eine Eigenkapitalquote von 20-30% wird für gute
                Zinskonditionen empfohlen.
              </li>
              <li>
                • Kaufnebenkosten betragen in der Regel 10-15% des Kaufpreises
                (Grunderwerbsteuer, Notar, Grundbuch, Makler).
              </li>
              <li>
                • Prüfen Sie Förderungsmöglichkeiten wie KfW-Förderung oder
                Baukindergeld.
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

