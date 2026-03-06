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
