import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { WEBINAR_CARDS } from "./data";

export default function WebinarsSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey95 }}>
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <div className="flex flex-wrap items-end justify-between">
          <SectionHead eyebrow="WEBINARS & EVENTS" title="Live and on-demand expert sessions." />
          <p className="max-w-96 pr-8 pt-3.5 pb-5 text-base leading-6" style={{ color: C.grey44, fontFamily: FONT }}>
            Recording status shown honestly — capacity language
            <br />
            only appears when real.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {WEBINAR_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex-1 min-w-60 px-4 py-5 rounded-xl flex flex-col gap-1.5"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div
                className="self-start px-2 py-[3px] rounded-[5px] text-[10px] font-bold uppercase"
                style={{
                  background: card.badgeTone === "live" ? C.azure25 : C.grey94b,
                  color: card.badgeTone === "live" ? C.azure11 : C.green34,
                  fontFamily: FONT,
                }}
              >
                {card.badge}
              </div>
              <div className="pt-7 text-sm font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="text-xs" style={{ color: C.grey44, fontFamily: FONT }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
