"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, CheckCircle, AlertCircle } from "lucide-react";

interface ChecklistPdfFormProps {
  checklistType?: string;
}

export function ChecklistPdfForm({ checklistType = "checkliste-sanierung" }: ChecklistPdfFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/checklist-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, checklistType }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Die Checkliste wurde erfolgreich angefordert!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
    }
  };

  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-targo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-targo-blue" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-900">
            Checkliste als PDF erhalten
          </h3>
          <p className="text-gray-700">
            Geben Sie Ihre E-Mail-Adresse ein und erhalten Sie die Checkliste zur Sanierung kostenlos und unverbindlich als PDF per E-Mail.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold whitespace-nowrap"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                "Wird gesendet..."
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2 inline" />
                  PDF anfordern
                </>
              )}
            </Button>
          </div>

          {message && (
            <div
              className={`flex items-start gap-3 p-4 rounded-lg ${
                status === "success"
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              {status === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <p
                className={`text-sm ${
                  status === "success" ? "text-green-800" : "text-red-800"
                }`}
              >
                {message}
              </p>
            </div>
          )}

          <p className="text-xs text-gray-500 text-center">
            Mit der Anforderung stimmen Sie zu, dass wir Ihnen die Checkliste per E-Mail zusenden. 
            Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </form>
      </div>
    </div>
  );
}
