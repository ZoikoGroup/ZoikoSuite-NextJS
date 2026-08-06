"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PhaseCard {
  phase: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const phaseCards: PhaseCard[] = [
  {
    phase: "Phase 01",
    title: "Discover",
    description:
      "Inventory systems, actions, entities, jurisdictions, policies, authority, evidence, integrations, and exception patterns.",
    isHighlighted: false,
  },
  {
    phase: "Phase 02",
    title: "Model",
    description:
      "Configure organizational context, action types, controls, roles, evidence requirements, events, and boundaries.",
    isHighlighted: false,
  },
  {
    phase: "Phase 03",
    title: "Shadow Mode",
    description:
      "Compare current outcomes with proposed context, controls, routes, and evidence — with no production execution.",
    isHighlighted: true,
  },
  {
    phase: "Phase 04",
    title: "Controlled activation",
    description:
      "Activate selected entities, jurisdictions, modules, actions, and integrations under explicit readiness and rollback criteria.",
    isHighlighted: false,
  },
  {
    phase: "Phase 05",
    title: "Expand and assure",
    description:
      "Add scope, monitor exceptions, validate evidence, review controls, and approve improvements.",
    isHighlighted: false,
  },
];

export default function MigrationShadowModeSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Eyebrow Style (with line) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Migration and shadow mode
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Test the governance model before authorizing production actions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Shadow Mode runs the whole lifecycle against real or
                representative signals and stops before execution. Differences
                stay visible until an authorized owner dispositions them.
              </p>
            </motion.div>
          </div>

          {/* Phase Cards Grid (5 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mb-12">
            {phaseCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                className={`border border-[#CFDEE7] rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${
                  card.isHighlighted
                    ? "bg-[#0F476A] text-white border-transparent"
                    : "bg-white text-[#0f172a]"
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-widest block mb-2 ${
                      card.isHighlighted ? "text-[#c5a059]" : "text-[#c5a059]"
                    }`}
                  >
                    {card.phase}
                  </span>
                  <h3
                    className={`font-semibold text-lg mb-3 ${card.isHighlighted ? "text-white" : "text-[#0f172a]"}`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${card.isHighlighted ? "text-[#CBD5E1]" : "text-[#64748b]"}`}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Showcase Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="w-full rounded-2xl overflow-hidden border border-[#CFDEE7] bg-white shadow-sm mb-12"
          >
            <img
              src="/how-it-works/14.png"
              alt="Team collaborating around a monitor reviewing shadow mode test results, scenario simulation metrics, and impact analysis dashboards"
              className="w-full h-auto object-cover block"
            />
          </motion.div>

          {/* Bottom Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center w-full mb-8"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
            >
              Discuss migration and shadow mode
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </motion.div>

          {/* Bottom Disclaimer Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="p-4 border-l-4 border-l-[#D0AA55] text-xs text-[#64748b] leading-relaxed max-w-2xl"
          >
            This describes a controlled methodology. It does not promise a
            universal timeline, zero risk, or automatic system replacement.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
