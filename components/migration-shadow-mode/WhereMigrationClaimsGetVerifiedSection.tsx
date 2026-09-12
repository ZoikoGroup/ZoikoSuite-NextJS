"use client";

import React from "react";
import Link from "next/link";

export default function WhereMigrationClaimsGetVerifiedSection() {
  return (
    <section className="w-full bg-[#FBF9F4] text-[#08222F] py-14 sm:py-20 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 text-left">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59A41] mb-2">
              — TRUST AND PROCUREMENT
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1E28] tracking-tight">
              Where migration claims get verified
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5A6D77] max-w-md leading-relaxed md:pt-6">
            Every product view above is a synthetic fixture. These are the routes where the real answers live.
          </p>
        </div>

        {/* 6 Cards Grid (2 columns on mobile/tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
          {/* Card 1: Architecture */}
          <div className="bg-white border border-[#E2DDD5] rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-mono text-[#C59A41] uppercase tracking-wider mb-2">
                Architecture
              </p>
              <h3 className="text-sm font-bold text-[#0B1E28] mb-3">
                What connects, and who owns it
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                <li>
                  <Link href="/platform-foundation" className="hover:text-[#C59A41] hover:underline">
                    Platform Foundation
                  </Link>
                </li>
                <li>
                  <Link href="/platform-overview" className="hover:text-[#C59A41] hover:underline">
                    Source-of-record model
                  </Link>
                </li>
                <li>
                  <span className="text-slate-500">Deployment options</span>
                </li>
              </ul>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-300">
                ■ DOCUMENTED
              </span>
            </div>
          </div>

          {/* Card 2: Governance */}
          <div className="bg-white border border-[#E2DDD5] rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-mono text-[#C59A41] uppercase tracking-wider mb-2">
                Governance
              </p>
              <h3 className="text-sm font-bold text-[#0B1E28] mb-3">
                Controls that must hold through cutover
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                <li>
                  <Link href="/governance-platform" className="hover:text-[#C59A41] hover:underline">
                    Governance Platform
                  </Link>
                </li>
                <li>
                  <span className="text-slate-500">Evidence and audit readiness</span>
                </li>
                <li>
                  <span className="text-slate-500">Governed lifecycle</span>
                </li>
              </ul>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-300">
                ■ DOCUMENTED
              </span>
            </div>
          </div>

          {/* Card 3: Security and privacy */}
          <div className="bg-white border border-[#E2DDD5] rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-mono text-[#C59A41] uppercase tracking-wider mb-2">
                Security and privacy
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                <li>
                  <span className="text-slate-700 font-medium">Security overview</span>
                </li>
                <li>
                  <span className="text-slate-700">
                    Data Processing Agreement <span className="text-[10px] font-mono text-slate-400">PDF · new tab</span>
                  </span>
                </li>
                <li>
                  <span className="text-slate-500">Subprocessors</span>
                </li>
                <li>
                  <span className="text-slate-500">Accessibility</span>
                </li>
              </ul>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-300">
                ★ READINESS &mdash; NOT CERTIFIED
              </span>
            </div>
          </div>

          {/* Card 4: Shadow Mode availability */}
          <div className="bg-white border border-[#E2DDD5] rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-mono text-[#C59A41] uppercase tracking-wider mb-2">
                Shadow Mode availability
              </p>
              <h3 className="text-sm font-bold text-[#0B1E28] mb-2">
                Source and implementation dependent
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed mb-6">
                Shadow Mode support, observation method and scope depend on approved implementation. This page shows the contract model, not a guarantee that it is available for your estate.
              </p>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold bg-sky-50 text-sky-700 border border-sky-300">
                ■ REQUIRED VERIFICATION
              </span>
            </div>
          </div>

          {/* Card 5: Professional boundary */}
          <div className="bg-white border border-[#E2DDD5] rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-mono text-[#C59A41] uppercase tracking-wider mb-2">
                Professional boundary
              </p>
              <p className="text-[11px] text-slate-600 leading-relaxed mb-6">
                Migration activity does not constitute legal, tax, accounting, audit or regulatory advice. Qualified professionals remain responsible for regulated judgment, including retention and decommissioning decisions.
              </p>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-300">
                ■ APPLIES TO THIS PAGE
              </span>
            </div>
          </div>

          {/* Card 6: No outcome guarantee */}
          <div className="bg-[#FEF9EE] border border-[#E8DAB7] rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-mono text-[#8C6B1C] uppercase tracking-wider mb-2">
                No outcome guarantee
              </p>
              <p className="text-[11px] text-amber-950/80 leading-relaxed mb-6">
                No timeline, availability, integration, jurisdiction, provider, hosting, certification, service level or migration outcome is published merely because it appears in a specification. Each requires its own approved source.
              </p>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold bg-white/80 text-slate-700 border border-slate-300">
                ■ CLAIM GATE
              </span>
            </div>
          </div>
        </div>

        {/* Operational resources card */}
        <div className="bg-white border border-[#E2DDD5] rounded-xl p-5 shadow-sm text-left mb-2">
          <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-1">
            ALREADY USING ZOIKOSUITE?
          </p>
          <h3 className="text-xs sm:text-sm font-bold text-[#0B1E28] mb-1">
            Operational resources, no-demo wall
          </h3>
          <p className="text-[11px] text-slate-500 mb-4">
            Reachable without a form or a conversation.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Documentation", "Support", "System status", "Release notes"].map(
              (pill, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="px-4 py-1.5 rounded-full border border-slate-300 bg-white text-xs font-medium text-slate-800 hover:border-slate-500 hover:bg-slate-50 transition-colors shadow-xs"
                >
                  {pill}
                </button>
              )
            )}
          </div>
        </div>

        {/* Tiny Status Text */}
        <p className="text-[10px] font-mono text-slate-400 text-left">
          Status text reviewed 31 July 2026.
        </p>
      </div>
    </section>
  );
}
