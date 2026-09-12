"use client";

import React, { useState } from "react";

interface DecisionOption {
  id: string;
  title: string;
  description: string;
}

const DECISION_OPTIONS: DecisionOption[] = [
  {
    id: "understand",
    title: "Understand ZoikoSuite",
    description: "Platform overview and category context",
  },
  {
    id: "business-case",
    title: "Build the business case",
    description: "Neutral case-building framework",
  },
  {
    id: "assess-value",
    title: "Assess value",
    description: "Value dimensions and measurement plan",
  },
  {
    id: "modernize",
    title: "Modernize operations",
    description: "Transformation and migration approach",
  },
  {
    id: "expansion",
    title: "Prepare for expansion",
    description: "Entity, jurisdiction and foundation readiness",
  },
  {
    id: "architecture",
    title: "Validate architecture & trust",
    description: "Technical and security diligence",
  },
  {
    id: "board-audit",
    title: "Prepare board / audit oversight",
    description: "Evidence, control and oversight material",
  },
  {
    id: "implementation",
    title: "Support implementation",
    description: "Documentation, training, support and status",
  },
];

export default function FindTheRightEvidenceSection() {
  const [selectedId, setSelectedId] = useState<string>("understand");

  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                FIND THE RIGHT EVIDENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Start from the decision, not the format
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Choose what you are trying to decide. The role filter narrows it
              further, and both selections are visible, reversible and shareable
              &mdash; never stored as a marketing persona.
            </p>
          </div>
        </div>

        {/* 4-Column Cards Grid (2 rows x 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {DECISION_OPTIONS.map((option) => {
            const isSelected = selectedId === option.id;
            return (
              <div
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={`rounded-[10px] p-3 border transition-all cursor-pointer flex flex-col ${
                  isSelected
                    ? "bg-[#E8EFF4] border-[#E8EFF4] shadow-md ring-1 ring-[#123B4C]"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] shadow-sm"
                }`}
              >
                <h3 className="text-sm font-bold text-[#0F172A] mb-2 leading-snug">
                  {option.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
