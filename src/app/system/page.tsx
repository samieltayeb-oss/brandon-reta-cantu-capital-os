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
  Globe,
  ExternalLink,
  Copy,
  Check,
  Download,
  FileText,
  ArrowLeft,
  Building2,
  Cpu,
  Send,
  BookmarkCheck,
  Layers,
  RefreshCw,
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

const BUSINESS_CATEGORIES = [
  "Construction & Trades",
  "Medical & Dental Practices",
  "Restaurants & Hospitality",
  "Auto Repair & Marine Services",
  "Logistics, Wholesale & Manufacturing",
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
    "scanner" | "pipeline" | "brands" | "inquiries"
  >("scanner");

  const [city, setCity] = useState("Sarasota, FL");
  const [category, setCategory] = useState("Construction & Trades");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState<FloridaLead[]>([]);
  const [selectedLead, setSelectedLead] = useState<FloridaLead | null>(null);
  const [aiEngineLabel, setAiEngineLabel] = useState(
    "rerank-2 + voyage-finance-2 (ai.mongodb.com)"
  );
  const [aiHealth, setAiHealth] = useState<AIHealth | null>(null);

  const [savedPipeline, setSavedPipeline] = useState<FloridaLead[]>([]);
  const [inquiries, setInquiries] = useState<Array<Record<string, unknown>>>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    // Load AI status
    fetch("/api/ai-status")
      .then((r) => r.json())
      .then((d) => setAiHealth(d))
      .catch(() => null);

    // Load saved pipeline & inquiries
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

    // Initial scan for Sarasota, FL (Brandon's 941 home market)
    runLeadScan("Sarasota, FL", "Construction & Trades", "");
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
      "City",
      "Address",
      "Phone",
      "Website",
      "AI Score",
      "Estimated Capital Need",
      "Recommended Product",
      "Google Maps URL",
    ];
    const rows = items.map((l) => [
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.category}"`,
      `"${l.city}"`,
      `"${l.address.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.website}"`,
      l.aiScore,
      `"${l.estimatedCapitalNeed}"`,
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
    <div className="min-h-screen bg-[#0B0D11] text-[#F6F4F3]">
      {/* TOP COMMAND HEADER */}
      <header className="border-b border-white/10 bg-[#07090C] px-5 py-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <BrandLogoMark conceptId="sovereign-crest" size={40} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-[#85303E] text-white px-2 py-0.5 rounded-xs">
                  NEXORA CAPITAL OS
                </span>
                <span className="font-mono text-[11px] text-[#C8A96A]">
                  FLORIDA GEO-LEAD &amp; AI UNDERWRITING ENGINE
                </span>
              </div>
              <h1 className="text-lg font-extrabold tracking-tight mt-0.5">
                Brandon Reta-Cantu · Executive Command Center
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xs text-xs font-mono">
              <span
                className={`h-2 w-2 rounded-full ${
                  aiHealth?.connected !== false
                    ? "bg-emerald-400 animate-pulse"
                    : "bg-amber-400"
                }`}
              />
              <span className="text-white/70">AI Endpoint:</span>
              <span className="text-[#C8A96A] font-semibold">
                ai.mongodb.com ({aiHealth?.model || "voyage-finance-2"})
              </span>
            </div>

            <a
              href="/Brandon_Reta_Cantu_5_Brand_Concepts_NEXORA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#C8A96A]" />
              5 Brand Concepts PDF
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-[#85303E] hover:bg-[#9c3949] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              View Luxury Landing Page
            </Link>
          </div>
        </div>
      </header>

      {/* SUB-NAVIGATION TABS & METRICS BAR */}
      <div className="border-b border-white/10 bg-[#0F1218] px-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            <button
              onClick={() => setActiveTab("scanner")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                activeTab === "scanner"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              1. Free Florida Maps Lead Scanner ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                activeTab === "pipeline"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              2. Saved Deal Pipeline ({savedPipeline.length})
            </button>
            <button
              onClick={() => setActiveTab("brands")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                activeTab === "brands"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              3. 5 Brand Identity Systems (PDF &amp; Specs)
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                activeTab === "inquiries"
                  ? "bg-[#85303E] text-white font-bold"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              4. Inbound Form Requests ({inquiries.length})
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-xs font-mono text-white/65 py-2">
            <span>
              Advisor: <strong className="text-white">{CLIENT_TRUTH.name}</strong>
            </span>
            <span>
              ID: <strong className="text-[#C8A96A]">{CLIENT_TRUTH.agentId}</strong>
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
            <div className="border border-white/10 bg-[#12161E] p-5 rounded-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8A96A]">
                    100% FREE OPENSTREETMAP OVERPASS + GOOGLE MAPS DEEP-LINK ENGINE
                  </span>
                  <h2 className="text-xl font-bold mt-0.5">
                    Discover &amp; AI-Score Florida Commercial Funding Prospects
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => exportCsv(leads)}
                    disabled={!leads.length}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer disabled:opacity-40"
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
                    className="w-full bg-[#0B0D11] border border-white/15 px-3 py-2.5 text-sm rounded-xs outline-none focus:border-[#C8A96A]"
                  >
                    {FLORIDA_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-white/65 mb-1.5">
                    High-Need Industry Sector
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#0B0D11] border border-white/15 px-3 py-2.5 text-sm rounded-xs outline-none focus:border-[#C8A96A]"
                  >
                    {BUSINESS_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-white/65 mb-1.5">
                    Optional Keyword Filter
                  </label>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="e.g. HVAC, Dental, Marine, Roofing..."
                    className="w-full bg-[#0B0D11] border border-white/15 px-3 py-2.5 text-sm rounded-xs outline-none focus:border-[#C8A96A]"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => runLeadScan(city, category, keyword)}
                    disabled={loading}
                    className="w-full bg-[#85303E] hover:bg-[#9c3949] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xs inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Scanning Maps &amp; AI Scoring...
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
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left Lead Cards List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-white/65 px-1">
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
                  const inPipeline = savedPipeline.some((p) => p.id === lead.id);
                  return (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`p-4 rounded-sm border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#171C26] border-[#C8A96A]"
                          : "bg-[#12161E] border-white/10 hover:border-white/25"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-white/10 text-white/80 rounded-xs">
                              {lead.source}
                            </span>
                            <span className="font-mono text-[10px] text-[#C8A96A]">
                              Est. Need: {lead.estimatedCapitalNeed}
                            </span>
                          </div>
                          <h3 className="text-base font-bold mt-1.5 text-white">
                            {lead.name}
                          </h3>
                          <p className="text-xs text-white/65 flex items-center gap-1.5 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-[#85303E] shrink-0" />
                            {lead.address}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="inline-flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-xs font-mono text-xs font-bold">
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
                          className={`px-2.5 py-1 text-[11px] font-mono uppercase rounded-xs cursor-pointer ${
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

              {/* Right Selected Lead Dossier, Live Map & 1-Click Outreach */}
              <div>
                {selectedLead ? (
                  <div className="sticky top-6 border border-[#C8A96A]/40 bg-[#12161E] p-6 rounded-sm space-y-5">
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
                        onClick={() => saveToPipeline(selectedLead)}
                        className="bg-[#85303E] hover:bg-[#9c3949] text-white px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs shrink-0 cursor-pointer"
                      >
                        {savedPipeline.some((p) => p.id === selectedLead.id)
                          ? "✓ In Pipeline"
                          : "+ Save Lead"}
                      </button>
                    </div>

                    {/* Interactive OpenStreetMap Embed */}
                    <div className="rounded-xs overflow-hidden border border-white/15 h-44 bg-black relative">
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

                    {/* AI Score & Product Match */}
                    <div className="bg-[#0B0D11] border border-white/10 p-4 rounded-xs space-y-2 text-xs">
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-[#C8A96A] uppercase">
                          MongoDB AI Assessment
                        </span>
                        <span className="text-emerald-400 font-bold">
                          Score: {selectedLead.aiScore}/100
                        </span>
                      </div>
                      <p className="font-semibold text-white">
                        Recommended Facility: {selectedLead.recommendedProduct} (
                        {selectedLead.estimatedCapitalNeed})
                      </p>
                      <p className="text-white/65 leading-relaxed">
                        {selectedLead.aiReasoning}
                      </p>
                    </div>

                    {/* Direct Action Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                      <a
                        href={`tel:${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                        className="bg-white/10 hover:bg-white/15 border border-white/15 py-2.5 px-3 text-center rounded-xs flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
                        Call Lead
                      </a>
                      <a
                        href={selectedLead.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/15 border border-white/15 py-2.5 px-3 text-center rounded-xs flex items-center justify-center gap-1.5"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#C8A96A]" />
                        Google Maps
                      </a>
                      <a
                        href={`mailto:${
                          selectedLead.email || ""
                        }?subject=${encodeURIComponent(
                          `Commercial Funding Options for ${selectedLead.name}`
                        )}&body=${encodeURIComponent(selectedLead.outreachPitch)}`}
                        className="bg-[#85303E] hover:bg-[#9c3949] text-white py-2.5 px-3 text-center rounded-xs flex items-center justify-center gap-1.5 col-span-2 sm:col-span-1"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send Email
                      </a>
                    </div>

                    {/* Ready-to-Send Email Script */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-white/75 uppercase">
                          Bank Breezy Executive Email Pitch
                        </span>
                        <button
                          onClick={() =>
                            copyText(
                              `email-${selectedLead.id}`,
                              selectedLead.outreachPitch
                            )
                          }
                          className="inline-flex items-center gap-1 text-[#C8A96A] hover:underline cursor-pointer"
                        >
                          {copiedId === `email-${selectedLead.id}` ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" /> Copy Email
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="bg-[#0B0D11] border border-white/10 p-3.5 rounded-xs text-[11px] font-sans whitespace-pre-wrap text-white/85 leading-relaxed max-h-44 overflow-y-auto">
                        {selectedLead.outreachPitch}
                      </pre>
                    </div>

                    {/* Ready-to-Send SMS Script */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-white/75 uppercase">
                          Direct SMS / Text Opener
                        </span>
                        <button
                          onClick={() =>
                            copyText(
                              `sms-${selectedLead.id}`,
                              selectedLead.smsDraft
                            )
                          }
                          className="inline-flex items-center gap-1 text-[#C8A96A] hover:underline cursor-pointer"
                        >
                          {copiedId === `sms-${selectedLead.id}` ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" /> Copy SMS
                            </>
                          )}
                        </button>
                      </div>
                      <div className="bg-[#0B0D11] border border-white/10 p-3 rounded-xs text-xs text-white/85">
                        {selectedLead.smsDraft}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SAVED PIPELINE */}
        {activeTab === "pipeline" && (
          <div className="border border-white/10 bg-[#12161E] p-6 rounded-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#C8A96A]">
                  BRANDON RETA-CANTU · SAVED FLORIDA PROSPECTS
                </span>
                <h2 className="text-2xl font-bold mt-1">
                  Active Commercial Deal Pipeline ({savedPipeline.length})
                </h2>
              </div>
              {savedPipeline.length > 0 && (
                <button
                  onClick={() => exportCsv(savedPipeline)}
                  className="bg-[#85303E] text-white px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs inline-flex items-center gap-2 cursor-pointer"
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
                  className="bg-[#85303E] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                >
                  Go to Florida Lead Scanner
                </button>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {savedPipeline.map((lead) => (
                  <div
                    key={lead.id}
                    className="border border-white/15 bg-[#0B0D11] p-5 rounded-xs space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-[10px] text-[#C8A96A]">
                          {lead.city} · {lead.category}
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
                        className="text-[#C8A96A] hover:underline"
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
            <div className="border border-[#C8A96A]/40 bg-[#12161E] p-6 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96A]">
                  COMPLETE ARCHITECTURAL BRANDING MASTERBOOK
                </span>
                <h2 className="text-2xl font-extrabold mt-1">
                  5 Executive Logo &amp; Brand Identity Concepts
                </h2>
                <p className="text-sm text-white/70 mt-1 max-w-2xl">
                  Download the 7-page landscape presentation PDF or inspect each
                  concept’s vector mark, color tokens, and rationale below.
                </p>
              </div>
              <a
                href="/Brandon_Reta_Cantu_5_Brand_Concepts_NEXORA.pdf"
                download
                className="bg-[#C8A96A] text-[#0B0D11] px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs inline-flex items-center gap-2 shrink-0"
              >
                <Download className="w-4 h-4" />
                Download 5-Concept PDF
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BRAND_THEMES.map((theme) => (
                <div
                  key={theme.id}
                  className="border border-white/15 bg-[#12161E] rounded-sm overflow-hidden flex flex-col justify-between"
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
                        <span className="font-mono text-xs text-[#C8A96A]">
                          CONCEPT {theme.number}
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
                              className="w-4 h-4 rounded-xs border border-white/25"
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

                  <div className="p-4 border-t border-white/10 bg-[#0B0D11] flex items-center justify-between text-xs font-mono">
                    <span className="text-white/60">Primary: {theme.primary}</span>
                    <Link
                      href="/"
                      className="text-[#C8A96A] hover:underline"
                    >
                      Preview on Landing Page →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: INBOUND WEBSITE INQUIRIES */}
        {activeTab === "inquiries" && (
          <div className="border border-white/10 bg-[#12161E] p-6 rounded-sm space-y-4">
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
                    className="border border-white/15 bg-[#0B0D11] p-4 rounded-xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
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
    </div>
  );
}
