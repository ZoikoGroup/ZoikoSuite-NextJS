"use client";

import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { CAPABILITY_AREAS, FONT_INTER } from "./data";

export default function CapabilityExplorerSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F6F5F0] flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[76px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[36px]">
        <SectionHead
          id="h-caps"
          title="Six areas to evaluate, one at a time."
          body="Open an area to see what to look for, an illustrative example, and what this page deliberately does not claim. One area is open at a time."
        />

        <ul className="flex flex-col gap-[12px]">
          {CAPABILITY_AREAS.map((area, i) => {
            const isOpen = openIndex === i;
            return (
              <li
                key={area.code}
                className="bg-white border border-[#E4E1D8] rounded-[14px]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-3 pl-[18px] pr-[18px] py-[18px] text-left"
                >
                  <div className="flex flex-col gap-[2px]">
                    <span
                      className="text-[11px] font-bold tracking-[0.55px] text-[#B8913F]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      {area.code}
                    </span>
                    <span
                      className="text-[17px] font-bold text-[#101E2B]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      {area.title}
                    </span>
                    <span
                      className="pt-[2px] text-[13.5px] font-normal text-[#33424D]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      {area.subtitle}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 mt-[4px] text-[#5D6A74] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="px-[18px] pb-[22px] flex flex-col gap-[14px]">
                    <div>
                      <h3
                        className="text-[12px] font-bold tracking-[0.5px] uppercase text-[#5D6A74]"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        What to look for
                      </h3>
                      <p
                        className="pt-[4px] text-[14px] font-normal leading-[1.5] text-[#33424D]"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        {area.lookFor}
                      </p>
                    </div>
                    <div>
                      <h3
                        className="text-[12px] font-bold tracking-[0.5px] uppercase text-[#5D6A74]"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        Illustrative example
                      </h3>
                      <p
                        className="pt-[4px] text-[14px] font-normal leading-[1.5] text-[#33424D]"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        {area.example}
                      </p>
                    </div>
                    <div className="px-[14px] py-[12px] bg-[#F6F5F0] border-l-[3px] border-[#CDA85B] rounded-[6px]">
                      <p
                        className="text-[13px] font-normal leading-[1.5] text-[#5D6A74]"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        {area.notClaimed}
                      </p>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
