"use client";

import React, { useState } from "react";

interface StageItem {
  stageNumber: string;
  title: string;
  description: string;
}

const STAGES: StageItem[] = [
  {
    stageNumber: "STAGE 01",
    title: "Qualify",
    description:
      "Scope, decision team, requirements, assumptions, unavailable claims, information needed.",
  },
  {
    stageNumber: "STAGE 02",
    title: "Discover",
    description:
      "Systems, data, entities, jurisdictions, policies, integrations, security, operations, support, constraints.",
  },
  {
    stageNumber: "STAGE 03",
    title: "Architecture",
    description:
      "Pattern, boundaries, data flow, identity, network, keys, responsibility, dependencies, exceptions.",
  },
  {
    stageNumber: "STAGE 04",
    title: "Contract and control review",
    description:
      "Availability, commitments, DPA and subprocessors, support, change, exit, evidence, professional review.",
  },
  {
    stageNumber: "STAGE 05",
    title: "Build nonproduction",
    description:
      "Provision and configure the approved environment and integrations; create a baseline and evidence.",
  },
  {
    stageNumber: "STAGE 06",
    title: "Validate",
    description:
      "Functional, security, privacy, accessibility, performance, backup and restore, recovery, monitoring, support.",
  },
  {
    stageNumber: "STAGE 07",
    title: "Shadow Mode",
    description:
      "Compare workflows and policy outcomes against current operation without authorizing production actions.",
  },
  {
    stageNumber: "STAGE 08",
    title: "Acceptance",
    description:
      "Evidence review, gate approval, exceptions, rollback plan, and named sign-off per domain.",
  },
  {
    stageNumber: "STAGE 09",
    title: "Cutover",
    description:
      "Freeze rules, migration, reconciliation, communication, support cover, rollback authority.",
  },
  {
    stageNumber: "STAGE 10",
    title: "Operate and hand over",
    description:
      "Monitoring, exception resolution, evidence confirmation, ownership transition, change enrolment.",
  },
];

export default function ImplementationLifecycleSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                IMPLEMENTATION AND ACCEPTANCE LIFECYCLE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
              Ten stages from qualification to operational handover
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Select a stage to see its artifacts, decision owner, and exit
              criteria. Acceptance is evidence-based, not date-based.
            </p>
          </div>
        </div>

        {/* Grid of 10 Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STAGES.map((stage, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`bg-white rounded-2xl p-5 flex flex-col justify-between gap-4 shadow-sm cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-2 border-[#0F476A] shadow-md"
                    : "border border-[#DBE3E8]"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono font-bold text-[#A07A2E] tracking-widest">
                    {stage.stageNumber}
                  </span>
                  <h3 className="text-sm font-bold text-[#0F172A] leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {stage.description}
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
