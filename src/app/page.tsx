"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRAND_THEMES, CLIENT_TRUTH, BrandTheme } from "@/lib/brand-themes";
import { BrandLogoMark } from "@/components/BrandLogoMark";
import {
  ArrowUpRight,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  FileText,
  Compass,
  CheckCircle2,
  Building2,
  Layers,
  ChevronRight,
  Eye,
  Lock,
  Menu,
  X,
} from "lucide-react";

interface AIBriefResponse {
  verifiedBy: string;
  embeddingDimensions: number;
  confidenceScore: number;
  recommendedTrack: string;
  typicalRange: string;
  estimatedTimeline: string;
  rationale: string;
  nextStepUrl: string;
}

export default function LuxuryLandingPage() {
  const [activeTheme, setActiveTheme] = useState<BrandTheme>(BRAND_THEMES[0]);
  const [showBrandDrawer, setShowBrandDrawer] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculator state
  const [capitalAmount, setCapitalAmount] = useState(125000);
  const [fundingPurpose, setFundingPurpose] = useState("Working capital");

  // Form state (matches Source of Truth `funding-inquiry` 100% + Grok Legal PEWC/Business-Purpose Attestation)
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
    businessPurposeConfirmed: true,
    consentConfirmed: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedMsg, setSubmittedMsg] = useState<string | null>(null);
  const [aiBrief, setAiBrief] = useState<AIBriefResponse | null>(null);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmittedMsg(null);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      setSubmittedMsg(
        data.message ||
          "Thanks—your funding conversation request has been received."
      );
      if (data.aiBrief) {
        setAiBrief(data.aiBrief);
      }
      // Save inquiry locally as well so Brandon sees it inside the /system portal
      try {
        const existing = JSON.parse(
          localStorage.getItem("nexora_brc_inquiries") || "[]"
        );
        existing.unshift({
          ...formState,
          id: `inq-${Date.now()}`,
          createdAt: new Date().toISOString(),
          aiBrief: data.aiBrief,
        });
        localStorage.setItem(
          "nexora_brc_inquiries",
          JSON.stringify(existing.slice(0, 50))
        );
      } catch {
        // ignore storage error
      }
    } catch {
      setSubmittedMsg(
        "Thanks—your funding conversation request has been received."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      style={{
        backgroundColor: activeTheme.bg,
        color: activeTheme.text,
        fontFamily: activeTheme.bodyFont,
      }}
      className="min-h-screen transition-colors duration-300"
    >
      {/* TOP EXECUTIVE COMMAND & BRAND CONCEPT SWITCHER BAR */}
      <div
        style={{
          backgroundColor: activeTheme.isDark ? "#05070B" : "#1E1518",
          borderBottom: `1px solid ${activeTheme.border}`,
        }}
        className="text-white px-4 py-2.5 text-xs"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              style={{
                backgroundColor: activeTheme.primary,
                color: activeTheme.primaryFg,
              }}
              className="px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest rounded-xs"
            >
              NEXORA LUXURY EDITION
            </span>
            <span className="hidden sm:inline text-white/75 font-mono text-[11px]">
              Active Identity:{" "}
              <strong className="text-white">
                {activeTheme.number} · {activeTheme.name}
              </strong>
            </span>
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded-sm">
              {BRAND_THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTheme(t)}
                  title={`${t.number}: ${t.name}`}
                  className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider transition-all rounded-xs cursor-pointer ${
                    activeTheme.id === t.id
                      ? "bg-white text-black font-bold shadow-xs"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  #{t.number}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowBrandDrawer(!showBrandDrawer)}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#C8A96A] hover:underline cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              {showBrandDrawer ? "Hide Brand Studio" : "Inspect 5 Brand Systems"}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/Brandon_Reta_Cantu_5_Brand_Concepts_NEXORA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#C8A96A] hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Download 5-Logo Masterbook (PDF)
            </a>
            <Link
              href="/system"
              style={{
                backgroundColor: activeTheme.gold,
                color: "#0B0D11",
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-xs hover:opacity-90 transition-opacity"
            >
              <Compass className="w-3.5 h-3.5" />
              Florida Lead &amp; AI System →
            </Link>
          </div>
        </div>

        {/* EXPANDABLE 5-BRAND CONCEPT STUDIO */}
        {showBrandDrawer && (
          <div className="mx-auto max-w-7xl mt-3 pt-3 border-t border-white/15 lg:px-8 pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#C8A96A]">
                  LIVE INTERACTIVE BRAND SYSTEM SELECTOR · CLICK ANY CONCEPT TO APPLY SITE-WIDE
                </p>
                <p className="text-xs text-white/70">
                  Brandon can test all 5 complete branding systems live on this luxury landing page and download the 7-page executive PDF masterbook.
                </p>
              </div>
              <a
                href="/Brandon_Reta_Cantu_5_Brand_Concepts_NEXORA.pdf"
                download
                className="shrink-0 bg-white text-black px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-white/90"
              >
                Download PDF Masterbook
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-5">
              {BRAND_THEMES.map((theme) => {
                const selected = theme.id === activeTheme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setActiveTheme(theme)}
                    className={`text-left p-3 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                      selected
                        ? "border-[#C8A96A] bg-white/12 ring-1 ring-[#C8A96A]"
                        : "border-white/15 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] text-[#C8A96A]">
                          CONCEPT {theme.number}
                        </span>
                        <div className="flex items-center gap-1">
                          <span
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: theme.primary }}
                          />
                          <span
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: theme.accent }}
                          />
                          <span
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: theme.gold }}
                          />
                        </div>
                      </div>
                      <p className="font-bold text-sm mt-1.5 text-white">
                        {theme.name}
                      </p>
                      <p className="text-[11px] text-white/65 mt-1 line-clamp-2">
                        {theme.rationale}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-white/60">{theme.primary}</span>
                      <span className="text-[#C8A96A] font-semibold">
                        {selected ? "● ACTIVE" : "ACTIVATE →"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* MAIN NAVIGATION HEADER (100% Source of Truth + Luxury Polish) */}
      <header
        style={{
          borderBottom: `1px solid ${activeTheme.border}`,
          backgroundColor: activeTheme.bg,
        }}
        className="sticky top-0 z-40 backdrop-blur-md bg-opacity-95"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-3.5 group"
            aria-label="Brandon Reta-Cantu Funding home"
          >
            <BrandLogoMark conceptId={activeTheme.id} size={44} />
            <div>
              <span
                style={{ fontFamily: activeTheme.headingFont }}
                className="block text-sm font-extrabold uppercase tracking-[0.16em]"
              >
                Business funding
              </span>
              <span
                style={{ color: activeTheme.muted }}
                className="block font-mono text-[10px] tracking-[0.14em] uppercase"
              >
                Brandon Reta-Cantu · ID {CLIENT_TRUTH.agentId}
              </span>
            </div>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-semibold md:flex"
            aria-label="Main navigation"
          >
            <a
              href="#how-it-works"
              className="transition-opacity hover:opacity-75"
            >
              How it works
            </a>
            <a href="#solutions" className="transition-opacity hover:opacity-75">
              Funding uses
            </a>
            <a href="#calculator" className="transition-opacity hover:opacity-75">
              Capital Estimator
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-75">
              Contact
            </a>
            <Link
              href="/system"
              style={{ borderColor: activeTheme.border }}
              className="inline-flex items-center gap-1.5 border px-4 py-2.5 text-xs font-mono uppercase tracking-wider hover:opacity-80"
            >
              <Lock className="w-3.5 h-3.5" />
              Advisor OS
            </Link>
            <a
              href={CLIENT_TRUTH.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: activeTheme.primary,
                color: activeTheme.primaryFg,
              }}
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5 shadow-sm"
            >
              Start application
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/system"
              style={{ borderColor: activeTheme.border }}
              className="border px-3 py-2.5 text-[11px] font-mono font-bold uppercase"
            >
              OS
            </Link>
            <a
              href={CLIENT_TRUTH.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: activeTheme.primary,
                color: activeTheme.primaryFg,
              }}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wide"
            >
              Apply
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ borderColor: activeTheme.border }}
              aria-label="Toggle mobile menu"
              className="border p-2 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER MENU */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: activeTheme.card,
              borderTop: `1px solid ${activeTheme.border}`,
            }}
            className="md:hidden px-5 py-5 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3 text-sm font-bold">
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-current/10"
              >
                01 · How it works
              </a>
              <a
                href="#solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-current/10"
              >
                02 · Funding uses
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-current/10"
              >
                03 · Capital Estimator
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-current/10"
              >
                04 · Contact Brandon
              </a>
              <Link
                href="/system"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-current/10 font-mono text-xs uppercase flex items-center justify-between"
              >
                <span>05 · Florida Geo-Lead &amp; AI Command OS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <a
                href={CLIENT_TRUTH.phoneHref}
                style={{ borderColor: activeTheme.border }}
                className="border py-3 text-center text-xs font-mono font-bold uppercase flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call (941)
              </a>
              <a
                href={CLIENT_TRUTH.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: activeTheme.primary,
                  color: activeTheme.primaryFg,
                }}
                className="py-3 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1"
              >
                Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION — Exact Source of Truth Copy + Architectural Luxury Visuals */}
        <section
          style={{
            borderBottom: `1px solid ${activeTheme.border}`,
            background: activeTheme.isDark
              ? `radial-gradient(circle at 85% 15%, ${activeTheme.primary}28, transparent 40%), linear-gradient(135deg, ${activeTheme.bg} 0%, ${activeTheme.surface} 100%)`
              : `radial-gradient(circle at 85% 15%, rgba(133,48,62,0.16), transparent 38%), linear-gradient(135deg, ${activeTheme.bg} 0%, ${activeTheme.surface} 100%)`,
          }}
          className="relative overflow-hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl self-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <span
                  style={{ backgroundColor: activeTheme.primary }}
                  className="h-2 w-2 rounded-full"
                />
                <p
                  style={{ color: activeTheme.primary }}
                  className="text-xs font-bold uppercase tracking-[0.26em]"
                >
                  A smarter way to pursue business capital
                </p>
              </div>

              <h1
                style={{ fontFamily: activeTheme.headingFont }}
                className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-7xl"
              >
                Get the capital your business needs to move forward.
              </h1>

              <p
                style={{ color: activeTheme.muted }}
                className="mt-7 max-w-xl text-lg leading-8"
              >
                Stop piecing together capital options on your own. Submit one
                streamlined application and get connected with potential funding
                solutions built around your business goals.
              </p>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
                <a
                  href={CLIENT_TRUTH.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: activeTheme.primary,
                    color: activeTheme.primaryFg,
                  }}
                  className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-y-1 shadow-lg"
                >
                  Start your funding application{" "}
                  <ArrowUpRight className="ml-2.5 h-5 w-5" />
                </a>
                <a
                  href="#how-it-works"
                  style={{
                    borderColor: activeTheme.border,
                    color: activeTheme.text,
                  }}
                  className="inline-flex items-center justify-center border px-7 py-4 text-sm font-bold uppercase tracking-wide transition-colors hover:opacity-80"
                >
                  See how it works
                </a>
              </div>

              <p
                style={{ color: activeTheme.muted }}
                className="mt-6 text-xs leading-5"
              >
                Applying does not commit you to an offer. Final terms and
                approval are determined by participating funders.
              </p>

              {/* Executive Trust Bar */}
              <div
                style={{ borderColor: activeTheme.border }}
                className="mt-10 grid grid-cols-3 gap-4 border-t pt-6"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider opacity-65">
                    APPLICATION
                  </p>
                  <p
                    style={{ fontFamily: activeTheme.headingFont }}
                    className="text-xl font-extrabold mt-0.5"
                  >
                    1 Streamlined Intake
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider opacity-65">
                    OBLIGATION
                  </p>
                  <p
                    style={{ fontFamily: activeTheme.headingFont }}
                    className="text-xl font-extrabold mt-0.5"
                  >
                    Zero Pressure
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider opacity-65">
                    DIRECT ADVISOR
                  </p>
                  <p
                    style={{ fontFamily: activeTheme.headingFont }}
                    className="text-xl font-extrabold mt-0.5"
                  >
                    {CLIENT_TRUTH.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Architectural Feature Stack (Authentic Florida Photography + Source of Truth 01/03 Card + Executive Dossier) */}
            <div className="relative flex min-h-[480px] items-center justify-center lg:justify-end">
              <div
                style={{ borderColor: `${activeTheme.primary}45` }}
                className="absolute right-2 top-2 h-64 w-64 rounded-full border sm:right-14 sm:top-6 pointer-events-none"
              />

              <div className="relative z-10 w-full max-w-lg space-y-4">
                {/* Authentic Sarasota/Brickell Editorial Advisory Photo */}
                <div
                  style={{ borderColor: activeTheme.border }}
                  className="relative overflow-hidden border shadow-2xl group"
                >
                  <img
                    src="/images/hero-florida-advisor.jpg"
                    alt="Florida Commercial Funding Advisory Consultation"
                    className="h-72 sm:h-80 w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C8A96A] block">
                        SARASOTA · TAMPA · MIAMI · ORLANDO
                      </span>
                      <p className="text-sm font-bold mt-0.5">
                        One-on-One Commercial Capital Guidance
                      </p>
                    </div>
                    <span className="font-mono text-[10px] bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/20">
                      $25K – $500K+
                    </span>
                  </div>
                </div>

                {/* Source of Truth Accent Card */}
                <div
                  style={{
                    backgroundColor: activeTheme.accent,
                    color: activeTheme.accentFg,
                    borderTop: `3px solid ${activeTheme.gold}`,
                  }}
                  className="p-7 shadow-2xl"
                >
                  <div className="mb-5 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-[0.2em]">
                    <span>One application</span>
                    <span style={{ color: activeTheme.gold }}>01 / 03</span>
                  </div>
                  <p
                    style={{ fontFamily: activeTheme.headingFont }}
                    className="text-2xl sm:text-3xl font-bold leading-tight"
                  >
                    More clarity. More confidence. More room to grow.
                  </p>
                  <div className="mt-5 h-px bg-white/25" />
                  <p className="mt-3.5 text-sm leading-6 opacity-85">
                    Start with one application and take the next step with a
                    clearer view of your options.
                  </p>
                </div>

                {/* Direct Advisor Verification Card */}
                <div
                  style={{
                    backgroundColor: activeTheme.card,
                    borderColor: activeTheme.border,
                  }}
                  className="border p-4 shadow-md flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <BrandLogoMark conceptId={activeTheme.id} size={40} />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider opacity-70">
                        Independent Referral Specialist
                      </p>
                      <p
                        style={{ fontFamily: activeTheme.headingFont }}
                        className="text-base font-extrabold"
                      >
                        {CLIENT_TRUTH.name}
                      </p>
                      <p
                        style={{ color: activeTheme.muted }}
                        className="text-xs font-mono"
                      >
                        Agent ID {CLIENT_TRUTH.agentId} · {CLIENT_TRUTH.phone}
                      </p>
                    </div>
                  </div>
                  <a
                    href={CLIENT_TRUTH.phoneHref}
                    style={{
                      backgroundColor: activeTheme.primary,
                      color: activeTheme.primaryFg,
                    }}
                    className="px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider shrink-0"
                  >
                    Call Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HOW IT WORKS (#how-it-works) — Exact Source of Truth Copy */}
        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p
                style={{ color: activeTheme.primary }}
                className="text-xs font-bold uppercase tracking-[0.24em]"
              >
                A simple process
              </p>
              <h2
                style={{ fontFamily: activeTheme.headingFont }}
                className="mt-4 max-w-sm text-4xl font-extrabold leading-tight tracking-[-0.04em]"
              >
                A faster path from idea to action.
              </h2>
              <p
                style={{ color: activeTheme.muted }}
                className="mt-4 max-w-sm text-sm leading-6"
              >
                Designed for busy Florida operators who value straightforward
                answers over endless bank paperwork.
              </p>
            </div>

            <div
              style={{ borderColor: activeTheme.border }}
              className="grid border-t sm:grid-cols-3"
            >
              <article
                style={{ borderColor: activeTheme.border }}
                className="border-b py-7 sm:border-b-0 sm:border-l sm:px-6"
              >
                <p
                  style={{ color: activeTheme.primary }}
                  className="text-sm font-mono font-bold"
                >
                  01
                </p>
                <h3
                  style={{ fontFamily: activeTheme.headingFont }}
                  className="mt-9 text-2xl font-bold"
                >
                  Apply once
                </h3>
                <p
                  style={{ color: activeTheme.muted }}
                  className="mt-3 text-sm leading-6"
                >
                  Share your business details and recent banking information
                  through one simple application.
                </p>
              </article>

              <article
                style={{ borderColor: activeTheme.border }}
                className="border-b py-7 sm:border-b-0 sm:border-l sm:px-6"
              >
                <p
                  style={{ color: activeTheme.primary }}
                  className="text-sm font-mono font-bold"
                >
                  02
                </p>
                <h3
                  style={{ fontFamily: activeTheme.headingFont }}
                  className="mt-9 text-2xl font-bold"
                >
                  Compare options
                </h3>
                <p
                  style={{ color: activeTheme.muted }}
                  className="mt-3 text-sm leading-6"
                >
                  A funding specialist helps you review potential offers from
                  multiple business funders.
                </p>
              </article>

              <article
                style={{ borderColor: activeTheme.border }}
                className="border-b py-7 sm:border-b-0 sm:border-l sm:px-6"
              >
                <p
                  style={{ color: activeTheme.primary }}
                  className="text-sm font-mono font-bold"
                >
                  03
                </p>
                <h3
                  style={{ fontFamily: activeTheme.headingFont }}
                  className="mt-9 text-2xl font-bold"
                >
                  Choose your fit
                </h3>
                <p
                  style={{ color: activeTheme.muted }}
                  className="mt-3 text-sm leading-6"
                >
                  Select the option that aligns with your goals, cash flow, and
                  growth plans.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 3: SOLUTIONS / FUNDING USES (#solutions) — Exact Source of Truth Copy */}
        <section
          id="solutions"
          style={{
            backgroundColor: activeTheme.accent,
            color: activeTheme.accentFg,
          }}
          className="px-5 py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-7 border-b border-white/20 pb-10 md:flex-row md:items-end">
              <div>
                <p
                  style={{ color: activeTheme.gold }}
                  className="text-xs font-bold uppercase tracking-[0.24em]"
                >
                  Put capital to work
                </p>
                <h2
                  style={{ fontFamily: activeTheme.headingFont }}
                  className="mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-[-0.04em]"
                >
                  Funding that helps you act on the opportunity.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 opacity-80">
                Whether you need working capital today or room to scale
                tomorrow, start with a conversation focused on your business.
              </p>
            </div>

            <div className="mt-10 grid gap-px bg-white/20 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { num: "01", title: "Working capital" },
                { num: "02", title: "Equipment and inventory" },
                { num: "03", title: "Expansion and new locations" },
                { num: "04", title: "Marketing and payroll" },
                { num: "05", title: "Seasonal cash flow" },
                { num: "06", title: "Business opportunities" },
              ].map((item) => (
                <div
                  key={item.num}
                  style={{ backgroundColor: activeTheme.accent }}
                  className="p-7 transition-all hover:brightness-110 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        style={{ color: activeTheme.gold }}
                        className="text-xs font-mono font-bold"
                      >
                        {item.num}
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-35 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3
                      style={{ fontFamily: activeTheme.headingFont }}
                      className="mt-9 text-xl font-bold"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm opacity-75">
                      Flexible options to help you act with confidence.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a
                      href={CLIENT_TRUTH.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono uppercase tracking-wider opacity-75 group-hover:opacity-100 inline-flex items-center gap-1"
                    >
                      Explore {item.title.toLowerCase()}{" "}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* FLORIDA COMMERCIAL REALITIES PHOTO SHOWCASE (SBA 7(a)/504 Top Verticals) */}
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden border border-white/20 group">
                <img
                  src="/images/florida-contractor-fleet.jpg"
                  alt="Florida Commercial HVAC, Roofing and Specialty Trades Fleet"
                  className="h-72 w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span
                    style={{ color: activeTheme.gold }}
                    className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  >
                    FLORIDA TRADES · HVAC, ROOFING, AUTO &amp; FLEET (NAICS 238220 / 238160)
                  </span>
                  <h3
                    style={{ fontFamily: activeTheme.headingFont }}
                    className="text-2xl font-bold mt-1"
                  >
                    Service Vehicles, Equipment &amp; Project Mobilization
                  </h3>
                  <p className="text-xs text-white/80 mt-1.5 leading-5">
                    Add service vans, stock condenser &amp; roofing inventory, or bridge commercial job draws without slowing down your crews.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden border border-white/20 group">
                <img
                  src="/images/florida-medical-hospitality.jpg"
                  alt="Florida Hospitality, Restaurants and Private Medical Practices"
                  className="h-72 w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span
                    style={{ color: activeTheme.gold }}
                    className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  >
                    HOSPITALITY, RESTAURANTS &amp; CLINICS (NAICS 722511 / 621111 / 621210)
                  </span>
                  <h3
                    style={{ fontFamily: activeTheme.headingFont }}
                    className="text-2xl font-bold mt-1"
                  >
                    Second Locations, Kitchen Buildouts &amp; Seasonal Liquidity
                  </h3>
                  <p className="text-xs text-white/80 mt-1.5 leading-5">
                    Prepare for Florida peak season, upgrade clinical or kitchen equipment, and expand across Sarasota, Tampa, Miami, and Orlando.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE LUXURY ADDITION: COMMERCIAL CAPITAL SCENARIO ESTIMATOR */}
        <section
          id="calculator"
          style={{
            borderBottom: `1px solid ${activeTheme.border}`,
            backgroundColor: activeTheme.surface,
          }}
          className="px-5 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-center">
              <div>
                <p
                  style={{ color: activeTheme.primary }}
                  className="text-xs font-bold uppercase tracking-[0.24em]"
                >
                  Interactive Capital Planning
                </p>
                <h2
                  style={{ fontFamily: activeTheme.headingFont }}
                  className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em]"
                >
                  Map your funding target before you apply.
                </h2>
                <p
                  style={{ color: activeTheme.muted }}
                  className="mt-4 text-sm leading-6"
                >
                  Select your approximate funding goal and primary business use
                  to preview how Brandon Reta-Cantu and participating Bank
                  Breezy funders structure your options.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: activeTheme.card,
                  borderColor: activeTheme.border,
                }}
                className="border p-7 sm:p-9 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-current/10">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider opacity-65">
                      TARGET FUNDING AMOUNT
                    </span>
                    <p
                      style={{
                        fontFamily: activeTheme.headingFont,
                        color: activeTheme.primary,
                      }}
                      className="text-4xl font-extrabold mt-1"
                    >
                      ${capitalAmount.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono uppercase tracking-wider opacity-65">
                      PRIMARY OBJECTIVE
                    </span>
                    <p className="text-sm font-bold mt-1">{fundingPurpose}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="capital-range-slider"
                    className="block text-xs font-mono uppercase tracking-wider mb-2 opacity-75"
                  >
                    Adjust Capital Requirement ($15,000 – $500,000)
                  </label>
                  <input
                    id="capital-range-slider"
                    type="range"
                    min={15000}
                    max={500000}
                    step={5000}
                    value={capitalAmount}
                    onChange={(e) => setCapitalAmount(Number(e.target.value))}
                    style={{ accentColor: activeTheme.primary }}
                    className="w-full h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono opacity-60 mt-1">
                    <span>$15K</span>
                    <span>$100K</span>
                    <span>$250K</span>
                    <span>$500K+</span>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="block text-xs font-mono uppercase tracking-wider mb-2.5 opacity-75">
                    Select Funding Use
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Working capital",
                      "Equipment and inventory",
                      "Expansion and new locations",
                      "Marketing and payroll",
                      "Seasonal cash flow",
                      "Business opportunities",
                    ].map((use) => (
                      <button
                        key={use}
                        type="button"
                        onClick={() => setFundingPurpose(use)}
                        style={{
                          borderColor:
                            fundingPurpose === use
                              ? activeTheme.primary
                              : activeTheme.border,
                          backgroundColor:
                            fundingPurpose === use
                              ? activeTheme.primary
                              : "transparent",
                          color:
                            fundingPurpose === use
                              ? activeTheme.primaryFg
                              : activeTheme.text,
                        }}
                        className="border px-3 py-2 text-xs font-semibold text-left transition-colors cursor-pointer"
                      >
                        {use}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-6 border-t border-current/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p
                    style={{ color: activeTheme.muted }}
                    className="text-xs leading-5 max-w-xs"
                  >
                    One application lets you compare multiple offers with zero
                    obligation to accept.
                  </p>
                  <a
                    href={CLIENT_TRUTH.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: activeTheme.primary,
                      color: activeTheme.primaryFg,
                    }}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider shrink-0"
                  >
                    Apply for ${capitalAmount.toLocaleString()} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: BUILT FOR CLARITY — Exact Source of Truth Copy */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p
                style={{ color: activeTheme.primary }}
                className="text-xs font-bold uppercase tracking-[0.24em]"
              >
                Built for clarity
              </p>
              <h2
                style={{ fontFamily: activeTheme.headingFont }}
                className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-[-0.04em]"
              >
                A funding conversation you can understand.
              </h2>
              <p
                style={{ color: activeTheme.muted }}
                className="mt-5 max-w-md leading-7"
              >
                Good decisions start with clear information. You’ll know what
                happens next, what information may be needed, and that any final
                decision belongs to the participating funder.
              </p>
            </div>

            <div
              style={{
                borderColor: activeTheme.border,
                backgroundColor: activeTheme.border,
              }}
              className="grid gap-px border sm:grid-cols-2"
            >
              {[
                {
                  num: "01",
                  title: "Straightforward process",
                  desc: "Start with one application instead of managing multiple conversations on your own.",
                },
                {
                  num: "02",
                  title: "No pressure to accept",
                  desc: "Review potential options carefully and choose only what fits your business.",
                },
                {
                  num: "03",
                  title: "Business-first context",
                  desc: "Share your goals so the conversation starts with where your business is headed.",
                },
                {
                  num: "04",
                  title: "Clear expectations",
                  desc: "Applying does not guarantee approval, an offer, or specific terms. Final terms are set by participating funders.",
                },
              ].map((card) => (
                <article
                  key={card.num}
                  style={{ backgroundColor: activeTheme.card }}
                  className="p-7"
                >
                  <p
                    style={{ color: activeTheme.primary }}
                    className="text-2xl font-mono font-bold"
                  >
                    {card.num}
                  </p>
                  <h3
                    style={{ fontFamily: activeTheme.headingFont }}
                    className="mt-8 text-xl font-bold"
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{ color: activeTheme.muted }}
                    className="mt-3 text-sm leading-6"
                  >
                    {card.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: WHAT YOU CAN EXPECT — Exact Source of Truth Copy */}
        <section
          style={{
            borderColor: activeTheme.border,
            backgroundColor: activeTheme.surface,
          }}
          className="border-y px-5 py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p
                style={{ color: activeTheme.primary }}
                className="text-xs font-bold uppercase tracking-[0.24em]"
              >
                What you can expect
              </p>
              <h2
                style={{ fontFamily: activeTheme.headingFont }}
                className="mt-4 max-w-sm text-4xl font-extrabold leading-tight tracking-[-0.04em]"
              >
                A clear conversation before any decision.
              </h2>
              <p
                style={{ color: activeTheme.muted }}
                className="mt-5 max-w-md leading-7"
              >
                You stay in control from the first application through any offer
                review. No testimonial or approval promise is needed to explain
                what the process includes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "Your information stays relevant",
                  desc: "Share your business goals and funding purpose so the conversation starts with context.",
                },
                {
                  num: "02",
                  title: "Potential options are reviewed",
                  desc: "If options are available, review the details, requirements, and terms before deciding.",
                },
                {
                  num: "03",
                  title: "You choose what happens next",
                  desc: "An application is not a commitment. Approval and final terms come from participating funders.",
                },
              ].map((item) => (
                <article
                  key={item.num}
                  style={{
                    borderColor: activeTheme.border,
                    backgroundColor: activeTheme.card,
                  }}
                  className="border p-6"
                >
                  <p
                    style={{ color: activeTheme.primary }}
                    className="text-2xl font-mono font-bold"
                  >
                    {item.num}
                  </p>
                  <h3
                    style={{ fontFamily: activeTheme.headingFont }}
                    className="mt-6 text-xl font-bold"
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ color: activeTheme.muted }}
                    className="mt-3 text-sm leading-6"
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT & AI-ENHANCED LEAD FORM (#contact) — Exact Source of Truth Copy */}
        <section
          id="contact"
          className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28"
        >
          <div>
            <p
              style={{ color: activeTheme.primary }}
              className="text-xs font-bold uppercase tracking-[0.24em]"
            >
              Start the conversation
            </p>
            <h2
              style={{ fontFamily: activeTheme.headingFont }}
              className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em]"
            >
              Ready to make your next move?
            </h2>
            <p
              style={{ color: activeTheme.muted }}
              className="mt-5 max-w-md leading-7"
            >
              Tell Brandon what your business is working toward. You’ll get a
              straightforward conversation about potential next steps—without
              pressure to accept an offer.
            </p>

            <div
              style={{ borderColor: activeTheme.primary }}
              className="mt-9 space-y-4 border-l-2 pl-5 text-sm"
            >
              <a
                className="flex items-center gap-2.5 font-semibold hover:opacity-80"
                href={CLIENT_TRUTH.phoneHref}
              >
                <Phone
                  className="w-4 h-4"
                  style={{ color: activeTheme.primary }}
                />
                {CLIENT_TRUTH.phone}
              </a>
              <a
                className="flex items-center gap-2.5 break-words font-semibold hover:opacity-80"
                href={CLIENT_TRUTH.emailHref}
              >
                <Mail
                  className="w-4 h-4"
                  style={{ color: activeTheme.primary }}
                />
                {CLIENT_TRUTH.email}
              </a>
              <p
                style={{ color: activeTheme.muted }}
                className="flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                Brandon Reta-Cantu · Agent ID {CLIENT_TRUTH.agentId}
              </p>
            </div>

            <div
              style={{
                backgroundColor: activeTheme.surface,
                borderColor: activeTheme.border,
              }}
              className="mt-8 border p-5"
            >
              <p className="text-xs font-mono uppercase tracking-wider opacity-75">
                READY TO APPLY RIGHT NOW?
              </p>
              <p className="text-sm mt-1">
                Go directly to Brandon Reta-Cantu’s official Bank Breezy funding
                portal to submit your single application.
              </p>
              <a
                href={CLIENT_TRUTH.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: activeTheme.primary }}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mt-3 hover:underline"
              >
                Open Bank Breezy Portal <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div
            style={{
              borderColor: activeTheme.border,
              backgroundColor: activeTheme.card,
            }}
            className="border p-6 sm:p-9 shadow-sm"
          >
            <form
              onSubmit={handleFormSubmit}
              className="flex max-w-xl flex-col gap-4"
            >
              <h3
                style={{ fontFamily: activeTheme.headingFont }}
                className="text-2xl font-bold"
              >
                Get your funding conversation started
              </h3>
              <p style={{ color: activeTheme.muted }} className="text-sm">
                Share a few details about your business and funding goal.
                Brandon will follow up with practical next steps.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="kf_funding-inquiry_name"
                    className="text-sm font-medium"
                  >
                    Full name<span className="text-red-500"> *</span>
                  </label>
                  <input
                    id="kf_funding-inquiry_name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    style={{
                      borderColor: activeTheme.border,
                      backgroundColor: activeTheme.bg,
                      color: activeTheme.text,
                    }}
                    className="rounded-xs border px-3.5 py-2.5 outline-none"
                    name="name"
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="kf_funding-inquiry_business"
                    className="text-sm font-medium"
                  >
                    Business name<span className="text-red-500"> *</span>
                  </label>
                  <input
                    id="kf_funding-inquiry_business"
                    type="text"
                    required
                    value={formState.business}
                    onChange={(e) =>
                      setFormState({ ...formState, business: e.target.value })
                    }
                    style={{
                      borderColor: activeTheme.border,
                      backgroundColor: activeTheme.bg,
                      color: activeTheme.text,
                    }}
                    className="rounded-xs border px-3.5 py-2.5 outline-none"
                    name="business"
                    placeholder="Your Florida business LLC / Inc."
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="kf_funding-inquiry_email"
                    className="text-sm font-medium"
                  >
                    Email<span className="text-red-500"> *</span>
                  </label>
                  <input
                    id="kf_funding-inquiry_email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    style={{
                      borderColor: activeTheme.border,
                      backgroundColor: activeTheme.bg,
                      color: activeTheme.text,
                    }}
                    className="rounded-xs border px-3.5 py-2.5 outline-none"
                    name="email"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="kf_funding-inquiry_phone"
                    className="text-sm font-medium"
                  >
                    Mobile phone<span className="text-red-500"> *</span>
                  </label>
                  <input
                    id="kf_funding-inquiry_phone"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    style={{
                      borderColor: activeTheme.border,
                      backgroundColor: activeTheme.bg,
                      color: activeTheme.text,
                    }}
                    className="rounded-xs border px-3.5 py-2.5 outline-none"
                    name="phone"
                    placeholder="(941) 555-0199"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="kf_funding-inquiry_message"
                  className="text-sm font-medium"
                >
                  What opportunity are you preparing for?
                  <span className="text-red-500"> *</span>
                </label>
                <textarea
                  id="kf_funding-inquiry_message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  style={{
                    borderColor: activeTheme.border,
                    backgroundColor: activeTheme.bg,
                    color: activeTheme.text,
                  }}
                  className="rounded-xs border px-3.5 py-2.5 outline-none"
                  placeholder="Example: Expanding our Sarasota HVAC fleet and adding $120K in seasonal working capital..."
                />
              </div>

              {/* Grok Legal & Compliance Pre-Application Business Purpose & Consent Checkboxes */}
              <div
                style={{
                  borderColor: activeTheme.border,
                  backgroundColor: activeTheme.surface,
                }}
                className="border p-3.5 space-y-2.5 text-xs"
              >
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formState.businessPurposeConfirmed}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        businessPurposeConfirmed: e.target.checked,
                      })
                    }
                    style={{ accentColor: activeTheme.primary }}
                    className="mt-0.5"
                  />
                  <span style={{ color: activeTheme.muted }} className="leading-4">
                    <strong>Commercial Purpose Attestation:</strong> I confirm I
                    am inquiring on behalf of a business for commercial purposes
                    only (not personal, family, or household use), and I
                    understand final terms and approvals belong solely to
                    participating funders.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formState.consentConfirmed}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        consentConfirmed: e.target.checked,
                      })
                    }
                    style={{ accentColor: activeTheme.primary }}
                    className="mt-0.5"
                  />
                  <span style={{ color: activeTheme.muted }} className="leading-4">
                    <strong>Communication Consent:</strong> I authorize Brandon
                    Reta-Cantu (Agent ID {CLIENT_TRUTH.agentId}) to contact me
                    by phone, email, or SMS at the number provided regarding my
                    commercial funding inquiry. Consent is not a condition of
                    any purchase; reply STOP to opt out at any time.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  backgroundColor: activeTheme.primary,
                  color: activeTheme.primaryFg,
                }}
                className="rounded-xs px-5 py-3.5 font-bold uppercase tracking-wider text-xs transition-opacity hover:opacity-95 disabled:opacity-50 cursor-pointer"
              >
                {submitting
                  ? "Analyzing & Routing Request..."
                  : "Request next steps"}
              </button>

              {submittedMsg && (
                <div
                  style={{
                    borderColor: activeTheme.primary,
                    backgroundColor: activeTheme.surface,
                  }}
                  className="mt-3 border p-5 space-y-3"
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: activeTheme.primary }}
                    />
                    <span>{submittedMsg}</span>
                  </div>

                  {aiBrief && (
                    <div className="pt-3 border-t border-current/10 text-xs space-y-2">
                      <div className="flex items-center justify-between font-mono text-[11px] opacity-80">
                        <span className="inline-flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          AI Pre-Qualification Brief ({aiBrief.verifiedBy})
                        </span>
                        <span>Fit Score: {aiBrief.confidenceScore}/100</span>
                      </div>
                      <p className="font-bold text-sm">
                        Recommended Track: {aiBrief.recommendedTrack} (
                        {aiBrief.typicalRange})
                      </p>
                      <p style={{ color: activeTheme.muted }}>
                        {aiBrief.rationale}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-3">
                        <a
                          href={aiBrief.nextStepUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: activeTheme.primary,
                            color: activeTheme.primaryFg,
                          }}
                          className="px-4 py-2 font-bold uppercase tracking-wider text-[11px]"
                        >
                          Complete Official Application Now ↗
                        </a>
                        <a
                          href={CLIENT_TRUTH.phoneHref}
                          className="px-4 py-2 border border-current/20 font-mono text-[11px]"
                        >
                          Call Brandon: {CLIENT_TRUTH.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* FOOTER — Exact Source of Truth Legal Disclaimer & Copyright */}
        <footer
          style={{
            borderColor: activeTheme.border,
            backgroundColor: activeTheme.surface,
          }}
          className="border-t px-5 py-12 lg:px-8"
        >
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-xs leading-5 md:flex-row">
            <div className="max-w-3xl space-y-2.5">
              <p style={{ color: activeTheme.muted }}>
                Funding decisions are made by participating funders and are
                subject to credit, business, and bank verification. Brandon
                Reta-Cantu and referring partners do not guarantee or underwrite
                funding services.
              </p>
              <p
                style={{ color: activeTheme.muted }}
                className="text-[11px] leading-4 opacity-80"
              >
                <strong>Regulatory Disclosure:</strong> Brandon Reta-Cantu (Agent ID{" "}
                {CLIENT_TRUTH.agentId}) is an independent commercial funding
                referral specialist and is not a bank, direct lender, or
                underwriter. Services and any funding obtained are intended
                solely for commercial or business purposes—not for personal,
                family, or household use. No advance broker fees are charged to
                applicants. Compensation may be paid by participating funders
                upon closing.
              </p>
              <p className="font-mono text-[11px] opacity-65">
                Agent ID {CLIENT_TRUTH.agentId} · {CLIENT_TRUTH.phone} ·{" "}
                {CLIENT_TRUTH.email} · Identity System: 01 · The Sovereign Crest
              </p>
            </div>
            <div className="shrink-0 md:text-right">
              <p className="font-bold">© 2026 Brandon Reta-Cantu</p>
              <p style={{ color: activeTheme.muted }}>
                Business funding guidance
              </p>
              <div className="mt-2 flex md:justify-end gap-4 font-mono text-[11px]">
                <Link href="/system" className="underline hover:opacity-80">
                  Florida Lead Engine
                </Link>
                <a
                  href="/Brandon_Reta_Cantu_5_Brand_Concepts_NEXORA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  5 Brand Concepts PDF
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* MOBILE STICKY ACTION BAR (1-TAP CALL, ADVISOR OS, START APPLICATION) */}
        <div
          style={{
            backgroundColor: activeTheme.card,
            borderTop: `1px solid ${activeTheme.border}`,
          }}
          className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-between gap-2 px-3 py-2.5 shadow-2xl"
        >
          <a
            href={CLIENT_TRUTH.phoneHref}
            style={{ borderColor: activeTheme.border }}
            className="border px-3 py-2.5 text-xs font-mono font-bold flex items-center justify-center gap-1.5 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" style={{ color: activeTheme.primary }} />
            Call
          </a>
          <Link
            href="/system"
            style={{ borderColor: activeTheme.border }}
            className="border px-3 py-2.5 text-xs font-mono font-bold uppercase flex items-center justify-center gap-1 shrink-0"
          >
            <Compass className="w-3.5 h-3.5" />
            Lead OS
          </Link>
          <a
            href={CLIENT_TRUTH.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: activeTheme.primary,
              color: activeTheme.primaryFg,
            }}
            className="flex-1 py-2.5 px-3 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1"
          >
            Start Application <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>
    </div>
  );
}
