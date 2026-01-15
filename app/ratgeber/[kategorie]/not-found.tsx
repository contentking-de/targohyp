import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Kategorie nicht gefunden
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Die angeforderte Kategorie existiert nicht oder wurde verschoben.
        </p>
        <Button
          className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full px-8 py-6 text-lg font-semibold"
          asChild
        >
          <Link href="/ratgeber" className="flex items-center whitespace-nowrap">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Zurück zur Ratgeber-Übersicht
          </Link>
        </Button>
      </div>
    </div>
  );
}
