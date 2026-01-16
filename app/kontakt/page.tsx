import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Kontakt & Beratung - Baufinanzierungsexperten | Targohyp",
  description: "Kontaktieren Sie unsere Experten für Ihre Baufinanzierung. Persönliche Beratung per Telefon, E-Mail oder vor Ort. Wir helfen Ihnen bei allen Fragen zur Immobilienfinanzierung.",
};

export default function KontaktPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Hilfe & Kontakt
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Haben Sie Fragen zur Baufinanzierung? Wir helfen Ihnen gerne weiter. Kontaktieren Sie uns per E-Mail, Telefon oder nutzen Sie unser Kontaktformular.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt-Informationen & Formular */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Kontakt-Informationen */}
            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-targo-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefon</h3>
                    <p className="text-gray-700 mb-2">Mo-Fr: 8:00 - 18:00 Uhr</p>
                    <a
                      href="tel:+4922112345678"
                      className="text-targo-blue hover:underline font-semibold"
                    >
                      +49 (0) 221 123 456 78
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-targo-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-Mail</h3>
                    <p className="text-gray-700 mb-2">Wir antworten innerhalb von 24h</p>
                    <a
                      href="mailto:info@targohyp.de"
                      className="text-targo-blue hover:underline font-semibold"
                    >
                      info@targohyp.de
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-targo-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Adresse</h3>
                    <p className="text-gray-700">
                      TARGOBANK AG<br />
                      Kasernenstraße 10<br />
                      40213 Düsseldorf
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontaktformular */}
            <div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Nachricht senden</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="vorname" className="block text-sm font-semibold mb-2">
                      Vorname *
                    </label>
                    <Input
                      id="vorname"
                      type="text"
                      required
                      className="rounded-lg"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label htmlFor="nachname" className="block text-sm font-semibold mb-2">
                      Nachname *
                    </label>
                    <Input
                      id="nachname"
                      type="text"
                      required
                      className="rounded-lg"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    E-Mail-Adresse *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="rounded-lg"
                    placeholder="max.mustermann@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefon" className="block text-sm font-semibold mb-2">
                    Telefonnummer
                  </label>
                  <Input
                    id="telefon"
                    type="tel"
                    className="rounded-lg"
                    placeholder="+49 (0) 221 123 456 78"
                  />
                </div>

                <div>
                  <label htmlFor="betreff" className="block text-sm font-semibold mb-2">
                    Betreff *
                  </label>
                  <Input
                    id="betreff"
                    type="text"
                    required
                    className="rounded-lg"
                    placeholder="Allgemeine Anfrage"
                  />
                </div>

                <div>
                  <label htmlFor="nachricht" className="block text-sm font-semibold mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="nachricht"
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-targo-blue focus:border-transparent"
                    placeholder="Ihre Nachricht..."
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="datenschutz"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="datenschutz" className="text-sm text-gray-700">
                    Ich habe die <a href="/datenschutz" className="text-targo-blue hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                >
                  Nachricht senden
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Öffnungszeiten */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-targo-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Öffnungszeiten</h2>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Montag - Freitag</span>
                      <span className="font-semibold">8:00 - 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag</span>
                      <span className="font-semibold">9:00 - 14:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sonntag</span>
                      <span className="font-semibold">Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Für dringende Angelegenheiten können Sie uns jederzeit eine E-Mail senden. Wir melden uns schnellstmöglich zurück.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

