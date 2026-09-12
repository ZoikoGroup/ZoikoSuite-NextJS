"use client";

import React from "react";

export default function ResourceCardContractSection() {
  const visibleOnCard = [
    "Title",
    "Audience",
    "Decision supported",
    "One- or two-sentence summary",
    "Current or freshness state",
    "Format",
    "Access level — ungated, optional-gated, customer or restricted",
    "Accessibility state",
    "Primary call to action",
  ];

  const visibleOnDetailPage = [
    "Content owner team",
    "Published and reviewed dates, where verified",
    "Topics covered",
    "What you will learn",
    "Claim and coverage limitations",
    "Related resources",
    "File metadata",
    "Successor or superseded state",
    "Feedback route tied to the resource ID",
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                RESOURCE CARD CONTRACT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl max-w-xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              What every resource will disclose
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Published here in advance so an evaluator can see what will and
              will not be stated before any asset exists.
            </p>
          </div>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Visible on the card */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-[11px] font-mono font-bold tracking-widest text-[#123B4C] uppercase mb-6">
                VISIBLE ON THE CARD
              </h3>
              <ul className="space-y-3.5">
                {visibleOnCard.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A07A2E] mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Additionally visible on the detail page */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-[11px] font-mono font-bold tracking-widest text-[#123B4C] uppercase mb-6">
                ADDITIONALLY VISIBLE ON THE DETAIL PAGE
              </h3>
              <ul className="space-y-3.5">
                {visibleOnDetailPage.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A07A2E] mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
