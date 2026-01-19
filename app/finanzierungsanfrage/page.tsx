"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type FormData = {
  // Schritt 1
  financingType: string;
  // Schritt 2
  propertyType: string;
  // Schritt 3
  usage: string;
  // Schritt 4
  step: string;
  // Schritt 5
  postalCode: string;
  city: string;
  // Schritt 6
  purchasePrice: string;
  equity: string;
  // Schritt 7
  employmentType: string;
  // Schritt 8
  income: string;
  // Schritt 9
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  addressPostalCode: string;
  addressCity: string;
};

const financingTypes = [
  "Kauf Bestandsimmobilie",
  "Anschlussfinanzierung",
  "Eigenes Bauvorhaben",
  "Kauf Neubau",
  "Umbau/Modernisierung",
];

const propertyTypes = [
  "Einfamilienhaus",
  "Eigentumswohnung",
  "Doppelhaushälfte",
  "Reihenmittelhaus",
  "Zweifamilienhaus",
  "Mehrfamilienhaus",
  "Reiheneckhaus",
  "Nur Grundstück",
];

const usageTypes = [
  "Selbst genutzt",
  "Teilweise vermietet",
  "Vermietet",
];

const stepTypes = [
  "Auf Immobiliensuche",
  "Immobilie gefunden",
  "Immobilie besichtigt",
  "Mit Verkäufer geeinigt",
];

const employmentTypes = [
  "Angestellte/r",
  "Beamte/r",
  "Arbeiter/in",
  "Freiberufler/in",
  "Rentner/in",
  "In Elternzeit",
  "Selbstständige/r (bilanzierend)",
  "Geschäftsf. Gesellschafter/in",
  "Selbstständige/r (nicht bil.)",
  "Soldat/in",
  "Privatier/e",
  "Hausmann/-frau",
  "Student/in",
  "Arbeitslose/r",
  "Vorstand/Vorständin",
  "Geringfügig Beschäftigte/r",
];

export default function FinanzierungsanfragePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [targohomeAccount, setTargohomeAccount] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    financingType: "",
    propertyType: "",
    usage: "",
    step: "",
    postalCode: "",
    city: "",
    purchasePrice: "",
    equity: "",
    employmentType: "",
    income: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    addressPostalCode: "",
    addressCity: "",
  });

  const totalSteps = 9;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/finanzierungsanfrage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          consentAccepted,
          targohomeAccount,
        }),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Speichern der Anfrage");
      }

      // Erfolg - zur Bestätigungsseite oder nächsten Schritt
      setCurrentStep(totalSteps + 1);
    } catch (error) {
      console.error("Fehler:", error);
      alert("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.financingType;
      case 2:
        return !!formData.propertyType;
      case 3:
        return !!formData.usage;
      case 4:
        return !!formData.step;
      case 5:
        return !!formData.postalCode && !!formData.city;
      case 6:
        return !!formData.purchasePrice && !!formData.equity;
      case 7:
        return !!formData.employmentType;
      case 8:
        return !!formData.income;
      case 9:
        return (
          !!formData.firstName &&
          !!formData.lastName &&
          !!formData.email &&
          !!formData.phone &&
          !!formData.street &&
          !!formData.addressPostalCode &&
          !!formData.addressCity &&
          consentAccepted
        );
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Um was geht es?</h2>
            <div className="space-y-3">
              {financingTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateFormData("financingType", type)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    formData.financingType === type
                      ? "border-[#bb133e] bg-[#bb133e]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{type}</span>
                    {formData.financingType === type && (
                      <Check className="w-5 h-5 text-[#bb133e]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Um welche Art Immobilie handelt es sich?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateFormData("propertyType", type)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.propertyType === type
                      ? "border-[#bb133e] bg-[#bb133e]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{type}</span>
                    {formData.propertyType === type && (
                      <Check className="w-5 h-5 text-[#bb133e]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Wie möchten Sie Ihre Immobilie nutzen?
            </h2>
            <div className="space-y-3">
              {usageTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateFormData("usage", type)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    formData.usage === type
                      ? "border-[#bb133e] bg-[#bb133e]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{type}</span>
                    {formData.usage === type && (
                      <Check className="w-5 h-5 text-[#bb133e]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              In welchem Schritt befinden Sie sich?
            </h2>
            <div className="space-y-3">
              {stepTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateFormData("step", type)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    formData.step === type
                      ? "border-[#bb133e] bg-[#bb133e]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{type}</span>
                    {formData.step === type && (
                      <Check className="w-5 h-5 text-[#bb133e]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Wo möchten Sie finanzieren?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Postleitzahl *
                </label>
                <Input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => updateFormData("postalCode", e.target.value)}
                  placeholder="12345"
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ort *</label>
                <Input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  placeholder="Musterstadt"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Welchen Finanzierungsbedarf haben Sie?
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Kaufpreis / Baupreis (€) *
                </label>
                <Input
                  type="number"
                  value={formData.purchasePrice}
                  onChange={(e) =>
                    updateFormData("purchasePrice", e.target.value)
                  }
                  placeholder="500.000"
                  min="0"
                  step="1000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Eigenkapital (€) *
                </label>
                <Input
                  type="number"
                  value={formData.equity}
                  onChange={(e) => updateFormData("equity", e.target.value)}
                  placeholder="100.000"
                  min="0"
                  step="1000"
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Was ist Ihr Beschäftigungsverhältnis?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto">
              {employmentTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateFormData("employmentType", type)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.employmentType === type
                      ? "border-[#bb133e] bg-[#bb133e]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{type}</span>
                    {formData.employmentType === type && (
                      <Check className="w-5 h-5 text-[#bb133e]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Wie hoch ist Ihr Einkommen?
            </h2>
            <div>
              <label className="block text-sm font-medium mb-2">
                Monatliches Nettoeinkommen (€) *
              </label>
              <Input
                type="number"
                value={formData.income}
                onChange={(e) => updateFormData("income", e.target.value)}
                placeholder="3000"
                min="0"
                step="100"
              />
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Ihre persönlichen Daten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Vorname *
                </label>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Max"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nachname *
                </label>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Mustermann"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  E-Mail-Adresse *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="max.mustermann@example.com"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Telefonnummer *
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="+49 123 456789"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Straße und Hausnummer *
                </label>
                <Input
                  type="text"
                  value={formData.street}
                  onChange={(e) => updateFormData("street", e.target.value)}
                  placeholder="Musterstraße 123"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Postleitzahl *
                </label>
                <Input
                  type="text"
                  value={formData.addressPostalCode}
                  onChange={(e) =>
                    updateFormData("addressPostalCode", e.target.value)
                  }
                  placeholder="12345"
                  maxLength={5}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ort *</label>
                <Input
                  type="text"
                  value={formData.addressCity}
                  onChange={(e) => updateFormData("addressCity", e.target.value)}
                  placeholder="Musterstadt"
                  required
                />
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consentAccepted}
                  onChange={(e) => setConsentAccepted(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#bb133e] border-gray-300 rounded focus:ring-[#bb133e] focus:ring-2"
                  required
                />
                <span className="text-sm text-gray-700">
                  Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und verwendet werden. 
                  Weitere Informationen finden Sie in unserer{" "}
                  <a href="/datenschutz" className="text-[#bb133e] hover:underline" target="_blank" rel="noopener noreferrer">
                    Datenschutzerklärung
                  </a>
                  . *
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={targohomeAccount}
                  onChange={(e) => setTargohomeAccount(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#bb133e] border-gray-300 rounded focus:ring-[#bb133e] focus:ring-2"
                />
                <span className="text-sm text-gray-700">
                  Ja, ich möchte direkt einen kostenlosen Nutzeraccount bei TargoHome eröffnen, in dem ich meine Unterlagen sicher hochladen kann.
                </span>
              </label>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6 text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Vielen Dank für Ihre Anfrage!
            </h2>
            <p className="text-gray-700 mb-6">
              Wir haben Ihre Finanzierungsanfrage erhalten und werden uns in
              Kürze bei Ihnen melden.
            </p>
            <Button
              asChild
              className="bg-[#bb133e] hover:bg-[#a01135] text-white"
            >
              <a href="/">Zur Startseite</a>
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
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
          {renderStep()}

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
                  {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

