"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CoverageLegendItem {
  label: string;
  dotColor: string;
}

const legendItems: CoverageLegendItem[] = [
  { label: "Operated", dotColor: "bg-emerald-500" },
  { label: "Partial", dotColor: "bg-sky-500" },
  { label: "Scope required", dotColor: "bg-amber-500" },
  { label: "Quorum state", dotColor: "bg-orange-500" },
  { label: "Configuration required", dotColor: "bg-purple-500" },
  { label: "Grandfathered", dotColor: "bg-rose-500" },
  { label: "Not released", dotColor: "bg-slate-400" },
];

interface MobileJurisdictionRow {
  jurisdiction: string;
  status: string;
  statusType: "operated" | "partial" | "scope" | "config" | "not_released";
  parentAuthority: string;
  tenantIsolation: string;
  retention: string;
  lastReview: string;
  nextReview: string;
  isHighlighted?: boolean;
}

const jurisdictionRows: MobileJurisdictionRow[] = [
  {
    jurisdiction: "United Kingdom",
    status: "OPERATED",
    statusType: "operated",
    parentAuthority: "Commercial and regulatory",
    tenantIsolation: "V1",
    retention: "Per-policy",
    lastReview: "01 Jul 2024",
    nextReview: "Jan 25",
  },
  {
    jurisdiction: "Germany",
    status: "OPERATED",
    statusType: "operated",
    parentAuthority: "Consumer / labour",
    tenantIsolation: "V1",
    retention: "Euro-policy",
    lastReview: "01 Jul 2024",
    nextReview: "Feb 25",
  },
  {
    jurisdiction: "Singapore",
    status: "PARTIAL WITH QUALIFIERS",
    statusType: "partial",
    parentAuthority: "Cross-border",
    tenantIsolation: "V2",
    retention: "Per-policy",
    lastReview: "01 Jul 2024",
    nextReview: "Dec 24",
    isHighlighted: true,
  },
  {
    jurisdiction: "India",
    status: "UNDER REVIEW",
    statusType: "scope",
    parentAuthority: "Sub-continent",
    tenantIsolation: "V2",
    retention: "Per-policy",
    lastReview: "24 Sep 2024",
    nextReview: "Pending",
  },
  {
    jurisdiction: "Brazil",
    status: "NOT RELEASED",
    statusType: "not_released",
    parentAuthority: "—",
    tenantIsolation: "—",
    retention: "—",
    lastReview: "—",
    nextReview: "—",
  },
];

export default function SourceFirstCoverageStatesSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                MULTI-JURISDICTION OPERATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Source-first, with seven coverage states
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A map orients. The table is the authority. Office or customer
              locations can never establish service, jurisdiction or data
              coverage.
            </p>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY 3D VISUAL (pf4.png) - PRESERVED 100% UNTOUCHED   */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-white p-2 sm:p-4 items-center justify-center"
        >
          <Image
            src="/platform-foundation/pf4.png"
            alt="Multi-jurisdiction operations source-first coverage states illustration"
            width={1240}
            height={680}
            priority
            className="w-full h-auto object-contain rounded-xl block"
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY EXTENSIONS (STRICTLY HIDDEN ON DESKTOP VIA lg:hidden) */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-5">
          {/* Legend Pills */}
          <div className="flex flex-wrap gap-2">
            {legendItems.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                {item.label}
              </span>
            ))}
          </div>

          {/* Mobile Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Terminal Top Bar */}
            <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[9.5px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
                JURISDICTION REGISTER · MAP · SMT-744-004
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Inner White Table Container */}
            <div className="bg-white text-slate-900 p-3.5 sm:p-4 flex flex-col">
              <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                REGISTER RECORDS: JURISDICTION REALMS, ORDERS, AND RELEASE STATES
              </span>

              <div className="overflow-x-auto -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[580px] text-left border-collapse text-[10.5px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                      <th className="py-2 pr-2 font-semibold">JURISDICTION</th>
                      <th className="py-2 px-2 font-semibold">COVERAGE</th>
                      <th className="py-2 px-2 font-semibold">PARENT AUTHORITY</th>
                      <th className="py-2 px-2 font-semibold">TENANT ISOLATION</th>
                      <th className="py-2 px-2 font-semibold">RETENTION</th>
                      <th className="py-2 px-2 font-semibold">LAST REVIEW</th>
                      <th className="py-2 pl-2 font-semibold">NEXT REVIEW</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {jurisdictionRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={row.isHighlighted ? "bg-[#FFF9EB]" : "hover:bg-slate-50"}
                      >
                        <td className="py-2 pr-2 font-semibold text-slate-900 whitespace-nowrap font-sans">
                          {row.jurisdiction}
                        </td>
                        <td className="py-2 px-2 whitespace-nowrap">
                          {row.statusType === "operated" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                              ● OPERATED
                            </span>
                          )}
                          {row.statusType === "partial" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-sky-50 text-sky-800 border border-sky-200 font-semibold">
                              ● PARTIAL WITH QUALIFIERS
                            </span>
                          )}
                          {row.statusType === "scope" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                              ● UNDER REVIEW
                            </span>
                          )}
                          {row.statusType === "not_released" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                              ● NOT RELEASED
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">
                          {row.parentAuthority}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">{row.tenantIsolation}</td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">{row.retention}</td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">{row.lastReview}</td>
                        <td className="py-2 pl-2 text-slate-600 whitespace-nowrap">{row.nextReview}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Yellow Alert Box */}
              <div className="mt-3 rounded-lg border border-[#F6D896] bg-[#FFF8E7] p-3 flex items-start gap-2 text-[11px] text-[#78350F] leading-snug">
                <span className="text-[#D97706] font-bold mt-0.5">⚠️</span>
                <span>
                  <strong className="font-semibold">Uncertainties and shared boundaries stay visible:</strong> A production tenant never inherits cross-jurisdiction parameters automatically. Each tenant holds separate registration context; multi-tenant environments operate under strict isolation without cross-boundary contamination.
                </span>
              </div>

              {/* Footnote */}
              <p className="text-[9.5px] font-mono text-slate-400 pt-2 leading-snug">
                Coverage status classifies: operated / supported / registered · service isolation · tenancy · sovereign residency parameters, audit admissibility conditions, key owners, legal boundaries, transmission or compliance barriers for customer or ZoikoSuite.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
