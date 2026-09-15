"use client";

import React from "react";

interface PathItem {
  title: string;
  description: string;
  isTransparent?: boolean;
}

const PATHS: PathItem[] = [
  {
    title: "Replace fragmented ERP and HCM stacks",
    description:
      "Several overlapping systems each hold part of the truth, and nobody can say which one governs a given decision.",
  },
  {
    title: "Consolidate business systems",
    description:
      "Too many interfaces and handoffs for the same process, with reconciliation done by hand at each boundary.",
  },
  {
    title: "Move from manual to governed operations",
    description:
      "Approvals live in email and spreadsheets, so evidence is assembled retrospectively under deadline pressure.",
  },
  {
    title: "Strengthen internal controls",
    description:
      "Controls exist on paper but cannot be shown to have operated on a specific decision.",
  },
  {
    title: "Modernize finance operations",
    description:
      "Close depends on manual reconciliation, and approval authority for material finance actions is unclear.",
  },
  {
    title: "Transform payroll and HR",
    description:
      "Workforce processes span several systems with unclear jurisdiction handling and no evidence trail.",
  },
  {
    title: "Establish continuous audit readiness",
    description:
      "Every audit cycle becomes a reconstruction exercise across systems and memory.",
  },
  {
    title: "Govern AI-assisted operations",
    description:
      "AI is already in use somewhere in the operating process, with no record of what it saw or who decided.",
  },
  {
    title: "Expansion readiness",
    description:
      "Entering a new market or adding an entity raises questions this page can only partly answer.",
    isTransparent: true,
  },
];

export default function TransformationPathsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                TRANSFORMATION PATHS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Nine paths, each with its publication state
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              A path links out only where the Route Registry has approved a
              public route. None currently is, so each offers a scope
              conversation rather than a link that would not resolve.
            </p>
          </div>
        </div>

        {/* 9 Cards Grid (3 rows x 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATHS.map((item, index) => {
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all ${
                  item.isTransparent
                    ? "bg-transparent border border-dashed border-[#CBD5E1]"
                    : "bg-white border border-[#E2E8F0]"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-bold text-[#0F172A]"
                    style={{ fontSize: "15px" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#475569] leading-relaxed"
                    style={{ fontSize: "14px" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
