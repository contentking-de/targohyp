"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  topic: string;
  message: string;
};

const timeSlots = [
  "08:00 - 10:00 Uhr",
  "10:00 - 12:00 Uhr",
  "12:00 - 14:00 Uhr",
  "14:00 - 16:00 Uhr",
  "16:00 - 18:00 Uhr",
];

const topics = [
  "Baufinanzierung",
  "Anschlussfinanzierung",
  "Immobilienbewertung",
  "Kapitalanlage",
  "Allgemeine Beratung",
  "Sonstiges",
];

export default function TerminVereinbarenPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const isFormValid = (): boolean => {
    return (
      !!formData.firstName &&
      !!formData.lastName &&
      !!formData.email &&
      !!formData.phone &&
      !!formData.preferredDate &&
      !!formData.preferredTime
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    // Validierung: E-Mail-Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    // Validierung: Datum sollte in der Zukunft liegen
    const selectedDate = new Date(formData.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setError("Bitte wählen Sie ein Datum in der Zukunft.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/termin-vereinbaren", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email.toLowerCase(),
          phone: formData.phone,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          topic: formData.topic || null,
          message: formData.message || null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Fehler beim Speichern der Terminanfrage");
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

  // Mindestdatum: heute
  const minDate = new Date().toISOString().split("T")[0];

  if (isSubmitted) {
    return (
      <div className="w-full min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Terminanfrage erfolgreich übermittelt!
            </h2>
            <p className="text-gray-700 mb-6">
              Vielen Dank für Ihre Terminanfrage. Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden, um den Termin zu bestätigen.
            </p>
            <div className="space-y-2 mb-6 text-left max-w-md mx-auto bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Ihre Angaben:</strong>
              </p>
              <p className="text-sm text-gray-700">
                <strong>Name:</strong> {formData.firstName} {formData.lastName}
              </p>
              <p className="text-sm text-gray-700">
                <strong>E-Mail:</strong> {formData.email}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Telefon:</strong> {formData.phone}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Gewünschtes Datum:</strong>{" "}
                {new Date(formData.preferredDate).toLocaleDateString("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Gewünschte Uhrzeit:</strong> {formData.preferredTime}
              </p>
            </div>
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
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[rgb(0,47,95)]">
            Termin vereinbaren
          </h1>
          <p className="text-lg text-gray-700">
            Vereinbaren Sie einen persönlichen Beratungstermin mit einem unserer
            Experten. Füllen Sie einfach das Formular aus und wir melden uns bei Ihnen.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Persönliche Daten */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[rgb(0,47,95)] flex items-center gap-2">
                <User className="w-5 h-5" />
                Persönliche Daten
              </h2>
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
                    onChange={(e) =>
                      updateFormData("firstName", e.target.value)
                    }
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
                    onChange={(e) =>
                      updateFormData("lastName", e.target.value)
                    }
                    placeholder="Mustermann"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
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
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Telefonnummer *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="+49 (0) 221 123 456 78"
                  required
                />
              </div>
            </div>

            {/* Termindetails */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[rgb(0,47,95)] flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Termindetails
              </h2>
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-medium mb-2"
                >
                  Gewünschtes Datum *
                </label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    updateFormData("preferredDate", e.target.value)
                  }
                  min={minDate}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-medium mb-2 flex items-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  Gewünschte Uhrzeit *
                </label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) =>
                    updateFormData("preferredTime", e.target.value)
                  }
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Bitte wählen Sie eine Uhrzeit</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium mb-2"
                >
                  Thema / Beratungsanlass
                </label>
                <select
                  id="topic"
                  value={formData.topic}
                  onChange={(e) => updateFormData("topic", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Bitte wählen Sie ein Thema (optional)</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Zusätzliche Informationen */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[rgb(0,47,95)] flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Zusätzliche Informationen
              </h2>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Nachricht (optional)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Haben Sie bereits eine Immobilie im Auge? Gibt es etwas Besonderes, das wir wissen sollten?"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="w-full bg-[#bb133e] hover:bg-[#a01135] text-white py-6 text-lg font-semibold"
              >
                {isSubmitting ? "Wird gesendet..." : "Termin anfragen"}
              </Button>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <section className="w-full bg-gray-50 py-16 mt-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-[rgb(0,47,95)]">
                Warum eine persönliche Beratung?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#bb133e] mb-4">
                    Individuelle Lösungen
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Jede Finanzierungssituation ist einzigartig. In einem persönlichen Gespräch können wir gemeinsam die beste Lösung für Ihre individuellen Bedürfnisse finden.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#bb133e] mb-4">
                    Kompetente Beratung
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unsere Experten verfügen über jahrelange Erfahrung und kennen den Markt genau. Profitieren Sie von unserem Wissen und unserer Expertise.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#bb133e] mb-4">
                    Zeit für Ihre Fragen
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In einem persönlichen Termin haben Sie die Möglichkeit, alle Ihre Fragen ausführlich zu besprechen und sich umfassend zu informieren.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#bb133e] mb-4">
                    Transparente Kommunikation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir erklären Ihnen alle Details verständlich und transparent. So können Sie fundierte Entscheidungen treffen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
