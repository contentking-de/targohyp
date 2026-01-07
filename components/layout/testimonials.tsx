"use client";

import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Schmidt",
      location: "München",
      text: "Die Beratung war wirklich hervorragend. Unser Berater hat sich viel Zeit genommen und alle unsere Fragen geduldig beantwortet. Am Ende haben wir die perfekte Finanzierung für unser Eigenheim gefunden.",
      rating: 5,
      date: "2024",
    },
    {
      id: 2,
      name: "Sarah Müller",
      location: "Hamburg",
      text: "Besonders beeindruckt hat mich die Transparenz. Alle Kosten wurden von Anfang an klar kommuniziert und es gab keine versteckten Überraschungen. Sehr professionell!",
      rating: 5,
      date: "2024",
    },
    {
      id: 3,
      name: "Thomas Weber",
      location: "Berlin",
      text: "Die Rechner auf der Website haben mir sehr geholfen, verschiedene Szenarien durchzuspielen. Die anschließende Beratung war dann der perfekte nächste Schritt. Kann ich nur empfehlen!",
      rating: 5,
      date: "2023",
    },
    {
      id: 4,
      name: "Julia Hoffmann",
      location: "Köln",
      text: "Als Erstkäuferin hatte ich viele Fragen. Das Team hat mir alles verständlich erklärt und mich durch den gesamten Prozess begleitet. Jetzt wohnen wir endlich in unserem Traumhaus!",
      rating: 5,
      date: "2024",
    },
    {
      id: 5,
      name: "Andreas Fischer",
      location: "Frankfurt",
      text: "Die Anschlussfinanzierung wurde optimal geplant. Wir konnten sogar bessere Konditionen als erwartet erhalten. Vielen Dank für die kompetente Unterstützung!",
      rating: 5,
      date: "2024",
    },
    {
      id: 6,
      name: "Lisa Schneider",
      location: "Stuttgart",
      text: "Von der ersten Kontaktaufnahme bis zur Vertragsunterzeichnung - alles lief reibungslos. Die Kommunikation war immer freundlich und zuverlässig. Top Service!",
      rating: 5,
      date: "2023",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-targo-blue">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-gray-700">
            Über 10.000 zufriedene Kunden vertrauen auf unsere Expertise in der
            Baufinanzierung
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-targo-blue/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.location} • {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-targo-blue mb-2">
                10.000+
              </div>
              <p className="text-sm text-gray-600">Zufriedene Kunden</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-targo-blue mb-2">
                4.9/5
              </div>
              <p className="text-sm text-gray-600">Durchschnittliche Bewertung</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-targo-blue mb-2">
                98%
              </div>
              <p className="text-sm text-gray-600">Weiterempfehlungsrate</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-targo-blue mb-2">
                15+
              </div>
              <p className="text-sm text-gray-600">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

