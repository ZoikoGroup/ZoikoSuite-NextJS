"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { CHECKLIST_TOPICS, FONT_INTER } from "./data";

export default function EvaluationChecklistSection() {
  const [checked, setChecked] = useState<boolean[]>(
    () => CHECKLIST_TOPICS.map(() => false)
  );

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const checkedCount = checked.filter(Boolean).length;

  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[56px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[14px]">
        <SectionHead
          title="Come to the briefing with the decisions that matter."
          body="Seven topics to prepare. Ticking is optional and stays on this page unless you choose to share the topic names with your request."
        />

        <div className="flex flex-col gap-[20px] border border-[#E4E1D8] rounded-[14px] px-[24px] py-[22px]">
          <div className="relative w-full aspect-[1088/400] rounded-[10px] overflow-hidden">
            <Image
              src="/cio/evaluation-checklist-illustration.jpg"
              alt="Illustrative preparation checklist connected to a briefing"
              fill
              sizes="(min-width: 1024px) 1088px, 100vw"
              className="object-cover"
            />
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            {CHECKLIST_TOPICS.map((topic, i) => (
              <li key={topic.label}>
                <label
                  className="flex items-start gap-[10px] px-[14px] py-[12px] bg-[#F6F5F0] border border-[#E4E1D8] rounded-[8px] text-[13.5px] font-medium text-[#101E2B] cursor-pointer"
                  style={{ fontFamily: FONT_INTER }}
                >
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    className="mt-[2px] w-[16px] h-[16px] rounded-[2.5px] border border-[#767676]"
                  />
                  {topic.label}
                </label>
              </li>
            ))}
          </ul>

          <p
            className="text-[12.5px] font-normal text-[#5D6A74]"
            style={{ fontFamily: FONT_INTER }}
          >
            {checkedCount} of {CHECKLIST_TOPICS.length} selected. This stays
            on this page unless you choose to share the topic names in the
            briefing form below.
          </p>
        </div>
      </div>
    </section>
  );
}
