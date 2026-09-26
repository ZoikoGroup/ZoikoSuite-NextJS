import React from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER, REPORTING_STEPS } from "./data";

export default function HowReportingWorksSection() {
  return (
    <section
      aria-labelledby="how-reporting-works-title"
      className="w-full bg-[#F6F1E6] flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="how-reporting-works-title"
          eyebrow="How reporting works"
          title="Seven steps, no invented promises"
        />

        <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 pt-[13px] pb-[15px]">
          {REPORTING_STEPS.map((step, i) => (
            <li
              key={step}
              className="flex flex-col items-center gap-[8px] px-[10px] py-[14px] text-center border-b lg:border-b-0 lg:border-r border-[#DCD6C8] last:border-b-0 lg:last:border-r-0"
            >
              <span
                className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#0E2843] text-[11.5px] leading-[18.4px] text-white"
                style={{ fontFamily: FONT_INTER }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3
                className="text-[11.5px] font-bold leading-[18.4px] text-[#16223A]"
                style={{ fontFamily: FONT_INTER }}
              >
                {step}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
