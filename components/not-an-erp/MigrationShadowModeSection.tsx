"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PhaseCard {
  id: string;
  phase: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const phases: PhaseCard[] = [
  {
    id: "phase-01",
    phase: "Phase 01",
    title: "Discover",
    description:
      "Map processes, records, systems, owners, controls, evidence, integrations, and gaps.",
  },
  {
    id: "phase-02",
    phase: "Phase 02",
    title: "Model",
    description:
      "Configure context, controls, roles, workflows, evidence requirements, and boundaries.",
  },
  {
    id: "phase-03",
    phase: "Phase 03",
    title: "Shadow Mode",
    description:
      "Compare proposed governance against current outcomes with execution disabled.",
    highlighted: true,
  },
  {
    id: "phase-04",
    phase: "Phase 04",
    title: "Disposition",
    description:
      "An authorized owner resolves every difference before anything is marked ready.",
  },
  {
    id: "phase-05",
    phase: "Phase 05",
    title: "Controlled activation",
    description:
      "Activate bounded scope with gates approved and rollback defined.",
  },
  {
    id: "phase-06",
    phase: "Phase 06",
    title: "Expand and assure",
    description:
      "Add scope, monitor exceptions, validate evidence, review controls.",
  },
];

export default function MigrationShadowModeSection() {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>("phase-03");

  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                MIGRATION AND SHADOW MODE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Evaluate around your operations before anything changes
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Six phases. Shadow Mode observes real events and compares proposed
              governance with current outcomes &mdash; without authorizing
              production actions.
            </p>
          </motion.div>
        </div>

        {/* 6 Phase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {phases.map((item) => {
            const isSelected = selectedPhaseId === item.id;
            const isHighlightedDiv = item.highlighted;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhaseId(item.id)}
                className={`rounded-2xl p-5 border transition-all duration-200 cursor-pointer flex flex-col space-y-2.5 ${
                  isHighlightedDiv
                    ? "bg-[#0F476A] text-white border-[#0F476A] shadow-md"
                    : isSelected
                      ? "bg-white text-[#0F172A] border-[#1C2C5E] shadow-sm ring-1 ring-[#1C2C5E]"
                      : "bg-white text-[#0F172A] border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <span
                  className={`text-[10px] font-mono font-semibold tracking-wider uppercase block ${
                    isHighlightedDiv ? "text-[#c5a059]" : "text-[#c5a059]"
                  }`}
                >
                  {item.phase}
                </span>

                <h3
                  className={`text-sm sm:text-base font-bold tracking-tight ${
                    isHighlightedDiv ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed font-normal ${
                    isHighlightedDiv ? "text-[#CBD5E1]" : "text-[#64748B]"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3D Visualization Image Container with NO outer div styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center pt-2"
        >
          <div>
            <img
              src="/not-an-erp/10.png"
              alt="Six phase 3D migration process pipeline showing discovery, modeling, shadow mode, disposition, controlled activation, and expansion"
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] border border-[#0F476A] hover:bg-[#0c3955] hover:border-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
          >
            Discuss migration and shadow mode
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
