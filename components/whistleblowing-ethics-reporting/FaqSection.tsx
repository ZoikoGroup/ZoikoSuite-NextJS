import React from "react";
import SectionHead from "./SectionHead";
import { FAQ_ITEMS, FONT_INTER } from "./data";

export default function FaqSection() {
  return (
    <section
      aria-labelledby="faq-title"
      className="w-full bg-white flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead id="faq-title" eyebrow="Frequently asked" title="Common questions" />

        <div className="flex flex-col divide-y divide-[#DCD6C8] border-t border-[#DCD6C8]">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group pt-[31px] pb-[14px]" open>
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer list-none text-[13.5px] font-bold leading-[21.6px] text-[#16223A]"
                style={{ fontFamily: FONT_INTER }}
              >
                {item.question}
                <span
                  className="shrink-0 text-[13.5px] font-extrabold leading-[21.6px] text-[#A8843A]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p
                className="max-w-[750px] mt-[17px] text-[12px] font-normal leading-[19.2px] text-[#4B5872] whitespace-pre-line"
                style={{ fontFamily: FONT_INTER }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
