"use client";

import React from "react";

interface EvidenceStateItem {
  title: string;
  description: string;
  borderColor?: string;
  titleColor?: string;
}

const evidenceStatesData: EvidenceStateItem[] = [
  {
    title: "Missing",
    description:
      "A required item does not exist. Shown as missing with the requirement named — never replaced by a generic trust claim.",
    borderColor: "border-l-4 border-l-[#991B1B]",
    titleColor: "text-[#991B1B]",
  },
  {
    title: "Stale",
    description:
      "Integrity or freshness not confirmed within the review period. Flagged in place rather than silently accepted.",
    borderColor: "border-l-4 border-l-[#B45309]",
    titleColor: "text-[#111827]",
  },
  {
    title: "External / referenced",
    description:
      "Evidence lives in another system under separate custody. Referenced, never counted as held.",
    borderColor: "border-l-4 border-l-[#B45309]",
    titleColor: "text-[#111827]",
  },
  {
    title: "Partial",
    description:
      "Some required items present, others absent. Completeness states the ratio rather than rounding to complete.",
    borderColor: "border-l-4 border-l-[#D97706]",
    titleColor: "text-[#111827]",
  },
  {
    title: "Unsupported",
    description:
      "The evidence type cannot currently be produced for the requested scope. Said directly, with an architecture route where one exists.",
    borderColor: "border-l-4 border-l-[#991B1B]",
    titleColor: "text-[#991B1B]",
  },
  {
    title: "Excluded by policy",
    description:
      "Restricted-class content withheld under access or classification rules, with the exclusion stated in the manifest.",
    borderColor: "border-l-4 border-l-[#A16207]",
    titleColor: "text-[#111827]",
  },
];

export default function EvidenceStatesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                EVIDENCE QUALITY, GAPS AND EXCEPTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Six states that must stay visible
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Missing, stale, external, partial and unsupported are all real
              answers. Hiding any of them makes the whole surface untrustworthy.
            </p>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {evidenceStatesData.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 border border-[#E5E7EB] shadow-sm flex flex-col justify-between ${
                item.borderColor || ""
              }`}
            >
              <div>
                <h3
                  className={`text-base font-bold mb-2 ${
                    item.titleColor || "text-[#111827]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#4B5563] leading-relaxed">
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
