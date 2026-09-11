"use client";

import React from "react";

interface FitCard {
  title: string;
  description: string;
  status: "PUBLISHED" | "NO PUBLISHED ROUTE";
  highlighted?: boolean;
}

const FIT_CARDS: FitCard[] = [
  {
    title: "Leadership Teams",
    description: "Cross-functional decision context",
    status: "PUBLISHED",
    highlighted: true,
  },
  {
    title: "CFOs",
    description: "Finance governance and controls",
    status: "PUBLISHED",
    highlighted: true,
  },
  {
    title: "General Counsel",
    description: "Obligations, authority and evidence",
    status: "PUBLISHED",
    highlighted: true,
  },
  {
    title: "CHRO pathway",
    description: "Workforce and payroll governance",
    status: "NO PUBLISHED ROUTE",
  },
  {
    title: "CIO pathway",
    description: "Architecture and integration",
    status: "NO PUBLISHED ROUTE",
  },
  {
    title: "Board / Audit pathway",
    description: "Oversight and evidence",
    status: "NO PUBLISHED ROUTE",
  },
];

export default function WhereItFitsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                CHAPTER 5 • WHERE IT FITS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Four groups, no fit score
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              These are evaluation routes, not a match assessment. Nothing here
              infers a persona, and only published routes are linked.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FIT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-[9px] p-4 border flex flex-col justify-between transition-all ${
                card.highlighted
                  ? "bg-white border-[#DBE3E8] border-l-[4px] border-l-[#1E7A5A] shadow-sm"
                  : "bg-[#F7F5F0] border-l-[4px] border-l-[#5A6D79] shadow-sm"
              }`}
            >
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-[#64748B]">{card.description}</p>
                <span
                  className={`inline-block text-[10px] font-mono font-bold tracking-widest uppercase ${
                    card.status === "PUBLISHED"
                      ? "text-[#A07A2E]"
                      : "text-[#A07A2E]"
                  }`}
                >
                  {card.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
