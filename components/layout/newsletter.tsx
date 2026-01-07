"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
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
        setMessage("Vielen Dank! Du hast dich erfolgreich für den Zinsletter angemeldet.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
    }
  };

  return (
    <section 
      className="w-full py-16 lg:py-20"
      style={{ 
        background: 'linear-gradient(to right, #003366, #0066cc)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Zinsletter abonnieren
          </h2>

          {/* Description */}
          <p className="text-lg text-white mb-8 leading-relaxed opacity-90">
            Bleibe immer auf dem neuesten Stand in Sachen Bauzinsen. Erhalte regelmäßig
            aktuelle Informationen zu Zinssätzen, Marktentwicklungen und Tipps für deine
            Baufinanzierung.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="h-12 text-base bg-white border-0 focus-visible:ring-2 focus-visible:ring-white/50"
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading"}
              className="h-12 rounded-full px-8 font-semibold whitespace-nowrap"
              style={{
                backgroundColor: '#ffffff',
                color: '#003366'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              {status === "loading" ? "Wird abonniert..." : "Jetzt abonnieren"}
            </Button>
          </form>

          {/* Status Messages */}
          {status === "success" && (
            <div className="mt-6 flex items-center justify-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <p className="text-sm">{message}</p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 flex items-center justify-center gap-2 text-white">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm">{message}</p>
            </div>
          )}

          {/* Privacy Note */}
          <p className="mt-6 text-sm text-white opacity-80">
            Mit der Anmeldung erklärst du dich mit unserer{" "}
            <a href="/datenschutz" className="underline hover:text-white">
              Datenschutzerklärung
            </a>{" "}
            einverstanden. Du kannst dich jederzeit wieder abmelden.
          </p>
        </div>
      </div>
    </section>
  );
}

