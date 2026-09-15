"use client";

import React from "react";

interface BlockItem {
  number: string;
  title: string;
  description: string;
}

const BLOCKS: BlockItem[] = [
  {
    number: "01",
    title: "Header",
    description:
      "Approved identity or anonymity, title, summary, publication and update and verification dates, and the proof-status bar.",
  },
  {
    number: "02",
    title: "Customer context",
    description:
      "Organization pattern, approved region and scale descriptors, operating scope and starting condition.",
  },
  {
    number: "03",
    title: "Challenge",
    description:
      "The specific bounded challenge, and why it mattered to that organization.",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "ZoikoSuite scope, source-of-record and coexistence position, migration and integration, governance, human roles, and rollout only as evidenced.",
  },
  {
    number: "05",
    title: "Outcomes",
    description:
      "Approved qualitative and quantitative outcomes, each traced internally to a claim record.",
  },
  {
    number: "06",
    title: "Evidence",
    description:
      "Evidence class, period, source description, method and limitations — adjacent to the outcomes above.",
  },
  {
    number: "07",
    title: "Customer voice",
    description:
      "Approved quote or media, with active rights and an accessible alternative.",
  },
  {
    number: "08",
    title: "Lessons",
    description:
      "What the customer and implementation team learned — never framed as a universal prescription.",
  },
  {
    number: "09",
    title: "Limitations",
    description:
      "Explicit non-generalization, excluded scope, and the professional and product boundaries that apply.",
  },
  {
    number: "10",
    title: "Current authority",
    description:
      "Links to current product, Trust, Documentation, Platform and solution pages — which supersede the story's history.",
  },
  {
    number: "11",
    title: "Continue",
    description:
      "Related stories and resources, then existing-customer routes, and only then a commercial call to action. One contextual CTA after substantive proof or at the end — never repeated after every section.",
  },
];

export default function StoryDetailTemplateSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                STORY DETAIL TEMPLATE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Eleven blocks, in fixed order
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Limitations sit before the commercial route, never after it.
              Evidence sits immediately after the outcomes it supports.
            </p>
          </div>
        </div>

        {/* Blocks Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BLOCKS.map((block, index) => {
            const isFullWidth = index === BLOCKS.length - 1;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-[#DBE3E8] flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                {/* Number Badge */}
                <div
                  className="px-2.5 py-1 text-white font-mono font-bold text-xs shrink-0"
                  style={{
                    backgroundColor: "#0F476A",
                    borderRadius: "5px",
                  }}
                >
                  {block.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {block.description}
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
