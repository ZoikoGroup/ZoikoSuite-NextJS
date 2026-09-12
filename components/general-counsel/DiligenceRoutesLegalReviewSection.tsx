"use client";

import React from "react";
import { motion } from "framer-motion";

interface DiligenceCard {
  category: string;
  heading?: string;
  items?: string[];
  body?: string;
  badge: { text: string; color: string };
  isAccent?: boolean;
}

const diligenceCards: DiligenceCard[] = [
  {
    category: "CORE AUDIT CAPABILITY",
    heading: "Authority, policy and evidence",
    items: [
      "Governance Platform",
      "Authority and segregation",
      "Jurisdiction Intelligence",
    ],
    badge: {
      text: "● PUBLISHED",
      color: "border-emerald-300 bg-emerald-50 text-emerald-700",
    },
  },
  {
    category: "ARCHITECTURE AND ACCESS",
    items: [
      "Platform Foundation",
      "Deployment options",
      "Data residency integrity",
    ],
    badge: {
      text: "● PUBLISHED",
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
      text: "● HARDENED · NOT CERTIFIED",
      color: "border-amber-300 bg-amber-50 text-amber-800",
    },
  },
  {
    category: "COMMERCIAL INTEGRATIONS (PLANNED)",
    heading: "Not yet published",
    body: "Contract lifecycle and repository integrations are currently in preview; documentation released following customer validation period.",
    badge: {
      text: "● PREVIEW · RESTRICTED ACCESS",
      color: "border-amber-300 bg-amber-50 text-amber-800",
    },
  },
  {
    category: "REGULATORY FILING (PARTNER SCOPE)",
    heading: "Not yet published",
    body: "Direct filing execution remains with client legal teams or qualified external partners. ZoikoSuite models compliance context, not direct external submission.",
    badge: {
      text: "● PREVIEW · NOT IN SCOPE",
      color: "border-amber-300 bg-amber-50 text-amber-800",
    },
  },
  {
    category: "PROFESSIONAL BOUNDARY",
    body: "ZoikoSuite does not provide legal advice, make legal calls, determine privilege, report system conclusions as legal advice, or replace commercial counsel or in-house capability. Qualified licensed lawyers remain responsible for legal review and professional responsibility.",
    badge: {
      text: "● APPLIES TO ALL SIX SITES",
      color: "border-slate-300 bg-slate-100 text-slate-700",
    },
    isAccent: true,
  },
];

export default function DiligenceRoutesLegalReviewSection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12">
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
                TRUST AND PROCUREMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Diligence routes for legal review
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
              Relevant capabilities appear here only when their publication state permits it. Unpublished destinations are omitted rather than linked.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid (3x2) - DESKTOP ONLY */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {diligenceCards.map((card, idx) => (
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

                {card.heading && (
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-2 leading-snug">
                    {card.heading}
                  </h4>
                )}

                {card.items && (
                  <div className="space-y-2 mb-5">
                    {card.items.map((it, itemIdx) => (
                      <p
                        key={itemIdx}
                        className="text-xs sm:text-[13px] text-slate-800 font-medium"
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

        {/* Mobile View: Dedicated 6 Diligence Cards + Operational Routes Box */}
        <div className="block lg:hidden w-full flex flex-col gap-4 text-left">
          {/* Card 1: Core Audit Capability */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                CORE AUDIT CAPABILITY
              </span>
              <h4 className="text-xs font-bold text-slate-900 mb-2">
                Authority, policy and evidence
              </h4>
              <div className="space-y-1.5 text-xs text-slate-800 font-medium">
                <p>Governance Platform</p>
                <p>Authority and segregation</p>
                <p>Jurisdiction Intelligence</p>
              </div>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[8.5px] font-mono font-bold border border-emerald-300 bg-emerald-50 text-emerald-700 tracking-wider uppercase">
                &check; PUBLISHED
              </span>
            </div>
          </div>

          {/* Card 2: Architecture and Systems */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                ARCHITECTURE AND SYSTEMS
              </span>
              <div className="space-y-1.5 text-xs text-slate-800 font-medium mt-2">
                <p>Platform Foundation</p>
                <p>Residency architecture</p>
                <p>Core function and lifecycle</p>
              </div>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[8.5px] font-mono font-bold border border-emerald-300 bg-emerald-50 text-emerald-700 tracking-wider uppercase">
                &check; PUBLISHED
              </span>
            </div>
          </div>

          {/* Card 3: Security and Privacy */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                SECURITY AND PRIVACY
              </span>
              <div className="space-y-1.5 text-xs text-slate-800 font-medium mt-2">
                <p>Security overview</p>
                <p>Data Processing Agreement (DPA) model</p>
                <p>Subprocessors</p>
                <p>Responsible AI</p>
              </div>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[8.5px] font-mono font-bold border border-amber-300 bg-amber-50 text-amber-800 tracking-wider uppercase">
                HARDENED &middot; NOT CERTIFIED
              </span>
            </div>
          </div>

          {/* Card 4: Legal & Commercial Sample */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                LEGAL &amp; COMMERCIAL SAMPLE
              </span>
              <h4 className="text-xs font-bold text-slate-900 mb-1.5">
                Not yet published
              </h4>
              <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                This module destination has no approved public route, so no link is offered. Module scopes can be discussed directly instead.
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[8.5px] font-mono font-bold border border-amber-300 bg-amber-50 text-amber-800 tracking-wider uppercase">
                &darr; MORE (PENDING APPROVAL)
              </span>
            </div>
          </div>

          {/* Card 5: Second Counsel Workflows */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                SECOND COUNSEL WORKFLOWS
              </span>
              <h4 className="text-xs font-bold text-slate-900 mb-1.5">
                Not yet published
              </h4>
              <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                Educational and evaluation material appears here only when the associated published resources exist. None is currently confirmed.
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[8.5px] font-mono font-bold border border-amber-300 bg-amber-50 text-amber-800 tracking-wider uppercase">
                &darr; PENDING PUBLICATION
              </span>
            </div>
          </div>

          {/* Card 6: Professional Boundary */}
          <div className="rounded-2xl border border-[#ECD9BA] bg-[#FAF3E7] p-4 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#c5a059] uppercase block mb-1.5">
                PROFESSIONAL BOUNDARY
              </span>
              <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                ZoikoSuite does not provide legal advice, create legal authority, determine privilege, assert universal jurisdiction coverage or establish admissibility. Qualified counsel remains responsible for legal interpretation and professional responsibility.
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[8.5px] font-mono font-bold border border-slate-300 bg-slate-100 text-slate-700 tracking-wider uppercase">
                &darr; APPLIES TO THIS PAGE
              </span>
            </div>
          </div>

          {/* Bottom Operational Routes Navigation Box */}
          <div className="rounded-2xl border border-slate-200 bg-[#FAF8F5] p-4 text-left shadow-sm mt-2">
            <span className="text-[9px] font-mono font-bold text-[#c5a059] uppercase tracking-wider block mb-1">
              CURRENT &amp; OPERATING:
            </span>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-3">
              Operational routes, no sales push
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Sign in", "Documentation", "Support", "System status"].map((route, rIdx) => (
                <button
                  key={rIdx}
                  className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-[11px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  {route}
                </button>
              ))}
            </div>
          </div>

          {/* Status Last Reviewed Footer Line */}
          <p className="text-[10px] font-mono text-slate-400 pt-1">
            Status last reviewed 11 July 2024.
          </p>
        </div>
      </div>
    </section>
  );
}
