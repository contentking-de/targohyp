export const metadata = {
  title: "Impressum - Rechtliche Angaben | Targohyp",
  description: "Impressum und rechtliche Angaben der Targohyp. Angaben gemäß § 5 TMG und Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV.",
};

export default function ImpressumPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Impressum
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4">Verantwortlich für den Inhalt</h2>
                <p className="mb-4">
                  <strong>TARGOBANK AG</strong><br />
                  Kasernenstraße 10<br />
                  40213 Düsseldorf<br />
                  Deutschland
                </p>
                <p className="mb-4">
                  <strong>Vertreten durch:</strong><br />
                  Vorstand der TARGOBANK AG
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
                <p className="mb-4">
                  <strong>Telefon:</strong> +49 (0) 221 123 456 78<br />
                  <strong>E-Mail:</strong> info@targohyp.de<br />
                  <strong>Website:</strong> www.targohyp.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Registereintrag</h2>
                <p className="mb-4">
                  <strong>Registergericht:</strong> Amtsgericht Düsseldorf<br />
                  <strong>Registernummer:</strong> HRB 12345<br />
                  <strong>Umsatzsteuer-ID:</strong> DE123456789
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Aufsichtsbehörde</h2>
                <p className="mb-4">
                  Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)<br />
                  Graurheindorfer Straße 108<br />
                  53117 Bonn<br />
                  Deutschland
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mb-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
                <p className="mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

