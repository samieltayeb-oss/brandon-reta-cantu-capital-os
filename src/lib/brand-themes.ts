export interface BrandTheme {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  badge: string;
  rationale: string;
  bg: string;
  surface: string;
  card: string;
  text: string;
  muted: string;
  primary: string;
  primaryFg: string;
  accent: string;
  accentFg: string;
  gold: string;
  border: string;
  headingFont: string;
  bodyFont: string;
  isDark: boolean;
}

export const BRAND_THEMES: BrandTheme[] = [
  {
    id: "sovereign-crest",
    number: "01",
    name: "The Sovereign Crest",
    subtitle: "Source of Truth Evolution · Imperial Crimson & Slate",
    badge: "CONCEPT 01 · SOURCE OF TRUTH",
    rationale:
      "Direct luxury evolution of Brandon Reta-Cantu's original Source of Truth palette (#85303E Crimson & #33415C Executive Slate) accented with Reserve Gold.",
    bg: "#F6F4F3",
    surface: "#EDE9E7",
    card: "#F9F8F7",
    text: "#1E1518",
    muted: "#6E6468",
    primary: "#85303E",
    primaryFg: "#FFFFFF",
    accent: "#33415C",
    accentFg: "#FFFFFF",
    gold: "#C8A96A",
    border: "#E2DCD9",
    headingFont: "var(--font-familjen)",
    bodyFont: "var(--font-hanken)",
    isDark: false,
  },
  {
    id: "biscayne-reserve",
    number: "02",
    name: "Biscayne Reserve",
    subtitle: "Florida Private Bank · Atlantic Navy & Bullion Gold",
    badge: "CONCEPT 02 · FLORIDA PRIVATE WEALTH",
    rationale:
      "Inspired by Brickell & Sarasota private wealth management. Deep Atlantic Navy and Champagne Gold project institutional authority for high-ticket Florida deals.",
    bg: "#0A1424",
    surface: "#0F1E36",
    card: "#132644",
    text: "#F5F7FA",
    muted: "#9BA9BC",
    primary: "#D4AF37",
    primaryFg: "#0A1424",
    accent: "#1C3152",
    accentFg: "#F5F7FA",
    gold: "#D4AF37",
    border: "#233A5E",
    headingFont: "var(--font-cormorant)",
    bodyFont: "var(--font-hanken)",
    isDark: true,
  },
  {
    id: "obsidian-apex",
    number: "03",
    name: "Obsidian Apex",
    subtitle: "Modern Fintech Syndicate · Carbon & Ruby Pulse",
    badge: "CONCEPT 03 · HIGH-VELOCITY FINTECH",
    rationale:
      "Engineered from the dark-mode tokens of the Source of Truth (#191011 Obsidian & #B24053 Ruby Pulse) for rapid algorithmic capital positioning.",
    bg: "#120C0D",
    surface: "#191011",
    card: "#251819",
    text: "#F4EFE9",
    muted: "#B49CA0",
    primary: "#B24053",
    primaryFg: "#FFFFFF",
    accent: "#2D1E22",
    accentFg: "#F4EFE9",
    gold: "#576F9E",
    border: "#452C2F",
    headingFont: "var(--font-familjen)",
    bodyFont: "var(--font-hanken)",
    isDark: true,
  },
  {
    id: "emerald-meridian",
    number: "04",
    name: "Emerald Meridian",
    subtitle: "Commercial Growth Equity · Cypress & Brushed Brass",
    badge: "CONCEPT 04 · GROWTH EQUITY HOUSE",
    rationale:
      "Channels commercial family offices and capital liquidity funds with three ascending meridian pillars representing the 01-02-03 funding process.",
    bg: "#071914",
    surface: "#0C261E",
    card: "#113328",
    text: "#F2F5F3",
    muted: "#9BB5AA",
    primary: "#C5A059",
    primaryFg: "#071914",
    accent: "#184D3B",
    accentFg: "#FFFFFF",
    gold: "#C5A059",
    border: "#1F4E3E",
    headingFont: "var(--font-cormorant)",
    bodyFont: "var(--font-hanken)",
    isDark: true,
  },
  {
    id: "palm-pillar",
    number: "05",
    name: "The Palm & Pillar Atelier",
    subtitle: "Swiss Architectural Grid · Travertine & Bronze",
    badge: "CONCEPT 05 · ARCHITECTURAL EDITORIAL",
    rationale:
      "Palm Beach & Sarasota architectural studio aesthetic using Warm Travertine and Terracotta Bronze to reinforce zero-pressure clarity.",
    bg: "#F4EFEA",
    surface: "#EAE2DA",
    card: "#FAF7F4",
    text: "#1C1917",
    muted: "#655E57",
    primary: "#9A5B42",
    primaryFg: "#FFFFFF",
    accent: "#1C1917",
    accentFg: "#F4EFEA",
    gold: "#85303E",
    border: "#D6D0C8",
    headingFont: "var(--font-familjen)",
    bodyFont: "var(--font-hanken)",
    isDark: false,
  },
];

export const CLIENT_TRUTH = {
  name: "Brandon Reta-Cantu",
  brandTitle: "Business Funding | Brandon Reta-Cantu",
  agentId: "353859353",
  phone: "(941) 289-8661",
  phoneHref: "tel:9412898661",
  email: "louie1740@yahoo.com",
  emailHref: "mailto:louie1740@yahoo.com",
  applicationUrl: "https://bankbreezy.com/funding/brandonretacantu",
  sourceUrl: "https://businesses-funding-website-to-attract.kleap.io/",
  region: "Florida, USA (Sarasota · Tampa · Miami · Orlando · Jacksonville)",
};
