"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { CAPABILITY_CONTROLS, FONT_INTER } from "./data";

export default function CapabilityExplorerSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CAPABILITY_CONTROLS[activeIndex];

  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[56px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[16px]">
        <SectionHead
          id="h-controls"
          title="Explore the controls around workforce-to-payroll operations."
          body="Review the information, approval and evidence checkpoints that matter to your team."
        />

        <div className="pt-[20px] grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-[30px]">
          <ul className="flex flex-col gap-[10px]">
            {CAPABILITY_CONTROLS.map((control, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={control.code}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    className={`w-full flex flex-col items-start gap-[2px] pl-[18px] pr-[18px] py-[12px] rounded-full border transition-colors ${
                      isActive
                        ? "bg-[#08222F] border-[#08222F]"
                        : "bg-white border-[#E4E1D8] hover:border-[#CDA85B]"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold tracking-[0.55px] ${
                        isActive ? "text-[#CDA85B]" : "text-[#B8913F]"
                      }`}
                      style={{ fontFamily: FONT_INTER }}
                    >
                      {control.code}
                    </span>
                    <span
                      className={`text-[15px] font-bold ${
                        isActive ? "text-white" : "text-[#101E2B]"
                      }`}
                      style={{ fontFamily: FONT_INTER }}
                    >
                      {control.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="border border-[#E4E1D8] rounded-[14px] overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/10]">
              <Image
                src="/workforce-and-payroll/capability-explorer-illustration.jpg"
                alt="Illustrative control workflow across workforce-to-payroll operations"
                fill
                sizes="(min-width: 1024px) 816px, 100vw"
                className="object-cover"
              />
            </div>
            <p
              className="px-[24px] py-[20px] text-[14px] font-normal leading-[1.5] text-[#5D6A74]"
              style={{ fontFamily: FONT_INTER }}
            >
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
