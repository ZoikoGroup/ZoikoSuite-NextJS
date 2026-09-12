"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CurrentTruthFirstTargetSecondSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-7 flex flex-col text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#c5a059]" />
                <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                  DUAL TRUTH &amp; TARGET ARCHITECTURE
                </span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
                Current truth first, target second
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-5 flex flex-col justify-end text-left"
            >
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                A target authority stays blank until accessibility validated. Coexistence is the default assumption, not the fallback.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80 bg-white"
          >
            <div className="relative w-full aspect-[2.1/1]">
              <Image
                src="/migration-shadow-mode/msm2.png"
                alt="Current truth first, target second dual architecture illustration"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (block lg:hidden) - EXACT MATCH TO USER'S MOBILE SCREENSHOT */}
        {/* ========================================================================= */}
        <div className="block lg:hidden flex flex-col text-left">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              SCOPE, SOURCE OF RECORD AND DEPENDENCIES
            </span>
          </div>

          {/* Mobile Title */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08222F] leading-tight mb-3">
            Current truth first, target second
          </h2>

          {/* Mobile Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            A target authority stays blank until it is explicitly validated. Coexistence is the default assumption, not the fallback.
          </p>

          {/* Source Authority Matrix Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white text-[#08222F]">
            {/* Top Bar */}
            <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300">
                SOURCE AUTHORITY MATRIX · SYNTHETIC FIXTURE
              </div>
              <div className="text-slate-500 font-mono tracking-widest text-xs">
                •••
              </div>
            </div>

            {/* Sub-header Banner */}
            <div className="px-4 py-2.5 bg-[#F6F4EE] border-b border-[#E8E2D6] text-[9px] font-mono text-slate-600 font-semibold tracking-wide">
              PER OBJECT &mdash; CURRENT AUTHORITY, INTENDED ZOIKOSUITE ROLE, AND WHETHER A TARGET IS APPROVED
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#EAE4DA] text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-2 px-3">OBJECT</th>
                    <th className="py-2 px-3">CURRENT SOURCE</th>
                    <th className="py-2 px-3">FRESHNESS</th>
                    <th className="py-2 px-3">INTENDED ZOIKOSUITE ROLE</th>
                    <th className="py-2 px-3">DECISION AUTHORITY</th>
                    <th className="py-2 px-3 text-right">DISPOSITION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DA] text-[10px]">
                  {/* Row 1 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Supplier record
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Procurement class
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
                        ■ CURRENT
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Governed workflow
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      ZoikoSuite
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      Phase 5 class
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Payable / invoice
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Finance system class
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
                        ■ CURRENT
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Decision context
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      ZoikoSuite
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      Finance class
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Contract record
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Contract repository class
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-300">
                        ■ DELAYED
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Reference / read
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Legal reviewer
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      Contract class
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Policy &amp; decision record
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      None &mdash; new object
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
                        ■ CURRENT
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-[#0B1E28] font-bold">
                      Authoritative
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      ZoikoSuite
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      ZoikoSuite class
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Evidence manifest
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      None &mdash; new object
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
                        ■ CURRENT
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Evidence
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      All
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      ZoikoSuite class
                    </td>
                  </tr>

                  {/* Row 6 - Highlighted */}
                  <tr className="bg-[#FFFBF2]">
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Tax obligation
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Local spreadsheet
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-rose-50 text-rose-700 border border-rose-300 whitespace-nowrap">
                        ■ STALE &mdash; REPORT OVERDUE
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-400 whitespace-nowrap">
                        ■ REQUIRES VERIFICATION
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-400 italic">
                      Unassigned
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-400 italic">
                      Unapproved
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom 2 Cards Grid */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FBF9F5] border-t border-[#EAE4DA]">
              {/* Card 1: Wave Dependency */}
              <div className="bg-white border border-[#E0D8CC] rounded-xl p-3.5 shadow-sm">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  WAVE DEPENDENCY
                </div>
                <div className="space-y-2 text-[10px] text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full border border-slate-400 mt-1 shrink-0" />
                    <span>
                      <strong>Wave 1:</strong> supplier and payables &middot; depends on finance interface readiness
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full border border-slate-400 mt-1 shrink-0" />
                    <span>
                      <strong>Wave 2:</strong> contract obligations &middot; depends on Wave 1 evidence receipt
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full border border-rose-400 bg-rose-100 mt-1 shrink-0" />
                    <div>
                      <span><strong>Wave 3:</strong> tax obligations</span>
                      <span className="inline-block ml-1.5 px-1 py-0.2 rounded text-[8px] font-mono font-bold bg-rose-50 text-rose-700 border border-rose-300">
                        ▲ BLOCKED BY STALE SOURCE
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full border border-slate-400 mt-1 shrink-0" />
                    <span>
                      <strong>Unknown dependency:</strong> workforce context &middot; requires discovery before sequencing
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Coexistence Rule */}
              <div className="bg-[#FEF9EE] border border-[#E7D6B0] rounded-xl p-3.5 shadow-sm">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6B1C] mb-2">
                  COEXISTENCE RULE
                </div>
                <p className="text-[10px] text-amber-950/80 leading-relaxed font-normal">
                  Only bounded target data is evaluated as ZoikoSuite authoritative, and only for specific objects that are undergoing cutover. Every inherited object keeps its current source and shows a blank target. When source conflict, both values, timestamps and versions are preserved with a review path &mdash; never a silent overwrite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
