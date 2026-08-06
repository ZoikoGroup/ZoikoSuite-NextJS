"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const standardCards = [
  {
    tag: "Defining property",
    title: "Governance before execution",
    description: "A material action is evaluated before it completes.",
  },
  {
    tag: "Defining property",
    title: "Evidence by default",
    description:
      "The platform preserves the decision basis and execution lineage as work happens.",
  },
  {
    tag: "Defining property",
    title: "Multi-entity by design",
    description:
      "The data, authority, ledger, workforce, and reporting models understand corporate structures.",
  },
  {
    tag: "Defining property",
    title: "Jurisdiction at runtime",
    description:
      "Rules are effective-dated and resolved by the context of the action.",
  },
  {
    tag: "Defining property",
    title: "Unified truth ownership",
    description:
      "Each material object has one authoritative source and governed event propagation.",
  },
  {
    tag: "Defining property",
    title: "Governed intelligence",
    description:
      "AI assists within policy, approval, evidence, and human-review boundaries.",
  },
] as const;

export default function GovernedIntelligence() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-[620px]">
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                Category Definition
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Governed Business Operations Intelligence
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[480px]">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              A governance-first operating platform that connects financial,
              workforce, legal, tax, compliance, evidence, and intelligence
              domains through one policy-aware, entity-aware, and
              jurisdiction-aware control model.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-6">
          {/* Top 6 Standard White Cards (3x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {standardCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-[#DBE3E8] rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="text-[11px] font-medium tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
                    {card.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Full-Width Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-[#0F476A] border border-[#0F476A] rounded-2xl p-8 lg:p-10 flex flex-col justify-between shadow-lg text-white"
          >
            <div>
              <span className="text-[11px] font-medium tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
                Defining property
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                Sovereign elasticity
              </h3>
              <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed max-w-[700px] mb-8">
                Residency, isolation, key custody, and deployment models can
                scale to regulated requirements.
              </p>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c5a059] hover:text-[#e2c27b] transition-colors"
              >
                Explore the platform
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
