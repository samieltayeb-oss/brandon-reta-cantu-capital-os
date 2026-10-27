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
    "scanner" | "pipeline" | "brands" | "compliance" | "inquiries"
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
    "email" | "sms" | "call" | "breakup"
  >("email");
  const [aiEngineLabel, setAiEngineLabel] = useState(
    "rerank-2 + voyage-finance-2 (ai.mongodb.com)"
  );
  const [aiHealth, setAiHealth] = useState<AIHealth | null>(null);

  const [savedPipeline, setSavedPipeline] = useState<FloridaLead[]>([]);
  const [inquiries, setInquiries] = useState<Array<Record<string, unknown>>>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/ai-status")
      .then((r) => r.json())
      .then((d) => setAiHealth(d))
      .catch(() => null);

    try {
      const saved = JSON.parse(
        localStorage.getItem("nexora_brc_pipeline") || "[]"
      );
      setSavedPipeline(saved);
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

  function saveToPipeline(lead: FloridaLead) {
    const exists = savedPipeline.some((p) => p.id === lead.id);
    const updated = exists
      ? savedPipeline.filter((p) => p.id !== lead.id)
      : [lead, ...savedPipeline];
    setSavedPipeline(updated);
    try {
      localStorage.setItem("nexora_brc_pipeline", JSON.stringify(updated));
    } catch {
      // ignore
    }
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

  return (
    <div className="min-h-screen bg-[#12100E] text-[#F4EFEA]">
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

        <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 lg:px-8">
          <div className="flex items-center gap-4">
            <BrandLogoMark conceptId="palm-pillar" size={46} />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-[#9A5B42] text-white px-2.5 py-0.5">
                  THE PALM &amp; PILLAR ATELIER · CONCEPT 05
                </span>
                <span className="font-mono text-[11px] text-[#D6D0C8]">
                  NEXORA FLORIDA GEO-LEAD &amp; AI UNDERWRITING OS
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-1">
                Brandon Reta-Cantu · Commercial Funding Command Center
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-black/50 backdrop-blur-xs border border-white/15 px-3.5 py-2 text-xs font-mono">
              <span
                className={`h-2 w-2 rounded-full ${
                  aiHealth?.connected !== false
                    ? "bg-emerald-400 animate-pulse"
                    : "bg-amber-400"
                }`}
              />
              <span className="text-white/70">AI Engine:</span>
              <span className="text-[#D6D0C8] font-semibold">
                ai.mongodb.com ({aiHealth?.model || "voyage-finance-2"})
              </span>
            </div>

            <a
              href="/Brandon_Reta_Cantu_5_Brand_Concepts_NEXORA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-black/50 hover:bg-black/70 border border-white/20 px-3.5 py-2 text-xs font-mono uppercase tracking-wider"
            >
              <FileText className="w-3.5 h-3.5 text-[#9A5B42]" />
              5 Brand Concepts PDF
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-[#9A5B42] hover:bg-[#b0694d] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Luxury Landing Page
            </Link>
          </div>
        </div>
      </header>

      {/* SUB-NAVIGATION TABS & METRICS BAR */}
      <div className="border-b border-white/10 bg-[#1C1917] px-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            <button
              onClick={() => setActiveTab("scanner")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors ${
                activeTab === "scanner"
                  ? "bg-[#9A5B42] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              1. Top-15 Florida Maps Lead Scanner ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors ${
                activeTab === "pipeline"
                  ? "bg-[#9A5B42] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              2. Saved CRM Pipeline ({savedPipeline.length})
            </button>
            <button
              onClick={() => setActiveTab("brands")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors ${
                activeTab === "brands"
                  ? "bg-[#9A5B42] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              3. Brand Identity Studio (Concept #5 Active)
            </button>
            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors ${
                activeTab === "compliance"
                  ? "bg-[#9A5B42] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              4. Florida HB 1353 &amp; TCPA Compliance Kit
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors ${
                activeTab === "inquiries"
                  ? "bg-[#9A5B42] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              5. Inbound Website Leads ({inquiries.length})
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-5 text-xs font-mono text-white/65 py-2">
            <span>
              Advisor: <strong className="text-white">{CLIENT_TRUTH.name}</strong>
            </span>
            <span>
              ID: <strong className="text-[#9A5B42]">{CLIENT_TRUTH.agentId}</strong>
            </span>
            <span>
              Direct: <strong className="text-white">{CLIENT_TRUTH.phone}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* MAIN WORKSPACE CONTENT */}
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        {activeTab === "scanner" && (
          <div className="space-y-6">
            {/* SEARCH / FILTER BAR */}
            <div className="border border-white/12 bg-[#1C1917] p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#9A5B42]">
                    FREE OPENSTREETMAP OVERPASS + GOOGLE MAPS + SBA 7(A)/504 FLORIDA BENCHMARKS
                  </span>
                  <h2 className="text-xl font-bold mt-0.5">
                    Top 15 High-Converting Florida Commercial Funding Categories
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => exportCsv(leads)}
                    disabled={!leads.length}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3.5 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer disabled:opacity-40"
                  >
                    <Download className="w-3.5 h-3.5 text-[#9A5B42]" />
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
                    className="w-full bg-[#12100E] border border-white/15 px-3 py-2.5 text-sm outline-none focus:border-[#9A5B42]"
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
                    className="w-full bg-[#12100E] border border-white/15 px-3 py-2.5 text-sm outline-none focus:border-[#9A5B42]"
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
                    className="w-full bg-[#9A5B42] hover:bg-[#b0694d] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Scanning &amp; AI Scoring...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4" />
                        Scan Free Leads Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* LEADS RESULTS + LIVE INSPECTOR */}
            <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
              {/* Left Lead Cards List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-white/65 px-1">
                  <span>
                    Showing {leads.length} commercial prospects in{" "}
                    <strong className="text-white">{city}</strong>
                  </span>
                  <span className="text-[#D6D0C8]">
                    Ranked by {aiEngineLabel}
                  </span>
                </div>

                {leads.map((lead) => {
                  const isSelected = selectedLead?.id === lead.id;
                  const inPipeline = savedPipeline.some((p) => p.id === lead.id);
                  return (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`p-4 border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#24201D] border-[#9A5B42]"
                          : "bg-[#1C1917] border-white/10 hover:border-white/25"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-white/10 text-white/80">
                              {lead.source}
                            </span>
                            <span className="font-mono text-[10px] text-[#D6D0C8]">
                              NAICS {lead.naicsCode} · {lead.estimatedCapitalNeed}
                            </span>
                          </div>
                          <h3 className="text-base font-bold mt-1.5 text-white">
                            {lead.name}
                          </h3>
                          <p className="text-xs text-white/65 flex items-center gap-1.5 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-[#9A5B42] shrink-0" />
                            {lead.address}
                          </p>
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
                            <Phone className="w-3 h-3 text-[#9A5B42]" />
                            {lead.phone}
                          </span>
                          <a
                            href={lead.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[#D6D0C8] hover:underline"
                          >
                            Google Maps <ExternalLink className="w-3 h-3" />
                          </a>
                          <a
                            href={lead.osmUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-white/60 hover:underline"
                          >
                            OSM Pin <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            saveToPipeline(lead);
                          }}
                          className={`px-2.5 py-1 text-[11px] font-mono uppercase cursor-pointer ${
                            inPipeline
                              ? "bg-emerald-600/30 text-emerald-200 border border-emerald-500/40"
                              : "bg-white/10 hover:bg-white/20 text-white"
                          }`}
                        >
                          {inPipeline ? "✓ Saved in CRM" : "+ Save to CRM"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Selected Lead Dossier, Live Map & 4 Proven Outreach Scripts */}
              <div>
                {selectedLead ? (
                  <div className="sticky top-6 border border-[#9A5B42]/60 bg-[#1C1917] p-6 space-y-5">
                    <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9A5B42]">
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
                        onClick={() => saveToPipeline(selectedLead)}
                        className="bg-[#9A5B42] hover:bg-[#b0694d] text-white px-3 py-1.5 text-xs font-mono uppercase tracking-wider shrink-0 cursor-pointer"
                      >
                        {savedPipeline.some((p) => p.id === selectedLead.id)
                          ? "✓ In Pipeline"
                          : "+ Save Lead"}
                      </button>
                    </div>

                    {/* Interactive OpenStreetMap Embed */}
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

                    {/* AI Score, SBA Benchmark & Buying Signals */}
                    <div className="bg-[#12100E] border border-white/10 p-4 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-[#9A5B42] uppercase">
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

                    {/* Direct Action Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                      <a
                        href={`tel:${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                        className="bg-white/10 hover:bg-white/15 border border-white/15 py-2.5 px-3 text-center flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#9A5B42]" />
                        Call Lead
                      </a>
                      <a
                        href={selectedLead.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/15 border border-white/15 py-2.5 px-3 text-center flex items-center justify-center gap-1.5"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#9A5B42]" />
                        Google Maps
                      </a>
                      <a
                        href={`mailto:${
                          selectedLead.email || ""
                        }?subject=${encodeURIComponent(
                          `A simpler way to compare funding for ${selectedLead.name}`
                        )}&body=${encodeURIComponent(selectedLead.outreachPitch)}`}
                        className="bg-[#9A5B42] hover:bg-[#b0694d] text-white py-2.5 px-3 text-center flex items-center justify-center gap-1.5 col-span-2 sm:col-span-1"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send Email
                      </a>
                    </div>

                    {/* 4-Channel Script Selector (From NEXORA B2B Sales Strategist) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex gap-1">
                          {[
                            { id: "email", label: "1. First Email" },
                            { id: "call", label: "2. Cold Call" },
                            { id: "sms", label: "3. SMS (Consent)" },
                            { id: "breakup", label: "4. Breakup Email" },
                          ].map((t) => (
                            <button
                              key={t.id}
                              onClick={() =>
                                setScriptTab(
                                  t.id as "email" | "sms" | "call" | "breakup"
                                )
                              }
                              className={`px-2 py-1 text-[10px] font-mono uppercase cursor-pointer ${
                                scriptTab === t.id
                                  ? "bg-[#9A5B42] text-white font-bold"
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
                                : selectedLead.emailBreakup;
                            copyText(`script-${selectedLead.id}`, content);
                          }}
                          className="inline-flex items-center gap-1 text-xs font-mono text-[#D6D0C8] hover:underline cursor-pointer"
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
                          : selectedLead.emailBreakup}
                      </pre>
                      <p className="text-[10px] font-mono text-white/50">
                        *Compliance Rule: Call/email first (8 AM–8 PM local FL time, ≤3 calls/24h); send SMS only after express consent.
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SAVED PIPELINE */}
        {activeTab === "pipeline" && (
          <div className="border border-white/10 bg-[#1C1917] p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#9A5B42]">
                  BRANDON RETA-CANTU · SAVED FLORIDA PROSPECTS
                </span>
                <h2 className="text-2xl font-bold mt-1">
                  Active Commercial Deal Pipeline ({savedPipeline.length})
                </h2>
              </div>
              {savedPipeline.length > 0 && (
                <button
                  onClick={() => exportCsv(savedPipeline)}
                  className="bg-[#9A5B42] text-white px-4 py-2 text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Export Saved CRM CSV
                </button>
              )}
            </div>

            {savedPipeline.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <p className="text-white/70">
                  No leads saved yet. Click <strong>+ Save to CRM</strong> on any
                  Florida business in the scanner tab.
                </p>
                <button
                  onClick={() => setActiveTab("scanner")}
                  className="bg-[#9A5B42] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Go to Florida Lead Scanner
                </button>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {savedPipeline.map((lead) => (
                  <div
                    key={lead.id}
                    className="border border-white/15 bg-[#12100E] p-5 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-[10px] text-[#9A5B42]">
                          {lead.city} · NAICS {lead.naicsCode}
                        </span>
                        <h3 className="text-lg font-bold mt-0.5">{lead.name}</h3>
                        <p className="text-xs text-white/65">{lead.address}</p>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-400">
                        {lead.aiScore}/100
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono pt-2 border-t border-white/10">
                      <a
                        href={`tel:${lead.phone}`}
                        className="text-[#D6D0C8] hover:underline"
                      >
                        {lead.phone}
                      </a>
                      <a
                        href={lead.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/75 hover:underline"
                      >
                        Google Maps ↗
                      </a>
                      <button
                        onClick={() => saveToPipeline(lead)}
                        className="ml-auto text-red-400 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: 5 BRAND IDENTITY SYSTEMS */}
        {activeTab === "brands" && (
          <div className="space-y-6">
            <div className="border border-[#9A5B42]/60 bg-[#1C1917] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#9A5B42]">
                  ACTIVE MASTER IDENTITY: CONCEPT 05 · THE PALM &amp; PILLAR ATELIER
                </span>
                <h2 className="text-2xl font-extrabold mt-1">
                  5 Complete Logo &amp; Brand Identity Systems
                </h2>
                <p className="text-sm text-white/70 mt-1 max-w-2xl">
                  Concept 05 (The Palm &amp; Pillar Atelier) is currently set as the default master brand across the platform until Brandon selects otherwise.
                </p>
              </div>
              <a
                href="/Brandon_Reta_Cantu_5_Brand_Concepts_NEXORA.pdf"
                download
                className="bg-[#9A5B42] text-white px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-2 shrink-0"
              >
                <Download className="w-4 h-4" />
                Download 5-Concept PDF
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BRAND_THEMES.map((theme) => (
                <div
                  key={theme.id}
                  className={`border bg-[#1C1917] overflow-hidden flex flex-col justify-between ${
                    theme.id === "palm-pillar"
                      ? "border-[#9A5B42] ring-1 ring-[#9A5B42]"
                      : "border-white/15"
                  }`}
                >
                  <div>
                    <div
                      style={{
                        backgroundColor: theme.bg,
                        color: theme.text,
                        borderBottom: `1px solid ${theme.border}`,
                      }}
                      className="p-8 flex flex-col items-center justify-center text-center min-h-[210px]"
                    >
                      <BrandLogoMark conceptId={theme.id} size={74} />
                      <p
                        style={{ fontFamily: theme.headingFont }}
                        className="mt-4 text-lg font-extrabold uppercase tracking-wider"
                      >
                        {CLIENT_TRUTH.name}
                      </p>
                      <p
                        style={{ color: theme.primary }}
                        className="font-mono text-[10px] uppercase tracking-[0.22em] mt-0.5"
                      >
                        {theme.name}
                      </p>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#9A5B42]">
                          CONCEPT {theme.number}{" "}
                          {theme.id === "palm-pillar" ? "(DEFAULT ACTIVE)" : ""}
                        </span>
                        <div className="flex gap-1.5">
                          {[
                            theme.bg,
                            theme.primary,
                            theme.accent,
                            theme.gold,
                            theme.text,
                          ].map((hex, i) => (
                            <span
                              key={i}
                              title={hex}
                              style={{ backgroundColor: hex }}
                              className="w-4 h-4 border border-white/25"
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold">{theme.name}</h3>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {theme.rationale}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border-t border-white/10 bg-[#12100E] flex items-center justify-between text-xs font-mono">
                    <span className="text-white/60">Primary: {theme.primary}</span>
                    <Link href="/" className="text-[#D6D0C8] hover:underline">
                      Preview on Landing Page →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FLORIDA HB 1353 & TCPA COMPLIANCE KIT */}
        {activeTab === "compliance" && (
          <div className="border border-white/15 bg-[#1C1917] p-6 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase text-[#9A5B42]">
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
                <div className="flex items-center gap-2 text-[#9A5B42] font-mono text-xs uppercase font-bold">
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
                    numbers from Maps without prior consent. Call or email first,
                    then text the Bank Breezy link when they say yes.
                  </li>
                  <li>
                    <strong>No Advance Fees:</strong> Never charge or collect an
                    advance broker fee from a borrower (Fla. Stat. § 559.9614(1)
                    &amp; § 687.141).
                  </li>
                </ul>
              </div>

              <div className="bg-[#12100E] border border-white/10 p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#9A5B42] font-mono text-xs uppercase font-bold">
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
              <span className="font-mono text-xs uppercase text-[#9A5B42]">
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
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-base">
                        {String(inq.business || "")} — {String(inq.name || "")}
                      </h3>
                      <span className="font-mono text-xs text-[#9A5B42]">
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
    </div>
  );
}
