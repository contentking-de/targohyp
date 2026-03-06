// Lexikon-Daten für Baufinanzierung

export interface FAQ {
  frage: string;
  antwort: string;
}

export interface ContentSection {
  ueberschrift: string;
  inhalt: string[];
}

export interface LexikonBegriff {
  slug: string;
  begriff: string;
  kategorie: string;
  definition: string;
  beschreibung?: string;
  details?: string[];
  sektionen?: ContentSection[];
  verwandteBegriffe?: string[];
  faqs?: FAQ[];
}

// Funktion zum Erstellen eines URL-freundlichen Slugs
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Alle Lexikon-Begriffe
export const lexikonBegriffe: LexikonBegriff[] = [
  {
    slug: "annuitaet",
    begriff: "Annuität",
    kategorie: "Tilgung",
    definition: "Die gleichbleibende monatliche Rate bei einer Baufinanzierung, die sich aus Zins- und Tilgungsanteil zusammensetzt.",
    beschreibung: "Die Annuität ist die monatliche Rate, die Sie während der gesamten Laufzeit Ihres Darlehens zahlen. Sie setzt sich aus zwei Komponenten zusammen: dem Zinsanteil und dem Tilgungsanteil. Während der Zinsanteil im Laufe der Zeit sinkt (da die Restschuld kleiner wird), steigt der Tilgungsanteil entsprechend an, sodass die Gesamtrate konstant bleibt.",
    details: [
      "Die Annuität bleibt während der gesamten Zinsbindungsfrist konstant",
      "Sie setzt sich aus Zins- und Tilgungsanteil zusammen",
      "Der Zinsanteil sinkt mit abnehmender Restschuld",
      "Der Tilgungsanteil steigt entsprechend an"
    ],
    verwandteBegriffe: ["Tilgung", "Zinsbindungsfrist", "Restschuld"],
    faqs: [
      {
        frage: "Warum bleibt die Annuität konstant, obwohl sich Zins- und Tilgungsanteil ändern?",
        antwort: "Die Annuität bleibt konstant, weil sich Zins- und Tilgungsanteil gegenseitig ausgleichen. Mit jeder Tilgung sinkt die Restschuld, wodurch der Zinsanteil kleiner wird. Der freiwerdende Betrag wird automatisch dem Tilgungsanteil zugeschlagen, sodass die Gesamtrate gleich bleibt."
      },
      {
        frage: "Kann sich die Annuität während der Laufzeit ändern?",
        antwort: "Während der Zinsbindungsfrist bleibt die Annuität konstant. Nach Ablauf der Zinsbindung kann sich die Rate bei der Anschlussfinanzierung ändern, wenn sich der Zinssatz ändert."
      },
      {
        frage: "Wie wird die Höhe der Annuität berechnet?",
        antwort: "Die Annuität wird basierend auf dem Darlehensbetrag, dem Zinssatz und der Tilgungsrate berechnet. Sie ergibt sich aus der Formel: Annuität = Darlehensbetrag × (Zinssatz + Tilgungsrate) / 12."
      }
    ]
  },
  {
    slug: "beleihungswert",
    begriff: "Beleihungswert",
    kategorie: "Bewertung",
    definition: "Der Wert einer Immobilie, der von der Bank als Grundlage für die Kreditvergabe herangezogen wird.",
    beschreibung: "Der Beleihungswert ist der Wert, den eine Bank einer Immobilie beimisst und der als Grundlage für die Kreditvergabe dient. Er liegt in der Regel unter dem Verkehrswert oder Kaufpreis, da die Bank ein Sicherheitspolster einrechnet. Der Beleihungswert wird durch einen Gutachter ermittelt und berücksichtigt verschiedene Faktoren wie Lage, Zustand, Ausstattung und Marktlage.",
    details: [
      "Liegt meist 10-20% unter dem Verkehrswert",
      "Wird durch einen Sachverständigen ermittelt",
      "Dient als Grundlage für die maximale Kredithöhe",
      "Berücksichtigt langfristige Werthaltigkeit"
    ],
    verwandteBegriffe: ["Verkehrswert", "Gutachter", "Beleihungsauslauf"]
  },
  {
    slug: "eigenkapital",
    begriff: "Eigenkapital",
    kategorie: "Finanzierung",
    definition: "Das eigene Kapital, das ein Kreditnehmer für den Immobilienerwerb oder Bau einbringt.",
    beschreibung: "Eigenkapital ist der Teil der Finanzierung, den Sie selbst aufbringen, ohne dafür einen Kredit aufzunehmen. Dazu zählen Ersparnisse, Bausparverträge, Wertpapiere, Lebensversicherungen oder auch Schenkungen. Eine höhere Eigenkapitalquote verbessert in der Regel die Zinskonditionen und erhöht die Chancen auf eine Kreditvergabe.",
    details: [
      "Mindestens 20% Eigenkapital wird empfohlen",
      "Kann aus verschiedenen Quellen stammen",
      "Verbessert die Zinskonditionen",
      "Reduziert das Risiko für die Bank"
    ],
    verwandteBegriffe: ["Eigenkapitalquote", "Finanzierungsplan", "Kaufnebenkosten"],
    faqs: [
      {
        frage: "Was zählt alles als Eigenkapital?",
        antwort: "Als Eigenkapital zählen Ersparnisse, Bausparverträge, Wertpapiere, Lebensversicherungen, Schenkungen von Verwandten, Eigenleistungen beim Bau und auch der Verkaufserlös einer bestehenden Immobilie."
      },
      {
        frage: "Wie viel Eigenkapital brauche ich mindestens?",
        antwort: "Eine Eigenkapitalquote von mindestens 20% wird empfohlen. Das bedeutet, dass Sie 20% der Gesamtkosten (Kaufpreis + Kaufnebenkosten) aus Eigenkapital finanzieren sollten. Mit mehr Eigenkapital erhalten Sie bessere Zinskonditionen."
      },
      {
        frage: "Kann ich auch ohne Eigenkapital finanzieren?",
        antwort: "Theoretisch möglich, aber nicht empfehlenswert. Ohne Eigenkapital sind die Zinskonditionen deutlich schlechter, die monatliche Belastung höher und die Banken verlangen oft zusätzliche Sicherheiten."
      }
    ]
  },
  {
    slug: "festzins",
    begriff: "Festzins",
    kategorie: "Zinsen",
    definition: "Ein für einen bestimmten Zeitraum fester Zinssatz, der während der Zinsbindungsfrist nicht verändert werden kann.",
    beschreibung: "Ein Festzins ist ein für eine bestimmte Zeitdauer (Zinsbindungsfrist) vereinbarter, unveränderlicher Zinssatz. Während dieser Zeit bleibt der Zinssatz konstant, unabhängig von Schwankungen am Kapitalmarkt. Nach Ablauf der Zinsbindungsfrist muss eine Anschlussfinanzierung vereinbart werden, die dann zu den aktuellen Marktzinsen erfolgt.",
    details: [
      "Bietet Planungssicherheit",
      "Schützt vor Zinssteigerungen",
      "Längere Zinsbindung meist teurer",
      "Nach Ablauf Anschlussfinanzierung nötig"
    ],
    verwandteBegriffe: ["Zinsbindungsfrist", "Anschlussfinanzierung", "Sollzinssatz"]
  },
  {
    slug: "grundschuld",
    begriff: "Grundschuld",
    kategorie: "Sicherheit",
    definition: "Ein Grundpfandrecht, das der Bank als Sicherheit für den Kredit dient.",
    beschreibung: "Die Grundschuld ist ein Grundpfandrecht, das im Grundbuch eingetragen wird und der Bank als Sicherheit für den gewährten Kredit dient. Im Gegensatz zur Hypothek ist die Grundschuld nicht an eine bestimmte Forderung gebunden und kann auch nach vollständiger Tilgung im Grundbuch verbleiben. Sie kann dann für eine spätere Finanzierung wiederverwendet werden.",
    details: [
      "Wird im Grundbuch eingetragen",
      "Dient als Sicherheit für die Bank",
      "Kann nach Tilgung im Grundbuch bleiben",
      "Ermöglicht spätere Wiederverwendung"
    ],
    verwandteBegriffe: ["Hypothek", "Grundbuch", "Grundpfandrecht"]
  },
  {
    slug: "sondertilgung",
    begriff: "Sondertilgung",
    kategorie: "Tilgung",
    definition: "Eine zusätzliche Tilgung außerhalb der regulären monatlichen Rate, die die Kreditlaufzeit verkürzt.",
    beschreibung: "Eine Sondertilgung ist eine zusätzliche Zahlung, die Sie außerhalb Ihrer regulären monatlichen Rate leisten können. Sie reduziert die Restschuld und verkürzt damit die Laufzeit des Darlehens. Viele Darlehensverträge erlauben jährliche Sondertilgungen von bis zu 5% der ursprünglichen Darlehenssumme ohne Vorfälligkeitsentschädigung.",
    details: [
      "Reduziert die Restschuld",
      "Verkürzt die Laufzeit",
      "Spart Zinskosten",
      "Oft bis 5% pro Jahr kostenlos möglich"
    ],
    verwandteBegriffe: ["Tilgung", "Restschuld", "Vorfälligkeitsentschädigung"],
    faqs: [
      {
        frage: "Wie viel kann ich jährlich als Sondertilgung zahlen?",
        antwort: "Die meisten Darlehensverträge erlauben jährliche Sondertilgungen von bis zu 5% der ursprünglichen Darlehenssumme ohne zusätzliche Gebühren. Einige Banken erlauben auch höhere Beträge, oft gegen eine Vorfälligkeitsentschädigung."
      },
      {
        frage: "Lohnt sich eine Sondertilgung finanziell?",
        antwort: "Ja, eine Sondertilgung lohnt sich meist, da sie die Restschuld reduziert und damit Zinskosten spart. Die Laufzeit verkürzt sich, und Sie sind schneller schuldenfrei. Vergleichen Sie jedoch, ob die Sondertilgung mehr bringt als eine alternative Geldanlage."
      },
      {
        frage: "Muss ich die Sondertilgung jedes Jahr nutzen?",
        antwort: "Nein, Sondertilgungen sind freiwillig. Sie können sie nutzen, wenn Sie zusätzliches Geld haben, müssen es aber nicht. Die reguläre monatliche Rate bleibt davon unberührt."
      }
    ]
  },
  {
    slug: "tilgung",
    begriff: "Tilgung",
    kategorie: "Tilgung",
    definition: "Tilgung ist im Kern die (meist vertraglich geregelte) teilweise oder vollständige Rückzahlung einer bestehenden Schuld, insbesondere eines Kredits oder einer Anleihe, in Geldform.",
    beschreibung: "Unter Tilgung versteht man die Rückzahlung des aufgenommenen Kapitals, also der eigentlichen Kreditsumme (Nominalbetrag), nicht der Zinsen. Tilgungsleistungen sind von den Zinszahlungen zu unterscheiden: Zinsen sind das Entgelt für die Überlassung des Kapitals, Tilgung reduziert die Restschuld. Der Begriff wird vor allem in der Kreditwirtschaft (Darlehen, Hypotheken, Konsumentenkredite) und bei festverzinslichen Wertpapieren (Anleihen) verwendet.\n\nEin einfaches Beispiel: Bei einer Monatsrate von 500 Euro können etwa 300 Euro auf die Tilgung und 200 Euro auf die Zinsen entfallen; nur die 300 Euro verringern die Restschuld.",
    sektionen: [
      {
        ueberschrift: "Funktionen der Tilgung",
        inhalt: [
          "Schuldenabbau: Tilgung führt zur schrittweisen oder einmaligen Reduzierung der Verbindlichkeiten eines Schuldners.",
          "Planbarkeit: Über Tilgungspläne werden Höhe und Fälligkeit der Rückzahlungen festgelegt und sind damit ein zentrales Instrument der Finanz- und Liquiditätsplanung.",
          "Bonität und Handlungsfähigkeit: Eine fortschreitende Tilgung verbessert in der Regel die Verschuldungskennzahlen und erweitert zukünftige Finanzierungsspielräume.",
          "In der öffentlichen Haushaltswirtschaft ist Tilgung zudem Bestandteil der Verschuldungs- und Entschuldungsstrategie von Gebietskörperschaften (z.B. Kommunen)."
        ]
      },
      {
        ueberschrift: "Ordentliche und außerordentliche Tilgung",
        inhalt: [
          "Ordentliche Tilgung: Planmäßige Rückzahlung gemäß Kredit- oder Anleihevertrag. Die Raten bzw. Tilgungsbeträge und Fälligkeiten sind im Tilgungsplan festgelegt.",
          "Außerordentliche Tilgung: Nicht planmäßige, zusätzliche Rückzahlung, z.B. Sondertilgungen oder vorzeitige Rückführung des gesamten Kredits. Häufig nur in bestimmten Grenzen und ggf. gegen Vorfälligkeitsentschädigung möglich.",
          "Sondertilgungen erlauben es Kreditnehmern, die Restschuld schneller zu senken und Zinskosten über die Laufzeit zu sparen."
        ]
      },
      {
        ueberschrift: "Tilgungsarten bei Krediten",
        inhalt: [
          "Ratentilgung (Tilgungsdarlehen): Bei klassischen Tilgungsdarlehen bleibt der Tilgungsbetrag pro Periode gleich, während die Zinsbelastung im Zeitablauf sinkt, sodass die Gesamtbelastung (Rate) abnimmt. Beispiel: Ein Kredit von 120.000 Euro wird in 48 gleichen Tilgungsraten zu je 2.500 Euro zurückgezahlt; der Zins wird jeweils auf die abnehmende Restschuld berechnet.",
          "Annuitätendarlehen: Beim Annuitätendarlehen bleibt die Gesamtjahres- oder Monatsrate (Annuität) konstant; sie setzt sich aus Zins- und Tilgungsanteil zusammen. Mit fortschreitender Zeit sinkt der Zinsanteil und der Tilgungsanteil steigt, weil die Restschuld kontinuierlich abnimmt. Annuitätendarlehen sind im Immobilienbereich die gängigste Kreditform, da sie für den Kreditnehmer gut planbare, gleichbleibende Raten bieten.",
          "Endfälliges Darlehen: Beim endfälligen Darlehen werden während der Laufzeit in der Regel nur Zinsen gezahlt; die Tilgung des gesamten Kapitals erfolgt in einer Summe am Laufzeitende. Dieses Modell wird oft mit einem gesonderten Spar- oder Anlagevertrag (z.B. Lebensversicherung, Bausparvertrag) kombiniert, aus dem die Endtilgung gespeist werden soll.",
          "Tilgung mit Balloonzahlung: Bei einer Tilgung mit Balloonzahlung werden über die Laufzeit nur geringe oder gar keine Tilgungsbeträge gezahlt; am Ende steht eine größere Schlussrate (›Ballon‹). Vorteil sind niedrigere laufende Raten, Nachteil ist das Risiko, die hohe Abschlusszahlung nicht darstellen zu können."
        ]
      },
      {
        ueberschrift: "Tilgungsformen bei Anleihen",
        inhalt: [
          "Bei festverzinslichen Wertpapieren (Anleihen) kann die Tilgung einmalig am Ende der Laufzeit (›Bullet-Tilgung‹) oder über Auslosungen von Teilbeträgen erfolgen.",
          "Häufig kauft der Emittent Anleihen über den Markt zurück oder lost Serien/Nummern zur Tilgung aus einem Tilgungsfonds aus.",
          "Vom Einlösungstermin ab wird das getilgte Stück nicht mehr verzinst; ein Versäumen des Einlösungstermins führt daher zu Zinsverlusten für den Anleger.",
          "Bei Prämien- oder Losanleihen ist die Tilgung oft mit einer Verlosung von Gewinnen (Prämien) verbunden."
        ]
      },
      {
        ueberschrift: "Berechnung von Tilgung und Tilgungsrate",
        inhalt: [
          "Die Tilgungsrate (Tilgungssatz) gibt an, welcher Prozentsatz der ursprünglichen Kreditsumme pro Jahr zurückgezahlt wird.",
          "Berechnung: jährliche Tilgungszahlung ÷ ursprünglicher Kreditbetrag × 100.",
          "Beispiel: Bei einem Kredit von 10.000 Euro und einer jährlichen Tilgung von 500 Euro beträgt die Tilgungsrate 5 %.",
          "Ein höherer anfänglicher Tilgungssatz führt zu einer schnelleren Entschuldung, erhöht aber die laufende finanzielle Belastung."
        ]
      },
      {
        ueberschrift: "Tilgung und Finanzplanung",
        inhalt: [
          "Die Wahl von Tilgungsart, Tilgungsrate und Laufzeit bestimmt maßgeblich die Gesamtkosten eines Kredits und die Liquiditätsbelastung pro Periode.",
          "Tilgungspläne werden in der Unternehmens- wie in der privaten Finanzplanung genutzt, um Zahlungsströme zu prognostizieren und Risiken (z.B. Zinsänderungs- oder Anschlussfinanzierungsrisiken) zu steuern.",
          "Insbesondere zum Ende von Zinsbindungsfristen bei langfristigen Darlehen (z.B. Immobilienfinanzierung) spielt die Frage, ob die Tilgung erhöht oder durch Sondertilgungen ergänzt werden kann, eine zentrale Rolle."
        ]
      },
      {
        ueberschrift: "Tilgung im öffentlichen Haushalt",
        inhalt: [
          "In der öffentlichen Finanzwirtschaft bezeichnet Tilgung die Rückzahlung von Investitionskrediten oder Kassenkrediten der Gebietskörperschaften (z.B. Gemeinden, Länder).",
          "Sie ist im Haushaltsplan eigenständig auszuweisen und beeinflusst die Entwicklung des Schuldenstands und der Zinsausgaben öffentlicher Haushalte."
        ]
      },
      {
        ueberschrift: "Tilgung im weiteren (sprachlichen) Sinn",
        inhalt: [
          "Außerhalb der Finanzwelt wird der Begriff ›Tilgung‹ auch in anderen Fachkontexten verwendet, etwa in der Linguistik bzw. im NLP (Neuro-Linguistisches Programmieren) für das Auslassen von Informationen in sprachlichen Äußerungen.",
          "Dort bezeichnet Tilgung das Weglassen bestimmter sprachlicher Elemente (z.B. unbestimmte Verben, fehlende Referenzen), was zu Informationsverlust oder Unschärfe führt."
        ]
      }
    ],
    verwandteBegriffe: ["Annuität", "Tilgungsrate", "Restschuld", "Sondertilgung", "Vorfälligkeitsentschädigung", "Tilgungsplan"],
    faqs: [
      {
        frage: "Was ist der Unterschied zwischen Tilgung und Zinsen?",
        antwort: "Tilgung ist die Rückzahlung des aufgenommenen Kapitals (Nominalbetrag) und reduziert die Restschuld. Zinsen hingegen sind das Entgelt für die Überlassung des Kapitals und verringern die Schuld nicht. Bei einer Monatsrate von 500 Euro können z.B. 300 Euro auf die Tilgung und 200 Euro auf die Zinsen entfallen."
      },
      {
        frage: "Welche Tilgungsart ist bei einer Immobilienfinanzierung am gängigsten?",
        antwort: "Das Annuitätendarlehen ist im Immobilienbereich die gängigste Kreditform. Die monatliche Rate bleibt konstant, wobei der Zinsanteil im Laufe der Zeit sinkt und der Tilgungsanteil steigt. Das bietet dem Kreditnehmer gut planbare, gleichbleibende Raten."
      },
      {
        frage: "Was bringt eine höhere Tilgungsrate?",
        antwort: "Ein höherer anfänglicher Tilgungssatz führt zu einer schnelleren Entschuldung und damit zu geringeren Gesamtzinskosten über die Laufzeit. Allerdings erhöht sich dadurch auch die laufende monatliche Belastung."
      },
      {
        frage: "Was ist eine Sondertilgung und wann lohnt sie sich?",
        antwort: "Eine Sondertilgung ist eine zusätzliche, nicht planmäßige Rückzahlung auf den Kredit. Sie erlaubt es, die Restschuld schneller zu senken und Zinskosten über die Laufzeit zu sparen. Häufig sind Sondertilgungen nur in bestimmten Grenzen und ggf. gegen Vorfälligkeitsentschädigung möglich."
      },
      {
        frage: "Was ist der Unterschied zwischen Ratentilgung und Annuitätendarlehen?",
        antwort: "Bei der Ratentilgung bleibt der Tilgungsbetrag pro Periode gleich, während die Gesamtrate (Tilgung + Zinsen) im Zeitablauf sinkt. Beim Annuitätendarlehen bleibt die Gesamtrate konstant, wobei sich das Verhältnis von Zins- zu Tilgungsanteil zugunsten der Tilgung verschiebt."
      }
    ]
  },
  {
    slug: "zinsbindungsfrist",
    begriff: "Zinsbindungsfrist",
    kategorie: "Zinsen",
    definition: "Der Zeitraum, für den ein fester Zinssatz vereinbart wird.",
    beschreibung: "Die Zinsbindungsfrist ist der Zeitraum, für den Sie einen festen Zinssatz vereinbaren. Während dieser Zeit bleibt Ihr Zinssatz unverändert. Typische Zinsbindungsfristen sind 5, 10, 15 oder 20 Jahre. Nach Ablauf müssen Sie eine Anschlussfinanzierung zu den dann geltenden Marktzinsen abschließen.",
    details: [
      "Typische Laufzeiten: 5, 10, 15, 20 Jahre",
      "Bietet Planungssicherheit",
      "Längere Frist meist teurer",
      "Nach Ablauf Anschlussfinanzierung nötig"
    ],
    verwandteBegriffe: ["Festzins", "Anschlussfinanzierung", "Sollzinssatz"],
    faqs: [
      {
        frage: "Welche Zinsbindungsfrist ist die beste?",
        antwort: "Das hängt von Ihrer persönlichen Situation ab. Eine längere Zinsbindung (15-20 Jahre) bietet mehr Planungssicherheit, ist aber meist teurer. Eine kürzere Frist (5-10 Jahre) ist günstiger, birgt aber das Risiko steigender Zinsen bei der Anschlussfinanzierung."
      },
      {
        frage: "Was passiert nach Ablauf der Zinsbindungsfrist?",
        antwort: "Nach Ablauf der Zinsbindungsfrist müssen Sie eine Anschlussfinanzierung abschließen. Der Zinssatz richtet sich dann nach den aktuellen Marktzinsen. Es ist wichtig, rechtzeitig vor Ablauf verschiedene Angebote zu vergleichen."
      },
      {
        frage: "Kann ich die Zinsbindungsfrist verlängern?",
        antwort: "Ja, Sie können vor Ablauf der Zinsbindung eine Verlängerung vereinbaren. Dies erfolgt dann zu den aktuellen Marktzinsen. Eine frühzeitige Planung ist empfehlenswert."
      }
    ]
  },
  {
    slug: "effektiver-jahreszins",
    begriff: "Effektiver Jahreszins",
    kategorie: "Zinsen",
    definition: "Der tatsächliche Jahreszins, der alle Kosten der Kreditaufnahme berücksichtigt.",
    beschreibung: "Der effektive Jahreszins (auch APR genannt) gibt die tatsächlichen jährlichen Kosten eines Kredits an. Im Gegensatz zum Nominalzins berücksichtigt er alle Kosten wie Bearbeitungsgebühren, Disagio und andere Nebenkosten. Er ermöglicht einen direkten Vergleich verschiedener Kreditangebote.",
    details: [
      "Berücksichtigt alle Kreditkosten",
      "Ermöglicht Vergleich verschiedener Angebote",
      "Liegt meist über dem Nominalzins",
      "Wird gesetzlich vorgeschrieben angegeben"
    ],
    verwandteBegriffe: ["Nominalzins", "Sollzinssatz", "Bearbeitungsgebühr"]
  },
  {
    slug: "nominalzins",
    begriff: "Nominalzins",
    kategorie: "Zinsen",
    definition: "Der reine Zinssatz ohne Berücksichtigung zusätzlicher Kosten.",
    beschreibung: "Der Nominalzins ist der reine Zinssatz, der auf den Darlehensbetrag berechnet wird. Er berücksichtigt keine zusätzlichen Kosten wie Bearbeitungsgebühren oder Disagio. Der Nominalzins ist daher meist niedriger als der effektive Jahreszins und dient als Basis für die Zinsberechnung.",
    details: [
      "Reiner Zinssatz ohne Nebenkosten",
      "Basis für Zinsberechnung",
      "Liegt unter dem effektiven Jahreszins",
      "Wird im Darlehensvertrag festgelegt"
    ],
    verwandteBegriffe: ["Effektiver Jahreszins", "Sollzinssatz", "Zinsberechnung"]
  },
  {
    slug: "sollzinssatz",
    begriff: "Sollzinssatz",
    kategorie: "Zinsen",
    definition: "Der Zinssatz, der für die Inanspruchnahme des Darlehens zu zahlen ist.",
    beschreibung: "Der Sollzinssatz ist der Zinssatz, den Sie für die Inanspruchnahme des Darlehens zahlen müssen. Er wird in Prozent pro Jahr angegeben und ist der Basiszinssatz für Ihre Baufinanzierung. Der Sollzinssatz kann fest oder variabel vereinbart werden.",
    details: [
      "Wird in Prozent pro Jahr angegeben",
      "Kann fest oder variabel sein",
      "Basis für Zinsberechnung",
      "Wird im Darlehensvertrag festgelegt"
    ],
    verwandteBegriffe: ["Nominalzins", "Effektiver Jahreszins", "Festzins"]
  },
  {
    slug: "anschlussfinanzierung",
    begriff: "Anschlussfinanzierung",
    kategorie: "Finanzierung",
    definition: "Die Finanzierung, die nach Ablauf der Zinsbindungsfrist folgt.",
    beschreibung: "Die Anschlussfinanzierung ist die Finanzierung, die nach Ablauf der vereinbarten Zinsbindungsfrist folgt. Sie erfolgt zu den dann aktuellen Marktzinsen. Es ist wichtig, rechtzeitig vor Ablauf der Zinsbindung die Anschlussfinanzierung zu planen und verschiedene Angebote zu vergleichen.",
    details: [
      "Folgt nach Ablauf der Zinsbindungsfrist",
      "Erfolgt zu aktuellen Marktzinsen",
      "Sollte rechtzeitig geplant werden",
      "Vergleich verschiedener Angebote empfohlen"
    ],
    verwandteBegriffe: ["Zinsbindungsfrist", "Festzins", "Provisionsfreie Anschlussfinanzierung"],
    faqs: [
      {
        frage: "Wann sollte ich mit der Planung der Anschlussfinanzierung beginnen?",
        antwort: "Sie sollten etwa 6-12 Monate vor Ablauf der Zinsbindungsfrist mit der Planung beginnen. So haben Sie genug Zeit, verschiedene Angebote zu vergleichen und die beste Lösung zu finden."
      },
      {
        frage: "Kann ich bei einer anderen Bank eine Anschlussfinanzierung abschließen?",
        antwort: "Ja, Sie können die Anschlussfinanzierung bei jeder Bank abschließen. Oft lohnt es sich, verschiedene Angebote zu vergleichen. Eine Umfinanzierung zu einer anderen Bank kann bessere Konditionen bieten."
      },
      {
        frage: "Was passiert, wenn ich keine Anschlussfinanzierung abschließe?",
        antwort: "Wenn Sie keine Anschlussfinanzierung abschließen, läuft Ihr Darlehen meist auf einen variablen Zinssatz um, der sich nach den aktuellen Marktzinsen richtet. Dieser kann deutlich höher sein als ein Festzins."
      }
    ]
  },
  {
    slug: "vorfaelligkeitsentschaedigung",
    begriff: "Vorfälligkeitsentschädigung",
    kategorie: "Tilgung",
    definition: "Eine Entschädigung, die bei vorzeitiger vollständiger Rückzahlung eines Darlehens fällig wird.",
    beschreibung: "Die Vorfälligkeitsentschädigung ist eine Entschädigung, die die Bank erheben kann, wenn Sie Ihr Darlehen vor Ablauf der vereinbarten Laufzeit vollständig zurückzahlen. Sie soll die Bank für entgangene Zinserträge entschädigen. Die Höhe hängt von der Restlaufzeit und den aktuellen Marktzinsen ab.",
    details: [
      "Fällt bei vorzeitiger vollständiger Tilgung an",
      "Entschädigt Bank für entgangene Zinsen",
      "Höhe abhängig von Restlaufzeit",
      "Kann bei Umfinanzierung anfallen"
    ],
    verwandteBegriffe: ["Sondertilgung", "Restschuld", "Umfinanzierung"]
  },
  {
    slug: "restschuld",
    begriff: "Restschuld",
    kategorie: "Tilgung",
    definition: "Der noch offene Betrag eines Darlehens nach Abzug aller bereits geleisteten Tilgungen.",
    beschreibung: "Die Restschuld ist der Betrag, den Sie noch an die Bank schulden. Sie verringert sich mit jeder Tilgungszahlung. Die Restschuld ist wichtig für die Planung der Anschlussfinanzierung und für die Berechnung von Sondertilgungen.",
    details: [
      "Verringert sich mit jeder Tilgung",
      "Wichtig für Anschlussfinanzierung",
      "Wird regelmäßig in Tilgungsplänen ausgewiesen",
      "Kann durch Sondertilgungen schneller reduziert werden"
    ],
    verwandteBegriffe: ["Tilgung", "Sondertilgung", "Anschlussfinanzierung"]
  },
  {
    slug: "tilgungsplan",
    begriff: "Tilgungsplan",
    kategorie: "Tilgung",
    definition: "Eine Übersicht über die Entwicklung von Restschuld, Zins- und Tilgungsanteil über die Laufzeit.",
    beschreibung: "Ein Tilgungsplan zeigt die Entwicklung Ihres Darlehens über die gesamte Laufzeit. Er listet für jeden Zeitpunkt die Restschuld, den Zinsanteil, den Tilgungsanteil und die Gesamtrate auf. So können Sie sehen, wie sich Ihre Schuld entwickelt und wie viel Zinsen Sie insgesamt zahlen.",
    details: [
      "Zeigt Entwicklung der Restschuld",
      "Listet Zins- und Tilgungsanteil auf",
      "Hilft bei Finanzierungsplanung",
      "Wird von Banken zur Verfügung gestellt"
    ],
    verwandteBegriffe: ["Tilgung", "Restschuld", "Annuität"]
  },
  {
    slug: "kaufnebenkosten",
    begriff: "Kaufnebenkosten",
    kategorie: "Finanzierung",
    definition: "Zusätzliche Kosten, die beim Immobilienerwerb neben dem Kaufpreis anfallen.",
    beschreibung: "Kaufnebenkosten sind alle Kosten, die zusätzlich zum Kaufpreis beim Immobilienerwerb anfallen. Dazu zählen Grunderwerbsteuer, Notarkosten, Grundbucheintragung, Maklerprovision und ggf. weitere Kosten. Sie betragen in der Regel 10-15% des Kaufpreises und müssen aus Eigenkapital finanziert werden.",
    details: [
      "Betragen ca. 10-15% des Kaufpreises",
      "Müssen aus Eigenkapital finanziert werden",
      "Umfassen Grunderwerbsteuer, Notar, Grundbuch, Makler",
      "Variieren je nach Bundesland"
    ],
    verwandteBegriffe: ["Eigenkapital", "Grunderwerbsteuer", "Notarkosten"],
    faqs: [
      {
        frage: "Was gehört alles zu den Kaufnebenkosten?",
        antwort: "Zu den Kaufnebenkosten zählen: Grunderwerbsteuer (3,5-6,5%), Notarkosten (ca. 1-2%), Grundbucheintragung, Maklerprovision (ca. 3-3,57%), ggf. Maklercourtage und weitere Nebenkosten wie Grundbuchauszug oder Beglaubigungen."
      },
      {
        frage: "Kann ich die Kaufnebenkosten mitfinanzieren?",
        antwort: "Nein, die Kaufnebenkosten müssen aus Eigenkapital finanziert werden. Banken finanzieren in der Regel nur den Kaufpreis der Immobilie, nicht die Nebenkosten. Daher sollten Sie diese bei der Finanzierungsplanung berücksichtigen."
      },
      {
        frage: "Wie kann ich die Kaufnebenkosten reduzieren?",
        antwort: "Die Kaufnebenkosten können nicht direkt reduziert werden, da sie gesetzlich oder durch Gebührenordnungen festgelegt sind. Sie können jedoch durch Verhandlungen mit dem Makler oder durch den Kauf einer Immobilie ohne Makler (Eigentumswohnung direkt vom Bauträger) sparen."
      }
    ]
  },
  {
    slug: "grunderwerbsteuer",
    begriff: "Grunderwerbsteuer",
    kategorie: "Finanzierung",
    definition: "Eine Steuer, die beim Kauf einer Immobilie anfällt.",
    beschreibung: "Die Grunderwerbsteuer ist eine Steuer, die beim Kauf einer Immobilie anfällt. Sie wird vom Käufer gezahlt und beträgt je nach Bundesland zwischen 3,5% und 6,5% des Kaufpreises. Die Grunderwerbsteuer ist Teil der Kaufnebenkosten und muss aus Eigenkapital finanziert werden.",
    details: [
      "Beträgt 3,5% bis 6,5% des Kaufpreises",
      "Variiert je nach Bundesland",
      "Wird vom Käufer gezahlt",
      "Ist Teil der Kaufnebenkosten"
    ],
    verwandteBegriffe: ["Kaufnebenkosten", "Eigenkapital", "Notarkosten"]
  },
  {
    slug: "notarkosten",
    begriff: "Notarkosten",
    kategorie: "Finanzierung",
    definition: "Kosten für notarielle Beurkundung des Kaufvertrags und weitere notarielle Leistungen.",
    beschreibung: "Notarkosten fallen für die notarielle Beurkundung des Kaufvertrags und weitere notarielle Leistungen an. Sie richten sich nach dem Kaufpreis und betragen in der Regel etwa 1-2% des Kaufpreises. Die Notarkosten sind Teil der Kaufnebenkosten.",
    details: [
      "Betragen ca. 1-2% des Kaufpreises",
      "Für notarielle Beurkundung des Kaufvertrags",
      "Sind Teil der Kaufnebenkosten",
      "Richten sich nach dem Kaufpreis"
    ],
    verwandteBegriffe: ["Kaufnebenkosten", "Grunderwerbsteuer", "Grundbucheintragung"]
  },
  {
    slug: "eigenkapitalquote",
    begriff: "Eigenkapitalquote",
    kategorie: "Finanzierung",
    definition: "Der Anteil des Eigenkapitals an den Gesamtkosten der Immobilie in Prozent.",
    beschreibung: "Die Eigenkapitalquote gibt an, wie viel Prozent der Gesamtkosten (Kaufpreis + Kaufnebenkosten) Sie aus Eigenkapital finanzieren. Eine höhere Eigenkapitalquote verbessert in der Regel die Zinskonditionen und erhöht die Chancen auf eine Kreditvergabe. Eine Quote von mindestens 20% wird empfohlen.",
    details: [
      "Wird in Prozent angegeben",
      "Mindestens 20% wird empfohlen",
      "Höhere Quote = bessere Zinskonditionen",
      "Berechnet sich aus Eigenkapital / Gesamtkosten"
    ],
    verwandteBegriffe: ["Eigenkapital", "Gesamtkosten", "Kaufnebenkosten"]
  },
  {
    slug: "beleihungsauslauf",
    begriff: "Beleihungsauslauf",
    kategorie: "Bewertung",
    definition: "Das Verhältnis von Darlehensbetrag zu Beleihungswert in Prozent.",
    beschreibung: "Der Beleihungsauslauf gibt an, wie viel Prozent des Beleihungswerts durch das Darlehen finanziert werden. Ein niedrigerer Beleihungsauslauf bedeutet mehr Sicherheit für die Bank und kann zu besseren Zinskonditionen führen. Üblich sind Beleihungsausläufe von 60-80%.",
    details: [
      "Wird in Prozent angegeben",
      "Berechnet sich aus Darlehen / Beleihungswert",
      "Niedrigerer Auslauf = bessere Konditionen",
      "Üblich sind 60-80%"
    ],
    verwandteBegriffe: ["Beleihungswert", "Darlehensbetrag", "Zinskonditionen"]
  },
  {
    slug: "verkehrswert",
    begriff: "Verkehrswert",
    kategorie: "Bewertung",
    definition: "Der Wert einer Immobilie, der im normalen Geschäftsverkehr erzielt werden kann.",
    beschreibung: "Der Verkehrswert ist der Wert einer Immobilie, der im normalen Geschäftsverkehr zu erzielen wäre. Er wird durch einen Gutachter ermittelt und liegt meist über dem Beleihungswert. Der Verkehrswert dient als Orientierung für den Kaufpreis und die Finanzierung.",
    details: [
      "Wird durch Gutachter ermittelt",
      "Liegt meist über dem Beleihungswert",
      "Dient als Orientierung für Kaufpreis",
      "Berücksichtigt Marktlage und Objektzustand"
    ],
    verwandteBegriffe: ["Beleihungswert", "Gutachter", "Kaufpreis"]
  },
  {
    slug: "hypothek",
    begriff: "Hypothek",
    kategorie: "Sicherheit",
    definition: "Ein Grundpfandrecht, das an eine bestimmte Forderung gebunden ist.",
    beschreibung: "Eine Hypothek ist ein Grundpfandrecht, das an eine bestimmte Forderung gebunden ist. Im Gegensatz zur Grundschuld erlischt die Hypothek automatisch, wenn die Forderung getilgt ist. Heute wird meist die Grundschuld verwendet, da sie flexibler ist.",
    details: [
      "Ist an bestimmte Forderung gebunden",
      "Erlischt bei Tilgung automatisch",
      "Wird heute seltener verwendet",
      "Grundschuld ist flexibler"
    ],
    verwandteBegriffe: ["Grundschuld", "Grundpfandrecht", "Grundbuch"]
  },
  {
    slug: "grundbuch",
    begriff: "Grundbuch",
    kategorie: "Sicherheit",
    definition: "Das amtliche Verzeichnis aller Grundstücke mit ihren Eigentumsverhältnissen und Belastungen.",
    beschreibung: "Das Grundbuch ist das amtliche Verzeichnis aller Grundstücke. Es enthält Informationen über Eigentumsverhältnisse, Grundpfandrechte (Hypotheken, Grundschulden) und andere Belastungen. Jede Immobilie hat ein eigenes Grundbuchblatt, das beim Grundbuchamt geführt wird.",
    details: [
      "Amtliches Verzeichnis aller Grundstücke",
      "Enthält Eigentumsverhältnisse und Belastungen",
      "Wird beim Grundbuchamt geführt",
      "Jede Immobilie hat eigenes Grundbuchblatt"
    ],
    verwandteBegriffe: ["Grundschuld", "Hypothek", "Grundpfandrecht"]
  },
  {
    slug: "disagio",
    begriff: "Disagio",
    kategorie: "Zinsen",
    definition: "Ein Abschlag vom Darlehensbetrag, der bei Auszahlung einbehalten wird.",
    beschreibung: "Ein Disagio ist ein Abschlag vom Darlehensbetrag, der bei Auszahlung einbehalten wird. Es reduziert die tatsächlich ausgezahlte Summe und erhöht damit den effektiven Zinssatz. Ein Disagio kann vereinbart werden, um den Nominalzins niedriger zu halten.",
    details: [
      "Wird bei Auszahlung einbehalten",
      "Reduziert ausgezahlte Summe",
      "Erhöht effektiven Zinssatz",
      "Kann Nominalzins senken"
    ],
    verwandteBegriffe: ["Nominalzins", "Effektiver Jahreszins", "Darlehensbetrag"]
  },
  {
    slug: "bearbeitungsgebuehr",
    begriff: "Bearbeitungsgebühr",
    kategorie: "Zinsen",
    definition: "Eine einmalige Gebühr für die Bearbeitung des Kreditantrags.",
    beschreibung: "Die Bearbeitungsgebühr ist eine einmalige Gebühr, die für die Bearbeitung des Kreditantrags erhoben wird. Sie wird meist als Prozentsatz des Darlehensbetrags berechnet und erhöht den effektiven Jahreszins. Viele Banken verzichten heute auf Bearbeitungsgebühren.",
    details: [
      "Einmalige Gebühr für Kreditbearbeitung",
      "Wird als Prozentsatz berechnet",
      "Erhöht effektiven Jahreszins",
      "Viele Banken verzichten darauf"
    ],
    verwandteBegriffe: ["Effektiver Jahreszins", "Darlehensbetrag", "Kreditantrag"]
  },
  {
    slug: "umfinanzierung",
    begriff: "Umfinanzierung",
    kategorie: "Finanzierung",
    definition: "Die Übertragung eines bestehenden Darlehens zu einer anderen Bank mit besseren Konditionen.",
    beschreibung: "Eine Umfinanzierung ist die Übertragung eines bestehenden Darlehens zu einer anderen Bank mit besseren Konditionen. Sie kann sinnvoll sein, wenn die Zinsen gesunken sind oder bessere Angebote verfügbar sind. Dabei kann eine Vorfälligkeitsentschädigung anfallen.",
    details: [
      "Übertragung zu anderer Bank",
      "Kann bessere Konditionen bringen",
      "Vorfälligkeitsentschädigung möglich",
      "Sollte gut kalkuliert werden"
    ],
    verwandteBegriffe: ["Vorfälligkeitsentschädigung", "Anschlussfinanzierung", "Zinskonditionen"]
  },
  {
    slug: "variabler-zins",
    begriff: "Variabler Zins",
    kategorie: "Zinsen",
    definition: "Ein Zinssatz, der sich während der Laufzeit ändern kann.",
    beschreibung: "Ein variabler Zins ist ein Zinssatz, der sich während der Laufzeit des Darlehens ändern kann. Er orientiert sich an Referenzzinssätzen wie dem EURIBOR. Variable Zinsen können steigen oder fallen und bieten weniger Planungssicherheit als ein Festzins.",
    details: [
      "Kann sich während Laufzeit ändern",
      "Orientiert sich an Referenzzinssätzen",
      "Weniger Planungssicherheit",
      "Kann steigen oder fallen"
    ],
    verwandteBegriffe: ["Festzins", "EURIBOR", "Zinsbindungsfrist"]
  },
  {
    slug: "euribor",
    begriff: "EURIBOR",
    kategorie: "Zinsen",
    definition: "Der Euro Interbank Offered Rate - ein Referenzzinssatz für variable Zinsen.",
    beschreibung: "Der EURIBOR (Euro Interbank Offered Rate) ist ein Referenzzinssatz, der angibt, zu welchem Zinssatz sich Banken untereinander Geld leihen. Er dient als Basis für variable Zinsen und wird täglich veröffentlicht. Es gibt verschiedene Laufzeiten (z.B. 3 Monate, 6 Monate, 12 Monate).",
    details: [
      "Referenzzinssatz für Banken",
      "Dient als Basis für variable Zinsen",
      "Wird täglich veröffentlicht",
      "Verschiedene Laufzeiten verfügbar"
    ],
    verwandteBegriffe: ["Variabler Zins", "Referenzzinssatz", "Zinsbindungsfrist"]
  },
  {
    slug: "renovierung",
    begriff: "Renovierung",
    kategorie: "Bau & Planung",
    definition: "Maßnahmen zur Wiederherstellung oder Verbesserung des optischen und funktionalen Zustands einer Immobilie.",
    beschreibung: "Unter Renovierung versteht man Maßnahmen, die den Wohnwert und das Erscheinungsbild einer Immobilie verbessern, ohne in die Bausubstanz einzugreifen. Dazu zählen Tapezieren, Streichen, Bodenbeläge erneuern oder Bäder modernisieren. Im Gegensatz zur Sanierung betrifft eine Renovierung keine schwerwiegenden Mängel an der Bausubstanz.",
    verwandteBegriffe: ["Erhaltungsaufwand", "Baukosten", "Wohnfläche"]
  },
  {
    slug: "bausparen",
    begriff: "Bausparen",
    kategorie: "Finanzierung",
    definition: "Ein Spar- und Finanzierungsmodell, bei dem zunächst Kapital angespart und anschließend ein zinsgünstiges Darlehen gewährt wird.",
    beschreibung: "Beim Bausparen schließen Sie einen Bausparvertrag mit einer Bausparkasse ab. In der Sparphase zahlen Sie regelmäßig Beiträge ein, bis ein bestimmtes Guthaben (meist 40–50 % der Bausparsumme) erreicht ist. Nach Zuteilung erhalten Sie ein zinsgünstiges Bauspardarlehen über den Restbetrag. Bausparen wird staatlich durch Wohnungsbauprämie und vermögenswirksame Leistungen gefördert.",
    verwandteBegriffe: ["Bausparsumme", "Wohnungsbauprämie", "Vermögenswirksame Leistungen", "Sparphase", "Zuteilung"]
  },
  {
    slug: "preisangabenverordnung",
    begriff: "Preisangabenverordnung",
    kategorie: "Recht",
    definition: "Verordnung, die Kreditgeber verpflichtet, den effektiven Jahreszins und weitere Kreditkonditionen transparent auszuweisen.",
    beschreibung: "Die Preisangabenverordnung (PAngV) regelt, wie Preise und Kreditkonditionen gegenüber Verbrauchern angegeben werden müssen. Für Baufinanzierungen ist besonders relevant, dass der effektive Jahreszins nach einer einheitlichen Berechnungsmethode ausgewiesen werden muss, um Vergleichbarkeit zwischen verschiedenen Angeboten herzustellen.",
    verwandteBegriffe: ["Effektiver Jahreszins", "Kreditkosten", "Vorvertragliche Informationen"]
  },
  {
    slug: "baurecht",
    begriff: "Baurecht",
    kategorie: "Recht",
    definition: "Die Gesamtheit der Rechtsvorschriften, die das Bauen auf Grundstücken regeln.",
    beschreibung: "Das Baurecht umfasst das öffentliche Baurecht (Bauplanungsrecht und Bauordnungsrecht) sowie das private Baurecht (Werkvertragsrecht). Es regelt, ob, wo und wie gebaut werden darf. Das Bauplanungsrecht ist bundeseinheitlich im BauGB geregelt, während das Bauordnungsrecht Ländersache ist.",
    verwandteBegriffe: ["Bauplanungsrecht", "Bauordnung", "Baugenehmigung", "BauNVO"]
  },
  {
    slug: "bauplanung",
    begriff: "Bauplanung",
    kategorie: "Bau & Planung",
    definition: "Der gesamte Planungsprozess eines Bauvorhabens von der Idee bis zur Ausführungsplanung.",
    beschreibung: "Die Bauplanung umfasst alle Schritte von der Grundlagenermittlung über den Entwurf bis hin zur Ausführungsplanung. Sie beinhaltet architektonische, statische und technische Planung und ist Voraussetzung für die Baugenehmigung. Die Leistungsphasen sind in der HOAI (Honorarordnung für Architekten und Ingenieure) geregelt.",
    verwandteBegriffe: ["Baugenehmigung", "Bauantrag", "Baukosten", "Baubeschreibung"]
  },
  {
    slug: "bauerwartungsland",
    begriff: "Bauerwartungsland",
    kategorie: "Grundstück",
    definition: "Land, das noch nicht als Bauland ausgewiesen ist, bei dem aber eine Bebauung in absehbarer Zeit erwartet wird.",
    beschreibung: "Bauerwartungsland sind Flächen, die im Flächennutzungsplan als künftiges Bauland vorgesehen sind, für die aber noch kein Bebauungsplan aufgestellt wurde. Der Grundstückspreis liegt unter dem von Bauland, da die tatsächliche Bebaubarkeit noch nicht gesichert ist. Die Umwidmung zu Bauland kann Jahre dauern.",
    verwandteBegriffe: ["Bebauungsplan", "Flächennutzungsplan", "Grundstück", "Erschließung"]
  },
  {
    slug: "sittenwidrigkeit",
    begriff: "Sittenwidrigkeit",
    kategorie: "Recht",
    definition: "Ein Rechtsgeschäft, das gegen das Anstandsgefühl aller billig und gerecht Denkenden verstößt und daher nichtig ist.",
    beschreibung: "Ein Kreditvertrag kann sittenwidrig sein, wenn ein auffälliges Missverhältnis zwischen Leistung und Gegenleistung besteht, z. B. bei Wucherzinsen. Nach § 138 BGB sind sittenwidrige Rechtsgeschäfte nichtig. Bei Baufinanzierungen kann Sittenwidrigkeit vorliegen, wenn die wirtschaftliche Unerfahrenheit des Kreditnehmers ausgenutzt wird.",
    verwandteBegriffe: ["Kreditvertrag", "Kreditbedingungen", "Zinssatz"]
  },
  {
    slug: "aussenanlagen",
    begriff: "Außenanlagen",
    kategorie: "Bau & Planung",
    definition: "Alle baulichen Anlagen und Einrichtungen außerhalb des Gebäudes auf dem Grundstück.",
    beschreibung: "Zu den Außenanlagen zählen Zufahrten, Wege, Terrassen, Zäune, Gartenmauern, Bepflanzungen, Drainage und Außenbeleuchtung. Die Kosten für Außenanlagen werden oft bei der Baufinanzierung unterschätzt, betragen aber typischerweise 5–15 % der Gesamtbaukosten und müssen im Finanzierungsplan berücksichtigt werden.",
    verwandteBegriffe: ["Baukosten", "Baunebenkosten", "Erschließungskosten"]
  },
  {
    slug: "vermoegensbildungsgesetz",
    begriff: "Vermögensbildungsgesetz",
    kategorie: "Förderung",
    definition: "Gesetz, das die staatliche Förderung der Vermögensbildung von Arbeitnehmern durch vermögenswirksame Leistungen regelt.",
    beschreibung: "Das Fünfte Vermögensbildungsgesetz (5. VermBG) bildet die gesetzliche Grundlage für vermögenswirksame Leistungen. Es regelt, welche Anlageformen förderfähig sind, wie z. B. Bausparverträge, und unter welchen Voraussetzungen Arbeitnehmer die Arbeitnehmersparzulage erhalten.",
    verwandteBegriffe: ["Vermögenswirksame Leistungen", "Bausparen", "Wohnungsbauprämie"]
  },
  {
    slug: "werkvertragsrecht",
    begriff: "Werkvertragsrecht",
    kategorie: "Recht",
    definition: "Die gesetzlichen Regelungen für Verträge über die Herstellung oder Veränderung eines Werks, insbesondere Bauwerke.",
    beschreibung: "Das Werkvertragsrecht (§§ 631 ff. BGB) regelt die Rechte und Pflichten bei Bau- und Handwerkerverträgen. Es umfasst Gewährleistungsansprüche, Abnahme, Vergütung und Mängelrechte. Seit 2018 gibt es mit dem Bauvertragsrecht (§§ 650a ff. BGB) spezielle Regelungen für Bauverträge und Verbraucherbauverträge.",
    verwandteBegriffe: ["Baumängel", "Baukosten", "Bauträger"]
  },
  {
    slug: "erlaeuterungspflicht",
    begriff: "Erläuterungspflicht",
    kategorie: "Recht",
    definition: "Die Pflicht des Kreditgebers, dem Darlehensnehmer die wesentlichen Vertragsbedingungen verständlich zu erklären.",
    beschreibung: "Die Erläuterungspflicht verpflichtet Kreditgeber, Darlehensnehmer vor Vertragsabschluss über die wesentlichen Kreditbedingungen aufzuklären. Dazu gehören Zinssatz, Tilgung, Gesamtkosten und Risiken. Diese Pflicht ergibt sich aus den Vorschriften zum Verbraucherdarlehensrecht und dient dem Schutz des Kreditnehmers.",
    verwandteBegriffe: ["Vorvertragliche Informationen", "Kreditvertrag", "Kreditbedingungen"]
  },
  {
    slug: "globalbelastung",
    begriff: "Globalbelastung",
    kategorie: "Sicherheit",
    definition: "Eine Grundschuld oder Hypothek, die auf mehreren Grundstücken gleichzeitig lastet.",
    beschreibung: "Eine Globalbelastung liegt vor, wenn ein Grundpfandrecht auf mehreren Grundstücken eingetragen wird, um eine Forderung abzusichern. Dies ist häufig bei Bauträgerprojekten der Fall, wenn das gesamte Baugrundstück vor der Aufteilung in Wohneinheiten belastet ist. Käufer müssen darauf achten, dass ihre Einheit lastenfrei übertragen wird.",
    verwandteBegriffe: ["Grundschuld", "Grundbuch", "Bauträger", "Teilungserklärung"]
  },
  {
    slug: "tilgungsparadoxon",
    begriff: "Tilgungsparadoxon",
    kategorie: "Tilgung",
    definition: "Der Effekt, dass bei niedrigen Zinsen die Restschuld am Ende der Zinsbindung höher ausfällt als bei hohen Zinsen mit gleicher Anfangstilgung.",
    beschreibung: "Das Tilgungsparadoxon beschreibt das Phänomen, dass bei niedrigen Zinsen und gleicher Annuität der Tilgungsfortschritt langsamer verläuft als bei hohen Zinsen. Bei niedrigen Zinsen entfällt zwar ein kleinerer Teil der Rate auf Zinsen, aber die ersparte Tilgung nimmt langsamer zu. Daher ist es bei niedrigen Zinsen ratsam, eine höhere anfängliche Tilgung zu wählen.",
    verwandteBegriffe: ["Tilgung", "Tilgungssatz", "Annuität", "Restschuld"]
  },
  {
    slug: "baurisiken",
    begriff: "Baurisiken",
    kategorie: "Bau & Planung",
    definition: "Risiken, die bei einem Bauvorhaben auftreten können, wie Kostensteigerungen, Bauverzögerungen oder Mängel.",
    beschreibung: "Baurisiken umfassen alle Gefahren, die ein Bauvorhaben beeinträchtigen können. Dazu gehören Kostensteigerungen durch unvorhergesehene Ausgaben, Bauverzögerungen, Insolvenz des Bauträgers, Baumängel und Altlasten im Boden. Eine sorgfältige Planung und ausreichende finanzielle Reserven helfen, Baurisiken zu minimieren.",
    verwandteBegriffe: ["Baumängel", "Baukosten", "Baunebenkosten", "Überraschungskosten"]
  },
  {
    slug: "grundsteuer",
    begriff: "Grundsteuer",
    kategorie: "Steuern & Kosten",
    definition: "Eine laufende Steuer auf den Besitz von Grundstücken und Gebäuden, die an die Gemeinde gezahlt wird.",
    beschreibung: "Die Grundsteuer ist eine jährlich anfallende Steuer, die jeder Grundstückseigentümer an die Gemeinde entrichten muss. Sie berechnet sich aus dem Grundsteuerwert, der Steuermesszahl und dem Hebesatz der jeweiligen Gemeinde. Seit der Reform 2025 gelten neue Berechnungsgrundlagen. Die Grundsteuer zählt zu den laufenden Bewirtschaftungskosten.",
    verwandteBegriffe: ["Einheitswert", "Bewirtschaftungskosten", "Grundstück"]
  },
  {
    slug: "vermoegenswirksame-leistungen",
    begriff: "Vermögenswirksame Leistungen",
    kategorie: "Förderung",
    definition: "Vom Arbeitgeber gezahlte Leistungen, die in bestimmte Sparformen wie Bausparverträge angelegt werden können.",
    beschreibung: "Vermögenswirksame Leistungen (VL) sind zusätzliche Zahlungen des Arbeitgebers von bis zu 40 Euro monatlich, die in Sparverträge wie Bausparverträge oder Fondssparpläne fließen. Unter bestimmten Einkommensgrenzen wird die Anlage zusätzlich durch die Arbeitnehmersparzulage staatlich gefördert.",
    verwandteBegriffe: ["Vermögensbildungsgesetz", "Bausparen", "Wohnungsbauprämie"]
  },
  {
    slug: "fertighaus",
    begriff: "Fertighaus",
    kategorie: "Bau & Planung",
    definition: "Ein Haus, dessen Bauteile industriell vorgefertigt und auf der Baustelle montiert werden.",
    beschreibung: "Ein Fertighaus wird aus industriell vorgefertigten Bauteilen auf der Baustelle zusammengesetzt. Vorteile sind die kurze Bauzeit, kalkulierbare Kosten und eine gleichbleibende Qualität. Fertighäuser gibt es in verschiedenen Ausbaustufen – von schlüsselfertig bis Ausbauhaus. Die Finanzierung unterscheidet sich kaum von einem Massivhaus.",
    verwandteBegriffe: ["Baukosten", "Baubeschreibung", "Baunebenkosten"]
  },
  {
    slug: "rendite",
    begriff: "Rendite",
    kategorie: "Bewertung",
    definition: "Der Ertrag einer Kapitalanlage, ausgedrückt als prozentualer Anteil des eingesetzten Kapitals pro Jahr.",
    beschreibung: "Die Rendite gibt an, wie viel Gewinn eine Immobilienanlage im Verhältnis zum eingesetzten Kapital abwirft. Bei vermieteten Immobilien unterscheidet man zwischen Bruttorendite (Mieteinnahmen/Kaufpreis) und Nettorendite (nach Abzug aller Kosten). Die Rendite ist ein zentrales Kriterium bei der Bewertung von Kapitalanlage-Immobilien.",
    verwandteBegriffe: ["Ertragswert", "Immobilienfonds", "Bewirtschaftungskosten"]
  },
  {
    slug: "unbedenklichkeitsbescheinigung",
    begriff: "Unbedenklichkeitsbescheinigung",
    kategorie: "Steuern & Kosten",
    definition: "Eine Bescheinigung des Finanzamts, dass die Grunderwerbsteuer bezahlt wurde, Voraussetzung für die Eigentumsumschreibung im Grundbuch.",
    beschreibung: "Die Unbedenklichkeitsbescheinigung wird vom Finanzamt ausgestellt, nachdem die Grunderwerbsteuer vollständig entrichtet wurde. Ohne diese Bescheinigung kann das Grundbuchamt die Eigentumsumschreibung nicht vornehmen. Sie ist damit ein wesentlicher Schritt im Kaufprozess einer Immobilie.",
    verwandteBegriffe: ["Grunderwerbsteuer", "Grundbuch", "Kaufvertrag"]
  },
  {
    slug: "werbungskosten",
    begriff: "Werbungskosten",
    kategorie: "Steuern & Kosten",
    definition: "Aufwendungen im Zusammenhang mit vermieteten Immobilien, die steuerlich geltend gemacht werden können.",
    beschreibung: "Werbungskosten sind Ausgaben, die bei der Erzielung von Einkünften aus Vermietung und Verpachtung anfallen. Dazu zählen Schuldzinsen, Abschreibungen, Instandhaltungskosten, Verwaltungskosten und Fahrtkosten. Diese können in der Steuererklärung von den Mieteinnahmen abgezogen werden und mindern die Steuerlast.",
    verwandteBegriffe: ["Schuldzinsen", "Abschreibung", "Schuldzinsenabzug"]
  },
  {
    slug: "niessbrauch",
    begriff: "Nießbrauch",
    kategorie: "Recht",
    definition: "Das Recht, eine fremde Sache zu nutzen und die Erträge daraus zu ziehen, z. B. Mieteinnahmen einer Immobilie.",
    beschreibung: "Der Nießbrauch ist ein im Grundbuch eingetragenes Nutzungsrecht, das dem Berechtigten erlaubt, eine Immobilie zu bewohnen oder die Erträge (z. B. Miete) einzunehmen, obwohl er nicht Eigentümer ist. Der Nießbrauch wird häufig bei Schenkungen oder Erbschaften eingesetzt, um die Nutzung im Alter zu sichern, und mindert den Verkehrswert der Immobilie.",
    verwandteBegriffe: ["Wohnrecht", "Grundbuch", "Grunddienstbarkeiten"]
  },
  {
    slug: "zwangsversteigerung",
    begriff: "Zwangsversteigerung",
    kategorie: "Recht",
    definition: "Die gerichtliche Verwertung einer Immobilie zur Befriedigung von Gläubigerforderungen.",
    beschreibung: "Die Zwangsversteigerung ist ein gesetzlich geregeltes Verfahren, bei dem eine Immobilie öffentlich durch das Amtsgericht versteigert wird, weil der Eigentümer seine Schulden nicht mehr bedienen kann. Für Käufer können Zwangsversteigerungen Chancen auf günstige Immobilien bieten, bergen aber auch Risiken, da eine Besichtigung oft nicht möglich ist.",
    verwandteBegriffe: ["Zwangsvollstreckung", "Grundschuld", "Verkehrswert"]
  },
  {
    slug: "wohnungsbaupraemie",
    begriff: "Wohnungsbauprämie",
    kategorie: "Förderung",
    definition: "Eine staatliche Prämie auf Einzahlungen in Bausparverträge für Bezieher niedriger und mittlerer Einkommen.",
    beschreibung: "Die Wohnungsbauprämie ist eine staatliche Förderung für Bausparer. Wer die Einkommensgrenzen einhält, erhält jährlich bis zu 10 % auf Einzahlungen in den Bausparvertrag (maximal 70 € pro Person, 140 € für Verheiratete). Das Bausparguthaben muss für wohnwirtschaftliche Zwecke verwendet werden.",
    verwandteBegriffe: ["Bausparen", "Vermögenswirksame Leistungen", "wohnwirtschaftliche Zwecke"]
  },
  {
    slug: "baunvo",
    begriff: "BauNVO",
    kategorie: "Recht",
    definition: "Die Baunutzungsverordnung regelt die Art und das Maß der baulichen Nutzung von Grundstücken.",
    beschreibung: "Die Baunutzungsverordnung (BauNVO) ergänzt das Bauplanungsrecht und definiert, welche Nutzungsarten in Baugebieten zulässig sind (z. B. reines Wohngebiet, Mischgebiet). Sie legt auch das Maß der baulichen Nutzung fest, darunter die Grundflächenzahl (GRZ) und die Geschossflächenzahl (GFZ).",
    verwandteBegriffe: ["Bebauungsplan", "Grundflächenzahl", "Baurecht", "Bauplanungsrecht"]
  },
  {
    slug: "erbbaurecht",
    begriff: "Erbbaurecht",
    kategorie: "Grundstück",
    definition: "Das Recht, auf einem fremden Grundstück ein Bauwerk zu errichten und zu nutzen, gegen Zahlung eines Erbbauzinses.",
    beschreibung: "Das Erbbaurecht ermöglicht den Bau und die Nutzung eines Gebäudes auf einem fremden Grundstück für einen Zeitraum von üblicherweise 60–99 Jahren. Dafür zahlt der Erbbauberechtigte einen jährlichen Erbbauzins an den Grundstückseigentümer. Es ist eine Alternative zum Grundstückskauf und wird häufig von Kommunen und Kirchen vergeben.",
    verwandteBegriffe: ["Erbbauzins", "Grundstück", "Grundbuch"]
  },
  {
    slug: "baugenehmigung",
    begriff: "Baugenehmigung",
    kategorie: "Recht",
    definition: "Die behördliche Genehmigung zur Errichtung, Änderung oder Nutzungsänderung eines Gebäudes.",
    beschreibung: "Die Baugenehmigung wird von der zuständigen Bauaufsichtsbehörde erteilt und bestätigt, dass ein Bauvorhaben den öffentlich-rechtlichen Vorschriften entspricht. Ohne Baugenehmigung darf in der Regel nicht mit dem Bau begonnen werden. Der Antrag erfolgt über den Bauantrag und umfasst Bauzeichnungen, Baubeschreibung und statische Berechnungen.",
    verwandteBegriffe: ["Bauantrag", "Bauordnung", "Bebauungsplan", "Bauanzeige"]
  },
  {
    slug: "abschreibung",
    begriff: "Abschreibung",
    kategorie: "Steuern & Kosten",
    definition: "Die steuerliche Absetzung der Anschaffungs- oder Herstellungskosten eines Gebäudes über dessen Nutzungsdauer.",
    beschreibung: "Die Abschreibung (AfA – Absetzung für Abnutzung) ermöglicht es Eigentümern vermieteter Immobilien, die Anschaffungs- oder Herstellungskosten des Gebäudes (nicht des Grundstücks) steuerlich über die Nutzungsdauer zu verteilen. Bei Wohngebäuden beträgt der Abschreibungssatz in der Regel 2 % pro Jahr bei Neubauten ab 2023 (3 %).",
    verwandteBegriffe: ["Lineare Abschreibung", "Werbungskosten", "Herstellungskosten"]
  },
  {
    slug: "teilungserklaerung",
    begriff: "Teilungserklärung",
    kategorie: "Recht",
    definition: "Die notarielle Urkunde, die ein Grundstück in Sondereigentum und Gemeinschaftseigentum aufteilt.",
    beschreibung: "Die Teilungserklärung ist die notarielle Urkunde, durch die ein Gebäude in einzelne Wohnungs- und Teileigentumseinheiten aufgeteilt wird. Sie legt fest, welche Gebäudeteile Sondereigentum und welche Gemeinschaftseigentum sind, und enthält die Gemeinschaftsordnung mit Regelungen für das Zusammenleben der Eigentümer.",
    verwandteBegriffe: ["Sondereigentum", "Gemeinschaftseigentum", "Wohnungseigentumsgesetz", "Aufteilungsplan"]
  },
  {
    slug: "bebauungsplan",
    begriff: "Bebauungsplan",
    kategorie: "Recht",
    definition: "Ein verbindlicher Bauleitplan, der Art und Maß der baulichen Nutzung für ein bestimmtes Gebiet festlegt.",
    beschreibung: "Der Bebauungsplan (B-Plan) ist ein verbindlicher Bauleitplan der Gemeinde. Er regelt für ein bestimmtes Gebiet, wie Grundstücke bebaut werden dürfen – darunter die zulässige Gebäudehöhe, Dachform, Grundflächenzahl und Geschossflächenzahl. Er wird aus dem Flächennutzungsplan entwickelt und ist Grundlage für die Erteilung von Baugenehmigungen.",
    verwandteBegriffe: ["Flächennutzungsplan", "BauNVO", "Baugenehmigung", "Grundflächenzahl"]
  },
  {
    slug: "immobilie",
    begriff: "Immobilie",
    kategorie: "Grundstück",
    definition: "Ein unbewegliches Sachgut, das ein Grundstück und die darauf befindlichen Gebäude umfasst.",
    beschreibung: "Der Begriff Immobilie leitet sich vom lateinischen ‚immobilis' (unbeweglich) ab und umfasst Grundstücke sowie darauf errichtete Gebäude. Immobilien dienen als Wohn- oder Gewerberaum und sind gleichzeitig eine bedeutende Kapitalanlage. Bei der Finanzierung einer Immobilie dient diese in der Regel als Sicherheit für den Kredit.",
    verwandteBegriffe: ["Grundstück", "Verkehrswert", "Grundbuch"]
  },
  {
    slug: "vorkaufsrecht",
    begriff: "Vorkaufsrecht",
    kategorie: "Recht",
    definition: "Das Recht, eine Immobilie zu den gleichen Bedingungen zu erwerben, die mit einem Dritten vereinbart wurden.",
    beschreibung: "Das Vorkaufsrecht gibt dem Berechtigten die Möglichkeit, eine Immobilie vorrangig zu kaufen, wenn der Eigentümer sie an einen Dritten veräußern möchte. Es gibt gesetzliche Vorkaufsrechte (z. B. für Gemeinden oder Mieter) und vertragliche Vorkaufsrechte. Das Vorkaufsrecht kann im Grundbuch eingetragen werden.",
    verwandteBegriffe: ["Kaufvertrag", "Grundbuch", "Immobilie"]
  },
  {
    slug: "grundstueck",
    begriff: "Grundstück",
    kategorie: "Grundstück",
    definition: "Ein abgegrenzter Teil der Erdoberfläche, der im Grundbuch als eigene Einheit geführt wird.",
    beschreibung: "Ein Grundstück ist ein räumlich abgegrenzter Teil der Erdoberfläche, der im Grundbuch unter einer eigenen Nummer (Flurstück) verzeichnet ist. Es kann bebaut oder unbebaut sein. Der Wert eines Grundstücks hängt von Lage, Größe, Zuschnitt, Erschließungsgrad und den Festsetzungen des Bebauungsplans ab.",
    verwandteBegriffe: ["Flurstück", "Grundbuch", "Bebauungsplan", "Erschließung"]
  },
  {
    slug: "agio",
    begriff: "Agio",
    kategorie: "Zinsen",
    definition: "Ein Aufschlag auf den Nennwert eines Darlehens oder Wertpapiers, das Gegenteil des Disagio.",
    beschreibung: "Das Agio (auch Aufgeld) ist ein Aufschlag, der über den Nennwert hinaus gezahlt wird. Bei Immobilienfonds bezeichnet es die Vertriebsgebühr, die auf den Anteilswert aufgeschlagen wird. Das Agio ist das Gegenstück zum Disagio und erhöht die Gesamtkosten einer Anlage oder Finanzierung.",
    verwandteBegriffe: ["Disagio", "Immobilienfonds", "Kreditkosten"]
  },
  {
    slug: "rate",
    begriff: "Rate",
    kategorie: "Tilgung",
    definition: "Der regelmäßig zu zahlende Betrag zur Rückzahlung eines Darlehens, bestehend aus Zins- und Tilgungsanteil.",
    beschreibung: "Die Rate ist der Betrag, den Sie monatlich an die Bank zur Bedienung Ihres Darlehens zahlen. Bei einem Annuitätendarlehen setzt sich die Rate aus einem Zins- und einem Tilgungsanteil zusammen und bleibt während der Zinsbindungsfrist konstant. Die Höhe der Rate hängt von Darlehenssumme, Zinssatz und Tilgungssatz ab.",
    verwandteBegriffe: ["Annuität", "Tilgung", "Zinssatz", "Tilgungssatz"]
  },
  {
    slug: "maklerprovision",
    begriff: "Maklerprovision",
    kategorie: "Steuern & Kosten",
    definition: "Die Vergütung, die ein Immobilienmakler für die erfolgreiche Vermittlung eines Kauf- oder Mietvertrags erhält.",
    beschreibung: "Die Maklerprovision (auch Courtage) ist die Gebühr, die bei erfolgreicher Vermittlung einer Immobilie an den Makler zu zahlen ist. Seit Dezember 2020 gilt beim Kauf von Wohnimmobilien das Prinzip der Teilung: Käufer und Verkäufer tragen die Provision je zur Hälfte. Üblich sind 3–3,57 % des Kaufpreises je Seite.",
    verwandteBegriffe: ["Courtage", "Kaufnebenkosten", "Makler- und Bauträgerverordnung"]
  },
  {
    slug: "flurkarte",
    begriff: "Flurkarte",
    kategorie: "Grundstück",
    definition: "Eine amtliche Karte, die Grundstücke mit ihren Grenzen und Flurstücknummern darstellt.",
    beschreibung: "Die Flurkarte (auch Katasterkarte oder Liegenschaftskarte) ist eine amtliche Karte des Katasteramts, die die Lage und Grenzen aller Grundstücke einer Gemarkung darstellt. Sie zeigt Flurstücknummern, Gebäude und Nutzungsarten und ist ein wichtiges Dokument für Grundstücksverkäufe und Bauanträge.",
    verwandteBegriffe: ["Flurstück", "Grundstück", "Grundbuch"]
  },
  {
    slug: "umschuldung",
    begriff: "Umschuldung",
    kategorie: "Finanzierung",
    definition: "Die Ablösung eines bestehenden Kredits durch einen neuen Kredit, meist zu besseren Konditionen.",
    beschreibung: "Bei einer Umschuldung wird ein laufendes Darlehen durch ein neues ersetzt, um von besseren Zinskonditionen zu profitieren oder mehrere Darlehen zusammenzufassen. Eine Umschuldung ist insbesondere bei Ablauf der Zinsbindungsfrist sinnvoll. Während der Zinsbindung kann eine Vorfälligkeitsentschädigung anfallen.",
    verwandteBegriffe: ["Vorfälligkeitsentschädigung", "Anschlussfinanzierung", "Prolongation"]
  },
  {
    slug: "bauleiter",
    begriff: "Bauleiter",
    kategorie: "Bau & Planung",
    definition: "Die verantwortliche Person für die ordnungsgemäße Ausführung eines Bauvorhabens auf der Baustelle.",
    beschreibung: "Der Bauleiter überwacht die Ausführung der Bauarbeiten vor Ort und sorgt dafür, dass das Bauvorhaben fachgerecht, termingerecht und im Rahmen des Budgets realisiert wird. Er koordiniert die Handwerker, prüft die Einhaltung der Bauvorschriften und ist Ansprechpartner für Bauherren und Behörden.",
    verwandteBegriffe: ["Baukosten", "Baumängel", "Bauplanung"]
  },
  {
    slug: "bautraeger",
    begriff: "Bauträger",
    kategorie: "Bau & Planung",
    definition: "Ein Unternehmen, das Bauvorhaben im eigenen Namen und auf eigene Rechnung plant, durchführt und verkauft.",
    beschreibung: "Ein Bauträger erwirbt Grundstücke, errichtet darauf Gebäude und verkauft die fertigen oder noch zu errichtenden Immobilien an Käufer. Der Käufer erwirbt Grundstück und Gebäude aus einer Hand. Bauträger unterliegen der Makler- und Bauträgerverordnung (MaBV), die den Zahlungsplan und die Absicherung des Käufers regelt.",
    verwandteBegriffe: ["Makler- und Bauträgerverordnung", "Baubeschreibung", "Baukosten"]
  },
  {
    slug: "legitimation",
    begriff: "Legitimation",
    kategorie: "Finanzierung",
    definition: "Die Identitätsprüfung des Kreditnehmers bei der Beantragung eines Darlehens.",
    beschreibung: "Die Legitimation ist die Feststellung der Identität des Kreditnehmers, die bei jeder Kreditbeantragung gesetzlich vorgeschrieben ist. Sie erfolgt durch Vorlage eines gültigen Personalausweises oder Reisepasses. Bei Online-Finanzierungen kann die Legitimation per Video-Ident oder Post-Ident durchgeführt werden.",
    verwandteBegriffe: ["Kreditvertrag", "Bonität", "Kreditfähigkeit"]
  },
  {
    slug: "zinssatz",
    begriff: "Zinssatz",
    kategorie: "Zinsen",
    definition: "Der prozentuale Anteil des Darlehensbetrags, der jährlich als Entgelt für die Kapitalüberlassung zu zahlen ist.",
    beschreibung: "Der Zinssatz gibt an, wie viel Prozent des Darlehensbetrags jährlich an Zinsen zu entrichten sind. Bei Baufinanzierungen unterscheidet man zwischen Sollzinssatz (reiner Zins) und effektivem Jahreszins (inklusive aller Kosten). Der Zinssatz wird maßgeblich durch die Zinspolitik der EZB, die Kapitalmarktentwicklung und die Bonität des Kreditnehmers bestimmt.",
    verwandteBegriffe: ["Sollzinssatz", "Effektiver Jahreszins", "Nominalzins", "Festzins"]
  },
  {
    slug: "grundflaechenzahl",
    begriff: "Grundflächenzahl",
    kategorie: "Recht",
    definition: "Eine Kennzahl im Bebauungsplan, die angibt, welcher Anteil eines Grundstücks maximal überbaut werden darf.",
    beschreibung: "Die Grundflächenzahl (GRZ) legt fest, wie viel Prozent der Grundstücksfläche maximal bebaut werden dürfen. Eine GRZ von 0,4 bedeutet beispielsweise, dass auf einem 1.000 m² großen Grundstück maximal 400 m² überbaut werden dürfen. Die GRZ wird im Bebauungsplan festgesetzt und ist in der BauNVO geregelt.",
    verwandteBegriffe: ["Bebauungsplan", "BauNVO", "Grundstück"]
  },
  {
    slug: "konditionen",
    begriff: "Konditionen",
    kategorie: "Finanzierung",
    definition: "Die Gesamtheit der vertraglichen Bedingungen eines Darlehens wie Zinssatz, Tilgung, Laufzeit und Gebühren.",
    beschreibung: "Die Konditionen eines Baufinanzierungsdarlehens umfassen alle wesentlichen Vertragsmerkmale: Sollzinssatz, effektiver Jahreszins, Zinsbindungsfrist, Tilgungssatz, Sondertilgungsmöglichkeiten und weitere Bedingungen. Ein sorgfältiger Konditionenvergleich verschiedener Anbieter kann erhebliche Zinsersparnisse über die Laufzeit bringen.",
    verwandteBegriffe: ["Zinssatz", "Tilgungssatz", "Kreditbedingungen", "Konditionenanpassung"]
  },
  {
    slug: "tranche",
    begriff: "Tranche",
    kategorie: "Finanzierung",
    definition: "Ein Teilbetrag eines Darlehens, der gesondert ausgezahlt oder zu eigenen Konditionen vereinbart wird.",
    beschreibung: "Eine Tranche ist ein Teilbetrag einer Gesamtfinanzierung, der eigenständige Konditionen wie Zinssatz und Zinsbindungsfrist haben kann. Die Aufteilung in Tranchen ermöglicht eine flexible Gestaltung der Baufinanzierung, z. B. durch Kombination unterschiedlicher Zinsbindungsfristen oder die schrittweise Auszahlung während der Bauphase.",
    verwandteBegriffe: ["Zinsbindungsfrist", "Konditionen", "Finanzierungsplan"]
  },
  {
    slug: "wegerecht",
    begriff: "Wegerecht",
    kategorie: "Recht",
    definition: "Das Recht, ein fremdes Grundstück zu überqueren, um das eigene Grundstück zu erreichen.",
    beschreibung: "Das Wegerecht (eine Form der Grunddienstbarkeit) sichert dem Eigentümer eines Grundstücks das Recht zu, ein anderes Grundstück zum Zweck des Zugangs zu überqueren. Es wird im Grundbuch eingetragen und kann den Wert des belasteten Grundstücks mindern bzw. des begünstigten Grundstücks sichern.",
    verwandteBegriffe: ["Grunddienstbarkeiten", "Grundbuch", "Grundstück"]
  },
  {
    slug: "baunebenkosten",
    begriff: "Baunebenkosten",
    kategorie: "Steuern & Kosten",
    definition: "Alle zusätzlichen Kosten, die neben den reinen Baukosten bei einem Neubau anfallen.",
    beschreibung: "Baunebenkosten umfassen alle Kosten, die neben den eigentlichen Baukosten entstehen: Architekten- und Ingenieurshonorare, Baugenehmigungsgebühren, Vermessungskosten, Erschließungskosten, Versicherungen, Gutachten und Prüfstatik. Sie betragen typischerweise 15–20 % der reinen Baukosten und müssen im Finanzierungsplan berücksichtigt werden.",
    verwandteBegriffe: ["Baukosten", "Erschließungskosten", "Finanzierungsplan"]
  },
  {
    slug: "immobilienfonds",
    begriff: "Immobilienfonds",
    kategorie: "Finanzierung",
    definition: "Ein Investmentfonds, der Kapital von Anlegern bündelt und in Immobilien investiert.",
    beschreibung: "Immobilienfonds sammeln Geld von vielen Anlegern und investieren es in Immobilien. Man unterscheidet offene Immobilienfonds (börsentäglich handelbar, breite Streuung) und geschlossene Immobilienfonds (feste Laufzeit, wenige Objekte, unternehmerische Beteiligung). Immobilienfonds bieten eine Möglichkeit, indirekt in Immobilien zu investieren.",
    verwandteBegriffe: ["Offene Immobilienfonds", "Geschlossene Immobilienfonds", "Rendite"]
  },
  {
    slug: "wohnungseigentumsgesetz",
    begriff: "Wohnungseigentumsgesetz",
    kategorie: "Recht",
    definition: "Das Gesetz, das die Begründung und Verwaltung von Wohnungseigentum regelt.",
    beschreibung: "Das Wohnungseigentumsgesetz (WEG) regelt das Zusammenleben in Eigentümergemeinschaften. Es definiert Sondereigentum und Gemeinschaftseigentum, die Rechte und Pflichten der Eigentümer, die Verwaltung des gemeinschaftlichen Eigentums und die Beschlussfassung in Eigentümerversammlungen. Die WEG-Reform 2020 hat die Verwaltung modernisiert.",
    verwandteBegriffe: ["Sondereigentum", "Gemeinschaftseigentum", "Teilungserklärung", "Wohnungseigentum"]
  },
  {
    slug: "lineare-abschreibung",
    begriff: "Lineare Abschreibung",
    kategorie: "Steuern & Kosten",
    definition: "Eine Abschreibungsmethode, bei der jährlich der gleiche Betrag von den Anschaffungskosten abgesetzt wird.",
    beschreibung: "Bei der linearen Abschreibung werden die Anschaffungs- oder Herstellungskosten eines Gebäudes gleichmäßig über die Nutzungsdauer verteilt. Für Wohngebäude gilt ein Satz von 2 % pro Jahr (50 Jahre Nutzungsdauer), für Neubauten ab 2023 ein erhöhter Satz von 3 % (ca. 33 Jahre). Die lineare AfA ist die Standardmethode bei Vermietungsobjekten.",
    verwandteBegriffe: ["Abschreibung", "Werbungskosten", "Herstellungskosten"]
  },
  {
    slug: "erschliessungskosten",
    begriff: "Erschließungskosten",
    kategorie: "Steuern & Kosten",
    definition: "Kosten für die Anbindung eines Grundstücks an das öffentliche Versorgungs- und Verkehrsnetz.",
    beschreibung: "Erschließungskosten entstehen für die Herstellung der Infrastruktur, die ein Grundstück nutzbar macht: Straßen, Gehwege, Kanalisation, Wasser-, Strom- und Gasanschlüsse. Die Gemeinde erhebt Erschließungsbeiträge, die den Grundstückseigentümer treffen. Bei Neubaugebieten können diese Kosten erheblich sein.",
    verwandteBegriffe: ["Erschließung", "Baunebenkosten", "Anschlusskosten", "Grundstück"]
  },
  {
    slug: "erbbauzins",
    begriff: "Erbbauzins",
    kategorie: "Grundstück",
    definition: "Die regelmäßige Zahlung, die der Erbbauberechtigte an den Grundstückseigentümer für die Nutzung des Grundstücks leistet.",
    beschreibung: "Der Erbbauzins ist das Entgelt, das der Erbbauberechtigte dem Grundstückseigentümer für die Nutzung des Grundstücks zahlt. Er beträgt üblicherweise 3–5 % des Grundstückswerts pro Jahr. Der Erbbauzins kann an einen Index (z. B. Verbraucherpreisindex) gekoppelt sein und sich im Laufe der Zeit erhöhen.",
    verwandteBegriffe: ["Erbbaurecht", "Grundstück", "Erbpacht"]
  },
  {
    slug: "einheitswert",
    begriff: "Einheitswert",
    kategorie: "Bewertung",
    definition: "Ein vom Finanzamt festgestellter Wert einer Immobilie, der als Bemessungsgrundlage für die Grundsteuer dient.",
    beschreibung: "Der Einheitswert wurde vom Finanzamt auf Basis veralteter Wertverhältnisse (1964 in Westdeutschland, 1935 in Ostdeutschland) festgestellt und diente als Grundlage für die Berechnung der Grundsteuer. Durch die Grundsteuerreform 2025 wird er schrittweise durch neue Bewertungsverfahren ersetzt.",
    verwandteBegriffe: ["Grundsteuer", "Verkehrswert", "Bodenwert"]
  },
  {
    slug: "sondereigentum",
    begriff: "Sondereigentum",
    kategorie: "Recht",
    definition: "Der Teil einer Eigentumswohnung, der dem einzelnen Eigentümer allein gehört und von ihm allein genutzt wird.",
    beschreibung: "Das Sondereigentum umfasst die Räume einer Eigentumswohnung einschließlich Bodenbeläge, nicht tragende Innenwände, Innentüren und sanitäre Einrichtungen. Es steht im Gegensatz zum Gemeinschaftseigentum, das allen Eigentümern gemeinsam gehört. Die Abgrenzung ist in der Teilungserklärung festgelegt.",
    verwandteBegriffe: ["Gemeinschaftseigentum", "Teilungserklärung", "Wohnungseigentumsgesetz"]
  },
  {
    slug: "baubeschreibung",
    begriff: "Baubeschreibung",
    kategorie: "Bau & Planung",
    definition: "Eine detaillierte Beschreibung aller Bauleistungen, Materialien und Ausstattungsmerkmale eines Bauvorhabens.",
    beschreibung: "Die Baubeschreibung ist ein zentrales Dokument beim Neubau oder Kauf vom Bauträger. Sie listet alle verwendeten Materialien, Bauweisen und Ausstattungsmerkmale detailliert auf. Seit 2018 ist eine umfassende Baubeschreibung bei Verbraucherbauverträgen gesetzlich vorgeschrieben und muss dem Käufer rechtzeitig vor Vertragsabschluss vorgelegt werden.",
    verwandteBegriffe: ["Bauträger", "Baukosten", "Bemusterung"]
  },
  {
    slug: "offene-immobilienfonds",
    begriff: "Offene Immobilienfonds",
    kategorie: "Finanzierung",
    definition: "Investmentfonds, die in eine Vielzahl von Immobilien investieren und deren Anteile börsentäglich gehandelt werden können.",
    beschreibung: "Offene Immobilienfonds investieren in ein diversifiziertes Portfolio von Immobilien (Büros, Einzelhandel, Wohnungen). Anleger können Anteile jederzeit kaufen und – nach einer Mindesthaltedauer von 24 Monaten und einer Kündigungsfrist von 12 Monaten – zurückgeben. Sie bieten eine breite Risikostreuung bei vergleichsweise geringer Volatilität.",
    verwandteBegriffe: ["Immobilienfonds", "Geschlossene Immobilienfonds", "Rendite"]
  },
  {
    slug: "refinanzierung",
    begriff: "Refinanzierung",
    kategorie: "Finanzierung",
    definition: "Die Beschaffung von Kapital durch eine Bank, um Kredite an ihre Kunden vergeben zu können.",
    beschreibung: "Refinanzierung beschreibt den Prozess, mit dem sich Banken selbst das Kapital beschaffen, das sie als Darlehen an Kreditnehmer weitergeben. Dies geschieht u. a. über Spareinlagen, Pfandbriefe oder am Interbankenmarkt. Die Refinanzierungskosten der Banken beeinflussen direkt die Zinskonditionen für Baufinanzierungen.",
    verwandteBegriffe: ["Pfandbriefe", "Hypothekenbank", "Marktzins"]
  },
  {
    slug: "wohnflaeche",
    begriff: "Wohnfläche",
    kategorie: "Bewertung",
    definition: "Die Gesamtfläche aller Räume einer Wohnung, die zu Wohnzwecken nutzbar sind.",
    beschreibung: "Die Wohnfläche wird nach der Wohnflächenverordnung (WoFlV) berechnet und umfasst die Flächen aller Räume, die ausschließlich zur Wohnung gehören. Balkone und Terrassen werden in der Regel zu 25 % angerechnet, Dachschrägen unter 1 m Höhe gar nicht und zwischen 1 und 2 m zur Hälfte. Die Wohnfläche ist ein wichtiger Faktor bei der Bewertung und Finanzierung.",
    verwandteBegriffe: ["Verkehrswert", "Immobilie", "Sachwertverfahren"]
  },
  {
    slug: "bauantrag",
    begriff: "Bauantrag",
    kategorie: "Recht",
    definition: "Der formelle Antrag an die Bauaufsichtsbehörde zur Genehmigung eines Bauvorhabens.",
    beschreibung: "Der Bauantrag ist der offizielle Antrag beim Bauamt zur Erteilung einer Baugenehmigung. Er muss vom Bauherrn und einem bauvorlageberechtigten Entwurfsverfasser (z. B. Architekt) unterschrieben sein und enthält Bauzeichnungen, Baubeschreibung, Lageplan und statische Berechnungen. Die Bearbeitungsdauer beträgt je nach Gemeinde mehrere Wochen bis Monate.",
    verwandteBegriffe: ["Baugenehmigung", "Bauanzeige", "Bauordnung"]
  },
  {
    slug: "sachwertverfahren",
    begriff: "Sachwertverfahren",
    kategorie: "Bewertung",
    definition: "Ein Verfahren zur Wertermittlung von Immobilien, das den Substanzwert von Grundstück und Gebäude berechnet.",
    beschreibung: "Das Sachwertverfahren ermittelt den Wert einer Immobilie anhand der Herstellungskosten des Gebäudes (abzüglich Alterswertminderung) und des Bodenwerts. Es wird vor allem bei eigengenutzten Immobilien angewendet, für die kein Vergleichs- oder Ertragswertverfahren herangezogen werden kann. Das Verfahren ist in der Immobilienwertermittlungsverordnung (ImmoWertV) geregelt.",
    verwandteBegriffe: ["Verkehrswert", "Bodenwert", "Wertermittlung", "Ertragswert"]
  },
  {
    slug: "zahlungsart",
    begriff: "Zahlungsart",
    kategorie: "Finanzierung",
    definition: "Die Art und Weise, wie die Darlehensraten geleistet werden, z. B. monatlich, vierteljährlich oder jährlich.",
    beschreibung: "Die Zahlungsart legt fest, in welchem Rhythmus die Darlehensraten zu zahlen sind. Bei Baufinanzierungen ist die monatliche Zahlung der Standard. Die Zahlungsart beeinflusst den effektiven Jahreszins, da häufigere Zahlungen zu einer schnelleren Tilgung und geringeren Gesamtzinskosten führen.",
    verwandteBegriffe: ["Rate", "Annuität", "Effektiver Jahreszins"]
  },
  {
    slug: "baukosten",
    begriff: "Baukosten",
    kategorie: "Steuern & Kosten",
    definition: "Die Gesamtheit aller Kosten, die für die Errichtung oder den Umbau eines Gebäudes anfallen.",
    beschreibung: "Die Baukosten umfassen alle Aufwendungen für die Errichtung eines Gebäudes nach DIN 276: Grundstückskosten, Herrichten und Erschließen, Bauwerk-Baukonstruktionen, Bauwerk-Technische Anlagen, Außenanlagen, Ausstattung und Baunebenkosten. Eine realistische Kalkulation der Baukosten ist Grundlage jeder Baufinanzierung.",
    verwandteBegriffe: ["Baunebenkosten", "Herstellungskosten", "Finanzierungsplan"]
  },
  {
    slug: "sondernutzungsrecht",
    begriff: "Sondernutzungsrecht",
    kategorie: "Recht",
    definition: "Das Recht eines Wohnungseigentümers, bestimmte Teile des Gemeinschaftseigentums allein zu nutzen.",
    beschreibung: "Das Sondernutzungsrecht räumt einem Wohnungseigentümer die ausschließliche Nutzung von Teilen des Gemeinschaftseigentums ein, z. B. Gartenflächen, Terrassen oder Stellplätze. Es wird in der Teilungserklärung oder durch Vereinbarung der Eigentümer begründet und im Grundbuch gesichert.",
    verwandteBegriffe: ["Gemeinschaftseigentum", "Sondereigentum", "Teilungserklärung"]
  },
  {
    slug: "baujahr",
    begriff: "Baujahr",
    kategorie: "Bewertung",
    definition: "Das Jahr, in dem ein Gebäude fertiggestellt wurde, relevant für Bewertung, Abschreibung und energetischen Zustand.",
    beschreibung: "Das Baujahr eines Gebäudes ist ein wesentlicher Faktor für die Bewertung, da es Rückschlüsse auf den Zustand der Bausubstanz, die Energieeffizienz und den Modernisierungsbedarf zulässt. Banken berücksichtigen das Baujahr bei der Ermittlung des Beleihungswerts. Zudem bestimmt es den Abschreibungssatz bei vermieteten Immobilien.",
    verwandteBegriffe: ["Beleihungswert", "Abschreibung", "Verkehrswert"]
  },
  {
    slug: "fremdkapital",
    begriff: "Fremdkapital",
    kategorie: "Finanzierung",
    definition: "Das Kapital, das durch Kreditaufnahme zur Finanzierung einer Immobilie beschafft wird.",
    beschreibung: "Fremdkapital ist der Teil der Immobilienfinanzierung, der durch Darlehen (z. B. Bankdarlehen, KfW-Kredite, Bauspardarlehen) aufgebracht wird. Es steht im Gegensatz zum Eigenkapital. Je höher der Fremdkapitalanteil, desto höher sind die Zinsbelastung und das finanzielle Risiko für den Kreditnehmer.",
    verwandteBegriffe: ["Eigenkapital", "Beleihungsauslauf", "Kapitalkosten"]
  },
  {
    slug: "bewirtschaftungskosten",
    begriff: "Bewirtschaftungskosten",
    kategorie: "Steuern & Kosten",
    definition: "Alle laufenden Kosten, die mit dem Besitz und Betrieb einer Immobilie verbunden sind.",
    beschreibung: "Bewirtschaftungskosten umfassen alle laufenden Ausgaben eines Immobilieneigentümers: Verwaltungskosten, Instandhaltungskosten, Mietausfallwagnis, Betriebskosten (Heizung, Wasser, Müll) und Grundsteuer. Sie sind bei der Finanzierungsplanung neben den Kreditraten zu berücksichtigen.",
    verwandteBegriffe: ["Instandhaltungskosten", "Grundsteuer", "Kapitaldienstfähigkeit"]
  },
  {
    slug: "erschliessung",
    begriff: "Erschließung",
    kategorie: "Grundstück",
    definition: "Die Anbindung eines Grundstücks an öffentliche Verkehrswege und Versorgungsleitungen.",
    beschreibung: "Die Erschließung umfasst die Herstellung der Infrastruktur, die ein Grundstück nutzbar macht: Zufahrtsstraßen, Gehwege, Wasser- und Abwasserleitungen, Strom-, Gas- und Telekommunikationsanschlüsse. Ein voll erschlossenes Grundstück hat Zugang zu allen erforderlichen Versorgungsnetzen. Die Kosten trägt in der Regel der Grundstückseigentümer.",
    verwandteBegriffe: ["Erschließungskosten", "Grundstück", "Anschlusskosten"]
  },
  {
    slug: "herstellungskosten",
    begriff: "Herstellungskosten",
    kategorie: "Steuern & Kosten",
    definition: "Die Kosten, die für die Errichtung eines Gebäudes aufgewendet werden und steuerlich abgeschrieben werden können.",
    beschreibung: "Herstellungskosten umfassen alle Aufwendungen, die für den Bau eines Gebäudes anfallen, einschließlich Material, Arbeitslohn, Architektenhonorar und Baunebenkosten. Sie bilden die Bemessungsgrundlage für die steuerliche Abschreibung (AfA). Im Gegensatz zu Erhaltungsaufwand sind sie nicht sofort, sondern nur über die Nutzungsdauer absetzbar.",
    verwandteBegriffe: ["Abschreibung", "Baukosten", "Erhaltungsaufwand"]
  },
  {
    slug: "laufzeit",
    begriff: "Laufzeit",
    kategorie: "Finanzierung",
    definition: "Der Zeitraum von der Auszahlung bis zur vollständigen Rückzahlung eines Darlehens.",
    beschreibung: "Die Laufzeit eines Baudarlehens erstreckt sich von der Auszahlung bis zur vollständigen Tilgung. Sie ist nicht zu verwechseln mit der Zinsbindungsfrist. Bei typischen Baufinanzierungen mit 2 % Tilgung und 3 % Zins beträgt die Gesamtlaufzeit rund 30 Jahre. Eine höhere Tilgung verkürzt die Laufzeit und spart Zinskosten.",
    verwandteBegriffe: ["Zinsbindungsfrist", "Tilgung", "Restschuld"]
  },
  {
    slug: "bemusterung",
    begriff: "Bemusterung",
    kategorie: "Bau & Planung",
    definition: "Die Auswahl von Materialien und Ausstattungsdetails durch den Bauherrn beim Neubau.",
    beschreibung: "Bei der Bemusterung wählt der Bauherr gemeinsam mit dem Bauträger oder Fertighaushersteller konkrete Materialien und Ausstattungsdetails aus: Bodenbeläge, Fliesen, Sanitärobjekte, Elektroinstallationen und Außengestaltung. Sonderwünsche, die über die Baubeschreibung hinausgehen, verursachen Mehrkosten.",
    verwandteBegriffe: ["Baubeschreibung", "Baukosten", "Fertighaus"]
  },
  {
    slug: "wertermittlung",
    begriff: "Wertermittlung",
    kategorie: "Bewertung",
    definition: "Die Bestimmung des Marktwerts einer Immobilie durch standardisierte Verfahren.",
    beschreibung: "Die Wertermittlung dient der Bestimmung des Verkehrswerts einer Immobilie und wird nach der Immobilienwertermittlungsverordnung (ImmoWertV) durchgeführt. Die drei anerkannten Verfahren sind das Vergleichswertverfahren, das Ertragswertverfahren und das Sachwertverfahren. Die Wertermittlung ist Grundlage für Kreditvergabe, Kauf und Verkauf.",
    verwandteBegriffe: ["Verkehrswert", "Sachwertverfahren", "Ertragswert", "Beleihungswert"]
  },
  {
    slug: "kapitaldienstfaehigkeit",
    begriff: "Kapitaldienstfähigkeit",
    kategorie: "Finanzierung",
    definition: "Die Fähigkeit eines Kreditnehmers, die laufenden Zins- und Tilgungsleistungen dauerhaft zu erbringen.",
    beschreibung: "Die Kapitaldienstfähigkeit (KDF) ist ein zentrales Prüfkriterium der Bank bei der Kreditvergabe. Sie ergibt sich aus dem Vergleich der regelmäßigen Einnahmen mit den Ausgaben und den zu leistenden Kreditraten. Eine nachhaltige Kapitaldienstfähigkeit liegt vor, wenn nach Abzug aller Verpflichtungen ein ausreichender Überschuss verbleibt.",
    verwandteBegriffe: ["Bonität", "Finanzierungsplan", "Rate"]
  },
  {
    slug: "kapitalkosten",
    begriff: "Kapitalkosten",
    kategorie: "Steuern & Kosten",
    definition: "Die Gesamtkosten der Finanzierung, einschließlich Zinsen, Gebühren und Nebenkosten des Darlehens.",
    beschreibung: "Kapitalkosten umfassen alle Aufwendungen, die mit der Aufnahme und Bedienung eines Baudarlehens verbunden sind: Zinszahlungen, Bereitstellungszinsen, Bearbeitungsgebühren, Schätzkosten und Kontoführungsgebühren. Sie sind bei der Wirtschaftlichkeitsberechnung einer Immobilieninvestition den Erträgen gegenüberzustellen.",
    verwandteBegriffe: ["Kreditkosten", "Finanzierungskosten", "Effektiver Jahreszins"]
  },
  {
    slug: "wohnkredit",
    begriff: "Wohnkredit",
    kategorie: "Finanzierung",
    definition: "Ein Kredit für wohnwirtschaftliche Zwecke, der ohne Grundbucheintragung vergeben werden kann.",
    beschreibung: "Ein Wohnkredit ist ein zweckgebundener Kredit für Renovierungen, Modernisierungen oder kleinere Baumaßnahmen, der ohne Grundbucheintragung auskommt. Im Vergleich zur klassischen Baufinanzierung sind die Beträge geringer (meist bis 50.000 €), die Laufzeiten kürzer und die Zinsen etwas höher, da keine dingliche Sicherheit besteht.",
    verwandteBegriffe: ["Finanzierungsplan", "Renovierung", "wohnwirtschaftliche Zwecke"]
  },
  {
    slug: "tilgungssatz",
    begriff: "Tilgungssatz",
    kategorie: "Tilgung",
    definition: "Der Prozentsatz des Darlehensbetrags, der jährlich als Tilgung zurückgezahlt wird.",
    beschreibung: "Der Tilgungssatz gibt an, wie viel Prozent der ursprünglichen Darlehenssumme jährlich getilgt werden. Ein Tilgungssatz von 2 % bedeutet, dass im ersten Jahr 2 % der Darlehenssumme getilgt werden. Ein höherer Tilgungssatz führt zu einer kürzeren Laufzeit und geringeren Gesamtzinskosten, erhöht aber die monatliche Rate.",
    verwandteBegriffe: ["Tilgung", "Rate", "Tilgungssatzwechsel"]
  },
  {
    slug: "bereitstellungszinsfreie-zeit",
    begriff: "Bereitstellungszinsfreie Zeit",
    kategorie: "Finanzierung",
    definition: "Der Zeitraum nach Darlehenszusage, in dem die Bank keine Bereitstellungszinsen für nicht abgerufene Darlehensbeträge erhebt.",
    beschreibung: "Die bereitstellungszinsfreie Zeit ist der Zeitraum, in dem Sie das zugesagte Darlehen noch nicht abrufen müssen, ohne Bereitstellungszinsen zu zahlen. Sie beträgt üblicherweise 3–12 Monate. Besonders bei Neubauten ist eine lange bereitstellungszinsfreie Zeit wichtig, da die Auszahlung erst mit Baufortschritt erfolgt.",
    verwandteBegriffe: ["Bereitstellungszins", "Baukosten", "Auszahlungsvoraussetzungen"]
  },
  {
    slug: "baugrenze",
    begriff: "Baugrenze",
    kategorie: "Recht",
    definition: "Eine Linie im Bebauungsplan, die die äußere Grenze der überbaubaren Grundstücksfläche festlegt.",
    beschreibung: "Die Baugrenze ist eine im Bebauungsplan festgelegte Linie, die nicht überschritten werden darf. Im Gegensatz zur Baulinie, die eine zwingende Bebauung vorschreibt, darf an die Baugrenze herangebaut werden, muss aber nicht. Balkone und Vorbauten dürfen die Baugrenze in der Regel geringfügig überschreiten.",
    verwandteBegriffe: ["Bebauungsplan", "Grundflächenzahl", "Baugenehmigung"]
  },
  {
    slug: "gemeinschaftseigentum",
    begriff: "Gemeinschaftseigentum",
    kategorie: "Recht",
    definition: "Die Teile eines Gebäudes und des Grundstücks, die allen Wohnungseigentümern gemeinsam gehören.",
    beschreibung: "Zum Gemeinschaftseigentum gehören alle Gebäudeteile, die nicht Sondereigentum sind: tragende Wände, Dach, Fassade, Treppenhaus, Aufzüge, Heizungsanlage und das Grundstück. Die Verwaltung und Instandhaltung des Gemeinschaftseigentums wird von der Eigentümerversammlung beschlossen und über das Hausgeld finanziert.",
    verwandteBegriffe: ["Sondereigentum", "Teilungserklärung", "Instandhaltungsrücklage"]
  },
  {
    slug: "instandhaltungskosten",
    begriff: "Instandhaltungskosten",
    kategorie: "Steuern & Kosten",
    definition: "Kosten für die Erhaltung des ordnungsgemäßen Zustands einer Immobilie.",
    beschreibung: "Instandhaltungskosten umfassen alle Ausgaben, die erforderlich sind, um eine Immobilie in einem ordnungsgemäßen und bewohnbaren Zustand zu halten. Dazu gehören Reparaturen, Wartung technischer Anlagen und der Austausch verschlissener Bauteile. Als Faustregel sollten jährlich ca. 1 % des Gebäudewerts für Instandhaltung eingeplant werden.",
    verwandteBegriffe: ["Bewirtschaftungskosten", "Instandhaltungsrücklage", "Erhaltungsaufwand"]
  },
  {
    slug: "pfandbriefe",
    begriff: "Pfandbriefe",
    kategorie: "Finanzierung",
    definition: "Von Banken ausgegebene, durch Grundpfandrechte besicherte Schuldverschreibungen zur Refinanzierung von Immobilienkrediten.",
    beschreibung: "Pfandbriefe sind festverzinsliche Wertpapiere, die von Pfandbriefbanken ausgegeben werden. Sie sind durch Grundpfandrechte (Hypotheken, Grundschulden) besichert und gelten als sehr sichere Anlageform. Die Rendite von Pfandbriefen beeinflusst maßgeblich die Zinskonditionen für Baufinanzierungen.",
    verwandteBegriffe: ["Refinanzierung", "Hypothekenbank", "Grundschuld"]
  },
  {
    slug: "schuldzinsen",
    begriff: "Schuldzinsen",
    kategorie: "Steuern & Kosten",
    definition: "Die Zinszahlungen für aufgenommene Darlehen, die bei vermieteten Immobilien steuerlich absetzbar sind.",
    beschreibung: "Schuldzinsen sind die Zinsen, die auf ein Immobiliendarlehen gezahlt werden. Bei vermieteten Immobilien sind sie als Werbungskosten steuerlich absetzbar und mindern die Einkünfte aus Vermietung und Verpachtung. Bei selbstgenutzten Immobilien ist ein Abzug grundsätzlich nicht möglich.",
    verwandteBegriffe: ["Werbungskosten", "Schuldzinsenabzug", "Zinssatz"]
  },
  {
    slug: "bauordnung",
    begriff: "Bauordnung",
    kategorie: "Recht",
    definition: "Die Landesbauordnung, die technische und formale Anforderungen an Bauvorhaben regelt.",
    beschreibung: "Die Bauordnung (Landesbauordnung, LBO) ist Landesrecht und regelt die technischen und formalen Anforderungen an bauliche Anlagen: Standsicherheit, Brandschutz, Abstandsflächen, Stellplatzpflicht und das Baugenehmigungsverfahren. Jedes Bundesland hat eine eigene Bauordnung.",
    verwandteBegriffe: ["Baurecht", "Baugenehmigung", "Bauantrag"]
  },
  {
    slug: "bauplanungsrecht",
    begriff: "Bauplanungsrecht",
    kategorie: "Recht",
    definition: "Der Teil des öffentlichen Baurechts, der die städtebauliche Planung und Zulässigkeit von Bauvorhaben regelt.",
    beschreibung: "Das Bauplanungsrecht ist im Baugesetzbuch (BauGB) geregelt und bestimmt, ob und wie auf einem Grundstück gebaut werden darf. Es umfasst die Bauleitplanung (Flächennutzungsplan und Bebauungsplan) und die Zulässigkeit von Vorhaben im Innen- und Außenbereich. Das Bauplanungsrecht ist Bundesrecht.",
    verwandteBegriffe: ["Baurecht", "Bebauungsplan", "Flächennutzungsplan"]
  },
  {
    slug: "gesamtschuldner",
    begriff: "Gesamtschuldner",
    kategorie: "Recht",
    definition: "Mehrere Personen, die gemeinsam für die Rückzahlung eines Darlehens haften, wobei jeder für die gesamte Schuld einsteht.",
    beschreibung: "Gesamtschuldner sind Kreditnehmer, die gemeinsam einen Darlehensvertrag abschließen (z. B. Ehepaare). Jeder Gesamtschuldner haftet für die gesamte Schuld, nicht nur für seinen Anteil. Die Bank kann die vollständige Rückzahlung von jedem einzelnen Schuldner verlangen. Dies ist die übliche Haftungsform bei gemeinsamer Baufinanzierung.",
    verwandteBegriffe: ["Kreditvertrag", "Schuldner", "Bürgschaft"]
  },
  {
    slug: "nachbarrecht",
    begriff: "Nachbarrecht",
    kategorie: "Recht",
    definition: "Die Gesamtheit der Regelungen, die das Verhältnis benachbarter Grundstückseigentümer betreffen.",
    beschreibung: "Das Nachbarrecht regelt die gegenseitigen Rechte und Pflichten von Grundstücksnachbarn. Es umfasst Regelungen zu Grenzabständen, Überbau, Hammerschlagsrecht, Leitungsrecht und Immissionen. Das Nachbarrecht ist zum Teil im BGB und zum Teil in den Nachbarrechtsgesetzen der Länder geregelt.",
    verwandteBegriffe: ["Grundstück", "Wegerecht", "Grunddienstbarkeiten"]
  },
  {
    slug: "finanzierungsplan",
    begriff: "Finanzierungsplan",
    kategorie: "Finanzierung",
    definition: "Eine Aufstellung aller Kosten und Finanzierungsquellen für ein Immobilienvorhaben.",
    beschreibung: "Der Finanzierungsplan stellt die Gesamtkosten eines Immobilienprojekts (Kaufpreis, Nebenkosten, ggf. Modernisierung) den verfügbaren Finanzierungsmitteln (Eigenkapital, Bankdarlehen, Fördermittel) gegenüber. Er ist die Basis für die Kreditentscheidung der Bank und sollte eine realistische Kostenplanung mit ausreichenden Reserven enthalten.",
    verwandteBegriffe: ["Eigenkapital", "Fremdkapital", "Finanzierungskosten"]
  },
  {
    slug: "bauanzeige",
    begriff: "Bauanzeige",
    kategorie: "Recht",
    definition: "Ein vereinfachtes Anzeigeverfahren für genehmigungsfreie Bauvorhaben bei der Bauaufsichtsbehörde.",
    beschreibung: "Die Bauanzeige ist ein vereinfachtes Verfahren, bei dem der Bauherr die Bauaufsichtsbehörde über ein geplantes Bauvorhaben informiert, ohne eine förmliche Baugenehmigung beantragen zu müssen. Sie ist für bestimmte kleinere Vorhaben vorgesehen, die im Bebauungsplan zugelassen sind. Die Regelungen variieren je nach Landesbauordnung.",
    verwandteBegriffe: ["Baugenehmigung", "Bauantrag", "Bauordnung"]
  },
  {
    slug: "bausparsumme",
    begriff: "Bausparsumme",
    kategorie: "Finanzierung",
    definition: "Der im Bausparvertrag vereinbarte Gesamtbetrag aus Bausparguthaben und Bauspardarlehen.",
    beschreibung: "Die Bausparsumme ist der im Bausparvertrag festgelegte Gesamtbetrag. Sie setzt sich aus dem anzusparenden Guthaben (üblicherweise 40–50 % der Bausparsumme) und dem Bauspardarlehen (restliche 50–60 %) zusammen. Die Höhe der Bausparsumme bestimmt die Sparrate, die Darlehenshöhe und den Zeitpunkt der Zuteilung.",
    verwandteBegriffe: ["Bausparen", "Zuteilung", "Bausparguthaben", "Bauspartarif"]
  },
  {
    slug: "erhaltungsaufwand",
    begriff: "Erhaltungsaufwand",
    kategorie: "Steuern & Kosten",
    definition: "Ausgaben zur Erhaltung eines Gebäudes im bisherigen Zustand, die sofort steuerlich absetzbar sind.",
    beschreibung: "Erhaltungsaufwand umfasst Maßnahmen, die ein Gebäude im bisherigen Zustand erhalten oder in einen ordnungsgemäßen Zustand zurückversetzen, z. B. Dachreparaturen, Heizungswartung oder der Austausch defekter Fenster. Im Gegensatz zu Herstellungskosten sind sie bei vermieteten Immobilien sofort in voller Höhe als Werbungskosten absetzbar.",
    verwandteBegriffe: ["Herstellungskosten", "Werbungskosten", "Instandhaltungskosten"]
  },
  {
    slug: "negativerklaerung",
    begriff: "Negativerklärung",
    kategorie: "Sicherheit",
    definition: "Die Verpflichtung des Kreditnehmers, ohne Zustimmung der Bank keine weiteren Grundpfandrechte eintragen zu lassen.",
    beschreibung: "Mit einer Negativerklärung verpflichtet sich der Kreditnehmer gegenüber der Bank, das als Sicherheit dienende Grundstück nicht ohne deren Zustimmung mit weiteren Grundpfandrechten zu belasten. Sie schützt den Rang der Bank im Grundbuch und ist eine alternative oder ergänzende Sicherungsform neben der Grundschuld.",
    verwandteBegriffe: ["Grundschuld", "Grundbuch", "Rangstelle"]
  },
  {
    slug: "beleihungsgrenze",
    begriff: "Beleihungsgrenze",
    kategorie: "Finanzierung",
    definition: "Der maximale Anteil des Beleihungswerts, bis zu dem eine Bank Kredite gewähren darf.",
    beschreibung: "Die Beleihungsgrenze ist der Höchstbetrag, bis zu dem eine Bank Darlehen vergeben darf, ausgedrückt als Prozentsatz des Beleihungswerts. Für Realkreditinstitute liegt die Beleihungsgrenze bei 60 % des Beleihungswerts. Darüber hinaus können Kredite nur gegen zusätzliche Sicherheiten oder zu höheren Zinsen vergeben werden.",
    verwandteBegriffe: ["Beleihungswert", "Beleihungsauslauf", "Beleihungsobjekt"]
  },
  {
    slug: "geldbeschaffungskosten",
    begriff: "Geldbeschaffungskosten",
    kategorie: "Steuern & Kosten",
    definition: "Einmalige Kosten, die bei der Beschaffung eines Immobilienkredits anfallen.",
    beschreibung: "Geldbeschaffungskosten sind alle einmaligen Aufwendungen, die im Zusammenhang mit der Aufnahme einer Baufinanzierung entstehen: Schätzkosten, Grundbuchgebühren, Notarkosten für die Grundschuldbestellung, Vermittlungsgebühren und Bearbeitungsgebühren. Bei vermieteten Immobilien sind sie als Werbungskosten absetzbar.",
    verwandteBegriffe: ["Kreditkosten", "Finanzierungskosten", "Schätzkosten"]
  },
  {
    slug: "baumaengel",
    begriff: "Baumängel",
    kategorie: "Bau & Planung",
    definition: "Abweichungen der Bauausführung von der vereinbarten Beschaffenheit oder den anerkannten Regeln der Technik.",
    beschreibung: "Baumängel liegen vor, wenn die Bauausführung von der vereinbarten Beschaffenheit, der Baubeschreibung oder den allgemein anerkannten Regeln der Technik abweicht. Der Bauherr hat Gewährleistungsansprüche (Nachbesserung, Minderung, Schadensersatz). Die Gewährleistungsfrist beträgt bei Bauwerken 5 Jahre nach BGB, bei VOB/B 4 Jahre.",
    verwandteBegriffe: ["Werkvertragsrecht", "Baurisiken", "Baubeschreibung"]
  },
  {
    slug: "marktzins",
    begriff: "Marktzins",
    kategorie: "Zinsen",
    definition: "Der am Kapitalmarkt aktuelle Zinssatz, der die Konditionen für Baufinanzierungen maßgeblich beeinflusst.",
    beschreibung: "Der Marktzins (auch Kapitalmarktzins) ist der Zins, der sich durch Angebot und Nachfrage am Kapitalmarkt bildet. Er wird durch die Geldpolitik der EZB, die Inflation und die wirtschaftliche Lage beeinflusst. Der Marktzins für langfristige Anleihen und Pfandbriefe bestimmt maßgeblich die Zinskonditionen für Baufinanzierungen.",
    verwandteBegriffe: ["Zinssatz", "Zinsänderungsrisiko", "Refinanzierung"]
  },
  {
    slug: "vorvertragliche-informationen",
    begriff: "Vorvertragliche Informationen",
    kategorie: "Recht",
    definition: "Pflichtinformationen, die der Kreditgeber dem Verbraucher vor Abschluss eines Darlehensvertrags zur Verfügung stellen muss.",
    beschreibung: "Kreditgeber sind gesetzlich verpflichtet, dem Verbraucher vor Abschluss eines Immobiliardarlehensvertrags ein europäisches standardisiertes Merkblatt (ESIS) auszuhändigen. Dieses enthält alle wesentlichen Informationen zu Zinssatz, Kosten, Risiken und Widerrufsrecht, um eine informierte Entscheidung zu ermöglichen.",
    verwandteBegriffe: ["Erläuterungspflicht", "Kreditvertrag", "Preisangabenverordnung"]
  },
  {
    slug: "kreditkosten",
    begriff: "Kreditkosten",
    kategorie: "Steuern & Kosten",
    definition: "Die Gesamtheit aller Kosten, die durch die Aufnahme und Bedienung eines Darlehens entstehen.",
    beschreibung: "Kreditkosten umfassen alle finanziellen Aufwendungen eines Darlehens: Zinsen, Bearbeitungsgebühren, Bereitstellungszinsen, Schätzkosten, Kontoführungsgebühren und Versicherungskosten. Der effektive Jahreszins fasst die meisten dieser Kosten in einer vergleichbaren Kennzahl zusammen.",
    verwandteBegriffe: ["Effektiver Jahreszins", "Kapitalkosten", "Finanzierungskosten"]
  },
  {
    slug: "notaranderkonto",
    begriff: "Notaranderkonto",
    kategorie: "Finanzierung",
    definition: "Ein treuhänderisches Konto des Notars, über das der Kaufpreis einer Immobilie abgewickelt wird.",
    beschreibung: "Das Notaranderkonto ist ein Treuhandkonto, das der Notar für die Kaufpreisabwicklung einrichtet. Der Käufer zahlt den Kaufpreis auf dieses Konto ein, und der Notar leitet das Geld erst an den Verkäufer weiter, wenn alle Voraussetzungen für die Eigentumsumschreibung erfüllt sind. Heute wird häufig die Direktzahlung bevorzugt.",
    verwandteBegriffe: ["Kaufvertrag", "Treuhandzahlung", "Grundbuch"]
  },
  {
    slug: "zinsaenderungsrisiko",
    begriff: "Zinsänderungsrisiko",
    kategorie: "Zinsen",
    definition: "Das Risiko, dass sich die Zinsen nach Ablauf der Zinsbindungsfrist nachteilig verändern.",
    beschreibung: "Das Zinsänderungsrisiko beschreibt die Gefahr, dass bei Ablauf der Zinsbindungsfrist die Marktzinsen gestiegen sind und die Anschlussfinanzierung teurer wird. Je kürzer die Zinsbindungsfrist, desto höher das Zinsänderungsrisiko. Eine längere Zinsbindung bietet Schutz, kostet aber in der Regel einen Zinsaufschlag.",
    verwandteBegriffe: ["Zinsbindungsfrist", "Anschlussfinanzierung", "Marktzins"]
  },
  {
    slug: "hypothekenbank",
    begriff: "Hypothekenbank",
    kategorie: "Finanzierung",
    definition: "Ein Kreditinstitut, das sich auf die Vergabe von grundpfandrechtlich gesicherten Immobilienkrediten spezialisiert hat.",
    beschreibung: "Hypothekenbanken (heute Pfandbriefbanken) sind Kreditinstitute, die vorrangig Immobilienkredite gegen Grundpfandrechte vergeben. Sie refinanzieren sich durch die Ausgabe von Pfandbriefen. Hypothekenbanken unterliegen dem Pfandbriefgesetz und besonderen Aufsichtsanforderungen, die die Sicherheit der Kredite gewährleisten sollen.",
    verwandteBegriffe: ["Pfandbriefe", "Refinanzierung", "Realkreditinstitut"]
  },
  {
    slug: "kreditrisiko",
    begriff: "Kreditrisiko",
    kategorie: "Finanzierung",
    definition: "Das Risiko der Bank, dass der Kreditnehmer seine Zahlungsverpflichtungen nicht erfüllen kann.",
    beschreibung: "Das Kreditrisiko ist das Risiko, dass ein Kreditnehmer seine Zins- und Tilgungsleistungen nicht vereinbarungsgemäß erbringen kann. Die Bank bewertet das Kreditrisiko anhand der Bonität des Kreditnehmers, des Beleihungsauslaufs und der Werthaltigkeit der Sicherheiten. Ein höheres Kreditrisiko führt zu höheren Zinsaufschlägen.",
    verwandteBegriffe: ["Bonität", "Beleihungsauslauf", "Zinsaufschlag der Banken"]
  },
  {
    slug: "wohnungsbaufoerderung",
    begriff: "Wohnungsbauförderung",
    kategorie: "Förderung",
    definition: "Staatliche Maßnahmen zur Unterstützung des Wohnungsbaus, z. B. durch Zuschüsse, zinsgünstige Darlehen oder steuerliche Vergünstigungen.",
    beschreibung: "Die Wohnungsbauförderung umfasst verschiedene staatliche Programme zur Unterstützung des Wohnungsbaus: KfW-Förderprogramme, Wohnungsbauprämie, Baukindergeld (ausgelaufen), Landesförderprogramme und steuerliche Begünstigungen. Die Förderbedingungen ändern sich regelmäßig und sollten vor Beginn eines Bauvorhabens geprüft werden.",
    verwandteBegriffe: ["Wohnungsbauprämie", "Vermögenswirksame Leistungen", "QNG"]
  },
  {
    slug: "zinsfestschreibung",
    begriff: "Zinsfestschreibung",
    kategorie: "Zinsen",
    definition: "Die vertragliche Vereinbarung eines festen Zinssatzes für einen bestimmten Zeitraum.",
    beschreibung: "Die Zinsfestschreibung legt den Zeitraum fest, für den der vereinbarte Zinssatz eines Baudarlehens gilt. Übliche Zinsfestschreibungen betragen 5, 10, 15 oder 20 Jahre. Während dieser Zeit kann der Zinssatz nicht verändert werden, auch wenn die Marktzinsen steigen oder fallen. Die Zinsfestschreibung ist gleichbedeutend mit der Zinsbindungsfrist.",
    verwandteBegriffe: ["Zinsbindungsfrist", "Festzins", "Zinssatz"]
  },
  {
    slug: "bereitstellungszins",
    begriff: "Bereitstellungszins",
    kategorie: "Zinsen",
    definition: "Zinsen, die die Bank für noch nicht abgerufene Darlehensbeträge nach Ablauf der bereitstellungszinsfreien Zeit erhebt.",
    beschreibung: "Der Bereitstellungszins wird fällig, wenn ein zugesagtes Darlehen nicht innerhalb der bereitstellungszinsfreien Zeit abgerufen wird. Er beträgt üblicherweise 0,25 % pro Monat (3 % p.a.) auf den noch nicht ausgezahlten Betrag. Bei Neubauten kann der Bereitstellungszins erhebliche Kosten verursachen, wenn sich der Bau verzögert.",
    verwandteBegriffe: ["Bereitstellungszinsfreie Zeit", "Kreditkosten", "Baukosten"]
  },
  {
    slug: "bewertungszahl",
    begriff: "Bewertungszahl",
    kategorie: "Finanzierung",
    definition: "Eine Kennzahl im Bausparen, die das Verhältnis von Sparguthaben, Sparzeit und Bausparsumme ausdrückt und die Zuteilungsreife bestimmt.",
    beschreibung: "Die Bewertungszahl wird von der Bausparkasse berechnet und bestimmt, wann ein Bausparvertrag zuteilungsreif ist. Sie berücksichtigt die Höhe der Einzahlungen, die Dauer der Sparphase und die Bausparsumme. Je höher die Bewertungszahl, desto früher erfolgt die Zuteilung. Die Berechnungsmethode variiert je nach Bausparkasse.",
    verwandteBegriffe: ["Bausparen", "Zuteilung", "Bausparsumme"]
  },
  {
    slug: "personalkredit",
    begriff: "Personalkredit",
    kategorie: "Finanzierung",
    definition: "Ein Kredit, der allein auf der persönlichen Bonität des Kreditnehmers basiert, ohne dingliche Sicherheiten.",
    beschreibung: "Ein Personalkredit wird ausschließlich auf Basis der persönlichen Kreditwürdigkeit (Bonität) des Kreditnehmers vergeben, ohne dass eine Immobilie als Sicherheit dient. Im Immobilienbereich kann ein Personalkredit ergänzend zur Baufinanzierung eingesetzt werden, z. B. für Einrichtung oder kleinere Modernisierungen.",
    verwandteBegriffe: ["Bonität", "Kreditfähigkeit", "Realkredit"]
  },
  {
    slug: "sparvertraege",
    begriff: "Sparverträge",
    kategorie: "Finanzierung",
    definition: "Verträge zur regelmäßigen Geldanlage, die als Eigenkapitalbasis für eine spätere Baufinanzierung dienen können.",
    beschreibung: "Sparverträge sind Vereinbarungen mit Banken oder Bausparkassen über regelmäßige Einzahlungen zum Aufbau von Guthaben. Im Kontext der Baufinanzierung dienen sie dem Aufbau von Eigenkapital. Dazu zählen Bausparverträge, Banksparpläne und Verträge für vermögenswirksame Leistungen.",
    verwandteBegriffe: ["Bausparen", "Eigenkapital", "Vermögenswirksame Leistungen"]
  },
  {
    slug: "tilgungsaussetzung",
    begriff: "Tilgungsaussetzung",
    kategorie: "Tilgung",
    definition: "Die vorübergehende Aussetzung der Tilgung bei einem Darlehen, bei dem nur Zinsen gezahlt werden.",
    beschreibung: "Bei einer Tilgungsaussetzung werden während der Laufzeit nur Zinsen gezahlt, die Tilgung erfolgt am Ende in einer Summe, meist durch einen Bausparvertrag oder eine Lebensversicherung. Die Gesamtkosten sind höher als bei einem Annuitätendarlehen, da die Restschuld während der Laufzeit konstant bleibt und die Zinsbelastung nicht sinkt.",
    verwandteBegriffe: ["Tilgung", "Festdarlehen", "Tilgungssurrogat"]
  },
  {
    slug: "beleihungsobjekt",
    begriff: "Beleihungsobjekt",
    kategorie: "Sicherheit",
    definition: "Die Immobilie, die der Bank als Sicherheit für den Kredit dient.",
    beschreibung: "Das Beleihungsobjekt ist die Immobilie, auf die eine Grundschuld oder Hypothek zugunsten der kreditgebenden Bank eingetragen wird. Die Bank prüft das Beleihungsobjekt auf Werthaltigkeit, Zustand und Verwertbarkeit. Es muss nicht identisch mit der finanzierten Immobilie sein – auch eine andere Immobilie kann als Zusatzsicherheit dienen.",
    verwandteBegriffe: ["Beleihungswert", "Grundschuld", "Beleihungsgrenze"]
  },
  {
    slug: "negativbescheid",
    begriff: "Negativbescheid",
    kategorie: "Recht",
    definition: "Eine behördliche Bescheinigung, dass ein gesetzliches Vorkaufsrecht nicht ausgeübt wird.",
    beschreibung: "Der Negativbescheid (auch Negativzeugnis oder Vorkaufsrechtsverzichtserklärung) wird von der Gemeinde ausgestellt und bestätigt, dass sie ihr gesetzliches Vorkaufsrecht bei einem Immobilienverkauf nicht ausübt. Er ist Voraussetzung für die Eigentumsumschreibung im Grundbuch und wird vom Notar im Rahmen der Kaufabwicklung beantragt.",
    verwandteBegriffe: ["Vorkaufsrecht", "Kaufvertrag", "Grundbuch"]
  },
  {
    slug: "grundschuldzins",
    begriff: "Grundschuldzins",
    kategorie: "Sicherheit",
    definition: "Ein im Grundbuch eingetragener Zinssatz auf die Grundschuld, der den Sicherungsrahmen der Bank erweitert.",
    beschreibung: "Der Grundschuldzins ist ein abstakter Zins, der bei der Grundschuldbestellung im Grundbuch eingetragen wird (meist 12–18 % p.a.). Er hat nichts mit dem tatsächlichen Darlehenszins zu tun, sondern dient als Sicherheitsreserve der Bank für den Fall einer Zwangsversteigerung, um Verzugszinsen und Kosten abzudecken.",
    verwandteBegriffe: ["Grundschuld", "Grundschuldbestellung", "Grundbuch"]
  },
  {
    slug: "nebenleistungen",
    begriff: "Nebenleistungen",
    kategorie: "Steuern & Kosten",
    definition: "Zusätzliche Kosten eines Darlehens neben den eigentlichen Zinszahlungen.",
    beschreibung: "Nebenleistungen sind alle Kosten eines Baudarlehens, die über die reinen Zinszahlungen hinausgehen: Bearbeitungsgebühren, Bereitstellungszinsen, Kontoführungsgebühren, Schätzkosten und Teilauszahlungszuschläge. Sie fließen in die Berechnung des effektiven Jahreszinses ein und erhöhen die tatsächlichen Finanzierungskosten.",
    verwandteBegriffe: ["Kreditkosten", "Effektiver Jahreszins", "Geldbeschaffungskosten"]
  },
  {
    slug: "wohnwirtschaftliche-zwecke",
    begriff: "wohnwirtschaftliche Zwecke",
    kategorie: "Finanzierung",
    definition: "Verwendungszwecke, die mit dem Erwerb, Bau oder der Modernisierung von Wohnraum zusammenhängen.",
    beschreibung: "Wohnwirtschaftliche Zwecke umfassen den Kauf, Bau, die Modernisierung oder Renovierung von selbstgenutztem oder vermietetem Wohnraum. Die Verwendung für wohnwirtschaftliche Zwecke ist Voraussetzung für die Inanspruchnahme von Bauspardarehen und verschiedenen Förderprogrammen wie der Wohnungsbauprämie.",
    verwandteBegriffe: ["Wohnungsbauprämie", "Bausparen", "Wohnkredit"]
  },
  {
    slug: "makler-und-bautraegerverordnung",
    begriff: "Makler- und Bauträgerverordnung",
    kategorie: "Recht",
    definition: "Verordnung zum Schutz von Käufern bei Geschäften mit Maklern und Bauträgern.",
    beschreibung: "Die Makler- und Bauträgerverordnung (MaBV) regelt die Pflichten von Maklern und Bauträgern gegenüber ihren Kunden. Für Bauträger ist besonders der Zahlungsplan nach § 3 MaBV relevant, der festlegt, welche Teilbeträge des Kaufpreises wann fällig werden. Sie dient dem Schutz des Käufers vor Vermögensverlusten bei Insolvenz des Bauträgers.",
    verwandteBegriffe: ["Bauträger", "Maklerprovision", "Kaufvertrag"]
  },
  {
    slug: "festzinsdarlehen",
    begriff: "Festzinsdarlehen",
    kategorie: "Finanzierung",
    definition: "Ein Darlehen mit einem für die gesamte Zinsbindungsfrist festgelegten Zinssatz.",
    beschreibung: "Ein Festzinsdarlehen ist ein Kredit, bei dem der Zinssatz für die vereinbarte Zinsbindungsfrist unveränderlich festgelegt ist. Es bietet maximale Planungssicherheit, da die monatliche Rate während der Zinsbindung konstant bleibt. Die häufigste Form in der Baufinanzierung ist das Festzins-Annuitätendarlehen.",
    verwandteBegriffe: ["Festzins", "Zinsbindungsfrist", "Annuität"]
  },
  {
    slug: "grunddienstbarkeiten",
    begriff: "Grunddienstbarkeiten",
    kategorie: "Recht",
    definition: "Im Grundbuch eingetragene Rechte, die den Eigentümer eines Grundstücks zugunsten eines anderen Grundstücks einschränken.",
    beschreibung: "Grunddienstbarkeiten sind beschränkte dingliche Rechte, die im Grundbuch eingetragen werden. Typische Beispiele sind Wegerechte, Leitungsrechte oder Baubeschränkungen. Sie belasten das dienende Grundstück zugunsten des herrschenden Grundstücks und können den Wert des belasteten Grundstücks mindern.",
    verwandteBegriffe: ["Wegerecht", "Grundbuch", "Nießbrauch"]
  },
  {
    slug: "schaetzkosten",
    begriff: "Schätzkosten",
    kategorie: "Steuern & Kosten",
    definition: "Kosten für die Wertermittlung einer Immobilie durch einen Gutachter im Auftrag der Bank.",
    beschreibung: "Schätzkosten (auch Wertermittlungsgebühren) entstehen, wenn die Bank einen Sachverständigen mit der Bewertung der als Sicherheit dienenden Immobilie beauftragt. Sie betragen je nach Aufwand und Immobilienwert zwischen 300 und 2.000 Euro und sind vom Kreditnehmer zu tragen. Manche Banken verzichten auf Schätzkosten oder berechnen Pauschalbeträge.",
    verwandteBegriffe: ["Wertermittlung", "Beleihungswert", "Geldbeschaffungskosten"]
  },
  {
    slug: "tilgungshypothek",
    begriff: "Tilgungshypothek",
    kategorie: "Tilgung",
    definition: "Ein Hypothekendarlehen mit regelmäßiger Tilgung, bei dem die Restschuld kontinuierlich sinkt.",
    beschreibung: "Die Tilgungshypothek ist ein Darlehen, bei dem neben den Zinsen auch regelmäßige Tilgungsleistungen erbracht werden. Im Gegensatz zum endfälligen Darlehen wird die Schuld über die Laufzeit kontinuierlich abgebaut. Die gängigste Form ist das Annuitätendarlehen mit gleichbleibender Rate.",
    verwandteBegriffe: ["Hypothek", "Tilgung", "Annuität"]
  },
  {
    slug: "bauspartarif",
    begriff: "Bauspartarif",
    kategorie: "Finanzierung",
    definition: "Das Vertragsmodell eines Bausparvertrags, das Spar- und Darlehenszinsen, Ansparanteil und Tilgung festlegt.",
    beschreibung: "Der Bauspartarif bestimmt die wesentlichen Konditionen eines Bausparvertrags: den Guthabenzins in der Sparphase, den Darlehenszins, den notwendigen Ansparanteil für die Zuteilung, die Mindestspardauer und die Tilgungsbedingungen. Bausparkassen bieten verschiedene Tarife an, die auf unterschiedliche Sparziele und Laufzeiten zugeschnitten sind.",
    verwandteBegriffe: ["Bausparen", "Bausparsumme", "Bewertungszahl"]
  },
  {
    slug: "flaechennutzungsplan",
    begriff: "Flächennutzungsplan",
    kategorie: "Recht",
    definition: "Ein vorbereitender Bauleitplan, der die beabsichtigte städtebauliche Entwicklung einer Gemeinde darstellt.",
    beschreibung: "Der Flächennutzungsplan (F-Plan) ist der vorbereitende Bauleitplan einer Gemeinde. Er stellt die beabsichtigte Art der Bodennutzung für das gesamte Gemeindegebiet dar – Wohnbauflächen, Gewerbeflächen, Grünflächen und Verkehrsflächen. Aus ihm wird der verbindliche Bebauungsplan entwickelt. Er ist nicht rechtsverbindlich für den einzelnen Bürger.",
    verwandteBegriffe: ["Bebauungsplan", "Bauplanungsrecht", "Bauerwartungsland"]
  },
  {
    slug: "gleitzinsdarlehen",
    begriff: "Gleitzinsdarlehen",
    kategorie: "Finanzierung",
    definition: "Ein Darlehen mit variablem Zinssatz, der sich an einem Referenzzinssatz orientiert.",
    beschreibung: "Ein Gleitzinsdarlehen ist ein Kredit ohne feste Zinsbindung, dessen Zinssatz sich an einem Referenzzinssatz (z. B. EURIBOR) orientiert und regelmäßig angepasst wird. Es bietet Flexibilität und kann bei sinkenden Zinsen vorteilhaft sein, birgt aber das Risiko steigender Raten bei Zinserhöhungen.",
    verwandteBegriffe: ["Variabler Zins", "EURIBOR", "Zinsänderungsrisiko"]
  },
  {
    slug: "investorenfinanzierung",
    begriff: "Investorenfinanzierung",
    kategorie: "Finanzierung",
    definition: "Eine Baufinanzierung für den Erwerb von Immobilien als Kapitalanlage zur Vermietung.",
    beschreibung: "Die Investorenfinanzierung richtet sich an Käufer, die eine Immobilie als Kapitalanlage zur Vermietung erwerben. Banken bewerten dabei neben der Bonität des Kreditnehmers auch die erwarteten Mieteinnahmen und die Nachhaltigkeit der Vermietung. Die Konditionen können sich von der Eigennutzerfinanzierung unterscheiden.",
    verwandteBegriffe: ["Rendite", "Ertragswert", "Kapitaldienstfähigkeit"]
  },
  {
    slug: "kommunalobligation",
    begriff: "Kommunalobligation",
    kategorie: "Finanzierung",
    definition: "Eine Schuldverschreibung, die durch Forderungen gegen die öffentliche Hand besichert ist.",
    beschreibung: "Kommunalobligationen sind festverzinsliche Wertpapiere, die von Pfandbriefbanken ausgegeben und durch Kredite an Bund, Länder oder Gemeinden besichert werden. Sie dienen – ähnlich wie Pfandbriefe – der Refinanzierung und beeinflussen indirekt die Zinskonditionen am Kapitalmarkt.",
    verwandteBegriffe: ["Pfandbriefe", "Refinanzierung", "Marktzins"]
  },
  {
    slug: "konditionenanpassung",
    begriff: "Konditionenanpassung",
    kategorie: "Finanzierung",
    definition: "Die Neuvereinbarung der Zinssätze und Konditionen eines Darlehens nach Ablauf der Zinsbindungsfrist.",
    beschreibung: "Die Konditionenanpassung erfolgt am Ende der Zinsbindungsfrist, wenn der Kreditnehmer bei seiner bisherigen Bank bleibt (Prolongation). Die Bank unterbreitet ein Angebot mit den neuen Zinskonditionen. Es empfiehlt sich, dieses Angebot mit alternativen Angeboten zu vergleichen, da ein Wechsel der Bank (Umschuldung) oft günstiger ist.",
    verwandteBegriffe: ["Prolongation", "Anschlussfinanzierung", "Konditionen"]
  },
  {
    slug: "notarieller-kaufpreis",
    begriff: "Notarieller Kaufpreis",
    kategorie: "Recht",
    definition: "Der im notariell beurkundeten Kaufvertrag festgelegte Preis für eine Immobilie.",
    beschreibung: "Der notarielle Kaufpreis ist der im Kaufvertrag beurkundete und rechtsverbindliche Preis für die Immobilie. Er bildet die Grundlage für die Berechnung der Grunderwerbsteuer, der Notarkosten und der Maklerprovision. Der notarielle Kaufpreis muss den tatsächlich vereinbarten Preis widerspiegeln.",
    verwandteBegriffe: ["Kaufvertrag", "Grunderwerbsteuer", "Verkehrswert"]
  },
  {
    slug: "objektbeschraenkung",
    begriff: "Objektbeschränkung",
    kategorie: "Finanzierung",
    definition: "Die Bindung bestimmter Kreditkonditionen oder Förderungen an ein konkretes Immobilienobjekt.",
    beschreibung: "Eine Objektbeschränkung liegt vor, wenn ein Darlehen oder eine Förderung nur für ein bestimmtes Objekt verwendet werden darf. Bei KfW-Darlehen oder Bauspardarlehen kann eine Objektbeschränkung bestehen, die die Verwendung der Mittel auf das konkrete Finanzierungsobjekt begrenzt.",
    verwandteBegriffe: ["Beleihungsobjekt", "Finanzierungsplan", "wohnwirtschaftliche Zwecke"]
  },
  {
    slug: "realkreditinstitut",
    begriff: "Realkreditinstitut",
    kategorie: "Finanzierung",
    definition: "Ein Kreditinstitut, das sich auf die Vergabe von durch Grundpfandrechte besicherten Darlehen spezialisiert hat.",
    beschreibung: "Ein Realkreditinstitut (heute meist Pfandbriefbank) vergibt langfristige Darlehen, die durch Grundpfandrechte an Immobilien besichert sind. Die Beleihungsgrenze bei erstrangigen Realkrediten liegt bei 60 % des Beleihungswerts. Realkreditinstitute refinanzieren sich über die Ausgabe von Pfandbriefen.",
    verwandteBegriffe: ["Hypothekenbank", "Pfandbriefe", "Beleihungsgrenze", "Realkredit"]
  },
  {
    slug: "schuldnertausch",
    begriff: "Schuldnertausch",
    kategorie: "Finanzierung",
    definition: "Die Übertragung der Schuldnerstellung in einem bestehenden Darlehensvertrag auf eine andere Person.",
    beschreibung: "Beim Schuldnertausch übernimmt ein neuer Kreditnehmer ein bestehendes Darlehen. Dies kommt z. B. beim Verkauf einer finanzierten Immobilie vor, wenn der Käufer das bestehende Darlehen des Verkäufers übernimmt. Die Bank muss dem Schuldnertausch zustimmen und prüft die Bonität des neuen Schuldners.",
    verwandteBegriffe: ["Schuldübernahme", "Kreditvertrag", "Schuldner"]
  },
  {
    slug: "sparphase",
    begriff: "Sparphase",
    kategorie: "Finanzierung",
    definition: "Der Zeitraum beim Bausparen, in dem das Guthaben durch regelmäßige Einzahlungen aufgebaut wird.",
    beschreibung: "Die Sparphase ist der erste Abschnitt eines Bausparvertrags. In dieser Phase zahlt der Bausparer regelmäßige Beiträge ein, bis das erforderliche Mindestguthaben (meist 40–50 % der Bausparsumme) erreicht ist. Die Sparphase dauert je nach Tarif und Einzahlungshöhe mehrere Jahre. Das Guthaben wird mit dem tariflichen Guthabenzins verzinst.",
    verwandteBegriffe: ["Bausparen", "Bausparsumme", "Zuteilung", "Bewertungszahl"]
  },
  {
    slug: "tilgungsfreie-jahre",
    begriff: "Tilgungsfreie Jahre",
    kategorie: "Tilgung",
    definition: "Ein vereinbarter Zeitraum zu Beginn der Darlehenslaufzeit, in dem nur Zinsen, aber keine Tilgung gezahlt wird.",
    beschreibung: "Tilgungsfreie Jahre (auch tilgungsfreie Anlaufzeit) können zu Beginn eines Darlehens vereinbart werden. In dieser Zeit werden nur die Zinsen gezahlt, die Tilgung beginnt erst danach. Dies kann bei Neubauten sinnvoll sein, wenn parallel noch Miete gezahlt wird. Die Gesamtkosten des Darlehens erhöhen sich dadurch.",
    verwandteBegriffe: ["Tilgung", "Tilgungsaussetzung", "Rate"]
  },
  {
    slug: "vorfaelligkeitsschutz",
    begriff: "Vorfälligkeitsschutz",
    kategorie: "Finanzierung",
    definition: "Eine vertragliche Vereinbarung, die den Kreditnehmer vor oder bei einer Vorfälligkeitsentschädigung schützt.",
    beschreibung: "Der Vorfälligkeitsschutz ist eine vertragliche Option, die das Risiko einer Vorfälligkeitsentschädigung bei vorzeitiger Darlehensrückzahlung reduziert oder ausschließt. Er kann als Versicherung oder als Vertragsklausel gestaltet sein. Ein guter Vorfälligkeitsschutz bietet Flexibilität bei Immobilienverkauf oder Umfinanzierung.",
    verwandteBegriffe: ["Vorfälligkeitsentschädigung", "Sondertilgung", "Umschuldung"]
  },
  {
    slug: "vorschaltdarlehen",
    begriff: "Vorschaltdarlehen",
    kategorie: "Finanzierung",
    definition: "Ein Darlehen, das die Zeit bis zur Zuteilung eines Bausparvertrags überbrückt.",
    beschreibung: "Ein Vorschaltdarlehen (auch Vorfinanzierungskredit) dient der Überbrückung der Zeit bis zur Zuteilung eines Bausparvertrags. Der Kreditnehmer zahlt nur die Zinsen auf das Vorschaltdarlehen und die Sparraten in den Bausparvertrag. Bei Zuteilung löst das Bauspardarlehen das Vorschaltdarlehen ab.",
    verwandteBegriffe: ["Vorfinanzierungskredit", "Bausparen", "Zuteilung", "Zwischenfinanzierung"]
  },
  {
    slug: "wohnraum-modernisieren",
    begriff: "Wohnraum Modernisieren",
    kategorie: "Förderung",
    definition: "Ein Förderprogramm für die energetische und altersgerechte Modernisierung von Wohngebäuden.",
    beschreibung: "Unter dem Oberbegriff ‚Wohnraum Modernisieren' bieten KfW und Landesbanken zinsgünstige Darlehen und Zuschüsse für Modernisierungsmaßnahmen an: energetische Sanierung, Barrierefreiheit, Einbruchschutz und Anpassung an den Klimawandel. Die Förderkonditionen und -programme ändern sich regelmäßig.",
    verwandteBegriffe: ["Wohnungsbauförderung", "Renovierung", "wohnwirtschaftliche Zwecke"]
  },
  {
    slug: "zinsaufschlag-der-banken",
    begriff: "Zinsaufschlag der Banken",
    kategorie: "Zinsen",
    definition: "Ein zusätzlicher Aufschlag auf den Basiszins, den Banken je nach Risikobewertung des Kreditnehmers erheben.",
    beschreibung: "Der Zinsaufschlag ist die Marge, die eine Bank auf ihren Refinanzierungszins aufschlägt. Er wird individuell kalkuliert und hängt von der Bonität des Kreditnehmers, dem Beleihungsauslauf, der Zinsbindungsfrist und dem Risikoprofil ab. Ein höherer Beleihungsauslauf oder schwächere Bonität führen zu höheren Zinsaufschlägen.",
    verwandteBegriffe: ["Kreditrisiko", "Beleihungsauslauf", "Konditionen"]
  },
  {
    slug: "zusatzsicherheit",
    begriff: "Zusatzsicherheit",
    kategorie: "Sicherheit",
    definition: "Eine weitere Sicherheit neben der Hauptsicherheit, die die Bank zur Absicherung des Darlehens verlangt.",
    beschreibung: "Eine Zusatzsicherheit wird von der Bank gefordert, wenn die Hauptsicherheit (z. B. die finanzierte Immobilie) nicht ausreicht, um das Darlehen vollständig abzusichern. Zusatzsicherheiten können weitere Immobilien, Lebensversicherungen, Bürgschaften, Wertpapiere oder Sparverträge sein.",
    verwandteBegriffe: ["Beleihungsauslauf", "Bürgschaft", "Grundschuld"]
  },
  {
    slug: "ueberraschungskosten",
    begriff: "Überraschungskosten",
    kategorie: "Steuern & Kosten",
    definition: "Unvorhergesehene Kosten, die während eines Bauvorhabens oder Immobilienkaufs auftreten können.",
    beschreibung: "Überraschungskosten sind nicht eingeplante Ausgaben, die bei Bauvorhaben oder Immobilienkäufen auftreten können: versteckte Baumängel, Altlasten im Boden, notwendige Sondergutachten oder gestiegene Materialpreise. Es wird empfohlen, eine Kostenreserve von mindestens 10–15 % der Gesamtkosten einzuplanen.",
    verwandteBegriffe: ["Baurisiken", "Baukosten", "Finanzierungsplan"]
  },
  {
    slug: "kaufvertrag",
    begriff: "Kaufvertrag",
    kategorie: "Recht",
    definition: "Der notariell beurkundete Vertrag über den Kauf einer Immobilie.",
    beschreibung: "Der Kaufvertrag für Immobilien muss in Deutschland notariell beurkundet werden (§ 311b BGB). Er regelt Kaufpreis, Zahlungsmodalitäten, Übergabetermin, Gewährleistung und alle weiteren Rechte und Pflichten von Käufer und Verkäufer. Der Notar veranlasst nach Vertragsabschluss die Eigentumsumschreibung im Grundbuch.",
    verwandteBegriffe: ["Notarieller Kaufpreis", "Grundbuch", "Grunderwerbsteuer"]
  },
  {
    slug: "grundbuchauszug",
    begriff: "Grundbuchauszug",
    kategorie: "Grundstück",
    definition: "Eine amtliche Abschrift aller Eintragungen zu einem bestimmten Grundstück aus dem Grundbuch.",
    beschreibung: "Der Grundbuchauszug ist eine beglaubigte Kopie des Grundbuchblatts und enthält alle relevanten Informationen zu einer Immobilie: Eigentümer, Grundstücksgröße, Belastungen, Grundpfandrechte und Vormerkungen. Er wird für die Baufinanzierung benötigt, da die Bank darüber die Sicherheitenlage prüft.",
    verwandteBegriffe: ["Grundbuch", "Grundbuchamt", "Grundbucheinsicht"]
  },
  {
    slug: "erbpacht",
    begriff: "Erbpacht",
    kategorie: "Grundstück",
    definition: "Der umgangssprachliche Begriff für das Erbbaurecht, das die Nutzung eines fremden Grundstücks gegen Zahlung ermöglicht.",
    beschreibung: "Erbpacht ist der umgangssprachliche Begriff für das Erbbaurecht. Es erlaubt, auf einem fremden Grundstück ein Gebäude zu errichten und zu nutzen, ohne das Grundstück kaufen zu müssen. Dafür wird ein regelmäßiger Erbbauzins an den Grundstückseigentümer gezahlt. Typische Laufzeiten betragen 60–99 Jahre.",
    verwandteBegriffe: ["Erbbaurecht", "Erbbauzins", "Grundstück"]
  },
  {
    slug: "bonitaet",
    begriff: "Bonität",
    kategorie: "Finanzierung",
    definition: "Die Kreditwürdigkeit eines Darlehensnehmers, die die Fähigkeit und Bereitschaft zur Rückzahlung eines Kredits beschreibt.",
    beschreibung: "Die Bonität (Kreditwürdigkeit) beschreibt, wie wahrscheinlich es ist, dass ein Kreditnehmer seinen Zahlungsverpflichtungen nachkommt. Die Bank prüft Einkommen, bestehende Verbindlichkeiten, Vermögen, Berufsstand und SCHUFA-Score. Eine gute Bonität führt zu besseren Zinskonditionen, eine schlechte kann zur Kreditablehnung führen.",
    verwandteBegriffe: ["Kreditfähigkeit", "Kapitaldienstfähigkeit", "Kreditrisiko"]
  },
  {
    slug: "prolongation",
    begriff: "Prolongation",
    kategorie: "Finanzierung",
    definition: "Die Verlängerung eines bestehenden Darlehens bei der gleichen Bank zu neuen Zinskonditionen.",
    beschreibung: "Die Prolongation ist die Verlängerung eines Baudarlehens bei der bisherigen Bank nach Ablauf der Zinsbindungsfrist. Die Bank unterbreitet ein Prolongationsangebot mit neuen Konditionen. Vorteile sind der geringe Aufwand (keine neue Grundschuldbestellung), Nachteil ist, dass die Konditionen oft nicht die besten am Markt sind.",
    verwandteBegriffe: ["Anschlussfinanzierung", "Konditionenanpassung", "Umschuldung"]
  },
  {
    slug: "zwangsvollstreckung",
    begriff: "Zwangsvollstreckung",
    kategorie: "Recht",
    definition: "Die staatliche Durchsetzung von Zahlungsansprüchen des Gläubigers gegen den Schuldner.",
    beschreibung: "Die Zwangsvollstreckung ist das staatliche Verfahren zur Durchsetzung von Forderungen. Bei Immobilien kann die Bank die Zwangsvollstreckung in das Grundstück betreiben, wenn der Kreditnehmer seinen Zahlungsverpflichtungen nicht nachkommt. Die Grundschuldbestellung enthält in der Regel eine Unterwerfung unter die sofortige Zwangsvollstreckung.",
    verwandteBegriffe: ["Zwangsversteigerung", "Grundschuld", "Schuldner"]
  },
  {
    slug: "schuldner",
    begriff: "Schuldner",
    kategorie: "Recht",
    definition: "Die Person oder das Unternehmen, das aus einem Schuldverhältnis zur Leistung verpflichtet ist.",
    beschreibung: "Im Kontext der Baufinanzierung ist der Schuldner (auch Darlehensnehmer oder Kreditnehmer) die Person, die ein Darlehen aufgenommen hat und zur Rückzahlung von Zins und Tilgung verpflichtet ist. Bei gemeinsamer Kreditaufnahme sind beide Partner als Gesamtschuldner für die gesamte Schuld haftbar.",
    verwandteBegriffe: ["Gesamtschuldner", "Kreditvertrag", "Bürgschaft"]
  },
  {
    slug: "grundschuldbestellung",
    begriff: "Grundschuldbestellung",
    kategorie: "Sicherheit",
    definition: "Die notarielle Urkunde, mit der eine Grundschuld zugunsten der Bank im Grundbuch eingetragen wird.",
    beschreibung: "Die Grundschuldbestellung ist der notarielle Vorgang, bei dem eine Grundschuld als Sicherheit für die kreditgebende Bank im Grundbuch eingetragen wird. Die Urkunde enthält die Höhe der Grundschuld, den Grundschuldzins und in der Regel eine Unterwerfung unter die sofortige Zwangsvollstreckung. Die Kosten trägt der Kreditnehmer.",
    verwandteBegriffe: ["Grundschuld", "Grundbuch", "Grundschuldzins"]
  },
  {
    slug: "grundbuchamt",
    begriff: "Grundbuchamt",
    kategorie: "Grundstück",
    definition: "Die Abteilung des Amtsgerichts, die das Grundbuch führt und Eintragungen vornimmt.",
    beschreibung: "Das Grundbuchamt ist eine Abteilung des zuständigen Amtsgerichts und führt das Grundbuch. Es nimmt Eintragungen, Änderungen und Löschungen vor, z. B. die Eigentumsumschreibung beim Kauf oder die Eintragung einer Grundschuld. Eintragungen im Grundbuch können nur auf Antrag und mit notarieller Bewilligung vorgenommen werden.",
    verwandteBegriffe: ["Grundbuch", "Grundbuchauszug", "Grundbucheinsicht"]
  },
  {
    slug: "abgeschlossenheitsbescheinigung",
    begriff: "Abgeschlossenheitsbescheinigung",
    kategorie: "Recht",
    definition: "Eine behördliche Bescheinigung, dass Wohnungen oder Gewerbeeinheiten baulich voneinander abgeschlossen sind.",
    beschreibung: "Die Abgeschlossenheitsbescheinigung wird von der Bauaufsichtsbehörde ausgestellt und bestätigt, dass die Wohnungen oder Gewerbeeinheiten eines Gebäudes baulich voneinander getrennt und eigenständig nutzbar sind. Sie ist Voraussetzung für die Aufteilung eines Gebäudes in Wohnungseigentum und die Erstellung einer Teilungserklärung.",
    verwandteBegriffe: ["Teilungserklärung", "Aufteilungsplan", "Wohnungseigentum"]
  },
  {
    slug: "grundpfandrecht",
    begriff: "Grundpfandrecht",
    kategorie: "Sicherheit",
    definition: "Ein im Grundbuch eingetragenes Recht an einem Grundstück, das als Sicherheit für eine Forderung dient.",
    beschreibung: "Grundpfandrechte sind dingliche Rechte an Grundstücken, die der Absicherung von Forderungen dienen. Die wichtigsten Formen sind Grundschuld und Hypothek. Sie geben dem Gläubiger das Recht, das Grundstück im Falle der Nichterfüllung der Forderung zu verwerten (z. B. durch Zwangsversteigerung).",
    verwandteBegriffe: ["Grundschuld", "Hypothek", "Grundbuch"]
  },
  {
    slug: "flurstueck",
    begriff: "Flurstück",
    kategorie: "Grundstück",
    definition: "Ein amtlich vermessener und im Liegenschaftskataster erfasster Teil der Erdoberfläche.",
    beschreibung: "Das Flurstück ist die kleinste Einheit des Liegenschaftskatasters und wird durch eine Flurstücknummer eindeutig identifiziert. Ein Grundstück im Grundbuch kann aus einem oder mehreren Flurstücken bestehen. Die Vermessung und Nummerierung erfolgt durch das Katasteramt.",
    verwandteBegriffe: ["Flurkarte", "Grundstück", "Grundbuch"]
  },
  {
    slug: "loeschungsbewilligung",
    begriff: "Löschungsbewilligung",
    kategorie: "Sicherheit",
    definition: "Die Erklärung des Gläubigers, dass ein Grundpfandrecht aus dem Grundbuch gelöscht werden darf.",
    beschreibung: "Die Löschungsbewilligung ist die Erklärung der Bank, dass sie der Löschung der zu ihren Gunsten eingetragenen Grundschuld oder Hypothek aus dem Grundbuch zustimmt. Sie wird nach vollständiger Tilgung des Darlehens erteilt. Die Löschung muss durch einen Notar beantragt werden und verursacht Notar- und Grundbuchgebühren.",
    verwandteBegriffe: ["Grundschuld", "Grundbuch", "Ablösung"]
  },
  {
    slug: "wohnrecht",
    begriff: "Wohnrecht",
    kategorie: "Recht",
    definition: "Das im Grundbuch gesicherte Recht, eine Immobilie oder Teile davon zu bewohnen.",
    beschreibung: "Das Wohnrecht (§ 1093 BGB) ist eine beschränkte persönliche Dienstbarkeit, die dem Berechtigten erlaubt, ein Gebäude oder Teile davon zu bewohnen. Im Gegensatz zum Nießbrauch darf der Berechtigte die Immobilie nicht vermieten. Das Wohnrecht wird im Grundbuch eingetragen und mindert den Verkehrswert der Immobilie erheblich.",
    verwandteBegriffe: ["Nießbrauch", "Grundbuch", "Grunddienstbarkeiten"]
  },
  {
    slug: "qng",
    begriff: "QNG",
    kategorie: "Förderung",
    definition: "Das Qualitätssiegel Nachhaltiges Gebäude, das Voraussetzung für bestimmte KfW-Förderungen ist.",
    beschreibung: "Das QNG-Siegel (Qualitätssiegel Nachhaltiges Gebäude) wird vom Bundesministerium für Wohnen vergeben und bescheinigt, dass ein Gebäude besondere Anforderungen an Nachhaltigkeit, Energieeffizienz und Ressourcenschonung erfüllt. Es ist Voraussetzung für bestimmte KfW-Förderprogramme (z. B. Klimafreundlicher Neubau) und wird durch akkreditierte Zertifizierungsstellen vergeben.",
    verwandteBegriffe: ["Wohnungsbauförderung", "Baukosten", "Fertighaus"]
  },
  {
    slug: "courtage",
    begriff: "Courtage",
    kategorie: "Steuern & Kosten",
    definition: "Die Vermittlungsgebühr, die ein Makler für die erfolgreiche Vermittlung eines Immobiliengeschäfts erhält.",
    beschreibung: "Courtage ist ein Synonym für Maklerprovision. Sie wird nur bei erfolgreicher Vermittlung fällig (Erfolgsprinzip). Seit dem Gesetz zur Teilung der Maklerprovision (2020) müssen Käufer und Verkäufer bei Wohnimmobilien jeweils mindestens die Hälfte der Courtage tragen.",
    verwandteBegriffe: ["Maklerprovision", "Kaufnebenkosten", "Makler- und Bauträgerverordnung"]
  },
  {
    slug: "rueckauflassungsvormerkung",
    begriff: "Rückauflassungsvormerkung",
    kategorie: "Recht",
    definition: "Eine Eintragung im Grundbuch, die dem Verkäufer unter bestimmten Bedingungen ein Recht auf Rückübertragung der Immobilie sichert.",
    beschreibung: "Die Rückauflassungsvormerkung wird im Grundbuch eingetragen und sichert dem Verkäufer das Recht, die Immobilie unter bestimmten Bedingungen zurückzufordern, z. B. wenn der Käufer vereinbarte Auflagen nicht erfüllt. Sie ist häufig bei Grundstücksverkäufen durch Gemeinden anzutreffen, die eine zeitnahe Bebauung zur Bedingung machen.",
    verwandteBegriffe: ["Grundbuch", "Kaufvertrag", "Vorkaufsrecht"]
  },
  {
    slug: "instandhaltungsruecklage",
    begriff: "Instandhaltungsrücklage",
    kategorie: "Steuern & Kosten",
    definition: "Eine finanzielle Rücklage der Eigentümergemeinschaft für die Erhaltung des Gemeinschaftseigentums.",
    beschreibung: "Die Instandhaltungsrücklage (auch Erhaltungsrücklage) wird von der Wohnungseigentümergemeinschaft gebildet, um künftige Instandhaltungs- und Reparaturmaßnahmen am Gemeinschaftseigentum finanzieren zu können. Die monatlichen Beiträge sind Teil des Hausgeldes. Eine angemessene Rücklage beträgt ca. 7–10 € pro m² Wohnfläche und Jahr.",
    verwandteBegriffe: ["Gemeinschaftseigentum", "Instandhaltungskosten", "Wohnungseigentumsgesetz"]
  },
  {
    slug: "zwischenfinanzierung",
    begriff: "Zwischenfinanzierung",
    kategorie: "Finanzierung",
    definition: "Ein kurzfristiges Darlehen zur Überbrückung, bis die endgültige Finanzierung bereitsteht.",
    beschreibung: "Eine Zwischenfinanzierung überbrückt die Zeit, bis eigene Mittel (z. B. aus einem Immobilienverkauf, einer Lebensversicherung oder der Zuteilung eines Bausparvertrags) verfügbar sind. Der Kreditnehmer zahlt nur Zinsen; die Tilgung erfolgt durch die erwarteten Mittel. Zwischenfinanzierungen sind kurzfristig (meist 1–2 Jahre) und etwas teurer als langfristige Darlehen.",
    verwandteBegriffe: ["Vorfinanzierungskredit", "Vorschaltdarlehen", "Bausparen"]
  },
  {
    slug: "negativbescheinigung",
    begriff: "Negativbescheinigung",
    kategorie: "Recht",
    definition: "Eine behördliche Bescheinigung, dass bestimmte Rechte oder Einschränkungen nicht bestehen oder nicht ausgeübt werden.",
    beschreibung: "Die Negativbescheinigung ist eine amtliche Bestätigung, dass ein bestimmter Umstand nicht vorliegt, z. B. dass die Gemeinde kein Vorkaufsrecht ausübt oder dass keine Sanierungssatzung besteht. Sie wird im Rahmen der Kaufabwicklung benötigt und vom Notar angefordert.",
    verwandteBegriffe: ["Negativbescheid", "Vorkaufsrecht", "Kaufvertrag"]
  },
  {
    slug: "aufteilungsplan",
    begriff: "Aufteilungsplan",
    kategorie: "Recht",
    definition: "Eine Bauzeichnung, die die Aufteilung eines Gebäudes in einzelne Eigentumseinheiten darstellt.",
    beschreibung: "Der Aufteilungsplan ist eine mit Abgeschlossenheitsbescheinigung versehene Bauzeichnung, die die räumliche Abgrenzung der einzelnen Sonder- und Teileigentumseinheiten eines Gebäudes darstellt. Jede Einheit erhält eine Nummer. Der Aufteilungsplan ist Teil der Teilungserklärung und wird im Grundbuch hinterlegt.",
    verwandteBegriffe: ["Teilungserklärung", "Abgeschlossenheitsbescheinigung", "Sondereigentum"]
  },
  {
    slug: "abtretung",
    begriff: "Abtretung",
    kategorie: "Finanzierung",
    definition: "Die Übertragung einer Forderung oder eines Rechts auf einen neuen Gläubiger.",
    beschreibung: "Bei einer Abtretung (Zession) überträgt der bisherige Gläubiger seine Forderung auf einen neuen Gläubiger. Im Baufinanzierungsbereich werden häufig Ansprüche aus Lebensversicherungen oder Bausparverträgen an die Bank abgetreten, um als zusätzliche Sicherheit zu dienen. Auch die Grundschuld kann abgetreten werden.",
    verwandteBegriffe: ["Grundschuld", "Zusatzsicherheit", "Kreditvertrag"]
  },
  {
    slug: "buergschaft",
    begriff: "Bürgschaft",
    kategorie: "Sicherheit",
    definition: "Die vertragliche Verpflichtung eines Dritten, für die Schuld des Kreditnehmers einzustehen.",
    beschreibung: "Bei einer Bürgschaft verpflichtet sich ein Dritter (Bürge), die Schuld des Kreditnehmers zu übernehmen, falls dieser nicht zahlen kann. In der Baufinanzierung werden Bürgschaften als Zusatzsicherheit eingesetzt, wenn z. B. das Eigenkapital nicht ausreicht. Besondere Formen sind die selbstschuldnerische Bürgschaft und die Ausfallbürgschaft.",
    verwandteBegriffe: ["Ausfallbürgschaft", "Zusatzsicherheit", "Gesamtschuldner"]
  },
  {
    slug: "wohnungseigentum",
    begriff: "Wohnungseigentum",
    kategorie: "Recht",
    definition: "Das Sondereigentum an einer Wohnung in Verbindung mit dem Miteigentumsanteil am Gemeinschaftseigentum.",
    beschreibung: "Wohnungseigentum entsteht durch die Aufteilung eines Gebäudes gemäß dem Wohnungseigentumsgesetz (WEG). Es besteht aus dem Sondereigentum an einer Wohnung und einem Miteigentumsanteil am Gemeinschaftseigentum und Grundstück. Der Eigentümer hat Rechte und Pflichten gegenüber der Eigentümergemeinschaft.",
    verwandteBegriffe: ["Sondereigentum", "Gemeinschaftseigentum", "Wohnungseigentumsgesetz"]
  },
  {
    slug: "ausfallbuergschaft",
    begriff: "Ausfallbürgschaft",
    kategorie: "Sicherheit",
    definition: "Eine Bürgschaft, bei der der Bürge erst haftet, wenn die Bank erfolglos gegen den Hauptschuldner vollstreckt hat.",
    beschreibung: "Bei einer Ausfallbürgschaft haftet der Bürge erst, wenn die Zwangsvollstreckung gegen den Hauptschuldner erfolglos geblieben ist. Im Gegensatz zur selbstschuldnerischen Bürgschaft hat der Bürge hier die Einrede der Vorausklage. Ausfallbürgschaften werden auch von öffentlichen Stellen (z. B. Landesbürgschaftsbanken) zur Förderung des Wohnungsbaus übernommen.",
    verwandteBegriffe: ["Bürgschaft", "Zwangsvollstreckung", "Zusatzsicherheit"]
  },
  {
    slug: "kreditvertrag",
    begriff: "Kreditvertrag",
    kategorie: "Finanzierung",
    definition: "Der rechtsverbindliche Vertrag zwischen Bank und Kreditnehmer über die Gewährung eines Darlehens.",
    beschreibung: "Der Kreditvertrag (Darlehensvertrag) regelt alle Bedingungen der Baufinanzierung: Darlehensbetrag, Zinssatz, Zinsbindungsfrist, Tilgung, Sondertilgungsmöglichkeiten, Sicherheiten und Widerrufsrecht. Bei Verbraucher-Immobiliardarlehen gelten besondere Informationspflichten und ein 14-tägiges Widerrufsrecht.",
    verwandteBegriffe: ["Kreditbedingungen", "Konditionen", "Vorvertragliche Informationen"]
  },
  {
    slug: "teileigentum",
    begriff: "Teileigentum",
    kategorie: "Recht",
    definition: "Das Sondereigentum an nicht zu Wohnzwecken dienenden Räumen in Verbindung mit einem Miteigentumsanteil.",
    beschreibung: "Teileigentum ist das Pendant zum Wohnungseigentum für Räume, die nicht zu Wohnzwecken genutzt werden, z. B. Gewerberäume, Praxen oder Garagen. Es unterliegt ebenfalls dem Wohnungseigentumsgesetz und ist in der Teilungserklärung festgelegt.",
    verwandteBegriffe: ["Wohnungseigentum", "Sondereigentum", "Teilungserklärung"]
  },
  {
    slug: "ertragswert",
    begriff: "Ertragswert",
    kategorie: "Bewertung",
    definition: "Der Wert einer Immobilie, der sich aus den nachhaltig erzielbaren Erträgen (Mieteinnahmen) ergibt.",
    beschreibung: "Der Ertragswert wird im Ertragswertverfahren ermittelt und basiert auf den nachhaltig erzielbaren Mieteinnahmen einer Immobilie. Er setzt sich aus dem Bodenwert und dem Gebäudeertragswert zusammen. Das Verfahren wird vor allem bei vermieteten Immobilien und Gewerbeimmobilien angewendet.",
    verwandteBegriffe: ["Verkehrswert", "Sachwertverfahren", "Rendite", "Wertermittlung"]
  },
  {
    slug: "muskelhypothek",
    begriff: "Muskelhypothek",
    kategorie: "Finanzierung",
    definition: "Eigenleistungen des Bauherrn am Bau, die als Eigenkapital angerechnet werden können.",
    beschreibung: "Die Muskelhypothek bezeichnet handwerkliche Eigenleistungen des Bauherrn, die die Baukosten senken und von der Bank als Eigenkapital anerkannt werden können. Realistisch sind Einsparungen von 5–15 % der Baukosten bei Arbeiten wie Malern, Tapezieren, Bodenbeläge verlegen oder Gartengestaltung. Banken akzeptieren meist nur fachgerecht ausführbare Arbeiten.",
    verwandteBegriffe: ["Eigenkapital", "Baukosten", "Finanzierungsplan"]
  },
  {
    slug: "kreditfaehigkeit",
    begriff: "Kreditfähigkeit",
    kategorie: "Finanzierung",
    definition: "Die rechtliche Fähigkeit einer Person, wirksam Kreditverträge abzuschließen.",
    beschreibung: "Die Kreditfähigkeit beschreibt die rechtliche Fähigkeit einer Person, einen Darlehensvertrag wirksam abschließen zu können. Kreditfähig sind volljährige, voll geschäftsfähige natürliche Personen sowie juristische Personen. Die Kreditfähigkeit ist von der Kreditwürdigkeit (Bonität) zu unterscheiden, die die wirtschaftliche Leistungsfähigkeit beschreibt.",
    verwandteBegriffe: ["Bonität", "Kreditvertrag", "Legitimation"]
  },
  {
    slug: "bodenwert",
    begriff: "Bodenwert",
    kategorie: "Bewertung",
    definition: "Der Wert eines Grundstücks ohne Berücksichtigung der darauf befindlichen Gebäude.",
    beschreibung: "Der Bodenwert ist der Wert des unbebauten oder gedanklich freigelegten Grundstücks. Er wird anhand von Bodenrichtwerten ermittelt, die von den örtlichen Gutachterausschüssen regelmäßig veröffentlicht werden. Der Bodenwert fließt in das Sachwert- und Ertragswertverfahren ein und ist Grundlage für die steuerliche Bewertung.",
    verwandteBegriffe: ["Verkehrswert", "Grundstück", "Sachwertverfahren"]
  },
  {
    slug: "festdarlehen",
    begriff: "Festdarlehen",
    kategorie: "Finanzierung",
    definition: "Ein Darlehen, bei dem während der Laufzeit nur Zinsen gezahlt werden und die Tilgung am Ende in einer Summe erfolgt.",
    beschreibung: "Beim Festdarlehen (auch endfälliges Darlehen oder Fälligkeitsdarlehen) werden während der Laufzeit nur Zinsen gezahlt. Die Tilgung erfolgt am Laufzeitende in einer Summe, z. B. aus einem Bausparvertrag oder einer Lebensversicherung. Die Gesamtzinskosten sind höher als bei einem Annuitätendarlehen, da die Restschuld konstant bleibt.",
    verwandteBegriffe: ["Tilgungsaussetzung", "Tilgungssurrogat", "Annuität"]
  },
  {
    slug: "beleihung",
    begriff: "Beleihung",
    kategorie: "Finanzierung",
    definition: "Die Belastung einer Immobilie mit einem Grundpfandrecht zugunsten der kreditgebenden Bank.",
    beschreibung: "Die Beleihung bezeichnet den Vorgang, bei dem eine Immobilie als Sicherheit für einen Kredit eingesetzt wird, indem eine Grundschuld oder Hypothek im Grundbuch eingetragen wird. Die Höhe der Beleihung richtet sich nach dem Beleihungswert der Immobilie und der Beleihungsgrenze der Bank.",
    verwandteBegriffe: ["Beleihungswert", "Beleihungsauslauf", "Beleihungsgrenze", "Grundschuld"]
  },
  {
    slug: "rangruecktritt",
    begriff: "Rangrücktritt",
    kategorie: "Sicherheit",
    definition: "Die Vereinbarung, dass ein im Grundbuch vorrangig eingetragener Gläubiger seinen Rang zugunsten eines anderen Gläubigers aufgibt.",
    beschreibung: "Beim Rangrücktritt tritt ein im Grundbuch vorrangig eingetragener Gläubiger hinter einen nachrangigen zurück. Dies kann erforderlich sein, wenn ein neues Darlehen aufgenommen wird und die neue Bank einen erstrangigen Platz im Grundbuch verlangt. Der Rangrücktritt bedarf der Zustimmung des zurücktretenden Gläubigers.",
    verwandteBegriffe: ["Rangstelle", "Grundbuch", "Grundschuld"]
  },
  {
    slug: "realkredit",
    begriff: "Realkredit",
    kategorie: "Finanzierung",
    definition: "Ein langfristiger Kredit, der durch ein Grundpfandrecht an einer Immobilie besichert ist.",
    beschreibung: "Der Realkredit ist ein langfristiges Darlehen, das durch eine Grundschuld oder Hypothek auf eine Immobilie besichert wird. Er muss innerhalb der Beleihungsgrenze (60 % des Beleihungswerts bei erstrangigen Realkrediten) liegen. Realkredite bilden den Kern der Baufinanzierung und bieten die günstigsten Zinskonditionen.",
    verwandteBegriffe: ["Realkreditinstitut", "Beleihungsgrenze", "Personalkredit"]
  },
  {
    slug: "grundbucheinsicht",
    begriff: "Grundbucheinsicht",
    kategorie: "Grundstück",
    definition: "Das Recht, den Inhalt des Grundbuchs einzusehen, wenn ein berechtigtes Interesse nachgewiesen wird.",
    beschreibung: "Die Grundbucheinsicht ermöglicht es, die Eintragungen zu einem bestimmten Grundstück einzusehen. Ein berechtigtes Interesse muss nachgewiesen werden – z. B. als potenzieller Käufer, Kreditgeber oder Notar. Die Einsicht kann beim Grundbuchamt vor Ort oder teilweise elektronisch erfolgen.",
    verwandteBegriffe: ["Grundbuch", "Grundbuchauszug", "Grundbuchamt"]
  },
  {
    slug: "schuldenuebernahme",
    begriff: "Schuldübernahme",
    kategorie: "Finanzierung",
    definition: "Die Übernahme einer bestehenden Darlehensschuld durch einen neuen Schuldner mit Zustimmung der Bank.",
    beschreibung: "Bei der Schuldübernahme (§ 414 ff. BGB) tritt ein neuer Schuldner an die Stelle des bisherigen Kreditnehmers in ein bestehendes Darlehen ein. Die Bank muss zustimmen. Dies kommt häufig beim Verkauf einer finanzierten Immobilie vor, wenn der Käufer das Darlehen zu den bestehenden Konditionen übernimmt.",
    verwandteBegriffe: ["Schuldnertausch", "Kreditvertrag", "Ablösung"]
  },
  {
    slug: "abloesung",
    begriff: "Ablösung",
    kategorie: "Finanzierung",
    definition: "Die vollständige Rückzahlung eines bestehenden Darlehens, ggf. durch ein neues Darlehen.",
    beschreibung: "Die Ablösung bezeichnet die vollständige Rückzahlung eines Darlehens. Sie kann aus Eigenmitteln, durch ein neues Darlehen (Umschuldung) oder bei Verkauf der Immobilie erfolgen. Während der Zinsbindungsfrist kann die Bank eine Vorfälligkeitsentschädigung verlangen. Nach § 489 BGB kann jedes Darlehen nach 10 Jahren mit 6 Monaten Frist gekündigt werden.",
    verwandteBegriffe: ["Umschuldung", "Vorfälligkeitsentschädigung", "Löschungsbewilligung"]
  },
  {
    slug: "geschlossene-immobilienfonds",
    begriff: "Geschlossene Immobilienfonds",
    kategorie: "Finanzierung",
    definition: "Investmentfonds, die in eine begrenzte Anzahl von Immobilien investieren und nach Zeichnungsende geschlossen werden.",
    beschreibung: "Geschlossene Immobilienfonds (heute: geschlossene Alternative Investmentfonds) sammeln Kapital für ein oder wenige konkrete Immobilienprojekte. Nach Erreichen des Zielvolumens wird der Fonds geschlossen. Anleger werden zu Kommanditisten mit unternehmerischer Beteiligung. Die Laufzeit beträgt oft 10–25 Jahre, ein vorzeitiger Ausstieg ist schwierig.",
    verwandteBegriffe: ["Immobilienfonds", "Offene Immobilienfonds", "Rendite"]
  },
  {
    slug: "zuteilung",
    begriff: "Zuteilung",
    kategorie: "Finanzierung",
    definition: "Der Zeitpunkt, an dem ein Bausparvertrag das angesparte Guthaben und das Bauspardarlehen zur Verfügung stellt.",
    beschreibung: "Die Zuteilung ist der Moment, in dem ein Bausparvertrag zuteilungsreif wird und der Bausparer über sein Guthaben und das zinsgünstige Bauspardarlehen verfügen kann. Voraussetzungen sind das Erreichen des Mindestguthabens, der Mindestspardauer und der erforderlichen Bewertungszahl. Die Zuteilung ist nicht automatisch – sie muss vom Bausparer angenommen werden.",
    verwandteBegriffe: ["Bausparen", "Bausparsumme", "Bewertungszahl", "Sparphase"]
  },
  {
    slug: "finanzierungskosten",
    begriff: "Finanzierungskosten",
    kategorie: "Steuern & Kosten",
    definition: "Die Gesamtheit aller Kosten, die mit der Aufnahme und Bedienung einer Baufinanzierung verbunden sind.",
    beschreibung: "Finanzierungskosten umfassen alle Aufwendungen im Zusammenhang mit einem Baudarlehen: Zinsen, Bereitstellungszinsen, Bearbeitungsgebühren, Notarkosten für die Grundschuldbestellung, Schätzkosten und eventuelle Disagios. Bei vermieteten Immobilien sind Finanzierungskosten als Werbungskosten steuerlich absetzbar.",
    verwandteBegriffe: ["Kreditkosten", "Kapitalkosten", "Geldbeschaffungskosten"]
  },
  {
    slug: "nachfinanzierung",
    begriff: "Nachfinanzierung",
    kategorie: "Finanzierung",
    definition: "Die Aufnahme eines zusätzlichen Darlehens, weil die ursprüngliche Finanzierung nicht ausreicht.",
    beschreibung: "Eine Nachfinanzierung wird erforderlich, wenn die geplanten Kosten überschritten werden und die ursprüngliche Finanzierung nicht ausreicht, z. B. durch Baukostensteigerungen, Sonderwünsche oder unvorhergesehene Ausgaben. Nachfinanzierungen sind meist zu schlechteren Konditionen und höheren Zinsen erhältlich, da die Sicherheiten bereits ausgeschöpft sind.",
    verwandteBegriffe: ["Baukosten", "Überraschungskosten", "Finanzierungsplan"]
  },
  {
    slug: "nichtabnahmeentschaedigung",
    begriff: "Nichtabnahmeentschädigung",
    kategorie: "Finanzierung",
    definition: "Eine Entschädigung, die fällig wird, wenn der Kreditnehmer ein zugesagtes Darlehen nicht oder nicht vollständig abruft.",
    beschreibung: "Die Nichtabnahmeentschädigung kann die Bank verlangen, wenn ein verbindlich zugesagtes Darlehen vom Kreditnehmer nicht abgenommen wird, z. B. weil der Immobilienkauf platzt. Sie entschädigt die Bank für den entgangenen Gewinn und die bereits vorgenommene Refinanzierung. Die Berechnung ähnelt der Vorfälligkeitsentschädigung.",
    verwandteBegriffe: ["Vorfälligkeitsentschädigung", "Kreditvertrag", "Abnahmeverpflichtung"]
  },
  {
    slug: "tilgungssatzwechsel",
    begriff: "Tilgungssatzwechsel",
    kategorie: "Tilgung",
    definition: "Die Möglichkeit, den vereinbarten Tilgungssatz während der Zinsbindungsfrist zu ändern.",
    beschreibung: "Ein Tilgungssatzwechsel ermöglicht die Anpassung der monatlichen Tilgung an veränderte finanzielle Verhältnisse. Er kann die Rate bei Bedarf senken (z. B. bei Einkommensverlust) oder erhöhen (z. B. bei Gehaltserhöhung). Viele Banken bieten ein- bis zweimaligen kostenlosen Tilgungssatzwechsel pro Zinsbindungsperiode an.",
    verwandteBegriffe: ["Tilgungssatz", "Tilgung", "Rate"]
  },
  {
    slug: "vorfinanzierungskredit",
    begriff: "Vorfinanzierungskredit",
    kategorie: "Finanzierung",
    definition: "Ein Darlehen zur Vorfinanzierung eines Bausparvertrags, der noch nicht zuteilungsreif ist.",
    beschreibung: "Der Vorfinanzierungskredit wird aufgenommen, wenn ein Bausparvertrag noch nicht zuteilungsreif ist, die Immobilienfinanzierung aber bereits benötigt wird. Der Kreditnehmer zahlt Zinsen auf den Vorfinanzierungskredit und gleichzeitig die Sparraten in den Bausparvertrag. Bei Zuteilung wird der Vorfinanzierungskredit durch das Bauspardarlehen abgelöst.",
    verwandteBegriffe: ["Vorschaltdarlehen", "Zwischenfinanzierung", "Bausparen"]
  },
  {
    slug: "bausparguthaben",
    begriff: "Bausparguthaben",
    kategorie: "Finanzierung",
    definition: "Das im Bausparvertrag angesparte Guthaben einschließlich der gutgeschriebenen Zinsen.",
    beschreibung: "Das Bausparguthaben ist die Summe aller Einzahlungen in den Bausparvertrag zuzüglich der Guthabenzinsen. Es wird bei Zuteilung ausgezahlt und bildet zusammen mit dem Bauspardarlehen die Bausparsumme. Das Bausparguthaben kann als Eigenkapital in die Baufinanzierung eingebracht werden.",
    verwandteBegriffe: ["Bausparen", "Bausparsumme", "Zuteilung", "Eigenkapital"]
  },
  {
    slug: "abnahmeverpflichtung",
    begriff: "Abnahmeverpflichtung",
    kategorie: "Finanzierung",
    definition: "Die vertragliche Pflicht des Kreditnehmers, ein zugesagtes Darlehen innerhalb einer bestimmten Frist abzurufen.",
    beschreibung: "Die Abnahmeverpflichtung verpflichtet den Kreditnehmer, das verbindlich zugesagte Darlehen innerhalb des vereinbarten Zeitraums abzurufen. Kommt er dieser Pflicht nicht nach, kann die Bank eine Nichtabnahmeentschädigung verlangen. Die Frist beträgt üblicherweise 6–12 Monate und kann verlängert werden.",
    verwandteBegriffe: ["Nichtabnahmeentschädigung", "Kreditvertrag", "Bereitstellungszins"]
  },
  {
    slug: "zinsabschlag",
    begriff: "Zinsabschlag",
    kategorie: "Zinsen",
    definition: "Eine Reduzierung des regulären Zinssatzes als Vergünstigung, z. B. bei hohem Eigenkapital oder kurzer Zinsbindung.",
    beschreibung: "Ein Zinsabschlag ist ein Nachlass auf den Standard-Zinssatz, den die Bank unter bestimmten Voraussetzungen gewährt. Gründe können ein niedriger Beleihungsauslauf, eine kurze Zinsbindungsfrist, besondere Vertriebsaktionen oder die Nutzung bestimmter Produkte sein. Zinsabschläge senken die Gesamtkosten der Finanzierung.",
    verwandteBegriffe: ["Zinsaufschlag der Banken", "Konditionen", "Beleihungsauslauf"]
  },
  {
    slug: "schuldzinsenabzug",
    begriff: "Schuldzinsenabzug",
    kategorie: "Steuern & Kosten",
    definition: "Die steuerliche Absetzbarkeit von Zinszahlungen für Darlehen bei vermieteten Immobilien.",
    beschreibung: "Der Schuldzinsenabzug ermöglicht es Eigentümern vermieteter Immobilien, die gezahlten Darlehenszinsen als Werbungskosten von den Mieteinnahmen abzuziehen. Dies mindert die steuerliche Belastung erheblich. Voraussetzung ist, dass die Schuldzinsen im Zusammenhang mit der Erzielung von Einkünften aus Vermietung und Verpachtung stehen.",
    verwandteBegriffe: ["Schuldzinsen", "Werbungskosten", "Abschreibung"]
  },
  {
    slug: "treuhandzahlung",
    begriff: "Treuhandzahlung",
    kategorie: "Finanzierung",
    definition: "Die Zahlung über ein Treuhandkonto des Notars oder der Bank zur sicheren Abwicklung einer Immobilientransaktion.",
    beschreibung: "Eine Treuhandzahlung erfolgt über ein Treuhänder-Konto (z. B. Notaranderkonto), auf dem der Kaufpreis zwischengelagert wird, bis alle Voraussetzungen für die Eigentumsübertragung erfüllt sind. Dies schützt sowohl Käufer als auch Verkäufer. Die Auszahlungen erfolgen erst nach Prüfung der vertraglich vereinbarten Bedingungen.",
    verwandteBegriffe: ["Notaranderkonto", "Kaufvertrag", "Auszahlungsvoraussetzungen"]
  },
  {
    slug: "tilgungssurrogat",
    begriff: "Tilgungssurrogat",
    kategorie: "Tilgung",
    definition: "Ein Ersatz für die reguläre Darlehenstilgung, z. B. ein Bausparvertrag oder eine Lebensversicherung.",
    beschreibung: "Ein Tilgungssurrogat ist ein Spar- oder Anlagevertrag, dessen Ablaufleistung zur Tilgung eines endfälligen Darlehens verwendet wird. Typische Tilgungssurrogate sind Bausparverträge, Kapitallebensversicherungen oder Fondssparpläne. Während der Darlehenslaufzeit werden nur Zinsen gezahlt und parallel das Tilgungssurrogat bespart.",
    verwandteBegriffe: ["Festdarlehen", "Tilgungsaussetzung", "Bausparen"]
  },
  {
    slug: "anschlusskosten",
    begriff: "Anschlusskosten",
    kategorie: "Steuern & Kosten",
    definition: "Kosten für den Anschluss eines Grundstücks an öffentliche Versorgungsleitungen wie Wasser, Abwasser, Strom und Gas.",
    beschreibung: "Anschlusskosten entstehen für die Herstellung der Verbindung zwischen dem Grundstück und den öffentlichen Versorgungsnetzen (Wasser, Abwasser, Strom, Gas, Telekommunikation). Sie fallen bei Neubauten als Teil der Erschließungskosten an und können mehrere tausend Euro betragen. Die Kosten variieren je nach Gemeinde und Entfernung zum Netz.",
    verwandteBegriffe: ["Erschließungskosten", "Erschließung", "Baunebenkosten"]
  },
  {
    slug: "auszahlungskurs",
    begriff: "Auszahlungkurs",
    kategorie: "Finanzierung",
    definition: "Der Prozentsatz der Darlehenssumme, der tatsächlich an den Kreditnehmer ausgezahlt wird.",
    beschreibung: "Der Auszahlungskurs gibt an, welcher Anteil der vereinbarten Darlehenssumme tatsächlich ausgezahlt wird. Bei einem Auszahlungskurs von 100 % wird die volle Summe ausgezahlt. Ein Auszahlungskurs unter 100 % (z. B. 96 %) bedeutet, dass ein Disagio einbehalten wird. Der Auszahlungskurs beeinflusst den effektiven Jahreszins.",
    verwandteBegriffe: ["Disagio", "Effektiver Jahreszins", "Vollauszahlung"]
  },
  {
    slug: "auszahlungsvoraussetzungen",
    begriff: "Auszahlungsvoraussetzungen",
    kategorie: "Finanzierung",
    definition: "Die Bedingungen, die erfüllt sein müssen, bevor die Bank das Darlehen auszahlt.",
    beschreibung: "Auszahlungsvoraussetzungen sind die von der Bank festgelegten Bedingungen, die vor der Darlehensauszahlung erfüllt sein müssen: eingetragene Grundschuld, Nachweis der Eigenleistung, Vorlage des Kaufvertrags oder der Baugenehmigung, Abschluss erforderlicher Versicherungen und ggf. Baufortschrittsbestätigung.",
    verwandteBegriffe: ["Grundschuldbestellung", "Bereitstellungszins", "Kaufvertrag"]
  },
  {
    slug: "ruecktritt-vom-darlehensvertrag",
    begriff: "Rücktritt vom Darlehensvertrag",
    kategorie: "Recht",
    definition: "Die Möglichkeit der Bank, unter bestimmten Voraussetzungen vom Darlehensvertrag zurückzutreten.",
    beschreibung: "Die Bank kann unter bestimmten Bedingungen vom Darlehensvertrag zurücktreten, z. B. wenn der Kreditnehmer falsche Angaben gemacht hat, die Auszahlungsvoraussetzungen nicht erfüllt werden oder sich die Bonität wesentlich verschlechtert hat. Der Kreditnehmer hat seinerseits ein Widerrufsrecht von 14 Tagen nach Vertragsabschluss.",
    verwandteBegriffe: ["Kreditvertrag", "Kreditbedingungen", "Nichtabnahmeentschädigung"]
  },
  {
    slug: "tilgungshoehe",
    begriff: "Tilgungshöhe",
    kategorie: "Tilgung",
    definition: "Der absolute Betrag oder prozentuale Anteil der regelmäßigen Tilgungsleistung eines Darlehens.",
    beschreibung: "Die Tilgungshöhe bestimmt, wie schnell ein Darlehen zurückgezahlt wird. Sie kann als Prozentsatz (z. B. 2 % p.a.) oder als absoluter monatlicher Betrag angegeben werden. Eine höhere Tilgung verkürzt die Laufzeit und reduziert die Gesamtzinskosten, erhöht aber die monatliche Belastung. Mindestens 2 % anfängliche Tilgung werden empfohlen.",
    verwandteBegriffe: ["Tilgungssatz", "Tilgung", "Rate"]
  },
  {
    slug: "tilgungsverrechnung",
    begriff: "Tilgungsverrechnung",
    kategorie: "Tilgung",
    definition: "Der Zeitpunkt und die Art, wie geleistete Tilgungszahlungen mit der Restschuld verrechnet werden.",
    beschreibung: "Die Tilgungsverrechnung bestimmt, wann geleistete Tilgungen die Restschuld reduzieren. Bei monatlicher Tilgungsverrechnung sinkt die Restschuld mit jeder Ratenzahlung, bei jährlicher Verrechnung erst am Jahresende. Eine häufigere Tilgungsverrechnung ist für den Kreditnehmer vorteilhaft, da die Zinsbelastung schneller sinkt.",
    verwandteBegriffe: ["Tilgung", "Restschuld", "Rate"]
  },
  {
    slug: "zinsschaden",
    begriff: "Zinsschaden",
    kategorie: "Zinsen",
    definition: "Der finanzielle Schaden, der einer Bank durch vorzeitige Darlehensrückzahlung oder Zahlungsverzug entsteht.",
    beschreibung: "Der Zinsschaden ist die Differenz zwischen den vertraglich vereinbarten und den bei Wiederanlage erzielbaren Zinsen. Er bildet die Grundlage für die Berechnung der Vorfälligkeitsentschädigung. Bei Zahlungsverzug des Kreditnehmers kann die Bank Verzugszinsen als Ausgleich für den Zinsschaden verlangen.",
    verwandteBegriffe: ["Vorfälligkeitsentschädigung", "Nichtabnahmeentschädigung", "Zinssatz"]
  },
  {
    slug: "rangstelle",
    begriff: "Rangstelle",
    kategorie: "Sicherheit",
    definition: "Die Position eines Grundpfandrechts im Grundbuch, die die Reihenfolge der Befriedigung bei einer Verwertung bestimmt.",
    beschreibung: "Die Rangstelle bestimmt die Reihenfolge, in der Gläubiger bei einer Zwangsversteigerung aus dem Erlös befriedigt werden. Der erstrangige Gläubiger wird zuerst bedient. Baufinanzierungsbanken bestehen daher auf einer erstrangigen Grundschuld. Die Rangstelle wird durch die Reihenfolge der Eintragung im Grundbuch bestimmt.",
    verwandteBegriffe: ["Grundschuld", "Grundbuch", "Rangrücktritt"]
  },
  {
    slug: "teilauszahlungszuschlag",
    begriff: "Teilauszahlungszuschlag",
    kategorie: "Steuern & Kosten",
    definition: "Ein Gebührenaufschlag der Bank bei Auszahlung des Darlehens in mehreren Teilbeträgen.",
    beschreibung: "Der Teilauszahlungszuschlag wird von manchen Banken erhoben, wenn ein Darlehen nicht in einer Summe, sondern in mehreren Raten ausgezahlt wird. Dies ist bei Neubauten üblich, wo die Auszahlung nach Baufortschritt erfolgt. Der Zuschlag beträgt üblicherweise 0,1–0,25 % pro Teilauszahlung und erhöht die Finanzierungskosten.",
    verwandteBegriffe: ["Kreditkosten", "Nebenleistungen", "Baukosten"]
  },
  {
    slug: "tilgungsstreckungskredit",
    begriff: "Tilgungsstreckungskredit",
    kategorie: "Finanzierung",
    definition: "Ein zusätzliches Darlehen zur Reduzierung der anfänglichen monatlichen Belastung bei einer Baufinanzierung.",
    beschreibung: "Ein Tilgungsstreckungskredit wird ergänzend zur Hauptfinanzierung aufgenommen, um die monatliche Rate in den ersten Jahren zu senken. Er hat eine kurze Laufzeit und wird vorrangig getilgt. Dies kann sinnvoll sein, wenn das Einkommen in den kommenden Jahren steigen wird und die anfängliche Belastung reduziert werden soll.",
    verwandteBegriffe: ["Rate", "Tilgung", "Finanzierungsplan"]
  },
  {
    slug: "vollauszahlung",
    begriff: "Vollauszahlung",
    kategorie: "Finanzierung",
    definition: "Die Auszahlung des gesamten Darlehensbetrags in einer Summe.",
    beschreibung: "Bei der Vollauszahlung wird das Darlehen in einem Betrag ausgezahlt, im Gegensatz zur Teilauszahlung nach Baufortschritt. Die Vollauszahlung ist beim Kauf einer Bestandsimmobilie üblich, da der Kaufpreis in der Regel auf einmal fällig wird. Bei Neubauten erfolgt die Auszahlung hingegen meist in Teilbeträgen.",
    verwandteBegriffe: ["Auszahlungskurs", "Teilauszahlungszuschlag", "Auszahlungsvoraussetzungen"]
  },
  {
    slug: "hypothekenzertifikate",
    begriff: "Hypothekenzertifikate",
    kategorie: "Finanzierung",
    definition: "Wertpapiere, die durch Hypothekenforderungen besichert sind und am Kapitalmarkt gehandelt werden.",
    beschreibung: "Hypothekenzertifikate (auch Mortgage-Backed Securities) sind Wertpapiere, die durch ein Portfolio von Hypothekenkrediten besichert sind. Sie ermöglichen es Banken, Kreditrisiken an den Kapitalmarkt weiterzugeben und sich zu refinanzieren. Für Anleger bieten sie regelmäßige Erträge aus den Zins- und Tilgungszahlungen der zugrunde liegenden Hypotheken.",
    verwandteBegriffe: ["Pfandbriefe", "Hypothek", "Refinanzierung"]
  },
  {
    slug: "kreditbedingungen",
    begriff: "Kreditbedingungen",
    kategorie: "Finanzierung",
    definition: "Die vertraglichen Regelungen und Allgemeinen Geschäftsbedingungen, die für ein Darlehen gelten.",
    beschreibung: "Die Kreditbedingungen umfassen alle vertraglichen Regelungen eines Baudarlehens: Auszahlungsvoraussetzungen, Kündigungsrechte, Sondertilgungsmöglichkeiten, Bereitstellungszinsen, Verzugsfolgen und weitere Pflichten des Kreditnehmers. Sie sind neben den Konditionen ein wichtiges Vergleichskriterium bei der Wahl des Darlehensanbieters.",
    verwandteBegriffe: ["Kreditvertrag", "Konditionen", "Vorvertragliche Informationen"]
  }
];

// Funktion zum Finden eines Begriffs anhand des Slugs
export function findBegriffBySlug(slug: string): LexikonBegriff | undefined {
  return lexikonBegriffe.find((b) => b.slug === slug);
}

// Funktion zum Finden verwandter Begriffe
export function findVerwandteBegriffe(begriff: LexikonBegriff): LexikonBegriff[] {
  if (!begriff.verwandteBegriffe) return [];
  
  return begriff.verwandteBegriffe
    .map((begriffName) => 
      lexikonBegriffe.find((b) => b.begriff === begriffName)
    )
    .filter((b): b is LexikonBegriff => b !== undefined);
}
