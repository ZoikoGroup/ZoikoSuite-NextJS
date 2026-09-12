"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, Clock } from "lucide-react";

export default function MobileChallengeCommandCenter() {
  return (
    <div className="w-full flex flex-col gap-5 mt-8">
      {/* 1. Talk to a solutions architect link */}
      <div>
        <Link
          href="/contact"
          className="text-xs sm:text-sm font-medium text-[#D0AA55] hover:underline inline-flex items-center gap-1.5"
        >
          Talk to a solutions architect →
        </Link>
      </div>

      {/* 2. 5 Capability Badge Pills */}
      <div className="flex flex-wrap gap-2">
        {[
          "SOURCE-AWARE",
          "EVIDENCE-BACKED",
          "HUMAN-ACCOUNTABLE",
          "MULTI-ENTITY",
          "JURISDICTION-QUALIFIED",
        ].map((pill, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]"
          >
            {pill}
          </span>
        ))}
      </div>

      {/* 3. Advisory Callout Quote Line */}
      <div className="border-l-2 border-[#c5a059] pl-3 py-1">
        <p className="text-[11.5px] text-[#9ba4b5] leading-relaxed font-light">
          Capability, coverage, integration and implementation scope depend on approved architecture, product availability and readiness.
        </p>
      </div>

      {/* 4. Challenge Command Center Terminal Card */}
      <div className="rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-2xl overflow-hidden mt-1">
        {/* Dark Terminal Top Bar */}
        <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
              CHALLENGE COMMAND CENTER
            </span>
            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-900/60 text-rose-200 border border-rose-700/50">
              SYNTHETIC — NO LIVE ACTION
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex flex-col gap-4">
          {/* Header Row */}
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              Global Payroll Governance
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5 font-normal">
              Related challenges: 4 · Workforce Compliance · Cross-Border Compliance · Audit Readiness · Regulatory Reporting
            </p>
          </div>

          {/* Two Sub-cards */}
          <div className="grid grid-cols-1 gap-3.5">
            {/* Left Box: STATUS AND WHY */}
            <div className="rounded-xl border border-slate-200/90 bg-[#FAF8F5] p-3.5 flex flex-col gap-2 text-xs">
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                STATUS AND WHY
              </span>

              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-[11px] w-20 shrink-0">Status</span>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-300 inline-flex items-center gap-1">
                    <AlertTriangle className="w-2.5 h-2.5" />
                    BLOCKED
                  </span>
                  <span className="text-[11px] text-slate-500">priority: high</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-200/50">
                <span className="text-slate-500 text-[11px] w-20 shrink-0 pt-0.5">Why attention</span>
                <span className="text-slate-800 text-[11.5px] leading-relaxed">
                  Pay-run release requires an obligation review that has no assigned reviewer
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-slate-200/50">
                <span className="text-slate-500 text-[11px] w-20 shrink-0">Business object</span>
                <span className="text-slate-800 font-mono text-[11px]">
                  Pay run · PRUN-2026-08 · Netherlands
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-slate-200/50">
                <span className="text-slate-500 text-[11px] w-20 shrink-0">Source</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-800 text-[11px]">Payroll provider ·</span>
                  <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300">
                    INPUT INCOMPLETE
                  </span>
                </div>
              </div>
            </div>

            {/* Right Box: SCOPE AND GOVERNANCE */}
            <div className="rounded-xl border border-slate-200/90 bg-[#FAF8F5] p-3.5 flex flex-col gap-2 text-xs">
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                SCOPE AND GOVERNANCE
              </span>

              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-[11px] w-20 shrink-0">Entity</span>
                <span className="text-slate-800 text-[11px] font-medium">New Netherlands entity</span>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-slate-200/50">
                <span className="text-slate-500 text-[11px] w-20 shrink-0">Jurisdiction</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-800 text-[11px]">Netherlands ·</span>
                  <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-300">
                    NO APPROVED SOURCE
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-slate-200/50">
                <span className="text-slate-500 text-[11px] w-20 shrink-0">Owner / due</span>
                <span className="text-slate-800 font-mono text-[11px]">
                  Aisha Rahman · due 28-Aug-2026 · 09:00 CET
                </span>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-200/50">
                <span className="text-slate-500 text-[11px] w-20 shrink-0 pt-0.5">Governance</span>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-700 text-[11px]">Policy scope confirmed ·</span>
                  <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-300 self-start">
                    SEGREGATION FLAW
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-slate-200/50">
                <span className="text-slate-500 text-[11px] w-20 shrink-0">Evidence</span>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300">
                  3 OF 7 · 1 RESTRICTED
                </span>
              </div>
            </div>
          </div>

          {/* Action Route Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
            <span className="text-[10px] font-mono text-slate-400 mr-1">Next routes:</span>
            <button
              type="button"
              className="px-3 py-1 rounded bg-[#0F476A] text-white text-[11px] font-semibold hover:bg-[#08222F] transition-colors"
            >
              Review
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-700 text-[11px] font-medium hover:bg-slate-100 transition-colors"
            >
              Request evidence
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-700 text-[11px] font-medium hover:bg-slate-100 transition-colors"
            >
              Escalate
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-700 text-[11px] font-medium hover:bg-slate-100 transition-colors"
            >
              Open architecture
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-700 text-[11px] font-medium hover:bg-slate-100 transition-colors"
            >
              Discuss challenge
            </button>
          </div>

          {/* Bottom Callout Text */}
          <p className="text-[11px] font-mono text-slate-500 leading-relaxed border-t border-slate-100 pt-2.5">
            Status is text plus scope, never color alone. &ldquo;Why attention&rdquo; is a transparent reason rather than an opaque score, and no route performs a live production action.
          </p>
        </div>
      </div>
    </div>
  );
}
