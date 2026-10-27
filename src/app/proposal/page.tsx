"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogoMark } from "@/components/BrandLogoMark";
import { CLIENT_TRUTH } from "@/lib/brand-themes";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Lock,
  Printer,
} from "lucide-react";

export default function CommercialProposalPage() {
  // Interactive ROI Calculator State (matches NEXORA_Funding_OS_Value_Sheet_v2.pdf)
  const [dealsPerMonth, setDealsPerMonth] = useState(2);
  const [avgDealSize, setAvgDealSize] = useState(40000);
  const [commissionPct, setCommissionPct] = useState(7);
  const [selectedTierFee, setSelectedTierFee] = useState(8500);

  const commissionPerDeal = Math.round((avgDealSize * commissionPct) / 100);
  const monthlyCommission = commissionPerDeal * dealsPerMonth;
  const estRunningCost = 160;
  const netMonthlyGain = Math.max(0, monthlyCommission - estRunningCost);
  const breakEvenDeals =
    commissionPerDeal > 0
      ? (selectedTierFee / commissionPerDeal).toFixed(1)
      : "—";
  const paybackMonths =
    netMonthlyGain > 0 ? (selectedTierFee / netMonthlyGain).toFixed(1) : "—";

  return (
    <div className="min-h-screen bg-[#12100E] text-[#F4EFEA] pb-20">
      {/* TOP BAR */}
      <header className="sticky top-0 z-30 border-b border-white/15 bg-[#12100E]/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <BrandLogoMark conceptId="sovereign-crest" size={38} />
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#C8A96A]">
                NEXORA COMMERCIAL PROPOSAL · FLORIDA FIRST
              </span>
              <span className="text-sm font-bold text-white">
                Prepared for {CLIENT_TRUTH.name} (Agent ID {CLIENT_TRUTH.agentId})
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="/NEXORA_Commercial_Proposal_Brandon_Reta_Cantu.pdf"
              download
              className="inline-flex items-center gap-1.5 bg-[#C8A96A] hover:bg-[#d8b878] text-[#12100E] px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider"
            >
              <Download className="w-3.5 h-3.5" />
              Download Proposal PDF
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-3 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#C8A96A]" />
              Print
            </button>
            <Link
              href="/system"
              className="inline-flex items-center gap-1.5 border border-[#C8A96A]/45 bg-[#1E1518] hover:bg-[#2a1d21] text-[#C8A96A] px-3.5 py-2 text-xs font-mono uppercase tracking-wider"
            >
              <Lock className="w-3.5 h-3.5" />
              System Vault
            </Link>
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

      <main className="mx-auto max-w-6xl px-4 pt-8 sm:px-8 space-y-10">
        {/* HERO BANNER */}
        <section className="relative overflow-hidden border-2 border-[#C8A96A]/60 bg-gradient-to-br from-[#1F1518] via-[#141112] to-[#1D2534] p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/15 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#85303E] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white">
                NEXORA COMMERCIAL FUNDING OS · VERSION 2
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Commercial Proposal &amp; ROI Value Justification
              </h1>
              <p className="text-sm sm:text-base text-white/75 max-w-2xl">
                Custom-Engineered for{" "}
                <strong className="text-white">{CLIENT_TRUTH.name}</strong> —
                Independent Florida Commercial Funding Specialist (Sarasota{" "}
                <code className="text-[#C8A96A]">941</code> &amp; Statewide
                Markets).
              </p>
            </div>

            <div className="border border-[#C8A96A]/40 bg-black/50 p-4 font-mono text-xs space-y-1.5 shrink-0">
              <div className="text-[#C8A96A] font-bold uppercase tracking-wider">
                ONE-TIME SETUP · YOU OWN THE SYSTEM
              </div>
              <div className="text-white/80">
                ✓ Sovereign Crest Luxury Broker Website
              </div>
              <div className="text-white/80">
                ✓ Florida Business Lead Finder (All 15 SBA Sectors)
              </div>
              <div className="text-white/80">
                ✓ MongoDB &amp; Voyage AI Lead Scorer
              </div>
              <div className="text-white/80">
                ✓ Built-In One-Click Outreach &amp; Deal CRM
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-4 font-mono text-xs">
            <div className="bg-black/40 border border-white/10 p-3.5">
              <span className="text-white/55 block uppercase text-[10px]">
                Prepared For
              </span>
              <strong className="text-white text-sm mt-0.5 block">
                {CLIENT_TRUTH.name}
              </strong>
              <span className="text-[#C8A96A] text-[11px]">
                Agent ID {CLIENT_TRUTH.agentId} · {CLIENT_TRUTH.phone}
              </span>
            </div>
            <div className="bg-black/40 border border-white/10 p-3.5">
              <span className="text-white/55 block uppercase text-[10px]">
                Selected Brand Identity
              </span>
              <strong className="text-white text-sm mt-0.5 block">
                Concept 01 · Sovereign Crest
              </strong>
              <span className="text-[#C8A96A] text-[11px]">
                #85303E Crimson · #33415C Slate · #C8A96A Gold
              </span>
            </div>
            <div className="bg-black/40 border border-white/10 p-3.5">
              <span className="text-white/55 block uppercase text-[10px]">
                Funding Portal Integration
              </span>
              <strong className="text-white text-sm mt-0.5 block">
                Bank Breezy Direct
              </strong>
              <span className="text-[#C8A96A] text-[11px]">
                bankbreezy.com/funding/brandonretacantu
              </span>
            </div>
            <div className="bg-black/40 border border-white/10 p-3.5">
              <span className="text-white/55 block uppercase text-[10px]">
                Prepared By
              </span>
              <strong className="text-white text-sm mt-0.5 block">
                NEXORA Technologies Corp.
              </strong>
              <a
                href="https://nexorayyc.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A96A] text-[11px] hover:underline"
              >
                Calgary, Alberta · nexorayyc.io ↗
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 01: THE PROBLEM */}
        <section className="border border-white/15 bg-[#1C1917] p-6 sm:p-8 space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
            01 · THE PROBLEM: ONE BROKER, EVERY JOB
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Stop Renting Tools &amp; Buying Recycled MCA Leads Every Month
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            As a solo commercial funding specialist, you are the marketer, the
            closer, the funder liaison, and the back office. Every hour spent
            building call lists, copying data between spreadsheets, or chasing
            records that were never a fit is an hour not spent on Bank Breezy
            submissions and closings. Buying third-party leads adds a cost that
            resets every single month: published market prices run{" "}
            <strong className="text-white">
              $15 to $60 per real-time MCA lead
            </strong>{" "}
            (or $9,000 for a 150-lead pack) and{" "}
            <strong className="text-white">$0.20 to $1.00 per aged record</strong>{" "}
            paid upfront plus a 4% processing fee. Renting a generic CRM adds a
            monthly seat fee that never ends — and the system is never yours.
          </p>
        </section>

        {/* SECTION 02: WHAT IS INCLUDED */}
        <section className="border border-white/15 bg-[#1C1917] p-6 sm:p-8 space-y-5">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
              02 · WHAT IS INCLUDED IN YOUR TURNKEY SYSTEM
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Four Integrated Pillars Built &amp; Deployed for Brandon Reta-Cantu
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-white/10 bg-[#12100E] p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#C8A96A]">
                  1. Luxury Sovereign Crest Broker Website
                </h3>
                <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5">
                  LIVE NOW
                </span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                A custom, mobile-first website branded with{" "}
                <strong>Concept 01 — The Sovereign Crest</strong>, authentic
                Florida editorial photography, dedicated sections for working
                capital, equipment financing, expansion loans, and business
                lines of credit ($25K–$500K+), a secure application form that
                records consent with a timestamp, and your verified contact
                details as Florida requires for broker advertising (Fla. Stat.
                § 559.9614).
              </p>
            </div>

            <div className="border border-white/10 bg-[#12100E] p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#C8A96A]">
                  2. Florida Business Lead Finder (15 SBA NAICS Sectors)
                </h3>
                <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5">
                  LIVE NOW
                </span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Search Florida businesses across Sarasota, Tampa, Miami,
                Orlando, Jacksonville, Fort Lauderdale, and Naples by industry
                using the Top 15 SBA 7(a)/504 commercial categories (HVAC,
                Restaurants, Roofing, Auto Repair, Medical/Dental, Trucking,
                Childcare, etc.). Built to support compliant Google Places API
                (New) place-ID workflows and live geo-discovery. NEXORA does not
                charge a separate fee for Google Maps access; any Google Cloud
                usage is billed directly to your own account under Google’s
                Terms (§ 3.2.3).
              </p>
            </div>

            <div className="border border-white/10 bg-[#12100E] p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#C8A96A]">
                  3. AI Lead Scorer (Voyage AI voyage-finance-2)
                </h3>
                <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5">
                  LIVE NOW
                </span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Powered by <code className="text-[#C8A96A]">ai.mongodb.com</code>{" "}
                with the <code className="text-[#C8A96A]">voyage-finance-2</code>{" "}
                domain-specific financial embedding model and{" "}
                <code className="text-[#C8A96A]">rerank-2</code>. Ranks your
                pipeline by similarity to deals you fund, supporting your
                judgment.{" "}
                <em>
                  Not a consumer-credit score, not an ECOA/FCRA decision system,
                  and not a prediction of funder approval. Do not use it as the
                  sole basis for any credit decision.
                </em>
              </p>
            </div>

            <div className="border border-white/10 bg-[#12100E] p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#C8A96A]">
                  4. One-Click Outreach &amp; Built-In Deal CRM
                </h3>
                <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5">
                  LIVE NOW
                </span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Full 5-stage pipeline from{" "}
                <strong>New Lead → Outreach Sent → Portal Link Clicked → Underwriting → Funded &amp; Closed</strong>.
                Includes 5 pre-written Florida outreach templates (Email 1, Cold
                Call Opener, SMS 1, SMS Follow-Up, Email Breakup), human-sent
                one-click email/call/SMS workflows, PEWC consent and DNC flags,
                and real-time commission tracking. No autodialer and no
                prerecorded calls.
              </p>
            </div>
          </div>

          <div className="bg-[#12100E] border border-[#C8A96A]/35 p-4 text-xs text-white/75 leading-relaxed">
            <strong className="text-[#C8A96A]">Ownership:</strong> Code and data
            live in accounts registered to you (hosting, database, Google Cloud,
            Voyage AI), so there is no mandatory NEXORA subscription to keep the
            system running. “You own” means cloud accounts and data registered
            to you, and the licence or assignment to custom code set out in the
            signed Statement of Work. It does not mean Google, Twilio, Voyage,
            or Vercel waive their own terms, or that NEXORA’s pre-existing
            frameworks are work-made-for-hire unless the SOW says so.
          </div>
        </section>

        {/* SECTION 03: SETUP TIERS */}
        <section className="border border-white/15 bg-[#1C1917] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
                03 · PROPOSED SETUP TIERS (ONE-TIME INVESTMENT)
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Select Your Turnkey Deployment Package
              </h2>
            </div>
            <span className="font-mono text-xs text-white/60">
              Prices in USD · One-Time Setup Fee
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* LAUNCH TIER */}
            <div
              onClick={() => setSelectedTierFee(4500)}
              className={`border p-6 flex flex-col justify-between cursor-pointer transition-all ${
                selectedTierFee === 4500
                  ? "border-[#C8A96A] bg-[#23191C]"
                  : "border-white/15 bg-[#12100E] hover:border-white/30"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/70">
                    TIER 01 · LAUNCH
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-white/10 text-white/70">
                    SARASOTA METRO
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-white">
                  $4,500{" "}
                  <span className="text-xs font-mono font-normal text-white/55">
                    one-time setup
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Website:</strong> 5 pages, application form with
                      consent capture &amp; Bank Breezy redirect
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Lead Finder:</strong> 1 metro region (Sarasota /
                      Suncoast), up to 5 counties
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>AI Lead Scorer:</strong> Starter model on intake
                      answers and a seed set of example deals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Outreach CRM:</strong> 5-stage pipeline and
                      one-click email templates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Support:</strong> 1 training session, 30 days of
                      fixes
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-[#C8A96A]">
                Break-even at base ($2.8K/deal): ~1.6 deals
              </div>
            </div>

            {/* PRO TIER (RECOMMENDED) */}
            <div
              onClick={() => setSelectedTierFee(8500)}
              className={`border-2 p-6 flex flex-col justify-between cursor-pointer transition-all relative ${
                selectedTierFee === 8500
                  ? "border-[#C8A96A] bg-[#261A1E] shadow-[0_0_40px_rgba(200,169,106,0.2)]"
                  : "border-[#85303E] bg-[#191316]"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
                    TIER 02 · PRO (RECOMMENDED)
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 bg-[#85303E] text-white font-bold">
                    ALL FLORIDA
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-white">
                  $8,500{" "}
                  <span className="text-xs font-mono font-normal text-white/55">
                    one-time setup
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Website:</strong> 10 pages plus 6 Florida metro
                      city pages &amp; Sovereign Crest identity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Lead Finder:</strong> All 67 Florida counties, all
                      15 SBA NAICS industry filters &amp; saved searches
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>AI Lead Scorer:</strong> Tuned on your funded and
                      declined deal history (voyage-finance-2)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Outreach CRM:</strong> Adds one-click call &amp;
                      text logging, funder submission &amp; commission tracker
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Support:</strong> 2 training sessions, 60 days of
                      fixes
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15 font-mono text-xs text-[#C8A96A] font-bold">
                Break-even at base ($2.8K/deal): ~3.0 deals (1.6 mos)
              </div>
            </div>

            {/* ELITE TIER */}
            <div
              onClick={() => setSelectedTierFee(14500)}
              className={`border p-6 flex flex-col justify-between cursor-pointer transition-all ${
                selectedTierFee === 14500
                  ? "border-[#C8A96A] bg-[#23191C]"
                  : "border-white/15 bg-[#12100E] hover:border-white/30"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/70">
                    TIER 03 · ELITE
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-white/10 text-white/70">
                    MULTI-STATE
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-white">
                  $14,500{" "}
                  <span className="text-xs font-mono font-normal text-white/55">
                    one-time setup
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Website:</strong> 15 pages, complete brand
                      identity refresh &amp; interactive funding calculators
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Lead Finder:</strong> Statewide Florida plus 2
                      additional states configured
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>AI Lead Scorer:</strong> Pro model plus a monthly
                      retune for the first 6 months
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Outreach CRM:</strong> Adds renewal tracker,
                      executive dashboards &amp; document checklist
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Support:</strong> 3 sessions, launch day support,
                      90 days of fixes
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-[#C8A96A]">
                Break-even at base ($2.8K/deal): ~5.2 deals (2.7 mos)
              </div>
            </div>
          </div>

          <div className="bg-[#12100E] border border-white/15 p-4 text-xs text-white/75 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <strong className="text-[#C8A96A]">
                Optional Care Plan ($249 / month):
              </strong>{" "}
              Monitoring, security updates, a monthly API cost review, and up to
              2 hours of changes. Cancel any month.
            </div>
            <span className="font-mono text-[11px] text-white/50 shrink-0">
              Confirmed in signed SOW
            </span>
          </div>
        </section>

        {/* SECTION 04 & 05: INTERACTIVE ROI & PAYBACK CALCULATOR */}
        <section className="border border-white/15 bg-[#1C1917] p-6 sm:p-8 space-y-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
              04 · ILLUSTRATIVE ROI: WHAT IT TAKES TO PAY BACK
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Interactive Deal Payback Simulator (Adjust Inputs Live)
            </h2>
            <p className="text-xs text-white/65 mt-1">
              Formula: Monthly Commission = Incremental Funded Deals/Mo ×
              Average Funded Amount × Commission %. Published broker ranges: MCA
              mostly 6–12 points; term loans 1–5%.
            </p>
          </div>

          {/* Interactive Sliders */}
          <div className="grid gap-6 md:grid-cols-3 bg-[#12100E] border border-white/10 p-5">
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/70">Incremental Deals / Mo:</span>
                <strong className="text-[#C8A96A]">{dealsPerMonth} deals</strong>
              </div>
              <input
                type="range"
                min={1}
                max={6}
                step={1}
                value={dealsPerMonth}
                onChange={(e) => setDealsPerMonth(Number(e.target.value))}
                className="w-full accent-[#85303E]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/70">Avg Funded Deal Size:</span>
                <strong className="text-[#C8A96A]">
                  ${avgDealSize.toLocaleString()}
                </strong>
              </div>
              <input
                type="range"
                min={15000}
                max={150000}
                step={5000}
                value={avgDealSize}
                onChange={(e) => setAvgDealSize(Number(e.target.value))}
                className="w-full accent-[#85303E]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/70">Broker Commission %:</span>
                <strong className="text-[#C8A96A]">{commissionPct}%</strong>
              </div>
              <input
                type="range"
                min={2}
                max={12}
                step={1}
                value={commissionPct}
                onChange={(e) => setCommissionPct(Number(e.target.value))}
                className="w-full accent-[#85303E]"
              />
            </div>
          </div>

          {/* Live Calculated Output Row */}
          <div className="grid gap-4 sm:grid-cols-4 font-mono">
            <div className="bg-[#12100E] border border-white/10 p-4">
              <span className="text-[10px] uppercase text-white/55 block">
                Commission Per Deal
              </span>
              <div className="text-2xl font-extrabold text-white mt-1">
                ${commissionPerDeal.toLocaleString()}
              </div>
            </div>
            <div className="bg-[#12100E] border border-white/10 p-4">
              <span className="text-[10px] uppercase text-white/55 block">
                Monthly Gross Commission
              </span>
              <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                ${monthlyCommission.toLocaleString()}/mo
              </div>
            </div>
            <div className="bg-[#12100E] border border-[#C8A96A]/40 p-4">
              <span className="text-[10px] uppercase text-[#C8A96A] block">
                Deals to Break Even (${selectedTierFee.toLocaleString()})
              </span>
              <div className="text-2xl font-extrabold text-white mt-1">
                {breakEvenDeals} deals
              </div>
            </div>
            <div className="bg-[#12100E] border border-[#C8A96A]/40 p-4">
              <span className="text-[10px] uppercase text-[#C8A96A] block">
                Estimated Payback Period
              </span>
              <div className="text-2xl font-extrabold text-[#C8A96A] mt-1">
                {paybackMonths} months
              </div>
            </div>
          </div>

          {/* Standard 3-Scenario Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-white/20 text-[#C8A96A] bg-[#12100E]">
                  <th className="p-3">Scenario Input / Result</th>
                  <th className="p-3">Conservative</th>
                  <th className="p-3">Base (Recommended)</th>
                  <th className="p-3">Optimistic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/85">
                <tr>
                  <td className="p-3">Incremental funded deals / mo</td>
                  <td className="p-3">1 deal</td>
                  <td className="p-3 font-bold text-white">2 deals</td>
                  <td className="p-3">3 deals</td>
                </tr>
                <tr>
                  <td className="p-3">Average funded amount</td>
                  <td className="p-3">$25,000</td>
                  <td className="p-3 font-bold text-white">$40,000</td>
                  <td className="p-3">$60,000</td>
                </tr>
                <tr>
                  <td className="p-3">Commission % (assumption)</td>
                  <td className="p-3">4% ($1,000/deal)</td>
                  <td className="p-3 font-bold text-white">7% ($2,800/deal)</td>
                  <td className="p-3">10% ($6,000/deal)</td>
                </tr>
                <tr>
                  <td className="p-3">Monthly commission less ~$160 cloud cost</td>
                  <td className="p-3">$840 / mo net</td>
                  <td className="p-3 font-bold text-emerald-400">$5,440 / mo net</td>
                  <td className="p-3 text-emerald-400">$17,840 / mo net</td>
                </tr>
                <tr className="bg-[#23181B]">
                  <td className="p-3 font-bold text-[#C8A96A]">
                    Pro $8,500: Break-Even | Payback
                  </td>
                  <td className="p-3">8.5 deals | 10.1 mos</td>
                  <td className="p-3 font-bold text-[#C8A96A]">
                    3.0 deals | 1.6 mos
                  </td>
                  <td className="p-3">1.4 deals | 0.5 mos</td>
                </tr>
                <tr>
                  <td className="p-3">Launch $4,500: Break-Even | Payback</td>
                  <td className="p-3">4.5 deals | 5.4 mos</td>
                  <td className="p-3">1.6 deals | 0.8 mos</td>
                  <td className="p-3">0.8 deals | 0.3 mos</td>
                </tr>
                <tr>
                  <td className="p-3">Elite $14,500: Break-Even | Payback</td>
                  <td className="p-3">14.5 deals | 17.3 mos</td>
                  <td className="p-3">5.2 deals | 2.7 mos</td>
                  <td className="p-3">2.4 deals | 0.8 mos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-amber-500/40 bg-amber-500/10 p-4 text-[11px] text-amber-100/90 leading-relaxed">
            <strong>
              ILLUSTRATIVE ONLY — NOT A PROJECTION OR EARNINGS CLAIM.
            </strong>{" "}
            Results are hypothetical examples using assumed inputs you can
            change. NEXORA does not guarantee leads, meetings, approvals, funded
            deals, commissions, or income. Figures are gross commissions before
            clawbacks, splits, taxes, lead spend, chargebacks, and the value of
            your time. Past or published industry commission ranges are not your
            results. Replace every input with your own numbers before relying on
            any payback arithmetic. This section is not financial, tax, or legal
            advice.
          </div>
        </section>

        {/* SECTION 06: DIRECT RUNNING COSTS & BUY VS RENT */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="border border-white/15 bg-[#1C1917] p-6 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
              05 · MONTHLY RUNNING COSTS (NO NEXORA MARKUP)
            </span>
            <h3 className="text-lg font-bold text-white">
              Direct Cloud &amp; API Costs Billed to Your Own Accounts
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80 font-mono">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Hosting: Vercel Pro</span>
                <span className="text-[#C8A96A]">$20 / mo</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Database: MongoDB Atlas Flex</span>
                <span className="text-[#C8A96A]">$8 to $30 / mo</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>AI: Voyage AI voyage-finance-2 (first 50M free)</span>
                <span className="text-[#C8A96A]">~$0 to $1 / mo</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Google Places API (New) (1,000–5,000 free tier)</span>
                <span className="text-[#C8A96A]">~$0 to $80 / mo</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Twilio SMS (Optional, ~2,000 segments)</span>
                <span className="text-[#C8A96A]">~$0 to $28 / mo</span>
              </li>
              <li className="flex justify-between pt-1 font-bold text-white">
                <span>Estimated Total Monthly Running Cost</span>
                <span className="text-emerald-400">~$28 to $160 / mo</span>
              </li>
            </ul>
          </div>

          <div className="border border-white/15 bg-[#1C1917] p-6 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
              06 · OWN IT VS. RENTING TOOLS &amp; BUYING LEADS
            </span>
            <h3 className="text-lg font-bold text-white">
              Market Comparison (Published Rates)
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li className="border-b border-white/10 pb-2">
                <strong className="text-[#C8A96A]">
                  NEXORA Funding OS (Pro — $8,500 once):
                </strong>{" "}
                All 4 components owned in your accounts (~$28–$160/mo running).
              </li>
              <li className="border-b border-white/10 pb-2">
                <strong className="text-white">Buying MCA Leads (LoanLeads.io):</strong>{" "}
                $60 per exclusive real-time lead ($9,000 for a 150-pack) or
                $15–$35 shared — used up once worked.
              </li>
              <li className="border-b border-white/10 pb-2">
                <strong className="text-white">HubSpot Sales Hub Pro:</strong>{" "}
                $100/seat/mo + $1,500 mandatory onboarding ($5,100 over 3 yrs
                for CRM only; no Florida lead engine).
              </li>
              <li className="pb-1">
                <strong className="text-white">GoHighLevel Starter:</strong>{" "}
                $97/mo ($2,910 over 3 yrs rented; generic funnel builder, no SBA
                NAICS lead scorer).
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 07: COMPLIANCE & NEXT STEP */}
        <section className="border border-white/15 bg-[#1C1917] p-6 sm:p-8 space-y-4 text-xs text-white/75 leading-relaxed">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
            <ShieldCheck className="w-4 h-4" />
            07 · COMPLIANCE NOTE: GENERAL INFORMATION, NOT LEGAL ADVICE
          </div>
          <p>
            <strong>TCPA (47 U.S.C. § 227; 47 CFR § 64.1200):</strong> Prior
            express written consent is required before telemarketing/advertising
            calls or texts that use an autodialer or artificial/prerecorded
            voice to wireless numbers. The FCC’s 2023–24 “one-to-one” consent
            revision was vacated and is not current law; the restored PEWC
            definition applies (FCC final rule effective 29 Aug 2025). From 25
            Nov 2026, FCC rules allow callers to designate certain exclusive
            revocation methods if clearly disclosed. This OS uses human-sent
            messages without an autodialer or prerecorded calling; you remain
            responsible for consent, content, and suppression.
          </p>
          <p>
            <strong>
              Florida Telephone Solicitation Act (Fla. Stat. § 501.059) &amp;
              Florida CFDL (Fla. Stat. §§ 559.961–559.9615):
            </strong>{" "}
            Do not call, text, or voicemail any consumer, business, or donor who
            has asked not to be contacted (§ 501.059(5)). Under Florida CFDL
            (covered commercial financing transactions ≤$500,000), providers
            must give written cost disclosures (§ 559.9613), and brokers may not
            charge advance fees for brokering and must display their actual
            business address and telephone number in advertisements (§
            559.9614).
          </p>
          <p className="text-white/60">
            The OS includes consent-capture fields, opt-out/suppression flags,
            and human-sent message flows. You remain solely responsible for how
            you use it. NEXORA Technologies Corp. is a technology vendor, not a
            law firm, lender, or commercial financing broker, and does not
            provide legal advice. Confirm your outreach and disclosure program
            with a Florida-licensed attorney before launch.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-8 border-t border-white/10 mt-12 text-xs font-mono text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {CLIENT_TRUTH.name} (Agent ID{" "}
          {CLIENT_TRUTH.agentId}) · Prepared by NEXORA Technologies Corp.
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-white">
            LANDING PAGE
          </Link>
          <span>|</span>
          <Link href="/system" className="hover:text-white">
            SYSTEM VAULT
          </Link>
          <span>|</span>
          <a
            href="https://nexorayyc.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#C8A96A] hover:underline"
          >
            BUILT BY NEXORA
          </a>
        </div>
      </footer>
    </div>
  );
}
