import React from "react";
import { FONT_ARCHIVO, FONT_INTER, OVERSIGHT_MODULES } from "./data";

export default function ModulesSection() {
  return (
    <section className="w-full bg-[#F6F5F1] flex justify-center px-4 md:px-8 lg:px-[170px] py-[52px] md:py-[70px]">
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[0.75fr_1.5fr] gap-[36px] lg:gap-[60px]">
        <div className="flex flex-col items-start gap-[17px]">
          <p
            className="text-[10px] font-bold tracking-[1.8px] uppercase text-[#B08A38]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Six oversight lenses
          </p>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[39px] font-bold leading-[1.18] tracking-[-1px] text-[#243943]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Ask the question. Inspect the basis.
          </h2>
          <p
            className="pt-[7px] text-[16px] font-normal leading-[26.4px] text-[#6C797E]"
            style={{ fontFamily: FONT_INTER }}
          >
            Proposed modules explain a governance concept. They are not a live
            audit workflow.
          </p>
        </div>

        <ul className="flex flex-col gap-[10px]">
          {OVERSIGHT_MODULES.map((module) => (
            <li
              key={module.code}
              className="bg-white border border-[#DBE3E7] rounded-[6px]"
            >
              <details className="group">
                <summary
                  className="flex items-center gap-[15px] min-h-[44px] px-[20px] py-[17px] cursor-pointer list-none"
                  style={{ fontFamily: FONT_ARCHIVO }}
                >
                  <span
                    className="shrink-0 w-[10px] h-[10px] rounded-full bg-[#DBE3E7] group-open:bg-[#D0A644] transition-colors"
                    aria-hidden="true"
                  />
                  <span className="shrink-0 text-[10px] font-bold text-[#B08B3E]">
                    {module.code}
                  </span>
                  <span className="text-[15px] font-bold text-[#243943]">
                    {module.title}
                  </span>
                </summary>
                <p
                  className="px-[20px] pb-[18px] pl-[64px] text-[13px] font-normal leading-[21px] text-[#748087]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  Proposed scope for this lens — a governance concept to
                  discuss, not a live audit workflow.
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
