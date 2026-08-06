"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MigrationPhase {
  phaseNumber: string;
  title: string;
  description: string;
}

const migrationPhases: MigrationPhase[] = [
  {
    phaseNumber: "Phase 01",
    title: "Discover",
    description:
      "Map systems, entities, jurisdictions, owners, controls, data, integrations, and evidence requirements.",
  },
  {
    phaseNumber: "Phase 02",
    title: "Model",
    description:
      "Configure organizational structures, policies, authority, workflows, obligations, and role access.",
  },
  {
    phaseNumber: "Phase 03",
    title: "Shadow Mode",
    description:
      "Observe and compare proposed policy decisions, workflows, exceptions, and evidence without authorizing production actions.",
  },
  {
    phaseNumber: "Phase 04",
    title: "Controlled activation",
    description:
      "Activate selected modules, entities, jurisdictions, and workflows behind approval gates.",
  },
  {
    phaseNumber: "Phase 05",
    title: "Expand & assure",
    description:
      "Add scope, measure exceptions, validate evidence, and improve controls.",
  },
];

export default function MigrationShadowMode() {
  const [activePhase, setActivePhase] = useState<number>(2); // 0-indexed for Phase 03

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Migration & Shadow Mode
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Adopt governed operations without forcing a blind cutover
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Five controlled phases. A phase cannot be marked ready without
                an owner, criteria, evidence, and approval.
              </p>
            </motion.div>
          </div>

          {/* Grid of 5 Migration Phases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {migrationPhases.map((phase, idx) => {
              const isActive = activePhase === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * idx,
                    ease: "easeOut",
                  }}
                  onClick={() => setActivePhase(idx)}
                  className={`rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 border ${
                    isActive
                      ? "bg-[#0F476A] text-white border-[#0F476A] shadow-lg shadow-[#07131d]/10"
                      : "bg-white text-[#0f172a] border-[#DBE3E8] hover:border-[#cbd5e1] shadow-xs"
                  }`}
                >
                  <div>
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-widest block mb-2 ${isActive ? "text-[#c5a059]" : "text-[#c5a059]"}`}
                    >
                      {phase.phaseNumber}
                    </span>
                    <h3
                      className={`text-lg font-bold tracking-tight mb-2 ${isActive ? "text-white" : "text-[#0f172a]"}`}
                    >
                      {phase.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${isActive ? "text-[#9ba4b5]" : "text-[#64748b]"}`}
                    >
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Migration Architecture Showcase Image (No Border Added) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="relative w-full rounded-xl mb-10"
          >
            <img
              src="/platform-overview/9.png"
              alt="Migration and shadow mode dashboard displaying phased transition pipelines and status indicators"
              className="w-full h-auto object-cover block rounded-xl"
            />
          </motion.div>

          {/* Bottom Action CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center w-full"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-md shadow-[#0F476A]/20"
            >
              Discuss migration and shadow mode
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
