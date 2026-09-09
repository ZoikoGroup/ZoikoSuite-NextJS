"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScenarioCard {
  domain: string;
  title: string;
  description: string;
  boundary: string;
}

const scenarios: ScenarioCard[] = [
  {
    domain: "FINANCE",
    title: "Close item awaiting authority",
    description:
      "A payment or reconciliation item requires review because evidence is missing or approval authority is unresolved.",
    boundary:
      "Illustrative. Availability depends on connected systems and implementation.",
  },
  {
    domain: "WORKFORCE",
    title: "Payroll operations exception",
    description:
      "A workforce operations exception is surfaced with its policy context and responsible role.",
    boundary: "No surveillance and no individual productivity policing.",
  },
  {
    domain: "LEGAL",
    title: "Obligation approaching deadline",
    description:
      "A contract obligation approaches a deadline with jurisdiction, source state and review requirement visible.",
    boundary:
      "Not legal advice. Qualified review remains required where applicable.",
  },
  {
    domain: "TAX",
    title: "Jurisdictional obligation needing evidence",
    description:
      "A tax or compliance obligation requires supporting evidence or professional review before filing.",
    boundary:
      "Not automated tax advice and not universal jurisdiction coverage.",
  },
  {
    domain: "COMPLIANCE",
    title: "Recurring control exception",
    description:
      "A configured control generates a recurring exception pattern with attributable evidence and an owner.",
    boundary: "Does not imply certification or guaranteed compliance.",
  },
  {
    domain: "PROCUREMENT",
    title: "Supplier item needing attention",
    description:
      "A supplier, contract or approval item requires attention due to authority, evidence or obligation context.",
    boundary: "Illustrative and no auto-governed.",
  },
];

export default function SixIllustrativeScenariosSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                CROSS-FUNCTIONAL SCENARIOS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Six illustrative scenarios, each
              <br />
              with its boundary
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Every scenario states what it does not claim. Availability depends
              on connected systems and implementation.
            </p>
          </div>
        </div>

        {/* 6 Scenario Cards (2 cols on sm/md, 3 cols on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {scenarios.map((sc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
              className="rounded-xl border border-[#dce5ec] bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#c5a059] uppercase block mb-2">
                  {sc.domain}
                </span>
                <h3 className="text-[15px] font-bold text-[#08222F] mb-2 leading-snug">
                  {sc.title}
                </h3>
                <p className="text-xs text-[#566874] leading-relaxed mb-6">
                  {sc.description}
                </p>
              </div>

              {/* Boundary Pill Container */}
              <div className="rounded-lg border border-rose-200/80 bg-rose-50/50 p-3 flex flex-col gap-1">
                <span className="text-[9px] font-mono font-bold tracking-[0.16em] text-rose-700 uppercase">
                  BOUNDARY
                </span>
                <p className="text-[11px] text-rose-900/80 leading-snug">
                  {sc.boundary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
