"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PhaseItem {
  id: string;
  title: string;
  description: string;
}

const phases: PhaseItem[] = [
  {
    id: "01",
    title: "SOURCE CHANGE DETECTED",
    description:
      "Notice of new statute, version, effective and review dates, and its asserted scope. No legal conclusion changes at this stage.",
  },
  {
    id: "02",
    title: "AFFECTED SCOPE IDENTIFIED",
    description:
      "Identifies entities, contracts, obligations, policies and workflows potentially affected — universally, no autonomy.",
  },
  {
    id: "03",
    title: "APPLICABILITY REVIEW REQUIRED",
    description:
      "Assigns qualified reviewer, and shows evidence and limitations alongside the currently configured state.",
  },
  {
    id: "04",
    title: "REVIEWER DETERMINATION",
    description:
      "Confirmed applicable / not applicable / exception / provided reason and grounded request. New outcomes, all human.",
  },
  {
    id: "05",
    title: "PROPAGATION OR EXCEPTION",
    description:
      "Downstream configuration is updated only through authorized change control — cannot take effect without review audit.",
  },
  {
    id: "06",
    title: "EVIDENCE LOCKED",
    description:
      "Permanent records, reviewer, reason, effective date, timestamp and affected objects locked into ledger policy.",
  },
];

export default function SourceChangeNotLegalConclusionSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                JURISDICTION CHANGE REVIEW
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              A source change is not a legal conclusion
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end text-left"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              When a jurisdictional source changes, nothing about applicability changes until a qualified reviewer says so. Six stages enforce that separation.
            </p>
          </motion.div>
        </div>

        {/* 6 Stacked Phase Strips */}
        <div className="flex flex-col space-y-2.5 mb-10 sm:mb-12">
          {phases.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-xl border border-slate-200/90 bg-white p-3.5 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-left shadow-sm"
            >
              <div className="sm:w-72 shrink-0">
                <span className="text-[11px] font-mono font-bold text-slate-900 tracking-wide">
                  {p.id} &middot; {p.title}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Graphic Banner (gc5.png) - DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80 bg-white"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[2.1/1]">
            <Image
              src="/general-counsel/gc5.png"
              alt="A source change is not a legal conclusion workflow visualization"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1240px) 100vw, 1240px"
              priority
            />
          </div>
        </motion.div>

        {/* Mobile View: High-Fidelity Change Order Review Terminal Card */}
        <div className="block lg:hidden w-full text-left">
          <div className="w-full rounded-2xl border border-slate-700/80 bg-white text-slate-900 shadow-xl overflow-hidden">
            {/* Dark Top Bar */}
            <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
              <span className="text-[10.5px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
                CHANGE ORDER REVIEW &middot; ALL EVALUATED INFO
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Content Body Grid */}
            <div className="p-4 flex flex-col gap-4 divide-y divide-slate-100 text-xs">
              {/* Left & Right Info Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      SOURCE OF CHANGE
                    </span>
                    <span className="text-[11px] font-mono text-slate-800 font-medium">
                      Federal tax reform - 2026 levy - rev signed 2025-v2
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      JURISDICTION
                    </span>
                    <span className="text-[11px] text-slate-800 font-medium">
                      United States
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      STATUS
                    </span>
                    <span className="text-[11px] text-slate-800 font-medium">
                      In legal review
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      AFFECTED SCOPE
                    </span>
                    <span className="mt-0.5 inline-block px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border border-amber-300 bg-amber-50 text-amber-800 w-fit">
                      14 ENTITIES WITH US SOURCE REVENUE
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      REVIEWER
                    </span>
                    <span className="text-[11px] text-slate-800 font-medium">
                      Tanya Ryan &mdash; VP Global Tax &amp; Legal
                    </span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2.5 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      TEAM LEAD
                    </span>
                    <span className="text-[11px] text-slate-800 font-medium">
                      Tax &amp; Legal Counsel
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      PROPOSED RULE
                    </span>
                    <span className="text-[11px] text-slate-700 leading-relaxed font-normal">
                      Trigger event reporting apply only to overseas subsidiaries
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      EVALUATION RESULT
                    </span>
                    <span className="text-[11px] font-mono text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 w-fit mt-0.5">
                      [&check; Determination: Form 1042-S filing updated]
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      CONFIRMED STATUS
                    </span>
                    <span className="mt-0.5 inline-block px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700 w-fit">
                      CONFIRMED &mdash; WAITING EXECUTION SIGN OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Amber Notice Box */}
              <div className="pt-3">
                <div className="rounded-xl bg-[#FFFBEB] border border-[#FDE68A] p-3 text-left flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <p className="text-[11px] leading-relaxed text-[#78350F]">
                    <strong className="font-semibold text-[#92400E]">Configured state deliberately unchanged:</strong>{" "}
                    The platform permanently operates under old policy (vs. higher layer check) adapting to either system failures &amp; no forced adjustments happen until legal and compliance review completes all steps &amp; signs off.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
