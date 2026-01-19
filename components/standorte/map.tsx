'use client';

import { useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix für Standard-Marker-Icons in Next.js - nur im Browser
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
}

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

export function StandorteMap({ standorte }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const createCustomIcon = useCallback(() => {
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
  }, []);

  const createPopupContent = useCallback((standort: Standort) => {
    let timingHtml = '';
    if (standort.Timing && standort.Timing.length > 0) {
      timingHtml = `
        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e5e7eb;">
          <p style="font-weight: 600; font-size: 12px; color: #4b5563; margin-bottom: 4px;">Öffnungszeiten:</p>
          <div style="display: flex; flex-direction: column; gap: 2px;">
            ${standort.Timing.map(time => `
              <div style="display: flex; justify-content: space-between; font-size: 12px; color: #4b5563;">
                <span>${time.day}:</span>
                <span>${time.open_interval}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div style="padding: 8px; min-width: 250px;">
        <h3 style="font-weight: bold; font-size: 18px; color: #003366; margin-bottom: 8px;">
          ${standort.Name}
        </h3>
        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 14px;">
          <div style="display: flex; align-items: flex-start; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#003366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style="color: #374151;">${standort.Address}</span>
          </div>
          ${standort.Phone ? `
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#003366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:${standort.Phone}" style="color: #003366; text-decoration: none;">${standort.Phone}</a>
            </div>
          ` : ''}
          ${standort.Status ? `
            <div style="display: flex; align-items: flex-start; gap: 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#003366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span style="color: #374151;">${standort.Status}</span>
            </div>
          ` : ''}
          ${timingHtml}
        </div>
      </div>
    `;
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prüfen ob bereits eine Map-Instanz existiert
    if (mapInstanceRef.current) {
      return;
    }

    // Prüfen ob der Container bereits eine Leaflet-Map enthält
    const container = mapContainerRef.current;
    if ((container as any)._leaflet_id) {
      // Container hat bereits eine Map, diese entfernen
      const existingMap = (container as any)._leaflet;
      if (existingMap) {
        existingMap.remove();
      }
      delete (container as any)._leaflet_id;
    }

    // Neue Map erstellen
    const map = L.map(container, {
      center: [51.1657, 10.4515],
      zoom: 6,
      scrollWheelZoom: true,
    });

    mapInstanceRef.current = map;

    // TileLayer hinzufügen
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Marker hinzufügen
    const validStandorte = standorte.filter(s => {
      const lat = parseFloat(s.Latitude);
      const lng = parseFloat(s.Longitude);
      return !isNaN(lat) && !isNaN(lng);
    });

    const markers: L.Marker[] = [];

    validStandorte.forEach((standort) => {
      const lat = parseFloat(standort.Latitude);
      const lng = parseFloat(standort.Longitude);

      const marker = L.marker([lat, lng], { icon: createCustomIcon() })
        .addTo(map)
        .bindPopup(createPopupContent(standort));

      markers.push(marker);
    });

    // Karte an alle Marker anpassen
    if (validStandorte.length > 0) {
      const bounds = L.latLngBounds(
        validStandorte.map((s) => [parseFloat(s.Latitude), parseFloat(s.Longitude)] as [number, number])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }

    // Cleanup-Funktion
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [standorte, createCustomIcon, createPopupContent]);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-lg"
      style={{ zIndex: 1 }}
    />
  );
}
