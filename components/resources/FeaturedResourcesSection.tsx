"use client";

import React from "react";

interface FeaturedResource {
  category: string;
  title: string;
  description: string;
  updated: string;
  cta: string;
  isHighlighted?: boolean;
}

const featuredResources: FeaturedResource[] = [
  {
    category: "Executive Briefs",
    title: "Governed Business Operations<br />Intelligence: an executive primer",
    description:
      "A concise briefing on connecting policy, execution, and<br />evidence across finance, workforce, and legal<br />operations.",
    updated: "Updated Aug 14, 2026",
    cta: "Read brief \u2192",
  },
  {
    category: "Case Studies",
    title: "Reducing audit prep time with evidence-<br />linked workflows",
    description:
      "An approved customer story on consolidating<br />compliance evidence into a single governed record.",
    updated: "Updated Jul 30, 2026",
    cta: "Read case study \u2192",
    isHighlighted: true,
  },
  {
    category: "Documentation",
    title: "Getting started with governed workflow<br />configuration",
    description:
      "Structured setup guidance for connecting policy,<br />authority, and jurisdiction to execution.",
    updated: "Updated Sep 2, 2026",
    cta: "View documentation \u2192",
  },
];

export default function FeaturedResourcesSection() {
  return (
    <div className="w-[480px] max-w-[480px] left-[24px] top-[831.6px] absolute inline-flex flex-col justify-start items-start gap-[44px]">
      <div className="self-stretch flex flex-col justify-start items-start gap-[14px]">
        <div className="self-stretch pb-[2.36px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
            03 / FEATURED
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
            Featured resources
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-center items-start gap-[16px]">
        {featuredResources.map((resource, index) => (
          <div
            key={index}
            className="w-[288px] h-[288px] relative bg-[#FFFFFF] rounded-[8px] border-l border-r border-t-[12px] border-b border-[#0F476A]"
            style={{
              borderColor:
                resource.isHighlighted ? "#A07A2E" : undefined,
            }}
          >
            <div className="w-[320px] left-[108px] top-[72px] absolute inline-flex flex-col justify-start items-start gap-[16px]">
              <div className="justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-[10px]">
                {resource.category}
              </div>
              <div className="w-[320px] justify-center text-[#1E293B] text-[20px] font-semibold font-['Archivo'] leading-[19.2px]">
                {resource.title}
              </div>
              <div className="w-[320px] justify-center text-[#475569] text-[12px] font-normal font-['Archivo'] leading-6">
                {resource.description}
              </div>
              <div className="w-[320px] justify-center text-[#475569] text-[11px] font-normal font-['JetBrains_Mono'] leading-5">
                {resource.updated}
              </div>
              <div className="w-[320px] min-h-[16px] pt-[6px] pb-[8px] border-b border-[#00000000] inline-flex justify-start items-center">
                <div className="justify-center text-[#0F476A] text-[12px] font-semibold font-['Archivo'] leading-6">
                  {resource.cta}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
