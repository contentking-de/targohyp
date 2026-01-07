import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { SearchBox } from "@/components/ui/search-box";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Bar - Customer Segments & Actions */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-6">
              <Link
                href="/privatkunden"
                className="text-sm font-medium text-targo-blue border-b-2 border-targo-blue pb-1"
              >
                Privatkunden
              </Link>
              <Link
                href="/geschaeftskunden"
                className="text-sm font-medium text-targo-blue hover:border-b-2 hover:border-targo-blue pb-1"
              >
                Geschäftskunden
              </Link>
              <Link
                href="/firmenkunden"
                className="text-sm font-medium text-targo-blue hover:border-b-2 hover:border-targo-blue pb-1"
              >
                Firmenkunden
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="bg-targo-blueLight hover:bg-targo-blue text-white rounded-full px-6"
                asChild
              >
                <Link href="/auth/signin">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-0.5">
              <span className="text-2xl font-bold font-handel" style={{ color: '#002f5f' }}>TARGO</span>
              <Home className="h-6 w-6 text-targo-blue" />
              <span className="text-2xl font-bold font-handel" style={{ color: '#bb133e' }}>HYP</span>
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="/produkte"
              className="text-base font-normal text-gray-900 hover:text-targo-blue transition-colors py-2 relative group"
            >
              Produkte
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/rechner"
              className="text-base font-normal text-gray-900 hover:text-targo-blue transition-colors py-2 relative group"
            >
              Rechner
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/ratgeber"
              className="text-base font-normal text-gray-900 hover:text-targo-blue transition-colors py-2 relative group"
            >
              Ratgeber
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/lexikon"
              className="text-base font-normal text-gray-900 hover:text-targo-blue transition-colors py-2 relative group"
            >
              Lexikon
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/vergleiche"
              className="text-base font-normal text-gray-900 hover:text-targo-blue transition-colors py-2 relative group"
            >
              Vergleiche
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/kontakt"
              className="text-base font-normal text-gray-900 hover:text-targo-blue transition-colors py-2 relative group"
            >
              Hilfe & Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <SearchBox />
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
