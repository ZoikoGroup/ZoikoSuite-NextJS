"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ObligationRow {
  item: string;
  refDoc: string;
  jurisdiction: string;
  isJurisdictionSpecial?: boolean;
  authority: string;
  statusBadge: {
    text: string;
    color: string;
  };
  shared: string;
}

const obligationRows: ObligationRow[] = [
  {
    item: "Remittance change notice",
    refDoc: "CTR-2024-1007",
    jurisdiction: "United Kingdom",
    authority: "CTR-AUTH-004 · In Legal Review",
    statusBadge: {
      text: "IN LEGAL REVIEW (TRIGGER DETECTED)",
      color: "border-amber-400 bg-amber-50 text-amber-800",
    },
    shared: "Yes",
  },
  {
    item: "Data processing policy review",
    refDoc: "CTR-2024-2101",
    jurisdiction: "Singapore",
    authority: "Local statute v2",
    statusBadge: {
      text: "IN REVIEW (DUE 22-OCTOBER)",
      color: "border-slate-300 bg-slate-100 text-slate-700",
    },
    shared: "No (internal)",
  },
  {
    item: "Sanction change screening",
    refDoc: "ACTIVE-2024-03",
    jurisdiction: "EU-FINMA",
    authority: "Compliance check scheduled",
    statusBadge: {
      text: "REVIEW DUE (CHANGE NOT DETECTED)",
      color: "border-sky-400 bg-sky-50 text-sky-800",
    },
    shared: "Yes (external)",
  },
  {
    item: "Remit authorization",
    refDoc: "CTR-2024-001",
    jurisdiction: "United Kingdom",
    authority: "CTR-AUTH-BOARD-RES",
    statusBadge: {
      text: "✔ CONFIRMED",
      color: "border-emerald-400 bg-emerald-50 text-emerald-800",
    },
    shared: "Yes",
  },
  {
    item: "Cross-border currency check",
    refDoc: "Global",
    jurisdiction: "NO DOC RECORDED",
    isJurisdictionSpecial: true,
    authority: "No approved record",
    statusBadge: {
      text: "UNAPPROVED — NO GOVERNING SOURCE",
      color: "border-rose-400 bg-rose-50 text-rose-800",
    },
    shared: "—",
  },
];

export default function CoverageNeverTravelsWithoutSourceSection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                OBLIGATIONS REGISTER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Coverage never travels without its source and reviewer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end text-left"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Stale, partial, unsupported and unreviewed states remain visible. None silently becomes &ldquo;clear.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Visual Graphic Banner (gc7.png) - DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80 bg-white"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[2.1/1]">
            <Image
              src="/general-counsel/gc7.png"
              alt="Coverage never travels without its source and reviewer status cards"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1240px) 100vw, 1240px"
              priority
            />
          </div>
        </motion.div>

        {/* Mobile View: High-Fidelity Obligations Register Terminal Table & Boundary Callout */}
        <div className="block lg:hidden w-full flex flex-col gap-4 text-left">
          {/* Main Register Terminal Card */}
          <div className="w-full rounded-2xl border border-slate-700/80 bg-white text-slate-900 shadow-xl overflow-hidden">
            {/* Top Bar Header */}
            <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
                OBLIGATION AND JURISDICTION REGISTER &middot; ALL EVALUATED INFO
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Sub-bar Filter Status */}
            <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
              <span className="text-[9.5px] font-mono font-semibold text-slate-600 uppercase tracking-wider">
                5 OF 5 LIVE EVALUATED &middot; CONTEXTS, JURISDICTIONS AND MATTERS
              </span>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[580px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/70 text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-2.5 px-3">ITEM / STATUS</th>
                    <th className="py-2.5 px-3">REF DOC</th>
                    <th className="py-2.5 px-3">JURISDICTION</th>
                    <th className="py-2.5 px-3">AUTHORITY</th>
                    <th className="py-2.5 px-3">STATUS</th>
                    <th className="py-2.5 px-3">SHARED</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {obligationRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-3 font-semibold text-slate-900 text-[11px] whitespace-nowrap align-top">
                        {row.item}
                      </td>
                      <td className="py-3 px-3 font-mono text-slate-600 text-[10.5px] whitespace-nowrap align-top">
                        {row.refDoc}
                      </td>
                      <td className="py-3 px-3 text-[11px] whitespace-nowrap align-top">
                        {row.isJurisdictionSpecial ? (
                          <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border border-rose-300 bg-rose-50 text-rose-800">
                            {row.jurisdiction}
                          </span>
                        ) : (
                          <span className="text-slate-700">{row.jurisdiction}</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-[10.5px] font-mono text-slate-600 whitespace-nowrap align-top">
                        {row.authority}
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap align-top">
                        <span
                          className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider border inline-block ${row.statusBadge.color}`}
                        >
                          {row.statusBadge.text}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[11px] text-slate-600 whitespace-nowrap align-top">
                        {row.shared}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Terminal Card Footer Caption */}
            <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 text-left">
              <p className="text-[10px] font-mono text-slate-500 leading-relaxed">
                Row &ldquo;Cross-border currency check&rdquo; is held from execution because no authoritative source document is connected. The interface makes this visible, rather than silently substituting default behavior.
              </p>
            </div>
          </div>

          {/* Amber Jurisdictional Coverage Callout Box */}
          <div className="rounded-xl border border-[#ECD9BA] bg-[#FAF3E7] p-4 text-left shadow-sm flex items-start gap-2.5">
            <svg
              className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal">
              <strong className="font-semibold text-slate-900">Jurisdictional coverage claim:</strong>{" "}
              Jurisdictional coverage describes configured sources and their currency. It is not legal advice and does not determine jurisdictional outcomes as law. Qualified named counsel is responsible for legal interpretation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
