"use client";

import { useEffect, useState } from "react";
import { X, Settings, CheckCircle2, Info, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_STORAGE_KEY = "cookie-consent-preferences";
const COOKIE_CONSENT_KEY = "cookie-consent-given";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Immer aktiviert
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Prüfe, ob bereits eine Zustimmung gegeben wurde
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
    setHasConsent(!!consentGiven);
    
    if (!consentGiven) {
      // Zeige Banner nach kurzer Verzögerung
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Lade gespeicherte Präferenzen
      const savedPreferences = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (savedPreferences) {
        try {
          const parsed = JSON.parse(savedPreferences);
          setPreferences(parsed);
        } catch (e) {
          console.error("Fehler beim Laden der Cookie-Präferenzen:", e);
        }
      }
    }
  }, []);

  const openBanner = () => {
    setIsVisible(true);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    savePreferences(preferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    savePreferences(onlyNecessary);
    setIsVisible(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
    setHasConsent(true);
    // Hier könntest du auch Analytics-Skripte basierend auf den Präferenzen laden/entfernen
    applyCookiePreferences(prefs);
  };

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Beispiel: Analytics-Skripte nur laden, wenn erlaubt
    if (prefs.analytics) {
      // Google Analytics oder andere Analytics-Tools hier initialisieren
      console.log("Analytics aktiviert");
    } else {
      // Analytics deaktivieren
      console.log("Analytics deaktiviert");
    }

    if (prefs.marketing) {
      // Marketing-Cookies aktivieren
      console.log("Marketing-Cookies aktiviert");
    } else {
      // Marketing-Cookies deaktivieren
      console.log("Marketing-Cookies deaktiviert");
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Notwendige Cookies können nicht deaktiviert werden
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Floating Cookie Icon */}
      {hasConsent && !isVisible && (
        <button
          onClick={openBanner}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#bb133e] shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#bb133e] focus:ring-offset-2"
          aria-label="Cookie-Einstellungen öffnen"
          title="Cookie-Einstellungen"
        >
          <Cookie className="h-7 w-7 text-white" />
        </button>
      )}

      {/* Cookie Consent Banner */}
      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50 p-4 lg:p-6">
      <div className="mx-auto max-w-4xl rounded-lg border border-gray-200 bg-white shadow-2xl">
        {!showSettings ? (
          // Einfache Ansicht
          <div className="p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-targo-blue/10">
                  <Info className="h-6 w-6 text-targo-blue" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Wir verwenden Cookies
                </h3>
                <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                  Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen, 
                  diese Website und die Nutzererfahrung zu verbessern (Tracking-Cookies). 
                  Sie können selbst entscheiden, ob Sie die Cookies zulassen möchten. 
                  Bitte beachten Sie, dass bei einer Ablehnung womöglich nicht mehr alle Funktionalitäten 
                  der Website zur Verfügung stehen.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-6 py-2 text-sm font-semibold"
                  >
                    Alle akzeptieren
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 py-2 text-sm font-semibold"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Einstellungen
                  </Button>
                  <Button
                    onClick={handleRejectAll}
                    variant="ghost"
                    className="text-gray-600 hover:text-gray-900 rounded-full px-6 py-2 text-sm font-semibold"
                  >
                    Ablehnen
                  </Button>
                  <Link
                    href="/datenschutz"
                    className="text-sm text-targo-blue hover:text-targo-blue/80 underline ml-auto"
                  >
                    Datenschutzerklärung
                  </Link>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          // Detaillierte Einstellungen
          <div className="p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Cookie-Einstellungen
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Zurück"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Notwendige Cookies */}
              <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">
                      Notwendige Cookies
                    </h4>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div className="flex h-6 w-11 items-center rounded-full bg-targo-blue p-1">
                    <div className="h-4 w-4 rounded-full bg-white transition-transform translate-x-5" />
                  </div>
                </div>
              </div>

              {/* Funktionale Cookies */}
              <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">
                      Funktionale Cookies
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference("functional")}
                  className={`ml-4 flex h-6 w-11 flex-shrink-0 items-center rounded-full p-1 transition-colors ${
                    preferences.functional
                      ? "bg-targo-blue"
                      : "bg-gray-300"
                  }`}
                  aria-label="Funktionale Cookies umschalten"
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white transition-transform ${
                      preferences.functional ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">
                      Analytics Cookies
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                    indem Informationen anonym gesammelt und gemeldet werden.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference("analytics")}
                  className={`ml-4 flex h-6 w-11 flex-shrink-0 items-center rounded-full p-1 transition-colors ${
                    preferences.analytics
                      ? "bg-targo-blue"
                      : "bg-gray-300"
                  }`}
                  aria-label="Analytics Cookies umschalten"
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white transition-transform ${
                      preferences.analytics ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">
                      Marketing Cookies
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies werden verwendet, um Besuchern auf Websites relevante Anzeigen und 
                    Marketingkampagnen bereitzustellen.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference("marketing")}
                  className={`ml-4 flex h-6 w-11 flex-shrink-0 items-center rounded-full p-1 transition-colors ${
                    preferences.marketing
                      ? "bg-targo-blue"
                      : "bg-gray-300"
                  }`}
                  aria-label="Marketing Cookies umschalten"
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white transition-transform ${
                      preferences.marketing ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-6">
              <Button
                onClick={handleAcceptSelected}
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-6 py-2 text-sm font-semibold"
              >
                Auswahl speichern
              </Button>
              <Button
                onClick={handleAcceptAll}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 py-2 text-sm font-semibold"
              >
                Alle akzeptieren
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 rounded-full px-6 py-2 text-sm font-semibold"
              >
                Alle ablehnen
              </Button>
              <Link
                href="/datenschutz"
                className="text-sm text-targo-blue hover:text-targo-blue/80 underline ml-auto"
              >
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
      )}
    </>
  );
}
