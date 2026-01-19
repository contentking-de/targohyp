"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function FloatingCTA() {
  const pathname = usePathname();
  
  // Nicht auf der Finanzierungsanfrage-Seite anzeigen
  if (pathname === "/finanzierungsanfrage") {
    return null;
  }
  
  return (
    <div 
      className="fixed z-50" 
      style={{ 
        right: 0, 
        top: '50%', 
        transform: 'translateY(-50%)',
        width: 'fit-content',
        height: 'fit-content'
      }}
    >
      <Link
        href="/finanzierungsanfrage"
        className="block bg-[#bb133e] hover:bg-[#a01135] text-white px-6 py-3 rounded-tl-lg shadow-lg transition-all hover:shadow-xl group"
        style={{ 
          transform: 'rotate(-90deg) translateX(50%) translateY(-50%)', 
          transformOrigin: 'right center',
          whiteSpace: 'nowrap',
          position: 'relative',
          right: 0
        }}
        aria-label="Finanzierungsanfrage stellen"
      >
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm font-semibold">
            Finanzierungsanfrage
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </div>
      </Link>
    </div>
  );
}
