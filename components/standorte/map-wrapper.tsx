'use client';

import dynamic from 'next/dynamic';

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

interface MapWrapperProps {
  standorte: Standort[];
}

// Dynamischer Import der Karte, um SSR zu vermeiden
const DynamicStandorteMap = dynamic(() => import('./map').then(mod => ({ default: mod.StandorteMap })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-gray-100 flex items-center justify-center">
      <p className="text-gray-600">Karte wird geladen...</p>
    </div>
  ),
});

export function MapWrapper({ standorte }: MapWrapperProps) {
  return <DynamicStandorteMap standorte={standorte} />;
}
