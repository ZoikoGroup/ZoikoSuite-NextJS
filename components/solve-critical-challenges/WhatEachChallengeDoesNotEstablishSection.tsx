"use client";

import React from "react";
import { motion } from "framer-motion";

interface BoundaryItem {
  title: string;
  statement: string;
}

const boundaries: BoundaryItem[] = [
  {
    title: "Financial Governance",
    statement: "No accounting conclusion, and no guaranteed release or compliance outcome.",
  },
  {
    title: "Global Payroll Governance",
    statement: "No filing, tax or payroll compliance guarantee.",
  },
  {
    title: "Cross-Border Compliance",
    statement: "No universal jurisdiction coverage, and no legal or tax advice.",
  },
  {
    title: "Contract Governance",
    statement: "No enforceability, privilege, or CLM-completeness guarantee.",
  },
  {
    title: "Audit Readiness",
    statement: "No audit opinion, certification or audit firm acceptance claim.",
  },
  {
    title: "Entity Management",
    statement: "No statutory entity registration or company-secretarial capability unless separately published.",
  },
  {
    title: "Regulatory Reporting",
    statement: "No filing capability or regulator acceptance unless independently verified.",
  },
  {
    title: "Workforce Compliance",
    statement: "No employee surveillance, and no employment-law advice.",
  },
  {
    title: "Revenue Integrity",
    statement: "No revenue recognition conclusion, and no recovery guarantee.",
  },
  {
    title: "Operational Risk Management",
    statement: "No opaque sub-score, and no guarantee that all risk is detected.",
  },
];

export default function WhatEachChallengeDoesNotEstablishSection() {
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
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                <span className="hidden lg:inline">PROFESSIONAL AND SYSTEM BOUNDARIES</span>
                <span className="lg:hidden">PROFESSIONAL AND DOMAIN BOUNDARIES</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              What each challenge does not establish
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
              Each challenge card above carries its own boundary strip. Collected here in full, because those are the statements procurement and legal reviewers check first.
            </p>
          </motion.div>
        </div>

        {/* 10 Boundary Cards Grid (1 col on mobile, 2 cols on md/lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {boundaries.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="relative rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm overflow-hidden text-left"
            >
              {/* Red left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500" />

              <div className="pl-2">
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1 leading-snug">
                  {b.title}
                </h4>
                <p className="text-[11.5px] sm:text-xs text-slate-600 leading-relaxed">
                  {b.statement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amber Callout Box (Across all ten...) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl bg-[#FAF3E7] border border-[#ECD9BA] p-4 flex items-start gap-3 text-left mt-6 sm:mt-8"
        >
          <div className="w-5 h-5 rounded-full border border-[#c5a059] flex items-center justify-center shrink-0 text-[#c5a059] text-[11px] font-bold mt-0.5">
            !
          </div>
          <p className="text-[11.5px] sm:text-xs text-slate-700 leading-relaxed font-normal">
            <strong className="font-semibold text-slate-900">Across all ten,</strong> ZoikoSuite does not provide legal, tax, accounting, audit, employment or regulatory advice, and does not guarantee compliance, certification or any regulated outcomes. Qualified professionals remain responsible for regulated judgment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
