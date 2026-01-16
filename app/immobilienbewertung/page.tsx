"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";

type FormData = {
  // Schritt 1: Immobiliendaten
  propertyType: string;
  constructionYear: string;
  squareMeters: string;
  plotArea: string;
  energyEfficiencyClass: string;
  location: string;
  // Schritt 2: Weitere Details
  isRenovated: string;
  renovationDate: string;
  hasPhotovoltaik: string;
  heatingType: string;
  // Schritt 3: Persönliche Daten
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
};

const energyEfficiencyClasses = [
  "A+",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];

export default function ImmobilienbewertungPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    propertyType: "",
    constructionYear: "",
    squareMeters: "",
    plotArea: "",
    energyEfficiencyClass: "",
    location: "",
    isRenovated: "",
    renovationDate: "",
    hasPhotovoltaik: "",
    heatingType: "",
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

  const totalSteps = 3;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const isStepValid = (step: number): boolean => {
    if (step === 1) {
      return (
        !!formData.propertyType &&
        !!formData.constructionYear &&
        !!formData.squareMeters &&
        !!formData.energyEfficiencyClass &&
        !!formData.location
      );
    }
    if (step === 2) {
      // Schritt 2 ist gültig, wenn alle Felder ausgefüllt sind
      // Wenn saniert = ja, dann muss auch das Datum angegeben werden
      const isValid = !!formData.isRenovated && 
                      !!formData.hasPhotovoltaik && 
                      !!formData.heatingType;
      
      if (formData.isRenovated === "ja" && !formData.renovationDate) {
        return false;
      }
      
      return isValid;
    }
    if (step === 3) {
      return (
        !!formData.firstName &&
        !!formData.lastName &&
        !!formData.email
      );
    }
    return false;
  };

  const handleNext = () => {
    if (currentStep < totalSteps && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
      setError("");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid(3)) {
      setError("Bitte füllen Sie alle Felder aus.");
      return;
    }

    // Validierung: Baujahr sollte zwischen 1800 und aktuelles Jahr sein
    const currentYear = new Date().getFullYear();
    const constructionYear = parseInt(formData.constructionYear);
    if (
      isNaN(constructionYear) ||
      constructionYear < 1800 ||
      constructionYear > currentYear
    ) {
      setError(`Bitte geben Sie ein gültiges Baujahr zwischen 1800 und ${currentYear} ein.`);
      return;
    }

    // Validierung: Quadratmeter sollte positiv sein
    const squareMeters = parseFloat(formData.squareMeters);
    if (isNaN(squareMeters) || squareMeters <= 0) {
      setError("Bitte geben Sie eine gültige Anzahl von Quadratmetern ein.");
      return;
    }

    // Validierung: E-Mail-Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/immobilienbewertung", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({
          propertyType: formData.propertyType,
          constructionYear: constructionYear,
          squareMeters: squareMeters,
          plotArea: formData.plotArea ? parseFloat(formData.plotArea) : null,
          energyEfficiencyClass: formData.energyEfficiencyClass,
          location: formData.location,
          isRenovated: formData.isRenovated,
          renovationDate: formData.renovationDate || null,
          hasPhotovoltaik: formData.hasPhotovoltaik,
          heatingType: formData.heatingType,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email.toLowerCase(),
          userType: formData.userType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Fehler beim Speichern der Bewertung");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Fehler:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-[722px]">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Vielen Dank für Ihre Anfrage!
            </h2>
            <p className="text-gray-700 mb-6">
              Wir haben Ihre Immobilienbewertungsanfrage erhalten und werden uns
              in Kürze bei Ihnen melden.
            </p>
            <Button
              asChild
              className="bg-[#bb133e] hover:bg-[#a01135] text-white"
            >
              <a href="/">Zur Startseite</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-[722px]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[rgb(0,47,95)]">
            Immobilienbewertung
          </h1>
          <p className="text-lg text-gray-700">
            Lassen Sie Ihre Immobilie kostenlos bewerten. Geben Sie einfach die
            wichtigsten Daten ein und wir melden uns bei Ihnen.
          </p>
        </div>

        {/* Progress Bar */}
        {currentStep <= totalSteps && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Schritt {currentStep} von {totalSteps}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / totalSteps) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#bb133e] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Immobiliendaten</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                {/* Immobilienart */}
                <div>
                  <label 
                    htmlFor="propertyType"
                    className="block text-sm font-medium mb-2"
                  >
                    Art der Immobilie *
                  </label>
                  <select
                    id="propertyType"
                    value={formData.propertyType}
                    onChange={(e) =>
                      updateFormData("propertyType", e.target.value)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Bitte wählen Sie</option>
                    <option value="Haus">Haus</option>
                    <option value="Wohnung">Wohnung</option>
                    <option value="Gewerbeimmobilie">Gewerbeimmobilie</option>
                  </select>
                </div>

                {/* Baujahr */}
                <div>
                  <label 
                    htmlFor="constructionYear"
                    className="block text-sm font-medium mb-2"
                  >
                    Baujahr *
                  </label>
                  <Input
                    id="constructionYear"
                    type="number"
                    value={formData.constructionYear}
                    onChange={(e) =>
                      updateFormData("constructionYear", e.target.value)
                    }
                    placeholder="z.B. 1995"
                    min="1800"
                    max={new Date().getFullYear()}
                    required
                  />
                </div>

                {/* Quadratmeter Wohnfläche */}
                <div>
                  <label 
                    htmlFor="squareMeters"
                    className="block text-sm font-medium mb-2"
                  >
                    Anzahl der Quadratmeter (Wohnfläche) *
                  </label>
                  <Input
                    id="squareMeters"
                    type="number"
                    value={formData.squareMeters}
                    onChange={(e) => updateFormData("squareMeters", e.target.value)}
                    placeholder="z.B. 120"
                    min="1"
                    step="0.01"
                    required
                  />
                </div>

                {/* Quadratmeter Grundstück */}
                <div>
                  <label 
                    htmlFor="plotArea"
                    className="block text-sm font-medium mb-2"
                  >
                    Anzahl Quadratmeter Grundstück
                  </label>
                  <Input
                    id="plotArea"
                    type="number"
                    value={formData.plotArea}
                    onChange={(e) => updateFormData("plotArea", e.target.value)}
                    placeholder="z.B. 500"
                    min="0"
                    step="0.01"
                  />
                </div>

                {/* Energieeffizienzklasse */}
                <div>
                  <label 
                    htmlFor="energyEfficiencyClass"
                    className="block text-sm font-medium mb-2"
                  >
                    Energieeffizienzklasse *
                  </label>
                  <select
                    id="energyEfficiencyClass"
                    value={formData.energyEfficiencyClass}
                    onChange={(e) =>
                      updateFormData("energyEfficiencyClass", e.target.value)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Bitte wählen Sie eine Energieeffizienzklasse</option>
                    {energyEfficiencyClasses.map((eec) => (
                      <option key={eec} value={eec}>
                        {eec}
                      </option>
                    ))}
                    <option value="unbekannt">unbekannt</option>
                  </select>
                </div>

                {/* Standort */}
                <div>
                  <label 
                    htmlFor="location"
                    className="block text-sm font-medium mb-2"
                  >
                    Standort *
                  </label>
                  <Input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData("location", e.target.value)}
                    placeholder="z.B. München oder 80331 München"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Weitere Immobiliendetails</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                {/* Sanierung */}
                <div>
                  <label
                    htmlFor="isRenovated"
                    className="block text-sm font-medium mb-2"
                  >
                    Ist die Immobilie bereits saniert? *
                  </label>
                  <select
                    id="isRenovated"
                    value={formData.isRenovated}
                    onChange={(e) => updateFormData("isRenovated", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Bitte wählen Sie</option>
                    <option value="ja">Ja</option>
                    <option value="nein">Nein</option>
                    <option value="unbekannt">unbekannt</option>
                  </select>
                </div>

                {/* Photovoltaik */}
                <div>
                  <label
                    htmlFor="hasPhotovoltaik"
                    className="block text-sm font-medium mb-2"
                  >
                    Wurde Photovoltaik umgesetzt? *
                  </label>
                  <select
                    id="hasPhotovoltaik"
                    value={formData.hasPhotovoltaik}
                    onChange={(e) => updateFormData("hasPhotovoltaik", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Bitte wählen Sie</option>
                    <option value="ja">Ja</option>
                    <option value="nein">Nein</option>
                    <option value="unbekannt">unbekannt</option>
                  </select>
                </div>

                {/* Sanierungsdatum - nur anzeigen wenn "ja" gewählt */}
                {formData.isRenovated === "ja" && (
                  <div>
                    <label
                      htmlFor="renovationDate"
                      className="block text-sm font-medium mb-2"
                    >
                      Wann wurde saniert? *
                    </label>
                    <Input
                      id="renovationDate"
                      type="date"
                      value={formData.renovationDate}
                      onChange={(e) => updateFormData("renovationDate", e.target.value)}
                      max={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                )}

                {/* Heizung */}
                <div className={formData.isRenovated === "ja" ? "" : "md:col-span-2"}>
                  <label
                    htmlFor="heatingType"
                    className="block text-sm font-medium mb-2"
                  >
                    Art der Heizung *
                  </label>
                  <select
                    id="heatingType"
                    value={formData.heatingType}
                    onChange={(e) => updateFormData("heatingType", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Bitte wählen Sie</option>
                    <option value="Gas">Gas</option>
                    <option value="Öl">Öl</option>
                    <option value="Wärmepumpe">Wärmepumpe</option>
                    <option value="unbekannt">unbekannt</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Ihre Kontaktdaten</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    Vorname *
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    placeholder="Max"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Nachname *
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    placeholder="Mustermann"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-Mail-Adresse *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="max.mustermann@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="userType"
                    className="block text-sm font-medium mb-2"
                  >
                    Ich bin *
                  </label>
                  <select
                    id="userType"
                    value={formData.userType}
                    onChange={(e) => updateFormData("userType", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Bitte wählen Sie</option>
                    <option value="Käufer">Käufer</option>
                    <option value="Verkäufer">Verkäufer</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mt-6">
              {error}
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep <= totalSteps && (
            <div className="flex justify-between mt-8 pt-8 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep)}
                  className="bg-[#bb133e] hover:bg-[#a01135] text-white flex items-center gap-2"
                >
                  <span className="flex items-center whitespace-nowrap">
                    Weiter
                    <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
                  </span>
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid(currentStep) || isSubmitting}
                  className="bg-[#bb133e] hover:bg-[#a01135] text-white"
                >
                  {isSubmitting ? "Wird gesendet..." : "Bewertung anfragen"}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Warum Immobilienbewertung wichtig ist */}
      <section className="w-full bg-gray-50 py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-[rgb(0,47,95)]">
              Warum eine professionelle Immobilienbewertung so wichtig ist
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Für Verkäufer */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#bb133e] mb-4">
                  Für Verkäufer
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Den richtigen Preis finden</h4>
                    <p className="text-sm leading-relaxed">
                      Eine professionelle Bewertung hilft Ihnen, den realistischen Marktwert Ihrer Immobilie zu ermitteln. So vermeiden Sie, dass Sie zu niedrig verkaufen oder durch überhöhte Preise potenzielle Käufer abschrecken.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Verhandlungsstärke gewinnen</h4>
                    <p className="text-sm leading-relaxed">
                      Mit einer fundierten Bewertung in der Hand können Sie selbstbewusst verhandeln und Ihre Preisvorstellung sachlich begründen. Das schafft Vertrauen bei Interessenten.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Zeit sparen</h4>
                    <p className="text-sm leading-relaxed">
                      Ein realistischer Preis verkürzt die Verkaufsdauer erheblich. Sie vermeiden langwierige Verhandlungen mit Käufern, die unrealistische Erwartungen haben.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rechtssicherheit</h4>
                    <p className="text-sm leading-relaxed">
                      Eine professionelle Bewertung schützt Sie vor rechtlichen Risiken und kann bei Streitigkeiten als objektive Grundlage dienen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Für Käufer */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#bb133e] mb-4">
                  Für Käufer
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Überzahlung vermeiden</h4>
                    <p className="text-sm leading-relaxed">
                      Eine unabhängige Bewertung zeigt Ihnen, ob der geforderte Preis angemessen ist. So schützen Sie sich davor, zu viel für eine Immobilie zu bezahlen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Verhandlungsbasis schaffen</h4>
                    <p className="text-sm leading-relaxed">
                      Mit einer professionellen Bewertung haben Sie fundierte Argumente für Preisverhandlungen. Sie können sachlich begründen, warum ein Preis zu hoch ist.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Finanzierung absichern</h4>
                    <p className="text-sm leading-relaxed">
                      Banken verlangen oft eine unabhängige Bewertung für die Kreditvergabe. Eine professionelle Bewertung erleichtert die Finanzierung und kann bessere Konditionen ermöglichen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Investitionssicherheit</h4>
                    <p className="text-sm leading-relaxed">
                      Besonders bei Kapitalanlagen ist eine fundierte Bewertung entscheidend. Sie hilft Ihnen, die Rentabilität zu beurteilen und fundierte Investitionsentscheidungen zu treffen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zusammenfassung */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                <strong>Eine professionelle Immobilienbewertung ist für beide Seiten unverzichtbar:</strong> Sie schafft Transparenz, 
                ermöglicht faire Verhandlungen und gibt allen Beteiligten die Sicherheit, eine fundierte Entscheidung zu treffen. 
                Unsere Experten berücksichtigen dabei nicht nur die objektiven Daten wie Baujahr, Größe und Energieeffizienz, sondern 
                auch die lokalen Marktgegebenheiten, die Lage und den Zustand der Immobilie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

