"use client";

import React from "react";
import { motion } from "framer-motion";

interface DecisionPacketDetail {
  label: string;
  value: string;
}

const decisionPacketDetails: DecisionPacketDetail[] = [
  { label: "ACTION IDENTIFIER", value: "ACT-081 · EVT-1081" },
  { label: "DECISION OBJECT", value: "UK-Operating subsidiary capital allocation" },
  { label: "GOVERNING JURISDICTION", value: "United Kingdom (London District Court)" },
  { label: "PRIMARY POLICY REGIME", value: "Solvency II · UK FRC corporate governance" },
  { label: "SUBMITTED BY ACTOR", value: "cfo.deputy · corporate treasury" },
  { label: "DELEGATED AUTHORITY REF", value: "Auth-Matrix-V4 · Tier-2 executive limit" },
  { label: "EVIDENCE ATTACHMENT", value: "Ledger hash proof · UK-01 bank confirmation" },
];

interface BriefPoint {
  label: string;
  description: string;
}

const briefPoints: BriefPoint[] = [
  {
    label: "PURPOSE",
    description: "To allocate £1.4M surplus liquidity from operating account to statutory treasury reserve pool in London clearing cluster.",
  },
  {
    label: "IMPACT",
    description: "Direct alignment with minimum liquidity ratio without borrowing from external lines.",
  },
  {
    label: "TIMING",
    description: "Execution window closes within current calendar week to satisfy quarterly capital adequacy inspection by external board.",
  },
  {
    label: "EXPOSURE",
    description: "Zero external foreign exchange exposure; sovereign currency match against primary obligation.",
  },
  {
    label: "POLICY ALIGNMENT",
    description: "Evaluated synchronously against UK banking rules: passed with zero exception or flags.",
  },
  {
    label: "ACCOUNTABLE OWNER",
    description: "Chief Financial Officer (Executive Operator) with secondary sign-off from Corporate Treasurer.",
  },
];

export default function TheBriefAndTheDecisionStaySeparateSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#1E5B80]">
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
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                COMMERCIAL / BOARD SEPARATION AND PROVENANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              The brief and the decision stay separate
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-[#D4E4ED] leading-relaxed">
              An executive brief can summarize. It cannot decide, and it never merges with the record of who did.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Terminal Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Decision Packet Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl border border-[#1c5577] bg-[#0a3149] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#1c5577]">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#93bdd4] uppercase">
                DECISION PACKET · ACT-081 · EVT-1081
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            {/* Inner Content */}
            <div className="p-4 sm:p-5 flex flex-col space-y-3 font-mono text-[11px]">
              {decisionPacketDetails.map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-[#12364c] pb-2 last:border-0 last:pb-0">
                  <span className="text-[9.5px] text-slate-400 font-bold uppercase">{item.label}</span>
                  <span className="text-slate-200 mt-0.5">{item.value}</span>
                </div>
              ))}

              {/* Items of Note Box */}
              <div className="mt-3 pt-3 border-t border-[#1c5577] flex flex-col space-y-2">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase">
                  ITEMS OF NOTE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Audit certified", "Author signature", "Cryptographic seal", "Vetting pass", "Operational exception"].map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[9.5px] font-mono bg-[#072437] border border-[#1c5577] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="rounded-lg border border-rose-900/60 bg-rose-950/40 p-2.5 text-[10.5px] text-rose-300 leading-relaxed">
                  <strong className="text-rose-200">Chain of custody:</strong> Each record links evidence, evidence identifies authority, authority limits choice. Each of the three points to a separate legal or institutional property requiring its own validation.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Brief Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-2xl border border-[#e8d5a8]/60 bg-[#FAF8F5] text-slate-900 overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="bg-[#f2ecdc] px-4 py-3 flex items-center justify-between border-b border-[#e2d5b6]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#854d0e] uppercase">
                  AN EXECUTIVE BRIEF
                </span>
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-semibold bg-white border border-[#d8c599] text-amber-900">
                  WITH SYNTHETICAL EVIDENCE &gt;
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">AUG-2026-0081</span>
            </div>

            {/* Content List */}
            <div className="p-5 sm:p-6 flex flex-col space-y-3.5">
              {briefPoints.map((pt, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                  <span className="font-mono font-bold text-[10px] text-slate-500 w-36 shrink-0 uppercase">
                    {pt.label}:
                  </span>
                  <span className="text-slate-700 leading-relaxed">
                    {pt.description}
                  </span>
                </div>
              ))}

              {/* Bottom Quote Note Box */}
              <div className="mt-4 rounded-xl border border-[#d8c599] bg-[#f8f4e8] p-3.5 text-[11px] text-[#78350F] leading-snug font-sans">
                <strong>Key distinction:</strong> The brief synthesizes for human comprehension, while the decision record contains the exact immutable assertions — if the brief summarizes a parameter erroneously, the underlying decision packet record remains the sole legal and technical source of truth.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Callout Box below grid */}
        <div className="border-l-2 border-[#d4a853] pl-4 sm:pl-5 py-2 mt-8 max-w-4xl">
          <p className="text-xs sm:text-[13px] text-[#D4E4ED] leading-relaxed">
            The brief can synthesize independent records into a single summary. It can flag gaps and highlight areas for review. It cannot write, certify or approve them — every figure it summarizes is directly traceable to the regulatory source. The brief may decrease risk; failure to separate it introduces a separate, actionable hazard.
          </p>
        </div>
      </div>
    </section>
  );
}
