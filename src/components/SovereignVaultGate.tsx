"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CLIENT_TRUTH } from "@/lib/brand-themes";
import { BrandLogoMark } from "@/components/BrandLogoMark";
import {
  Lock,
  ShieldCheck,
  ArrowRight,
  Eye,
  EyeOff,
  FileText,
  ArrowUpRight,
} from "lucide-react";

interface SovereignVaultGateProps {
  onUnlock: () => void;
}

const VALID_PASSCODE = "NEXORA@2006";

export function SovereignVaultGate({ onUnlock }: SovereignVaultGateProps) {
  const [passcode, setPasscode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (passcode.trim() === VALID_PASSCODE) {
      setError(false);
      setUnlocking(true);
      setTimeout(() => {
        onUnlock();
      }, 850);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#0E0C0B] text-[#F5F1EB] flex flex-col justify-between overflow-hidden">
      {/* REFINED MOTION-GRAPHIC KEYFRAMES (CLEAN SVG LINE-DRAW & GOLD FOIL SHEEN) */}
      <style>{`
        @keyframes drawCrestPath {
          0% {
            stroke-dashoffset: 600;
            opacity: 0.2;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes goldSweep {
          0% {
            transform: translateX(-140%) skewX(-22deg);
          }
          100% {
            transform: translateX(240%) skewX(-22deg);
          }
        }
        @keyframes kenBurnsSlow {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.06) translate(-1%, -1%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }
        @keyframes pulseLine {
          0%, 100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.85;
          }
        }
        @keyframes shakeField {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .crest-stroke-anim {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawCrestPath 3.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .gold-sheen-bar {
          animation: goldSweep 5.5s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        .ken-burns-bg {
          animation: kenBurnsSlow 28s ease-in-out infinite;
        }
        .pulse-hairline {
          animation: pulseLine 4s ease-in-out infinite;
        }
        .shake-error {
          animation: shakeField 0.4s ease-in-out;
        }
      `}</style>

      {/* TOP ARCHITECTURAL HEADER */}
      <header className="relative z-20 border-b border-white/10 bg-[#0E0C0B]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3.5">
            <BrandLogoMark conceptId="sovereign-crest" size={40} />
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-[#C8A96A]">
                THE SOVEREIGN CREST · PRIVATE CLIENT PORTAL
              </span>
              <span className="text-xs font-semibold tracking-wide text-white/90">
                {CLIENT_TRUTH.name} · Commercial Funding OS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-[#85303E] hover:bg-[#9c3949] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              LANDING PAGE
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN SPLIT-SCREEN INSTITUTIONAL VAULT */}
      <main className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 lg:grid-cols-[1.08fr_0.92fr] border-x border-white/10">
        {/* LEFT PANEL: MOTION-GRAPHIC SOVEREIGN CREST MONUMENT & FLORIDA TELEMETRY */}
        <div className="relative flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 p-8 sm:p-12 lg:p-14 min-h-[380px]">
          {/* Subtle Ken Burns Documentary Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/images/system-command-florida.jpg"
              alt="Sarasota Commercial Coastline"
              className="h-full w-full object-cover object-center opacity-20 ken-burns-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0E0C0B] via-[#0E0C0B]/92 to-[#85303E]/25" />
          </div>

          {/* Architectural Fine Hairline Frame */}
          <div className="pointer-events-none absolute inset-5 border border-[#C8A96A]/20" />

          {/* Top Left Kicker */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8A96A]">
              <span className="h-1.5 w-1.5 bg-[#C8A96A]" />
              FLORIDA COMMERCIAL CAPITAL OS
            </span>
            <span className="font-mono text-[11px] text-white/45">
              AGENT ID · {CLIENT_TRUTH.agentId}
            </span>
          </div>

          {/* Centerpiece: Animated SVG Motion-Graphic of The Official Sovereign Crest Logo */}
          <div className="relative z-10 my-10 flex flex-col items-center justify-center text-center">
            <div className="relative overflow-hidden border border-[#C8A96A]/45 bg-[#141011]/95 p-8 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.75)]">
              {/* Liquid Gold Foil Sheen Sweep */}
              <div className="gold-sheen-bar pointer-events-none absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-[#C8A96A]/25 to-transparent" />

              {/* Exact Official Sovereign Crest Logo (Concept 01) with Animated Gold Stroke Draw */}
              <svg
                width="136"
                height="136"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <rect
                  x="6"
                  y="6"
                  width="108"
                  height="108"
                  rx="4"
                  fill="#85303E"
                  stroke="#C8A96A"
                  strokeWidth="3.5"
                  className="crest-stroke-anim"
                />
                <rect
                  x="16"
                  y="16"
                  width="88"
                  height="88"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1.5"
                  className="crest-stroke-anim"
                />
                <text
                  x="58"
                  y="76"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="sans-serif"
                  fontWeight="800"
                  fontSize="46"
                  letterSpacing="-2"
                >
                  BR
                </text>
                <path
                  d="M84 24H98V38"
                  stroke="#C8A96A"
                  strokeWidth="3.5"
                  className="crest-stroke-anim"
                />
                <path
                  d="M98 24L80 42"
                  stroke="#C8A96A"
                  strokeWidth="3.5"
                  className="crest-stroke-anim"
                />
              </svg>

              <div className="mt-6 space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C8A96A]">
                  CONCEPT 01 · THE SOVEREIGN CREST
                </p>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  {CLIENT_TRUTH.name}
                </h2>
                <p className="text-xs text-white/60 font-mono">
                  Sarasota, FL ({CLIENT_TRUTH.phone}) · Statewide Commercial
                  Funding
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Left Telemetry Strip */}
          <div className="relative z-10 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>GOSOM GOOGLE MAPS + VOYAGE-FINANCE-2</span>
            </div>
            <span className="text-[#C8A96A]">15 FL SBA NAICS SECTORS</span>
          </div>
        </div>

        {/* RIGHT PANEL: CLEAN EXECUTIVE OTP LOGIN FORM */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-[#12100E]">
          <div className="mx-auto w-full max-w-md space-y-8">
            <div className="space-y-3 border-b border-white/10 pb-6">
              <div className="inline-flex items-center gap-2 bg-[#85303E]/25 border border-[#85303E] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#C8A96A]">
                <Lock className="w-3 h-3" />
                AUTHORIZED SESSION GATE
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {unlocking
                  ? "Session Authenticated"
                  : "Enter One-Time Passcode"}
              </h1>
              <p className="text-sm text-white/65 leading-relaxed">
                Enter your executive passcode to access the live Florida Lead
                Scanner, AI Underwriting Scorer, and Built-In Deal CRM.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`space-y-5 ${error ? "shake-error" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C8A96A]">
                    One-Time Passcode
                  </label>
                  <span className="font-mono text-[10px] text-white/40">
                    CASE-SENSITIVE
                  </span>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="••••••••••"
                    autoFocus
                    className={`w-full bg-[#0A0908] border ${
                      error
                        ? "border-red-500"
                        : unlocking
                        ? "border-emerald-400"
                        : "border-white/20 focus:border-[#C8A96A]"
                    } px-4 pr-11 py-4 text-base font-mono tracking-[0.2em] text-white outline-none transition-colors`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/45 hover:text-white cursor-pointer"
                    aria-label="Show or hide passcode"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {error && (
                  <p className="mt-2 font-mono text-xs text-red-400">
                    Invalid passcode. Please enter your authorized NEXORA code.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={unlocking}
                className={`w-full py-4 px-6 font-mono text-xs font-bold uppercase tracking-[0.22em] flex items-center justify-center gap-2.5 cursor-pointer transition-all ${
                  unlocking
                    ? "bg-emerald-600 text-white"
                    : "bg-[#85303E] hover:bg-[#9c3949] text-white"
                }`}
              >
                {unlocking ? (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    Entering Command Center...
                  </>
                ) : (
                  <>
                    Unlock Command Center
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Links Card */}
            <div className="border border-white/10 bg-[#171413] p-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/60">Direct Application Link:</span>
                <a
                  href={CLIENT_TRUTH.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-[#C8A96A] inline-flex items-center gap-1"
                >
                  Bank Breezy Portal
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-20 border-t border-white/10 bg-[#0E0C0B]">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 sm:px-8 text-xs font-mono text-white/55">
          <span>
            © {new Date().getFullYear()} {CLIENT_TRUTH.name} (Agent ID{" "}
            {CLIENT_TRUTH.agentId}) · {CLIENT_TRUTH.phone}
          </span>
          <div className="flex items-center gap-4">
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
