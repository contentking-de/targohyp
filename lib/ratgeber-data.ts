import { BookOpen, FileText, CheckSquare, HelpCircle, LucideIcon } from "lucide-react";

export interface Artikel {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  author?: string;
  createdAt?: string;
}

export interface Kategorie {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  artikel: Artikel[];
  image?: string;
}

export const kategorien: Kategorie[] = [
  {
    id: "erstfinanzierung",
    title: "Ratgeber Erstfinanzierung",
    icon: BookOpen,
    description: "Sie stehen am Anfang Ihrer Immobilienfinanzierung und haben viele Fragen? Hier finden Sie alles, was Sie für den Start wissen müssen. Von den grundlegenden Begriffen und gesetzlichen Rahmenbedingungen bis hin zur richtigen Darlehensart – wir begleiten Sie Schritt für Schritt durch den Finanzierungsprozess. Lernen Sie, wie Sie Ihr Budget realistisch einschätzen und welche Produkte zu Ihrer Situation passen.",
    image: "/pexels-pixabay-259165.jpg",
    artikel: [
      { id: "grundlagen-ablauf", title: "Grundlagen & Ablauf der Immobilienfinanzierung", subtitle: "Definitionen und Begriff, Relevante Gesetze", image: "/pexels-pixabay-259165.jpg" },
      { id: "budget-leistbarkeit", title: "Budget & Leistbarkeit", subtitle: "Kaufen oder mieten? …", image: "/pexels-pixabay-259249.jpg" },
      { id: "darlehensarten-produkte", title: "Darlehensarten & Produkte", image: "/pexels-pixabay-259251.jpg" },
      { id: "mieten-oder-kaufen", title: "Mieten oder Kaufen? Die ehrliche Rechnung für Einsteiger", subtitle: "Was dein Geld auf lange Sicht tatsächlich leistet", image: "/pexels-pixabay-259249.jpg" },
    ],
  },
  {
    id: "kapitalanlage",
    title: "Ratgeber Kapitalanlage",
    icon: BookOpen,
    description: "Immobilien als Kapitalanlage bieten vielfältige Chancen für Vermögensaufbau und langfristige Rendite. Entdecken Sie, wie Sie steuerliche Vorteile optimal nutzen, Cashflow und Rendite kalkulieren und bei Preisverhandlungen erfolgreich sind. Erfahren Sie außerdem, welche Rechte und Pflichten Sie als Vermieter haben und wie Sie Ihre Investition erfolgreich managen.",
    image: "/pexels-pixabay-209266.jpg",
    artikel: [
      { id: "steuervorteile-vermoegensaufbau", title: "Steuervorteile & Vermögensaufbau", image: "/pexels-pixabay-209266.jpg" },
      { id: "rendite-cashflow-finanzierung", title: "Rendite / Cashflow / Finanzierung", image: "/pexels-pixabay-210705.jpg" },
      { id: "tipps-preisverhandlung", title: "Tipps, Preisverhandlung", image: "/pexels-asphotography-101808.jpg" },
      { id: "rechte-pflichten-vermieter", title: "Rechte / Pflichten als Vermieter", image: "/pexels-binyaminmellish-1396132.jpg" },
    ],
  },
  {
    id: "immobilie",
    title: "Ratgeber Immobilie",
    icon: BookOpen,
    description: "Die richtige Immobilie zu finden ist eine Kunst – und eine Wissenschaft. Hier lernen Sie, worauf es wirklich ankommt: von der Wahl der passenden Immobilienart über die Bewertung von Lage und Standort bis hin zu den rechtlichen Aspekten. Wir zeigen Ihnen auch, welche Kosten Sie einplanen sollten und wie Sie psychologisch und strategisch die beste Kaufentscheidung treffen.",
    image: "/pexels-a-darmel-7641859.jpg",
    artikel: [
      { id: "immobilienarten-objektwahl", title: "Immobilienarten & Objektwahl", image: "/pexels-a-darmel-7641859.jpg" },
      { id: "lage-standort-werttreiber", title: "Lage, Standort & Werttreiber", image: "/pexels-energepic-com-27411-313691.jpg" },
      { id: "recht-vertraege", title: "Recht & Verträge", subtitle: "Immobilienrecht", image: "/pexels-expect-best-79873-323780.jpg" },
      { id: "kosten-immobilie", title: "Kosten rund um die Immobilie", subtitle: "nicht Finanzierung, sondern Immobilie", image: "/pexels-kindelmedia-9875408.jpg" },
      { id: "kaufentscheidungs-wissen", title: "Kaufentscheidungs-Wissen", subtitle: "psychologisch/strategisch", image: "/pexels-maitree-rimthong-444156-1602726.jpg" },
    ],
  },
  {
    id: "anschlussfinanzierung",
    title: "Ratgeber Anschlussfinanzierung",
    icon: BookOpen,
    description: "Ihre Zinsbindung läuft ab und Sie fragen sich, was jetzt zu tun ist? Die Anschlussfinanzierung ist eine Chance, Ihre Finanzierung zu optimieren. Erfahren Sie, wann sich eine Umschuldung wirklich lohnt, wie Sie auf Zinsentwicklungen reagieren sollten und welcher Zeitpunkt für Ihre individuelle Situation der richtige ist. Mit dem richtigen Timing können Sie tausende Euro sparen.",
    image: "/pexels-rdne-7414284.jpg",
    artikel: [
      { id: "umschuldung-lohnt", title: "Wann lohnt sich Umschuldung", image: "/pexels-rdne-7414284.jpg" },
      { id: "zinsentwicklung-was-tun", title: "Zinsentwicklung: Was tun", image: "/pexels-tima-miroshnichenko-6474343.jpg" },
      { id: "richtiger-zeitpunkt", title: "Wann ist der richtige Zeitpunkt", image: "/pexels-pixabay-259165.jpg" },
    ],
  },
  {
    id: "modernisierung",
    title: "Ratgeber Modernisierung",
    icon: BookOpen,
    description: "Eine energetische Modernisierung steigert nicht nur den Wert Ihrer Immobilie, sondern spart auch langfristig bares Geld. Lernen Sie, welche Maßnahmen sich wirklich lohnen, welche Fördermittel Sie nutzen können und wie Sie Ihre Modernisierung optimal finanzieren. Machen Sie Ihr Zuhause zukunftssicher und energieeffizient.",
    image: "/pexels-pixabay-210705.jpg",
    artikel: [
      { id: "energetische-modernisierung", title: "Energetische Modernisierung", image: "/pexels-pixabay-210705.jpg" },
    ],
  },
  {
    id: "studien-whitepaper",
    title: "Studien & Whitepaper",
    icon: FileText,
    description: "Datengetriebene Erkenntnisse für fundierte Entscheidungen: Unsere Studien und Whitepaper liefern Ihnen tiefe Einblicke in Markttrends, Zinsentwicklungen und regionale Unterschiede. Von detaillierten Ländervergleichen bis hin zu langjährigen Marktanalysen – hier finden Sie die Fakten, die Sie für Ihre Immobilienentscheidung brauchen.",
    image: "/pexels-asphotography-101808.jpg",
    artikel: [
      { id: "photovoltaik-studie", title: "Photovoltaik Studie/Ländervergleich", image: "/pexels-asphotography-101808.jpg" },
      { id: "immobilienpreisindex", title: "Immobilienpreisindex Deutschland", image: "/pexels-binyaminmellish-1396132.jpg" },
      { id: "zinsentwicklung-25-jahre", title: "Zinsentwicklung der letzten 25 Jahre", image: "/pexels-energepic-com-27411-313691.jpg" },
    ],
  },
  {
    id: "lexikon",
    title: "Lexikon",
    icon: BookOpen,
    description: "Von A wie Annuität bis Z wie Zinsbindung – unser Lexikon erklärt alle wichtigen Begriffe rund um Immobilienfinanzierung verständlich und präzise. Keine Verwirrung mehr durch Fachbegriffe: Hier finden Sie klare Definitionen und praktische Erklärungen, die Ihnen helfen, Finanzierungsangebote besser zu verstehen und die richtigen Fragen zu stellen.",
    image: "/pexels-expect-best-79873-323780.jpg",
    artikel: [
      { id: "grunderwerbsteuer", title: "Grunderwerbsteuer", image: "/pexels-expect-best-79873-323780.jpg" },
      { id: "rueckauflassungsvormerkung", title: "Rückauflassungsvormerkung", image: "/pexels-kindelmedia-9875408.jpg" },
    ],
  },
  {
    id: "checklisten",
    title: "Checklisten und Käufer und Inhaber",
    icon: CheckSquare,
    description: "Nichts vergessen, alles richtig machen – unsere Checklisten begleiten Sie durch jeden wichtigen Schritt Ihrer Immobilienreise. Ob Kauf, Verkauf, Bewertung oder Sanierung: Mit unseren praxiserprobten Checklisten behalten Sie den Überblick und stellen sicher, dass alle wichtigen Punkte beachtet werden. So gehen Sie sicher und vorbereitet in jede Phase Ihrer Immobilientransaktion.",
    image: "/pexels-maitree-rimthong-444156-1602726.jpg",
    artikel: [
      { id: "checkliste-immokauf", title: "Checkliste Immokauf", image: "/pexels-maitree-rimthong-444156-1602726.jpg" },
      { id: "checkliste-immoverkauf", title: "Checkliste Immoverkauf", image: "/pexels-pixabay-209266.jpg" },
      { id: "checkliste-immobewertung", title: "Checkliste Immobewertung", image: "/pexels-pixabay-210705.jpg" },
      { id: "checkliste-sanierung", title: "Checkliste Sanierung", image: "/pexels-rdne-7414284.jpg" },
    ],
  },
  {
    id: "faqs",
    title: "FAQs",
    icon: HelpCircle,
    description: "Häufige Fragen, klare Antworten: In unseren FAQs finden Sie schnelle Antworten auf die Fragen, die uns am häufigsten gestellt werden. Von grundlegenden Fragen zur Finanzierung bis hin zu spezifischen Details – hier finden Sie die Informationen, die Sie suchen, auf einen Blick.",
    artikel: [],
  },
];

export function getKategorieById(id: string): Kategorie | undefined {
  return kategorien.find((k) => k.id === id);
}

export function getArtikelById(kategorieId: string, artikelId: string): Artikel | undefined {
  const kategorie = getKategorieById(kategorieId);
  return kategorie?.artikel.find((a) => a.id === artikelId);
}

export function getAllArtikel(): Array<{ kategorie: Kategorie; artikel: Artikel }> {
  return kategorien.flatMap((kategorie) =>
    kategorie.artikel.map((artikel) => ({ kategorie, artikel }))
  );
}

export function getArtikelByAuthor(authorName: string): Array<{ kategorie: Kategorie; artikel: Artikel }> {
  // Dynamischer Import um zirkuläre Abhängigkeiten zu vermeiden
  const { getArtikelContent } = require("@/lib/ratgeber-content");
  return getAllArtikel().filter(({ kategorie, artikel }) => {
    const content = getArtikelContent(kategorie.id, artikel.id);
    return content?.author === authorName;
  });
}
