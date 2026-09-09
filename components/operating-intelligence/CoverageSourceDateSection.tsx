"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface ObligationRow {
  obligation: string;
  entity: string;
  jurisdiction: string;
  source: string;
  sourceReviewed: string;
  isStale?: boolean;
  period: string;
  due: string;
  owner: string;
  status: string;
  badgeClass: string;
}

const obligationRows: ObligationRow[] = [
  {
    obligation: "Form 941 quarterly return",
    entity: "Zoiko Inc",
    jurisdiction: "United States",
    source: "Federal register",
    sourceReviewed: "10 Jul 2024",
    period: "Q2 2024",
    due: "31 Jul",
    owner: "J. Reyes",
    status: "• CONFIRMED",
    badgeClass: "border-emerald-300 text-emerald-700 bg-emerald-50",
  },
  {
    obligation: "P11D/P60 statement submission",
    entity: "Zoiko UK Ltd",
    jurisdiction: "United Kingdom",
    source: "HMRC rulebook v8",
    sourceReviewed: "01 Jul 2024",
    period: "Aug 2024",
    due: "05 Aug",
    owner: "A. Whitfield",
    status: "• DUE",
    badgeClass: "border-amber-300 text-amber-800 bg-amber-50",
  },
  {
    obligation: "VAT return",
    entity: "Zoiko GmbH",
    jurisdiction: "Germany",
    source: "Statutory rulebook v3",
    sourceReviewed: "04 Jul 2024",
    period: "Aug 2024",
    due: "10 Aug",
    owner: "S. Marchetti",
    status: "• WAITING ON FILING",
    badgeClass: "border-amber-300 text-amber-800 bg-amber-50",
  },
  {
    obligation: "Corporation tax preliminary",
    entity: "Zoiko Ireland DAG",
    jurisdiction: "Ireland",
    source: "Revenue rulebook v5",
    sourceReviewed: "28 Jun 2024",
    period: "FY24",
    due: "23 Aug",
    owner: "R. Osei",
    status: "• CONFIRMED",
    badgeClass: "border-blue-300 text-blue-700 bg-blue-50",
  },
  {
    obligation: "GST F5 return",
    entity: "Zoiko Pte Ltd",
    jurisdiction: "Singapore",
    source: "IRAS rulebook v2",
    sourceReviewed: "01 Jul 2024",
    period: "Q2 2024",
    due: "28 Aug",
    owner: "L. Tan",
    status: "• REVIEW REQUIRED",
    badgeClass: "border-slate-300 text-slate-700 bg-slate-50",
  },
  {
    obligation: "TDS monthly deposit",
    entity: "Zoiko India Pvt",
    jurisdiction: "India",
    source: "Customer + advisor input",
    sourceReviewed: "Stale · 14 Feb 2024",
    isStale: true,
    period: "Aug 2024",
    due: "10 Aug",
    owner: "Unassigned",
    status: "• CRITICAL",
    badgeClass: "border-rose-300 text-rose-700 bg-rose-50",
  },
  {
    obligation: "Statutory filing",
    entity: "—",
    jurisdiction: "Brazil",
    source: "—",
    sourceReviewed: "—",
    period: "—",
    due: "—",
    owner: "—",
    status: "—",
    badgeClass: "text-slate-400 border-transparent",
  },
];

export default function CoverageSourceDateSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 lg:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 lg:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                OBLIGATIONS AND JURISDICTION INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Coverage, source date and
              <br className="hidden sm:inline" />
              review requirement always
              <br className="hidden sm:inline" />
              travel together
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              A map or country list alone is never evidence of current product or
              legal coverage, so this page does not present one.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP VIEW: Full-width 3D Graphic Container (pi4.png)       */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#e2e8f0] bg-[#f8fafc] shadow-lg"
        >
          <Image
            src="/operating-intelligence/pi4.png"
            alt="Territorial and jurisdiction coverage illustration"
            width={1240}
            height={640}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE VIEW: Interactive Obligation Register Terminal & Alert */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-2xl overflow-hidden border border-[#1c4055] bg-white shadow-xl flex flex-col"
          >
            {/* Dark Top Terminal Bar */}
            <div className="bg-[#0B1E2B] px-4 py-3 flex items-center justify-between text-white">
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
                OBLIGATION REGISTER · WITH COVERAGE AND PROFESSIONAL REVIEW
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
              </div>
            </div>

            {/* Coverage Legend Badges */}
            <div className="p-3.5 sm:p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex flex-wrap items-center gap-1.5 text-[9px] sm:text-[10px] font-mono">
              <span className="text-[#64748b] mr-1 font-sans">Coverage:</span>
              <span className="px-2 py-0.5 rounded border border-emerald-300 text-emerald-700 bg-emerald-50 font-bold">
                • COVERED
              </span>
              <span className="px-2 py-0.5 rounded border border-blue-300 text-blue-700 bg-blue-50 font-bold">
                • PARTIAL
              </span>
              <span className="px-2 py-0.5 rounded border border-amber-300 text-amber-800 bg-amber-50 font-bold">
                • REVIEW REQUIRED
              </span>
              <span className="px-2 py-0.5 rounded border border-amber-300 text-amber-800 bg-amber-50 font-bold">
                • SOURCE STALE
              </span>
              <span className="px-2 py-0.5 rounded border border-slate-300 text-slate-700 bg-white font-bold">
                • CONFIGURATION REQUIRED
              </span>
              <span className="px-2 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 font-bold">
                • NOT AVAILABLE
              </span>
            </div>

            {/* Obligations Table */}
            <div className="p-3 sm:p-4">
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-2">
                OBLIGATIONS IN SCOPE — TWELVE ROLES PER MONTH
              </span>

              <div className="overflow-x-auto border border-[#e2e8f0] rounded-lg">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[9px] font-mono text-[#64748b] uppercase whitespace-nowrap">
                      <th className="py-2.5 px-3 font-semibold">OBLIGATION</th>
                      <th className="py-2.5 px-2.5 font-semibold">ENTITY</th>
                      <th className="py-2.5 px-2.5 font-semibold">JURISDICTION</th>
                      <th className="py-2.5 px-2.5 font-semibold">SOURCE</th>
                      <th className="py-2.5 px-2.5 font-semibold">SOURCE REVIEWED</th>
                      <th className="py-2.5 px-2 font-semibold">PERIOD</th>
                      <th className="py-2.5 px-2 font-semibold">DUE</th>
                      <th className="py-2.5 px-2 font-semibold">OWNER</th>
                      <th className="py-2.5 px-3 font-semibold text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#edf2f7] text-[11px]">
                    {obligationRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#f8fafc] transition-colors whitespace-nowrap font-sans"
                      >
                        <td className="py-2.5 px-3 font-bold text-[#08222F]">
                          {row.obligation}
                        </td>
                        <td className="py-2.5 px-2.5 text-[#475569]">{row.entity}</td>
                        <td className="py-2.5 px-2.5 text-[#475569] font-medium">
                          {row.jurisdiction}
                        </td>
                        <td className="py-2.5 px-2.5 text-[#64748b] text-[10px]">
                          {row.source}
                        </td>
                        <td className="py-2.5 px-2.5 text-[10px] font-mono">
                          {row.isStale ? (
                            <span className="text-amber-700 font-semibold bg-amber-50 px-1 py-0.5 rounded border border-amber-200">
                              {row.sourceReviewed}
                            </span>
                          ) : (
                            <span className="text-[#64748b]">{row.sourceReviewed}</span>
                          )}
                        </td>
                        <td className="py-2.5 px-2 font-mono text-[#64748b]">{row.period}</td>
                        <td className="py-2.5 px-2 font-mono font-semibold text-[#08222F]">
                          {row.due}
                        </td>
                        <td className="py-2.5 px-2 text-[#475569]">{row.owner}</td>
                        <td className="py-2.5 px-3 text-right">
                          {row.status !== "—" ? (
                            <span
                              className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase border ${row.badgeClass}`}
                            >
                              {row.status}
                            </span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footnote */}
              <p className="mt-3 text-[10px] font-mono text-[#64748b] leading-relaxed">
                The table row carries a state (source date, an acknowledged owner and a
                professional-review requirement) simultaneously — not cumulative: it
                asserts what the calendar rule exists to serve validly.
              </p>
            </div>
          </motion.div>

          {/* Alert / Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-xl border border-[#e6d6b0] bg-[#fdfaf3] p-4 sm:p-5 flex items-start gap-3 shadow-2xs"
          >
            <div className="w-5 h-5 rounded-full border border-amber-400 bg-amber-100 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
              <AlertTriangle className="w-3 h-3" />
            </div>
            <p className="text-xs text-[#5c4a1e] leading-relaxed">
              <span className="font-bold text-[#3b2e0f]">Jurisdiction safety rule.</span>{" "}
              Coverage state, source-review date and professional-review requirement
              appear together on every obligation. Coverage describes software configuration,
              not legal or tax advice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
