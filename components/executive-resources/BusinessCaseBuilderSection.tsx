"use client";

import React from "react";

interface StepItem {
  number: string;
  title: string;
  description: React.ReactNode;
  highlighted?: boolean;
}

const BUSINESS_CASE_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Baseline",
    description:
      "Processes, systems, entities, jurisdictions, roles, handoffs, exceptions, evidence effort, and integration and maintenance effort. Entirely user-controlled.",
  },
  {
    number: "02",
    title: "Decision problem",
    description:
      "The problem, its supporting evidence and source, the affected stakeholders, and the current consequence of leaving it unaddressed.",
  },
  {
    number: "03",
    title: "Target operating model",
    description:
      "Desired outcomes, the target-state pattern, scope boundaries, and explicitly what remains authoritative in your existing systems.",
  },
  {
    number: "04",
    title: "Value hypotheses",
    description: (
      <>
        You select which dimensions are measurable in your environment. No{" "}
        <span className="font-semibold text-[#0F172A]">
          &quot;savings&quot;
        </span>{" "}
        dimension is preselected, and none is weighted by default.
      </>
    ),
    highlighted: true,
  },
  {
    number: "05",
    title: "Metrics",
    description:
      "Each metric requires a definition, a baseline, a source, an owner, a target or threshold, a time period and a caveat. A metric without a source is not a metric.",
    highlighted: true,
  },
  {
    number: "06",
    title: "Costs and dependencies",
    description:
      "Your assumptions for implementation, integration, migration, change management, security and privacy review, and professional review.",
  },
  {
    number: "07",
    title: "Alternatives",
    description:
      "Status quo, process-only improvement, point solution, coexistence, selected replacement, or another option you define. Status quo is a legitimate outcome.",
  },
  {
    number: "08",
    title: "Risks",
    description:
      "Data, integration, migration, governance, availability and adoption risks, plus professional and regulatory dependencies.",
  },
  {
    number: "09",
    title: "Governance",
    description:
      "Sponsor, reviewer, decision maker, approval criteria and the evidence your approval body will require.",
  },
  {
    number: "10",
    title: "Decision record",
    description: (
      <>
        Export or print carrying your assumptions, sources, open questions and
        next step. No automatic{" "}
        <span className="font-semibold text-[#0F172A]">&quot;buy&quot;</span>{" "}
        recommendation is generated, and no vendor conclusion is appended.
      </>
    ),
    highlighted: true,
  },
];

export default function BusinessCaseBuilderSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                BUSINESS CASE BUILDER
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl max-w-xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15]">
              Ten steps, no preselected savings
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Every input is yours. The framework asks the questions an
              enterprise approval body will ask, and it never fills in a value
              hypothesis on your behalf.
            </p>
          </div>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-3">
          {BUSINESS_CASE_STEPS.map((step) => (
            <div
              key={step.number}
              className={`rounded-2xl px-6 py-4 border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
                step.highlighted
                  ? "bg-white border-[#D0AA55] shadow-md ring-1 ring-[#D0AA55]/30 text-[#0F172A]"
                  : "bg-white border-transparent text-[#0F172A] shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4 min-w-[220px]">
                <span className="px-2.5 py-1 rounded-lg bg-[#0F476A] text-white text-xs font-mono font-bold tracking-wider">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {step.title}
                </h3>
              </div>

              <div className="flex-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
