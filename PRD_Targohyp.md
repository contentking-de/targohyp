# Product Requirements Document (PRD)
## Targohyp - Content-Plattform für Baufinanzierung

**Version:** 1.0  
**Datum:** 2024  
**Status:** Draft  
**Projekt:** Targohyp

---

## 1. Executive Summary

### 1.1 Projektübersicht
Targohyp ist eine moderne, sichere Content-Plattform für das Thema Baufinanzierung, die als Informations- und Vorbereitungsportal für potentielle Baufinanzierungskunden dient. Die Plattform kombiniert umfangreiche redaktionelle Inhalte mit interaktiven Tools und einem geschützten Bereich für Kunden zur Vorbereitung auf Beratungsgespräche.

### 1.2 Geschäftsziele
- **Informationsbereitstellung:** Umfassende, verständliche Informationen zum Thema Baufinanzierung
- **Lead-Generierung:** Qualifizierte Leads für Beratungsgespräche generieren
- **Kundenbindung:** Vorbereitung und Vereinfachung des Beratungsprozesses
- **Brand-Stärkung:** Positionierung als kompetenter Partner für Baufinanzierung
- **Conversion-Optimierung:** Steigerung der Beratungsanfragen durch qualitativ hochwertige Inhalte

### 1.3 Zielgruppen
- **Primär:** Personen, die eine Baufinanzierung planen oder suchen
- **Sekundär:** Personen in der Informationsphase vor der Finanzierungsentscheidung
- **Intern:** Redakteure und Content-Manager der TARGOBANK

---

## 2. Projektkontext & Design-Vorlage

### 2.1 Design-Vorlage
Die Plattform orientiert sich am Design und der User Experience von [TARGOBANK.de](https://www.targobank.de/de/):
- Cleanes, modernes Design
- Klare Navigation und Informationsarchitektur
- Vertrauenswürdige, professionelle Optik
- Responsive Design für alle Geräte
- Barrierefreie Umsetzung (WCAG 2.1 AA)

### 2.2 Design-Prinzipien
- **Vertrauen:** Professionelles, seriöses Erscheinungsbild
- **Klarheit:** Verständliche Darstellung komplexer Finanzthemen
- **Effizienz:** Schnelle Ladezeiten und intuitive Bedienung
- **Sicherheit:** Visuelle und technische Sicherheitsindikatoren

---

## 3. Funktionale Anforderungen

### 3.1 Page-Types

#### 3.1.1 Produktpages
**Zweck:** Detaillierte Darstellung von Baufinanzierungsprodukten

**Funktionen:**
- Produktübersicht mit Filtern (Laufzeit, Zinssatz, Tilgung, etc.)
- Detaillierte Produktseiten mit:
  - Produktbeschreibung
  - Konditionen und Zinssätzen
  - Vor- und Nachteile
  - Verfügbarkeit und Voraussetzungen
  - Call-to-Action (CTA) für Beratungsanfrage
- Vergleichsfunktion zwischen Produkten
- PDF-Downloads für Produktinformationen
- Responsive Darstellung aller Produktdetails

**Content-Felder:**
- Titel, Untertitel, Meta-Description
- Produktbilder/Grafiken
- Zinssätze (variabel/fest)
- Laufzeiten
- Mindest-/Maximalbetrag
- Tilgungsoptionen
- Besonderheiten
- Verfügbarkeitsstatus
- SEO-Metadaten

#### 3.1.2 Rechner
**Zweck:** Interaktive Tools zur Berechnung und Planung

**Rechner-Typen:**
1. **Baufinanzierungsrechner**
   - Darlehensbetrag, Zinssatz, Laufzeit, Tilgung
   - Monatliche Rate berechnen
   - Gesamtkosten visualisieren
   - Tilgungsplan anzeigen
   - Export als PDF

2. **Tilgungsrechner**
   - Verschiedene Tilgungsmodelle vergleichen
   - Sondertilgungen berücksichtigen
   - Zinsänderungen simulieren

3. **Eigenkapitalrechner**
   - Verfügbares Eigenkapital berechnen
  - Förderungen berücksichtigen
  - Finanzierungslücke identifizieren

4. **Monatsrate-Rechner**
   - Belastbarkeit prüfen
   - Verschiedene Szenarien durchspielen

**Funktionen:**
- Speicherung von Berechnungen (für eingeloggte User)
- Export als PDF
- Teilen-Funktion (per Link)
- Druckfunktion
- Responsive Darstellung
- Validierung aller Eingaben
- Tooltips und Hilfetexte

#### 3.1.3 Ratgeber
**Zweck:** Umfassende redaktionelle Inhalte zu Baufinanzierungsthemen

**Content-Typen:**
- Artikel (How-To-Guides, Erklärungen)
- Checklisten
- Schritt-für-Schritt-Anleitungen
- FAQs
- Fallstudien/Erfahrungsberichte

**Funktionen:**
- Kategorisierung (Themen, Zielgruppe, Schwierigkeitsgrad)
- Verwandte Artikel
- Social Sharing
- Druckfunktion
- Lesezeit-Anzeige
- Inhaltsverzeichnis bei langen Artikeln
- Kommentarfunktion (optional, moderiert)
- Bookmark-Funktion (für eingeloggte User)

**Content-Struktur:**
- Titel, Untertitel
- Einleitung
- Hauptinhalt (WYSIWYG-Editor)
- Bilder, Videos, Infografiken
- Call-to-Actions
- Autor, Veröffentlichungsdatum, Aktualisierungsdatum
- SEO-Metadaten
- Tags/Kategorien

#### 3.1.4 Vergleiche
**Zweck:** Vergleich verschiedener Optionen und Produkte

**Vergleichs-Typen:**
- Produktvergleiche (verschiedene Baufinanzierungsprodukte)
- Anbietervergleiche
- Zinsvergleiche
- Tilgungsvergleiche

**Funktionen:**
- Vergleichstabelle mit sortierbaren Spalten
- Filterfunktionen
- Highlighting von Unterschieden
- Pro/Contra-Ansicht
- Export als PDF
- Speicherung von Vergleichen (für eingeloggte User)

**Content-Felder:**
- Vergleichskriterien (konfigurierbar)
- Produkt-/Anbieterdaten
- Bewertungen/Sterne
- Preise/Konditionen
- Verfügbarkeitsstatus

#### 3.1.5 Lexikon
**Zweck:** Glossar mit Fachbegriffen zur Baufinanzierung

**Funktionen:**
- Alphabetische Navigation (A-Z)
- Suchfunktion
- Kategorisierung nach Themenbereichen
- Verlinkung zu anderen Begriffen
- Verlinkung zu relevanten Artikeln/Produkten
- Aussprachehilfen (optional)
- Audio-Aussprache (optional)

**Content-Struktur:**
- Begriff
- Definition
- Erklärung (ausführlich)
- Beispiele
- Verwandte Begriffe
- Quellen/Links

### 3.2 Content-Management-System (CMS)

#### 3.2.1 Dashboard-Übersicht
- Dashboard mit Statistiken (Views, Engagement, etc.)
- Schnellzugriff auf häufig genutzte Funktionen
- Benachrichtigungen (neue Kommentare, zu prüfende Inhalte)
- Aktivitäts-Feed

#### 3.2.2 Content-Verwaltung

**Content-Typen verwalten:**
- Produktpages
- Ratgeber-Artikel
- Lexikon-Einträge
- Vergleichsseiten
- Rechner-Konfigurationen

**Funktionen pro Content-Typ:**
- **Erstellen:** WYSIWYG-Editor mit Rich-Text-Funktionen
- **Bearbeiten:** Versionierung, Änderungshistorie
- **Löschen:** Soft-Delete mit Wiederherstellungsoption
- **Veröffentlichen:** Workflow mit Freigabeprozess
- **Planen:** Veröffentlichung zu bestimmten Zeitpunkten
- **Duplizieren:** Inhalte kopieren und wiederverwenden
- **Bulk-Aktionen:** Mehrere Inhalte gleichzeitig bearbeiten

**Editor-Features:**
- Rich-Text-Editor (Tiptap oder ähnlich)
- Bild-Upload und -Verwaltung
- Video-Einbindung
- Tabellen
- Code-Blöcke
- Zitate
- Call-to-Action-Blöcke
- SEO-Vorschau
- Vorschau-Modus (Desktop/Mobile)

#### 3.2.3 Medienverwaltung
- Upload von Bildern, Videos, PDFs
- Bildoptimierung (automatisch)
- Alt-Text-Verwaltung
- Kategorisierung und Tags
- Suche in Medienbibliothek
- Bulk-Upload
- CDN-Integration

#### 3.2.4 Benutzerverwaltung (CMS)
- Rollen und Berechtigungen:
  - **Super-Admin:** Vollzugriff
  - **Content-Manager:** Inhalte erstellen/bearbeiten/löschen
  - **Redakteur:** Inhalte erstellen/bearbeiten (eigene)
  - **Reviewer:** Inhalte prüfen und freigeben
  - **Lese-Zugriff:** Nur Ansicht
- Benutzer erstellen/bearbeiten/löschen
- Passwort-Reset
- Zwei-Faktor-Authentifizierung (2FA)

#### 3.2.5 Workflow & Freigabeprozess
- Draft → Review → Published
- Kommentare im Review-Prozess
- Benachrichtigungen bei Statusänderungen
- Automatische Speicherung von Entwürfen
- Versionierung mit Vergleichsfunktion

#### 3.2.6 SEO-Management
- Meta-Titel, -Description, -Keywords
- Open-Graph-Tags
- Twitter-Cards
- Canonical-URLs
- Sitemap-Generierung
- Robots.txt-Verwaltung
- Schema.org-Markup (JSON-LD)

#### 3.2.7 Analytics & Reporting
- Seitenaufrufe pro Content
- Engagement-Metriken
- Conversion-Tracking
- Export von Reports
- Integration mit Google Analytics

### 3.3 Kundenbereich (User Portal)

#### 3.3.1 Registrierung & Login
- Registrierung mit E-Mail und Passwort
- E-Mail-Verifizierung (via Resend)
- Passwort-Reset-Funktion
- Zwei-Faktor-Authentifizierung (2FA) optional
- Social-Login (optional, z.B. Google)
- Session-Management
- "Angemeldet bleiben"-Option

#### 3.3.2 Persönlicher Bereich (Dashboard)
- Übersicht über:
  - Hochgeladene Dokumente
  - Gespeicherte Berechnungen
  - Gespeicherte Vergleiche
  - Bookmarks/Favoriten
  - Persönliche Informationen
- Schnellzugriff auf häufig genutzte Funktionen

#### 3.3.3 Dokumentenverwaltung
- Upload von Dokumenten:
  - Einkommensnachweise
  - Schufa-Auskunft
  - Grundbuchauszug
  - Baupläne
  - Sonstige relevante Unterlagen
- Unterstützte Formate: PDF, JPG, PNG, DOC, DOCX
- Maximale Dateigröße: 10 MB pro Datei
- Maximale Anzahl: 20 Dokumente pro User
- Kategorisierung der Dokumente
- Vorschau-Funktion
- Download-Funktion
- Löschen-Funktion
- Verschlüsselung der Dokumente (server-side)

#### 3.3.4 Persönliche Informationen
- Profil-Verwaltung:
  - Name, Vorname
  - E-Mail-Adresse
  - Telefonnummer
  - Adresse
  - Geburtsdatum
- Finanzielle Informationen (optional):
  - Monatliches Einkommen
  - Verfügbares Eigenkapital
  - Gewünschter Finanzierungsbetrag
  - Gewünschte Laufzeit
- Präferenzen:
  - Kommunikationspräferenzen
  - Newsletter-Abonnement
- Datenschutz-Einstellungen
- Löschung des Kontos

#### 3.3.5 Gespeicherte Inhalte
- Gespeicherte Rechner-Berechnungen
- Gespeicherte Vergleiche
- Bookmarks von Artikeln
- Verlauf der besuchten Seiten

#### 3.3.6 Beratungsanfrage
- Formular zur Terminvereinbarung
- Auswahl des gewünschten Beratungstermins
- Vorausgefüllte Informationen aus Profil
- Möglichkeit, Dokumente anzuhängen
- Bestätigungs-E-Mail
- Status-Tracking der Anfrage

### 3.4 Öffentliche Funktionen

#### 3.4.1 Navigation
- Hauptnavigation (sticky)
- Footer-Navigation
- Breadcrumbs
- Suchfunktion (globale Suche)
- Mobile Navigation (Hamburger-Menü)

#### 3.4.2 Suche
- Globale Suche über alle Content-Typen
- Autocomplete/Vorschläge
- Filter nach Content-Typ
- Sortierung (Relevanz, Datum)
- Suchverlauf (für eingeloggte User)

#### 3.4.3 Newsletter
- Newsletter-Anmeldung
- Double-Opt-In (via Resend)
- Abmeldung
- Newsletter-Verwaltung im CMS

#### 3.4.4 Kontaktformular
- Allgemeines Kontaktformular
- Spezifische Formulare (Beratungsanfrage, etc.)
- Spam-Schutz (reCAPTCHA)
- E-Mail-Benachrichtigungen

#### 3.4.5 Social Sharing
- Teilen-Funktion für Artikel
- Open-Graph-Integration
- Twitter-Cards

---

## 4. Technische Anforderungen

### 4.1 Tech-Stack

#### 4.1.1 Frontend
- **Framework:** Next.js 14+ (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **UI-Komponenten:** shadcn/ui oder ähnlich
- **State-Management:** React Context API / Zustand
- **Formulare:** React Hook Form + Zod
- **API-Client:** Fetch API / Axios
- **Internationalisierung:** next-intl (optional, für zukünftige Mehrsprachigkeit)

#### 4.1.2 Backend
- **Framework:** Next.js API Routes / Server Actions
- **Sprache:** TypeScript
- **ORM:** Drizzle ORM oder Prisma
- **Datenbank:** Neon (PostgreSQL)
- **Authentifizierung:** NextAuth.js (Auth.js)
- **Datei-Upload:** Uploadthing oder ähnlich
- **E-Mail:** Resend
- **Caching:** Redis (optional, für Performance)

#### 4.1.3 Infrastruktur
- **Hosting:** Vercel (empfohlen) oder ähnlich
- **CDN:** Vercel Edge Network
- **Datenbank:** Neon PostgreSQL
- **File Storage:** AWS S3 oder Vercel Blob Storage
- **Monitoring:** Vercel Analytics + Sentry
- **Logging:** Vercel Logs

### 4.2 Datenbank-Schema

#### 4.2.1 User-Management
```sql
-- Users (für Kunden)
users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  email_verified BOOLEAN DEFAULT FALSE,
  email_verification_token VARCHAR(255),
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  two_factor_secret VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP,
  status VARCHAR(50) DEFAULT 'active'
)

-- User Profiles
user_profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(50),
  address TEXT,
  date_of_birth DATE,
  monthly_income DECIMAL(12,2),
  available_capital DECIMAL(12,2),
  desired_financing_amount DECIMAL(12,2),
  desired_term INTEGER,
  communication_preferences JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
)

-- CMS Users (für Redakteure)
cms_users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'super_admin', 'content_manager', 'editor', 'reviewer', 'viewer'
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  two_factor_secret VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP,
  status VARCHAR(50) DEFAULT 'active'
)
```

#### 4.2.2 Content-Management
```sql
-- Content Types
content_types (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  schema JSONB, -- Flexible Schema-Definition
  created_at TIMESTAMP DEFAULT NOW()
)

-- Content Entries
content_entries (
  id UUID PRIMARY KEY,
  content_type_id UUID REFERENCES content_types(id),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'draft', -- 'draft', 'review', 'published', 'archived'
  content JSONB NOT NULL, -- Flexible Content-Struktur
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT[],
  og_image VARCHAR(255),
  author_id UUID REFERENCES cms_users(id),
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(content_type_id, slug)
)

-- Content Versions (Versionierung)
content_versions (
  id UUID PRIMARY KEY,
  content_entry_id UUID REFERENCES content_entries(id),
  version_number INTEGER NOT NULL,
  content JSONB NOT NULL,
  author_id UUID REFERENCES cms_users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(content_entry_id, version_number)
)

-- Media
media (
  id UUID PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  original_filename VARCHAR(255) NOT NULL,
  mime_type VARCHAR(100),
  size INTEGER,
  url VARCHAR(500) NOT NULL,
  alt_text TEXT,
  uploaded_by UUID REFERENCES cms_users(id),
  created_at TIMESTAMP DEFAULT NOW()
)

-- Categories/Tags
categories (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  parent_id UUID REFERENCES categories(id),
  created_at TIMESTAMP DEFAULT NOW()
)

-- Content-Category Relations
content_categories (
  content_entry_id UUID REFERENCES content_entries(id),
  category_id UUID REFERENCES categories(id),
  PRIMARY KEY (content_entry_id, category_id)
)

-- Tags
tags (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
)

-- Content-Tag Relations
content_tags (
  content_entry_id UUID REFERENCES content_entries(id),
  tag_id UUID REFERENCES tags(id),
  PRIMARY KEY (content_entry_id, tag_id)
)
```

#### 4.2.3 User Documents
```sql
-- User Documents
user_documents (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  filename VARCHAR(255) NOT NULL,
  original_filename VARCHAR(255) NOT NULL,
  mime_type VARCHAR(100),
  size INTEGER,
  url VARCHAR(500) NOT NULL, -- Encrypted/secure URL
  category VARCHAR(100), -- 'income', 'schufa', 'land_register', 'plans', 'other'
  encrypted BOOLEAN DEFAULT TRUE,
  uploaded_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP
)

-- User Calculations (gespeicherte Rechner-Ergebnisse)
user_calculations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  calculator_type VARCHAR(100) NOT NULL, -- 'financing', 'repayment', 'equity', 'monthly_rate'
  input_data JSONB NOT NULL,
  result_data JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
)

-- User Bookmarks
user_bookmarks (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  content_entry_id UUID REFERENCES content_entries(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, content_entry_id)
)

-- User Comparisons
user_comparisons (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  comparison_type VARCHAR(100) NOT NULL,
  comparison_data JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
)
```

#### 4.2.4 Weitere Tabellen
```sql
-- Newsletter Subscriptions
newsletter_subscriptions (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'confirmed', 'unsubscribed'
  confirmation_token VARCHAR(255),
  subscribed_at TIMESTAMP DEFAULT NOW(),
  confirmed_at TIMESTAMP,
  unsubscribed_at TIMESTAMP
)

-- Contact Form Submissions
contact_submissions (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  user_id UUID REFERENCES users(id), -- Optional, wenn eingeloggt
  status VARCHAR(50) DEFAULT 'new', -- 'new', 'in_progress', 'resolved'
  created_at TIMESTAMP DEFAULT NOW()
)

-- Advisory Requests
advisory_requests (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  preferred_date TIMESTAMP,
  preferred_time VARCHAR(50),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'confirmed', 'completed', 'cancelled'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
)

-- Audit Log (für Sicherheit)
audit_logs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  user_type VARCHAR(50), -- 'customer', 'cms_user'
  action VARCHAR(100) NOT NULL,
  resource_type VARCHAR(100),
  resource_id UUID,
  ip_address VARCHAR(45),
  user_agent TEXT,
  details JSONB,
  created_at TIMESTAMP DEFAULT NOW()
)
```

### 4.3 API-Spezifikation

#### 4.3.1 Public APIs
- `GET /api/content` - Content-Liste abrufen
- `GET /api/content/[slug]` - Einzelnen Content abrufen
- `GET /api/search` - Suche
- `POST /api/newsletter/subscribe` - Newsletter-Anmeldung
- `POST /api/contact` - Kontaktformular
- `GET /api/calculators/[type]` - Rechner-Daten abrufen
- `POST /api/calculators/[type]/calculate` - Berechnung durchführen

#### 4.3.2 Authenticated APIs (Kunden)
- `GET /api/user/profile` - Profil abrufen
- `PUT /api/user/profile` - Profil aktualisieren
- `GET /api/user/documents` - Dokumente auflisten
- `POST /api/user/documents` - Dokument hochladen
- `DELETE /api/user/documents/[id]` - Dokument löschen
- `GET /api/user/calculations` - Gespeicherte Berechnungen
- `POST /api/user/bookmarks` - Bookmark hinzufügen
- `DELETE /api/user/bookmarks/[id]` - Bookmark entfernen
- `POST /api/advisory/request` - Beratungsanfrage stellen

#### 4.3.3 CMS APIs (Redakteure)
- `GET /api/cms/content` - Content-Liste (mit Filtern)
- `POST /api/cms/content` - Content erstellen
- `PUT /api/cms/content/[id]` - Content aktualisieren
- `DELETE /api/cms/content/[id]` - Content löschen
- `POST /api/cms/content/[id]/publish` - Content veröffentlichen
- `GET /api/cms/media` - Medien auflisten
- `POST /api/cms/media` - Medium hochladen
- `GET /api/cms/analytics` - Analytics-Daten

### 4.4 Sicherheitsanforderungen

#### 4.4.1 Authentifizierung & Autorisierung
- **Passwort-Anforderungen:**
  - Mindestens 12 Zeichen
  - Groß- und Kleinbuchstaben
  - Zahlen
  - Sonderzeichen
  - Passwort-Hashing mit bcrypt (mind. 10 Rounds)
- **Session-Management:**
  - Secure, HttpOnly Cookies
  - CSRF-Protection
  - Session-Timeout nach Inaktivität (30 Minuten)
  - Refresh-Token-Mechanismus
- **Zwei-Faktor-Authentifizierung:**
  - TOTP-basiert (Time-based One-Time Password)
  - Backup-Codes
  - Optional für Kunden, Pflicht für CMS-User
- **Rate-Limiting:**
  - Login-Versuche: 5 pro 15 Minuten
  - API-Requests: 100 pro Minute pro IP
  - File-Uploads: 10 pro Stunde pro User

#### 4.4.2 Datenverschlüsselung
- **In Transit:**
  - TLS 1.3 für alle Verbindungen
  - HSTS (HTTP Strict Transport Security)
  - Perfect Forward Secrecy
- **At Rest:**
  - Verschlüsselung sensibler Datenbankfelder
  - Verschlüsselung hochgeladener Dokumente (AES-256)
  - Verschlüsselte Backups

#### 4.4.3 Datenschutz
- **DSGVO-Compliance:**
  - Datenschutzerklärung
  - Cookie-Banner mit Einwilligung
  - Recht auf Auskunft, Löschung, Berichtigung
  - Datenportabilität
  - Automatische Löschung inaktiver Accounts (nach 2 Jahren)
- **Datenminimierung:**
  - Nur notwendige Daten erheben
  - Anonymisierung von Analytics-Daten
  - Pseudonymisierung wo möglich

#### 4.4.4 Input-Validierung & Sanitization
- **Server-Side-Validierung:**
  - Alle Eingaben validieren (Zod-Schemas)
  - SQL-Injection-Schutz (ORM mit Parameterized Queries)
  - XSS-Schutz (Content-Security-Policy)
  - File-Upload-Validierung (Typ, Größe, Content-Check)
- **Content-Security-Policy:**
  - Strikte CSP-Header
  - Whitelist für externe Ressourcen
  - Nonce-basierte Script-Ausführung

#### 4.4.5 Monitoring & Logging
- **Audit-Logging:**
  - Alle kritischen Aktionen protokollieren
  - Login-Versuche
  - Datenzugriffe
  - Content-Änderungen
- **Security-Monitoring:**
  - Intrusion Detection
  - Anomalie-Erkennung
  - Automatische Alerts bei verdächtigen Aktivitäten
- **Vulnerability-Management:**
  - Regelmäßige Dependency-Updates
  - Security-Scans
  - Penetration-Testing (jährlich)

#### 4.4.6 Backup & Disaster Recovery
- **Backups:**
  - Tägliche automatische Backups der Datenbank
  - Wöchentliche Backups aller Dateien
  - Verschlüsselte Backups
  - Retention: 30 Tage
- **Disaster Recovery:**
  - Recovery-Time-Objective (RTO): < 4 Stunden
  - Recovery-Point-Objective (RPO): < 24 Stunden
  - Regelmäßige DR-Tests

### 4.5 Performance-Anforderungen

#### 4.5.1 Ladezeiten
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1

#### 4.5.2 Optimierungen
- **Code-Splitting:** Automatisch durch Next.js
- **Image-Optimization:** Next.js Image-Komponente mit WebP
- **Caching:**
  - Static Pages: ISR (Incremental Static Regeneration)
  - API-Routes: Redis-Caching wo sinnvoll
  - CDN-Caching für statische Assets
- **Database-Optimierung:**
  - Indizes auf häufig abgefragten Feldern
  - Query-Optimierung
  - Connection-Pooling
- **Bundle-Size:**
  - Code-Splitting
  - Tree-Shaking
  - Lazy-Loading von Komponenten

### 4.6 SEO-Anforderungen
- **Technisches SEO:**
  - Server-Side-Rendering (SSR) für alle Content-Pages
  - Sitemap.xml (automatisch generiert)
  - Robots.txt
  - Structured Data (JSON-LD)
  - Canonical-URLs
- **On-Page-SEO:**
  - Optimierte Meta-Tags
  - Semantisches HTML
  - Alt-Texte für Bilder
  - Interne Verlinkung
- **Performance-SEO:**
  - Core Web Vitals optimieren
  - Mobile-First-Indexing

---

## 5. Design-Spezifikationen

### 5.1 Design-System
- **Farben:** Basierend auf TARGOBANK-Branding
  - Primärfarbe: TARGOBANK-Blau
  - Sekundärfarben: Ergänzende Farbpalette
  - Neutrale Farben: Graustufen für Text und Hintergründe
- **Typography:**
  - Headlines: Sans-Serif (z.B. Inter, System Font Stack)
  - Body: Sans-Serif, gut lesbar
  - Hierarchie: H1-H6 klar definiert
- **Spacing:** Konsistentes Spacing-System (4px-Basis)
- **Komponenten:** Wiederverwendbare UI-Komponenten
- **Icons:** Konsistente Icon-Bibliothek (z.B. Lucide Icons)

### 5.2 Responsive Design
- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Mobile-First-Ansatz**
- **Touch-Optimierung:** Mindestens 44x44px für Touch-Targets

### 5.3 Barrierefreiheit
- **WCAG 2.1 AA-Konformität**
- **Keyboard-Navigation:** Vollständig per Tastatur bedienbar
- **Screen-Reader:** Semantisches HTML, ARIA-Labels
- **Kontrast:** Mindestens 4.5:1 für Text
- **Focus-Indikatoren:** Sichtbare Focus-States

---

## 6. E-Mail-Integration (Resend)

### 6.1 E-Mail-Typen

#### 6.1.1 Kunden-E-Mails
- **Registrierung:**
  - Willkommens-E-Mail
  - E-Mail-Verifizierung
- **Account-Management:**
  - Passwort-Reset
  - Passwort geändert
  - 2FA aktiviert/deaktiviert
- **Dokumente:**
  - Bestätigung nach Upload
  - Benachrichtigung bei Löschung
- **Beratungsanfrage:**
  - Bestätigung der Anfrage
  - Terminbestätigung
  - Erinnerung vor Termin

#### 6.1.2 CMS-E-Mails
- **Workflow:**
  - Benachrichtigung bei Review-Anfrage
  - Benachrichtigung bei Freigabe/Ablehnung
  - Benachrichtigung bei Kommentaren
- **Account:**
  - Willkommens-E-Mail
  - Passwort-Reset

#### 6.1.3 Newsletter
- **Anmeldung:**
  - Bestätigungs-E-Mail (Double-Opt-In)
  - Willkommens-E-Mail nach Bestätigung
- **Newsletter-Versand:**
  - Regelmäßige Newsletter
  - Event-basierte E-Mails

### 6.2 E-Mail-Templates
- Responsive HTML-Templates
- Plain-Text-Versionen
- Branding-konform
- Personalisierung möglich

---

## 7. Deployment & Infrastruktur

### 7.1 Hosting (Vercel)
- **Production:**
  - Next.js-App auf Vercel
  - Automatisches Deployment bei Git-Push
  - Preview-Deployments für Pull-Requests
  - Environment-Variablen-Management
- **Staging:**
  - Separate Staging-Umgebung
  - Test-Datenbank
- **Development:**
  - Lokale Entwicklungsumgebung

### 7.2 Datenbank (Neon)
- **Production-Datenbank:**
  - Neon PostgreSQL
  - Automatische Backups
  - Read-Replicas für Performance (optional)
- **Connection-Pooling:**
  - Neon Connection Pooler nutzen
- **Migrations:**
  - Drizzle/Prisma Migrations
  - Versionierte Schema-Änderungen

### 7.3 File Storage
- **Option 1: Vercel Blob Storage**
  - Integriert mit Vercel
  - Automatische CDN-Verteilung
- **Option 2: AWS S3**
  - Mehr Kontrolle
  - CloudFront CDN
- **Verschlüsselung:** Server-Side-Encryption (SSE)

### 7.4 Monitoring & Analytics
- **Application-Monitoring:**
  - Vercel Analytics
  - Sentry für Error-Tracking
- **Performance-Monitoring:**
  - Web Vitals-Tracking
  - Real-User-Monitoring (RUM)
- **Business-Analytics:**
  - Google Analytics 4 (optional)
  - Custom-Dashboards

---

## 8. Entwicklungsprozess

### 8.1 Version Control
- **Git-Repository:** GitHub oder GitLab
- **Branching-Strategy:** Git Flow oder GitHub Flow
- **Code-Review:** Pflicht für alle Pull-Requests
- **Commit-Messages:** Konventionelle Commits

### 8.2 Testing
- **Unit-Tests:** Jest + React Testing Library
- **Integration-Tests:** Playwright oder Cypress
- **E2E-Tests:** Kritische User-Flows
- **Test-Coverage:** Mindestens 70%

### 8.3 CI/CD
- **Continuous Integration:**
  - Automatische Tests bei jedem Push
  - Linting (ESLint, Prettier)
  - Type-Checking (TypeScript)
- **Continuous Deployment:**
  - Automatisches Deployment nach erfolgreichen Tests
  - Staging-Deployment für Feature-Branches
  - Production-Deployment nur von Main-Branch

### 8.4 Code-Quality
- **Linting:** ESLint mit strikten Regeln
- **Formatting:** Prettier
- **Type-Safety:** Strikte TypeScript-Konfiguration
- **Documentation:** JSDoc für komplexe Funktionen

---

## 9. Projektplan & Meilensteine

### 9.1 Phase 1: Setup & Grundlagen (Woche 1-2)
- Projekt-Setup (Next.js, TypeScript, Tailwind)
- Datenbank-Setup (Neon)
- Authentifizierung (NextAuth.js)
- Basis-Design-System
- CI/CD-Pipeline

### 9.2 Phase 2: CMS-Grundfunktionen (Woche 3-5)
- CMS-Dashboard
- Content-Verwaltung (CRUD)
- Medienverwaltung
- Benutzerverwaltung (CMS)
- Workflow-System

### 9.3 Phase 3: Content-Types (Woche 6-9)
- Produktpages
- Ratgeber-Artikel
- Lexikon
- Vergleiche
- Rechner-Integration

### 9.4 Phase 4: Kundenbereich (Woche 10-12)
- Registrierung & Login
- Profil-Verwaltung
- Dokumenten-Upload
- Gespeicherte Inhalte
- Beratungsanfrage

### 9.5 Phase 5: Öffentliche Funktionen (Woche 13-14)
- Navigation & Suche
- Newsletter
- Kontaktformulare
- Social Sharing

### 9.6 Phase 6: Sicherheit & Performance (Woche 15-16)
- Security-Audit
- Performance-Optimierung
- SEO-Optimierung
- Accessibility-Check

### 9.7 Phase 7: Testing & Bug-Fixes (Woche 17-18)
- Umfangreiches Testing
- Bug-Fixes
- Performance-Tuning
- Security-Hardening

### 9.8 Phase 8: Launch-Vorbereitung (Woche 19-20)
- Finale Tests
- Dokumentation
- Schulung der Redakteure
- Go-Live

---

## 10. Risiken & Mitigation

### 10.1 Technische Risiken
| Risiko | Wahrscheinlichkeit | Impact | Mitigation |
|--------|-------------------|--------|------------|
| Performance-Probleme bei hohem Traffic | Mittel | Hoch | Load-Testing, Caching-Strategie, CDN |
| Datenbank-Performance | Mittel | Mittel | Indizierung, Query-Optimierung, Read-Replicas |
| Sicherheitslücken | Niedrig | Sehr Hoch | Security-Audits, Penetration-Testing, regelmäßige Updates |
| Datenverlust | Niedrig | Sehr Hoch | Automatische Backups, Disaster-Recovery-Plan |

### 10.2 Projekt-Risiken
| Risiko | Wahrscheinlichkeit | Impact | Mitigation |
|--------|-------------------|--------|------------|
| Scope-Creep | Hoch | Mittel | Klare Anforderungen, Change-Management-Prozess |
| Verzögerungen | Mittel | Mittel | Puffer einplanen, regelmäßige Reviews |
| Ressourcen-Engpässe | Mittel | Mittel | Frühzeitige Ressourcenplanung |

### 10.3 Compliance-Risiken
| Risiko | Wahrscheinlichkeit | Impact | Mitigation |
|--------|-------------------|--------|------------|
| DSGVO-Verstöße | Niedrig | Sehr Hoch | Rechtliche Prüfung, Datenschutz-Folgenabschätzung |
| Banken-Compliance | Niedrig | Sehr Hoch | Compliance-Review, regelmäßige Audits |

---

## 11. Erfolgsmetriken (KPIs)

### 11.1 Business-KPIs
- Anzahl der Besucher pro Monat
- Conversion-Rate (Besucher → Beratungsanfrage)
- Anzahl der Newsletter-Anmeldungen
- Anzahl der hochgeladenen Dokumente
- Durchschnittliche Verweildauer

### 11.2 Technische KPIs
- Seitenladezeit (LCP < 2.5s)
- Error-Rate (< 0.1%)
- Uptime (> 99.9%)
- API-Response-Zeit (< 200ms)

### 11.3 Content-KPIs
- Anzahl der veröffentlichten Artikel
- Engagement-Rate (Zeit auf Seite, Scroll-Tiefe)
- Top-Performing-Content
- Suchanfragen (interne Suche)

---

## 12. Zukünftige Erweiterungen (Roadmap)

### 12.1 Phase 2 (nach Launch)
- Mehrsprachigkeit (i18n)
- Erweiterte Analytics
- A/B-Testing-Funktionalität
- Chatbot-Integration
- Video-Integration

### 12.2 Phase 3
- Mobile App (optional)
- Erweiterte Rechner
- Personalisierte Content-Empfehlungen
- Social-Login
- API für externe Partner

---

## 13. Anhänge

### 13.1 Glossar
- **CMS:** Content-Management-System
- **ISR:** Incremental Static Regeneration
- **SSR:** Server-Side Rendering
- **CSR:** Client-Side Rendering
- **TOTP:** Time-based One-Time Password
- **2FA:** Zwei-Faktor-Authentifizierung
- **DSGVO:** Datenschutz-Grundverordnung
- **WCAG:** Web Content Accessibility Guidelines

### 13.2 Referenzen
- [TARGOBANK Website](https://www.targobank.de/de/)
- [Next.js Dokumentation](https://nextjs.org/docs)
- [Neon Dokumentation](https://neon.tech/docs)
- [Resend Dokumentation](https://resend.com/docs)
- [DSGVO](https://dsgvo-gesetz.de/)

---

## 14. Genehmigungen & Nächste Schritte

### 14.1 Genehmigungsprozess
1. Review durch Stakeholder
2. Technische Machbarkeitsprüfung
3. Budget-Freigabe
4. Ressourcen-Zuteilung
5. Projektstart

### 14.2 Nächste Schritte nach Genehmigung
1. Kick-off-Meeting
2. Detaillierte Technische Spezifikation
3. Design-Mockups
4. Entwicklungsstart

---

**Dokument-Ende**

