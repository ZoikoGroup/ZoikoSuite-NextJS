import React from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER, REPORTING_MODE_CARDS } from "./data";

export default function ReportingModeSection() {
  return (
    <section
      aria-labelledby="reporting-mode-title"
      className="w-full bg-white flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="reporting-mode-title"
          eyebrow="Choose reporting mode"
          title="No preselection — the choice is explicit and reversible before submission"
        />

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] pt-[15px]">
          {REPORTING_MODE_CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col gap-[10px] px-[20px] pt-[19px] pb-[20px] h-full min-h-[175px] bg-white border border-[#DCD6C8] rounded-[8px]"
            >
              <h3
                className="text-[14.5px] font-bold leading-[23.2px] text-[#16223A]"
                style={{ fontFamily: FONT_INTER }}
              >
                {card.title}
              </h3>
              <p
                className="text-[12.5px] font-normal leading-[20px] text-[#4B5872] whitespace-pre-line"
                style={{ fontFamily: FONT_INTER }}
              >
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
