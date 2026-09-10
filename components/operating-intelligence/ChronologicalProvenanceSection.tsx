"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TimelineEvent {
  title: string;
  timestamp: string;
  description: string;
  isAi?: boolean;
  isHuman?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    title: "Signal detected",
    timestamp: "14:02:11",
    description:
      "Event type: creditor account changed · source: AP/ledger [inv-led-04] · reference EXP-8821",
  },
  {
    title: "Context resolved",
    timestamp: "14:02:40",
    description:
      "Object: VEN-4471 · entity: Z-US-04 · jurisdiction: United States · entity register v32",
  },
  {
    title: "Policy and obligation evaluated",
    timestamp: "14:03:07",
    description:
      "EVD-AP-003 v2 -> blocked · POL-SOD-002 v1 -> blocked · POL-SPD-011 v4 -> approval required · CD-0918 v1 -> professional review",
  },
  {
    title: "Evidence changed",
    timestamp: "14:04:32",
    description:
      "Supplier confirmation email added · source: AP · verification state: unverified · actor: T. Cross",
  },
  {
    title: "Review started",
    timestamp: "14:05:01",
    description:
      "Assigned role: Treasury Director · scope: vendor account change only",
  },
  {
    title: "AI finding generated",
    timestamp: "14:07:30",
    isAi: true,
    description:
      "Authority checklist: CTR-0918, supplier notification · transition: onward review request outside requester permission · inputs: 1 of 3 mandatory aspects met. No decision taken",
  },
  {
    title: "Human decision / review outcome",
    timestamp: "14:12:44",
    isHuman: true,
    description:
      "Disposition: reviewed · H. Vance · Treasury Director · outcome: evidence requested · authority: procedure manual paragraph 4.2 · DEC-2024-09432",
  },
  {
    title: "Exception recorded",
    timestamp: "14:31:15",
    description:
      "Reason: supplier reference error on callback · form: EVD-AP-003/exception-02 · dual confirmation plus test payment plan · expiry: 2024-09-01",
  },
  {
    title: "External outcome",
    timestamp: "14:33:02",
    description:
      "System: banking gateway · status: acknowledged · reference: CB-TX-9923145 · recorded in event back-link · intelligence status updated to in-scope",
  },
];

export default function ChronologicalProvenanceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#123145]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 lg:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                DECISION AND EVIDENCE TIMELINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14]">
              Chronological provenance from
              <br className="hidden sm:inline" />
              signal to reviewed outcome
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#9ba4b5] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              The AI-assisted event is visually distinct from the human decision
              event. That separation is structural, not stylistic.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP VIEW: Full-width 3D Graphic Container (pi6.png)       */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#1b3a4f] bg-[#0c1f2b] shadow-2xl"
        >
          <Image
            src="/operating-intelligence/pi6.png"
            alt="AI-assisted event alongside human decision provenance illustration"
            width={1240}
            height={640}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE VIEW: Complete Chronological Provenance Timeline       */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:hidden w-full rounded-2xl overflow-hidden border border-[#1c4055] bg-white text-[#0f172a] shadow-xl flex flex-col"
        >
          {/* Dark Top Bar */}
          <div className="bg-[#0B1E2B] px-4 py-3 flex items-center justify-between text-white border-b border-[#1c4055]">
            <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
              TIMELINE · VEN-4471 · READ-ONLY FOR ASSURANCE ROLES
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
              <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
              <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
            </div>
          </div>

          {/* Timeline Stream */}
          <div className="p-4 sm:p-5 flex flex-col">
            <div className="relative border-l-2 border-slate-200 ml-2 space-y-4 py-2">
              {timelineEvents.map((evt, idx) => (
                <div key={idx} className="relative pl-5">
                  {/* Node Bullet */}
                  <span
                    className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 ${
                      evt.isAi
                        ? "bg-[#881337] border-rose-300 ring-2 ring-rose-100"
                        : evt.isHuman
                          ? "bg-[#c5a059] border-amber-300 ring-2 ring-amber-100"
                          : "bg-white border-slate-400"
                    }`}
                  />

                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-xs text-[#08222F]">
                      {evt.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#64748b]">
                      · {evt.timestamp}
                    </span>
                    {evt.isAi && (
                      <span className="px-1.5 py-0.2 rounded bg-[#881337] text-white text-[9px] font-mono font-bold">
                        AI-ASSISTED EVENT
                      </span>
                    )}
                  </div>

                  {/* Detail text */}
                  <p className="text-[11px] text-[#475569] leading-relaxed font-sans">
                    {evt.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <div className="mt-4 pt-3 border-t border-[#edf2f6] text-[10px] font-mono text-[#64748b] leading-relaxed">
              Every event names its source, its actor or service identity where machine, and
              its meaning. The timeline provides chronological provenance; it is not a claim of
              legal admissibility or independent certification.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
