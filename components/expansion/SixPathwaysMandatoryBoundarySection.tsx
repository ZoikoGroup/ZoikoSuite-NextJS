"use client";

import React from "react";
import { motion } from "framer-motion";
import MobileSixPathwaysView from "./MobileSixPathwaysView";

interface PathwayCard {
  title: string;
  desc: string;
  isGoldBorder?: boolean;
}

const pathways: PathwayCard[] = [
  {
    title: "Prepare for international expansion",
    desc: "The primary readiness pathway: scope, operating divisions, authoritative sources, jurisdiction status, named owners, blockers, evidence and transition dependencies.",
    isGoldBorder: true,
  },
  {
    title: "Global compliance readiness",
    desc: "Continuous obligations, controls, sources, evidence, exceptions and specialist review readiness across the entities in scope.",
  },
  {
    title: "Adapt to regulatory change",
    desc: "A heuristics-qualified change queue showing the impacted scope, assigned review, implementation status and resulting evidence.",
  },
  {
    title: "Support M&A and divestitures",
    desc: "Operating integration and separation baseline workstreams — systems, sources, obligations, authority and evidence across the affected entities.",
  },
  {
    title: "Enable scalable governance",
    desc: "A global baseline plus entity and jurisdiction variance, with the authority, evidence, and exception model that makes local differences manageable.",
  },
  {
    title: "Drive sustainable growth",
    desc: "Operational readability, control resilience, evidence and source honesty as the operating entity grows.",
  },
];

export default function SixPathwaysMandatoryBoundarySection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-14 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
                EXPANSION PATHWAYS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Six pathways, each with its mandatory boundary
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
              Choose one or more. A pathway links out only where the Publication Registry says Published and a canonical route exists — none currently does, so each offers a scope conversation instead.
            </p>
          </motion.div>
        </div>

        {/* Desktop 6 Pathways Grid (Untouched desktop layout) */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pathways.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-start bg-white shadow-sm transition-all duration-200 hover:shadow-md ${
                card.isGoldBorder
                  ? "border border-[#D0AA55]"
                  : "border border-slate-200/90"
              }`}
            >
              <h3 className="text-sm sm:text-base font-bold text-[#08222F] mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: High-fidelity Detailed Pathway Cards with Boundaries (Strictly hidden on lg desktop) */}
        <div className="block lg:hidden">
          <MobileSixPathwaysView />
        </div>
      </div>
    </section>
  );
}
