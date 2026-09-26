import React from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER, REPORT_CATEGORIES } from "./data";

export default function WhatYouCanReportSection() {
  return (
    <section
      aria-labelledby="what-you-can-report-title"
      className="w-full bg-white flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="what-you-can-report-title"
          eyebrow="What this channel is for"
          title="Illustrative categories — never an exhaustive gate"
        />

        <ul className="flex flex-wrap gap-x-[10px] gap-y-[10px] pt-[15px]">
          {REPORT_CATEGORIES.map((category) => (
            <li
              key={category}
              className="px-[14px] py-[7px] bg-white border border-[#DCD6C8] rounded-full text-[12px] font-normal leading-[19.2px] text-[#4B5872]"
              style={{ fontFamily: FONT_INTER }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
