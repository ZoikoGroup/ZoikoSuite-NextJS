import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { GOAL_CARDS } from "./data";

export default function GoalRoutingSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <div className="flex flex-wrap items-end justify-between">
          <SectionHead eyebrow="START WITH YOUR GOAL" title="What are you trying to do?" />
          <p className="max-w-[420px] pr-4 pt-3.5 pb-5 text-base leading-6" style={{ color: C.grey44, fontFamily: FONT }}>
            <span className="whitespace-nowrap">Intent paths complement — not replace — resource-type</span>
            <br />
            and topic filters below.
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          {GOAL_CARDS.map((card) => (
            <div
              key={card.eyebrow}
              className="flex-1 min-w-44 p-5 rounded-xl flex flex-col gap-2"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div className="text-xs font-bold tracking-wide" style={{ color: C.orange48, fontFamily: FONT }}>
                {card.eyebrow}
              </div>
              <div className="text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="pt-[5px] text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey44, fontFamily: FONT }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
