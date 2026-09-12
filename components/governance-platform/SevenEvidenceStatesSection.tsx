"use client";

import React from "react";
import { motion } from "framer-motion";

interface EvidenceStateCard {
  label: string;
  count?: number;
  desc: string;
  statusClass?: string;
  isDarkRule?: boolean;
}

const evidenceCards: EvidenceStateCard[] = [
  {
    label: "RECEIVED",
    count: 6,
    desc: "Items received for the current action.",
    statusClass: "text-[#15803d]",
  },
  {
    label: "VERIFIED",
    count: 4,
    desc: "Proven true by source-verified confirmation.",
    statusClass: "text-[#15803d]",
  },
  {
    label: "MISSING",
    count: 1,
    desc: "Required by the rule set.",
    statusClass: "text-[#b91c1c]",
  },
  {
    label: "UNVERIFIED",
    count: 1,
    desc: "Held by system but not yet verified.",
    statusClass: "text-[#b45309]",
  },
  {
    label: "STALE",
    count: 1,
    desc: "Failed to meet the freshness rule.",
    statusClass: "text-[#b45309]",
  },
  {
    label: "DISPUTED",
    count: 0,
    desc: "Active ongoing dispute on file.",
    statusClass: "text-[#64748b]",
  },
  {
    label: "EXEMPTION ON RECORD",
    count: 1,
    desc: "Under active waiver.",
    statusClass: "text-[#1d4ed8]",
  },
  {
    label: "SEALED",
    desc: "Evidence dossier is sealed after approval and held for audit. Changes create an audit exception with timestamp.",
    isDarkRule: true,
  },
];

const manifestFields = [
  "Manifest ID",
  "Action crypt-hash",
  "Entity / jurisdiction",
  "Sources and versions",
  "Evaluator applied",
  "Approvals",
  "Before / after",
  "Actors",
  "Timestamp",
  "Receipts",
  "Retention state",
];

const prohibitedWords = [
  "Guaranteed",
  "Auditor-approved",
  "Legally compliant",
  "Zero-error rate",
  "Inviolable",
  "Automated Regulatory Acceptance",
];

export default function SevenEvidenceStatesSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid - 100% UNTOUCHED FOR DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                EVIDENCE MANAGEMENT AND AUDIT READINESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Seven evidence states, and
              <br className="hidden sm:inline" />{" "}
              words we will not use
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Evidence health is reported as counts and states. The terminology boundary matters as much as the model.
            </p>
          </div>
        </div>

        {/* 8 Cards Grid: 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-8">
          {evidenceCards.map((card, idx) => {
            if (card.isDarkRule) {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
                  className="col-span-2 sm:col-span-2 lg:col-span-1 rounded-2xl bg-[#08222F] border border-[#1e3847] p-5 text-white flex flex-col justify-between shadow-md"
                >
                  <div>
                    <span className="text-[9.5px] font-mono font-bold tracking-[0.14em] text-[#c5a059] uppercase block mb-1">
                      {card.label}
                    </span>
                    <p className="text-[11.5px] sm:text-xs text-[#9ba4b5] leading-relaxed mt-2">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
                className="rounded-2xl border border-[#e2ddd3] bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9.5px] font-mono font-bold tracking-[0.14em] text-[#64748b] uppercase block mb-1">
                    {card.label}
                  </span>
                  <div className={`text-2xl sm:text-3xl font-bold ${card.statusClass || "text-[#08222F]"} my-1.5`}>
                    {card.count}
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#566573] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY SECTION EXTENSIONS (STRICTLY HIDDEN ON DESKTOP)   */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Evidence Manifest Fields Pills */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
              EVIDENCE MANIFEST FIELDS
            </span>
            <div className="flex flex-wrap gap-2">
              {manifestFields.map((field, fIdx) => (
                <span
                  key={fIdx}
                  className="px-2.5 py-1 rounded border border-sky-200 bg-sky-50/50 text-sky-800 text-[10.5px] font-mono font-medium"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>

          {/* Audit Trail Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
              AUDIT TRAIL
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              A read-only event timeline with filters, preserving the decision and evidence context. Shows every compliance check on action without operational interruptions and without retrospective reconstructed logs.
            </p>
          </div>

          {/* Terms This Platform Does Not Use Box */}
          <div className="rounded-2xl border border-rose-200 bg-[#fff9f9] p-4 sm:p-5 flex flex-col gap-3">
            <span className="text-[10.5px] font-mono font-bold tracking-wider text-rose-900 uppercase">
              TERMS THIS PLATFORM DOES NOT USE
            </span>

            {/* Prohibited strikethrough tags */}
            <div className="flex flex-wrap gap-2">
              {prohibitedWords.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="px-2.5 py-1 rounded border border-rose-200 bg-white text-rose-700 text-xs font-mono line-through"
                >
                  {word}
                </span>
              ))}
            </div>

            {/* What is used instead */}
            <p className="text-[11px] text-slate-700 leading-relaxed border-t border-rose-100 pt-3">
              <strong className="text-slate-900">What is used instead:</strong> Evidence dossiers with provenance packages, audit trail and history, conformance qualifiers (&quot;evaluated and tamper-sealed&quot; and reason codes) and only where a qualified technical capability has been objectively addressed — and no such claim is made on this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
