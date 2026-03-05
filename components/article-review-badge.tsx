"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, FileText } from "lucide-react";

interface ArticleReviewBadgeProps {
  articleUrl: string;
}

type ReviewStatus = "approved" | "revision" | null;

export function ArticleReviewBadge({ articleUrl }: ArticleReviewBadgeProps) {
  const [reviewStatus, setReviewStatus] = useState<ReviewStatus>(null);

  useEffect(() => {
    const stored = localStorage.getItem(`article-review-approved:${articleUrl}`);
    if (stored === "approved") {
      setReviewStatus("approved");
    } else if (stored === "revision") {
      setReviewStatus("revision");
    }
  }, [articleUrl]);

  if (!reviewStatus) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-2 py-0.5">
        <FileText className="w-3 h-3" />
        Offen
      </span>
    );
  }

  if (reviewStatus === "approved") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
        <CheckCircle className="w-3 h-3" />
        Freigegeben
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
      <AlertCircle className="w-3 h-3" />
      Überarbeitung
    </span>
  );
}
