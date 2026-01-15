import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full">
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-targo-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-targo-blue" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Begriff nicht gefunden
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Der gesuchte Begriff konnte im Lexikon nicht gefunden werden. Möglicherweise wurde er verschoben oder existiert nicht.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-targo-blue hover:bg-targo-blue/90 text-white"
                asChild
              >
                <Link href="/lexikon" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zum Lexikon
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-targo-blue text-targo-blue hover:bg-targo-blue/10"
                asChild
              >
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
