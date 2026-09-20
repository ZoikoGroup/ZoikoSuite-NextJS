"use client";

import React from "react";

interface DocResource {
  category: string;
  title: string;
  updated: string;
}

const docResources: DocResource[] = [
  {
    category: "Documentation",
    title: "Configuring approval matrices by<br />policy class",
    updated: "Updated Sep 8, 2026",
  },
  {
    category: "Knowledge Base",
    title: "Troubleshooting delayed evidence<br />exports",
    updated: "Updated Sep 3, 2026",
  },
];

export default function DocumentationKnowledgeSection() {
  return (
    <div className="w-[480px] h-[208px] left-[24px] top-[1672px] absolute inline-flex flex-col justify-start items-start">
      <div className="self-stretch pt-[6px] inline-flex flex-col justify-start items-start gap-[12px]">
        <div className="justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
          07 / DOCUMENTATION &amp; KNOWLEDGE
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
            Build, learn, and solve with<br />
            authoritative guidance
          </div>
        </div>
        <div className="w-full max-w-[228px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-[#475569] text-base font-normal font-['Archivo'] leading-7">
            Go to Documentation for structured product guidance or the Knowledge<br />
            Base for practical articles and problem-solving resources where<br />
            published.
          </div>
        </div>
      </div>
      <div className="self-stretch h-[176px] inline-flex justify-center items-start gap-[16px]">
        {docResources.map((resource, index) => (
          <div
            key={index}
            className="w-[320px] h-[192px] px-[24px] pt-[24px] pb-[160px] bg-[#FFFFFF] rounded-[8px] border-l border-r border-t-[12px] border-b border-[#0F476A] flex flex-col justify-start items-start"
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
