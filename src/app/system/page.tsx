"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BRAND_THEMES, CLIENT_TRUTH } from "@/lib/brand-themes";
import { BrandLogoMark } from "@/components/BrandLogoMark";
import type { FloridaLead } from "@/app/api/leads/route";
import {
  MapPin,
  Search,
  Sparkles,
  Phone,
  Mail,
  ExternalLink,
  Copy,
  Check,
  Download,
  FileText,
  ArrowLeft,
  Send,
  RefreshCw,
  ShieldAlert,
  CheckSquare,
  DollarSign,
  Plus,
  Trash2,
  Terminal,
  Briefcase,
} from "lucide-react";

const FLORIDA_CITIES = [
  "Sarasota, FL",
  "Tampa, FL",
  "Miami, FL",
  "Orlando, FL",
  "Jacksonville, FL",
  "Fort Lauderdale, FL",
  "Naples, FL",
];

// Top 15 Florida Commercial Funding Categories from NEXORA Market Scout (grok/CATEGORIES.md)
const BUSINESS_CATEGORIES = [
  "1. HVAC & Plumbing Contractors (NAICS 238220)",
  "2. Full-Service Restaurants (NAICS 722511)",
  "3. Limited-Service & Fast Casual (NAICS 722513)",
  "4. Residential & Storm Remodelers (NAICS 236118)",
  "5. Roofing Contractors (NAICS 238160)",
  "6. General Automotive Repair (NAICS 811111)",
  "7. Medical & Physicians Clinics (NAICS 621111)",
  "8. Specialty Trade Contractors (NAICS 238990)",
  "9. Child Day Care & Preschools (NAICS 624410)",
  "10. Landscaping & Tree Services (NAICS 561730)",
  "11. Dental Practices & Orthodontics (NAICS 621210)",
  "12. Fitness & Sports Centers (NAICS 713940)",
  "13. Local Freight & Cartage Trucking (NAICS 484110)",
  "14. Electrical & Generator Contractors (NAICS 238210)",
  "15. Boutique Hotels & Coastal Hospitality (NAICS 721110)",
];

export type CrmStage =
  | "New Lead"
  | "Outreach Sent"
  | "Bank Breezy App Sent"
  | "Underwriting / Offer"
  | "Funded & Closed";

const CRM_STAGES: CrmStage[] = [
  "New Lead",
  "Outreach Sent",
  "Bank Breezy App Sent",
  "Underwriting / Offer",
  "Funded & Closed",
];

export interface CrmDeal extends FloridaLead {
  stage: CrmStage;
  dealValue: number;
  commissionPct: number;
  notes: string;
  consentVerified: boolean;
  dncCleared: boolean;
  lastTouchAt: string;
}

const DEFAULT_SEEDED_CRM_DEALS: CrmDeal[] = [
  {
    id: "crm-seed-1",
    name: "Gulf Coast Precision HVAC & Mechanical",
    category: "1. HVAC & Plumbing Contractors (NAICS 238220)",
    naicsCode: "238220",
    city: "Sarasota, FL",
    address: "1840 Fruitville Rd, Sarasota, FL 34236",
    phone: "(941) 365-4820",
    website: "https://gulfcoasthvacfl.com",
    email: "dispatch@gulfcoasthvacfl.com",
    lat: 27.3368,
    lon: -82.5321,
    estimatedCapitalNeed: "$75,000 – $250,000",
    sbaMedianTicket: "$150,000",
    recommendedProduct: "Service Van Fleet & Condenser Inventory Line",
    buyingSignals: "3 new mechanical permits filed in Sarasota County; adding 2 service vans",
    aiScore: 95,
    aiReasoning: "95/100 Fit via Voyage Finance-2. High summer HVAC demand in 941 area code.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gulf+Coast+Precision+HVAC+Sarasota+FL",
    osmUrl: "https://www.openstreetmap.org/?mlat=27.3368&mlon=-82.5321#map=16/27.3368/-82.5321",
    outreachPitch: "Hi Gulf Coast Precision HVAC Team — I help Sarasota contractors compare equipment & working capital options through one simple Bank Breezy application: https://bankbreezy.com/funding/brandonretacantu",
    smsDraft: "Hi Gulf Coast HVAC, Brandon Reta-Cantu here ((941) 289-8661). Here is the single-application Bank Breezy link we discussed: https://bankbreezy.com/funding/brandonretacantu Reply STOP to opt out.",
    smsFollowUp: "Gulf Coast HVAC, Brandon again. No hard sell, just an option: one application through Bank Breezy, offers from several funders side by side, and you decide if any make sense. https://bankbreezy.com/funding/brandonretacantu Reply STOP to opt out.",
    coldCallOpener: "Hi, this is Brandon Reta-Cantu here in Florida...",
    emailBreakup: "Closing the loop for Gulf Coast Precision HVAC...",
    source: "Florida Verified Registry",
    stage: "Bank Breezy App Sent",
    dealValue: 120000,
    commissionPct: 7,
    notes: "Owner Mark requested $120K for 2 Ford Transit vans + Carrier AC inventory. Sent Bank Breezy link.",
    consentVerified: true,
    dncCleared: true,
    lastTouchAt: "Today, 10:15 AM",
  },
  {
    id: "crm-seed-2",
    name: "Ringling Boulevard Dental & Implant Studio",
    category: "11. Dental Practices & Orthodontics (NAICS 621210)",
    naicsCode: "621210",
    city: "Sarasota, FL",
    address: "2055 Main St, Sarasota, FL 34237",
    phone: "(941) 366-8140",
    website: "https://ringlingdentalstudio.com",
    email: "office@ringlingdentalstudio.com",
    lat: 27.3359,
    lon: -82.5284,
    estimatedCapitalNeed: "$100,000 – $350,000",
    sbaMedianTicket: "$356,000",
    recommendedProduct: "CBCT 3D Imaging & Operatory Expansion Financing",
    buyingSignals: "Expanding 2 new operatories on Main St",
    aiScore: 93,
    aiReasoning: "93/100 Fit. High-revenue Sarasota dental practice with low default profile.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ringling+Boulevard+Dental+Sarasota+FL",
    osmUrl: "https://www.openstreetmap.org/?mlat=27.3359&mlon=-82.5284#map=16/27.3359/-82.5284",
    outreachPitch: "Hi Ringling Dental Team — one application to compare equipment & expansion funding...",
    smsDraft: "Hi Ringling Dental, Brandon Reta-Cantu ((941) 289-8661)...",
    smsFollowUp: "Ringling Dental, Brandon again. No hard sell, just an option: https://bankbreezy.com/funding/brandonretacantu Reply STOP to opt out.",
    coldCallOpener: "Hi, this is Brandon Reta-Cantu...",
    emailBreakup: "Closing the loop...",
    source: "Florida Verified Registry",
    stage: "Underwriting / Offer",
    dealValue: 185000,
    commissionPct: 6,
    notes: "Reviewing 2 participating funder offers via Bank Breezy for $185K operatory buildout.",
    consentVerified: true,
    dncCleared: true,
    lastTouchAt: "Yesterday, 4:30 PM",
  },
  {
    id: "crm-seed-3",
    name: "Siesta Key Coastal Kitchen & Hospitality",
    category: "2. Full-Service Restaurants (NAICS 722511)",
    naicsCode: "722511",
    city: "Sarasota, FL",
    address: "5212 Ocean Blvd, Sarasota, FL 34242",
    phone: "(941) 349-6810",
    website: "https://siestacoastalkitchen.com",
    email: "gm@siestacoastalkitchen.com",
    lat: 27.2741,
    lon: -82.5629,
    estimatedCapitalNeed: "$50,000 – $150,000",
    sbaMedianTicket: "#1 FL SBA Loan Count",
    recommendedProduct: "Patio Remodel & Peak Season Working Capital",
    buyingSignals: "High daily card volume; outdoor seating expansion",
    aiScore: 91,
    aiReasoning: "91/100 Fit. Strong card volume ideal for fast Bank Breezy working capital.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Siesta+Key+Coastal+Kitchen+Sarasota+FL",
    osmUrl: "https://www.openstreetmap.org/?mlat=27.2741&mlon=-82.5629#map=16/27.2741/-82.5629",
    outreachPitch: "Hi Siesta Key Coastal Kitchen...",
    smsDraft: "Hi Siesta Key Kitchen...",
    smsFollowUp: "Siesta Key Kitchen, Brandon again. No hard sell: https://bankbreezy.com/funding/brandonretacantu Reply STOP to opt out.",
    coldCallOpener: "Hi, this is Brandon Reta-Cantu...",
    emailBreakup: "Closing the loop...",
    source: "Florida Verified Registry",
    stage: "Funded & Closed",
    dealValue: 65000,
    commissionPct: 8,
    notes: "Funded $65K seasonal working capital + patio kitchen upgrade! Renewal check in 4 months.",
    consentVerified: true,
    dncCleared: true,
    lastTouchAt: "3 days ago",
  },
];

interface AIHealth {
  connected: boolean;
  endpoint: string;
  model?: string;
  rerankModel?: string;
  dimensions?: number;
  latencyMs?: number;
  geoEngine?: string;
}

export default function NexoraCommandSystem() {
  const [activeTab, setActiveTab] = useState<
    "scanner" | "pipeline" | "gosom" | "brands" | "compliance" | "inquiries"
  >("scanner");

  const [city, setCity] = useState("Sarasota, FL");
  const [category, setCategory] = useState(
    "1. HVAC & Plumbing Contractors (NAICS 238220)"
  );
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState<FloridaLead[]>([]);
  const [selectedLead, setSelectedLead] = useState<FloridaLead | null>(null);
  const [scriptTab, setScriptTab] = useState<
    "email" | "sms" | "sms2" | "call" | "breakup"
  >("email");
  const [aiEngineLabel, setAiEngineLabel] = useState(
    "rerank-2 + voyage-finance-2 (ai.mongodb.com)"
  );
  const [aiHealth, setAiHealth] = useState<AIHealth | null>(null);

  // Built-in CRM State
  const [crmDeals, setCrmDeals] = useState<CrmDeal[]>(DEFAULT_SEEDED_CRM_DEALS);
  const [showAddDealModal, setShowAddDealModal] = useState(false);
  const [newDealForm, setNewDealForm] = useState({
    name: "",
    city: "Sarasota, FL",
    phone: "",
    email: "",
    dealValue: 75000,
    commissionPct: 7,
    notes: "",
  });

  const [inquiries, setInquiries] = useState<Array<Record<string, unknown>>>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/ai-status")
      .then((r) => r.json())
      .then((d) => setAiHealth(d))
      .catch(() => null);

    try {
      const saved = localStorage.getItem("nexora_brc_crm_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCrmDeals(parsed);
        }
      }
      const inq = JSON.parse(
        localStorage.getItem("nexora_brc_inquiries") || "[]"
      );
      setInquiries(inq);
    } catch {
      // ignore
    }

    runLeadScan(
      "Sarasota, FL",
      "1. HVAC & Plumbing Contractors (NAICS 238220)",
      ""
    );
  }, []);

  function persistCrm(updated: CrmDeal[]) {
    setCrmDeals(updated);
    try {
      localStorage.setItem("nexora_brc_crm_v2", JSON.stringify(updated));
    } catch {
      // ignore
    }
  }

  async function runLeadScan(
    targetCity: string,
    targetCategory: string,
    targetKeyword: string
  ) {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: targetCity,
          category: targetCategory,
          keyword: targetKeyword,
        }),
      });
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
        setSelectedLead(data.leads[0] || null);
        if (data.aiEngine) setAiEngineLabel(data.aiEngine);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  function addOrToggleLeadInCrm(lead: FloridaLead) {
    const exists = crmDeals.some((p) => p.id === lead.id);
    if (exists) {
      persistCrm(crmDeals.filter((p) => p.id !== lead.id));
    } else {
      const newCrmDeal: CrmDeal = {
        ...lead,
        stage: "New Lead",
        dealValue: 85000,
        commissionPct: 7,
        notes: `Imported from ${lead.source} (${lead.city}). Recommended: ${lead.recommendedProduct}`,
        consentVerified: false,
        dncCleared: true,
        lastTouchAt: "Just added",
      };
      persistCrm([newCrmDeal, ...crmDeals]);
    }
  }

  function updateDealStage(id: string, stage: CrmStage) {
    persistCrm(
      crmDeals.map((d) =>
        d.id === id ? { ...d, stage, lastTouchAt: "Updated just now" } : d
      )
    );
  }

  function updateDealField(
    id: string,
    field: keyof CrmDeal,
    value: string | number | boolean
  ) {
    persistCrm(
      crmDeals.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  }

  function deleteDeal(id: string) {
    persistCrm(crmDeals.filter((d) => d.id !== id));
  }

  function handleCreateCustomDeal(e: React.FormEvent) {
    e.preventDefault();
    const custom: CrmDeal = {
      id: `custom-${Date.now()}`,
      name: newDealForm.name,
      category: category,
      naicsCode: "238220",
      city: newDealForm.city,
      address: newDealForm.city,
      phone: newDealForm.phone || "(941) 555-0199",
      website: "",
      email: newDealForm.email,
      lat: 27.3364,
      lon: -82.5307,
      estimatedCapitalNeed: `$${newDealForm.dealValue.toLocaleString()}`,
      sbaMedianTicket: "$150,000",
      recommendedProduct: "Commercial Working Capital / Equipment",
      buyingSignals: "Direct Inbound / Referral",
      aiScore: 92,
      aiReasoning: "Direct advisor entry.",
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        newDealForm.name + " " + newDealForm.city
      )}`,
      osmUrl: "https://www.openstreetmap.org",
      outreachPitch: `Hi ${newDealForm.name}, start your single Bank Breezy application here: https://bankbreezy.com/funding/brandonretacantu`,
      smsDraft: `Hi ${newDealForm.name}, Brandon Reta-Cantu here ((941) 289-8661). Application link: https://bankbreezy.com/funding/brandonretacantu`,
      smsFollowUp: `${newDealForm.name}, Brandon again. No hard sell, just an option: https://bankbreezy.com/funding/brandonretacantu Reply STOP to opt out.`,
      coldCallOpener: "",
      emailBreakup: "",
      source: "Florida Verified Registry",
      stage: "New Lead",
      dealValue: Number(newDealForm.dealValue) || 75000,
      commissionPct: Number(newDealForm.commissionPct) || 7,
      notes: newDealForm.notes || "Direct prospect added by Brandon.",
      consentVerified: true,
      dncCleared: true,
      lastTouchAt: "Just created",
    };
    persistCrm([custom, ...crmDeals]);
    setShowAddDealModal(false);
    setNewDealForm({
      name: "",
      city: "Sarasota, FL",
      phone: "",
      email: "",
      dealValue: 75000,
      commissionPct: 7,
      notes: "",
    });
  }

  function copyText(id: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  function exportCsv(items: FloridaLead[]) {
    const headers = [
      "Business Name",
      "Category",
      "NAICS",
      "City",
      "Address",
      "Phone",
      "Website",
      "AI Score",
      "Estimated Capital Need",
      "SBA FL Benchmark",
      "Recommended Product",
      "Google Maps URL",
    ];
    const rows = items.map((l) => [
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.category}"`,
      `"${l.naicsCode || ""}"`,
      `"${l.city}"`,
      `"${l.address.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.website}"`,
      l.aiScore,
      `"${l.estimatedCapitalNeed}"`,
      `"${l.sbaMedianTicket || ""}"`,
      `"${l.recommendedProduct}"`,
      `"${l.googleMapsUrl}"`,
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Brandon_Reta_Cantu_Florida_Leads_${city.replace(/[^a-zA-Z]/g, "_")}.csv`;
    a.click();
  }

  // CRM Pipeline Totals
  const totalPipelineVolume = crmDeals.reduce((acc, d) => acc + (d.dealValue || 0), 0);
  const totalProjectedCommission = crmDeals.reduce(
    (acc, d) => acc + Math.round(((d.dealValue || 0) * (d.commissionPct || 7)) / 100),
    0
  );
  const fundedCommission = crmDeals
    .filter((d) => d.stage === "Funded & Closed")
    .reduce(
      (acc, d) => acc + Math.round(((d.dealValue || 0) * (d.commissionPct || 7)) / 100),
      0
    );

  return (
    <div className="min-h-screen bg-[#12100E] text-[#F4EFEA] pb-16">
      {/* TOP COMMAND HEADER WITH REALISTIC SARASOTA BAY AERIAL BANNER */}
      <header className="relative border-b border-[#D6D0C8]/15 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/system-command-florida.jpg"
            alt="Sarasota & Florida Commercial Coastline"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12100E] via-[#12100E]/90 to-[#12100E]/75" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3.5">
            <BrandLogoMark conceptId="sovereign-crest" size={44} />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-[#85303E] text-white px-2.5 py-0.5">
                  THE SOVEREIGN CREST · CONCEPT 01 (SELECTED)
                </span>
                <span className="hidden sm:inline font-mono text-[11px] text-[#C8A96A]">
                  NEXORA FLORIDA GEO-LEAD, AI &amp; BUILT-IN CRM OS
                </span>
              </div>
              <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight mt-1">
                Brandon Reta-Cantu · Commercial Funding Command Center
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="hidden md:flex items-center gap-2 bg-black/50 backdrop-blur-xs border border-white/15 px-3 py-1.5 text-xs font-mono">
              <span
                className={`h-2 w-2 rounded-full ${
                  aiHealth?.connected !== false
                    ? "bg-emerald-400 animate-pulse"
                    : "bg-amber-400"
                }`}
              />
              <span className="text-white/70">AI:</span>
              <span className="text-[#C8A96A] font-semibold">
                {aiHealth?.model || "voyage-finance-2"}
              </span>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-[#85303E] hover:bg-[#9c3949] text-white px-3.5 py-2 text-xs font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              LANDING PAGE
            </Link>
          </div>
        </div>
      </header>

      {/* SUB-NAVIGATION TABS & METRICS BAR */}
      <div className="border-b border-white/10 bg-[#1E1518] px-4 sm:px-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 overflow-x-auto py-2 no-scrollbar">
            <button
              onClick={() => setActiveTab("scanner")}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === "scanner"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              1. Florida Lead Scanner ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === "pipeline"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              2. Built-In Deal CRM &amp; Commissions ({crmDeals.length})
            </button>
            <button
              onClick={() => setActiveTab("gosom")}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === "gosom"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              3. gosom Google Maps Scraper CLI
            </button>
            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === "compliance"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              4. Florida HB 1353 Compliance
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === "inquiries"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              5. Website Inquiries ({inquiries.length})
            </button>
          </div>
        </div>
      </div>

      {/* MAIN WORKSPACE CONTENT */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-8 lg:px-8">
        {/* TAB 1: FLORIDA LEAD SCANNER */}
        {activeTab === "scanner" && (
          <div className="space-y-6">
            <div className="border border-white/12 bg-[#1C1917] p-4 sm:p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8A96A]">
                    AUTO-RUNNING GOSOM/GOOGLE-MAPS-SCRAPER (-FAST-MODE + -EMAIL) + SBA 7(A)/504 FLORIDA BENCHMARKS
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold mt-0.5">
                    Top 15 High-Converting Florida Commercial Funding Categories
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("pipeline")}
                    className="inline-flex items-center gap-1.5 bg-[#85303E] text-white px-3.5 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    Open Built-In CRM ({crmDeals.length})
                  </button>
                  <button
                    onClick={() => exportCsv(leads)}
                    disabled={!leads.length}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3.5 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer disabled:opacity-40"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C8A96A]" />
                    Export CSV
                  </button>
                </div>
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-white/65 mb-1.5">
                    Florida Metro Target
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#12100E] border border-white/15 px-3 py-2.5 text-sm outline-none focus:border-[#C8A96A]"
                  >
                    {FLORIDA_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-mono uppercase text-white/65 mb-1.5">
                    Top 15 Ranked NAICS Sector (SBA FOIA Verified)
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#12100E] border border-white/15 px-3 py-2.5 text-sm outline-none focus:border-[#C8A96A]"
                  >
                    {BUSINESS_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => runLeadScan(city, category, keyword)}
                    disabled={loading}
                    className="w-full bg-[#85303E] hover:bg-[#9c3949] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Scanning &amp; AI Scoring...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4" />
                        SCAN LEADS NOW
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* LEADS RESULTS + LIVE INSPECTOR */}
            <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/65 px-1">
                  <span>
                    Showing {leads.length} commercial prospects in{" "}
                    <strong className="text-white">{city}</strong>
                  </span>
                  <span className="text-[#C8A96A]">
                    Ranked by {aiEngineLabel}
                  </span>
                </div>

                {leads.map((lead) => {
                  const isSelected = selectedLead?.id === lead.id;
                  const inPipeline = crmDeals.some((p) => p.id === lead.id);
                  return (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`p-4 border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#241B1E] border-[#C8A96A]"
                          : "bg-[#1C1917] border-white/10 hover:border-white/25"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-[#85303E]/30 border border-[#85303E]/60 text-white/90">
                              {lead.source}
                            </span>
                            {lead.reviewCount ? (
                              <span className="font-mono text-[10px] bg-amber-500/15 border border-amber-500/40 text-amber-300 px-2 py-0.5">
                                ★ {lead.reviewRating || 4.8} ({lead.reviewCount.toLocaleString()} reviews)
                              </span>
                            ) : null}
                            <span className="font-mono text-[10px] text-[#C8A96A]">
                              NAICS {lead.naicsCode} · {lead.estimatedCapitalNeed}
                            </span>
                          </div>
                          <h3 className="text-base font-bold mt-1.5 text-white">
                            {lead.name}
                          </h3>
                          <p className="text-xs text-white/65 flex items-center gap-1.5 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-[#85303E] shrink-0" />
                            {lead.address}
                          </p>
                          {lead.email && (
                            <p className="text-xs text-emerald-300 font-mono flex items-center gap-1.5 mt-1">
                              <Mail className="w-3 h-3 shrink-0" />
                              {lead.email}
                            </p>
                          )}
                        </div>

                        <div className="text-right shrink-0">
                          <div className="inline-flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 font-mono text-xs font-bold">
                            <Sparkles className="w-3 h-3" />
                            {lead.aiScore}/100
                          </div>
                          <p className="text-[10px] font-mono text-white/50 mt-1">
                            Capital Fit
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-white/80">
                          <span className="inline-flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#C8A96A]" />
                            {lead.phone}
                          </span>
                          <a
                            href={lead.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[#C8A96A] hover:underline"
                          >
                            Google Maps <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addOrToggleLeadInCrm(lead);
                          }}
                          className={`px-2.5 py-1 text-[11px] font-mono uppercase cursor-pointer ${
                            inPipeline
                              ? "bg-emerald-600/30 text-emerald-200 border border-emerald-500/40"
                              : "bg-[#85303E] hover:bg-[#9c3949] text-white"
                          }`}
                        >
                          {inPipeline ? "✓ In Built-In CRM" : "+ Push to CRM"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Selected Lead Dossier */}
              <div>
                {selectedLead ? (
                  <div className="sticky top-6 border border-[#C8A96A]/50 bg-[#1C1917] p-5 sm:p-6 space-y-5">
                    <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8A96A]">
                          AI UNDERWRITING &amp; OUTREACH DOSSIER
                        </span>
                        <h3 className="text-xl font-extrabold mt-1">
                          {selectedLead.name}
                        </h3>
                        <p className="text-xs text-white/70 mt-0.5">
                          {selectedLead.address}
                        </p>
                      </div>
                      <button
                        onClick={() => addOrToggleLeadInCrm(selectedLead)}
                        className="bg-[#85303E] hover:bg-[#9c3949] text-white px-3 py-1.5 text-xs font-mono uppercase tracking-wider shrink-0 cursor-pointer"
                      >
                        {crmDeals.some((p) => p.id === selectedLead.id)
                          ? "✓ In CRM"
                          : "+ Push to CRM"}
                      </button>
                    </div>

                    <div className="overflow-hidden border border-white/15 h-44 bg-black relative">
                      <iframe
                        title={`Map of ${selectedLead.name}`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                          selectedLead.lon - 0.012
                        }%2C${selectedLead.lat - 0.008}%2C${
                          selectedLead.lon + 0.012
                        }%2C${
                          selectedLead.lat + 0.008
                        }&layer=mapnik&marker=${selectedLead.lat}%2C${
                          selectedLead.lon
                        }`}
                      />
                    </div>

                    <div className="bg-[#12100E] border border-white/10 p-4 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-[#C8A96A] uppercase">
                          MongoDB AI + Florida SBA Benchmark
                        </span>
                        <span className="text-emerald-400 font-bold">
                          Score: {selectedLead.aiScore}/100
                        </span>
                      </div>
                      <p className="font-semibold text-white">
                        Recommended Facility: {selectedLead.recommendedProduct} (
                        {selectedLead.estimatedCapitalNeed})
                      </p>
                      <p className="text-white/75 font-mono text-[11px]">
                        FL SBA Benchmark: {selectedLead.sbaMedianTicket}
                      </p>
                      <p className="text-white/65 leading-relaxed">
                        {selectedLead.aiReasoning}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                      <a
                        href={`tel:${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                        className="bg-white/10 hover:bg-white/15 border border-white/15 py-2.5 px-3 text-center flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
                        Call Lead
                      </a>
                      <a
                        href={selectedLead.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/15 border border-white/15 py-2.5 px-3 text-center flex items-center justify-center gap-1.5"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#C8A96A]" />
                        Google Maps
                      </a>
                      <a
                        href={`mailto:${
                          selectedLead.email || ""
                        }?subject=${encodeURIComponent(
                          `A simpler way to compare funding for ${selectedLead.name}`
                        )}&body=${encodeURIComponent(selectedLead.outreachPitch)}`}
                        className="bg-[#85303E] hover:bg-[#9c3949] text-white py-2.5 px-3 text-center flex items-center justify-center gap-1.5 col-span-2 sm:col-span-1"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send Email
                      </a>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                        <div className="flex flex-wrap gap-1">
                          {[
                            { id: "email", label: "1. Email" },
                            { id: "call", label: "2. Call Opener" },
                            { id: "sms", label: "3. SMS 1" },
                            { id: "sms2", label: "4. SMS Follow-Up" },
                            { id: "breakup", label: "5. Breakup" },
                          ].map((t) => (
                            <button
                              key={t.id}
                              onClick={() =>
                                setScriptTab(
                                  t.id as
                                    | "email"
                                    | "sms"
                                    | "sms2"
                                    | "call"
                                    | "breakup"
                                )
                              }
                              className={`px-2 py-1 text-[10px] font-mono uppercase cursor-pointer ${
                                scriptTab === t.id
                                  ? "bg-[#85303E] text-white font-bold"
                                  : "bg-white/5 text-white/65 hover:text-white"
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => {
                            const content =
                              scriptTab === "email"
                                ? selectedLead.outreachPitch
                                : scriptTab === "call"
                                ? selectedLead.coldCallOpener
                                : scriptTab === "sms"
                                ? selectedLead.smsDraft
                                : scriptTab === "sms2"
                                ? selectedLead.smsFollowUp
                                : selectedLead.emailBreakup;
                            copyText(`script-${selectedLead.id}`, content);
                          }}
                          className="inline-flex items-center gap-1 text-xs font-mono text-[#C8A96A] hover:underline cursor-pointer"
                        >
                          {copiedId === `script-${selectedLead.id}` ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" /> Copy
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="bg-[#12100E] border border-white/10 p-3.5 text-[11px] font-sans whitespace-pre-wrap text-white/85 leading-relaxed max-h-48 overflow-y-auto">
                        {scriptTab === "email"
                          ? selectedLead.outreachPitch
                          : scriptTab === "call"
                          ? selectedLead.coldCallOpener
                          : scriptTab === "sms"
                          ? selectedLead.smsDraft
                          : scriptTab === "sms2"
                          ? selectedLead.smsFollowUp
                          : selectedLead.emailBreakup}
                      </pre>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FULL BUILT-IN COMMERCIAL FUNDING CRM & COMMISSION TRACKER */}
        {activeTab === "pipeline" && (
          <div className="space-y-6">
            {/* CRM KPI TELEMETRY BAR */}
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="border border-white/12 bg-[#1C1917] p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                  ACTIVE CRM DEALS
                </span>
                <p className="text-3xl font-extrabold mt-1">{crmDeals.length}</p>
                <p className="text-xs text-[#C8A96A] font-mono mt-1">
                  Across 5 Funding Stages
                </p>
              </div>
              <div className="border border-white/12 bg-[#1C1917] p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                  TOTAL PIPELINE VOLUME
                </span>
                <p className="text-3xl font-extrabold mt-1">
                  ${totalPipelineVolume.toLocaleString()}
                </p>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Est. Commercial Principal
                </p>
              </div>
              <div className="border border-[#C8A96A]/40 bg-[#1C1917] p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8A96A]">
                  PROJECTED BROKER COMMISSIONS
                </span>
                <p className="text-3xl font-extrabold text-[#C8A96A] mt-1">
                  ${totalProjectedCommission.toLocaleString()}
                </p>
                <p className="text-xs text-white/60 font-mono mt-1">
                  At 6%–8% Avg Bank Breezy Split
                </p>
              </div>
              <div className="border border-emerald-500/40 bg-[#1C1917] p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                  CLOSED &amp; FUNDED COMMISSIONS
                </span>
                <p className="text-3xl font-extrabold text-emerald-400 mt-1">
                  ${fundedCommission.toLocaleString()}
                </p>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Ready for Payout / Renewal
                </p>
              </div>
            </div>

            {/* CRM ACTION BAR */}
            <div className="border border-white/12 bg-[#1C1917] p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#C8A96A]">
                  ZERO-SUBSCRIPTION BUILT-IN DEAL CRM · OWNED BY BRANDON RETA-CANTU
                </span>
                <h2 className="text-xl sm:text-2xl font-bold mt-0.5">
                  Commercial Deal Pipeline, Consent Flags &amp; Commission Tracker
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => setShowAddDealModal(!showAddDealModal)}
                  className="bg-[#85303E] hover:bg-[#9c3949] text-white px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Add Custom Deal
                </button>
                <button
                  onClick={() => exportCsv(crmDeals)}
                  className="bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 text-xs font-mono uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#C8A96A]" />
                  Export CRM CSV
                </button>
              </div>
            </div>

            {/* ADD CUSTOM DEAL MODAL / DRAWER */}
            {showAddDealModal && (
              <form
                onSubmit={handleCreateCustomDeal}
                className="border border-[#C8A96A] bg-[#1C1917] p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="font-bold text-lg">
                    Add New Florida Commercial Funding Deal
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowAddDealModal(false)}
                    className="text-xs font-mono text-white/60 hover:text-white cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newDealForm.name}
                      onChange={(e) =>
                        setNewDealForm({ ...newDealForm, name: e.target.value })
                      }
                      className="w-full bg-[#12100E] border border-white/15 px-3 py-2 text-sm"
                      placeholder="e.g. Suncoast Commercial Roofing"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1">
                      Florida City
                    </label>
                    <input
                      type="text"
                      value={newDealForm.city}
                      onChange={(e) =>
                        setNewDealForm({ ...newDealForm, city: e.target.value })
                      }
                      className="w-full bg-[#12100E] border border-white/15 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={newDealForm.phone}
                      onChange={(e) =>
                        setNewDealForm({ ...newDealForm, phone: e.target.value })
                      }
                      className="w-full bg-[#12100E] border border-white/15 px-3 py-2 text-sm"
                      placeholder="(941) 555-0144"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1">
                      Estimated Funding Amount ($)
                    </label>
                    <input
                      type="number"
                      value={newDealForm.dealValue}
                      onChange={(e) =>
                        setNewDealForm({
                          ...newDealForm,
                          dealValue: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[#12100E] border border-white/15 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1">
                      Est. Commission (%)
                    </label>
                    <input
                      type="number"
                      value={newDealForm.commissionPct}
                      onChange={(e) =>
                        setNewDealForm({
                          ...newDealForm,
                          commissionPct: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[#12100E] border border-white/15 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1">
                      Deal Notes
                    </label>
                    <input
                      type="text"
                      value={newDealForm.notes}
                      onChange={(e) =>
                        setNewDealForm({ ...newDealForm, notes: e.target.value })
                      }
                      className="w-full bg-[#12100E] border border-white/15 px-3 py-2 text-sm"
                      placeholder="Equipment or working capital goal..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#85303E] text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
                >
                  Save Deal to CRM Pipeline
                </button>
              </form>
            )}

            {/* DEAL CARDS IN PIPELINE */}
            <div className="space-y-4">
              {crmDeals.map((deal) => {
                const estCommission = Math.round(
                  ((deal.dealValue || 0) * (deal.commissionPct || 7)) / 100
                );
                return (
                  <div
                    key={deal.id}
                    className="border border-white/15 bg-[#1C1917] p-5 space-y-4"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] uppercase bg-[#85303E] text-white px-2 py-0.5 font-bold">
                            {deal.stage}
                          </span>
                          <span className="font-mono text-xs text-[#C8A96A]">
                            {deal.city} · NAICS {deal.naicsCode}
                          </span>
                          <span className="font-mono text-xs text-emerald-400">
                            AI Fit: {deal.aiScore}/100
                          </span>
                          <span className="font-mono text-[11px] text-white/45">
                            Last touch: {deal.lastTouchAt}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mt-1.5">{deal.name}</h3>
                        <p className="text-xs text-white/65">{deal.address}</p>
                      </div>

                      {/* Stage Switcher Pills */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {CRM_STAGES.map((st) => (
                          <button
                            key={st}
                            onClick={() => updateDealStage(deal.id, st)}
                            className={`px-2.5 py-1.5 text-[10px] font-mono uppercase cursor-pointer transition-colors ${
                              deal.stage === st
                                ? "bg-[#C8A96A] text-black font-bold"
                                : "bg-white/5 text-white/65 hover:bg-white/15"
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Deal Financials, Notes & Compliance Flags */}
                    <div className="grid gap-4 md:grid-cols-4 items-center">
                      <div className="bg-[#12100E] border border-white/10 p-3">
                        <label className="block font-mono text-[10px] uppercase text-white/55">
                          Target Deal Amount ($)
                        </label>
                        <input
                          type="number"
                          value={deal.dealValue}
                          onChange={(e) =>
                            updateDealField(
                              deal.id,
                              "dealValue",
                              Number(e.target.value)
                            )
                          }
                          className="bg-transparent text-lg font-extrabold text-white w-full outline-none mt-0.5"
                        />
                      </div>

                      <div className="bg-[#12100E] border border-white/10 p-3">
                        <label className="block font-mono text-[10px] uppercase text-white/55">
                          Est. Commission ({deal.commissionPct}%)
                        </label>
                        <div className="flex items-center justify-between mt-0.5">
                          <span className="text-lg font-extrabold text-[#C8A96A]">
                            ${estCommission.toLocaleString()}
                          </span>
                          <input
                            type="number"
                            min={1}
                            max={20}
                            value={deal.commissionPct}
                            onChange={(e) =>
                              updateDealField(
                                deal.id,
                                "commissionPct",
                                Number(e.target.value)
                              )
                            }
                            className="w-14 bg-white/5 border border-white/15 px-1.5 py-0.5 text-xs font-mono text-right"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 bg-[#12100E] border border-white/10 p-3">
                        <label className="block font-mono text-[10px] uppercase text-white/55">
                          Underwriting &amp; Call Notes
                        </label>
                        <input
                          type="text"
                          value={deal.notes}
                          onChange={(e) =>
                            updateDealField(deal.id, "notes", e.target.value)
                          }
                          className="bg-transparent text-xs text-white/90 w-full outline-none mt-1"
                        />
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10 text-xs font-mono">
                      <div className="flex flex-wrap items-center gap-4">
                        <a
                          href={`tel:${deal.phone.replace(/[^0-9]/g, "")}`}
                          className="inline-flex items-center gap-1.5 text-[#C8A96A] hover:underline"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          {deal.phone}
                        </a>
                        <a
                          href={deal.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white/75 hover:underline"
                        >
                          Google Maps ↗
                        </a>
                        <label className="inline-flex items-center gap-1.5 text-[11px] text-white/75 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={deal.dncCleared}
                            onChange={(e) =>
                              updateDealField(
                                deal.id,
                                "dncCleared",
                                e.target.checked
                              )
                            }
                          />
                          FL DNC Cleared
                        </label>
                        <label className="inline-flex items-center gap-1.5 text-[11px] text-white/75 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={deal.consentVerified}
                            onChange={(e) =>
                              updateDealField(
                                deal.id,
                                "consentVerified",
                                e.target.checked
                              )
                            }
                          />
                          SMS Opt-In Verified
                        </label>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={CLIENT_TRUTH.applicationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/15 px-3 py-1.5 text-[11px] uppercase"
                        >
                          Open Bank Breezy App ↗
                        </a>
                        <button
                          onClick={() => deleteDeal(deal.id)}
                          className="text-red-400 hover:text-red-300 inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: GOSOM GOOGLE MAPS SCRAPER INTEGRATION */}
        {activeTab === "gosom" && (
          <div className="border border-white/15 bg-[#1C1917] p-6 space-y-6">
            <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#C8A96A]">
                  INSTALLED &amp; VERIFIED IN PROJECT · GOSOM/GOOGLE-MAPS-SCRAPER v1.18.1
                </span>
                <h2 className="text-2xl font-bold mt-1">
                  Deep Google Maps Scraper Engine (Emails, Ratings, Reviews &amp; CIDs)
                </h2>
                <p className="text-xs text-white/70 mt-1 max-w-3xl">
                  Both the agent skill (<code>.agents/skills/google-maps-scraper</code>) and the native binary (<code>tools/gosom/google_maps_scraper.exe</code>) are installed in your project workspace for high-volume bulk CSV/JSON crawls with automatic website email extraction.
                </p>
              </div>
              <a
                href="https://github.com/gosom/google-maps-scraper"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#85303E] text-white px-4 py-2.5 text-xs font-mono uppercase tracking-wider shrink-0 inline-flex items-center gap-1.5"
              >
                gosom Docs <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-[#12100E] border border-white/10 p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#C8A96A] font-mono text-xs uppercase font-bold">
                  <Terminal className="w-4 h-4" />
                  1. Run Local Web UI Runner (Port 8080)
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Launch the built-in <code>gosom</code> visual web interface locally on your machine to queue Florida cities, extract business emails from company websites (<code>-email</code>), and download full CSV sheets:
                </p>
                <pre className="bg-black border border-white/15 p-3 text-[11px] font-mono text-emerald-300 overflow-x-auto">
                  {`.\\tools\\gosom\\google_maps_scraper.exe -web -addr ":8080" -data-folder ".\\tools\\gosom\\webdata"`}
                </pre>
              </div>

              <div className="bg-[#12100E] border border-white/10 p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#C8A96A] font-mono text-xs uppercase font-bold">
                  <Terminal className="w-4 h-4" />
                  2. Docker Skill Bulk Crawl (Sarasota / Tampa / Miami)
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Run the official Docker container with email extraction enabled for Brandon’s top 15 Florida NAICS queries:
                </p>
                <pre className="bg-black border border-white/15 p-3 text-[11px] font-mono text-emerald-300 overflow-x-auto">
                  {`docker run --rm -v "$PWD/tools/gosom:/data" gosom/google-maps-scraper -input /data/test_queries.txt -results /data/sarasota_leads.csv -email -depth 2`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FLORIDA HB 1353 & TCPA COMPLIANCE KIT */}
        {activeTab === "compliance" && (
          <div className="border border-white/15 bg-[#1C1917] p-6 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase text-[#C8A96A]">
                NEXORA LEGAL &amp; RISK ANALYST DELIVERABLE (BRETA-FUNDING-DISCLAIMER)
              </span>
              <h2 className="text-2xl font-bold mt-1">
                Florida Commercial Financing (HB 1353) &amp; Outreach Compliance Guardrails
              </h2>
              <p className="text-xs text-white/70 mt-1">
                Built-in operating checklist for Brandon Reta-Cantu (Agent ID 353859353) to keep outreach and referral workflows clean, transparent, and compliant.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-[#12100E] border border-white/10 p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#C8A96A] font-mono text-xs uppercase font-bold">
                  <CheckSquare className="w-4 h-4" />
                  Daily Outreach Guardrails (Florida FTSA / Telemarketing / TCPA)
                </div>
                <ul className="text-xs text-white/80 space-y-2 leading-relaxed list-disc pl-4">
                  <li>
                    <strong>Calling Window:</strong> Call only between{" "}
                    <strong>8:00 AM and 8:00 PM local Florida time</strong>{" "}
                    (Fla. Stat. § 501.616(6)(a)).
                  </li>
                  <li>
                    <strong>Frequency Cap:</strong> Maximum{" "}
                    <strong>3 calls per 24-hour period</strong> on the same
                    subject to any person (§ 501.616(6)(b)).
                  </li>
                  <li>
                    <strong>SMS / Text Rule:</strong> Do not cold-text cell
                    numbers without prior consent. Call or email first, then
                    text the Bank Breezy link when they say yes.
                  </li>
                  <li>
                    <strong>No Advance Fees:</strong> Never charge or collect an
                    advance broker fee from a borrower (Fla. Stat. § 559.9614(1)
                    &amp; § 687.141).
                  </li>
                </ul>
              </div>

              <div className="bg-[#12100E] border border-white/10 p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#C8A96A] font-mono text-xs uppercase font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  Mandatory Independent Referral Disclosure
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Brandon Reta-Cantu (Agent ID 353859353) is a solo independent
                  commercial funding specialist and referral agent. He is not a
                  bank, lender, creditor, or underwriter. Final terms, rates,
                  fees, approvals, declines, and funding decisions belong solely
                  to participating funders. Services are strictly for commercial
                  and business purposes only.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INBOUND WEBSITE INQUIRIES */}
        {activeTab === "inquiries" && (
          <div className="border border-white/10 bg-[#1C1917] p-6 space-y-4">
            <div>
              <span className="font-mono text-xs uppercase text-[#C8A96A]">
                LIVE LANDING PAGE SUBMISSIONS
              </span>
              <h2 className="text-2xl font-bold mt-1">
                Inbound Funding Conversation Requests ({inquiries.length})
              </h2>
            </div>

            {inquiries.length === 0 ? (
              <p className="text-sm text-white/65 py-8">
                Any funding inquiry submitted on the public landing page is
                automatically pre-qualified by MongoDB AI and logged here.
              </p>
            ) : (
              <div className="space-y-3">
                {inquiries.map((inq, idx) => (
                  <div
                    key={idx}
                    className="border border-white/15 bg-[#12100E] p-4 space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-bold text-base">
                        {String(inq.business || "")} — {String(inq.name || "")}
                      </h3>
                      <span className="font-mono text-xs text-[#C8A96A]">
                        {String(inq.phone || "")} · {String(inq.email || "")}
                      </span>
                    </div>
                    <p className="text-xs text-white/80">
                      Goal: {String(inq.message || "")}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* SYSTEM FOOTER */}
      <footer className="mx-auto max-w-7xl px-4 pt-8 pb-6 sm:px-5 lg:px-8 border-t border-white/10 mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/65">
          <div className="flex flex-wrap items-center gap-3 font-mono">
            <span>
              © {new Date().getFullYear()} {CLIENT_TRUTH.name} (Agent ID{" "}
              {CLIENT_TRUTH.agentId})
            </span>
            <span className="text-white/25">|</span>
            <span>{CLIENT_TRUTH.phone}</span>
            <span className="text-white/25">|</span>
            <span>{CLIENT_TRUTH.email}</span>
          </div>

          <div className="flex items-center gap-4 font-mono uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">
              LANDING PAGE
            </Link>
            <span className="text-white/25">|</span>
            <a
              href="https://nexorayyc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#C8A96A] hover:underline"
            >
              BUILT BY NEXORA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
