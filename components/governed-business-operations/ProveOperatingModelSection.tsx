"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface PhaseCard {
  phase: string;
  title: string;
  description: string;
  isDark: boolean;
}

const phasesData: PhaseCard[] = [
  {
    phase: "Phase 01",
    title: "Discover",
    description:
      "Map systems, entities, jurisdictions, functions, objects, owners, policies, authority, evidence, integrations, and gaps.",
    isDark: false,
  },
  {
    phase: "Phase 02",
    title: "Model",
    description:
      "Configure the operations graph, governance controls, evidence requirements, roles, workflows, events, and boundaries.",
    isDark: false,
  },
  {
    phase: "Phase 03",
    title: "Shadow Mode",
    description:
      "Compare proposed context, policy outcomes, approval routes, evidence, and exceptions — without executing production actions.",
    isDark: true,
  },
  {
    phase: "Phase 04",
    title: "Controlled activation",
    description:
      "Activate selected functions, entities, jurisdictions, workflows, and integrations with approval and rollback criteria.",
    isDark: false,
  },
  {
    phase: "Phase 05",
    title: "Expand and assure",
    description:
      "Add scope; monitor control effectiveness, evidence quality, adoption, exceptions, and architecture health.",
    isDark: false,
  },
];

export default function ProveOperatingModelSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                MIGRATION AND SHADOW MODE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Prove the operating model before production activation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Five phases. Shadow Mode runs the category&apos;s full evaluation
            and stops before execution.
          </p>
        </div>

        {/* 5 Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full mb-12">
          {phasesData.map((phase, idx) => {
            const cardBg = phase.isDark
              ? "bg-[#0F476A] text-white border-[#0F476A] shadow-lg"
              : "bg-white text-[#0f172a] border-[#DBE3E8] shadow-xs";

            const phaseTagColor = phase.isDark
              ? "text-[#D0AA55]"
              : "text-[#c5a059]";

            const descColor = phase.isDark
              ? "text-[#CFDEE7]"
              : "text-[#64748b]";

            return (
              <div
                key={idx}
                className={`rounded-2xl p-5 border flex flex-col justify-between transition-all duration-200 ${cardBg}`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-widest block mb-2 ${phaseTagColor}`}
                  >
                    {phase.phase}
                  </span>
                  <h3 className="text-base font-bold mb-2">{phase.title}</h3>
                  <p className={`text-xs leading-relaxed ${descColor}`}>
                    {phase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Display Container */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DBE3E8] bg-[#08222F] mb-12">
          <img
            src="/governed-business-operations/12.png"
            alt="Prove the operating model dashboard representation"
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Bottom CTA Button & Footer Note */}
        <div className="w-full flex justify-center gap-6 mb-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm w-fit"
          >
            Discuss migration and shadow mode
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
        <div className="flex items-center border-l-3 border-l-[#c5a059] p-2 gap-3">
          <span className="text-xs text-[#64748b] italic">
            A controlled methodology — not a promised timeline, outcome, or
            universal replacement scope.
          </span>
        </div>
      </div>
    </section>
  );
}
