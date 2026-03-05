"use client";

import { useState, useEffect } from "react";
import { X, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2, CheckCircle } from "lucide-react";

interface ArticleReviewButtonProps {
  articleTitle: string;
  articleUrl: string;
}

function getStorageKey(articleUrl: string) {
  return `article-review-approved:${articleUrl}`;
}

export function ArticleReviewButton({ articleTitle, articleUrl }: ArticleReviewButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [contentFeedback, setContentFeedback] = useState("");
  const [structureFeedback, setStructureFeedback] = useState("");
  const [generalNotes, setGeneralNotes] = useState("");
  const [reviewDecision, setReviewDecision] = useState<"revision" | "approved">("revision");
  const [isApproved, setIsApproved] = useState(false);
  const [hasRevisionRequest, setHasRevisionRequest] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(getStorageKey(articleUrl));
    if (stored === "approved") {
      setIsApproved(true);
    } else if (stored === "revision") {
      setHasRevisionRequest(true);
    }
  }, [articleUrl]);

  const resetForm = () => {
    setContentFeedback("");
    setStructureFeedback("");
    setGeneralNotes("");
    setReviewDecision("revision");
    setStatus("idle");
    setMessage("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(resetForm, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/article-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articleTitle,
          articleUrl,
          contentFeedback,
          structureFeedback,
          generalNotes,
          reviewDecision,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (reviewDecision === "approved") {
          localStorage.setItem(getStorageKey(articleUrl), "approved");
          setIsApproved(true);
        } else {
          localStorage.setItem(getStorageKey(articleUrl), "revision");
          setHasRevisionRequest(true);
        }
        setStatus("success");
        setMessage(
          reviewDecision === "approved"
            ? "Freigabe erteilt. Der Artikel wurde als geprüft markiert."
            : data.message || "Review erfolgreich gesendet."
        );
        setTimeout(handleClose, 3000);
      } else {
        setStatus("error");
        setMessage(data.error || "Es ist ein Fehler aufgetreten.");
      }
    } catch {
      setStatus("error");
      setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    }
  };

  const hasContent = reviewDecision === "approved" || contentFeedback.trim() || structureFeedback.trim() || generalNotes.trim();

  if (isApproved) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-green-600 font-semibold">
        <CheckCircle className="w-4 h-4" />
        Freigegeben
      </span>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
          hasRevisionRequest
            ? "text-amber-600 hover:text-amber-700"
            : "text-targo-blue hover:text-targo-blue/80"
        }`}
        aria-label="Artikel reviewen"
      >
        {hasRevisionRequest ? (
          <>
            <AlertCircle className="w-4 h-4" />
            Überarbeitung erbeten
          </>
        ) : (
          <>
            <MessageSquare className="w-4 h-4" />
            Review
          </>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-200"
            onClick={handleClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-xl flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-targo-blue" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Artikel Review</h2>
                    <p className="text-sm text-gray-500 truncate max-w-[280px]">{articleTitle}</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {reviewDecision === "approved" ? "Freigabe erteilt!" : "Review gesendet!"}
                    </h3>
                    <p className="text-gray-600">{message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Review Decision */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Bewertung
                      </label>
                      <div className="flex gap-3">
                        <label
                          className={`flex-1 flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            reviewDecision === "revision"
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="reviewDecision"
                            value="revision"
                            checked={reviewDecision === "revision"}
                            onChange={() => setReviewDecision("revision")}
                            className="accent-amber-500"
                          />
                          <div>
                            <span className="text-sm font-semibold text-gray-900">Überarbeitung erbeten</span>
                            <p className="text-xs text-gray-500 mt-0.5">Änderungen erforderlich</p>
                          </div>
                        </label>
                        <label
                          className={`flex-1 flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            reviewDecision === "approved"
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="reviewDecision"
                            value="approved"
                            checked={reviewDecision === "approved"}
                            onChange={() => setReviewDecision("approved")}
                            className="accent-green-500"
                          />
                          <div>
                            <span className="text-sm font-semibold text-gray-900">Freigabe erteilt</span>
                            <p className="text-xs text-gray-500 mt-0.5">Inhalt ist geprüft & OK</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Feedback fields — only relevant for revision */}
                    {reviewDecision === "revision" && (
                      <>
                        <div>
                          <label htmlFor="content-feedback" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Inhalt / Content
                          </label>
                          <p className="text-xs text-gray-500 mb-2">
                            Feedback zum Inhalt: Ist der Text fachlich korrekt, vollständig und verständlich?
                          </p>
                          <textarea
                            id="content-feedback"
                            rows={3}
                            placeholder="Anmerkungen zum Inhalt..."
                            value={contentFeedback}
                            onChange={(e) => setContentFeedback(e.target.value)}
                            disabled={status === "loading"}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-targo-blue/50 focus:border-targo-blue disabled:opacity-50 resize-y"
                          />
                        </div>

                        <div>
                          <label htmlFor="structure-feedback" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Aufbau / Struktur
                          </label>
                          <p className="text-xs text-gray-500 mb-2">
                            Feedback zur Struktur: Ist der Artikel logisch aufgebaut? Sind die Abschnitte sinnvoll gegliedert?
                          </p>
                          <textarea
                            id="structure-feedback"
                            rows={3}
                            placeholder="Anmerkungen zum Aufbau..."
                            value={structureFeedback}
                            onChange={(e) => setStructureFeedback(e.target.value)}
                            disabled={status === "loading"}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-targo-blue/50 focus:border-targo-blue disabled:opacity-50 resize-y"
                          />
                        </div>

                        <div>
                          <label htmlFor="general-notes" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Allgemeine Anmerkungen
                          </label>
                          <p className="text-xs text-gray-500 mb-2">
                            Sonstige Hinweise, Korrekturen oder Verbesserungsvorschläge.
                          </p>
                          <textarea
                            id="general-notes"
                            rows={3}
                            placeholder="Weitere Anmerkungen..."
                            value={generalNotes}
                            onChange={(e) => setGeneralNotes(e.target.value)}
                            disabled={status === "loading"}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-targo-blue/50 focus:border-targo-blue disabled:opacity-50 resize-y"
                          />
                        </div>
                      </>
                    )}

                    {/* Error */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <p>{message}</p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading" || !hasContent}
                      className="w-full rounded-full px-6 py-3 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                      style={{
                        backgroundColor: reviewDecision === "approved" ? "#16a34a" : "#003366",
                        color: "#ffffff",
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : reviewDecision === "approved" ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Freigabe erteilen
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Review absenden
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      Das Review wird per E-Mail an das Content-Team gesendet.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
