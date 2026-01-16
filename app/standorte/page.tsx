import { MapWrapper } from '@/components/standorte/map-wrapper';
import { MapPin } from 'lucide-react';
import { readFileSync } from 'fs';
import { join } from 'path';
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: 'Standorte - TARGOBANK Filialen finden | Targohyp',
  description: 'Finden Sie die nächste TARGOBANK Filiale in Ihrer Nähe. Übersicht aller Standorte mit interaktiver Karte, Adressen und Öffnungszeiten.',
}, { path: "/standorte" });

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

// Funktion zum Extrahieren der Stadt aus der Adresse
function extractCity(address: string): string {
  // Adresse Format: "Straße, PLZ Stadt, Germany"
  // Beispiel: "Oppelner Str. 186, 90473 Nürnberg, Germany"
  const parts = address.split(',');
  if (parts.length >= 2) {
    // Nimm den Teil nach dem ersten Komma (PLZ Stadt)
    const cityPart = parts[1].trim();
    // Entferne die PLZ (5-stellige Zahl am Anfang)
    const city = cityPart.replace(/^\d{5}\s*/, '').trim();
    return city || 'Unbekannt';
  }
  return 'Unbekannt';
}

export default function StandortePage() {
  // Lade JSON-Datei zur Build-Zeit
  const filePath = join(process.cwd(), 'public', 'targobank-filialen.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const standorte: Standort[] = JSON.parse(fileContents) as Standort[];

  // Filtere ungültige Standorte und Geldautomaten heraus
  const validStandorte = standorte.filter(
    (s) =>
      s.Latitude &&
      s.Longitude &&
      !isNaN(parseFloat(s.Latitude)) &&
      !isNaN(parseFloat(s.Longitude)) &&
      !s.Name.toLowerCase().includes('geldautomat')
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-targo-blue/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-targo-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Unsere Standorte
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Finden Sie die nächste TARGOBANK Filiale in Ihrer Nähe. Mit unserer interaktiven Karte können Sie alle Standorte erkunden und die passende Filiale für Ihre Beratung finden.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              {validStandorte.length} Standorte verfügbar
            </p>
          </div>
        </div>
      </section>

      {/* Karte Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Filialen auf der Karte</h2>
            <p className="text-gray-700">
              Klicken Sie auf einen Marker, um weitere Informationen zur Filiale zu erhalten.
            </p>
          </div>
          <MapWrapper standorte={validStandorte} />
        </div>
      </section>

      {/* Standortliste Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Alle Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {validStandorte.slice(0, 12).map((standort, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg text-targo-blue mb-3">
                  {standort.Name} {extractCity(standort.Address)}
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-targo-blue mt-0.5 flex-shrink-0" />
                    <span>{standort.Address}</span>
                  </div>
                  {standort.Phone && (
                    <div>
                      <a
                        href={`tel:${standort.Phone}`}
                        className="text-targo-blue hover:underline"
                      >
                        {standort.Phone}
                      </a>
                    </div>
                  )}
                  {standort.Status && (
                    <div className="text-xs text-gray-600 mt-2">
                      {standort.Status}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {validStandorte.length > 12 && (
            <p className="text-center text-gray-600 mt-8">
              Zeige 12 von {validStandorte.length} Standorten. Nutzen Sie die Karte oben, um alle Standorte zu erkunden.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
