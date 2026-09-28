import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { DIRECTORY_CARDS } from "./data";

export default function ResourceDirectorySection() {
  const grid = DIRECTORY_CARDS.filter((c) => !c.wide);
  const wide = DIRECTORY_CARDS.find((c) => c.wide);

  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <SectionHead eyebrow="RESOURCE TYPE DIRECTORY" title="Every destination, one sentence each." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[21px]">
          {grid.map((card) => (
            <div
              key={card.title}
              className="h-52 p-5 rounded-xl flex flex-col gap-3"
              style={{ background: C.white, border: `1px solid #E4E1D8` }}
            >
              <img src={card.icon} alt="" className="w-9 h-9" />
              <div className="pt-px text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey44, fontFamily: FONT }}>
                {card.body}
              </div>
              <div className="pt-px text-sm font-semibold" style={{ color: "#123255", fontFamily: FONT }}>
                {card.cta}
              </div>
            </div>
          ))}
        </div>

        {wide && (
          <div
            className="h-44 p-5 rounded-xl flex flex-col gap-3"
            style={{ background: C.white, border: `1px solid #E4E1D8` }}
          >
            <img src={wide.icon} alt="" className="w-9 h-9" />
            <div className="pt-px text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
              {wide.title}
            </div>
            <div className="text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey44, fontFamily: FONT }}>
              {wide.body}
            </div>
            <div className="pt-px text-sm font-semibold" style={{ color: "#123255", fontFamily: FONT }}>
              {wide.cta}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
