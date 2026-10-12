import React from "react";
import SectionHead from "./SectionHead";
import { FAQ_ITEMS, FONT_INTER } from "./data";

export default function FaqSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[56px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[8px]">
        <SectionHead
          title="Frequently asked questions"
          body="Answer-first, and honest about what is not yet established."
        />

        <ul className="max-w-[860px] pt-[28px] flex flex-col gap-[10px]">
          {FAQ_ITEMS.map((item) => (
            <li
              key={item.question}
              className="bg-white border border-[#E4E1D8] rounded-[12px]"
            >
              <details className="group">
                <summary className="flex items-center justify-between gap-3 min-h-[24px] pl-[16px] pr-[16px] py-[14px] cursor-pointer list-none">
                  <span
                    className="text-[15px] font-bold text-[#101E2B]"
                    style={{ fontFamily: FONT_INTER }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 text-[#5D6A74] transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <p
                  className="px-[16px] pb-[16px] text-[14px] font-normal leading-[1.5] text-[#5D6A74]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {item.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
