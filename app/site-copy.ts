export type Language = "en" | "cs";

export type SiteCopy = {
  language: Language;
  homeHref: string;
  skipLink: string;
  brandLabel: string;
  languageNavigation: string;
  emailLabel: string;
  eyebrow: string;
  headline: [string, string];
  introduction: string;
  primaryAction: string;
  scopeTag: string;
  scopeBoundary: string;
  sigilCaption: string;
  offerLabel: string;
  offerTitle: string;
  route: string[];
  modelLabel: string;
  modelTitle: string;
  coordinationTitle: string;
  coordinationText: string;
  separateTitle: string;
  separateText: string;
  confirmation: string;
  contactLabel: string;
  contactTitle: string;
  footerService: string;
  companyAddress: string;
};

export const englishCopy: SiteCopy = {
  language: "en",
  homeHref: "/",
  skipLink: "Skip to content",
  brandLabel: "Casa Buena home",
  languageNavigation: "Language",
  emailLabel: "Email Casa Buena",
  eyebrow: "European vehicle import coordination",
  headline: ["From port.", "Forward."],
  introduction:
    "Casa Buena coordinates the European side of China-origin vehicle imports: readiness, carrier release, customs preparation, technical approval, registration and handover.",
  primaryAction: "Discuss a vehicle",
  scopeTag: "Standard boundary",
  scopeBoundary:
    "Our scope starts at the agreed EU port. China sourcing, export formalities, ocean-carrier booking and ocean freight stay with the exporter. Route and responsibility are confirmed per vehicle.",
  sigilCaption: "PORT / ROAD",
  offerLabel: "The European side",
  offerTitle: "One coordinated route.",
  route: [
    "Pre-arrival readiness",
    "Release & inland movement",
    "Customs preparation",
    "Technical approval, registration & handover",
  ],
  modelLabel: "Working model",
  modelTitle: "Agreed vehicle by vehicle.",
  coordinationTitle: "Coordination",
  coordinationText:
    "The European buyer normally remains the importer. Casa Buena coordinates the appointed parties and the vehicle-level work.",
  separateTitle: "Separate transaction",
  separateText:
    "If a transaction requires Casa Buena to buy and resell the vehicle, its commercial and regulatory structure is reviewed independently, case by case.",
  confirmation:
    "Eligibility, scope, responsibility, price and timing are confirmed before execution starts.",
  contactLabel: "Start with the facts",
  contactTitle: "VIN. Documents. Expected EU port.",
  footerService: "European vehicle import coordination",
  companyAddress: "Partyzánské náměstí 1738/3, 702 00 Ostrava, Czech Republic",
};

export const czechCopy: SiteCopy = {
  language: "cs",
  homeHref: "/cs",
  skipLink: "Přejít k obsahu",
  brandLabel: "Úvodní stránka Casa Buena",
  languageNavigation: "Jazyk",
  emailLabel: "Napsat společnosti Casa Buena",
  eyebrow: "Koordinace dovozu vozidel v Evropě",
  headline: ["Z přístavu.", "Dál."],
  introduction:
    "Casa Buena koordinuje evropskou část dovozu vozidel z Číny: připravenost, uvolnění u dopravce, podklady pro celní řízení, technické schválení, registraci a předání.",
  primaryAction: "Probrat vozidlo",
  scopeTag: "Standardní hranice",
  scopeBoundary:
    "Náš rozsah začíná v dohodnutém evropském přístavu. Výběr vozu, vývozní formality, rezervaci námořního dopravce a námořní přepravu zajišťuje exportér. Trasu a odpovědnosti potvrzujeme pro každé vozidlo zvlášť.",
  sigilCaption: "PŘÍSTAV / SILNICE",
  offerLabel: "Evropská část",
  offerTitle: "Jedna koordinovaná cesta.",
  route: [
    "Kontrola před příjezdem",
    "Uvolnění a vnitrozemská přeprava",
    "Příprava celního řízení",
    "Technické schválení, registrace a předání",
  ],
  modelLabel: "Způsob spolupráce",
  modelTitle: "Podmínky pro každé vozidlo zvlášť.",
  coordinationTitle: "Koordinace",
  coordinationText:
    "Evropský kupující zpravidla zůstává dovozcem. Casa Buena koordinuje určené účastníky a práci na úrovni konkrétního vozidla.",
  separateTitle: "Samostatná transakce",
  separateText:
    "Pokud by Casa Buena vozidlo kupovala a dále prodávala, obchodní a regulatorní strukturu posoudíme samostatně případ od případu.",
  confirmation:
    "Způsobilost, rozsah, odpovědnosti, cenu a termín potvrzujeme před zahájením realizace.",
  contactLabel: "Začněme fakty",
  contactTitle: "VIN. Dokumenty. Očekávaný přístav v EU.",
  footerService: "Koordinace dovozu vozidel v Evropě",
  companyAddress: "Partyzánské náměstí 1738/3, 702 00 Ostrava, Česká republika",
};
