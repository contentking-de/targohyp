import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Artikel nicht gefunden</h1>
        <p className="text-gray-600 mb-8">
          Der gesuchte Artikel konnte nicht gefunden werden.
        </p>
        <Button
          className="bg-[#bb133e] hover:bg-[#a01135] text-white rounded-full"
          asChild
        >
          <Link href="/ratgeber" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Ratgeber-Übersicht
          </Link>
        </Button>
      </div>
    </div>
  );
}
