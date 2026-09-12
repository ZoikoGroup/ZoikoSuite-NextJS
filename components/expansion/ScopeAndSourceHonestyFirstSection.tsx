"use client";

import React from "react";
import { motion } from "framer-motion";

interface StageItem {
  stage: string;
  title: string;
  desc: string;
}

const stages: StageItem[] = [
  {
    stage: "STAGE 01",
    title: "Trigger & target scope",
    desc: "What is changing, and which entities, jurisdictions and functions it touches.",
  },
  {
    stage: "STAGE 02",
    title: "Authoritative sources",
    desc: "Which systems record governing facts (payroll, growth, spend).",
  },
  {
    stage: "STAGE 03",
    title: "Jurisdiction qualification",
    desc: "Standing state, local, effective and related rules and exclusions.",
  },
  {
    stage: "STAGE 04",
    title: "Governance & authority",
    desc: "Policy, delegation source, SOD, population and exclusions.",
  },
  {
    stage: "STAGE 05",
    title: "Professional review",
    desc: "Action class approval schedule; external counsel, auditor or assistance record.",
  },
  {
    stage: "STAGE 06",
    title: "Evidence & phased transition",
    desc: "Auditable evidence chain; shadow runway before live governance activity.",
  },
  {
    stage: "STAGE 07",
    title: "Human activation & stabilization",
    desc: "Named accountable owners; business-as-usual and continuous monitoring.",
  },
];

export default function ScopeAndSourceHonestyFirstSection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-14 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
                EXPANSION OPERATING MODEL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Scope and source honesty first
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
              The sequence deliberately puts source qualification and professional review before any transition activity. Activation is a human decision, not a stage that completes itself.
            </p>
          </motion.div>
        </div>

        {/* 7 Stages Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
          {stages.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200/90 bg-[#F7F5F0] p-3.5 sm:p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <span className="text-[9.5px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-1.5">
                  {st.stage}
                </span>
                <h3 className="text-xs sm:text-[13px] font-bold text-[#08222F] leading-snug mb-2">
                  {st.title}
                </h3>
              </div>
              <p className="text-[11px] sm:text-[11.5px] text-slate-600 leading-relaxed">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
