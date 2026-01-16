"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, X, Menu, Home, Calendar, HelpCircle, MapPin } from "lucide-react";
import { SearchBox } from "@/components/ui/search-box";
import { useState } from "react";

export function Header() {
  const [isFinanzierungOpen, setIsFinanzierungOpen] = useState(false);
  const [isVergleicheOpen, setIsVergleicheOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFinanzierungOpen, setIsMobileFinanzierungOpen] = useState(false);
  const [isMobileVergleicheOpen, setIsMobileVergleicheOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Bar - Customer Segments & Actions */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-[5px]">
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
            <div className="flex items-center gap-4 ml-auto">
              <Link
                href="/standorte"
                className="text-sm font-medium text-targo-blue hover:border-b-2 hover:border-targo-blue pb-1 flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Standorte
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-medium text-targo-blue hover:border-b-2 hover:border-targo-blue pb-1 flex items-center gap-1.5"
              >
                <HelpCircle className="w-4 h-4 flex-shrink-0" />
                Hilfe & Kontakt
              </Link>
              <Link
                href="/faqs-finanzierung"
                className="text-sm font-medium text-targo-blue hover:border-b-2 hover:border-targo-blue pb-1 flex items-center gap-1.5"
              >
                <HelpCircle className="w-4 h-4 flex-shrink-0" />
                FAQs zur Finanzierung
              </Link>
              <Button
                className="bg-[rgb(0,47,95)] hover:bg-[rgb(0,47,95)]/90 text-white rounded-full px-6 py-[10px] min-h-[44px] whitespace-nowrap"
                asChild
              >
                <Link href="/auth/signin" className="flex items-center gap-2">
                  <Home className="w-4 h-4 flex-shrink-0" />
                  <span className="font-bold">TargoHome</span>
                </Link>
              </Button>
              <Button
                className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-6 py-[10px] min-h-[44px] whitespace-nowrap"
                asChild
              >
                <Link href="/termin-vereinbaren" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="font-bold">Termin vereinbaren</span>
                </Link>
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
            <Image
              src="/targobank-logo-baufi.svg"
              alt="Targohyp Logo"
              width={150}
              height={45}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <div
              className="relative"
              onMouseEnter={() => setIsFinanzierungOpen(true)}
              onMouseLeave={() => setIsFinanzierungOpen(false)}
            >
              <Link
                href="/finanzierung"
                className="text-base font-bold text-[rgb(0,47,95)] hover:text-targo-blue transition-colors py-2 relative group flex items-center gap-1"
              >
                Finanzierung
                <ChevronDown className={`w-4 h-4 transition-transform ${isFinanzierungOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
              </Link>
              
              {/* Dropdown Menu */}
              {isFinanzierungOpen && (
                <>
                  {/* Unsichtbarer Bereich zum Überbrücken der Lücke */}
                  <div className="absolute top-full left-0 w-full h-2"></div>
                  <div className="absolute top-full left-0 pt-2 w-80 z-50">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="py-2">
                        <Link
                          href="/finanzierung"
                          className="block px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsFinanzierungOpen(false)}
                        >
                          Übersicht
                        </Link>
                        <div className="border-t border-gray-200 my-1"></div>
                        <Link
                          href="/finanzierung/baufinanzierung"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsFinanzierungOpen(false)}
                        >
                          Baufinanzierung
                        </Link>
                        <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-2">
                          <Link
                            href="/finanzierung/baufinanzierung/beamte"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                            onClick={() => setIsFinanzierungOpen(false)}
                          >
                            Baufinanzierung für Beamte
                          </Link>
                          <Link
                            href="/finanzierung/baufinanzierung/selbststaendige"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                            onClick={() => setIsFinanzierungOpen(false)}
                          >
                            Baufinanzierung für Selbstständige
                          </Link>
                          <Link
                            href="/finanzierung/baufinanzierung/ohne-eigenkapital"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                            onClick={() => setIsFinanzierungOpen(false)}
                          >
                            Baufinanzierung ohne Eigenkapital
                          </Link>
                        </div>
                        <Link
                          href="/finanzierung/immobilienfinanzierung"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsFinanzierungOpen(false)}
                        >
                          Immobilienfinanzierung
                        </Link>
                        <Link
                          href="/finanzierung/kapitalanlage-finanzieren"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsFinanzierungOpen(false)}
                        >
                          Kapitalanlage finanzieren
                        </Link>
                        <Link
                          href="/finanzierung/anschlussfinanzierung"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsFinanzierungOpen(false)}
                        >
                          Anschlussfinanzierung
                        </Link>
                        <Link
                          href="/finanzierung/ablauf-unterlagen"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsFinanzierungOpen(false)}
                        >
                          Ablauf & Unterlagen
                        </Link>
                        <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-2">
                          <Link
                            href="/finanzierung/ablauf-unterlagen/checklisten"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                            onClick={() => setIsFinanzierungOpen(false)}
                          >
                            Checklists
                          </Link>
                          <Link
                            href="/finanzierung/ablauf-unterlagen/bonitaet-schufa"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                            onClick={() => setIsFinanzierungOpen(false)}
                          >
                            Bonität / Schufa
                          </Link>
                        </div>
                        <Link
                          href="/finanzierung/darlehensarten"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsFinanzierungOpen(false)}
                        >
                          Darlehensarten
                        </Link>
                        <Link
                          href="/finanzierung/foerdermittel"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsFinanzierungOpen(false)}
                        >
                          Fördermittel
                        </Link>
                        <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-2">
                          <Link
                            href="/finanzierung/foerdermittel/kfw"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                            onClick={() => setIsFinanzierungOpen(false)}
                          >
                            KfW
                          </Link>
                          <Link
                            href="/finanzierung/foerdermittel/bafa"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                            onClick={() => setIsFinanzierungOpen(false)}
                          >
                            Bafa
                          </Link>
                          <Link
                            href="/finanzierung/foerdermittel/regionale-foerdermittel"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                            onClick={() => setIsFinanzierungOpen(false)}
                          >
                            Regionale Fördermittel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Link
              href="/rechner"
              className="text-base font-bold text-[rgb(0,47,95)] hover:text-targo-blue transition-colors py-2 relative group"
            >
              Rechner
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/immobilienbewertung"
              className="text-base font-bold text-[rgb(0,47,95)] hover:text-targo-blue transition-colors py-2 relative group"
            >
              Immobilienbewertung
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/ratgeber"
              className="text-base font-bold text-[rgb(0,47,95)] hover:text-targo-blue transition-colors py-2 relative group"
            >
              Ratgeber
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsVergleicheOpen(true)}
              onMouseLeave={() => setIsVergleicheOpen(false)}
            >
              <Link
                href="/vergleiche"
                className="text-base font-bold text-[rgb(0,47,95)] hover:text-targo-blue transition-colors py-2 relative group flex items-center gap-1"
              >
                Vergleiche
                <ChevronDown className={`w-4 h-4 transition-transform ${isVergleicheOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-targo-blue transition-all group-hover:w-full"></span>
              </Link>
              
              {/* Dropdown Menu */}
              {isVergleicheOpen && (
                <>
                  {/* Unsichtbarer Bereich zum Überbrücken der Lücke */}
                  <div className="absolute top-full left-0 w-full h-2"></div>
                  <div className="absolute top-full left-0 pt-2 w-80 z-50">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="py-2">
                        <Link
                          href="/vergleiche"
                          className="block px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsVergleicheOpen(false)}
                        >
                          Übersicht
                        </Link>
                        <div className="border-t border-gray-200 my-1"></div>
                        <Link
                          href="/vergleiche/zinsvergleich"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsVergleicheOpen(false)}
                        >
                          Festzins vs. variabler Zins
                        </Link>
                        <Link
                          href="/vergleiche/zinsentwicklung"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsVergleicheOpen(false)}
                        >
                          Zinsentwicklung
                        </Link>
                        <Link
                          href="/vergleiche/produktvergleich"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsVergleicheOpen(false)}
                        >
                          Produktvergleich
                        </Link>
                        <Link
                          href="/vergleiche/tilgungsvergleich"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-targo-blue transition-colors"
                          onClick={() => setIsVergleicheOpen(false)}
                        >
                          Tilgungsvergleich
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <SearchBox />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {/* Finanzierung mit Dropdown */}
            <div>
              <button
                className="w-full flex items-center justify-between text-base font-bold text-[rgb(0,47,95)] py-3 px-2 hover:text-targo-blue transition-colors"
                onClick={() => setIsMobileFinanzierungOpen(!isMobileFinanzierungOpen)}
                aria-expanded={isMobileFinanzierungOpen}
              >
                <span>Finanzierung</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isMobileFinanzierungOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {isMobileFinanzierungOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-2">
                  <Link
                    href="/finanzierung"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFinanzierungOpen(false);
                    }}
                  >
                    Übersicht
                  </Link>
                  <Link
                    href="/finanzierung/baufinanzierung"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFinanzierungOpen(false);
                    }}
                  >
                    Baufinanzierung
                  </Link>
                  <div className="pl-6 space-y-1 border-l-2 border-gray-100 ml-2">
                    <Link
                      href="/finanzierung/baufinanzierung/beamte"
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-targo-blue transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileFinanzierungOpen(false);
                      }}
                    >
                      Baufinanzierung für Beamte
                    </Link>
                    <Link
                      href="/finanzierung/baufinanzierung/selbststaendige"
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-targo-blue transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileFinanzierungOpen(false);
                      }}
                    >
                      Baufinanzierung für Selbstständige
                    </Link>
                    <Link
                      href="/finanzierung/baufinanzierung/ohne-eigenkapital"
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-targo-blue transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileFinanzierungOpen(false);
                      }}
                    >
                      Baufinanzierung ohne Eigenkapital
                    </Link>
                  </div>
                  <Link
                    href="/finanzierung/immobilienfinanzierung"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFinanzierungOpen(false);
                    }}
                  >
                    Immobilienfinanzierung
                  </Link>
                  <Link
                    href="/finanzierung/kapitalanlage-finanzieren"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFinanzierungOpen(false);
                    }}
                  >
                    Kapitalanlage finanzieren
                  </Link>
                  <Link
                    href="/finanzierung/anschlussfinanzierung"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFinanzierungOpen(false);
                    }}
                  >
                    Anschlussfinanzierung
                  </Link>
                  <Link
                    href="/finanzierung/ablauf-unterlagen"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFinanzierungOpen(false);
                    }}
                  >
                    Ablauf & Unterlagen
                  </Link>
                  <div className="pl-6 space-y-1 border-l-2 border-gray-100 ml-2">
                    <Link
                      href="/finanzierung/ablauf-unterlagen/checklisten"
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-targo-blue transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileFinanzierungOpen(false);
                      }}
                    >
                      Checklists
                    </Link>
                    <Link
                      href="/finanzierung/ablauf-unterlagen/bonitaet-schufa"
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-targo-blue transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileFinanzierungOpen(false);
                      }}
                    >
                      Bonität / Schufa
                    </Link>
                  </div>
                  <Link
                    href="/finanzierung/darlehensarten"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFinanzierungOpen(false);
                    }}
                  >
                    Darlehensarten
                  </Link>
                  <Link
                    href="/finanzierung/foerdermittel"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFinanzierungOpen(false);
                    }}
                  >
                    Fördermittel
                  </Link>
                  <div className="pl-6 space-y-1 border-l-2 border-gray-100 ml-2">
                    <Link
                      href="/finanzierung/foerdermittel/kfw"
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-targo-blue transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileFinanzierungOpen(false);
                      }}
                    >
                      KfW
                    </Link>
                    <Link
                      href="/finanzierung/foerdermittel/bafa"
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-targo-blue transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileFinanzierungOpen(false);
                      }}
                    >
                      Bafa
                    </Link>
                    <Link
                      href="/finanzierung/foerdermittel/regionale-foerdermittel"
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-targo-blue transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileFinanzierungOpen(false);
                      }}
                    >
                      Regionale Fördermittel
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Weitere Navigation Links */}
            <Link
              href="/rechner"
              className="block text-base font-bold text-[rgb(0,47,95)] py-3 px-2 hover:text-targo-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rechner
            </Link>
            <Link
              href="/immobilienbewertung"
              className="block text-base font-bold text-[rgb(0,47,95)] py-3 px-2 hover:text-targo-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Immobilienbewertung
            </Link>
            <Link
              href="/ratgeber"
              className="block text-base font-bold text-[rgb(0,47,95)] py-3 px-2 hover:text-targo-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ratgeber
            </Link>
            {/* Vergleiche mit Dropdown */}
            <div>
              <button
                className="w-full flex items-center justify-between text-base font-bold text-[rgb(0,47,95)] py-3 px-2 hover:text-targo-blue transition-colors"
                onClick={() => setIsMobileVergleicheOpen(!isMobileVergleicheOpen)}
                aria-expanded={isMobileVergleicheOpen}
              >
                <span>Vergleiche</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isMobileVergleicheOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {isMobileVergleicheOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-2">
                  <Link
                    href="/vergleiche"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileVergleicheOpen(false);
                    }}
                  >
                    Übersicht
                  </Link>
                  <Link
                    href="/vergleiche/zinsvergleich"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileVergleicheOpen(false);
                    }}
                  >
                    Festzins vs. variabler Zins
                  </Link>
                  <Link
                    href="/vergleiche/zinsentwicklung"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileVergleicheOpen(false);
                    }}
                  >
                    Zinsentwicklung
                  </Link>
                  <Link
                    href="/vergleiche/produktvergleich"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileVergleicheOpen(false);
                    }}
                  >
                    Produktvergleich
                  </Link>
                  <Link
                    href="/vergleiche/tilgungsvergleich"
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-targo-blue transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileVergleicheOpen(false);
                    }}
                  >
                    Tilgungsvergleich
                  </Link>
                </div>
              )}
            </div>

            {/* SearchBox für Mobile */}
            <div className="pt-2 border-t border-gray-200 mt-2">
              <SearchBox />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
