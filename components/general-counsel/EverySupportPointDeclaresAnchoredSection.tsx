"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EverySupportPointDeclaresAnchoredSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#14425a]">
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
                EVIDENCE VS. LEGAL FINDING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Every support point declares how it was anchored
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end text-left"
          >
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              An exact quotation, a structured field and an inferred relationship carry very different weight. Labelling them identically would be the most misleading thing this interface could do.
            </p>
          </motion.div>
        </div>

        {/* Graphic Banner (gc6.png) - DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-[#061822]"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[2.1/1]">
            <Image
              src="/general-counsel/gc6.png"
              alt="Every support point declares how it was anchored visualization"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1240px) 100vw, 1240px"
              priority
            />
          </div>
        </motion.div>

        {/* Mobile View: Dedicated Anchored Support Points Card & Integrity Badges */}
        <div className="block lg:hidden w-full flex flex-col gap-4 text-left">
          {/* Main White Card Container */}
          <div className="w-full rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-xl overflow-hidden p-4 sm:p-5 flex flex-col gap-4">
            {/* Top Badges Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                100 ANCHORED POINT IN LEGAL FOUNDATION
              </span>
              <span className="px-2.5 py-1 rounded text-[9px] font-mono font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                &bull; EVALUATION: LEGAL VALIDITY
              </span>
            </div>

            {/* Task Headline */}
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
              Task: Identify notice requirements relating to remittance changes in CTR-0918
            </h4>

            {/* Section Heading */}
            <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              SERVICE ANCHORS
            </span>

            {/* Anchor Item 1 */}
            <div className="rounded-xl border border-teal-200 bg-[#F4FAF9] p-3 flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider bg-teal-100 text-teal-850 border border-teal-300">
                  EXACT TEXT
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  CTR-0918 &middot; s.2 &middot; p.3-10 &middot; cl.3(b) &middot; p.Board source
                </span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                &ldquo;The clause text requiring 30 days notice within 15 days is quoted directly from the agreement and is viewable in the record.&rdquo;
              </p>
            </div>

            {/* Anchor Item 2 */}
            <div className="rounded-xl border border-sky-200 bg-[#F4F9FD] p-3 flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider bg-sky-100 text-sky-850 border border-sky-300">
                  STRUCTURED FIELD
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  Source: metadata &middot; notice period days &middot; 15
                </span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                A structured field carries context from the record. It is a field value, not an interpretation of the clause.
              </p>
            </div>

            {/* Anchor Item 3 */}
            <div className="rounded-xl border border-amber-200 bg-[#FEFBF5] p-3 flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-850 border border-amber-300">
                  INFERRED RELATIONSHIP
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  Derived &middot; not stated in the source
                </span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                This link to proposed supplier change notice was inferred from an entity code and a pending fee record; it is not asserted by either source and requires human confirmation.
              </p>
            </div>

            {/* Classification Matrix Rows */}
            <div className="divide-y divide-slate-100 border-t border-slate-100 pt-2 text-xs flex flex-col gap-2.5">
              {/* Row 1 */}
              <div className="pt-2 flex flex-col gap-0.5">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  RELATIONSHIP ANCHOR-STATUS
                </span>
                <p className="text-[11px] text-slate-800 leading-relaxed font-normal">
                  <strong className="font-semibold text-slate-900">Schedule-free relationship research point is not present in the available interface:</strong> The finding arrives from incomplete record/system: has not been seen and human review is called.
                </p>
              </div>

              {/* Row 2 */}
              <div className="pt-2 flex flex-col gap-0.5">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  EVALUATION CONTEXT
                </span>
                <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                  The supplier relationship includes a direct remittance precedent for the same energy type. Both references are shown. No conclusion has been entered.
                </p>
              </div>

              {/* Row 3 */}
              <div className="pt-2 flex flex-col gap-0.5">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  PENDING / ACTIVE
                </span>
                <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                  A downstream action notice appears to be required before a remittance change takes effect; output is alerted but what happens must be read in context of non-urgent status.
                </p>
              </div>

              {/* Row 4 */}
              <div className="pt-2 flex flex-col gap-0.5">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  ESTABLISH EVIDENCE
                </span>
                <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                  Governed context and legacy Legal interpretation of instructions is outside the permitted tool scope.
                </p>
              </div>
            </div>
          </div>

          {/* Two Bottom Dark Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Card 1: Tool Integrity */}
            <div className="rounded-2xl border border-[#1b435d] bg-[#072130] p-4 flex flex-col gap-2.5 text-left">
              <span className="text-[10px] font-mono font-bold text-[#c5a059] uppercase tracking-wider">
                ANCHOR CLASSIFICATION &mdash; TOOL INTEGRITY
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["EXACT TEXT QUOTATION", "FIELD", "REPORT", "REASONED INFERENCE", "EXCLUSION", "FALLBACK — NOT PERMITTED BY RULE"].map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider bg-[#061822] text-[#93c5fd] border border-[#1E5B80]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed font-normal mt-1">
                For all output generated or entered everywhere: ZoikoSuite is an authoritative source, why standard abstract language without actions is forbidden.
              </p>
            </div>

            {/* Card 2: Privacy Boundary */}
            <div className="rounded-2xl border border-[#1b435d] bg-[#072130] p-4 flex flex-col gap-2 text-left">
              <span className="text-[10px] font-mono font-bold text-[#c5a059] uppercase tracking-wider">
                TOOL USE PRIVACY BOUNDARY
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                The tool is bounded to manufactured summarization. A prompt cannot be transferred out; a request for a legal opinion for prompt source-provided content is captured, logged &amp; analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
