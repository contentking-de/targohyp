"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Calculator,
  GitCompare,
  Calendar,
  User,
  DollarSign,
  Home,
  LogOut,
  Loader2,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DashboardData {
  user: {
    id: string;
    email: string;
    createdAt: string;
    lastLogin: string | null;
  } | null;
  profile: {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    address: string | null;
    dateOfBirth: string | null;
    monthlyIncome: string | null;
    availableCapital: string | null;
    desiredFinancingAmount: string | null;
    desiredTerm: string | null;
  } | null;
  documents: Array<{
    id: string;
    filename: string;
    originalFilename: string;
    category: string | null;
    uploadedAt: string;
  }>;
  calculations: Array<{
    id: string;
    calculatorType: string;
    createdAt: string;
  }>;
  comparisons: Array<{
    id: string;
    comparisonType: string;
    createdAt: string;
  }>;
  advisoryRequests: Array<{
    id: string;
    preferredDate: string | null;
    preferredTime: string | null;
    status: string;
    createdAt: string;
  }>;
  financingRequests: Array<{
    id: string;
    financingType: string | null;
    propertyType: string | null;
    status: string;
    createdAt: string;
  }>;
  valuations: Array<{
    id: string;
    location: string;
    squareMeters: string;
    status: string;
    createdAt: string;
  }>;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
      return;
    }

    if (status === "authenticated") {
      fetchDashboardData();
    }
  }, [status, router]);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/dashboard");
      if (response.ok) {
        const data = await response.json();
        setDashboardData(data);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#bb133e]" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const { user, profile, documents, calculations, comparisons, advisoryRequests, financingRequests, valuations } = dashboardData || {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">
                Willkommen zurück, {profile?.firstName || session.user.email}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Abmelden
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Übersichtskarten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Dokumente"
            value={documents?.length || 0}
            icon={FileText}
            color="blue"
          />
          <StatCard
            title="Berechnungen"
            value={calculations?.length || 0}
            icon={Calculator}
            color="green"
          />
          <StatCard
            title="Vergleiche"
            value={comparisons?.length || 0}
            icon={GitCompare}
            color="purple"
          />
          <StatCard
            title="Anfragen"
            value={(advisoryRequests?.length || 0) + (financingRequests?.length || 0)}
            icon={Calendar}
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Linke Spalte - Persönliche Informationen */}
          <div className="lg:col-span-2 space-y-6">
            {/* Persönliche Informationen */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-[#bb133e]" />
                Persönliche Informationen
              </h2>
              {profile ? (
                <div className="space-y-4">
                  <InfoRow
                    label="Name"
                    value={
                      profile.firstName && profile.lastName
                        ? `${profile.firstName} ${profile.lastName}`
                        : "Nicht angegeben"
                    }
                    icon={User}
                  />
                  <InfoRow
                    label="E-Mail"
                    value={user?.email || "Nicht angegeben"}
                    icon={Mail}
                  />
                  <InfoRow
                    label="Telefon"
                    value={profile.phone || "Nicht angegeben"}
                    icon={Phone}
                  />
                  <InfoRow
                    label="Adresse"
                    value={profile.address || "Nicht angegeben"}
                    icon={MapPin}
                  />
                  <InfoRow
                    label="Geburtsdatum"
                    value={
                      profile.dateOfBirth
                        ? new Date(profile.dateOfBirth).toLocaleDateString("de-DE")
                        : "Nicht angegeben"
                    }
                    icon={Calendar}
                  />
                </div>
              ) : (
                <p className="text-gray-500">Keine Profildaten vorhanden.</p>
              )}
            </section>

            {/* Finanzielle Informationen */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#bb133e]" />
                Finanzielle Informationen
              </h2>
              {profile ? (
                <div className="space-y-4">
                  <InfoRow
                    label="Monatliches Einkommen"
                    value={
                      profile.monthlyIncome
                        ? `${parseFloat(profile.monthlyIncome).toLocaleString("de-DE")} €`
                        : "Nicht angegeben"
                    }
                    icon={TrendingUp}
                  />
                  <InfoRow
                    label="Verfügbares Eigenkapital"
                    value={
                      profile.availableCapital
                        ? `${parseFloat(profile.availableCapital).toLocaleString("de-DE")} €`
                        : "Nicht angegeben"
                    }
                    icon={DollarSign}
                  />
                  <InfoRow
                    label="Gewünschter Finanzierungsbetrag"
                    value={
                      profile.desiredFinancingAmount
                        ? `${parseFloat(profile.desiredFinancingAmount).toLocaleString("de-DE")} €`
                        : "Nicht angegeben"
                    }
                    icon={Home}
                  />
                  <InfoRow
                    label="Gewünschte Laufzeit"
                    value={
                      profile.desiredTerm ? `${profile.desiredTerm} Jahre` : "Nicht angegeben"
                    }
                    icon={Calendar}
                  />
                </div>
              ) : (
                <p className="text-gray-500">Keine finanziellen Informationen vorhanden.</p>
              )}
            </section>

            {/* Dokumente */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#bb133e]" />
                Hochgeladene Dokumente ({documents?.length || 0})
              </h2>
              {documents && documents.length > 0 ? (
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <FileCheck className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">{doc.originalFilename}</p>
                          <p className="text-sm text-gray-500">
                            {doc.category && (
                              <span className="capitalize">{doc.category}</span>
                            )}{" "}
                            •{" "}
                            {new Date(doc.uploadedAt).toLocaleDateString("de-DE", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Noch keine Dokumente hochgeladen.</p>
              )}
            </section>

            {/* Gespeicherte Berechnungen */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#bb133e]" />
                Gespeicherte Berechnungen ({calculations?.length || 0})
              </h2>
              {calculations && calculations.length > 0 ? (
                <div className="space-y-3">
                  {calculations.map((calc) => (
                    <div
                      key={calc.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900 capitalize">
                          {calc.calculatorType.replace("_", " ")}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(calc.createdAt).toLocaleDateString("de-DE", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Noch keine Berechnungen gespeichert.</p>
              )}
            </section>

            {/* Beratungsanfragen */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#bb133e]" />
                Beratungsanfragen ({advisoryRequests?.length || 0})
              </h2>
              {advisoryRequests && advisoryRequests.length > 0 ? (
                <div className="space-y-3">
                  {advisoryRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {request.preferredDate
                            ? new Date(request.preferredDate).toLocaleDateString("de-DE", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })
                            : "Kein Datum angegeben"}
                          {request.preferredTime && ` • ${request.preferredTime}`}
                        </p>
                        <p className="text-sm text-gray-500 capitalize">{request.status}</p>
                      </div>
                      <StatusBadge status={request.status} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Noch keine Beratungsanfragen gestellt.</p>
              )}
            </section>

            {/* Finanzierungsanfragen */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#bb133e]" />
                Finanzierungsanfragen ({financingRequests?.length || 0})
              </h2>
              {financingRequests && financingRequests.length > 0 ? (
                <div className="space-y-3">
                  {financingRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {request.financingType || "Finanzierungsanfrage"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {request.propertyType && `${request.propertyType} • `}
                          {new Date(request.createdAt).toLocaleDateString("de-DE", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <StatusBadge status={request.status} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Noch keine Finanzierungsanfragen gestellt.</p>
              )}
            </section>
          </div>

          {/* Rechte Spalte - Schnellzugriff */}
          <div className="space-y-6">
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4">Schnellzugriff</h2>
              <div className="space-y-3">
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/rechner">
                    <Calculator className="w-4 h-4 mr-2" />
                    Rechner öffnen
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/finanzierungsanfrage">
                    <FileText className="w-4 h-4 mr-2" />
                    Finanzierungsanfrage stellen
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/immobilienbewertung">
                    <Home className="w-4 h-4 mr-2" />
                    Immobilie bewerten
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/kontakt">
                    <Mail className="w-4 h-4 mr-2" />
                    Kontakt aufnehmen
                  </Link>
                </Button>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4">Account-Informationen</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500">Registriert am</p>
                  <p className="font-medium">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("de-DE", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : "Nicht verfügbar"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Letzter Login</p>
                  <p className="font-medium">
                    {user?.lastLogin
                      ? new Date(user.lastLogin).toLocaleDateString("de-DE", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "Noch nie"}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: number;
  icon: any;
  color: string;
}) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color as keyof typeof colorClasses]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: any;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
    cancelled: "bg-red-100 text-red-800",
    new: "bg-gray-100 text-gray-800",
    in_progress: "bg-blue-100 text-blue-800",
    resolved: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
        statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
}

