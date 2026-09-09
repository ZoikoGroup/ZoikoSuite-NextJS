"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LifecycleStage {
  step: string;
  title: string;
  description: string;
  footer: string;
  isDark?: boolean;
  isWarning?: boolean;
}

const lifecycleStages: LifecycleStage[] = [
  {
    step: "STAGE 01",
    title: "New",
    description: "Not yet acknowledged by the responsible workflow.",
    footer: "Open · assign or route if permitted · acknowledge",
  },
  {
    step: "STAGE 02",
    title: "Acknowledged",
    description: "Responsible user or team has seen the item.",
    footer: "Begin review · request context or evidence",
  },
  {
    step: "STAGE 03",
    title: "In review",
    description: "Active investigation or review is underway.",
    footer: "Add review note or evidence · state readiness/approval",
  },
  {
    step: "STAGE 04",
    title: "Waiting",
    description: "Blocked on review, evidence, source or external dependency.",
    footer: "State waiting reason with due and escalation context",
  },
  {
    step: "STAGE 05",
    title: "Escalated",
    description: "Requires higher authority, specialized review or an exception path.",
    footer: "Show escalation target, reason and status",
  },
  {
    step: "STAGE 06",
    title: "Resolved",
    description: "Confirmed review or action is complete.",
    footer: "Show outcome and timeline · retain evidence in ledger",
  },
  {
    step: "STAGE 07 · OPTIONAL",
    title: "Dismissed / no-action",
    description: "Available only where policy has approved the route.",
    footer: "Requires a reason · preserve the decision record",
    isWarning: true,
  },
  {
    step: "FINAL",
    title: "No silent dismissal",
    description:
      "Dismissal requires an approved reason and audit connection. An item cannot leave the queue without a record.",
    footer: "",
    isDark: true,
  },
];

const priorityFactors = [
  "1. Priority plus plain-language priority reason",
  "2. Business object or signal",
  "3. Entity and jurisdiction",
  "4. Due date and age",
  "5. Owner or responsible role",
  "6. Evidence state",
  "7. Source and freshness",
  "8. Lifecycle status",
  "9. Primary permitted next action",
];

export default function ExplainablePrioritySection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 lg:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 lg:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                PRIORITY AND ATTENTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.12]">
              Explainable priority and a
              <br />
              defined lifecycle
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Every priority label exposes its contributing factors. Due date and
              age are always separate values, never collapsed into one
              ambiguous number.
            </p>
          </div>
        </div>

        {/* 8 Lifecycle Stages Grid (2 cols on mobile, 4 cols on desktop) */}
        <div className="mb-12 lg:mb-14">
          <div className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.15em] text-[#8fa4b2] uppercase mb-4">
            ATTENTION ITEM LIFECYCLE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {lifecycleStages.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: "easeOut" }}
                className={`rounded-xl border p-4 sm:p-5 flex flex-col justify-between shadow-xs ${
                  card.isDark
                    ? "bg-[#08222F] text-white border-[#1a3a4f]"
                    : card.isWarning
                      ? "bg-[#fdfaf4] border-[#e8ce93]"
                      : "bg-white border-[#d6e2e9]"
                }`}
              >
                <div>
                  <span
                    className={`text-[9.5px] font-mono font-bold tracking-[0.14em] uppercase block mb-1 ${
                      card.isDark
                        ? "text-[#4ba2d2]"
                        : card.isWarning
                          ? "text-[#a06810]"
                          : "text-[#a06810]"
                    }`}
                  >
                    {card.step}
                  </span>
                  <h3
                    className={`text-[15px] font-bold tracking-tight mb-2 ${
                      card.isDark ? "text-white" : "text-[#08222F]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      card.isDark ? "text-[#9ba4b5]" : "text-[#64748b]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {card.footer && (
                  <div
                    className={`pt-2.5 border-t text-[10px] sm:text-[10.5px] font-mono ${
                      card.isDark
                        ? "border-[#1a3a4f] text-[#8ea7b7]"
                        : "border-[#edf2f6] text-[#788e9d]"
                    }`}
                  >
                    {card.footer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lower Row: Factors List (Left) + Desktop Image OR Mobile Attention Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Column: 9 Factors List */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8fa4b2] uppercase block mb-3">
              MOBILE ATTENTION CUES — MANDATORY HIERARCHY
            </span>
            <ul className="flex flex-col gap-1.5 text-xs sm:text-[12.5px] text-[#4a5e6d] mb-4">
              {priorityFactors.map((factor, idx) => (
                <li key={idx} className="leading-snug">
                  {factor}
                </li>
              ))}
            </ul>
            <p className="text-[10.5px] text-[#8fa4b2] leading-relaxed italic">
              Nine distinct items. Collapsing any two attributes into a single human-measure introduces hidden rule-maker or model bias.
            </p>
          </div>

          {/* Right Column (DESKTOP): 3D Stepper Graphic (pi3.png) */}
          <div className="hidden lg:flex lg:col-span-6 justify-end">
            <div className="w-full max-w-[540px] rounded-2xl overflow-hidden shadow-md border border-[#d6e2e9] bg-[#fafcfe]">
              <Image
                src="/operating-intelligence/pi3.png"
                alt="Explainable priority review lifecycle pipeline illustration"
                width={800}
                height={500}
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Right Column (MOBILE): Attention Card Mobile Screenplay at Desktop Scale */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:hidden w-full rounded-2xl overflow-hidden border border-[#1b3a4f] bg-white shadow-xl flex flex-col"
          >
            {/* Dark Top Terminal Bar */}
            <div className="bg-[#0B1E2B] px-4 py-3 flex items-center justify-between text-white">
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
                ATTENTION CARD · MOBILE SCREENPLAY AT DESKTOP SCALE
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1b3a4f]" />
                <span className="w-2 h-2 rounded-full bg-[#1b3a4f]" />
                <span className="w-2 h-2 rounded-full bg-[#1b3a4f]" />
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="p-4 sm:p-5 flex flex-col space-y-3 text-xs">
              {/* Top Row: Priority Badge + Reason */}
              <div className="flex items-center gap-2 pb-2 border-b border-[#f1f5f9]">
                <span className="px-2 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[10px] font-mono font-bold uppercase">
                  • CRITICAL
                </span>
                <span className="font-mono text-[10.5px] font-bold text-[#64748b] uppercase">
                  BLOCKING POLICY STALE
                </span>
              </div>

              {/* Data Rows */}
              <div className="space-y-1.5 text-[11.5px]">
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-3 font-mono text-[#8fa4b2] text-[10px] uppercase">Object</span>
                  <span className="col-span-9 font-semibold text-[#08222F]">Vendor bank-detail change · VEN-4471</span>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-3 font-mono text-[#8fa4b2] text-[10px] uppercase">Entity</span>
                  <span className="col-span-9 text-[#334155]">Zoiko Inc · United States</span>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-3 font-mono text-[#8fa4b2] text-[10px] uppercase">Due</span>
                  <span className="col-span-9 font-mono text-[#334155]">08 Aug 17:00</span>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-3 font-mono text-[#8fa4b2] text-[10px] uppercase">Age</span>
                  <span className="col-span-9 font-mono text-[#334155]">2 days</span>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-3 font-mono text-[#8fa4b2] text-[10px] uppercase">Owner</span>
                  <span className="col-span-9 text-[#334155]">H. Vance · Treasury Director</span>
                </div>
                <div className="grid grid-cols-12 gap-2 items-center">
                  <span className="col-span-3 font-mono text-[#8fa4b2] text-[10px] uppercase">Evidence</span>
                  <div className="col-span-9">
                    <span className="inline-block px-2 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[9.5px] font-mono font-bold">
                      2 OF 3 ITEMS · 1 DUAL-BANK VERIFICATION
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 items-center">
                  <span className="col-span-3 font-mono text-[#8fa4b2] text-[10px] uppercase">Source</span>
                  <div className="col-span-9 flex items-center gap-1.5">
                    <span className="text-[#334155]">AP-ledger</span>
                    <span className="px-1.5 py-0.5 rounded border border-emerald-300 text-emerald-700 bg-emerald-50 text-[9px] font-mono font-bold">
                      • CURRENT
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 items-center">
                  <span className="col-span-3 font-mono text-[#8fa4b2] text-[10px] uppercase">Lifecycle</span>
                  <div className="col-span-9">
                    <span className="px-2 py-0.5 rounded border border-blue-300 text-blue-700 bg-blue-50 text-[9.5px] font-mono font-bold">
                      • IN REVIEW
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#f1f5f9]">
                <button className="px-3.5 py-1.5 rounded bg-[#08222F] text-white text-xs font-medium hover:bg-[#12394f] transition-colors">
                  Review
                </button>
                <button className="px-3.5 py-1.5 rounded border border-[#cbd5e1] bg-white text-[#475569] text-xs font-medium hover:bg-[#f8fafc] transition-colors">
                  VP-escalated
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
