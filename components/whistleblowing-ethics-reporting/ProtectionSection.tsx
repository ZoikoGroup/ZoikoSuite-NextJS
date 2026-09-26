import React from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER, PROTECTION_CARDS } from "./data";

export default function ProtectionSection() {
  return (
    <section
      aria-labelledby="protection-title"
      className="w-full bg-[#F6F1E6] flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="protection-title"
          eyebrow="Protection, confidentiality & non-retaliation"
          title="Your report will be handled carefully"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] pt-[15px]">
          {PROTECTION_CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col gap-[7px] px-[18px] py-[18px] bg-white border border-[#DCD6C8] rounded-[8px]"
            >
              <h3
                className="text-[13.5px] font-bold leading-[21.6px] text-[#16223A]"
                style={{ fontFamily: FONT_INTER }}
              >
                {card.title}
              </h3>
              <p
                className="text-[12px] font-normal leading-[19.2px] text-[#4B5872]"
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
