"use client";

import React from "react";
import { motion } from "framer-motion";

interface DiligenceCard {
  category: string;
  items?: string[];
  body?: string;
  badge: { text: string; color: string };
  isSuppressedBlock?: boolean;
}

const diligenceCards: DiligenceCard[] = [
  {
    category: "FOUNDATION AND AUTHORITY",
    items: [
      "Governance Platform",
      "Authority and Segregation",
      "Jurisdiction Intelligence",
    ],
    badge: {
      text: "▶ PUBLISHED",
      color: "border-emerald-300 bg-emerald-50 text-emerald-700",
    },
  },
  {
    category: "INTEGRATION AND DATA",
    items: [
      "Platform Foundation",
      "Environment Options",
      "Data Residency and Lifecycle",
    ],
    badge: {
      text: "▶ PUBLISHED",
      color: "border-emerald-300 bg-emerald-50 text-emerald-700",
    },
  },
  {
    category: "TRANSITION",
    items: [
      "Migration & Shadow Mode",
      "Shadow-run Operations",
      "Expansion runs shadow instructions in vendor evaluation. Shadow-run Operations run technology language only.",
    ],
    badge: {
      text: "▶ PUBLISHED",
      color: "border-emerald-300 bg-emerald-50 text-emerald-700",
    },
  },
  {
    category: "SECURITY AND PRIVACY",
    items: [
      "Security overview",
      "Data Processing Agreement (DPA) model",
      "Subprocessors",
      "Responsible AI",
    ],
    badge: {
      text: "■ BOUNDARY — NOT CERTIFIED",
      color: "border-amber-300 bg-amber-50 text-amber-800",
    },
  },
  {
    category: "ROLE DESTINATIONS",
    items: [
      "CFOs",
      "General Counsel",
      "Leadership teams",
    ],
    badge: {
      text: "▶ PUBLISHED",
      color: "border-emerald-300 bg-emerald-50 text-emerald-700",
    },
  },
  {
    category: "ADVISORY BOUNDARY",
    body: "ZoikoSuite does not become a legal, tax, accounting, employment, regulatory or M&A advisor. No compliance-certification, regulator acceptance, entity registration, filing service, substance or transaction outcome is promised.",
    badge: {
      text: "■ APPLIES TO ALL SIX PATHWAYS",
      color: "border-slate-300 bg-slate-100 text-slate-700",
    },
    isSuppressedBlock: true,
  },
];

export default function DiligenceRoutesSuppressedProofBlockSection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-14 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12">
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
                TRUST, ARCHITECTURE AND PROCUREMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Diligence routes, and one suppressed proof block
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
              Every protocol show above is illustrative symbolic. Trust, architecture, migration and jurisdiction boundaries are all directly accessible without a form.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {diligenceCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 ${
                card.isSuppressedBlock
                  ? "border border-[#f0d38d] bg-[#FDF6E7]/80"
                  : "border border-slate-200/90 bg-white"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] uppercase block mb-3">
                  {card.category}
                </span>

                {card.items && (
                  <div className="space-y-2 mb-6">
                    {card.items.map((it, itemIdx) => (
                      <p
                        key={itemIdx}
                        className={`text-xs ${
                          it.startsWith("Expansion runs")
                            ? "text-slate-500 font-normal leading-relaxed pt-1 text-[11px]"
                            : "text-slate-800 font-medium"
                        }`}
                      >
                        {it}
                      </p>
                    ))}
                  </div>
                )}

                {card.body && (
                  <p className="text-xs sm:text-[12.5px] text-slate-700 leading-relaxed mb-6 font-normal">
                    {card.body}
                  </p>
                )}
              </div>

              {/* Bottom Badge */}
              <div className="pt-2">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded text-[9.5px] font-mono font-bold border tracking-wider uppercase ${card.badge.color}`}
                >
                  {card.badge.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: No approved proof is published block & Operational routes */}
        <div className="block lg:hidden mt-8 space-y-4">
          {/* Suppressed Proof Callout Banner */}
          <div className="rounded-2xl border border-slate-200/90 bg-[#FAF8F5] p-5 sm:p-6 text-center text-[#08222F] shadow-sm">
            <span className="text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase font-semibold block mb-2">
              SUPPRESSED PROOF · TRUST &amp; PROCUREMENT
            </span>
            <h4 className="text-sm sm:text-base font-bold text-[#08222F] mb-3">
              No approved proof is published for this page
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl mx-auto">
              Fixed enterprise rights, reason, platform, security issues and role studies publish only through the approved Proof Registry, with documented scope and references. Name obscurity/protected entity boundary or third-party proof configuration that disputes a country source approach and could imply coverage declaration replace those disclosures.
            </p>
          </div>

          {/* Operational routes before any CTA */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 text-[#08222F] shadow-sm">
            <span className="text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase font-semibold block mb-1">
              RESOURCE · TRUST REPORT
            </span>
            <h4 className="text-xs font-bold text-[#08222F] mb-3">
              Operational routes, before any CTA
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Sign in", href: "/login" },
                { label: "Documentation", href: "/docs" },
                { label: "Support", href: "/support" },
                { label: "System status", href: "/status" },
                { label: "Release notes", href: "/releases" },
              ].map((route, rIdx) => (
                <a
                  key={rIdx}
                  href={route.href}
                  className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-medium text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors"
                >
                  {route.label}
                </a>
              ))}
            </div>
          </div>

          {/* Revision footer */}
          <div className="pt-2 text-[11px] font-mono text-slate-400">
            Proofs last revised: 21 Jul 2026.
          </div>
        </div>
      </div>
    </section>
  );
}
