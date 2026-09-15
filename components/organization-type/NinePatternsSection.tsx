"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PatternItem {
  id: string;
  patternNumber: string;
  title: string;
  description: string;
}

const PATTERNS: PatternItem[] = [
  {
    id: "pattern-1",
    patternNumber: "PATTERN 01",
    title: "Growing Companies",
    description:
      "Scaling governance as roles, approvals and evidence outgrow informal process.",
  },
  {
    id: "pattern-2",
    patternNumber: "PATTERN 02",
    title: "Mid-Market Enterprises",
    description:
      "Standardizing complexity across cross-functional process and delegated authority.",
  },
  {
    id: "pattern-3",
    patternNumber: "PATTERN 03",
    title: "Global Enterprises",
    description:
      "Cross-border coordination across entity, jurisdiction and deployment scope.",
  },
  {
    id: "pattern-4",
    patternNumber: "PATTERN 04",
    title: "Multi-Entity Groups",
    description:
      "Entity accountability with scoped governance, shared services and reconciliation.",
  },
  {
    id: "pattern-5",
    patternNumber: "PATTERN 05",
    title: "Regulated Organizations",
    description:
      "Control and evidence visibility with coverage, source and review state.",
  },
  {
    id: "pattern-6",
    patternNumber: "PATTERN 06",
    title: "Public Companies",
    description:
      "Oversight and internal-control context with role separation and read-only review.",
  },
  {
    id: "pattern-7",
    patternNumber: "PATTERN 07",
    title: "Public-Sector Organizations",
    description:
      "Public accountability diligence across accessibility, security, deployment and data.",
  },
  {
    id: "pattern-8",
    patternNumber: "PATTERN 08",
    title: "Nonprofit Organizations",
    description:
      "Stewardship and accountability with delegation, approvals and board oversight.",
  },
  {
    id: "pattern-9",
    patternNumber: "PATTERN 09",
    title: "Professional Partnerships",
    description:
      "Partner-led authority across practice units, contracts, finance and workforce handoffs.",
  },
];

export default function NinePatternsSection() {
  const [selectedId, setSelectedId] = useState<string>("pattern-4");

  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                ORGANIZATION PATTERNS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Nine patterns, one shared fit contract
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Select a pattern to read its fit contract, or add up to three to
              the comparison. Nothing is preselected, and your selection stays
              local to this session.
            </p>
          </div>
        </div>

        {/* 3x3 Grid of Patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PATTERNS.map((pattern) => {
            const isSelected = selectedId === pattern.id;
            return (
              <div
                key={pattern.id}
                onClick={() => setSelectedId(pattern.id)}
                className={`p-5 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#E8EFF4] border-[#0F476A] shadow-sm"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] shadow-sm"
                }`}
                style={{
                  borderRadius: "11px",
                  borderWidth: isSelected ? "1px" : "1px",
                  borderColor: isSelected ? "#0F476A" : "#E2E8F0",
                }}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase block mb-1">
                    {pattern.patternNumber}
                  </span>
                  <h3 className="text-sm font-bold text-[#0F172A] mb-2 leading-snug">
                    {pattern.title}
                  </h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Graphic / Illustration */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden mt-4">
          <Image
            src="/organization/2.png"
            alt="Nine patterns shared fit contract visual interface"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
