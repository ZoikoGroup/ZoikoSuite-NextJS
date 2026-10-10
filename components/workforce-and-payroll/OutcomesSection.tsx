import React from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER, OUTCOME_CARDS } from "./data";

export default function OutcomesSection() {
  return (
    <section className="w-full bg-[#F6F5F0] flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[76px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[20px]">
        <SectionHead
          id="h-out"
          title="Make payroll-impacting decisions easier to review."
          body="What the proposed workflow is designed to help with — described as intent, not as measured results."
        />

        <ul className="pt-[16px] grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
          {OUTCOME_CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col gap-[8px] bg-white border border-[#E4E1D8] rounded-[12px] p-[20px]"
            >
              <h3
                className="text-[15.5px] font-bold tracking-[-0.155px] text-[#101E2B]"
                style={{ fontFamily: FONT_INTER }}
              >
                {card.title}
              </h3>
              <p
                className="text-[13.5px] font-normal leading-[1.5] text-[#5D6A74]"
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
