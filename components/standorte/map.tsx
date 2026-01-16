'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Phone, Clock } from 'lucide-react';

// Fix für Standard-Marker-Icons in Next.js - nur im Browser
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
}

// Custom Marker Icon mit TARGOBANK-Farben
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: #003366;
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: 16px;
          font-weight: bold;
        ">T</div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

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

interface MapProps {
  standorte: Standort[];
}

// Komponente zum Anpassen der Kartenansicht an alle Marker
function MapBounds({ standorte }: MapProps) {
  const map = useMap();

  useEffect(() => {
    if (standorte.length > 0) {
      const bounds = L.latLngBounds(
        standorte.map((s) => [
          parseFloat(s.Latitude),
          parseFloat(s.Longitude),
        ])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, standorte]);

  return null;
}

export function StandorteMap({ standorte }: MapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Karte wird geladen...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <MapContainer
        center={[51.1657, 10.4515]} // Zentrum von Deutschland
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapBounds standorte={standorte} />
        {standorte.map((standort, index) => {
          const lat = parseFloat(standort.Latitude);
          const lng = parseFloat(standort.Longitude);
          
          if (isNaN(lat) || isNaN(lng)) {
            return null;
          }

          return (
            <Marker
              key={index}
              position={[lat, lng]}
              icon={createCustomIcon()}
            >
              <Popup className="custom-popup">
                <div className="p-2 min-w-[250px]">
                  <h3 className="font-bold text-lg text-targo-blue mb-2">
                    {standort.Name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-targo-blue mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{standort.Address}</span>
                    </div>
                    {standort.Phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-targo-blue flex-shrink-0" />
                        <a
                          href={`tel:${standort.Phone}`}
                          className="text-targo-blue hover:underline"
                        >
                          {standort.Phone}
                        </a>
                      </div>
                    )}
                    {standort.Status && (
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-targo-blue mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{standort.Status}</span>
                      </div>
                    )}
                    {standort.Timing && standort.Timing.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="font-semibold text-xs text-gray-600 mb-1">Öffnungszeiten:</p>
                        <div className="space-y-1">
                          {standort.Timing.map((time, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between text-xs text-gray-600"
                            >
                              <span>{time.day}:</span>
                              <span>{time.open_interval}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
