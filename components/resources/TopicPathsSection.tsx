import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { TOPIC_CARDS } from "./data";

export default function TopicPathsSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-2 py-24 flex flex-col gap-9 mx-auto">
        <SectionHead eyebrow="TOPIC & DOMAIN PATHS" title="Browse by platform domain." />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[26px]">
          {TOPIC_CARDS.map((card) => (
            <div
              key={card.title}
              className="w-[216px] h-[134px] px-4 pt-10 pb-4 rounded-[10px] flex flex-col gap-1.5"
              style={{ background: C.white, border: `1px solid ${C.orange87}` }}
            >
              <div className="text-sm font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="text-xs leading-4 whitespace-pre-wrap" style={{ color: C.grey44, fontFamily: FONT }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
