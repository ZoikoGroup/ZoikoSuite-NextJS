"use client";

import React from "react";
import { motion } from "framer-motion";

interface StageCard {
  step: string;
  title: string;
  description: string;
  isHuman?: boolean;
}

const stages: StageCard[] = [
  {
    step: "STAGE 01",
    title: "Propose",
    description: "A change is initiated across human or system actor",
  },
  {
    step: "STAGE 02",
    title: "Contextualize",
    description: "Connecting jurisdiction, legal entity and policy context",
  },
  {
    step: "STAGE 03",
    title: "Evaluate",
    description: "Evaluating against policy and statutory obligations without exemption",
  },
  {
    step: "STAGE 04",
    title: "Confirm authority",
    description: "Verifying the authority boundary against the actor role",
  },
  {
    step: "STAGE 05",
    title: "Assemble evidence",
    description: "Compile evidence trail for external auditor / board inspection",
  },
  {
    step: "STAGE 06",
    title: "Human decision",
    description: "Accountable human commits the step with clear attribution",
    isHuman: true,
  },
  {
    step: "STAGE 07",
    title: "Enact across state",
    description: "Propagating actions to internal systems and external gates",
  },
  {
    step: "STAGE 08",
    title: "Preserve evidence",
    description: "Preserving immutable records and downstream audit readiness",
  },
];

export default function EightStagesAlwaysHumanSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                SHARED LIFECYCLE / EIGHT STAGES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Eight stages, one of which is always human
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
              The same lifecycle applies whether the action originates in finance, legal, workforce, tax, compliance or procurement. Stage 06 cannot be automated away.
            </p>
          </motion.div>
        </div>

        {/* 8 Stages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className={`rounded-xl p-3.5 flex flex-col justify-between transition-all ${
                stage.isHuman
                  ? "border-2 border-sky-500 bg-sky-50/40 shadow-xs"
                  : "border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300"
              }`}
            >
              <div>
                <span
                  className={`text-[9px] font-mono font-bold tracking-wider uppercase block mb-1.5 ${
                    stage.isHuman ? "text-sky-700" : "text-slate-400"
                  }`}
                >
                  {stage.step}
                </span>
                <h3
                  className={`text-xs sm:text-[13px] font-bold leading-tight mb-2 ${
                    stage.isHuman ? "text-sky-950" : "text-[#08222F]"
                  }`}
                >
                  {stage.title}
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
