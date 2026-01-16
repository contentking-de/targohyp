"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Vielen Dank! Sie haben sich erfolgreich für den Newsletter angemeldet.");
        setEmail("");
        setAgreed(false);
      } else {
        setStatus("error");
        setMessage(data.error || "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <div className="w-full bg-gray-50 mt-8 -mx-4 px-4 py-6 lg:py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-targo-blue/10 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-targo-blue" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
          <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gray-900">
            Bleiben Sie informiert
          </h3>
          <p className="text-gray-700 mb-4">
            Abonnieren Sie unseren Newsletter und erhalten Sie automatisch neue Ratgeber-Artikel und Tipps zur Baufinanzierung.
          </p>
          
          {status === "success" ? (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="flex-1 h-12"
              />
              <Button
                type="submit"
                disabled={status === "loading" || !agreed}
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-6 py-6 h-12 font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  "Wird abonniert..."
                ) : (
                  <>
                    Abonnieren
                    <ArrowRight className="ml-2 w-4 h-4 inline" />
                  </>
                )}
              </Button>
            </form>
          )}

          {status === "error" && (
            <div className="mt-3 flex items-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{message}</p>
            </div>
          )}

          <div className="flex items-start gap-3 mt-4">
            <input
              type="checkbox"
              id="newsletter-agreement-checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 text-[#bb133e] border-gray-300 rounded focus:ring-[#bb133e] focus:ring-2 cursor-pointer"
              required
            />
            <label htmlFor="newsletter-agreement-checkbox" className="text-xs text-gray-500 cursor-pointer">
              Mit der Anmeldung stimmen Sie zu, dass wir Ihnen regelmäßig Newsletter mit neuen Ratgeber-Artikeln zusenden. 
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. Sie können sich jederzeit abmelden.
            </label>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
