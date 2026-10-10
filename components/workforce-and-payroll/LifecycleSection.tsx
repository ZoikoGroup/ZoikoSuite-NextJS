"use client";

import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER, LIFECYCLE_NOTE, LIFECYCLE_STEPS } from "./data";

export default function LifecycleSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = LIFECYCLE_STEPS[activeIndex];

  return (
    <section className="w-full bg-[#F6F5F0] flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[76px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[15px]">
        <SectionHead
          id="h-lifecycle"
          title="From a workforce change to a reviewable payroll handoff."
          body="Select a step to see its observable state and evidence reference."
        />

        <ol className="pt-[21px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[10px]">
          {LIFECYCLE_STEPS.map((step, i) => {
            const isActive = i === activeIndex;
            return (
              <li key={step.number}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  className={`w-full h-full min-h-[104px] flex flex-col items-start gap-[8px] px-[12px] py-[18px] rounded-[12px] border transition-colors ${
                    isActive
                      ? "bg-[#08222F] border-[#08222F]"
                      : "bg-white border-[#E4E1D8] hover:border-[#CDA85B]"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-[26px] h-[26.5px] rounded-full text-[12px] font-bold ${
                      isActive
                        ? "bg-[#CDA85B] text-[#08222F]"
                        : "bg-[#F6F5F0] border border-[#E4E1D8] text-[#33424D]"
                    }`}
                    style={{ fontFamily: FONT_INTER }}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`text-[13.5px] font-bold text-left ${
                      isActive ? "text-white" : "text-[#101E2B]"
                    }`}
                    style={{ fontFamily: FONT_INTER }}
                  >
                    {step.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="bg-white border border-[#E4E1D8] rounded-[14px] px-[24px] pt-[27px] pb-[30px] flex flex-col gap-[8px]">
          <h3
            className="text-[18px] font-bold tracking-[-0.18px] text-[#101E2B]"
            style={{ fontFamily: FONT_INTER }}
          >
            {active.heading}
          </h3>
          <p
            className="text-[14.5px] font-normal leading-[1.5] text-[#33424D]"
            style={{ fontFamily: FONT_INTER }}
          >
            {active.body}
          </p>
          <dl className="flex flex-wrap gap-[28px] pt-[6px]">
            <div className="flex flex-col gap-[1px]">
              <dt
                className="text-[10.5px] font-bold tracking-[0.525px] uppercase text-[#5D6A74]"
                style={{ fontFamily: FONT_INTER }}
              >
                Observable state
              </dt>
              <dd
                className="text-[13px] font-semibold text-[#101E2B]"
                style={{ fontFamily: FONT_INTER }}
              >
                {active.observableState}
              </dd>
            </div>
            <div className="flex flex-col gap-[1px]">
              <dt
                className="text-[10.5px] font-bold tracking-[0.525px] uppercase text-[#5D6A74]"
                style={{ fontFamily: FONT_INTER }}
              >
                Evidence reference
              </dt>
              <dd
                className="text-[13px] font-semibold text-[#101E2B]"
                style={{ fontFamily: FONT_INTER }}
              >
                {active.evidenceReference}
              </dd>
            </div>
          </dl>
          <p
            className="pt-[4px] text-[14.5px] font-normal leading-[1.5] text-[#33424D]"
            style={{ fontFamily: FONT_INTER }}
          >
            {LIFECYCLE_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
