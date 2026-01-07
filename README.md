# Targohyp - Content-Plattform für Baufinanzierung

Eine moderne, sichere Content-Plattform für das Thema Baufinanzierung, die als Informations- und Vorbereitungsportal für potentielle Baufinanzierungskunden dient.

## Tech Stack

- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API Routes, Server Actions
- **Datenbank:** Neon PostgreSQL mit Drizzle ORM
- **Authentifizierung:** NextAuth.js (Auth.js)
- **E-Mail:** Resend
- **File Storage:** Vercel Blob Storage

## Setup

### 1. Dependencies installieren

```bash
npm install
```

### 2. Environment-Variablen konfigurieren

Erstelle eine `.env.local` Datei basierend auf `.env.example`:

```bash
cp .env.example .env.local
```

Fülle die notwendigen Werte aus:
- `DATABASE_URL`: Neon PostgreSQL Connection String
- `NEXTAUTH_SECRET`: Generiere einen Secret (z.B. mit `openssl rand -base64 32`)
- `RESEND_API_KEY`: API Key von Resend
- `BLOB_READ_WRITE_TOKEN`: Token von Vercel Blob Storage

### 3. Datenbank-Setup

```bash
# Generiere Migrationen
npm run db:generate

# Führe Migrationen aus
npm run db:migrate

# Oder pushe direkt (für Development)
npm run db:push
```

### 4. Development Server starten

```bash
npm run dev
```

Die Anwendung läuft dann auf [http://localhost:3000](http://localhost:3000)

## Projektstruktur

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentifizierungs-Routes
│   ├── (cms)/             # CMS-Bereich
│   ├── (user)/            # Kundenbereich
│   └── api/               # API Routes
├── components/            # React-Komponenten
├── db/                    # Datenbank-Schema und Queries
│   ├── schema/            # Drizzle Schema-Definitionen
│   └── index.ts           # Datenbank-Connection
├── lib/                   # Utility-Funktionen
└── public/                # Statische Assets
```

## Entwicklung

### Datenbank-Migrationen

```bash
# Schema-Änderungen generieren
npm run db:generate

# Migrationen ausführen
npm run db:migrate

# Drizzle Studio öffnen (GUI für Datenbank)
npm run db:studio
```

### Code-Qualität

```bash
# Linting
npm run lint

# Type-Checking
npx tsc --noEmit
```

## Nächste Schritte

Siehe PRD_Targohyp.md für detaillierte Anforderungen und den Projektplan.

## License

ISC

