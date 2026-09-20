"use client";

import React from "react";

interface GoalRoute {
  number: string;
  title: string;
  description: string;
}

const goalRoutes: GoalRoute[] = [
  {
    number: "01",
    title: "Evaluate ZoikoSuite",
    description: "Executive Briefs + Case<br />Studies",
  },
  {
    number: "02",
    title: "Build or implement",
    description: "Documentation + Knowledge<br />Base",
  },
  {
    number: "03",
    title: "Learn and enable a team",
    description: "Training Academy + Webinars<br />&amp; Events",
  },
  {
    number: "04",
    title: "Find ideas &amp; reusable<br />material",
    description: "Blog &amp; Insights + Templates &amp;<br />Tools",
  },
  {
    number: "05",
    title: "Get help",
    description: "Support Center + Knowledge<br />Base",
  },
];

export default function GoalRoutingSection() {
  return (
    <div className="w-full px-[56px] py-[96px] top-[1032px] absolute bg-[#F7F5F0] inline-flex flex-col justify-start items-start">
      <div className="w-full max-w-[528px] px-[48px] flex flex-col justify-start items-start gap-[44px]">
        <div className="self-stretch flex flex-col justify-start items-start gap-[14px]">
          <div className="self-stretch pb-[2.36px] flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
              04 / GOAL ROUTING
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
              Start with what you need to do
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-center items-start gap-[16px]">
          {goalRoutes.map((route, index) => (
            <div
              key={route.number}
              className="flex-1 h-[192px] relative bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#0F476A]"
              style={{ outline: "none" }}
            >
              <div className="w-[24px] h-[24px] left-[108px] top-[108px] absolute bg-[#F7F5F0] rounded-[4px] inline-flex justify-center items-center">
                <div className="text-center justify-center text-[#0F476A] text-[11px] font-normal font-['JetBrains_Mono'] leading-6">
                  {route.number}
                </div>
              </div>
              <div className="w-[160px] left-[108px] top-[144px] absolute inline-flex flex-col justify-start items-start">
                <div className="justify-center text-[#1E293B] text-[14px] font-semibold font-['Archivo'] leading-4">
                  {route.title}
                </div>
                <div className="justify-center text-[#475569] text-[11px] font-normal font-['Archivo'] leading-5">
                  {route.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
