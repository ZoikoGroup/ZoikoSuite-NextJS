"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepItem {
  number: string;
  title: string;
  description: string;
  isKey?: boolean;
}

const steps: StepItem[] = [
  {
    number: "STEP 01",
    title: "Source",
    description: "Governing documentation, author, status, sitting, context evaluated without assumption of execution.",
  },
  {
    number: "STEP 02",
    title: "Scoped obligation",
    description: "Establish entity, jurisdiction, responsible parties, terms and the form of its matters.",
  },
  {
    number: "STEP 03",
    title: "Governance",
    description: "Evaluated SME, legal authority source, product permission, method of execution bounds.",
  },
  {
    number: "STEP 04",
    title: "Human-in-alert decision",
    description: "A named person of authorized status takes or approves the contextual decision.",
    isKey: true,
  },
  {
    number: "STEP 05",
    title: "Execution / hand-off",
    description: "Passed downstream audit trails with completed review state for downstream.",
  },
  {
    number: "STEP 06",
    title: "Evidence preserver",
    description: "Preserves context, guidance history, decisions log together as enduring record of health and compliance.",
  },
];

const betterLooksLike = [
  {
    title: "Connected context",
    description: "Context-bound contracts, obligations, matters, jurisdictions, and records stay linked to each other.",
  },
  {
    title: "Clear responsibility",
    description: "Owners, reviewers, approvers, and execution bounds are explicit rather than assumed.",
  },
  {
    title: "Governed decisions",
    description: "Authority, permissions, policy, operations and human decisions are visible in the record.",
  },
  {
    title: "Evidence by default",
    description: "Supporting records and decision history stay attributed and searchable.",
  },
];

export default function SourceFirstHumanJudgmentSection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12">
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
                HOW GOVERNED LEGAL WORK RUNS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Source first, human judgment in the middle
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
              Step 4 is where legal interpretation happens, and it is always a person. The platform&apos;s job is to make steps 1 through 3 reliable enough that step 4 is well-informed.
            </p>
          </motion.div>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 mb-14">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-xl p-4 flex flex-col justify-between text-left transition-all border ${
                st.isKey
                  ? "border-[#1E5B80] bg-[#F0F6FA] shadow-sm ring-1 ring-[#1E5B80]"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div>
                <span className="text-[9.5px] font-mono text-[#c5a059] block mb-1.5 font-bold">
                  {st.number}
                </span>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-2 leading-snug">
                  {st.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  {st.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What Better Looks Like Container */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-3">
            WHAT BETTER LOOKS LIKE
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {betterLooksLike.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 text-left shadow-sm"
              >
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile-only Bottom Notice */}
          <div className="block lg:hidden mt-6 text-left border-l-2 border-[#c5a059] bg-slate-50/70 p-3.5 rounded-r-lg">
            <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
              This is not an automated conclusion. No coverage, right or review is assumed; and statutory coverage or right never changes from a stale source change, because a source change is never a legal conclusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
