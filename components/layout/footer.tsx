import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-targo-red">TARGO</span>
              <span className="text-xl font-bold text-targo-blue">HYP</span>
            </div>
            <p className="text-sm text-gray-600">
              Ihre Content-Plattform für Baufinanzierung
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Produkte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/produkte"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Übersicht
                </Link>
              </li>
              <li>
                <Link
                  href="/produkte/vergleichen"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Vergleichen
                </Link>
              </li>
              <li>
                <Link
                  href="/rechner"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Rechner
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Informationen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ratgeber"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Ratgeber
                </Link>
              </li>
              <li>
                <Link
                  href="/lexikon"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Lexikon
                </Link>
              </li>
              <li>
                <Link
                  href="/vergleiche"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Vergleiche
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-600 hover:text-targo-blue transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Targohyp. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
