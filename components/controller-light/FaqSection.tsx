import React from "react";
import { FAQ_ITEMS, FONT_ARCHIVO, FONT_INTER } from "./data";

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F6F5F1] flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[64px] md:pb-[80px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[30px]">
        <h2
          className="text-[28px] md:text-[32px] lg:text-[39px] font-bold leading-[1.18] tracking-[-1px] text-[#243943]"
          style={{ fontFamily: FONT_ARCHIVO }}
        >
          Clear answers before evaluation.
        </h2>

        <ul className="flex flex-col gap-[10px]">
          {FAQ_ITEMS.map((item) => (
            <li
              key={item.question}
              className="bg-white border border-[#DBE3E7] rounded-[6px]"
            >
              <details className="group">
                <summary
                  className="flex items-start gap-[6px] min-h-[44px] px-[30px] py-[18px] cursor-pointer list-none text-[15px] font-bold text-[#243943]"
                  style={{ fontFamily: FONT_ARCHIVO }}
                >
                  <span
                    className="shrink-0 mt-[9px] w-[5px] h-[5px] rounded-full bg-[#243943] group-open:bg-[#D0A644] transition-colors"
                    aria-hidden="true"
                  />
                  {item.question}
                </summary>
                <p
                  className="px-[30px] pb-[18px] pl-[41px] text-[13.5px] font-normal leading-[21px] text-[#748087]"
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
