"use client";

import React from "react";

interface ResourceItem {
  title: string;
  badge: {
    text: string;
    type: "red" | "yellow";
  };
  description: string;
  selected?: boolean;
}

const LEFT_COLUMN_RESOURCES: ResourceItem[] = [
  {
    title: "Executive Briefs",
    badge: { text: "NO PUBLISHED ASSET", type: "red" },
    description:
      "Decision-oriented resources. Only published assets render; none is currently approved.",
  },
  {
    title: "General Counsel Resources",
    badge: { text: "NO PUBLISHED ASSET", type: "red" },
    description:
      "Legal and governance path. Routes to the published General Counsel solution page.",
  },
  {
    title: "CIO Resources",
    badge: { text: "NO PUBLISHED ASSET", type: "red" },
    description:
      "Architecture, security, data and integration path. Routes to Platform Foundation.",
  },
  {
    title: "Business Case Templates",
    badge: { text: "FRAMEWORK ON THIS PAGE", type: "yellow" },
    description:
      "Neutral structured case-building resource with no default outcome. The ten-step framework is published below; the downloadable template is not yet approved.",
    selected: true,
  },
];

const RIGHT_COLUMN_RESOURCES: ResourceItem[] = [
  {
    title: "CFO Resources",
    badge: { text: "NO PUBLISHED ASSET", type: "red" },
    description:
      "Finance and governance path. Routes to the published CFO solution page in the meantime.",
  },
  {
    title: "CHRO Resources",
    badge: { text: "NO PUBLISHED ASSET", type: "red" },
    description:
      "Workforce and payroll governance path. No published role destination exists yet.",
  },
  {
    title: "Board and Audit Committee Resources",
    badge: { text: "NO PUBLISHED ASSET", type: "red" },
    description:
      "Oversight, evidence and control path. Routes to the oversight sections of published pages.",
  },
  {
    title: "ROI and Value Assessment",
    badge: { text: "QUALITATIVE ONLY", type: "yellow" },
    description:
      "No approved numeric methodology exists, so the qualitative dimensions and measurement-plan framework are shown instead of a calculator.",
    selected: true,
  },
];

export default function ResourceTaxonomySection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                RESOURCE TAXONOMY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Eight canonical classes, each with a publication state
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              These are the classes the registry recognizes. A class appearing
              here is not evidence that any asset within it is currently
              published.
            </p>
          </div>
        </div>

        {/* 2-Column Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {LEFT_COLUMN_RESOURCES.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  item.selected
                    ? "bg-white border-[#0F476A] shadow-sm ring-1 ring-[#D0AA55]/30"
                    : "bg-white border-[#E2E8F0] shadow-sm"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-base font-bold text-[#0F172A]">
                      {item.title}
                    </h3>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase ${
                        item.badge.type === "red"
                          ? "bg-[#F9EDED] text-[#8A3B3B]"
                          : "bg-[#F6EDD9] text-[#A07A2E]"
                      }`}
                    >
                      {item.badge.text}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {RIGHT_COLUMN_RESOURCES.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  item.selected
                    ? "bg-white border-[#0F476A] shadow-sm ring-1 ring-[#D0AA55]/30"
                    : "bg-white border-[#E2E8F0] shadow-sm"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-base font-bold text-[#0F172A]">
                      {item.title}
                    </h3>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase ${
                        item.badge.type === "red"
                          ? "bg-[#F9EDED] text-[#8A3B3B]"
                          : "bg-[#F6EDD9] text-[#A07A2E]"
                      }`}
                    >
                      {item.badge.text}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
