"use client";

import React from "react";

interface FilterItem {
  title: string;
  count: string;
}

interface FilterGroup {
  category: string;
  items: FilterItem[];
}

const FILTER_GROUPS: FilterGroup[] = [
  {
    category: "BY CHALLENGE — THE TEN APPROVED LABELS",
    items: [
      { title: "Financial Governance", count: "0 stories" },
      { title: "Global Payroll Governance", count: "# stories" },
      { title: "Cross-Border Compliance", count: "0 stories" },
      { title: "Contract Governance", count: "0 stories" },
      { title: "Audit Readiness", count: "0 stories" },
      { title: "Entity Management", count: "0 stories" },
      { title: "Regulatory Reporting", count: "0 stories" },
      { title: "Workforce Compliance", count: "0 stories" },
      { title: "Revenue Integrity", count: "0 stories" },
      { title: "Operational Risk Management", count: "0 stories" },
    ],
  },
  {
    category: "BY ROLE OR DECISION",
    items: [
      { title: "CFO / finance", count: "0 stories" },
      { title: "General Counsel / legal", count: "0 stories" },
      { title: "CHRO / people", count: "0 stories" },
      { title: "CIO / architecture", count: "0 stories" },
      { title: "Board / audit", count: "0 stories" },
      { title: "COO / operations", count: "0 stories" },
    ],
  },
  {
    category: "BY ORGANIZATION CONTEXT — APPROVED DESCRIPTORS ONLY",
    items: [
      { title: "Multi-entity group", count: "0 stories" },
      { title: "Multi-jurisdiction operator", count: "0 stories" },
      { title: "Regulated operator", count: "0 stories" },
      { title: "Shared-services organization", count: "0 stories" },
      { title: "Acquisitive group", count: "0 stories" },
      { title: "Scaling enterprise", count: "0 stories" },
    ],
  },
];

export default function ControlledTaxonomySection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                BROWSE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Controlled taxonomy, user-controlled filters
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              These are the dimensions stories will be browsable by. All filters
              are chosen by you &mdash; nothing is inferred from role, identity
              or browsing.
            </p>
          </div>
        </div>

        {/* Filter Groups */}
        <div className="flex flex-col gap-10">
          {FILTER_GROUPS.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col gap-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#5A6D79] uppercase">
                {group.category}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white rounded-xl p-4 shadow-sm flex flex-col justify-between gap-3 transition-all border border-[#DBE3E8] hover:border-[#CBD5E1]"
                  >
                    <span className="text-xs font-bold text-[#0F172A]">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
