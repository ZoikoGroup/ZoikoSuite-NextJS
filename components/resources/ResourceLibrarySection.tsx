"use client";

import React from "react";

interface LibraryCard {
  category: string;
  title: string;
  updated: string;
  cta: string;
}

const libraryCards: LibraryCard[] = [
  {
    category: "Knowledge Base",
    title: "Mapping approval authority to<br />workflow steps",
    updated: "Updated Sep 9, 2026",
    cta: "Read article \u2192",
  },
  {
    category: "Templates &amp; Tools",
    title: "Policy exception request<br />template",
    updated: "Updated Aug 22, 2026",
    cta: "Use resource \u2192",
  },
  {
    category: "Blog &amp; Insights",
    title: "Why scope belongs in the policy<br />record",
    updated: "Updated Sep 5, 2026",
    cta: "Read insight \u2192",
  },
  {
    category: "Webinars &amp; Events",
    title: "Live session: evidence<br />architecture walkthrough",
    updated: "Sep 24, 2026 \u00B7 Upcoming",
    cta: "View event \u2192",
  },
];

const filterOptions = [
  "All types",
  "Executive Briefs",
  "Documentation",
  "Knowledge Base",
  "Training Academy",
  "Webinars &amp; Events",
  "Case Studies",
  "Blog &amp; Insights",
  "Templates &amp; Tools",
];

export default function ResourceLibrarySection() {
  return (
    <div className="w-[480px] max-w-[480px] left-[24px] top-[1270px] absolute inline-flex flex-col justify-start items-start gap-[6px]">
      <div className="self-stretch flex flex-col justify-start items-start gap-[12px]">
        <div className="self-stretch pb-[2.36px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
            05 / LIBRARY
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
            Browse all resources
          </div>
        </div>
      </div>
      <div className="w-[448px] pt-[40px] inline-flex justify-start items-start gap-[10px] flex-wrap content-start">
        <div className="flex-1 w-[304px] h-[44px] relative bg-[#FFFFFF] rounded-[4px] border-[1px] border-[#0F476A] overflow-hidden">
          <div className="w-[428.58px] left-[60px] top-[60px] absolute inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="justify-center text-[#64748B] text-[12px] font-normal font-['Archivo']">
              Search by topic, resource, or question
            </div>
          </div>
          <div className="w-[442.58px] left-[60px] top-[60px] absolute inline-flex justify-start items-center">
            <div className="flex-1 h-[16px] relative" />
            <div className="w-[14px] h-[10px] relative" />
          </div>
        </div>
        <div className="h-[44px] px-[24px] py-[14px] bg-[#0F476A] rounded-[999px] border-[1px] outline outline-[1px] outline-offset-[-1px] outline-[#0F476A] inline-flex justify-center items-center">
          <div className="text-center justify-center text-[#FFFFFF] text-[14px] font-semibold font-['Archivo']">
            Search
          </div>
        </div>
      </div>
      <div className="w-[448px] h-[80px] relative">
        {filterOptions.map((option, index) => {
          const isFirst = index === 0;
          const xOffset = isFirst
            ? 0
            : index < 7
              ? index * 144 + (index > 0 ? 120 - 144 * (index - 1) : 0)
              : 0;
          const isSecondRow = index >= 7;
          const leftPosition = isFirst
            ? 0
            : index < 7
              ? 102.81 + (index - 1) * 153.21
              : 0;
          const topPosition = isSecondRow ? 208 : 48;

          return (
            <div
              key={index}
              className="w-[144px] h-[40px] px-[14px] py-[6px] left-0 top-[48px] absolute bg-[#F7F5F0] rounded-[999px] border-[1px] outline outline-[1px] outline-offset-[-1px] outline-[#0F476A] inline-flex flex-col justify-center items-center"
              style={{
                left: index === 0 ? 0 : leftPosition,
                top: index === 0 ? 48 : topPosition,
                backgroundColor: isFirst ? "#0F476A" : undefined,
              }}
            >
              <div
                className="text-center justify-center text-[#FFFFFF] text-[11px] font-normal font-['JetBrains_Mono']"
                style={{
                  color: isFirst ? "#FFFFFF" : "#0F476A",
                }}
              >
                {option}
              </div>
            </div>
          );
        })}
        {/* Second row filters */}
        <div className="w-[144px] h-[40px] px-[14px] py-[6px] left-[120px] top-[208px] absolute bg-[#F7F5F0] rounded-[999px] border-[1px] outline outline-[1px] outline-offset-[-1px] outline-[#0F476A] inline-flex flex-col justify-center items-center">
          <div className="text-center justify-center text-[#0F476A] text-[11px] font-normal font-['JetBrains_Mono']">
            Templates &amp; Tools
          </div>
        </div>
      </div>
      <div className="w-[448px] pt-[8px] inline-flex justify-center items-start gap-[16px]">
        {libraryCards.map((card, index) => (
          <div
            key={index}
            className="flex-1 w-[112px] h-[192px] relative bg-[#FFFFFF] rounded-[8px] border-l border-r border-t-[12px] border-b border-[#0F476A]"
            style={{
              borderColor: index === 1 ? "#A07A2E" : undefined,
            }}
          >
            <div className="w-[240px] left-[108px] top-[72px] absolute inline-flex flex-col justify-start items-start gap-[16px]">
              <div className="justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-[10px]">
                {card.category}
              </div>
              <div className="w-[240px] justify-center text-[#1E293B] text-[14px] font-semibold font-['Archivo'] leading-5">
                {card.title}
              </div>
              <div className="w-[240px] justify-center text-[#475569] text-[11px] font-normal font-['JetBrains_Mono'] leading-5">
                {card.updated}
              </div>
              <div className="w-[240px] min-h-[16px] pt-[6px] pb-[8px] border-b border-[#00000000] inline-flex justify-start items-center">
                <div className="justify-center text-[#0F476A] text-[12px] font-semibold font-['Archivo'] leading-6">
                  {card.cta}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
