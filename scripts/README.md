# Scripts

## Admin-User erstellen

Um einen Admin-User zu erstellen, führe das Script aus:

```bash
# Mit tsx (empfohlen)
npx tsx scripts/create-admin-user.ts

# Oder mit ts-node
npx ts-node scripts/create-admin-user.ts
```

Das Script erstellt automatisch einen Admin-User mit:
- E-Mail: `nico@contentking.de`
- Rolle: `super_admin`
- Status: `active`

Falls der User bereits existiert, wird die Rolle aktualisiert, falls nötig.

## Magic Link Anmeldung

Nach dem Erstellen des Admin-Users kannst du dich anmelden:

1. Gehe zu `/auth/signin`
2. Gib deine E-Mail-Adresse ein (`nico@contentking.de`)
3. Du erhältst einen Magic Link per E-Mail
4. Klicke auf den Link, um dich anzumelden

**Hinweis:** Falls `RESEND_API_KEY` nicht gesetzt ist, wird der Magic Link in der Konsole ausgegeben (Development-Modus).

