"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MigrationShadowModeHeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white pt-8 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (lg:grid) - 100% UNTOUCHED DESKTOP DESIGN                 */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Eyebrow Breadcrumb (Desktop) */}
          <div className="col-span-12 flex items-center gap-2 mb-[-20px]">
            <span className="w-5 h-[2px] bg-[#c5a059]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#c5a059] uppercase font-mono">
              MIGRATION &amp; SHADOW MODE
            </span>
          </div>

          {/* Left Column: Title, Subtitle, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-span-6 flex flex-col items-start text-left"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.14] mb-6 sm:mb-7">
              Prove the operating model before production activation
            </h1>

            <p className="text-[#9ba4b5] text-[14px] sm:text-base leading-[1.65] max-w-[520px] mb-8 font-normal">
              Map current systems and responsibilities, validate data, controls, integrations and evidence, then compare proposed ZoikoSuite behavior with current operation &mdash; before anything is activated.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/platform-overview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-[13px] hover:bg-[#c29c4c] transition-all duration-200 shadow-sm text-center"
              >
                <span>Talk to a solutions architect &rarr;</span>
              </Link>
              <Link
                href="/platform-tour"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-[13px] transition-all duration-200 bg-[#08222F]/60 text-center"
              >
                <span>Book enterprise demo</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Graphic (msm1.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="col-span-6 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-[560px] rounded-2xl overflow-hidden shadow-2xl bg-transparent border border-slate-700/50">
              <Image
                src="/migration-shadow-mode/msm1.png"
                alt="Prove the operating model before production activation"
                width={800}
                height={800}
                priority
                className="w-full h-auto object-cover rounded-2xl block"
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (block lg:hidden) - EXACT MATCH TO USER'S MOBILE SCREENSHOT */}
        {/* ========================================================================= */}
        <div className="block lg:hidden flex flex-col text-left">
          {/* Mobile Top Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-[#9ba4b5] mb-5 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/platform-overview" className="hover:text-white transition-colors">
              Platform
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Migration &amp; Shadow Mode</span>
          </div>

          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              MIGRATION &amp; SHADOW MODE
            </span>
          </div>

          {/* Mobile Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.22] mb-4">
            Prove the operating model before production activation
          </h1>

          {/* Mobile Paragraph */}
          <p className="text-[#9ba4b5] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            Map current systems and responsibilities, validate data, controls, integrations and evidence, then compare proposed ZoikoSuite behaviour with current operation &mdash; before anything is activated.
          </p>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 w-full mb-4">
            <Link
              href="/platform-overview"
              className="w-full py-3 px-5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-xs text-center shadow-sm hover:bg-[#c29c4c] transition-colors"
            >
              Talk to a solutions architect +
            </Link>
            <Link
              href="/platform-tour"
              className="w-full py-3 px-5 rounded-full border border-slate-700 text-slate-200 font-medium text-xs text-center bg-[#092635] hover:bg-[#0d3143] transition-colors"
            >
              Book enterprise demo
            </Link>
          </div>

          {/* Mobile Explore Link */}
          <Link
            href="#adoption-model"
            className="inline-flex items-center text-[#D0AA55] text-xs font-semibold hover:underline mb-6"
          >
            Explore the adoption model &rarr;
          </Link>

          {/* Mobile 4 Strategic Pillars */}
          <div className="flex flex-col gap-2 mb-6">
            {[
              "COEXISTENCE FIRST",
              "EVIDENTS BEFORE READINESS",
              "HUMAN AUTHORIZATION",
              "TRUTHFUL REVERSIBILITY",
            ].map((pill, i) => (
              <div
                key={i}
                className="px-3.5 py-1.5 rounded border border-slate-700/80 bg-[#092635] text-[10px] font-mono tracking-wider text-slate-300 w-fit"
              >
                {pill}
              </div>
            ))}
          </div>

          {/* Mobile Gold Left-Border Callout */}
          <div className="border-l-2 border-[#D0AA55] pl-3 py-1 mb-8">
            <p className="text-[11px] text-[#9ba4b5] leading-relaxed">
              Shadow Mode does not itself authorize live actions. Activation, recovery, timelines and replacement scope require customer-specific validation, accountable approval and implementation planning. Availability and support depend on approved scope.
            </p>
          </div>

          {/* Mobile Migration Control Center Component */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-white text-[#08222F] mb-4">
            {/* Top Bar (Navy) */}
            <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  MIGRATION CONTROL CENTER
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-rose-950/80 text-rose-400 border border-rose-600/40">
                    SYNTHETIC FIXTURE · NON-LIVE
                  </span>
                </div>
              </div>
              <div className="text-slate-500 font-mono tracking-widest text-xs">
                •••
              </div>
            </div>

            {/* Selector Filters & Timestamp */}
            <div className="p-4 bg-[#FBF9F5] border-b border-[#EAE4DA]">
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mb-2">
                <div className="bg-white border border-[#DDD6CA] rounded px-2 py-1.5 text-slate-700 flex items-center justify-between">
                  <span>PROGRAM: <strong>NextValue adoption</strong></span>
                  <span>▾</span>
                </div>
                <div className="bg-white border border-[#DDD6CA] rounded px-2 py-1.5 text-slate-700 flex items-center justify-between">
                  <span>ENTITY: <strong>All · 1</strong></span>
                  <span>▾</span>
                </div>
                <div className="bg-white border border-[#DDD6CA] rounded px-2 py-1.5 text-slate-700 flex items-center justify-between">
                  <span>WAVE: <strong>Wave 3</strong></span>
                  <span>▾</span>
                </div>
                <div className="bg-white border border-[#DDD6CA] rounded px-2 py-1.5 text-slate-700 flex items-center justify-between">
                  <span>ENVIRONMENT: <strong>Illustrative Evaluation</strong></span>
                  <span>▾</span>
                </div>
              </div>
              <p className="text-[10px] font-mono text-slate-500 text-right">
                As of 04 Aug 2026 09:12
              </p>
            </div>

            {/* 7 Phases List */}
            <div className="p-4 space-y-2 bg-white border-b border-[#EAE4DA]">
              {/* Phase 1 */}
              <div className="border border-[#E2DDD5] rounded-lg p-3 bg-white">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41]">
                  PHASE 01
                </div>
                <div className="text-xs font-bold text-[#0B1E28]">
                  Discover &amp; baseline
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Closed with evidence
                </div>
              </div>

              {/* Phase 2 */}
              <div className="border border-[#E2DDD5] rounded-lg p-3 bg-white">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41]">
                  PHASE 02
                </div>
                <div className="text-xs font-bold text-[#0B1E28]">
                  Prepare
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Closed with evidence
                </div>
              </div>

              {/* Phase 3 */}
              <div className="border border-[#E2DDD5] rounded-lg p-3 bg-white">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41]">
                  PHASE 03
                </div>
                <div className="text-xs font-bold text-[#0B1E28]">
                  Migrate &amp; reconcile
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  In review
                </div>
              </div>

              {/* Phase 4 - Current Active */}
              <div className="border-2 border-sky-500 rounded-lg p-3 bg-sky-50/20 shadow-sm">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41]">
                  PHASE 04
                </div>
                <div className="text-xs font-bold text-[#0B1E28]">
                  Shadow Mode
                </div>
                <div className="text-[10px] font-mono text-sky-700 font-semibold">
                  In review · current
                </div>
              </div>

              {/* Phase 5 */}
              <div className="border border-[#E2DDD5] rounded-lg p-3 bg-white">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41]">
                  PHASE 05
                </div>
                <div className="text-xs font-bold text-[#0B1E28]">
                  Controlled activation
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Not started
                </div>
              </div>

              {/* Phase 6 */}
              <div className="border border-[#E2DDD5] rounded-lg p-3 bg-white">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41]">
                  PHASE 06
                </div>
                <div className="text-xs font-bold text-[#0B1E28]">
                  Stabilize
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Not started
                </div>
              </div>

              {/* Phase 7 */}
              <div className="border border-[#E2DDD5] rounded-lg p-3 bg-white">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41]">
                  PHASE 07
                </div>
                <div className="text-xs font-bold text-[#0B1E28]">
                  Exit/decommission
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Not started
                </div>
              </div>
            </div>

            {/* Workstreams Table */}
            <div className="p-4 bg-[#FAF8F5]">
              <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-600 mb-3">
                WORKSTREAMS — SCOPE, SOURCE, TARGET ROLE AND DISPOSITION
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#E0D8CC] text-slate-500 font-mono uppercase text-[9px]">
                      <th className="py-2 pr-2 font-semibold">Workstream</th>
                      <th className="py-2 pr-2 font-semibold">Owner</th>
                      <th className="py-2 pr-2 font-semibold">Current Source</th>
                      <th className="py-2 font-semibold text-right">Target Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE4DA] text-[10px]">
                    {/* Row 1 */}
                    <tr>
                      <td className="py-2.5 pr-2 font-medium text-[#0B1E28]">
                        Supplier &amp; payables
                      </td>
                      <td className="py-2.5 pr-2 text-slate-600">Priya Nair</td>
                      <td className="py-2.5 pr-2 text-slate-600">Finance system class</td>
                      <td className="py-2.5 text-right whitespace-nowrap">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-sky-50 text-sky-700 border border-sky-300">
                          ★ GOVERNED WORKSTREAM
                        </span>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                      <td className="py-2.5 pr-2 font-medium text-[#0B1E28]">
                        Contract obligations
                      </td>
                      <td className="py-2.5 pr-2 text-slate-600">Aisha Rahman</td>
                      <td className="py-2.5 pr-2 text-slate-600">Contract repository class</td>
                      <td className="py-2.5 text-right whitespace-nowrap">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-300">
                          ★ REFERENCE / READ-ONLY
                        </span>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                      <td className="py-2.5 pr-2 font-medium text-[#0B1E28]">
                        Policy &amp; decision records
                      </td>
                      <td className="py-2.5 pr-2 text-slate-600">Maya Chen</td>
                      <td className="py-2.5 pr-2 text-slate-600">None &mdash; new</td>
                      <td className="py-2.5 text-right whitespace-nowrap">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-300">
                          ★ AUTHORITATIVE
                        </span>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr>
                      <td className="py-2.5 pr-2 font-medium text-[#0B1E28]">
                        Workforce context
                      </td>
                      <td className="py-2.5 pr-2 text-slate-600">Daniel Foster</td>
                      <td className="py-2.5 pr-2 text-slate-600">Payroll system class</td>
                      <td className="py-2.5 text-right whitespace-nowrap">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-300">
                          ★ REFERENCE / READ-ONLY
                        </span>
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr>
                      <td className="py-2.5 pr-2 font-medium text-[#0B1E28]">
                        Tax obligations
                      </td>
                      <td className="py-2.5 pr-2 text-slate-400 italic">Unassigned</td>
                      <td className="py-2.5 pr-2 text-slate-600">
                        <div>Local spreadsheet</div>
                        <span className="inline-block px-1 py-0.2 rounded text-[8px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-300">
                          ▲ STALE
                        </span>
                      </td>
                      <td className="py-2.5 text-right text-slate-400 italic">
                        Blank &mdash; unapproved
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bottom Notice */}
              <p className="text-[10px] font-mono text-slate-500 mt-4 leading-relaxed border-t border-[#EAE4DA] pt-3">
                No overall readiness percentage, go-live score, migration duration or refuse appears in this view. Scope is real, and filtering never implies that excluded scope is safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
