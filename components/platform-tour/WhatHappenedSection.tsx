"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  time: string;
  step: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "09:41",
    step: "STOP 1-2",
    title: "Detected and contextualised",
    description:
      "A supplier bank detail change arrived from a generic payable ledger and was linked to the operating entity, jurisdiction and approver.",
  },
  {
    time: "09:43",
    step: "STOP 3",
    title: "Policy evaluated",
    description:
      "Three distinct policies applied: POL-201-B (material bank detail change), delegated authority limit, and policies on automated operation approval thresholds.",
  },
  {
    time: "09:47",
    step: "STOP 4",
    title: "Responsibility routed",
    description:
      "Four separate profiles assigned: preparer, reviewer, approver, and executor. The preparer identity must not match the reviewer or final approval signer.",
  },
  {
    time: "09:54",
    step: "STOP 5",
    title: "AI-supported finding produced",
    description:
      "Reasoned that transaction alert on residual attachments was present, class match verify ok, confidence was marked low so audit could proceed.",
  },
  {
    time: "10:12",
    step: "STOP 6",
    title: "Human review opened",
    description:
      "Confirmation checklist items unanswered. Approver review remainder lists two non-permitted markers, both execution signers.",
  },
  {
    time: "10:29",
    step: "STOP 7",
    title: "Evidence requested",
    description:
      "Bank step request proof from the originator with confirmation signs. The decision was recorded separately from the AI finding.",
  },
  {
    time: "10:35",
    step: "STOP 8",
    title: "Created in assurance layering",
    description:
      "ACT-001 is placed into synthetic mock registers to ensure synthetic data cannot spill to production/export.",
  },
  {
    time: "11:00",
    step: "STOP 9-12",
    title: "Approval, execution and event conclusion",
    description:
      "No automated release of ACT-001 was committed; systems and map state remained safely at rest.",
  },
];

export default function WhatHappenedSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-24 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                SCENARIO RECAP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.12]">
              What happened to ACT-001
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#9ba4b5] text-[13.5px] sm:text-sm leading-relaxed max-w-[460px]">
              The action is still awaiting evidence. That is the honest end state
              of this example, and the recap does not invent a completion.
            </p>
          </div>
        </div>

        {/* Timeline Events List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#1e3a50] space-y-10 max-w-[820px]">
          {timelineEvents.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              className="relative flex flex-col items-start"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-2.5 h-2.5 rounded-full bg-[#38bdf8] ring-4 ring-[#08222F]" />

              {/* Time & Step indicator pill/text */}
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs font-mono text-[#5a8099] font-medium">
                  {item.time}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#38bdf8] font-semibold">
                  {item.step}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[17px] font-semibold text-white tracking-tight mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#8ba2b1] text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
