"use client";

import React from "react";

interface AssessmentItem {
  title: string;
  description: string;
  quote: string;
}

const ASSESSMENT_ITEMS: AssessmentItem[] = [
  {
    title: "Decision speed and clarity",
    description:
      "How long a material decision takes, and how often it stalls for missing context, authority or evidence.",
    quote:
      "How many approvals are currently waiting on something nobody has named?",
  },
  {
    title: "Control reliability",
    description:
      "Whether controls can be shown to have operated on specific decisions, rather than existing on paper.",
    quote: "Could you evidence a specific approval from six months ago?",
  },
  {
    title: "Evidence effort",
    description:
      "Effort currently spent assembling evidence retrospectively for audits, reviews and regulator queries.",
    quote: "How much of your audit cycle is reconstruction?",
  },
  {
    title: "Exception and rework burden",
    description:
      "Volume, recurrence and ownership of exceptions, and the rework they generate downstream.",
    quote: "Which exception category keeps recurring, and who owns it?",
  },
  {
    title: "Operating resilience at scale",
    description:
      "How the operating model holds up as entities, jurisdictions and volumes grow.",
    quote: "What breaks first when you add an entity?",
  },
  {
    title: "Accountability clarity",
    description:
      "Whether owners, reviewers, approvers and executors are explicit rather than assumed.",
    quote: "Who is permitted to approve this, under whose delegation?",
  },
];

export default function ValueAssessmentSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                VALUE ASSESSMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Qualitative, because no numeric method is approved
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              There is no calculator on this page. A numeric assessment requires
              an approved method version, source, owner, formulas and
              sensitivity model &mdash; none of which exists yet.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {ASSESSMENT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-[#2A6386] border-t-[3px] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-dashed border-[#E2E8F0]">
                  <p className="text-xs italic text-[#64748B]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
