"use client";

import React from "react";

interface EvaluativeResource {
  category: string;
  title: string;
  updated: string;
}

const evaluativeResources: EvaluativeResource[] = [
  {
    category: "Executive Briefs",
    title: "Buyer-readable assurance, honestly<br />labeled",
    updated: "Updated Sep 1, 2026",
  },
  {
    category: "Case Studies",
    title: "Operating across borders without<br />losing control",
    updated: "Updated Aug 18, 2026",
  },
];

export default function ExecutiveEvaluationSection() {
  return (
    <div className="w-full px-[56px] py-[96px] top-[1472px] absolute bg-[#F7F5F0] inline-flex flex-col justify-start items-start">
      <div className="w-full max-w-[528px] px-[48px] flex flex-col justify-start items-start">
        <div className="self-stretch pt-[6px] inline-flex flex-col justify-start items-start gap-[12px]">
          <div className="justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
            06 / EXECUTIVE &amp; EVALUATION
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
              Evaluate with concise evidence<br />
              and real-world context
            </div>
          </div>
          <div className="w-full max-w-[228px] flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#475569] text-base font-normal font-['Archivo'] leading-7">
              Use Executive Briefs for focused decision material and Case Studies for<br />
              approved customer or implementation stories.
            </div>
          </div>
        </div>
        <div className="self-stretch h-[160px] inline-flex justify-center items-start gap-[16px]">
          {evaluativeResources.map((resource, index) => (
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
    </div>
  );
}
