import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Login - Kundenkonto | Targohyp",
  description: "Melden Sie sich sicher in Ihrem Targohyp-Kundenkonto an. Verwalten Sie Ihre Baufinanzierung, Rechner-Ergebnisse und Anfragen bequem online.",
};

export default function SignInPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
              Anmelden
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              Melden Sie sich in Ihrem Kundenkonto an, um auf Ihre gespeicherten Berechnungen, Dokumente und persönlichen Informationen zuzugreifen.
            </p>

            {/* Login Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    E-Mail-Adresse *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      required
                      className="pl-10 rounded-lg"
                      placeholder="ihre.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold mb-2">
                    Passwort *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      type="password"
                      required
                      className="pl-10 rounded-lg"
                      placeholder="Ihr Passwort"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-700">
                      Angemeldet bleiben
                    </label>
                  </div>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-targo-blue hover:underline"
                  >
                    Passwort vergessen?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <span className="flex items-center whitespace-nowrap">
                    Anmelden
                    <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                  </span>
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700 text-center mb-4">
                  Noch kein Konto?
                </p>
                <Button
                  className="w-full bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
                  asChild
                >
                  <Link href="/auth/register">
                    Jetzt registrieren
                  </Link>
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Sie haben Fragen?{" "}
                <Link href="/kontakt" className="text-targo-blue hover:underline">
                  Kontaktieren Sie uns
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

