"use client";

import React from "react";
import { motion } from "framer-motion";
import MobileDiligenceRoutesView from "./MobileDiligenceRoutesView";

interface DiligenceCard {
  category?: string;
  title?: string;
  items?: string[];
  body?: string;
  badge: { text: string; color: string };
  isHighlight?: boolean;
}

const diligenceCards: DiligenceCard[] = [
  {
    category: "TECHNICAL / FINANCIAL STACK MATURITY",
    items: [
      "Multi-Entity ERP Migration",
      "Authoritative Ledger Integration",
      "Treasury & Banking Direct Feed",
    ],
    badge: { text: "DILIGENCE ROUTE 01", color: "border-emerald-200 bg-emerald-50 text-emerald-700" },
  },
  {
    category: "ORGANIZATIONAL DELEGATION MATRIX",
    items: [
      "Statutory Entity Separation",
      "Dual-Signoff Thresholds & Roles",
      "Policy Exception Workflows",
    ],
    badge: { text: "DILIGENCE ROUTE 02", color: "border-emerald-200 bg-emerald-50 text-emerald-700" },
  },
  {
    category: "AUDIT TRACEABILITY & CONTROLS",
    items: [
      "Continuous Close Readiness",
      "Cryptographic Evidence Pack Generation",
      "Exception Auditing & Retention",
      "Regulator Console Access",
    ],
    badge: { text: "DILIGENCE ROUTE 03", color: "border-amber-200 bg-amber-50 text-amber-700" },
  },
  {
    title: "Demonstrated evidence",
    body: "Real-world implementations demonstrate continuous close verification, zero unexplained variances during statutory audit, and immediate detection of unauthorized changes or stale data.",
    badge: { text: "VERIFIABLE AUDIT PROOF", color: "border-sky-200 bg-sky-50 text-sky-700" },
    isHighlight: true,
  },
  {
    category: "POLICY DESIGN",
    items: [
      "Zero Default ROI Assertion",
      "Risk-Weighted Evaluation Matrix",
      "Defensible Business Case Model",
    ],
    badge: { text: "INDEPENDENT AUDIT TRAIL", color: "border-slate-200 bg-slate-100 text-slate-700" },
  },
  {
    body: "No synthetic ROI claims are fabricated; all return assertions must be derived from reduced restatement risk, eliminated manual audit rework, and provable balance accuracy across entities.",
    badge: { text: "ASSUMPTION-FREE ROI MODEL", color: "border-indigo-200 bg-indigo-50 text-indigo-700" },
    isHighlight: true,
  },
];

export default function DiligenceRoutesBusinessCaseSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                RISK, PREPAREDNESS AND ECONOMIC BASIS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Diligence routes, and a business case with no default ROI
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
              Assumptions stay visibly separate from evidence, and no saving, ROI or virtue deduction is asserted.
            </p>
          </motion.div>
        </div>

        {/* Desktop View: 6 Cards Grid (strictly hidden on mobile, visible on lg) */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {diligenceCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all ${
                card.isHighlight
                  ? "border-[#D0AA55]/50 bg-gradient-to-br from-white to-[#FAF6EE] shadow-md shadow-amber-900/5"
                  : "border-slate-200/80 bg-white shadow-md shadow-slate-200/40"
              }`}
            >
              <div>
                {card.category && (
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                    {card.category}
                  </div>
                )}
                {card.title && (
                  <h3 className="text-base sm:text-lg font-bold text-[#08222F] tracking-tight mb-3">
                    {card.title}
                  </h3>
                )}
                {card.items && (
                  <ul className="space-y-2 mb-6">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs sm:text-[13px] text-slate-700 flex items-start gap-2">
                        <span className="text-[#c5a059] mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {card.body && (
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                    {card.body}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-start">
                <span
                  className={`inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${card.badge.color}`}
                >
                  {card.badge.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Risk-Clearance Matrix, 6 Cards, Doc Pills & Link (strictly visible on mobile, hidden on lg desktop) */}
        <div className="block lg:hidden w-full">
          <MobileDiligenceRoutesView />
        </div>
      </div>
    </section>
  );
}
