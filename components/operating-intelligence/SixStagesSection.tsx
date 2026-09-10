"use client";

import React from "react";
import { motion } from "framer-motion";

interface StageCard {
  stage: string;
  title: string;
  description: string;
  outputLabel: string;
  output: string;
}

const stages: StageCard[] = [
  {
    stage: "STAGE 01",
    title: "Detect",
    description: "Receive the raw signal, normalize it and identify its origin and preliminary type.",
    outputLabel: "OUTCOME",
    output: "Clean event record; source identified.",
  },
  {
    stage: "STAGE 02",
    title: "Contextualize",
    description: "Resolve primary entity, jurisdiction, function, owner and related accounts.",
    outputLabel: "OUTCOME",
    output: "System environment mapping complete.",
  },
  {
    stage: "STAGE 03",
    title: "Evaluate",
    description: "Apply obligations, policies, authority and evidence requirements to the context.",
    outputLabel: "OUTCOME",
    output: "Governed policy evaluation record signed.",
  },
  {
    stage: "STAGE 04",
    title: "Prioritize",
    description: "Determine urgency, potential exposures, escalations and which operational actions are needed next.",
    outputLabel: "OUTCOME",
    output: "Documented priority rating assigned.",
  },
  {
    stage: "STAGE 05",
    title: "Route",
    description: "Assign review and action paths to people, machines or service identities.",
    outputLabel: "OUTCOME",
    output: "Responsible parties assigned with permissions.",
  },
  {
    stage: "STAGE 06",
    title: "Govern",
    description: "Maintain execution boundary, exceptions and audit provenance in step sequence.",
    outputLabel: "OUTCOME",
    output: "Bounded workflow state verified with evidence.",
  },
];

export default function SixStagesSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                THE OPERATING INTELLIGENCE PATH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.12]">
              Six stages from signal to
              <br />
              learning
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[500px]">
              Each stage carries the product proof that makes it visible. There is
              no auto-play and no timed animation — the sequence is static
              and readable at any point.
            </p>
          </div>
        </div>

        {/* 6 Stages Row: 6 columns on desktop, responsive wrap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              className="rounded-2xl border border-[#d6e2e9] bg-white p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#a06810] uppercase block mb-1.5">
                  {stage.stage}
                </span>
                <h3 className="text-base font-bold text-[#08222F] tracking-tight mb-2">
                  {stage.title}
                </h3>
                <p className="text-[11.5px] text-[#64748b] leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#edf2f6]">
                <span className="text-[9px] font-mono font-bold tracking-[0.15em] text-[#8fa4b2] uppercase block mb-1">
                  {stage.outputLabel}
                </span>
                <p className="text-[11px] font-mono text-[#334756] leading-snug">
                  {stage.output}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
