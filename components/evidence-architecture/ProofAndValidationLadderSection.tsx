"use client";

import React from "react";

interface LadderItem {
  title: string;
  description: string;
  badge: string;
  badgeType?: "default" | "muted" | "warning";
}

const ladderData: LadderItem[] = [
  {
    title: "Architecture proof",
    description:
      "The published six-layer model, integrity vocabulary and manifest logic — inspectable on this page without a conversation.",
    badge: "PUBLIC",
    badgeType: "default",
  },
  {
    title: "Product proof",
    description:
      "Annotated registry and manifest interfaces with synthetic data, including qualified and missing states.",
    badge: "PUBLIC",
    badgeType: "default",
  },
  {
    title: "Validation status",
    description:
      "Per-layer claim states: current architecture, phased delivery, by workflow, implementation status required.",
    badge: "PUBLIC PER LAYER",
    badgeType: "default",
  },
  {
    title: "Customer proof",
    description:
      "Approved customer evidence with scope, period and limitations.",
    badge: "NONE APPROVED",
    badgeType: "muted",
  },
  {
    title: "Independent verification",
    description:
      "Third-party attestation that the evidence model operates as described, for a stated scope and period.",
    badge: "NOT AVAILABLE",
    badgeType: "muted",
  },
];

export default function ProofAndValidationLadderSection() {
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
                PROOF AND VALIDATION LADDER
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Five rungs, kept separate
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Architecture proof, product proof, validation status, customer
              proof and independent proof answer different questions and carry
              different weight.
            </p>
          </div>
        </div>

        {/* List of Ladder Rungs */}
        <div className="space-y-3">
          {ladderData.map((item, index) => {
            let badgeStyle = "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]";
            if (item.badgeType === "muted") {
              badgeStyle = "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
            }

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
                  <h3 className="text-sm font-bold text-[#111827] min-w-[180px]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 flex justify-end">
                  <span
                    className={`inline-block px-3 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${badgeStyle}`}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
