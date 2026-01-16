"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ViewType = "default" | "rechner" | "chart";

export function HeroSection() {
  const [activeView, setActiveView] = useState<ViewType>("default");

  // Rechner State
  const [darlehensbetrag, setDarlehensbetrag] = useState<string>("300000");
  const [zinssatz, setZinssatz] = useState<string>("3.5");
  const [laufzeit, setLaufzeit] = useState<string>("30");
  const [anfangsTilgung, setAnfangsTilgung] = useState<string>("2.0");

  // Chart Daten
  const zinsdaten10Jahre = [
    { datum: "Apr 25", zins: 3.5 },
    { datum: "Jul 25", zins: 3.35 },
    { datum: "Okt 25", zins: 3.7 },
    { datum: "Jan 26", zins: 3.9 },
  ];

  // Rechner Berechnungen
  const darlehen = parseFloat(darlehensbetrag) || 0;
  const zins = parseFloat(zinssatz) || 0;
  const jahre = parseInt(laufzeit) || 0;
  const tilgung = parseFloat(anfangsTilgung) || 0;

  const monatlicherZinssatz = zins / 100 / 12;
  const monatlicheTilgung = tilgung / 100 / 12;
  const monatlicheRate =
    darlehen > 0 && zins > 0 && jahre > 0 && tilgung > 0
      ? darlehen * (monatlicherZinssatz + monatlicheTilgung)
      : 0;

  const gesamtZinsen = monatlicheRate * jahre * 12 - darlehen;
  const gesamtKosten = darlehen + gesamtZinsen;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="font-semibold mb-1">{label}</p>
          <p className="text-sm text-targo-blue">
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/targohyp-baufinanzierung.jpg)" }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 py-16 lg:py-24">
        <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 lg:p-12 min-h-[500px] flex flex-col">
          {/* Tags */}
          <div className="flex flex-wrap gap-0 mb-6">
            <button
              onClick={() => setActiveView("default")}
              className={`text-sm font-medium pb-1 mr-4 transition-colors ${
                activeView === "default"
                  ? "text-targo-blue border-b-2 border-targo-blue"
                  : "text-gray-700 hover:text-targo-blue"
              }`}
            >
              Finanzierung
            </button>
            <button
              onClick={() => setActiveView("rechner")}
              className={`text-sm font-medium pb-1 mr-4 transition-colors ${
                activeView === "rechner"
                  ? "text-targo-blue border-b-2 border-targo-blue"
                  : "text-gray-700 hover:text-targo-blue"
              }`}
            >
              Rechner
            </button>
            <button
              onClick={() => setActiveView("chart")}
              className={`text-sm font-medium pb-1 transition-colors ${
                activeView === "chart"
                  ? "text-targo-blue border-b-2 border-targo-blue"
                  : "text-gray-700 hover:text-targo-blue"
              }`}
            >
              Zinsentwicklung
            </button>
          </div>

          {/* Content Area with fixed height */}
          <div className="flex-1 flex flex-col min-h-[400px]">
            {/* Default View */}
            {activeView === "default" && (
              <div className="flex-1 flex flex-col">
                {/* Headline */}
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  IHR FINANZIERUNGSPARTER FÜR BAU UND IMMOBILIEN
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl">
                  Finden Sie die passende Baufinanzierung für Ihr Vorhaben. Mit
                  unseren Rechnern, umfassenden Informationen und professioneller
                  Beratung machen wir Ihre Immobilienfinanzierung einfach und
                  transparent.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mt-auto">
                  <Button
                    className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                    asChild
                  >
                    <Link href="/finanzierungsanfrage">
                      Jetzt von unsere Experten beraten lassen
                    </Link>
                  </Button>
                  <div className="flex-shrink-0 sm:ml-auto sm:-mt-8">
                    <Image
                      src="/trustsiegel.webp"
                      alt="Trustsiegel"
                      width={150}
                      height={75}
                      className="h-auto w-auto max-w-[150px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Rechner View */}
            {activeView === "rechner" && (
              <div className="space-y-6 flex-1 flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Baufinanzierungsrechner
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Eingabeformular */}
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

                {/* Ergebnisse */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Ihre Finanzierung</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-700">Monatliche Rate</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatCurrency(monatlicheRate)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-700">Gesamtzinsen</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {formatCurrency(gesamtZinsen)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Gesamtkosten</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {formatCurrency(gesamtKosten)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* Chart View */}
            {activeView === "chart" && (
              <div className="space-y-6 flex-1 flex flex-col">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Zinsentwicklung Baufinanzierung
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6 flex-1 flex flex-col">
                  <div className="w-full h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={zinsdaten10Jahre}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                          dataKey="datum"
                          stroke="#6b7280"
                          style={{ fontSize: "12px" }}
                        />
                        <YAxis
                          stroke="#6b7280"
                          style={{ fontSize: "12px" }}
                          domain={[3.3, 3.95]}
                          tickFormatter={(value) => `${value.toFixed(2)}%`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                          type="monotone"
                          dataKey="zins"
                          stroke="#14b8a6"
                          strokeWidth={3}
                          dot={{ r: 5, fill: "#14b8a6" }}
                          activeDot={{ r: 7 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Sollzinsbindung: 10 Jahre
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
