"use client";

import React from "react";
import { motion } from "framer-motion";

interface VerificationCard {
  category: string;
  items?: string[];
  body?: string;
  badge: { text: string; color: string };
  isAccent?: boolean;
}

const verificationCards: VerificationCard[] = [
  {
    category: "GOVERNANCE FOUNDATION",
    items: [
      "Governance Platform",
      "Authority and Segregation",
      "Evidence and Audit Readiness",
    ],
    badge: {
      text: "● PUBLISHED",
      color: "border-emerald-300 bg-emerald-50 text-emerald-700",
    },
  },
  {
    category: "ARCHITECTURE AND DATA",
    items: [
      "Platform Foundation",
      "Deployment options",
      "Core modules",
    ],
    badge: {
      text: "● PUBLISHED",
      color: "border-emerald-300 bg-emerald-50 text-emerald-700",
    },
  },
  {
    category: "RELATED SOLUTIONS",
    items: [
      "Expansion",
      "Resources Operations",
      "Regulatory Timeline Mode",
    ],
    badge: {
      text: "● PUBLIC DEMO",
      color: "border-teal-300 bg-teal-50 text-teal-700",
    },
  },
  {
    category: "ROLE ORIENTATIONS",
    items: [
      "CFOs",
      "General Counsel",
      "Leadership teams",
    ],
    badge: {
      text: "● PUBLIC DEMO",
      color: "border-teal-300 bg-teal-50 text-teal-700",
    },
  },
  {
    category: "SECURITY AND PRIVACY",
    items: [
      "Security overview",
      "Data Processing Agreement (DPA)",
      "Subprocessors",
      "Responsible AI",
    ],
    badge: {
      text: "● HARDENED · NOT CERTIFIED",
      color: "border-amber-300 bg-amber-50 text-amber-800",
    },
  },
  {
    category: "SYSTEM BOUNDARY",
    body: "\"Solve\" means governed evaluation and operating support, not a guaranteed outcome or professional conclusion. Capability, coverage and integration depend on approved architecture, availability and readiness.",
    badge: {
      text: "● APPLIES TO ALL TEN CHALLENGES",
      color: "border-slate-300 bg-slate-100 text-slate-700",
    },
    isAccent: true,
  },
];

export default function WhereChallengeClaimsGetVerifiedSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
                TRUST AND PROCUREMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Where challenge claims get verified
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Every product view above is illustrative synthetic. These destinations own the underlying mechanisms.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid (2 cols on mobile/tablet, 3 cols on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {verificationCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 text-left ${
                card.isAccent
                  ? "border border-[#ECD9BA] bg-[#FAF3E7]"
                  : "border border-slate-200/90 bg-white"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-3">
                  {card.category}
                </span>

                {card.items && (
                  <div className="space-y-2 mb-5">
                    {card.items.map((it, itemIdx) => (
                      <p
                        key={itemIdx}
                        className="text-xs sm:text-[13px] text-slate-800 font-semibold"
                      >
                        {it}
                      </p>
                    ))}
                  </div>
                )}

                {card.body && (
                  <p className="text-xs sm:text-[12px] text-slate-700 leading-relaxed mb-5 font-normal">
                    {card.body}
                  </p>
                )}
              </div>

              {/* Bottom Badge */}
              <div className="pt-2">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded text-[9px] font-mono font-bold border tracking-wider uppercase ${card.badge.color}`}
                >
                  {card.badge.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-Only Direct Destinations Box (Strictly hidden on lg) */}
        <div className="block lg:hidden mt-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-3 text-left shadow-sm">
            <div>
              <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                DIRECT DESTINATIONS
              </span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mt-0.5">
                Operational routes, before any CTA
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["Sign in", "Documentation", "Support", "System status"].map((route, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-[11px] font-medium"
                >
                  {route}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[10px] font-mono text-slate-400 mt-2 text-left">
            Production front runtime UI is SSL/TLS.
          </p>
        </div>
      </div>
    </section>
  );
}
