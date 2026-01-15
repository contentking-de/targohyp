export interface ArtikelContent {
  intro?: string;
  author?: string;
  authorAvatar?: string;
  createdAt?: string;
  sections?: Array<{
    title: string;
    content?: string;
    points?: string[];
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
  "Dr. Michael Schmidt": "https://ui-avatars.com/api/?name=Michael+Schmidt&background=003366&color=fff&size=128&bold=true",
  "Sarah Weber": "https://ui-avatars.com/api/?name=Sarah+Weber&background=bb133e&color=fff&size=128&bold=true",
  "Thomas Müller": "https://ui-avatars.com/api/?name=Thomas+Müller&background=0066cc&color=fff&size=128&bold=true",
  "Targohyp Redaktion": "https://ui-avatars.com/api/?name=Targohyp&background=003366&color=fff&size=128&bold=true",
};

// Autor-Biographien
const authorBios: Record<string, AuthorInfo> = {
  "Dr. Michael Schmidt": {
    name: "Dr. Michael Schmidt",
    avatar: "https://ui-avatars.com/api/?name=Michael+Schmidt&background=003366&color=fff&size=256&bold=true",
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
    avatar: "https://ui-avatars.com/api/?name=Sarah+Weber&background=bb133e&color=fff&size=256&bold=true",
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
    avatar: "https://ui-avatars.com/api/?name=Thomas+Müller&background=0066cc&color=fff&size=256&bold=true",
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
    avatar: "https://ui-avatars.com/api/?name=Targohyp&background=003366&color=fff&size=256&bold=true",
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
      intro: "Die Immobilienfinanzierung ist ein komplexer Prozess, der sorgfältige Planung und fundiertes Wissen erfordert. Dieser Artikel führt Sie durch die Grundlagen und den typischen Ablauf einer Immobilienfinanzierung.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-01-15",
      sections: [
        {
          title: "Was ist eine Immobilienfinanzierung?",
          content: "Eine Immobilienfinanzierung ist die Bereitstellung von Kapital zur Anschaffung, zum Bau oder zur Modernisierung einer Immobilie. Sie umfasst verschiedene Darlehensformen und wird in der Regel über einen langen Zeitraum zurückgezahlt.",
        },
        {
          title: "Relevante Gesetze und Vorschriften",
          content: "Bei der Immobilienfinanzierung sind verschiedene gesetzliche Rahmenbedingungen zu beachten:",
          points: [
            "Kreditwesengesetz (KWG) - regelt die Tätigkeit von Kreditinstituten",
            "BGB - enthält Regelungen zu Darlehensverträgen",
            "Verbraucherkreditgesetz - schützt Verbraucher bei Kreditgeschäften",
            "Makler- und Bauträgerverordnung - regelt die Tätigkeit von Immobilienmaklern",
            "Grundbuchordnung - regelt die Eintragung von Grundpfandrechten",
          ],
        },
        {
          title: "Typischer Ablauf einer Finanzierung",
          content: "Der Finanzierungsprozess gliedert sich in mehrere Phasen:",
          points: [
            "Erstberatung und Bedarfsanalyse",
            "Ermittlung der Bonität und Finanzierungsfähigkeit",
            "Angebotsvergleich verschiedener Finanzierungsinstitute",
            "Auswahl des passenden Finanzierungsmodells",
            "Beantragung und Prüfung der Finanzierung",
            "Notarielle Beurkundung und Grundbucheintragung",
            "Auszahlung und Übergabe der Immobilie",
          ],
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
        },
        {
          title: "Leistbarkeitsrechnung",
          content: "Die Leistbarkeitsrechnung hilft Ihnen, die maximale Finanzierungssumme zu ermitteln. Sie berücksichtigt Ihr Einkommen, vorhandenes Eigenkapital, laufende Verbindlichkeiten und die zu erwartenden monatlichen Belastungen.",
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
      intro: "Es gibt verschiedene Darlehensarten, die sich in ihren Konditionen, Laufzeiten und Rückzahlungsmodalitäten unterscheiden. Finden Sie heraus, welches Produkt zu Ihrer Situation passt.",
      author: "Thomas Müller",
      createdAt: "2024-02-05",
      sections: [
        {
          title: "Annuitätendarlehen",
          content: "Das Annuitätendarlehen ist die häufigste Form der Baufinanzierung. Die monatliche Rate bleibt über die gesamte Laufzeit konstant und setzt sich aus Zins- und Tilgungsanteil zusammen.",
        },
        {
          title: "Tilgungsdarlehen",
          content: "Beim Tilgungsdarlehen bleibt die Tilgung konstant, während die Zinsen sinken. Die monatliche Rate wird dadurch im Laufe der Zeit geringer.",
        },
        {
          title: "Bauspardarlehen",
          content: "Ein Bauspardarlehen kombiniert Sparen und Darlehen. Nach einer Ansparphase können Sie günstige Zinsen für die Finanzierung erhalten.",
        },
        {
          title: "Volltilger vs. Restschuld",
          content: "Bei einem Volltilger wird das Darlehen vollständig zurückgezahlt. Bei einer Restschuld bleibt am Ende der Zinsbindung eine Restsumme übrig, die dann neu finanziert werden muss.",
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
      intro: "Immobilien als Kapitalanlage bieten nicht nur langfristige Wertsteigerung, sondern auch erhebliche steuerliche Vorteile. Erfahren Sie, wie Sie diese optimal nutzen können.",
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
      intro: "Die Renditeberechnung und der Cashflow sind entscheidende Kennzahlen für eine erfolgreiche Kapitalanlage. Lernen Sie, wie Sie diese richtig kalkulieren.",
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
        },
        {
          title: "Finanzierung für Kapitalanlagen",
          content: "Bei Kapitalanlagen gelten oft andere Konditionen als bei selbstgenutzten Immobilien. Die Eigenkapitalanforderungen können höher sein, und die Zinssätze können variieren.",
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
      intro: "Eine erfolgreiche Preisverhandlung kann Ihnen tausende Euro sparen. Erfahren Sie bewährte Strategien und Tipps für Verhandlungen beim Immobilienkauf.",
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
      intro: "Als Vermieter haben Sie sowohl Rechte als auch Pflichten. Ein klares Verständnis dieser Aspekte ist essentiell für eine erfolgreiche Vermietung.",
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
        },
        {
          title: "Mietvertrag und Dokumentation",
          content: "Ein schriftlicher Mietvertrag ist essentiell. Er sollte enthalten: Mietdauer, Mietpreis, Nebenkosten, Kündigungsfristen, Regelungen zu Schönheitsreparaturen und alle besonderen Vereinbarungen.",
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
      intro: "Die Wahl der richtigen Immobilienart ist entscheidend für den langfristigen Erfolg Ihrer Investition. Erfahren Sie, welche Immobilientypen es gibt und worauf Sie achten sollten.",
      author: "Sarah Weber",
      createdAt: "2024-03-12",
      sections: [
        {
          title: "Eigentumswohnung",
          content: "Eigentumswohnungen bieten den Vorteil der geringeren Anschaffungskosten und weniger Verantwortung für Außenanlagen. Wichtig ist die WEG-Verwaltung und die Höhe der monatlichen Nebenkosten.",
        },
        {
          title: "Einfamilienhaus",
          content: "Ein Einfamilienhaus bietet maximale Freiheit und Gestaltungsmöglichkeiten, erfordert aber auch mehr Eigenverantwortung und höhere Kosten für Instandhaltung.",
        },
        {
          title: "Mehrfamilienhaus",
          content: "Mehrfamilienhäuser eignen sich besonders für Kapitalanleger. Sie bieten mehrere Mieteinnahmequellen, erfordern aber auch professionelles Management.",
        },
        {
          title: "Gewerbeimmobilie",
          content: "Gewerbeimmobilien können höhere Renditen bieten, sind aber auch mit höheren Risiken verbunden. Die Mietverträge sind oft langfristiger, aber Leerstand kann teuer werden.",
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
      intro: "Die Lage ist einer der wichtigsten Faktoren für den Wert einer Immobilie. Erfahren Sie, welche Standortfaktoren den Wert beeinflussen und worauf Sie achten sollten.",
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
        },
        {
          title: "Wertmindernde Faktoren",
          content: "Achten Sie auf: Lärmquellen (Flughäfen, Autobahnen), Umweltschäden, schlechte Infrastruktur, hohe Kriminalität, fehlende Entwicklungsperspektiven.",
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
      intro: "Rechtliche Aspekte spielen bei Immobilientransaktionen eine zentrale Rolle. Ein gutes Verständnis der wichtigsten rechtlichen Grundlagen schützt Sie vor teuren Fehlern.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-03-26",
      sections: [
        {
          title: "Kaufvertrag",
          content: "Der Kaufvertrag sollte enthalten: genaue Beschreibung der Immobilie, Kaufpreis und Zahlungsmodalitäten, Übergabetermin, Gewährleistungsregelungen, Rücktrittsrechte und alle besonderen Vereinbarungen.",
        },
        {
          title: "Grundbuch und Eigentumsübertragung",
          content: "Die Eigentumsübertragung erfolgt durch notarielle Beurkundung und Eintragung ins Grundbuch. Wichtig sind: Eigentumsverhältnisse prüfen, Lasten und Rechte im Grundbuch prüfen, Auflassungsvormerkung vereinbaren.",
        },
        {
          title: "Gewährleistung und Mängelhaftung",
          content: "Bei Mängeln haben Sie Gewährleistungsansprüche. Wichtig: Mängel rechtzeitig rügen, Beweise sichern, Fristen beachten. Ein Gewährleistungsausschluss ist möglich, reduziert aber auch den Kaufpreis.",
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
      intro: "Neben dem Kaufpreis fallen bei einer Immobilie viele weitere Kosten an. Eine realistische Kosteneinschätzung ist essentiell für eine erfolgreiche Finanzierung.",
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
        },
        {
          title: "Renovierungs- und Modernisierungskosten",
          content: "Je nach Zustand der Immobilie können Renovierungskosten anfallen. Planen Sie 10-20% des Kaufpreises als Puffer ein, besonders bei älteren Immobilien.",
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
        },
        {
          title: "Checkliste vor der Entscheidung",
          content: "Bevor Sie zusagen, prüfen Sie: Finanzierung steht, Gutachten eingeholt, alle Kosten kalkuliert, rechtliche Prüfung erfolgt, Vergleichsobjekte analysiert, langfristige Tragfähigkeit geprüft.",
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
      intro: "Wenn Ihre Zinsbindung ausläuft, stellt sich die Frage: Umschulden oder bei der bisherigen Bank bleiben? Erfahren Sie, wann sich eine Umschuldung wirklich lohnt.",
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
        },
        {
          title: "Kosten einer Umschuldung",
          content: "Bei einer Umschuldung fallen Kosten an: Vorfälligkeitsentschädigung (bei vorzeitiger Kündigung), neue Bereitstellungsprovision, Notarkosten, Grundbucheintragung, ggf. neue Absicherungen.",
        },
        {
          title: "Rechnung: Ersparnis vs. Kosten",
          content: "Berechnen Sie genau: Wie viel sparen Sie durch niedrigere Zinsen? Wie hoch sind die Kosten der Umschuldung? Ab wann rechnet sich die Umschuldung? Berücksichtigen Sie auch die Restlaufzeit.",
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
      intro: "Die Zinsentwicklung am Markt kann Ihre Finanzierungsentscheidung erheblich beeinflussen. Erfahren Sie, wie Sie auf Zinsentwicklungen reagieren sollten.",
      author: "Sarah Weber",
      createdAt: "2024-04-23",
      sections: [
        {
          title: "Zinsentwicklung verstehen",
          content: "Zinsen werden von verschiedenen Faktoren beeinflusst: Leitzins der EZB, Inflationsrate, wirtschaftliche Entwicklung, Marktlage und Angebot/Nachfrage.",
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
      intro: "Der richtige Zeitpunkt für Ihre Anschlussfinanzierung kann tausende Euro sparen. Erfahren Sie, wann Sie aktiv werden sollten.",
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
        },
        {
          title: "Fristen beachten",
          content: "Wichtige Fristen: Kündigungsfrist bei Ihrer Bank (meist 3-6 Monate), Zeit für Angebotsvergleich (2-4 Wochen), Zeit für Umschuldung falls gewünscht (4-8 Wochen), Notartermin und Grundbucheintragung.",
        },
        {
          title: "Was passiert, wenn ich nichts tue?",
          content: "Wenn Sie nichts tun, läuft Ihr Darlehen meist in ein variabel verzinstes Darlehen über oder die Bank bietet Ihnen eine Anschlussfinanzierung an - oft zu weniger günstigen Konditionen als bei aktivem Vergleich.",
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
      intro: "Eine energetische Modernisierung steigert nicht nur den Wert Ihrer Immobilie, sondern spart auch langfristig Energiekosten und schont die Umwelt. Erfahren Sie, welche Maßnahmen sich lohnen.",
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
        },
        {
          title: "Finanzierung der Modernisierung",
          content: "Modernisierungen können über verschiedene Wege finanziert werden: Modernisierungskredit, Aufstockung der bestehenden Finanzierung, Eigenkapital, Fördermittel kombinieren.",
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
      intro: "Unsere Studie vergleicht die Photovoltaik-Förderungen und Rahmenbedingungen in verschiedenen Ländern und zeigt die Entwicklungspotenziale für Deutschland auf.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-05-14",
      sections: [
        {
          title: "Studienübersicht",
          content: "Diese Studie analysiert die Photovoltaik-Märkte in verschiedenen europäischen Ländern und vergleicht Förderstrukturen, Einspeisevergütungen und Marktentwicklungen.",
        },
        {
          title: "Haupterkenntnisse",
          content: "Die Studie zeigt: Deutschland hat gute Rahmenbedingungen, aber andere Länder holen auf. Die Einspeisevergütungen variieren erheblich. Die Eigenverbrauchsquote wird immer wichtiger.",
        },
      ],
    },
    "immobilienpreisindex": {
      intro: "Der Immobilienpreisindex Deutschland zeigt die Entwicklung der Immobilienpreise über Zeit und Regionen hinweg.",
      author: "Sarah Weber",
      createdAt: "2024-05-21",
      sections: [
        {
          title: "Aktuelle Entwicklung",
          content: "Die Immobilienpreise in Deutschland haben sich in den letzten Jahren unterschiedlich entwickelt. Während Ballungsräume stark gestiegen sind, zeigen ländliche Regionen eine moderatere Entwicklung.",
        },
        {
          title: "Regionale Unterschiede",
          content: "Die Preisentwicklung variiert erheblich zwischen Regionen. Metropolen wie München, Hamburg und Berlin zeigen die stärkste Entwicklung, während strukturschwache Regionen zurückbleiben.",
        },
      ],
    },
    "zinsentwicklung-25-jahre": {
      intro: "Eine Analyse der Zinsentwicklung der letzten 25 Jahre zeigt langfristige Trends und hilft bei der Einschätzung zukünftiger Entwicklungen.",
      author: "Thomas Müller",
      createdAt: "2024-05-28",
      sections: [
        {
          title: "Historische Entwicklung",
          content: "Die Zinsen für Baufinanzierungen haben in den letzten 25 Jahren erhebliche Schwankungen erlebt. Von hohen Zinsen in den 90er Jahren über historische Tiefstände bis hin zu aktuellen Entwicklungen.",
        },
        {
          title: "Trendanalyse",
          content: "Die Analyse zeigt langfristige Zyklen und hilft bei der Einschätzung, ob aktuelle Zinsen hoch oder niedrig sind im historischen Vergleich.",
        },
      ],
    },
  },
  lexikon: {
    "grunderwerbsteuer": {
      intro: "Die Grunderwerbsteuer ist eine wichtige Steuer beim Immobilienkauf. Erfahren Sie, wie sie berechnet wird und welche Besonderheiten es gibt.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-06-04",
      sections: [
        {
          title: "Was ist die Grunderwerbsteuer?",
          content: "Die Grunderwerbsteuer ist eine Steuer, die beim Kauf einer Immobilie anfällt. Sie wird vom Käufer gezahlt und beträgt je nach Bundesland 3,5% bis 6,5% des Kaufpreises.",
        },
        {
          title: "Berechnung",
          content: "Die Grunderwerbsteuer wird auf den Kaufpreis berechnet. Bei einem Kaufpreis von 400.000€ und einem Steuersatz von 5% beträgt die Grunderwerbsteuer 20.000€.",
        },
      ],
    },
    "rueckauflassungsvormerkung": {
      intro: "Die Rückauflassungsvormerkung ist ein wichtiger rechtlicher Begriff im Immobilienrecht. Erfahren Sie, was sie bedeutet und wann sie relevant ist.",
      author: "Dr. Michael Schmidt",
      createdAt: "2024-06-11",
      sections: [
        {
          title: "Definition",
          content: "Eine Rückauflassungsvormerkung sichert dem Verkäufer das Recht, die Immobilie zurück zu erwerben, falls bestimmte Bedingungen nicht erfüllt werden.",
        },
        {
          title: "Wann wird sie verwendet?",
          content: "Sie wird häufig bei Ratenkäufen oder bei Verkäufen mit Rückkaufrecht verwendet, um den Verkäufer abzusichern.",
        },
      ],
    },
  },
  checklisten: {
    "checkliste-immokauf": {
      intro: "Mit dieser Checkliste vergessen Sie nichts beim Immobilienkauf. Gehen Sie Schritt für Schritt vor und stellen Sie sicher, dass alle wichtigen Punkte beachtet werden.",
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
        },
      ],
    },
    "checkliste-immoverkauf": {
      intro: "Beim Verkauf einer Immobilie gibt es viele Punkte zu beachten. Diese Checkliste hilft Ihnen, nichts zu vergessen.",
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
        },
      ],
    },
    "checkliste-immobewertung": {
      intro: "Eine professionelle Immobilienbewertung ist wichtig für Kauf, Verkauf oder Finanzierung. Diese Checkliste hilft bei der Vorbereitung.",
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
        },
      ],
    },
    "checkliste-sanierung": {
      intro: "Eine Sanierung erfordert sorgfältige Planung. Diese Checkliste hilft Ihnen, alle wichtigen Schritte zu beachten.",
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
