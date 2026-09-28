import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { FEATURED_CARDS } from "./data";

export default function FeaturedResourcesSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey95 }}>
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <div className="flex flex-wrap items-end justify-between">
          <SectionHead
            eyebrow="FEATURED ENTERPRISE RESOURCES"
            title="Diligence material, current as of the registry."
          />
          <p className="max-w-[500px] pr-1 pt-3.5 pb-5 text-base leading-6" style={{ color: C.grey44, fontFamily: FONT }}>
            <span className="whitespace-nowrap">Executive diligence basics are public — marketing opt-in is</span>
            <br />
            never required for legally or trust-required access.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {FEATURED_CARDS.map((card) => (
            <div
              key={card.title}
              className="w-[270px] h-[288px] p-5 rounded-xl flex flex-col justify-between"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div className="pb-2.5 text-xs font-bold uppercase tracking-wide" style={{ color: "#123255", fontFamily: FONT }}>
                {card.eyebrow}
              </div>
              <div className="text-base font-bold leading-5" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="flex-1 py-3 text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey44, fontFamily: FONT }}>
                {card.body}
              </div>
              <div className="pb-3 flex flex-row flex-wrap items-start gap-1.5">
                {card.meta.map((m) => (
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
