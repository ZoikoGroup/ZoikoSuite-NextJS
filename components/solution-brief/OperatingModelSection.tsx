"use client";

import React from "react";

interface OperatingStep {
  stepNumber: string;
  title: string;
  description: string;
  footer: string;
  highlighted?: boolean;
}

const OPERATING_STEPS: OperatingStep[] = [
  {
    stepNumber: "STEP 01",
    title: "Context",
    description:
      "Wrong context produces a correct-looking decision about the wrong thing.",
    footer: "SOURCE: CUSTOMER SYSTEMS",
  },
  {
    stepNumber: "STEP 02",
    title: "Policy / obligation",
    description:
      "A rule nobody evaluated at decision time is documentation, not control.",
    footer: "SOURCE: POLICY REGISTER",
  },
  {
    stepNumber: "STEP 03",
    title: "Authority",
    description:
      "Job title is not delegation. Limits and conflicts must be visible first.",
    footer: "SOURCE: DELEGATION SCHEDULE",
  },
  {
    stepNumber: "STEP 04",
    title: "Human decision",
    description: "Material approval stays accountable to an authorized person.",
    footer: "OWNER: NAMED HUMAN",
    highlighted: true,
  },
  {
    stepNumber: "STEP 05",
    title: "Execution / handoff",
    description:
      "Action occurs only in the approved system and scope — often not here.",
    footer: "OWNER: EXECUTION SYSTEM",
  },
  {
    stepNumber: "STEP 06",
    title: "Evidence",
    description:
      "If it cannot be reconstructed later, it did not happen for audit purposes.",
    footer: "OWNER: ZOIKOSUITE",
  },
  {
    stepNumber: "STEP 07",
    title: "Exception",
    description:
      "Missing evidence, conflict, stale source or failure is visible and routed.",
    footer: "OWNER: CONTROL OWNER",
  },
  {
    stepNumber: "STEP 08",
    title: "Intelligence",
    description:
      "Attention and trends support improvement without becoming authority.",
    footer: "NEVER AN APPROVER",
  },
];

export default function OperatingModelSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                CHAPTER 3 • OPERATING MODEL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Eight steps, one of them human by design
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The category problem is that execution and governance usually run
              in separate systems. This sequence is how they are held together.
            </p>
          </div>
        </div>

        {/* 8-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {OPERATING_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-3 border flex flex-col transition-all ${
                step.highlighted
                  ? "bg-white border-[#0F476A] border-t-[3px] shadow-md"
                  : "bg-white border-[#E2E8F0] shadow-sm"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase block mb-2">
                  {step.stepNumber}
                </span>
                <h3 className="text-xs font-bold text-[#0F172A] mb-2">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#64748B] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-dashed border-[#E2E8F0]">
                <span className="text-[9px] font-mono font-bold tracking-wider text-[#475569] uppercase block">
                  {step.footer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
