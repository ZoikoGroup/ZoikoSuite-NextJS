"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const adoptionCards = [
  {
    category: "Adaptation",
    title: "ZoikoSchema layer",
    description:
      "Map external finance, payroll, HR, contract, and compliance data into a governed canonical structure.",
    cardBg: "bg-white",
    cardBorder: "border-[#DBE3E8]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#64748b]",
    categoryColor: "text-[#c5a059]",
  },
  {
    category: "Connectivity",
    title: "API & event integration",
    description:
      "Versioned APIs, webhooks and events, provenance, idempotency, and governed external actions.",
    cardBg: "bg-white",
    cardBorder: "border-[#DBE3E8]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#64748b]",
    categoryColor: "text-[#c5a059]",
  },
  {
    category: "Parallel run",
    title: "Shadow Ledger",
    description:
      "Run finance in parallel and compare postings, balances, exceptions, and control evidence before cutover.",
    cardBg: "bg-[#0F476A]",
    cardBorder: "border-[#0F476A]",
    textColor: "text-white",
    descColor: "text-[#cbd5e1]",
    categoryColor: "text-[#D0AA55]",
  },
  {
    category: "Parallel run",
    title: "Shadow Payroll",
    description:
      "Compare gross-to-net calculations, deductions, taxes, and exceptions against the incumbent system.",
    cardBg: "bg-[#F6EDD9]",
    cardBorder: "border-[#E8D6AC]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#475569]",
    categoryColor: "text-[#9c6b12]",
  },
  {
    category: "Assurance",
    title: "Migration integrity",
    description:
      "Validate completeness, referential integrity, balances, historical lineage, and rejected records.",
    cardBg: "bg-white",
    cardBorder: "border-[#DBE3E8]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#64748b]",
    categoryColor: "text-[#c5a059]",
  },
  {
    category: "Sequence",
    title: "Progressive replacement",
    description:
      "Start as a governance layer, coexist with selected systems, consolidate over time, or replace where justified.",
    cardBg: "bg-white",
    cardBorder: "border-[#DBE3E8]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#64748b]",
    categoryColor: "text-[#c5a059]",
  },
] as const;

export default function AdoptWithoutBigBangRisk() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-3xl">
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                Integration · Migration · Shadow Mode
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Adopt without a big-bang risk
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[420px]">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              The enterprise objection this section answers: how do we get there
              from here?
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {adoptionCards.map((card, index) => (
            <div
              key={index}
              className={`${card.cardBg} border ${card.cardBorder} rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200`}
            >
              <div>
                {/* Category tag */}
                <span
                  className={`text-[11px] font-medium tracking-[0.15em] uppercase block mb-3 ${card.categoryColor}`}
                >
                  {card.category}
                </span>

                {/* Title */}
                <h3
                  className={`text-xl font-bold tracking-tight mb-3 ${card.textColor}`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${card.descColor}`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Commercial Message Banner with Left Golden Accent Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full rounded-[8px] border-l-4 border-l-[#D0AA55] bg-white p-6 sm:p-8 shadow-sm mb-12"
        >
          <div className="pl-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c5a059] block mb-2">
              Commercial Message
            </span>
            <p className="text-[#0f172a] font-normal text-sm sm:text-base leading-relaxed">
              Adopt ZoikoSuite through evidence-led migration — not an unproven
              big-bang replacement.
            </p>
          </div>
        </motion.div>

        {/* Bottom Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#124d73] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
          >
            Plan your adoption
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#DBE3E8] text-[#0F476A] font-semibold text-sm hover:bg-[#f8fafc] transition-all duration-200 shadow-sm"
          >
            See integration architecture
          </a>
        </motion.div>
      </div>
    </section>
  );
}
