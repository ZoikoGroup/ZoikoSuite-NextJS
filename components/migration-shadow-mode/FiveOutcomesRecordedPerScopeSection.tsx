"use client";

import React from "react";
import { motion } from "framer-motion";

interface OutcomeItem {
  title: string;
  description: string;
  isDefer?: boolean;
}

const desktopOutcomes: OutcomeItem[] = [
  {
    title: "Complement",
    description:
      "Coexists with current systems, operates alongside existing process and provides governance.",
  },
  {
    title: "Consolidate",
    description:
      "Replaces chosen legacy system, moves workflows and consolidates functionality.",
  },
  {
    title: "Consolidate selected processes",
    description:
      "Specific sub-processes move while legacy retains remainder.",
  },
  {
    title: "Replace selected scope",
    description:
      "One defined scope is retired in full, other scopes untouched.",
  },
  {
    title: "Defer",
    description:
      "No change at this time, explicit rationale recorded, scheduled review date.",
    isDefer: true,
  },
];

const mobileOutcomes: OutcomeItem[] = [
  {
    title: "Complement",
    description:
      "ZoikoSuite adds governance around a system that stays authoritative.",
  },
  {
    title: "Consolidate",
    description:
      "ZoikoSuite sequences work across several systems that all stay authoritative.",
  },
  {
    title: "Consolidate-selected processes",
    description:
      "Specific processes move, and the rest unchanged.",
  },
  {
    title: "Replace selected scope",
    description:
      "A bounded scope is replaced, subject to full readiness gates.",
  },
  {
    title: "Defer",
    description:
      "No change is made now, and the reason is recorded rather than left implicit.",
  },
];

export default function FiveOutcomesRecordedPerScopeSection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-7 flex flex-col text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#c5a059]" />
                <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                  TARGET ARCHITECTURE DECISION
                </span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
                Five outcomes, recorded per bounded scope
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-5 flex flex-col justify-end text-left"
            >
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                The decision is made per scope, not per programme. The same organization can complement in one process and consolidate in another, and &ldquo;Defer&rdquo; is a legitimate recorded outcome.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {desktopOutcomes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl p-6 flex flex-col justify-between text-left shadow-sm border transition-all ${
                  item.isDefer
                    ? "border-rose-200 bg-rose-50/40 hover:border-rose-300"
                    : "border-slate-200/90 bg-white hover:border-slate-300"
                }`}
              >
                <div>
                  <h4
                    className={`text-[15px] font-bold mb-2.5 leading-snug ${
                      item.isDefer ? "text-rose-700" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (block lg:hidden) - EXACT MATCH TO USER'S MOBILE SCREENSHOT */}
        {/* ========================================================================= */}
        <div className="block lg:hidden flex flex-col text-left">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              TARGET ARCHITECTURE DECISION
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08222F] leading-tight mb-3">
            Five outcomes, recorded per bounded scope
          </h2>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            This decision is made per scope, not per programme. The same organization can complement in one process and consolidate in another, and &ldquo;defer&rdquo; is a legitimate recorded outcome.
          </p>

          {/* 5 Cards (Mobile Grid: top 3 + bottom 2) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            {mobileOutcomes.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2DDD5] rounded-xl p-4 shadow-sm"
              >
                <h4 className="text-xs font-bold text-[#0B1E28] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {mobileOutcomes.slice(3, 5).map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2DDD5] rounded-xl p-4 shadow-sm"
              >
                <h4 className="text-xs font-bold text-[#0B1E28] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Architecture Decision Record Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white text-[#08222F]">
            {/* Dark Top Bar */}
            <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300">
                ARCHITECTURE DECISION RECORD &middot; ADR-2024-028 &middot; SYNTHETIC FIXTURE
              </div>
              <div className="text-slate-500 font-mono tracking-widest text-xs">
                •••
              </div>
            </div>

            {/* Inner Content Grid */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-5 bg-white">
              {/* Left Column: Details */}
              <div className="md:col-span-7 space-y-2.5 text-[11px]">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-mono text-slate-400 uppercase text-[9.5px] w-20 shrink-0">
                    SCOPE
                  </span>
                  <span className="text-slate-700 font-medium">
                    Supplier bank detail change &middot; Synthetic UK Ltd &middot; Wave 1
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-mono text-slate-400 uppercase text-[9.5px] w-20 shrink-0">
                    OUTCOME
                  </span>
                  <span className="text-[#0B1E28] font-bold">
                    Complement &mdash; governance around the existing procurement system
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-mono text-slate-400 uppercase text-[9.5px] w-20 shrink-0">
                    RATIONALE
                  </span>
                  <span className="text-slate-600 leading-relaxed">
                    Procurement remains authoritative for the supplier record; the gap is in the approval and evidence path, not the record itself.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-mono text-slate-400 uppercase text-[9.5px] w-20 shrink-0">
                    DECIDED BY
                  </span>
                  <span className="text-slate-700">
                    Maya Chen &middot; with architecture and procurement owners
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-mono text-slate-400 uppercase text-[9.5px] w-20 shrink-0">
                    DATE
                  </span>
                  <span className="text-slate-700">18 Jul 2026</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-mono text-slate-400 uppercase text-[9.5px] w-20 shrink-0">
                    REVIEW
                  </span>
                  <span className="text-slate-700">
                    On Wave 1 activation, or on material vendor change
                  </span>
                </div>
              </div>

              {/* Right Column: What this decision does not do */}
              <div className="md:col-span-5 bg-[#FBF9F5] border border-[#EAE4DA] rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                    WHAT THIS DECISION DOES NOT DO
                  </div>
                  <div className="space-y-2 text-[10px]">
                    <div>
                      <strong className="text-slate-900">No Target:</strong>{" "}
                      <span className="text-slate-600">
                        Does not set procurement as a replacement target
                      </span>
                    </div>
                    <div>
                      <strong className="text-slate-900">No Cutover:</strong>{" "}
                      <span className="text-slate-600">
                        Does not commit a stability run cutover wave
                      </span>
                    </div>
                    <div>
                      <strong className="text-slate-900">No Precedent:</strong>{" "}
                      <span className="text-slate-600">
                        Does not decide the outcome for any other scope
                      </span>
                    </div>
                    <div>
                      <strong className="text-slate-900">Irreversible:</strong>{" "}
                      <span className="text-slate-600">
                        Cannot reverse without recorded switch-point
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#EAE4DA] text-[10px] font-mono text-slate-500 leading-relaxed">
              Every scope carries its own decision record. A programme-level &ldquo;we are replacing X&rdquo; statement is not a valid architecture decision under this model.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
