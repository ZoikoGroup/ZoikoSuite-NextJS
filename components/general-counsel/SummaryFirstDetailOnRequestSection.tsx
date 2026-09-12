"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SummaryFirstDetailOnRequestSection() {
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
                DECISION PACKET
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Summary first, detail on request
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
              A General Counsel should not have to expand seven panels to learn why something needs review. The seven things that matter are always visible; everything else expands.
            </p>
          </motion.div>
        </div>

        {/* Visual Graphic Banner (gc4.png) - DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80 bg-white"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[2.1/1]">
            <Image
              src="/general-counsel/gc4.png"
              alt="Summary first, detail on request presentation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1240px) 100vw, 1240px"
              priority
            />
          </div>
        </motion.div>

        {/* Mobile View: High-Fidelity Decision Packet Terminal Card */}
        <div className="block lg:hidden w-full text-left">
          <div className="w-full rounded-2xl border border-slate-700/80 bg-white text-slate-900 shadow-xl overflow-hidden">
            {/* Dark Top Bar */}
            <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between gap-2 border-b border-[#14425a]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
                  Supplier agreement &mdash; remittance change notice
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  CTR-2024-1007 &middot; REV 04(a)
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider bg-rose-950 text-rose-300 border border-rose-800 shrink-0">
                IN LEGAL REVIEW
              </span>
            </div>

            {/* 7 Decision Attributes */}
            <div className="p-4 flex flex-col gap-3.5 text-xs divide-y divide-slate-100">
              {/* Row 1 */}
              <div className="flex flex-col gap-1 text-left">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  WHY REVIEW IS NEEDED
                </span>
                <p className="text-[11.5px] text-slate-800 leading-relaxed font-normal">
                  Payment terms require advance notice before a monetary exchange takes effect. A supplementary remit change is in progress against this agreement.
                </p>
              </div>

              {/* Row 2 */}
              <div className="pt-3 flex flex-col gap-1 text-left">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  TRIGGER CONDITION
                </span>
                <p className="text-[11.5px] leading-relaxed font-normal">
                  <span className="text-rose-700 font-medium">Standard source delayed since yesterday</span> &middot; <span className="text-slate-700">Scheduled late remittance not present</span> &middot; <span className="text-amber-800 font-medium">Authority condition breached on the related contract</span>
                </p>
              </div>

              {/* Row 3 */}
              <div className="pt-3 flex flex-col gap-1 text-left">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  LEGALLY QUALIFIED
                </span>
                <p className="text-[11.5px] text-slate-800 leading-relaxed font-normal">
                  General Counsel or delegate. Authority source: board delegation schedule &sect;4
                </p>
              </div>

              {/* Row 4 */}
              <div className="pt-3 flex flex-col gap-1 text-left">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  DUE / DEADLINE
                </span>
                <p className="text-[11.5px] text-slate-800 leading-relaxed font-normal">
                  28 Aug 2026. Downstream payment run on 12 Aug cannot execute without this review being resolved.
                </p>
              </div>

              {/* Row 5 */}
              <div className="pt-3 flex flex-col gap-1 text-left">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  SOURCE OBJECT
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-300">
                    DOC-8802
                  </span>
                  <span className="text-[11px] font-mono text-slate-600">
                    Contract repository / v4 / last sync 19:40 yesterday
                  </span>
                </div>
              </div>

              {/* Row 6 */}
              <div className="pt-3 flex flex-col gap-1 text-left">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  CURRENT STATE
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border border-rose-300 bg-rose-50 text-rose-800">
                    IN REVIEW
                  </span>
                  <span className="text-[11px] text-slate-700">
                    Held in: Scheduled banking &middot; 1 hold backlog item
                  </span>
                </div>
              </div>

              {/* Row 7 */}
              <div className="pt-3 flex flex-col gap-1 text-left">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  NEXT PERMITTED ACTION
                </span>
                <p className="text-[11.5px] text-slate-800 leading-relaxed font-normal">
                  Respond to feature 2 &middot; record legal outcome &middot; escalate &middot; determine parsed workflow. Approval (otherwise open) cannot occur while downstream authority condition is breached.
                </p>
              </div>
            </div>

            {/* Expandable / Accordion Sections */}
            <div className="border-t border-slate-200 bg-slate-50 divide-y divide-slate-200 text-xs">
              {[
                {
                  key: "obligation",
                  title: "Full obligation, term and policy trigger",
                  content: "Detailed breakdown of contractual clause 14.2 regarding 30-day notice requirements and associated penalty mitigations.",
                },
                {
                  key: "authority",
                  title: "Authority condition: scope, justification and segregation",
                  content: "Authoritative review threshold applies to transactions exceeding $500,000 as configured in corporate schedule §4.",
                },
                {
                  key: "source",
                  title: "Source line, revisions, anchor spurs and lineage",
                  content: "Complete revision audit trailing from original contract execution v1 through subsequent amendments v2 and v3.",
                },
                {
                  key: "evidence",
                  title: "Evidence manifest, restrictions and missing items",
                  content: "Digital evidence manifest verified against cryptographic ledger. All requisite countersignatures authenticated.",
                },
              ].map((item) => (
                <div key={item.key} className="text-left">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-slate-100/80 transition-colors"
                  >
                    <span className="text-[11.5px] font-semibold text-slate-800 flex items-center gap-2">
                      <span className="text-[#c5a059] font-bold text-xs">
                        {openAccordions[item.key] ? "▾" : "▸"}
                      </span>
                      {item.title}
                    </span>
                  </button>
                  {openAccordions[item.key] && (
                    <div className="px-4 pb-3 pt-1 text-[11px] text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
