/**
 * Script zum Entfernen von doppelten Städte-Einträgen aus der Standortliste.
 * Behält pro Stadt nur den Standort mit der besten Bewertung.
 * 
 * Ausführen mit: npx tsx scripts/dedupe-standorte.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface Standort {
  Address: string;
  Category: string;
  GoogleCID: string;
  GoogleFID: string;
  Keyword: string;
  Latitude: string;
  Listing_Url: string;
  Longitude: string;
  Name: string;
  Phone: string;
  Placeid: string;
  PriceRange: string | null;
  Rating: string;
  Result_Type: string | null;
  Reviews: string;
  Reviews_Link: string;
  Status: string;
  Timing?: Array<{
    day: string;
    open_interval: string;
  }>;
  Url: string;
  Website: string;
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
    // Normalisiere Stadtnamen (entferne Zusätze wie "-Langwasser")
    const normalizedCity = city.split('-')[0].trim();
    return normalizedCity || 'Unbekannt';
  }
  return 'Unbekannt';
}

function main() {
  const filePath = join(process.cwd(), 'public', 'targobank-filialen.json');
  const backupPath = join(process.cwd(), 'public', 'targobank-filialen.backup.json');
  
  console.log('📂 Lese Standort-Datei...');
  const fileContents = readFileSync(filePath, 'utf8');
  const standorte: Standort[] = JSON.parse(fileContents);
  
  console.log(`📊 Gefundene Standorte: ${standorte.length}`);
  
  // Filtere ungültige Standorte und Geldautomaten heraus
  const validStandorte = standorte.filter(
    (s) =>
      s.Latitude &&
      s.Longitude &&
      !isNaN(parseFloat(s.Latitude)) &&
      !isNaN(parseFloat(s.Longitude)) &&
      !s.Name.toLowerCase().includes('geldautomat')
  );
  
  console.log(`✅ Gültige Standorte (ohne Geldautomaten): ${validStandorte.length}`);
  
  // Gruppiere nach Stadt
  const cityMap = new Map<string, Standort[]>();
  
  for (const standort of validStandorte) {
    const city = extractCity(standort.Address);
    
    if (!cityMap.has(city)) {
      cityMap.set(city, []);
    }
    cityMap.get(city)!.push(standort);
  }
  
  console.log(`🏙️  Anzahl einzigartiger Städte: ${cityMap.size}`);
  
  // Zeige Städte mit mehreren Standorten
  const duplicateCities: string[] = [];
  for (const [city, locations] of cityMap.entries()) {
    if (locations.length > 1) {
      duplicateCities.push(`  - ${city}: ${locations.length} Standorte`);
    }
  }
  
  if (duplicateCities.length > 0) {
    console.log('\n🔄 Städte mit mehreren Standorten:');
    duplicateCities.forEach(line => console.log(line));
  }
  
  // Wähle den besten Standort pro Stadt (höchste Bewertung, bei Gleichstand mehr Reviews)
  const deduplicatedStandorte: Standort[] = [];
  
  for (const [city, locations] of cityMap.entries()) {
    // Sortiere nach Rating (absteigend), dann nach Reviews (absteigend)
    const sorted = locations.sort((a, b) => {
      const ratingA = parseFloat(a.Rating) || 0;
      const ratingB = parseFloat(b.Rating) || 0;
      
      if (ratingB !== ratingA) {
        return ratingB - ratingA;
      }
      
      const reviewsA = parseInt(a.Reviews) || 0;
      const reviewsB = parseInt(b.Reviews) || 0;
      
      return reviewsB - reviewsA;
    });
    
    // Nimm den besten Standort
    deduplicatedStandorte.push(sorted[0]);
  }
  
  console.log(`\n✨ Standorte nach Deduplizierung: ${deduplicatedStandorte.length}`);
  console.log(`🗑️  Entfernte Duplikate: ${validStandorte.length - deduplicatedStandorte.length}`);
  
  // Erstelle Backup
  console.log('\n💾 Erstelle Backup...');
  writeFileSync(backupPath, fileContents, 'utf8');
  console.log(`   Backup gespeichert: ${backupPath}`);
  
  // Speichere die deduplizierten Standorte
  console.log('\n📝 Speichere deduplizierte Standorte...');
  writeFileSync(filePath, JSON.stringify(deduplicatedStandorte, null, 2), 'utf8');
  console.log(`   Gespeichert: ${filePath}`);
  
  console.log('\n✅ Fertig!');
}

main();
