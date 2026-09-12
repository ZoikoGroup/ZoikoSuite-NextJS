"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileTheSamePatternView from "./MobileTheSamePatternView";

interface PatternCard {
  label: string;
  description: string;
  isAccent?: boolean;
}

const patternCards: PatternCard[] = [
  {
    label: "LAYER 1 · PROPOSAL",
    description: "Decision model and execution context is framed when triggered. Raw output remained unshared, and review was scored as a distinct storage, before human discussion, limitations, and policy context.",
  },
  {
    label: "LAYER 2 · BOUNDARY",
    description: "Guaranteed results: no independent material context verify in any of the challenges. Systems approve, models execute, and systems track logic runway. Where a mandatory source is missing or stale, the affected finding is suppressed or downgraded before execution proceeds from inferences.",
    isAccent: true,
  },
  {
    label: "LAYER 3 · EXECUTION",
    description: "Execution is traceable, discrete, log-governed and performs fully auditable. Every figure and summary reference is directly viewable in the underlying registers.",
  },
];

export default function TheSamePatternInEveryChallengeSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
                <span className="hidden lg:inline">PATTERN LOGIC</span>
                <span className="lg:hidden">GOVERNED AI</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              The same pattern in every challenge
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Sources, then limitations, then the proposed finding, then the required reviewer, then the human decision, then the audit record. The order never changes.
            </p>
          </motion.div>
        </div>

        {/* Desktop View: 2-Column Grid with Left Graphic (scc3.png) + Right 3 Cards (Strictly lg:grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          {/* Left Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/solve-critical-challange/scc3.png"
                alt="The same pattern in every challenge presentation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1240px) 100vw, 600px"
              />
            </div>
          </motion.div>

          {/* Right 3 Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {patternCards.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative rounded-xl p-5 border shadow-sm transition-all overflow-hidden ${
                  c.isAccent
                    ? "bg-white border-slate-200"
                    : "bg-white border-slate-200"
                }`}
              >
                {c.isAccent && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1E5B80]" />
                )}
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-2">
                  {c.label}
                </span>
                <p className="text-xs sm:text-[12.5px] text-slate-700 leading-relaxed font-normal">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View: Dedicated Mobile Governed AI pattern cards */}
        <div className="block lg:hidden">
          <MobileTheSamePatternView />
        </div>
      </div>
    </section>
  );
}
