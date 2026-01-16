export interface ArtikelContent {
  intro?: string;
  author?: string;
  authorAvatar?: string;
  createdAt?: string;
  sections?: Array<{
    title: string;
    content?: string;
    points?: string[];
    twoColumn?: boolean;
    icon?: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface AuthorInfo {
  name: string;
  avatar: string;
  bio: string;
  expertise: string[];
}

// Mapping von Autorennamen zu Avatar-URLs
const authorAvatars: Record<string, string> = {
  "Dr. Michael Schmidt": "/autor1.avif",
  "Sarah Weber": "/autor2.jpeg",
  "Thomas Müller": "/autor3.webp",
  "Targohyp Redaktion": "/autor4.jpg",
};

// Autor-Biographien
const authorBios: Record<string, AuthorInfo> = {
  "Dr. Michael Schmidt": {
    name: "Dr. Michael Schmidt",
    avatar: "/autor1.avif",
    bio: "Dr. Michael Schmidt ist promovierter Wirtschaftswissenschaftler mit über 15 Jahren Erfahrung im Bereich Immobilienfinanzierung. Nach seinem Studium der Betriebswirtschaftslehre an der Universität Köln und seiner Promotion im Bereich Finanzwirtschaft spezialisierte er sich auf Baufinanzierungen und Immobilieninvestments. Als Senior-Berater bei Targohyp hat er bereits über 500 erfolgreiche Finanzierungen begleitet und ist Experte für komplexe Finanzierungsstrukturen, steuerliche Optimierung und Anschlussfinanzierungen.",
    expertise: [
      "Baufinanzierung & Erstfinanzierung",
      "Anschlussfinanzierung & Umschuldung",
      "Steuerliche Optimierung",
      "Rechtliche Rahmenbedingungen",
      "Komplexe Finanzierungsstrukturen"
    ]
  },
  "Sarah Weber": {
    name: "Sarah Weber",
    avatar: "/autor2.jpeg",
    bio: "Sarah Weber ist zertifizierte Finanzberaterin und Immobilienexpertin mit langjähriger Erfahrung in der Beratung von Privatkunden und Kapitalanlegern. Nach ihrer Ausbildung zur Bankkauffrau absolvierte sie Weiterbildungen zur Immobilienfinanzierungsberaterin und Vermögensberaterin. Sie berät seit über 12 Jahren Kunden bei der Immobilienfinanzierung und hat sich insbesondere auf Budgetplanung, Kapitalanlagen und Immobilienbewertung spezialisiert. Ihre Stärke liegt in der verständlichen Vermittlung komplexer Finanzthemen.",
    expertise: [
      "Budgetplanung & Leistbarkeitsrechnung",
      "Immobilien als Kapitalanlage",
      "Immobilienbewertung",
      "Renditeberechnung & Cashflow",
      "Preisverhandlung & Objektwahl"
    ]
  },
  "Thomas Müller": {
    name: "Thomas Müller",
    avatar: "/autor3.webp",
    bio: "Thomas Müller ist Experte für Immobilienfinanzierung und Darlehensprodukte mit über 10 Jahren Branchenerfahrung. Nach seinem Studium der Wirtschaftswissenschaften arbeitete er zunächst bei verschiedenen Banken im Bereich Privatkreditgeschäft, bevor er sich vollständig auf Immobilienfinanzierungen konzentrierte. Bei Targohyp ist er spezialisiert auf die Beratung zu verschiedenen Darlehensarten, Modernisierungsfinanzierungen und die Analyse von Markttrends. Er ist bekannt für seine fundierten Marktanalysen und praxisnahen Empfehlungen.",
    expertise: [
      "Darlehensarten & Finanzierungsprodukte",
      "Modernisierung & Sanierung",
      "Marktanalysen & Zinsentwicklung",
      "Energetische Modernisierung",
      "Fördermittel & Zuschüsse"
    ]
  },
  "Targohyp Redaktion": {
    name: "Targohyp Redaktion",
    avatar: "/autor4.jpg",
    bio: "Das Redaktionsteam von Targohyp besteht aus erfahrenen Finanzexperten, Immobilienberatern und Fachjournalisten. Gemeinsam erstellen wir fundierte Ratgeber, Checklisten und Studien rund um das Thema Immobilienfinanzierung. Unser Ziel ist es, komplexe Finanzthemen verständlich aufzubereiten und Ihnen bei Ihrer Immobilienentscheidung zu helfen.",
    expertise: [
      "Immobilienfinanzierung",
      "Marktanalysen",
      "Rechtliche Aspekte",
      "Checklisten & Ratgeber"
    ]
  }
};

type ContentMap = Record<string, Record<string, ArtikelContent>>;

const artikelContent: ContentMap = {
  erstfinanzierung: {
    "grundlagen-ablauf": {
      intro: "Eine Immobilie zu kaufen ist für viele die größte finanzielle Entscheidung ihres Lebens. Entsprechend wichtig ist es, die Mechanik einer Immobilienfinanzierung zu verstehen: Welche Bausteine gehören dazu, wie laufen Bankprüfung und Kreditvergabe ab, welche Kosten kommen neben dem Kaufpreis dazu – und an welchen Stellschrauben lässt sich drehen, um die Finanzierung stabil, bezahlbar und planbar zu machen. Der folgende Artikel führt Sie ausführlich durch die Grundlagen und den typischen Ablauf – von der ersten Budgetidee bis zur Auszahlung und darüber hinaus.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-01-15",
      sections: [
        {
          title: "Grundlagen der Immobilienfinanzierung",
          content: "Der Erwerb einer Immobilie stellt für die meisten Menschen eine der bedeutendsten finanziellen Entscheidungen im Leben dar. Entsprechend hoch sind die Anforderungen an Planung, Struktur und Verständnis der zugrunde liegenden Finanzierung. Eine Immobilienfinanzierung ist kein kurzfristiges Kreditgeschäft, sondern eine langfristige Verpflichtung, die sich häufig über mehrere Jahrzehnte erstreckt und maßgeblichen Einfluss auf die persönliche und wirtschaftliche Lebensgestaltung hat. Umso wichtiger ist es, die grundlegenden Mechanismen, Abläufe und Entscheidungsfaktoren zu kennen, die eine solide und tragfähige Finanzierung ausmachen.",
          icon: "BookOpen",
        },
        {
          title: "Was ist eine Immobilienfinanzierung?",
          content: "Unter dem Begriff Immobilienfinanzierung versteht man die Finanzierung des Kaufs, Baus oder der Modernisierung einer Immobilie durch eine Kombination aus Eigenkapital und langfristigem Fremdkapital. Charakteristisch ist dabei die Absicherung des Darlehens über ein Grundpfandrecht, in der Regel in Form einer Grundschuld, die im Grundbuch eingetragen wird. Die Immobilie dient der finanzierenden Bank somit als Sicherheit, was im Vergleich zu unbesicherten Krediten deutlich günstigere Zinssätze ermöglicht. Gleichzeitig spielt der Wert und Zustand des Objekts eine zentrale Rolle bei der Kreditentscheidung.",
          icon: "Home",
        },
        {
          title: "Eigenkapital",
          content: "Ein wesentlicher Bestandteil jeder Immobilienfinanzierung ist das Eigenkapital. Hierunter fallen sämtliche Mittel, die der Käufer aus eigenen Ressourcen einbringt, etwa Ersparnisse, Tages- oder Festgelder, Wertpapiervermögen oder zweckgebundene Schenkungen. Eigenkapital reduziert die erforderliche Darlehenssumme, senkt das Risiko für die Bank und wirkt sich in der Regel positiv auf die Konditionen aus. In der Praxis wird empfohlen, zumindest die Kaufnebenkosten vollständig aus Eigenkapital zu bestreiten, da deren Mitfinanzierung häufig zu höheren Zinssätzen und einer ungünstigeren Beleihung führt.",
          icon: "Wallet",
        },
        {
          title: "Fremdkapital und Annuitätendarlehen",
          content: "Das Fremdkapital wird üblicherweise in Form eines Annuitätendarlehens bereitgestellt. Dieses zeichnet sich durch eine gleichbleibende monatliche Rate aus, die sich aus einem Zins- und einem Tilgungsanteil zusammensetzt. Während der Zinsanteil im Zeitverlauf sinkt, steigt der Tilgungsanteil entsprechend an. Die anfängliche Tilgungshöhe ist dabei ein entscheidender Hebel für die Gesamtkosten der Finanzierung. Eine höhere Tilgung führt zwar zu einer höheren monatlichen Belastung, reduziert jedoch die Restschuld schneller und senkt langfristig die Zinskosten erheblich.",
          icon: "TrendingUp",
        },
        {
          title: "Zinsbindung",
          content: "Von zentraler Bedeutung ist außerdem die Zinsbindung. Sie legt fest, für welchen Zeitraum der Zinssatz festgeschrieben ist und damit Planungssicherheit besteht. Übliche Zinsbindungen liegen bei zehn, fünfzehn oder zwanzig Jahren. Nach Ablauf dieser Frist ist eine Anschlussfinanzierung erforderlich, bei der die verbleibende Restschuld zu dann gültigen Marktkonditionen weiterfinanziert wird. Die Wahl der Zinsbindung stellt somit eine Abwägung zwischen langfristiger Sicherheit und möglicher Zinsersparnis dar.",
          icon: "Lock",
        },
        {
          title: "Kaufnebenkosten",
          content: "Neben dem Kaufpreis der Immobilie müssen bei der Finanzierung zwingend auch die sogenannten Kaufnebenkosten berücksichtigt werden. Hierzu zählen insbesondere die Grunderwerbsteuer, Notar- und Grundbuchkosten sowie gegebenenfalls eine Maklerprovision. Diese Kosten können je nach Bundesland und Konstellation einen erheblichen Anteil des Gesamtaufwands ausmachen. Zusätzlich fallen häufig weitere Ausgaben an, etwa für Renovierungsmaßnahmen, Umzug, Einrichtung oder kurzfristige Instandsetzungen. Eine realistische Finanzierung berücksichtigt daher stets den gesamten Kapitalbedarf und nicht ausschließlich den reinen Kaufpreis.",
          icon: "Receipt",
        },
        {
          title: "Bonitätsprüfung",
          content: "Bevor eine Bank eine Finanzierungszusage erteilt, prüft sie sowohl die persönliche Bonität des Kreditnehmers als auch die wirtschaftliche Tragfähigkeit der Finanzierung. Grundlage hierfür ist eine detaillierte Haushaltsrechnung, bei der das regelmäßige Nettoeinkommen den laufenden Ausgaben gegenübergestellt wird. Neben bestehenden Kreditverpflichtungen werden auch Lebenshaltungskosten, Versicherungen, Unterhaltszahlungen und weitere Fixkosten berücksichtigt. Ziel dieser Prüfung ist es sicherzustellen, dass die monatliche Darlehensrate dauerhaft tragbar ist und auch bei unvorhergesehenen Ereignissen ein ausreichender finanzieller Puffer verbleibt.",
          icon: "ClipboardCheck",
        },
        {
          title: "Objektbewertung",
          content: "Parallel zur Bonitätsprüfung erfolgt die Bewertung des zu finanzierenden Objekts. Die Bank analysiert Lage, Zustand, Baujahr, Größe, Grundriss, energetischen Standard sowie die rechtliche Situation der Immobilie. Bei Eigentumswohnungen werden zusätzlich die Teilungserklärung, die Höhe des Hausgeldes, die Instandhaltungsrücklagen und die Protokolle der Eigentümerversammlungen geprüft. Das Ergebnis dieser Analyse ist der sogenannte Beleihungswert, der in der Regel unter dem Kaufpreis liegt und als Basis für die Risikoeinschätzung dient.",
          icon: "Search",
        },
        {
          title: "Ablauf einer Immobilienfinanzierung",
          content: "Der Ablauf einer Immobilienfinanzierung beginnt idealerweise mit einer realistischen Budgetplanung. Auf Grundlage der persönlichen Einkommens- und Ausgabensituation wird eine monatlich tragbare Belastung ermittelt. Daraus lässt sich ableiten, welcher Kaufpreisrahmen sinnvoll ist, ohne die finanzielle Flexibilität übermäßig einzuschränken. Diese Vorüberlegung ist entscheidend, um Fehlentscheidungen und spätere Überlastungen zu vermeiden.\n\nIm nächsten Schritt werden Eigenkapital und Unterlagen zusammengestellt, die für eine Finanzierungsprüfung erforderlich sind. Dazu zählen Einkommensnachweise, Konto- und Depotauszüge, Angaben zu bestehenden Verbindlichkeiten sowie eine persönliche Selbstauskunft. Eine frühzeitige Finanzierungsbestätigung kann dabei helfen, die eigene Verhandlungsposition gegenüber Verkäufern zu stärken und realistische Kaufoptionen einzugrenzen.\n\nNach Auswahl eines konkreten Objekts folgt die detaillierte Prüfung durch die Bank. Auf Basis der Objektunterlagen und der persönlichen Finanzdaten wird ein verbindliches Kreditangebot erstellt. Dieses sollte nicht ausschließlich unter Zinsgesichtspunkten bewertet werden. Ebenso wichtig sind Flexibilitätsmerkmale wie Sondertilgungsmöglichkeiten, Anpassungsoptionen der Tilgung oder die Möglichkeit, bei Bedarf außerplanmäßige Rückzahlungen zu leisten.\n\nNach Abschluss des Kaufvertrags beim Notar wird die Grundschuld zugunsten der Bank bestellt. Erst wenn alle rechtlichen Voraussetzungen erfüllt sind, insbesondere die Eintragung der Auflassungsvormerkung und der Grundschuld, erfolgt die Auszahlung des Darlehens. Diese geschieht in der Regel direkt an den Verkäufer oder auf ein Notaranderkonto. Mit der Kaufpreiszahlung und der Übergabe der Immobilie beginnt die langfristige Rückzahlungsphase.",
          icon: "ListChecks",
        },
        {
          title: "Anschlussfinanzierung",
          content: "Langfristig betrachtet endet die Immobilienfinanzierung nicht mit der ersten Zinsbindung. Die Anschlussfinanzierung ist ein integraler Bestandteil des Gesamtkonzepts. Je niedriger die Restschuld zu diesem Zeitpunkt ist, desto geringer ist das Risiko steigender Zinsen. Eine vorausschauende Tilgungsstrategie in den ersten Jahren trägt daher wesentlich zur Stabilität der Gesamtfinanzierung bei.",
          icon: "RefreshCw",
        },
        {
          title: "Zusammenfassung",
          content: "Zusammenfassend lässt sich festhalten, dass eine erfolgreiche Immobilienfinanzierung weniger von maximaler Ausreizung der finanziellen Möglichkeiten als vielmehr von Stabilität, Weitsicht und realistischer Planung lebt. Eine tragfähige Monatsrate, ausreichende Eigenmittel, korrekt kalkulierte Nebenkosten und ein langfristig passendes Objekt bilden das Fundament für eine Finanzierung, die nicht nur heute, sondern auch in Zukunft Sicherheit bietet.",
          icon: "CheckCircle",
        },
      ],
      faqs: [
        {
          question: "Wie lange dauert eine Immobilienfinanzierung?",
          answer: "Die Dauer variiert je nach Komplexität. Von der ersten Beratung bis zur Auszahlung können 4-8 Wochen vergehen. Bei Neubauten oder komplexeren Fällen kann es auch länger dauern.",
        },
        {
          question: "Welche Unterlagen benötige ich für eine Finanzierungsanfrage?",
          answer: "Standardmäßig benötigen Sie: Einkommensnachweise (Gehaltsabrechnungen, Steuerbescheide), Schufa-Auskunft, Grundbuchauszug, Kaufvertragsentwurf oder Baubeschreibung, Eigenkapitalnachweis und gegebenenfalls weitere Unterlagen je nach individueller Situation.",
        },
      ],
    },
    "budget-leistbarkeit": {
      intro: "Die richtige Einschätzung Ihrer finanziellen Möglichkeiten ist der Grundstein für eine erfolgreiche Immobilienfinanzierung. Erfahren Sie, wie Sie Ihr Budget realistisch einschätzen und ob Kaufen oder Mieten für Sie die bessere Option ist.",
      author: "Sarah Weber",
      createdAt: "2024-01-22",
      sections: [
        {
          title: "Budgetplanung: Was können Sie sich leisten?",
          content: "Eine realistische Budgetplanung berücksichtigt nicht nur das Einkommen, sondern auch alle laufenden Kosten und unvorhergesehenen Ausgaben.",
          points: [
            "Monatliches Nettoeinkommen ermitteln",
            "Alle laufenden Kosten erfassen (Lebenshaltung, Versicherungen, etc.)",
            "Puffer für unvorhergesehene Ausgaben einplanen",
            "Maximale monatliche Rate berechnen (ca. 30-35% des Nettoeinkommens)",
            "Eigenkapital und dessen Verfügbarkeit prüfen",
          ],
          icon: "Calculator",
        },
        {
          title: "Kaufen oder Mieten?",
          content: "Die Entscheidung zwischen Kaufen und Mieten hängt von verschiedenen Faktoren ab:",
          points: [
            "Finanzielle Situation: Eigenkapital vorhanden?",
            "Lebenssituation: Langfristige Bindung gewünscht?",
            "Marktlage: Sind die Preise angemessen?",
            "Steuerliche Aspekte: Absetzbarkeit von Zinsen",
            "Flexibilität: Wie wichtig ist räumliche Flexibilität?",
          ],
          icon: "Scale",
        },
        {
          title: "Leistbarkeitsrechnung",
          content: "Die Leistbarkeitsrechnung hilft Ihnen, die maximale Finanzierungssumme zu ermitteln. Sie berücksichtigt Ihr Einkommen, vorhandenes Eigenkapital, laufende Verbindlichkeiten und die zu erwartenden monatlichen Belastungen.",
          icon: "Calculator",
        },
      ],
      faqs: [
        {
          question: "Wie viel Eigenkapital sollte ich mitbringen?",
          answer: "Idealerweise sollten Sie 20-30% des Kaufpreises als Eigenkapital einbringen. Dies verbessert Ihre Konditionen erheblich. Mit weniger Eigenkapital sind höhere Zinsen und zusätzliche Absicherungen möglich.",
        },
        {
          question: "Was passiert, wenn ich meine Rate nicht mehr zahlen kann?",
          answer: "In solchen Fällen ist es wichtig, frühzeitig mit Ihrer Bank zu kommunizieren. Oft können Lösungen wie eine Tilgungspause oder eine Anpassung der Rate gefunden werden. Im Extremfall droht die Zwangsversteigerung der Immobilie.",
        },
      ],
    },
    "darlehensarten-produkte": {
      intro: "Es gibt verschiedene Darlehensarten, die sich in ihren Konditionen, Laufzeiten und Rückzahlungsmodalitäten unterscheiden. Finden Sie heraus, welches Produkt zu Ihrer Situation passt. Von Annuitätendarlehen über Tilgungsdarlehen bis hin zu Bauspardarlehen – jede Form hat ihre Vor- und Nachteile. Wir erklären Ihnen die Unterschiede, zeigen Ihnen, welche Produkte für welche Situationen geeignet sind und helfen Ihnen, die optimale Finanzierungsform für Ihr Vorhaben zu finden.",
      author: "Thomas Müller",
      createdAt: "2024-02-05",
      sections: [
        {
          title: "Annuitätendarlehen",
          content: "Das Annuitätendarlehen ist die häufigste Form der Baufinanzierung. Die monatliche Rate bleibt über die gesamte Laufzeit konstant und setzt sich aus Zins- und Tilgungsanteil zusammen.",
          icon: "CreditCard",
        },
        {
          title: "Tilgungsdarlehen",
          content: "Beim Tilgungsdarlehen bleibt die Tilgung konstant, während die Zinsen sinken. Die monatliche Rate wird dadurch im Laufe der Zeit geringer.",
          icon: "ArrowDown",
        },
        {
          title: "Bauspardarlehen",
          content: "Ein Bauspardarlehen kombiniert Sparen und Darlehen. Nach einer Ansparphase können Sie günstige Zinsen für die Finanzierung erhalten.",
          icon: "PiggyBank",
        },
        {
          title: "Volltilger vs. Restschuld",
          content: "Bei einem Volltilger wird das Darlehen vollständig zurückgezahlt. Bei einer Restschuld bleibt am Ende der Zinsbindung eine Restsumme übrig, die dann neu finanziert werden muss.",
          icon: "Target",
        },
      ],
      faqs: [
        {
          question: "Was ist eine Zinsbindung?",
          answer: "Die Zinsbindung ist der Zeitraum, für den der vereinbarte Zinssatz festgeschrieben ist. Nach Ablauf können Sie die Finanzierung zu neuen Konditionen fortsetzen oder umschulden.",
        },
        {
          question: "Sollte ich Sondertilgungen vereinbaren?",
          answer: "Sondertilgungen ermöglichen es Ihnen, zusätzlich zur regulären Rate zu tilgen und so Zinsen zu sparen. Meist sind 5-10% pro Jahr möglich. Dies kann die Gesamtlaufzeit erheblich verkürzen.",
        },
      ],
    },
  },
  kapitalanlage: {
    "steuervorteile-vermoegensaufbau": {
      intro: "Immobilien als Kapitalanlage bieten nicht nur langfristige Wertsteigerung, sondern auch erhebliche steuerliche Vorteile. Erfahren Sie, wie Sie diese optimal nutzen können. Als Vermieter können Sie Zinsen, Abschreibungen und viele Nebenkosten steuerlich absetzen, was Ihre Steuerlast erheblich reduziert. Wir zeigen Ihnen, welche Kosten absetzbar sind, wie die Abschreibung funktioniert und wie Sie Ihre Immobilie steuerlich optimal strukturieren. Mit dem richtigen Wissen können Sie Ihre Rendite deutlich verbessern.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-02-12",
      sections: [
        {
          title: "Steuerliche Absetzbarkeit",
          content: "Als Vermieter können Sie verschiedene Kosten steuerlich absetzen:",
          points: [
            "Zinsen für das Darlehen",
            "Abschreibung der Immobilie (linear über 50 Jahre)",
            "Nebenkosten (Versicherungen, Verwaltung, etc.)",
            "Instandhaltungs- und Modernisierungskosten",
            "Makler- und Notarkosten bei Anschaffung",
          ],
          icon: "Receipt",
        },
        {
          title: "Vermögensaufbau durch Immobilien",
          content: "Immobilien bieten eine stabile Form der Vermögensbildung mit mehreren Vorteilen:",
          points: [
            "Langfristige Wertsteigerung",
            "Regelmäßige Mieteinnahmen",
            "Inflationsschutz",
            "Steuerliche Vorteile",
            "Diversifikation des Portfolios",
          ],
          icon: "TrendingUp",
        },
      ],
      faqs: [
        {
          question: "Wie funktioniert die Abschreibung?",
          answer: "Sie können die Anschaffungskosten linear über 50 Jahre abschreiben, also 2% pro Jahr. Dies reduziert Ihr zu versteuerndes Einkommen und damit Ihre Steuerlast.",
        },
        {
          question: "Was ist der Unterschied zwischen privater und gewerblicher Vermietung?",
          answer: "Bei privater Vermietung können Sie Verluste nur begrenzt gegen andere Einkünfte verrechnen. Bei gewerblicher Vermietung sind umfangreichere Verrechnungen möglich, erfordern aber auch eine gewerbliche Struktur.",
        },
      ],
    },
    "rendite-cashflow-finanzierung": {
      intro: "Die Renditeberechnung und der Cashflow sind entscheidende Kennzahlen für eine erfolgreiche Kapitalanlage. Lernen Sie, wie Sie diese richtig kalkulieren. Die Mietrendite zeigt Ihnen die jährliche Verzinsung Ihres eingesetzten Kapitals, während der Cashflow angibt, ob die Immobilie monatlich Geld abwirft oder kostet. Wir erklären Ihnen die verschiedenen Renditearten, zeigen Ihnen, wie Sie den Cashflow berechnen und geben Ihnen Tipps für eine realistische Finanzierungsplanung. Mit diesen Kennzahlen treffen Sie fundierte Investitionsentscheidungen.",
      author: "Sarah Weber",
      createdAt: "2024-02-19",
      sections: [
        {
          title: "Renditeberechnung",
          content: "Die Rendite einer Immobilie setzt sich aus verschiedenen Komponenten zusammen:",
          points: [
            "Mietrendite: Jahresmieteinnahmen / Kaufpreis",
            "Eigenkapitalrendite: Gewinn / eingesetztes Eigenkapital",
            "Gesamtrendite: Berücksichtigt Wertsteigerung und Mieteinnahmen",
          ],
          icon: "BarChart",
        },
        {
          title: "Cashflow-Analyse",
          content: "Der Cashflow zeigt, ob die Immobilie monatlich Geld abwirft oder kostet:",
          points: [
            "Mieteinnahmen",
            "Abzüglich: Zinszahlungen",
            "Abzüglich: Tilgung",
            "Abzüglich: Nebenkosten und Rücklagen",
            "Ergebnis: Positiver oder negativer Cashflow",
          ],
          icon: "ArrowLeftRight",
        },
        {
          title: "Finanzierung für Kapitalanlagen",
          content: "Bei Kapitalanlagen gelten oft andere Konditionen als bei selbstgenutzten Immobilien. Die Eigenkapitalanforderungen können höher sein, und die Zinssätze können variieren.",
          icon: "Building2",
        },
      ],
      faqs: [
        {
          question: "Was ist eine gute Rendite für eine Kapitalanlage?",
          answer: "Eine Mietrendite von 4-6% gilt als solide. Die Eigenkapitalrendite sollte deutlich höher sein, da Sie nur einen Teil des Kaufpreises selbst finanzieren.",
        },
        {
          question: "Ist ein negativer Cashflow problematisch?",
          answer: "Ein leicht negativer Cashflow kann durchaus akzeptabel sein, wenn die Wertsteigerung und steuerliche Vorteile dies ausgleichen. Wichtig ist, dass Sie die Differenz langfristig tragen können.",
        },
      ],
    },
    "tipps-preisverhandlung": {
      intro: "Eine erfolgreiche Preisverhandlung kann Ihnen tausende Euro sparen. Erfahren Sie bewährte Strategien und Tipps für Verhandlungen beim Immobilienkauf. Die richtige Vorbereitung, sachliche Argumente und das richtige Timing sind entscheidend für den Verhandlungserfolg. Wir zeigen Ihnen, wie Sie den Marktwert ermitteln, welche Verhandlungsstrategien funktionieren und worauf Sie bei der Preisverhandlung achten sollten. Mit unseren Tipps gehen Sie selbstbewusst in die Verhandlung und erreichen den besten Preis.",
      author: "Thomas Müller",
      createdAt: "2024-02-26",
      sections: [
        {
          title: "Vorbereitung ist alles",
          content: "Vor der Verhandlung sollten Sie:",
          points: [
            "Den Marktwert der Immobilie ermitteln",
            "Vergleichsobjekte analysieren",
            "Mängel und Renovierungsbedarf dokumentieren",
            "Ihre maximale Preisgrenze festlegen",
            "Finanzierung bereits vorbereitet haben",
          ],
          icon: "ClipboardCheck",
        },
        {
          title: "Verhandlungsstrategien",
          content: "Erfolgreiche Verhandlungsstrategien:",
          points: [
            "Mit einem realistischen, aber unter dem Angebotspreis liegenden Gebot beginnen",
            "Sachliche Argumente nutzen (Mängel, Marktlage)",
            "Schnelle Entscheidung als Verhandlungsvorteil nutzen",
            "Flexibilität bei Zahlungsmodalitäten zeigen",
            "Nicht zu emotional werden",
          ],
          icon: "Handshake",
        },
        {
          title: "Typische Verhandlungspunkte",
          content: "Neben dem Kaufpreis können auch andere Punkte verhandelt werden:",
          points: [
            "Übernahme von Einbauten oder Möbeln",
            "Übernahme von Nebenkosten",
            "Kaufpreisverteilung (Grundstück vs. Gebäude)",
            "Übergabetermin",
            "Gewährleistungsausschluss gegen Preisnachlass",
          ],
          icon: "ListChecks",
        },
      ],
      faqs: [
        {
          question: "Wie viel kann ich unter dem Angebotspreis bieten?",
          answer: "Das hängt stark vom Markt ab. In einem Käufermarkt können 5-10% durchaus möglich sein. In einem Verkäufermarkt sollten Sie vorsichtiger sein. Wichtig ist, dass Ihr Gebot sachlich begründet ist.",
        },
        {
          question: "Sollte ich einen Makler einschalten?",
          answer: "Ein Makler kann bei Verhandlungen helfen, kostet aber auch Geld. Wenn Sie sich unsicher sind oder wenig Zeit haben, kann ein Makler sinnvoll sein. Bei klarer Sachlage können Sie auch selbst verhandeln.",
        },
      ],
    },
    "rechte-pflichten-vermieter": {
      intro: "Als Vermieter haben Sie sowohl Rechte als auch Pflichten. Ein klares Verständnis dieser Aspekte ist essentiell für eine erfolgreiche Vermietung. Zu Ihren Rechten gehören unter anderem das Recht auf pünktliche Mietzahlung und ordnungsgemäße Nutzung der Immobilie, während Sie als Vermieter auch Pflichten wie die Gewährleistung bei Mängeln und Instandhaltungsmaßnahmen haben. Wir erklären Ihnen die wichtigsten Rechte und Pflichten, zeigen Ihnen, wie Sie diese durchsetzen können und helfen Ihnen, rechtliche Fallstricke zu vermeiden.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-03-05",
      sections: [
        {
          title: "Rechte des Vermieters",
          content: "Als Vermieter haben Sie folgende Rechte:",
          points: [
            "Recht auf pünktliche Mietzahlung",
            "Recht auf ordnungsgemäße Nutzung der Immobilie",
            "Recht auf Zugang zur Wohnung bei berechtigtem Interesse",
            "Recht auf Kündigung bei Vertragsverletzungen",
            "Recht auf Mieterhöhung unter bestimmten Voraussetzungen",
          ],
          icon: "Shield",
        },
        {
          title: "Pflichten des Vermieters",
          content: "Ihre wichtigsten Pflichten als Vermieter:",
          points: [
            "Überlassung der Mietsache in vertragsgemäßem Zustand",
            "Gewährleistung bei Mängeln",
            "Durchführung von Instandhaltungsmaßnahmen",
            "Einhaltung von Kündigungsfristen",
            "Einhaltung des Mietrechts und aller gesetzlichen Bestimmungen",
          ],
          icon: "FileCheck",
        },
        {
          title: "Mietvertrag und Dokumentation",
          content: "Ein schriftlicher Mietvertrag ist essentiell. Er sollte enthalten: Mietdauer, Mietpreis, Nebenkosten, Kündigungsfristen, Regelungen zu Schönheitsreparaturen und alle besonderen Vereinbarungen.",
          icon: "FileText",
        },
      ],
      faqs: [
        {
          question: "Wann kann ich die Miete erhöhen?",
          answer: "Die Miete kann erhöht werden bei: Modernisierungen, Vergleichsmiete (wenn die Miete unter der ortsüblichen liegt), Staffelmiete (wenn vereinbart) oder Indexmiete. Die Erhöhung muss schriftlich mitgeteilt werden und bestimmte Fristen einhalten.",
        },
        {
          question: "Was mache ich bei Mietausfall?",
          answer: "Bei Mietausfall sollten Sie zunächst das Gespräch suchen. Bei anhaltenden Problemen können Sie eine Abmahnung aussprechen und im Extremfall kündigen. Eine Rechtsschutzversicherung kann hier hilfreich sein.",
        },
      ],
    },
  },
  immobilie: {
    "immobilienarten-objektwahl": {
      intro: "Die Wahl der richtigen Immobilienart ist entscheidend für den langfristigen Erfolg Ihrer Investition. Erfahren Sie, welche Immobilientypen es gibt und worauf Sie achten sollten. Ob Eigentumswohnung, Einfamilienhaus, Mehrfamilienhaus oder Gewerbeimmobilie – jede Immobilienart hat ihre spezifischen Vor- und Nachteile sowie unterschiedliche Anforderungen an Management und Finanzierung. Wir helfen Ihnen, die passende Immobilienart für Ihre Ziele zu finden und zeigen Ihnen, worauf Sie bei der Objektwahl besonders achten sollten.",
      author: "Sarah Weber",
      createdAt: "2024-03-12",
      sections: [
        {
          title: "Eigentumswohnung",
          content: "Eigentumswohnungen bieten den Vorteil der geringeren Anschaffungskosten und weniger Verantwortung für Außenanlagen. Wichtig ist die WEG-Verwaltung und die Höhe der monatlichen Nebenkosten.",
          icon: "Building",
        },
        {
          title: "Einfamilienhaus",
          content: "Ein Einfamilienhaus bietet maximale Freiheit und Gestaltungsmöglichkeiten, erfordert aber auch mehr Eigenverantwortung und höhere Kosten für Instandhaltung.",
          icon: "Home",
        },
        {
          title: "Mehrfamilienhaus",
          content: "Mehrfamilienhäuser eignen sich besonders für Kapitalanleger. Sie bieten mehrere Mieteinnahmequellen, erfordern aber auch professionelles Management.",
          icon: "Building2",
        },
        {
          title: "Gewerbeimmobilie",
          content: "Gewerbeimmobilien können höhere Renditen bieten, sind aber auch mit höheren Risiken verbunden. Die Mietverträge sind oft langfristiger, aber Leerstand kann teuer werden.",
          icon: "Building2",
        },
      ],
      faqs: [
        {
          question: "Was ist bei einer Eigentumswohnung besonders wichtig?",
          answer: "Achten Sie auf die Höhe der monatlichen Nebenkosten, den Zustand der WEG-Verwaltung, Rücklagen für Instandhaltung und mögliche Sonderumlagen. Prüfen Sie auch die Teilungserklärung genau.",
        },
        {
          question: "Ist ein Neubau oder Bestandsimmobilie besser?",
          answer: "Neubauten haben den Vorteil moderner Standards und weniger Renovierungsbedarf, sind aber teurer. Bestandsimmobilien sind günstiger, können aber höhere Sanierungskosten mit sich bringen. Beide haben ihre Berechtigung.",
        },
      ],
    },
    "lage-standort-werttreiber": {
      intro: "Die Lage ist einer der wichtigsten Faktoren für den Wert einer Immobilie. Erfahren Sie, welche Standortfaktoren den Wert beeinflussen und worauf Sie achten sollten. Verkehrsanbindung, Infrastruktur, Umgebung und Entwicklungspotenzial der Gegend haben erheblichen Einfluss auf den Immobilienwert. Wir zeigen Ihnen, wie Sie wertsteigernde Faktoren erkennen, welche Standortfaktoren besonders wichtig sind und wie Sie das Entwicklungspotenzial einer Gegend einschätzen können. Mit diesem Wissen treffen Sie fundierte Kaufentscheidungen.",
      author: "Thomas Müller",
      createdAt: "2024-03-19",
      sections: [
        {
          title: "Wichtige Standortfaktoren",
          content: "Folgende Faktoren beeinflussen den Wert einer Immobilie erheblich:",
          points: [
            "Verkehrsanbindung (ÖPNV, Autobahn)",
            "Infrastruktur (Schulen, Einkaufsmöglichkeiten, Ärzte)",
            "Umgebung (Grünflächen, Lärmbelastung)",
            "Entwicklungspotenzial der Gegend",
            "Kriminalitätsrate und Sicherheit",
          ],
          icon: "MapPin",
        },
        {
          title: "Werttreiber erkennen",
          content: "Wertsteigernde Faktoren:",
          points: [
            "Geplante Infrastrukturprojekte",
            "Aufwertung der Nachbarschaft",
            "Gute Anbindung an Arbeitsplätze",
            "Attraktive Freizeitmöglichkeiten",
            "Gute Schulen und Bildungseinrichtungen",
          ],
          icon: "Star",
        },
        {
          title: "Wertmindernde Faktoren",
          content: "Achten Sie auf: Lärmquellen (Flughäfen, Autobahnen), Umweltschäden, schlechte Infrastruktur, hohe Kriminalität, fehlende Entwicklungsperspektiven.",
          icon: "AlertTriangle",
        },
      ],
      faqs: [
        {
          question: "Wie kann ich die Entwicklung einer Gegend einschätzen?",
          answer: "Informieren Sie sich über Bebauungspläne, geplante Infrastrukturprojekte, Bevölkerungsentwicklung und wirtschaftliche Entwicklung der Region. Stadtentwicklungspläne geben hier gute Hinweise.",
        },
        {
          question: "Ist eine teure Lage immer besser?",
          answer: "Nicht unbedingt. Teure Lagen können auch überbewertet sein. Wichtig ist das Verhältnis von Preis zu tatsächlichem Nutzen. Manchmal bieten aufstrebende Viertel bessere Wertsteigerungspotenziale.",
        },
      ],
    },
    "recht-vertraege": {
      intro: "Rechtliche Aspekte spielen bei Immobilientransaktionen eine zentrale Rolle. Ein gutes Verständnis der wichtigsten rechtlichen Grundlagen schützt Sie vor teuren Fehlern. Von Kaufverträgen über Grundbucheintragungen bis hin zu Gewährleistungsansprüchen – bei Immobilientransaktionen gibt es viele rechtliche Stolpersteine. Wir erklären Ihnen die wichtigsten rechtlichen Aspekte, zeigen Ihnen, worauf Sie bei Verträgen achten sollten und helfen Ihnen, rechtliche Risiken zu minimieren. So gehen Sie sicher durch Ihre Immobilientransaktion.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-03-26",
      sections: [
        {
          title: "Kaufvertrag",
          content: "Der Kaufvertrag sollte enthalten: genaue Beschreibung der Immobilie, Kaufpreis und Zahlungsmodalitäten, Übergabetermin, Gewährleistungsregelungen, Rücktrittsrechte und alle besonderen Vereinbarungen.",
          icon: "FileText",
        },
        {
          title: "Grundbuch und Eigentumsübertragung",
          content: "Die Eigentumsübertragung erfolgt durch notarielle Beurkundung und Eintragung ins Grundbuch. Wichtig sind: Eigentumsverhältnisse prüfen, Lasten und Rechte im Grundbuch prüfen, Auflassungsvormerkung vereinbaren.",
          icon: "BookOpen",
        },
        {
          title: "Gewährleistung und Mängelhaftung",
          content: "Bei Mängeln haben Sie Gewährleistungsansprüche. Wichtig: Mängel rechtzeitig rügen, Beweise sichern, Fristen beachten. Ein Gewährleistungsausschluss ist möglich, reduziert aber auch den Kaufpreis.",
          icon: "ShieldCheck",
        },
      ],
      faqs: [
        {
          question: "Brauche ich einen Notar?",
          answer: "Ja, bei Immobilienkäufen ist ein Notar gesetzlich vorgeschrieben. Der Notar beurkundet den Kaufvertrag und sorgt für die Eintragung ins Grundbuch. Die Kosten betragen etwa 1-2% des Kaufpreises.",
        },
        {
          question: "Was ist eine Auflassungsvormerkung?",
          answer: "Eine Auflassungsvormerkung sichert Ihren Anspruch auf Eigentumsübertragung im Grundbuch. Sie schützt Sie, falls der Verkäufer die Immobilie noch an Dritte verkaufen sollte.",
        },
      ],
    },
    "kosten-immobilie": {
      intro: "Neben dem Kaufpreis fallen bei einer Immobilie viele weitere Kosten an. Eine realistische Kosteneinschätzung ist essentiell für eine erfolgreiche Finanzierung. Kaufnebenkosten wie Grunderwerbsteuer, Notarkosten und Maklerprovision können 10-15% des Kaufpreises ausmachen, dazu kommen laufende Kosten für Versicherungen, Instandhaltung und Rücklagen. Wir zeigen Ihnen alle Kostenpositionen im Detail, erklären Ihnen, wie hoch die einzelnen Kosten sind und geben Ihnen Tipps, wie Sie Ihr Budget realistisch planen können.",
      author: "Sarah Weber",
      createdAt: "2024-04-02",
      sections: [
        {
          title: "Kaufnebenkosten",
          content: "Die Kaufnebenkosten betragen etwa 10-15% des Kaufpreises:",
          points: [
            "Grunderwerbsteuer (3,5-6,5% je nach Bundesland)",
            "Notarkosten (ca. 1-2%)",
            "Grundbucheintragung (ca. 0,5%)",
            "Maklerprovision (wenn vorhanden, 3-7%)",
            "Gutachten und Dokumente",
          ],
          icon: "Receipt",
        },
        {
          title: "Laufende Kosten",
          content: "Monatliche Kosten, die Sie einplanen sollten:",
          points: [
            "Grundsteuer",
            "Hausgeld (bei Eigentumswohnungen)",
            "Versicherungen (Gebäudeversicherung, Haftpflicht)",
            "Instandhaltungsrücklagen (1-2% des Immobilienwerts pro Jahr)",
            "Verwaltungskosten (bei Vermietung)",
          ],
          icon: "Clock",
        },
        {
          title: "Renovierungs- und Modernisierungskosten",
          content: "Je nach Zustand der Immobilie können Renovierungskosten anfallen. Planen Sie 10-20% des Kaufpreises als Puffer ein, besonders bei älteren Immobilien.",
          icon: "Hammer",
        },
      ],
      faqs: [
        {
          question: "Wie hoch sind die Kaufnebenkosten genau?",
          answer: "Die Höhe variiert je nach Bundesland und Situation. In den meisten Fällen liegen sie bei 10-15% des Kaufpreises. Eine genaue Berechnung sollte frühzeitig erfolgen, um das Budget realistisch einzuschätzen.",
        },
        {
          question: "Muss ich Rücklagen bilden?",
          answer: "Ja, unbedingt! Für größere Reparaturen und Modernisierungen sollten Sie Rücklagen bilden. Als Faustregel gelten 1-2% des Immobilienwerts pro Jahr. Bei älteren Immobilien können es auch mehr sein.",
        },
      ],
    },
    "kaufentscheidungs-wissen": {
      intro: "Die Entscheidung für eine Immobilie ist nicht nur eine finanzielle, sondern auch eine emotionale und strategische. Psychologische und strategische Aspekte können den Unterschied zwischen einer guten und einer schlechten Entscheidung ausmachen.",
      author: "Thomas Müller",
      createdAt: "2024-04-09",
      sections: [
        {
          title: "Psychologische Fallen vermeiden",
          content: "Häufige Fehler bei Immobilienkäufen:",
          points: [
            "Zu emotional entscheiden (Liebe auf den ersten Blick)",
            "Zu schnell entscheiden ohne Vergleich",
            "Sich von Verkaufsdruck beeinflussen lassen",
            "Wichtige Mängel übersehen",
            "Budget überschreiten",
          ],
          icon: "Brain",
        },
        {
          title: "Strategische Entscheidungskriterien",
          content: "Entscheiden Sie strategisch basierend auf:",
          points: [
            "Langfristigen Zielen (Eigenheim vs. Kapitalanlage)",
            "Finanziellen Möglichkeiten",
            "Lebenssituation und -planung",
            "Marktlage und Entwicklungspotenzial",
            "Objektiven Kriterien (Lage, Zustand, Preis)",
          ],
          icon: "Target",
        },
        {
          title: "Checkliste vor der Entscheidung",
          content: "Bevor Sie zusagen, prüfen Sie: Finanzierung steht, Gutachten eingeholt, alle Kosten kalkuliert, rechtliche Prüfung erfolgt, Vergleichsobjekte analysiert, langfristige Tragfähigkeit geprüft.",
          icon: "CheckCircle",
        },
      ],
      faqs: [
        {
          question: "Wie lange sollte ich mir Zeit für die Entscheidung nehmen?",
          answer: "Nehmen Sie sich ausreichend Zeit - mindestens einige Tage, besser eine Woche. Eine Immobilie ist eine langfristige Investition. Überstürzte Entscheidungen führen oft zu Problemen. Lassen Sie sich nicht unter Druck setzen.",
        },
        {
          question: "Sollte ich auf mein Bauchgefühl hören?",
          answer: "Das Bauchgefühl kann wichtig sein, sollte aber nicht die einzige Grundlage sein. Kombinieren Sie emotionale Aspekte mit objektiven Fakten. Wenn etwas nicht stimmt, hören Sie auf Ihr Gefühl - aber lassen Sie es nicht die alleinige Entscheidung treffen.",
        },
      ],
    },
  },
  anschlussfinanzierung: {
    "umschuldung-lohnt": {
      intro: "Wenn Ihre Zinsbindung ausläuft, stellt sich die Frage: Umschulden oder bei der bisherigen Bank bleiben? Erfahren Sie, wann sich eine Umschuldung wirklich lohnt. Eine Umschuldung kann sich lohnen, wenn die Zinsen deutlich gesunken sind, Ihre Bonität sich verbessert hat oder Sie bessere Konditionen erhalten können. Allerdings fallen auch Kosten wie Vorfälligkeitsentschädigung und Notarkosten an. Wir zeigen Ihnen, wie Sie die Ersparnis gegen die Kosten rechnen, welche Faktoren Sie berücksichtigen sollten und helfen Ihnen, die richtige Entscheidung zu treffen.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-04-16",
      sections: [
        {
          title: "Wann lohnt sich eine Umschuldung?",
          content: "Eine Umschuldung kann sich lohnen, wenn:",
          points: [
            "Die Zinsen deutlich gesunken sind",
            "Ihre Bonität sich verbessert hat",
            "Sie bessere Konditionen erhalten können",
            "Die Ersparnis die Kosten übersteigt",
            "Sie zusätzliche Flexibilität benötigen",
          ],
          icon: "RefreshCw",
        },
        {
          title: "Kosten einer Umschuldung",
          content: "Bei einer Umschuldung fallen Kosten an: Vorfälligkeitsentschädigung (bei vorzeitiger Kündigung), neue Bereitstellungsprovision, Notarkosten, Grundbucheintragung, ggf. neue Absicherungen.",
          icon: "DollarSign",
        },
        {
          title: "Rechnung: Ersparnis vs. Kosten",
          content: "Berechnen Sie genau: Wie viel sparen Sie durch niedrigere Zinsen? Wie hoch sind die Kosten der Umschuldung? Ab wann rechnet sich die Umschuldung? Berücksichtigen Sie auch die Restlaufzeit.",
          icon: "Calculator",
        },
      ],
      faqs: [
        {
          question: "Wie berechne ich, ob sich eine Umschuldung lohnt?",
          answer: "Vergleichen Sie die Zinskosten bei Ihrer aktuellen Bank mit den Kosten bei einer neuen Bank plus den Umschuldungskosten. Wenn die Ersparnis über mehrere Jahre die Kosten übersteigt, lohnt es sich. Ein Finanzierungsberater kann hier helfen.",
        },
        {
          question: "Was ist eine Vorfälligkeitsentschädigung?",
          answer: "Wenn Sie Ihr Darlehen vorzeitig kündigen, kann die Bank eine Entschädigung verlangen. Diese beträgt meist 0,5-1% der Restschuld. Prüfen Sie Ihren Vertrag genau.",
        },
      ],
    },
    "zinsentwicklung-was-tun": {
      intro: "Die Zinsentwicklung am Markt kann Ihre Finanzierungsentscheidung erheblich beeinflussen. Erfahren Sie, wie Sie auf Zinsentwicklungen reagieren sollten. Zinsen werden von verschiedenen Faktoren wie Leitzins, Inflation und wirtschaftlicher Entwicklung beeinflusst und können sich schnell ändern. Wir erklären Ihnen, wie Sie Zinsentwicklungen verstehen, welche Strategien bei steigenden oder sinkenden Zinsen sinnvoll sind und wie Sie sich gegen Zinsschwankungen absichern können. Mit dem richtigen Timing können Sie tausende Euro sparen.",
      author: "Sarah Weber",
      createdAt: "2024-04-23",
      sections: [
        {
          title: "Zinsentwicklung verstehen",
          content: "Zinsen werden von verschiedenen Faktoren beeinflusst: Leitzins der EZB, Inflationsrate, wirtschaftliche Entwicklung, Marktlage und Angebot/Nachfrage.",
          icon: "LineChart",
        },
        {
          title: "Strategien bei steigenden Zinsen",
          content: "Wenn die Zinsen steigen:",
          points: [
            "Frühzeitig eine Anschlussfinanzierung sichern",
            "Längere Zinsbindung in Betracht ziehen",
            "Sondertilgungen nutzen, um schneller zu tilgen",
            "Umschuldung prüfen, bevor Zinsen weiter steigen",
          ],
          icon: "TrendingUp",
        },
        {
          title: "Strategien bei sinkenden Zinsen",
          content: "Wenn die Zinsen sinken:",
          points: [
            "Umschuldung prüfen",
            "Kürzere Zinsbindung wählen für mehr Flexibilität",
            "Auf weitere Zinssenkungen warten (mit Risiko)",
            "Konditionen regelmäßig vergleichen",
          ],
          icon: "TrendingUp",
        },
      ],
      faqs: [
        {
          question: "Wie kann ich mich gegen steigende Zinsen absichern?",
          answer: "Eine längere Zinsbindung (10-15 Jahre) schützt Sie vor steigenden Zinsen. Allerdings haben Sie dann weniger Flexibilität. Eine Mischung aus verschiedenen Laufzeiten kann auch sinnvoll sein.",
        },
        {
          question: "Sollte ich auf weitere Zinssenkungen warten?",
          answer: "Das ist ein Risiko. Niemand kann die Zinsentwicklung vorhersagen. Wenn Sie gute Konditionen erhalten, kann es sinnvoll sein, zuzugreifen. Warten kann auch nach hinten losgehen.",
        },
      ],
    },
    "richtiger-zeitpunkt": {
      intro: "Der richtige Zeitpunkt für Ihre Anschlussfinanzierung kann tausende Euro sparen. Erfahren Sie, wann Sie aktiv werden sollten. Idealerweise sollten Sie sich 6-12 Monate vor Ablauf der Zinsbindung um die Anschlussfinanzierung kümmern, um ausreichend Zeit für Vergleich und Entscheidung zu haben. Wir zeigen Ihnen, welche Fristen Sie beachten müssen, wie Sie den optimalen Zeitpunkt finden und was passiert, wenn Sie nichts tun. Mit der richtigen Planung sichern Sie sich die besten Konditionen für Ihre Anschlussfinanzierung.",
      author: "Thomas Müller",
      createdAt: "2024-04-30",
      sections: [
        {
          title: "Wann sollte ich mich um die Anschlussfinanzierung kümmern?",
          content: "Idealerweise 6-12 Monate vor Ablauf der Zinsbindung:",
          points: [
            "Ausreichend Zeit für Vergleich und Entscheidung",
            "Frühzeitige Sicherung guter Konditionen",
            "Möglichkeit, auf Marktentwicklung zu reagieren",
            "Genug Zeit für Umschuldung falls nötig",
          ],
          icon: "Calendar",
        },
        {
          title: "Fristen beachten",
          content: "Wichtige Fristen: Kündigungsfrist bei Ihrer Bank (meist 3-6 Monate), Zeit für Angebotsvergleich (2-4 Wochen), Zeit für Umschuldung falls gewünscht (4-8 Wochen), Notartermin und Grundbucheintragung.",
          icon: "Clock",
        },
        {
          title: "Was passiert, wenn ich nichts tue?",
          content: "Wenn Sie nichts tun, läuft Ihr Darlehen meist in ein variabel verzinstes Darlehen über oder die Bank bietet Ihnen eine Anschlussfinanzierung an - oft zu weniger günstigen Konditionen als bei aktivem Vergleich.",
          icon: "AlertCircle",
        },
      ],
      faqs: [
        {
          question: "Kann ich auch früher umschulden?",
          answer: "Ja, aber meist nur gegen Zahlung einer Vorfälligkeitsentschädigung. Prüfen Sie, ob die Ersparnis durch bessere Zinsen diese Kosten übersteigt. Manchmal lohnt es sich auch ohne Entschädigung.",
        },
        {
          question: "Was ist, wenn meine Bonität sich verschlechtert hat?",
          answer: "Das kann die Konditionen verschlechtern. In solchen Fällen kann es sinnvoll sein, bei der bisherigen Bank zu bleiben, wenn diese noch gute Konditionen anbietet. Ein Vergleich lohnt sich trotzdem.",
        },
      ],
    },
  },
  modernisierung: {
    "energetische-modernisierung": {
      intro: "Eine energetische Modernisierung steigert nicht nur den Wert Ihrer Immobilie, sondern spart auch langfristig Energiekosten und schont die Umwelt. Erfahren Sie, welche Maßnahmen sich lohnen. Von Dämmung über Heizungsmodernisierung bis hin zu Photovoltaik – es gibt viele Möglichkeiten, Ihre Immobilie energieeffizienter zu machen. Wir zeigen Ihnen die wichtigsten Modernisierungsmaßnahmen, erklären Ihnen, welche Fördermittel Sie nutzen können und helfen Ihnen, die Finanzierung Ihrer Modernisierung optimal zu planen.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-05-07",
      sections: [
        {
          title: "Typische Modernisierungsmaßnahmen",
          content: "Die wichtigsten energetischen Modernisierungsmaßnahmen:",
          points: [
            "Dämmung (Fassade, Dach, Keller)",
            "Fenstererneuerung",
            "Heizungsmodernisierung",
            "Photovoltaik-Anlage",
            "Lüftungsanlage",
          ],
          icon: "Wrench",
        },
        {
          title: "Fördermittel nutzen",
          content: "Für energetische Modernisierungen gibt es verschiedene Fördermittel:",
          points: [
            "KfW-Förderprogramme (z.B. KfW 261, 262)",
            "BAFA-Förderung",
            "Steuerliche Absetzbarkeit",
            "Regionale Förderprogramme",
            "Zinsgünstige Kredite",
          ],
          icon: "DollarSign",
        },
        {
          title: "Finanzierung der Modernisierung",
          content: "Modernisierungen können über verschiedene Wege finanziert werden: Modernisierungskredit, Aufstockung der bestehenden Finanzierung, Eigenkapital, Fördermittel kombinieren.",
          icon: "Wallet",
        },
      ],
      faqs: [
        {
          question: "Welche Modernisierungsmaßnahme lohnt sich am meisten?",
          answer: "Das hängt von Ihrem Gebäude ab. Meist lohnen sich Dämmung und Heizungsmodernisierung am meisten. Eine Energieberatung kann hier helfen, die sinnvollsten Maßnahmen zu identifizieren.",
        },
        {
          question: "Wie lange dauert es, bis sich eine Modernisierung amortisiert?",
          answer: "Das variiert stark. Bei Dämmung und Heizung sind 10-20 Jahre typisch. Bei Photovoltaik kann es schneller gehen. Wichtig ist auch die Wertsteigerung der Immobilie, die sofort wirkt.",
        },
      ],
    },
  },
  "studien-whitepaper": {
    "photovoltaik-studie": {
      intro: "Unsere Studie vergleicht die Photovoltaik-Förderungen und Rahmenbedingungen in verschiedenen Ländern und zeigt die Entwicklungspotenziale für Deutschland auf. Wir analysieren die Förderstrukturen, Einspeisevergütungen und Marktentwicklungen in verschiedenen europäischen Ländern. Die Erkenntnisse helfen Ihnen zu verstehen, wie sich die Photovoltaik-Branche entwickelt und welche Chancen sich für Immobilienbesitzer ergeben. Erfahren Sie, welche Maßnahmen sich lohnen und wie Sie von den aktuellen Rahmenbedingungen profitieren können.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-05-14",
      sections: [
        {
          title: "Studienübersicht",
          content: "Diese Studie analysiert die Photovoltaik-Märkte in verschiedenen europäischen Ländern und vergleicht Förderstrukturen, Einspeisevergütungen und Marktentwicklungen.",
          icon: "FileText",
        },
        {
          title: "Haupterkenntnisse",
          content: "Die Studie zeigt: Deutschland hat gute Rahmenbedingungen, aber andere Länder holen auf. Die Einspeisevergütungen variieren erheblich. Die Eigenverbrauchsquote wird immer wichtiger.",
          icon: "Lightbulb",
        },
      ],
    },
    "immobilienpreisindex": {
      intro: "Der Immobilienpreisindex Deutschland zeigt die Entwicklung der Immobilienpreise über Zeit und Regionen hinweg. Diese Studie analysiert die Preisdynamik in verschiedenen deutschen Regionen und identifiziert langfristige Trends sowie kurzfristige Schwankungen. Erfahren Sie, welche Faktoren die Preisentwicklung beeinflussen und wie sich die regionalen Unterschiede erklären lassen. Die Erkenntnisse helfen Ihnen, den richtigen Zeitpunkt für Ihre Immobilienentscheidung zu finden.",
      author: "Sarah Weber",
      createdAt: "2024-05-21",
      sections: [
        {
          title: "Aktuelle Entwicklung",
          content: "Die Immobilienpreise in Deutschland haben sich in den letzten Jahren unterschiedlich entwickelt. Während Ballungsräume stark gestiegen sind, zeigen ländliche Regionen eine moderatere Entwicklung.",
          icon: "TrendingUp",
        },
        {
          title: "Regionale Unterschiede",
          content: "Die Preisentwicklung variiert erheblich zwischen Regionen. Metropolen wie München, Hamburg und Berlin zeigen die stärkste Entwicklung, während strukturschwache Regionen zurückbleiben.",
          icon: "MapPin",
        },
      ],
    },
    "zinsentwicklung-25-jahre": {
      intro: "Eine Analyse der Zinsentwicklung der letzten 25 Jahre zeigt langfristige Trends und hilft bei der Einschätzung zukünftiger Entwicklungen. Von den hohen Zinsen der 90er Jahre über historische Tiefstände bis hin zu aktuellen Marktbewegungen – diese Studie zeichnet ein umfassendes Bild der Zinszyklen. Verstehen Sie die Zusammenhänge zwischen Leitzins, Inflation und Bauzinsen. Die historische Perspektive unterstützt Sie dabei, aktuelle Zinsniveaus besser einzuordnen und fundierte Finanzierungsentscheidungen zu treffen.",
      author: "Thomas Müller",
      createdAt: "2024-05-28",
      sections: [
        {
          title: "Historische Entwicklung",
          content: "Die Zinsen für Baufinanzierungen haben in den letzten 25 Jahren erhebliche Schwankungen erlebt. Von hohen Zinsen in den 90er Jahren über historische Tiefstände bis hin zu aktuellen Entwicklungen.",
          icon: "LineChart",
        },
        {
          title: "Trendanalyse",
          content: "Die Analyse zeigt langfristige Zyklen und hilft bei der Einschätzung, ob aktuelle Zinsen hoch oder niedrig sind im historischen Vergleich.",
          icon: "BarChart",
        },
      ],
    },
  },
  lexikon: {
    "grunderwerbsteuer": {
      intro: "Die Grunderwerbsteuer ist eine wichtige Steuer beim Immobilienkauf. Erfahren Sie, wie sie berechnet wird und welche Besonderheiten es gibt. Die Höhe variiert je nach Bundesland zwischen 3,5% und 6,5% des Kaufpreises und gehört zu den erheblichen Nebenkosten beim Immobilienkauf. Wir erklären Ihnen die Berechnungsgrundlagen, zeigen regionale Unterschiede auf und geben Tipps, wie Sie die Steuerlast optimieren können. Ein klares Verständnis hilft Ihnen, Ihr Budget realistisch zu planen.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-06-04",
      sections: [
        {
          title: "Was ist die Grunderwerbsteuer?",
          content: "Die Grunderwerbsteuer ist eine Steuer, die beim Kauf einer Immobilie anfällt. Sie wird vom Käufer gezahlt und beträgt je nach Bundesland 3,5% bis 6,5% des Kaufpreises.",
          icon: "Receipt",
        },
        {
          title: "Berechnung",
          content: "Die Grunderwerbsteuer wird auf den Kaufpreis berechnet. Bei einem Kaufpreis von 400.000€ und einem Steuersatz von 5% beträgt die Grunderwerbsteuer 20.000€.",
          icon: "Calculator",
        },
      ],
    },
    "rueckauflassungsvormerkung": {
      intro: "Die Rückauflassungsvormerkung ist ein wichtiger rechtlicher Begriff im Immobilienrecht. Erfahren Sie, was sie bedeutet und wann sie relevant ist. Diese Vormerkung sichert dem Verkäufer das Recht, die Immobilie zurück zu erwerben, falls bestimmte Bedingungen nicht erfüllt werden. Sie wird häufig bei Ratenkäufen oder Verkäufen mit Rückkaufrecht verwendet und kann erhebliche Auswirkungen auf Ihre Rechte als Käufer haben. Wir erklären Ihnen die rechtlichen Grundlagen und zeigen, worauf Sie bei Vertragsabschluss achten sollten.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-06-11",
      sections: [
        {
          title: "Definition",
          content: "Eine Rückauflassungsvormerkung sichert dem Verkäufer das Recht, die Immobilie zurück zu erwerben, falls bestimmte Bedingungen nicht erfüllt werden.",
          icon: "FileText",
        },
        {
          title: "Wann wird sie verwendet?",
          content: "Sie wird häufig bei Ratenkäufen oder bei Verkäufen mit Rückkaufrecht verwendet, um den Verkäufer abzusichern.",
          icon: "FileText",
        },
      ],
    },
  },
  checklisten: {
    "checkliste-immokauf": {
      intro: "Mit dieser Checkliste vergessen Sie nichts beim Immobilienkauf. Gehen Sie Schritt für Schritt vor und stellen Sie sicher, dass alle wichtigen Punkte beachtet werden. Von der ersten Finanzierungsprüfung über die Besichtigung und Gutachten bis hin zum Kaufvertrag und der Übergabe – eine Immobilientransaktion erfordert viele Schritte. Wir führen Sie durch alle Phasen des Kaufprozesses und zeigen Ihnen, welche Unterlagen Sie benötigen, worauf Sie achten sollten und wie Sie typische Fehler vermeiden können.",
      author: "Sarah Weber",
      createdAt: "2024-06-18",
      sections: [
        {
          title: "Vor dem Kauf",
          points: [
            "Finanzierung klären und Finanzierungsbestätigung einholen",
            "Eigenkapital zusammenstellen",
            "Immobilie mehrfach besichtigen",
            "Gutachten einholen (Bausachverständiger, Energieberater)",
            "Vergleichsobjekte analysieren",
            "Rechtliche Prüfung (Grundbuch, Lasten)",
            "Kosten kalkulieren (Kaufpreis + Nebenkosten)",
          ],
          icon: "ClipboardCheck",
        },
        {
          title: "Beim Kaufvertrag",
          points: [
            "Kaufvertrag genau prüfen",
            "Alle Vereinbarungen schriftlich festhalten",
            "Gewährleistungsregelungen prüfen",
            "Übergabetermin vereinbaren",
            "Notartermin vereinbaren",
          ],
          icon: "FileText",
        },
        {
          title: "Nach dem Kauf",
          points: [
            "Grundbucheintragung prüfen",
            "Versicherungen abschließen",
            "Umzug organisieren",
            "Nebenkostenabrechnung prüfen",
            "Mängel dokumentieren und reklamieren",
          ],
          icon: "CheckCircle",
        },
      ],
    },
    "checkliste-immoverkauf": {
      intro: "Beim Verkauf einer Immobilie gibt es viele Punkte zu beachten. Diese Checkliste hilft Ihnen, nichts zu vergessen. Von der Vorbereitung und Bewertung über die Vermarktung bis hin zur finalen Übergabe – wir führen Sie Schritt für Schritt durch den gesamten Verkaufsprozess. Erfahren Sie, welche Unterlagen Sie benötigen, wie Sie den optimalen Verkaufspreis ermitteln und worauf Sie bei Vertragsverhandlungen achten sollten. Mit dieser Checkliste gehen Sie sicher und vorbereitet in den Verkauf Ihrer Immobilie.",
      author: "Sarah Weber",
      createdAt: "2024-06-25",
      sections: [
        {
          title: "Vorbereitung",
          points: [
            "Immobilie bewerten lassen",
            "Marktpreis ermitteln",
            "Immobilie herrichten und renovieren",
            "Unterlagen zusammenstellen (Grundbuch, Energieausweis, etc.)",
            "Makler entscheiden (ja/nein)",
          ],
          icon: "ClipboardCheck",
        },
        {
          title: "Verkaufsprozess",
          points: [
            "Angebot erstellen",
            "Besichtigungen organisieren",
            "Angebote vergleichen",
            "Kaufvertrag vorbereiten",
            "Notartermin vereinbaren",
          ],
          icon: "Handshake",
        },
        {
          title: "Nach dem Verkauf",
          points: [
            "Zahlungseingang prüfen",
            "Übergabe organisieren",
            "Grundbucheintragung prüfen",
            "Steuerliche Aspekte klären",
            "Dokumente archivieren",
          ],
          icon: "CheckCircle",
        },
      ],
    },
    "checkliste-immobewertung": {
      intro: "Eine professionelle Immobilienbewertung ist wichtig für Kauf, Verkauf oder Finanzierung. Diese Checkliste hilft bei der Vorbereitung. Eine fundierte Bewertung bildet die Grundlage für wichtige Entscheidungen und kann erhebliche finanzielle Auswirkungen haben. Wir zeigen Ihnen, welche Unterlagen Sie benötigen, wie Sie den Zustand Ihrer Immobilie optimal präsentieren und worauf Gutachter besonders achten. Mit der richtigen Vorbereitung erhalten Sie eine realistische Bewertung, die Ihre Verhandlungsbasis stärkt.",
      author: "Thomas Müller",
      createdAt: "2024-07-02",
      sections: [
        {
          title: "Vor der Bewertung",
          points: [
            "Alle Unterlagen zusammenstellen",
            "Grundbuchauszug besorgen",
            "Energieausweis vorhanden",
            "Grundrisse und Pläne bereithalten",
            "Renovierungs- und Modernisierungsmaßnahmen dokumentieren",
          ],
          icon: "ClipboardList",
        },
        {
          title: "Bei der Bewertung",
          points: [
            "Zustand der Immobilie zeigen",
            "Mängel nicht verschweigen",
            "Besonderheiten erwähnen",
            "Fragen des Gutachters beantworten",
            "Vergleichsobjekte nennen",
          ],
          icon: "Search",
        },
      ],
    },
    "checkliste-sanierung": {
      intro: "Eine Sanierung erfordert sorgfältige Planung. Diese Checkliste hilft Ihnen, alle wichtigen Schritte zu beachten. Von der ersten Bedarfsanalyse über die Finanzierung bis hin zur finalen Abnahme – eine erfolgreiche Sanierung erfordert präzise Koordination vieler Gewerke. Wir führen Sie durch alle Phasen der Sanierung und zeigen Ihnen, wie Sie Kosten im Griff behalten, Fördermittel optimal nutzen und Qualität sicherstellen. Mit dieser Checkliste meistern Sie Ihre Sanierung strukturiert und erfolgreich.",
      author: "Thomas Müller",
      createdAt: "2024-07-09",
      sections: [
        {
          title: "Planung",
          points: [
            "Sanierungsbedarf ermitteln",
            "Kosten kalkulieren",
            "Fördermittel prüfen",
            "Finanzierung klären",
            "Handwerker aussuchen und Angebote einholen",
            "Zeitplan erstellen",
          ],
          icon: "ClipboardCheck",
        },
        {
          title: "Durchführung",
          points: [
            "Baustelle vorbereiten",
            "Material bestellen",
            "Handwerker koordinieren",
            "Fortschritt dokumentieren",
            "Qualität kontrollieren",
            "Zwischenzahlungen leisten",
          ],
          icon: "Hammer",
        },
        {
          title: "Abschluss",
          points: [
            "Abnahme durchführen",
            "Mängel reklamieren",
            "Rechnungen prüfen",
            "Fördermittel beantragen",
            "Dokumentation archivieren",
          ],
          icon: "CheckCircle",
        },
      ],
    },
  },
};

export function getArtikelContent(
  kategorieId: string,
  artikelId: string
): ArtikelContent | null {
  const content = artikelContent[kategorieId]?.[artikelId];
  if (!content) return null;
  
  const author = content.author || "Targohyp Redaktion";
  const authorAvatar = content.authorAvatar || authorAvatars[author] || authorAvatars["Targohyp Redaktion"];
  
  // Setze Standardwerte falls nicht vorhanden
  return {
    ...content,
    author,
    authorAvatar,
    createdAt: content.createdAt || new Date().toISOString().split('T')[0],
  };
}

export function getAuthorInfo(authorName: string): AuthorInfo | null {
  return authorBios[authorName] || null;
}

// Funktion zum Erstellen eines URL-freundlichen Slugs aus einem Autorennamen
export function createAuthorSlug(authorName: string): string {
  return authorName
    .toLowerCase()
    .replace(/dr\./g, "")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
}

// Mapping von Slugs zu Autorennamen
const authorSlugMap: Record<string, string> = {
  "michael-schmidt": "Dr. Michael Schmidt",
  "sarah-weber": "Sarah Weber",
  "thomas-mueller": "Thomas Müller",
  "targohyp-redaktion": "Targohyp Redaktion",
};

export function getAuthorNameFromSlug(slug: string): string | null {
  return authorSlugMap[slug] || null;
}

export function getAuthorSlug(authorName: string): string {
  return createAuthorSlug(authorName);
}

// Funktion zum Abrufen aller Autoren mit ihren Slugs
export function getAllAuthors(): Array<{ name: string; slug: string }> {
  return Object.keys(authorBios).map((name) => ({
    name,
    slug: createAuthorSlug(name),
  }));
}
