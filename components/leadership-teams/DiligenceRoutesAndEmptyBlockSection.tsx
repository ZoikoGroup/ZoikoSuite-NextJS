"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface DiligenceCard {
  category: string;
  title: string;
  items?: string[];
  description?: string;
  buttonText: string;
  buttonHref: string;
  badgeStyle: string;
  isAmber?: boolean;
}

const diligenceCards: DiligenceCard[] = [
  {
    category: "DECISION ARCHITECTURE",
    title: "How the decision packet works",
    items: ["Governance Platform", "Authority and segregation", "Documented lifecycle"],
    buttonText: "SEE DECISION PACKET",
    buttonHref: "/platform-tour",
    badgeStyle: "border-emerald-300 bg-emerald-50 text-emerald-800",
  },
  {
    category: "COORDINATION MAP",
    title: "What connects and who owns it",
    items: ["Platform Foundation", "Deployment options", "Migration & Shadow Mode"],
    buttonText: "SEE ARCHITECTURE",
    buttonHref: "/platform-foundation",
    badgeStyle: "border-emerald-300 bg-emerald-50 text-emerald-800",
  },
  {
    category: "SECURITY AND PRIVACY",
    title: "Security and privacy",
    items: [
      "Security overview",
      "Data Processing Agreement (DPA - Article 28)",
      "Subject requests",
      "Responsible AI",
      "Accessibility",
    ],
    buttonText: "SEE SECURITY & DPA PROVISIONS",
    buttonHref: "/platform-overview",
    badgeStyle: "border-amber-300 bg-amber-50 text-amber-900",
  },
  {
    category: "RESOURCES & PROOF",
    title: "Published resources only",
    description:
      "Customer-case and evaluation material appears here only where an approved published resource exists. None is currently confirmed, so no eventuality allowed rather than a placeholder lien.",
    buttonText: "PUBLISHED RESOURCES ONLY",
    buttonHref: "/platform-overview",
    badgeStyle: "border-amber-300 bg-amber-50 text-amber-900",
  },
  {
    category: "EVIDENCE",
    title: "Evidence",
    items: ["Evidence context model", "Evidence architecture", "Evidence health states"],
    buttonText: "EVIDENCE TO SUPPORT AUDITS",
    buttonHref: "/governance-platform",
    badgeStyle: "border-slate-300 bg-slate-100 text-slate-700",
  },
  {
    category: "PROFESSIONAL BOUNDARY",
    title: "Professional boundary",
    description:
      "No legal, tax, accounting, audit, employment or regulatory advice is provided, and no surveillance, certification or regulated outcome is guaranteed. Availability, coverage and integrations depend on approved scope and configuration.",
    buttonText: "APPLIES TO THIS PAGE",
    buttonHref: "/not-an-erp",
    badgeStyle: "border-amber-300 bg-[#FFF9EB] text-amber-900",
    isAmber: true,
  },
];

export default function DiligenceRoutesAndEmptyBlockSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
                TRUST, TRANSPARENCY AND RESOURCES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Diligence routes, and one deliberately empty block
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
              Every provision above is synthetic. These are the routes where the claims get verified.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid (3x2 on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {diligenceCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all ${
                card.isAmber
                  ? "border border-amber-200 bg-[#FFFDF5] shadow-xs"
                  : "border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300"
              }`}
            >
              <div>
                <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                  {card.category}
                </span>
                <h3 className="text-base font-bold text-[#08222F] mb-3">
                  {card.title}
                </h3>
                {card.items && (
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                    {card.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-[#C5A059] font-bold">―</span>
                        <span className="leading-snug">{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {card.description && (
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                )}
              </div>

              <Link
                href={card.buttonHref}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-bold border transition-colors w-fit ${card.badgeStyle}`}
              >
                <span>{card.buttonText}</span>
                <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Deliberately Empty Block Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-8 mb-6 flex flex-col space-y-2.5"
        >
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            DILIGENCE ROUTES — ROLE PERSPECTIVES
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            No approved customer proofs published for this page
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-4xl">
            Named customers, outcomes, metrics and quotes appear only with documented permission covering the identity, the problem, the scope, the outcome, the measurement method and the period. Without that approval, this entry remains deliberately blank and filled with unsourced corporate hype.
          </p>
        </motion.div>

        {/* Operational Routes (No sales wall) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs"
        >
          <div className="flex flex-col space-y-1">
            <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              DIRECT ACCESS / NO SALES WALL
            </span>
            <h4 className="text-base font-bold text-slate-900">
              Operational routes, no demo required
            </h4>
            <p className="text-xs text-slate-500">
              Reachable without a form
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {["Sign-in", "Documentation", "Support", "System status"].map((btn, bIdx) => (
              <Link
                key={bIdx}
                href="/platform-overview"
                className="px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs shadow-2xs transition-colors"
              >
                {btn}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Page Release Footer Note */}
        <div className="mt-8 text-center text-[10.5px] font-mono text-slate-400">
          Release v2.8 · November 2026 · UK / EU / APAC
        </div>
      </div>
    </section>
  );
}
