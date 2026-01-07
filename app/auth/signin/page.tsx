"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const result = await signIn("email", {
        email,
        redirect: false,
      });

      if (result?.error) {
        setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
        setLoading(false);
      } else {
        setSuccess(true);
        setLoading(false);
        setEmail("");
      }
    } catch (error) {
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
      setLoading(false);
    }
  };

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
              Melden Sie sich mit einem Magic Link an. Wir senden Ihnen einen Anmeldelink per E-Mail zu.
            </p>

            {/* Login Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2 text-green-800">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">E-Mail versendet!</p>
                    <p className="text-sm">
                      Wir haben Ihnen einen Anmeldelink an Ihre E-Mail-Adresse gesendet. 
                      Bitte prüfen Sie Ihr Postfach und klicken Sie auf den Link, um sich anzumelden.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading || success}
                      className="pl-10 rounded-lg"
                      placeholder="ihre.email@example.com"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading || success}
                  className="w-full bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center whitespace-nowrap">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : success ? (
                      <>
                        <CheckCircle2 className="mr-2 w-5 h-5" />
                        E-Mail gesendet
                      </>
                    ) : (
                      <>
                        Magic Link anfordern
                        <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                      </>
                    )}
                  </span>
                </Button>
              </form>

              {success && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    onClick={() => {
                      setSuccess(false);
                      setEmail("");
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Neue E-Mail anfordern
                  </Button>
                </div>
              )}

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Der Magic Link ist 24 Stunden gültig.{" "}
                  <Link href="/kontakt" className="text-targo-blue hover:underline">
                    Haben Sie Fragen?
                  </Link>
                </p>
              </div>
            </div>

            {/* Development Info */}
            {process.env.NODE_ENV === "development" && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Development-Modus:</strong> Falls RESEND_API_KEY nicht gesetzt ist, 
                  wird der Magic Link in der Konsole ausgegeben.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
