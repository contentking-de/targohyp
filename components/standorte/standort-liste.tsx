'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Standort {
  Address: string;
  Latitude: string;
  Longitude: string;
  Name: string;
  Phone: string;
  Status: string;
  Timing?: Array<{
    day: string;
    open_interval: string;
  }>;
}

interface StandortListeProps {
  standorte: Standort[];
  itemsPerPage?: number;
}

// Funktion zum Extrahieren der Stadt aus der Adresse
function extractCity(address: string): string {
  const parts = address.split(',');
  if (parts.length >= 2) {
    const cityPart = parts[1].trim();
    const city = cityPart.replace(/^\d{5}\s*/, '').trim();
    // Normalisiere Stadtnamen (entferne Zusätze wie "-Langwasser")
    return city.split('-')[0].trim() || 'Unbekannt';
  }
  return 'Unbekannt';
}

// Funktion zum Erstellen eines URL-Slugs
function createSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function StandortListe({ standorte, itemsPerPage = 12 }: StandortListeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(standorte.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStandorte = standorte.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll zum Anfang der Liste
      const element = document.getElementById('standort-liste');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Berechne welche Seitenzahlen angezeigt werden sollen
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5; // Anzahl der angezeigten Seiten
    
    if (totalPages <= showPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div id="standort-liste">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">Alle Standorte</h2>
          <p className="text-sm text-gray-600">
            Zeige {startIndex + 1}-{Math.min(endIndex, standorte.length)} von {standorte.length} Standorten
          </p>
        </div>
        <p className="text-gray-700">
          Besuchen Sie uns persönlich – unsere Berater vor Ort freuen sich auf Ihr Anliegen rund um die Baufinanzierung.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentStandorte.map((standort, index) => {
          const city = extractCity(standort.Address);
          const slug = createSlug(city);
          
          return (
            <Link
              key={startIndex + index}
              href={`/standorte/${slug}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-targo-blue/30 group block"
            >
              <h3 className="font-bold text-lg text-targo-blue mb-3 group-hover:text-targo-blue/80 transition-colors">
                Baufinanzierung {city}
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-targo-blue mt-0.5 flex-shrink-0" />
                  <span>{standort.Address}</span>
                </div>
                {standort.Phone && (
                  <div className="text-gray-600">
                    {standort.Phone}
                  </div>
                )}
              </div>
              <div className="flex items-center text-targo-blue font-semibold mt-4 text-sm">
                Mehr erfahren
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Vorherige Seite"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {getPageNumbers().map((page, index) => (
            typeof page === 'number' ? (
              <button
                key={index}
                onClick={() => goToPage(page)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${
                  currentPage === page
                    ? 'bg-[#003366] text-white border-[#003366]'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ) : (
              <span key={index} className="px-2 text-gray-400">
                {page}
              </span>
            )
          ))}
          
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Nächste Seite"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
