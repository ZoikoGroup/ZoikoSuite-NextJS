"use client";

import React from "react";

interface LearningResource {
  category: string;
  title: string;
  meta: string;
}

const learningResources: LearningResource[] = [
  {
    category: "Training Academy",
    title: "Foundations of governed workflow<br />design",
    meta: "Self-paced",
  },
  {
    category: "Webinars &amp; Events",
    title: "Q4 policy governance office hours",
    meta: "Upcoming \u00B7 registration open",
  },
];

export default function LearningEventsSection() {
  return (
    <div className="w-full px-[56px] py-[96px] top-[1872px] absolute bg-[#F7F5F0] inline-flex flex-col justify-start items-start">
      <div className="w-full max-w-[528px] px-[48px] flex flex-col justify-start items-start">
        <div className="self-stretch pt-[6px] inline-flex flex-col justify-start items-start gap-[12px]">
          <div className="justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
            08 / LEARNING &amp; EVENTS
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
              Learn at your pace or join a<br />
              session
            </div>
          </div>
          <div className="w-full max-w-[228px] flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#475569] text-base font-normal font-['Archivo'] leading-7">
              Explore Training Academy materials and Webinars &amp; Events using the<br />
              availability and dates published by their owning systems.
            </div>
          </div>
        </div>
        <div className="self-stretch h-[256px] inline-flex justify-center items-start gap-[16px]">
          {learningResources.map((resource, index) => (
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
                  {resource.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
