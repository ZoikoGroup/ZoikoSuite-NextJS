"use client";

import React from "react";

interface ContractItem {
  field: string;
  badge: string;
  badgeVariant?: "blue" | "default";
  description: string;
}

const CONTRACT_ITEMS: ContractItem[] = [
  {
    field: "Customer identity",
    badge: "REQUIRED MODE",
    badgeVariant: "blue",
    description:
      "Named, or approved anonymized. Identity is never implied through context, logo shape or descriptive hints.",
  },
  {
    field: "Logo or image",
    badge: "OPTIONAL",
    badgeVariant: "default",
    description:
      "Renders only with an active right. The fallback preserves layout rather than collapsing it.",
  },
  {
    field: "Story title",
    badge: "REQUIRED",
    badgeVariant: "default",
    description:
      "No unsupported outcome claim in the title. A title cannot assert what the evidence record does not support.",
  },
  {
    field: "Context",
    badge: "REQUIRED, BOUNDED",
    badgeVariant: "blue",
    description:
      "Challenge plus organization context. Implementation scope appears only where separately approved.",
  },
  {
    field: "Outcome or lesson",
    badge: "REQUIRED",
    badgeVariant: "default",
    description:
      "Qualitative is allowed. Quantitative appears only via an approved Metric Record with full disclosure.",
  },
  {
    field: "Evidence class",
    badge: "REQUIRED FOR MATERIAL OUTCOME",
    badgeVariant: "blue",
    description: "An adjacent text label, never colour or icon alone.",
  },
  {
    field: "Period",
    badge: "REQUIRED WHERE TIME-BOUNDED",
    badgeVariant: "blue",
    description:
      'The exact approved period, or the explicit words "not publicly disclosed". Never omitted silently.',
  },
  {
    field: "Last verified",
    badge: "REQUIRED",
    badgeVariant: "default",
    description:
      "A date, or a review-due state. A story with no verification date cannot render as current.",
  },
  {
    field: "Limitations",
    badge: "REQUIRED LINK OR SUMMARY",
    badgeVariant: "blue",
    description:
      "Accessible without opening a modal where the limitation is material.",
  },
  {
    field: "Call to action",
    badge: "REQUIRED",
    badgeVariant: "default",
    description:
      '"Read story" only. Language such as "get results like this" is prohibited, because it converts evidence into a promise.',
  },
];

export default function StoryCardContractSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                STORY CARD CONTRACT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] max-w-xl font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Ten fields, and what each may not say
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Published in advance so the rules are inspectable before any story
              exists.
            </p>
          </div>
        </div>

        {/* Contract Items List */}
        <div className="flex flex-col gap-3">
          {CONTRACT_ITEMS.map((item, index) => {
            const isBlue = item.badgeVariant === "blue";
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#DBE3E8] flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                {/* Field Name */}
                <h3 className="text-sm font-bold text-[#0F172A] lg:w-1/4">
                  {item.field}
                </h3>

                {/* Badge Column */}
                <div className="lg:w-1/4 flex items-center">
                  <span
                    className="inline-flex px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                    style={{
                      backgroundColor: isBlue ? "#E8EFF4" : "#F1F5F9",
                      border: isBlue
                        ? "1px solid #B9CBD6"
                        : "1px solid #CBD5E1",
                      color: isBlue ? "#0F476A" : "#475569",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#64748B] lg:w-2/4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
