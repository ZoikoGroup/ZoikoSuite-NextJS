"use client";

import React from "react";

interface StageItem {
  stage: string;
  title: string;
  description: string;
}

const stages: StageItem[] = [
  {
    stage: "STAGE 01",
    title: "Requirement stated",
    description:
      "Customer residency requirement mapped across architecture logic or contractual terms.",
  },
  {
    stage: "STAGE 02",
    title: "Entity & jurisdiction",
    description:
      "Which legal entities and jurisdictions the requirement governs.",
  },
  {
    stage: "STAGE 03",
    title: "Workload scope",
    description:
      "Which workloads and data classes fall inside the requirement.",
  },
  {
    stage: "STAGE 04",
    title: "Feasibility check",
    description:
      "Whether the constraint can be met in approved regions, per dimension.",
  },
  {
    stage: "STAGE 05",
    title: "Deployment selected",
    description: "Deployment model determines what is actually achievable.",
  },
  {
    stage: "STAGE 06",
    title: "Policy applied",
    description:
      "Constraint configured across storage, processing, backup and recovery.",
  },
  {
    stage: "STAGE 07",
    title: "Evidence & drift",
    description: "Configuration evidenced, with drift and exceptions tracked.",
  },
];

export default function ResidencyOperatingModel() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                RESIDENCY OPERATING MODEL
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              How a policy becomes a technical location constraint
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Residency is not a single setting. A requirement resolves through
              entity, jurisdiction, workload and data class before it produces
              an enforceable constraint.
            </p>
          </div>
        </div>

        {/* Stages Flow Grid / Flex Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2 relative">
          {stages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 border border-[#2A6386] border-t-3 border-t-[#2A6386] shadow-sm flex flex-col relative"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#6A5620] uppercase block mb-2">
                  {item.stage}
                </span>
                <h3 className="text-xs font-bold text-[#111827] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[10.5px] text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
