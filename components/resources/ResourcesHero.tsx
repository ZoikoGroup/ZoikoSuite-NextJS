"use client";

import React from "react";

export default function ResourcesHero() {
  return (
    <div className="w-full bg-[#FFFFFF] relative">
      <div className="w-full px-[56px] pb-[96px] top-[68px] absolute bg-[#FFFFFF] inline-flex flex-col justify-start items-start">
        <div className="w-full max-w-[528px] relative">
          <div className="w-[218.48px] h-28 pt-[10px] left-[192px] top-[100.77px] absolute inline-flex flex-col justify-start items-start gap-[12px]">
            <div className="w-16 h-5 relative">
              <div className="w-4 h-[1.50px] left-0 top-[16.88px] absolute bg-[#A07A2E]" />
              <div className="w-[80px] left-[40px] top-[-2px] absolute justify-center text-[#A07A2E] text-[11px] font-medium font-['JetBrains_Mono'] uppercase leading-5 tracking-[5px]">
                RESOURCES
              </div>
            </div>
            <div className="self-stretch pt-[19.2px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-[#1E293B] text-[40px] font-bold font-['Archivo'] leading-[52.44px]">
                Find the guidance you<br />need, faster.
              </div>
            </div>
            <div className="w-full max-w-[228px] pt-[11.16px] pb-16 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-[#475569] text-base font-normal font-['Archivo'] leading-7">
                The ZoikoSuite Resource Center brings together Executive Briefs,<br />
                Documentation, Knowledge Base resources, Training Academy materials,<br />
                Webinars &amp; Events, Case Studies, Blog &amp; Insights, Templates &amp; Tools, and<br />
                Support Center pathways in one place.
              </div>
            </div>
          </div>
          <img
            className="w-[257px] h-[241px] left-[252px] top-[37.51px] absolute rounded-[16px] shadow-[0px_16px_28px_-12px_rgba(8,34,47,0.40)]"
            src="https://placehold.co/257x241"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
