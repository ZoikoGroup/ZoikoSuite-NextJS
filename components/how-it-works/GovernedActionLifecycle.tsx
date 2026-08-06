"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Stage {
  number: string;
  title: string;
  description: string;
  input: string;
  output: string;
  badge?: {
    text: string;
    type: "ai" | "human" | "bounded";
  };
}

const stages: Stage[] = [
  {
    number: "Stage 01",
    title: "Capture the signal",
    description:
      "Register the trigger, source, affected object, deadline, proposed objective, and initial evidence requirement.",
    input: "Trigger or event",
    output: "Governed action record",
    badge: { text: "AI MAY ASSIST", type: "ai" },
  },
  {
    number: "Stage 02",
    title: "Establish context",
    description:
      "Resolve entity, jurisdiction, function, system, data classification, policy scope, and responsible owner.",
    input: "Action record",
    output: "Confirmed context",
    badge: { text: "AI MAY ASSIST", type: "ai" },
  },
  {
    number: "Stage 03",
    title: "Evaluate governance",
    description:
      "Identify applicable policies, obligations, authority, segregation rules, evidence requirements, and coverage limitations.",
    input: "Confirmed context",
    output: "Evaluation outcome",
    badge: { text: "AI MAY ASSIST", type: "ai" },
  },
  {
    number: "Stage 04",
    title: "Build the proposed action",
    description:
      "Present the requested action, affected records, before and after values, reason, sources, uncertainty, conflicts, and missing information.",
    input: "Evaluation outcome",
    output: "Reviewable proposal",
    badge: { text: "AI MAY ASSIST", type: "ai" },
  },
  {
    number: "Stage 05",
    title: "Route responsibility",
    description:
      "Assign preparer, owner, reviewer, approver, executor, auditor, deadline, delegation, and escalation path.",
    input: "Reviewable proposal",
    output: "Confirmed route",
    badge: { text: "HUMAN", type: "human" },
  },
  {
    number: "Stage 06",
    title: "Review and authorize",
    description:
      "Authorized people approve, reject, request evidence, edit within permission, defer, or escalate.",
    input: "Confirmed route",
    output: "Recorded decision",
    badge: { text: "HUMAN", type: "human" },
  },
  {
    number: "Stage 07",
    title: "Execute safely",
    description:
      "A permitted user or service identity performs the approved action with scopes, idempotency, validation, and reconciliation.",
    input: "Authorized version",
    output: "Execution record",
    badge: { text: "BOUNDED", type: "bounded" },
  },
  {
    number: "Stage 08",
    title: "Preserve evidence",
    description:
      "Create an attributable evidence manifest and immutable event record linking sources, decisions, actors, and outcomes.",
    input: "Execution record",
    output: "Evidence manifest",
  },
  {
    number: "Stage 09",
    title: "Monitor and improve",
    description:
      "Track obligations, exceptions, control performance, evidence health, follow-up, and approved configuration improvement.",
    input: "Evidence manifest",
    output: "Obligations & exceptions",
    badge: { text: "AI MAY ASSIST", type: "ai" },
  },
];

export default function GovernedActionLifecycle() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const getBadgeStyle = (type?: "ai" | "human" | "bounded") => {
    switch (type) {
      case "human":
        return "bg-amber-100/60 text-amber-900 border-amber-300";
      case "bounded":
        return "bg-amber-100/60 text-amber-900 border-amber-300";
      case "ai":
      default:
        return "bg-white text-[#64748b] border-[#DBE3E8]";
    }
  };

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  The Governed-Action Lifecycle
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Nine stages connect the signal, decision, action, and evidence
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Each stage names its input, the system&apos;s work, the human
                responsibility, and the output. Every stage can raise an
                exception; none of them can skip authorization.
              </p>
            </motion.div>
          </div>

          {/* Grid of 9 Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, idx) => {
              const isHighlighted = idx === 4 || idx === 5 || idx === 6; // Stage 05, 06, 07 (0-indexed: 4, 5, 6)
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05 * idx,
                    ease: "easeOut",
                  }}
                  onMouseEnter={() => setHoveredStage(idx)}
                  onMouseLeave={() => setHoveredStage(null)}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 border ${
                    isHighlighted
                      ? "bg-[#FEFCF7] border-[#c5a059] shadow-md shadow-[#c5a059]/5"
                      : "bg-white border-[#DBE3E8] shadow-xs hover:border-[#cbd5e1]"
                  }`}
                >
                  <div>
                    {/* Top Row: Stage Number & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a059]">
                        {stage.number}
                      </span>
                      {stage.badge && (
                        <span
                          className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider border ${getBadgeStyle(stage.badge.type)}`}
                        >
                          {stage.badge.text}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold tracking-tight text-[#0f172a] mb-2">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6">
                      {stage.description}
                    </p>
                  </div>

                  {/* Input / Output Section */}
                  <div className="pt-4 border-t border-[#DBE3E8] flex flex-col space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#9ba4b5] uppercase tracking-wider text-[10px] font-semibold">
                        IN
                      </span>
                      <span className="text-[#0f172a] font-medium text-right">
                        {stage.input}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#9ba4b5] uppercase tracking-wider text-[10px] font-semibold">
                        OUT
                      </span>
                      <span className="text-[#0f172a] font-medium text-right">
                        {stage.output}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
