import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Datenschutzerklärung - DSGVO-konform | Targohyp",
  description: "Umfassende Datenschutzerklärung der Targohyp. Informationen zur Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten gemäß DSGVO.",
}, { path: "/datenschutz" });

export default function DatenschutzPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-targo-blue/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stand: Januar 2024
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
                <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <h3 className="text-xl font-semibold mb-3">Datenerfassung auf dieser Website</h3>
                <p className="mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
                <p className="mb-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="mb-4">
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Hosting</h2>
                <p className="mb-4">
                  Diese Website wird bei Vercel gehostet. Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend „Vercel").
                </p>
                <p className="mb-4">
                  Wenn Sie diese Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
                  <a href="https://vercel.com/legal/privacy-policy" className="text-targo-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
                <p className="mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
                </p>
                <p className="mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold mb-3">Kontaktformular</h3>
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <h3 className="text-xl font-semibold mb-3">Registrierung auf dieser Website</h3>
                <p className="mb-4">
                  Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebots oder Dienstes, für den Sie sich registriert haben.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Ihre Rechte</h2>
                <p className="mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
                <p className="mb-4">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

