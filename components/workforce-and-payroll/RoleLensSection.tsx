"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { FONT_INTER, ROLE_TABS } from "./data";

export default function RoleLensSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ROLE_TABS[activeIndex];

  return (
    <section className="w-full bg-[#F6F5F0] flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[76px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[15px]">
        <SectionHead
          id="h-roles"
          title="Designed for decisions across the operating model."
          body="Workforce and payroll touches people, finance, technology, tax, compliance and independent oversight."
        />

        <div className="pt-[21px] flex flex-wrap gap-[8px]">
          {ROLE_TABS.map((tab, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-[8px] min-h-[44px] px-[16px] rounded-full border transition-colors ${
                  isActive
                    ? "bg-[#08222F] border-[#08222F] text-white"
                    : "bg-white border-[#E4E1D8] text-[#33424D] hover:border-[#CDA85B]"
                }`}
                style={{ fontFamily: FONT_INTER }}
              >
                <span className="text-[13.5px] font-semibold">{tab.label}</span>
                {tab.pending && (
                  <span className="px-[8px] bg-[#FAF1E0] border border-[#F0DCB3] rounded-full text-[10.5px] font-bold text-[#9A6A22]">
                    label pending
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="relative w-full aspect-[1088/568] rounded-[14px] overflow-hidden border border-[#E4E1D8]">
          <Image
            src="/workforce-and-payroll/role-lens-chro-illustration.jpg"
            alt={`Illustrative view of workforce and payroll decisions from the ${active.label} perspective`}
            fill
            sizes="(min-width: 1024px) 1088px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
