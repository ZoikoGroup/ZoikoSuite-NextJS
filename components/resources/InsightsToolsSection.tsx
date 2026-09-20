"use client";

import React from "react";

interface InsightResource {
  category: string;
  title: string;
  updated: string;
}

const insightResources: InsightResource[] = [
  {
    category: "Blog &amp; Insights",
    title: "The difference between a policy and a<br />control",
    updated: "Updated Sep 6, 2026",
  },
  {
    category: "Templates &amp; Tools",
    title: "Scope &amp; applicability worksheet",
    updated: "Updated Aug 12, 2026",
  },
];

export default function InsightsToolsSection() {
  return (
    <div className="w-[480px] h-[192px] left-[24px] top-[2072px] absolute inline-flex flex-col justify-start items-start">
      <div className="self-stretch pt-[6px] inline-flex flex-col justify-start items-start gap-[12px]">
        <div className="justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
          09 / INSIGHTS &amp; TOOLS
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
            Explore ideas and put useful<br />
            resources to work
          </div>
        </div>
        <div className="w-full max-w-[228px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-[#475569] text-base font-normal font-['Archivo'] leading-7">
            Browse Blog &amp; Insights for published perspectives and Templates &amp;<br />
            Tools for approved reusable resources.
          </div>
        </div>
      </div>
      <div className="self-stretch h-[160px] inline-flex justify-center items-start gap-[16px]">
        {insightResources.map((resource, index) => (
          <div
            key={index}
            className="w-[320px] h-[160px] px-[24px] pt-[24px] pb-[128px] bg-[#FFFFFF] rounded-[8px] border-l border-r border-t-[12px] border-b border-[#0F476A] flex flex-col justify-start items-start"
            style={{
              borderColor: index === 1 ? "#A07A2E" : undefined,
              gap: "8px",
            }}
          >
            <div className="flex flex-col justify-start items-start w-full">
              <div className="justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-[10px]">
                {resource.category}
              </div>
              <div className="justify-center text-[#1E293B] text-[14px] font-semibold font-['Archivo'] leading-4">
                {resource.title}
              </div>
              <div className="justify-center text-[#475569] text-[11px] font-normal font-['JetBrains_Mono'] leading-5">
                {resource.updated}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
