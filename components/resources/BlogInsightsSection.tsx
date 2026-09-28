import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { BLOG_CARDS } from "./data";

export default function BlogInsightsSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <div className="flex flex-col justify-end gap-4">
          <SectionHead
            eyebrow="BLOG & INSIGHTS"
            title="Editorial analysis — clearly separate from authoritative docs."
          />
          <p className="max-w-96 pr-7 pt-3.5 pb-5 text-base leading-6" style={{ color: C.grey44, fontFamily: FONT }}>
            Product/legal facts link to current sources; historical
            <br />
            announcements never override current documentation.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {BLOG_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex-1 min-w-60 h-52 p-5 rounded-xl flex flex-col justify-between"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div className="pb-2.5 text-xs font-bold uppercase tracking-wide" style={{ color: C.azure25, fontFamily: FONT }}>
                {card.eyebrow}
              </div>
              <div className="text-base font-bold leading-5" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="flex-1 py-3 text-xs leading-5" style={{ color: C.grey44, fontFamily: FONT }}>
                {card.body}
              </div>
              <div className="pb-3 flex flex-wrap gap-1.5">
                {card.meta?.map((m) => (
                  <div
                    key={m}
                    className="px-2 py-1 rounded-md text-xs font-semibold"
                    style={{ background: C.grey95, color: C.grey44, fontFamily: FONT }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
