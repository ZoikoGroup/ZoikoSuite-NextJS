"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface VerificationCard {
  eyebrow: string;
  title?: string;
  description?: string;
  links?: { label: string; href: string }[];
  badgeText: string;
  badgeTone: "amber" | "emerald" | "blue" | "warning";
  highlight?: boolean;
}

const cards: VerificationCard[] = [
  {
    eyebrow: "Capability availability",
    title: "Registry-governed",
    description:
      "Route state, publication state, claim state, 'as-of-ref' state and availability qualifier come from the Capability Publication Registry, with a named owner and validation date.",
    badgeText: "ALL TEN ROUTES REQUIRE APPROVAL",
    badgeTone: "amber",
  },
  {
    eyebrow: "Decision architecture",
    title: "How a governed action runs",
    links: [
      { label: "Governed lifecycle", href: "#" },
      { label: "Decision workspace", href: "#" },
      { label: "Closed-loop intelligence", href: "#" },
    ],
    badgeText: "DOCUMENTED",
    badgeTone: "emerald",
  },
  {
    eyebrow: "Evidence and auditability",
    links: [
      { label: "Evidence architecture", href: "#" },
      { label: "Evidence health model", href: "#" },
      { label: "Cross-module maritime", href: "#" },
    ],
    badgeText: "DESIGNED TO SUPPORT REVIEW",
    badgeTone: "blue",
  },
  {
    eyebrow: "Architecture and deployment",
    links: [
      { label: "Deployment options", href: "#" },
      { label: "Integration architecture", href: "#" },
      { label: "Core modules", href: "/core-modules" },
    ],
    badgeText: "AVAILABLE",
    badgeTone: "emerald",
  },
  {
    eyebrow: "Security, privacy and AI",
    links: [
      { label: "Security overview", href: "#" },
      { label: "Data Processing Agreement (PDF 128KB)", href: "#" },
      { label: "Responsible AI", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
    badgeText: "REASONED — NOT CERTIFIED",
    badgeTone: "amber",
  },
  {
    eyebrow: "Professional boundary",
    description:
      "The Governance Platform does not provide legal, tax, accounting, audit or regulatory advice, and does not guarantee compliance, certification, or auditor or regulator acceptance. Qualified professionals remain responsible for regulated judgment.",
    badgeText: "APPLIES TO ALL TEN CAPABILITIES",
    badgeTone: "warning",
    highlight: true,
  },
];

const canonicalPills = [
  "Standardisation",
  "Footprint",
  "System of Record",
  "Acceptable",
];

export default function WhereClaimsVerifiedSection() {
  const getBadgeStyle = (tone: VerificationCard["badgeTone"]) => {
    switch (tone) {
      case "emerald":
        return "bg-emerald-50 text-emerald-800 border-emerald-200/80";
      case "blue":
        return "bg-sky-50 text-sky-800 border-sky-200/80";
      case "warning":
        return "bg-[#FDF2D6] text-amber-900 border-[#E8C882]";
      case "amber":
      default:
        return "bg-amber-50 text-amber-800 border-amber-200/80";
    }
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid - 100% UNTOUCHED FOR DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#854d0e]">
                PAGES AND PROCUREMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Where governance claims are verified
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
              Every mock-up on this page is illustrative and uses fictitious
              data. These are the routes where controls and evidence are
              actually checked.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-shadow hover:shadow-md ${
                card.highlight
                  ? "bg-[#FEF9EE] border border-[#F3DFB5]"
                  : "bg-white border border-slate-200/80 shadow-sm"
              }`}
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#854d0e]">
                  {card.eyebrow}
                </span>

                {card.title && (
                  <h3 className="text-lg font-bold text-[#0f172a] mt-2 mb-2">
                    {card.title}
                  </h3>
                )}

                {card.description && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                    {card.description}
                  </p>
                )}

                {card.links && (
                  <div className="mt-3 flex flex-col gap-2">
                    {card.links.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.href}
                        className="text-xs sm:text-sm font-medium text-slate-700 hover:text-[#854d0e] transition-colors flex items-center gap-1 group w-fit"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#854d0e] transition-colors" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wide border uppercase ${getBadgeStyle(
                    card.badgeTone
                  )}`}
                >
                  <span className="text-[9px]">▶</span>
                  {card.badgeText}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY EXTENSION: CANONICAL REGISTER IDENTIFIER CARD     */}
        {/* (STRICTLY HIDDEN ON DESKTOP)                                  */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden mt-6 flex flex-col">
          <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
              CANONICAL REGISTER IDENTIFIER
            </span>
            <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">
              Operational file runtime, no fork
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Analytical definitions map to operational reality at runtime.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
              {canonicalPills.map((pill, pIdx) => (
                <span
                  key={pIdx}
                  className="px-3 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-700 text-xs font-mono font-medium"
                >
                  {pill}
                </span>
              ))}
            </div>

            <span className="text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-100">
              Version and execution ID: ZS-GP-2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
