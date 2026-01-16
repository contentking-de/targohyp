"use client";

import { useEffect, useState } from "react";
import { X, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Prüfe, ob das Popup bereits angezeigt wurde (in dieser Session)
    const shownInSession = sessionStorage.getItem("exitIntentShown");
    if (shownInSession === "true") {
      setHasShown(true);
      return;
    }

    // Exit-Intent erkennen: Maus bewegt sich zum oberen Browserrand
    const handleMouseMove = (e: MouseEvent) => {
      // Wenn die Maus sich zum oberen Rand bewegt (innerhalb der ersten 5 Pixel)
      if (e.clientY <= 5 && !hasShown) {
        setIsVisible(true);
        sessionStorage.setItem("exitIntentShown", "true");
        setHasShown(true);
        // Event-Listener entfernen, da das Popup bereits angezeigt wurde
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };

    // Event-Listener hinzufügen
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    // Reset form after closing
    setTimeout(() => {
      setEmail("");
      setStatus("idle");
      setMessage("");
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/guide-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Vielen Dank! Der Guide wurde an Ihre E-Mail-Adresse gesendet.");
        setEmail("");
        // Popup nach 3 Sekunden automatisch schließen
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setStatus("error");
        setMessage(data.error || "Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-200"
        onClick={handleClose}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 pointer-events-auto relative transition-all duration-200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Schließen-Button */}
          {status !== "success" && (
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Popup schließen"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Inhalt */}
          <div className={status === "success" ? "" : "pr-8"}>
            {status === "success" ? (
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[rgb(0,47,95)] mb-4">
                  Vielen Dank!
                </h2>
                <p className="text-gray-700 mb-2">{message}</p>
                <p className="text-sm text-gray-500 mt-4">
                  Bitte überprüfen Sie Ihr Postfach (auch den Spam-Ordner).
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[rgb(0,47,95)] mb-4">
                  Erstfinanzierer-Guide
                </h2>
                <p className="text-gray-700 mb-6">
                  Noch unsicher bezüglich Ihres Finanzierungs-Vorhabens? Wir haben da was für Sie:
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail-Adresse
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ihre.email@beispiel.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "loading"}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen den kostenlosen Erstfinanzierer-Guide zu.
                    </p>
                    
                    <Button
                      type="submit"
                      disabled={status === "loading" || !email}
                      className="w-full bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-6 py-3 font-bold flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      {status === "loading" ? "Wird gesendet..." : "Guide anfordern"}
                    </Button>
                  </div>

                  {/* Fehlermeldung */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <p>{message}</p>
                    </div>
                  )}

                  {/* Datenschutz-Hinweis */}
                  <p className="text-xs text-gray-500">
                    Mit der Anmeldung erklären Sie sich mit unserer{" "}
                    <a href="/datenschutz" className="underline hover:text-gray-700">
                      Datenschutzerklärung
                    </a>{" "}
                    einverstanden.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
