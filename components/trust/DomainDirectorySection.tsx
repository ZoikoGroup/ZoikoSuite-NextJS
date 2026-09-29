import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { DOMAIN_CARDS } from "./data";

export default function DomainDirectorySection() {
  const standard = DOMAIN_CARDS.filter((c) => !c.wide);
  const wide = DOMAIN_CARDS.filter((c) => c.wide);

  return (
    <section className="w-full flex justify-center" style={{ background: C.grey96 }}>
      <div className="w-full max-w-[1200px] px-8 py-16 flex flex-col gap-9">
        <SectionHead eyebrow="TRUST DOMAIN DIRECTORY" title="Every destination, one purpose each." />

        <div className="flex flex-wrap justify-start gap-4">
          {standard.map((card) => (
            <div
              key={card.title}
              className="w-[271px] h-[146px] p-5 rounded-xl flex flex-col"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div className="pb-2 text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="flex-1 py-3 text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey58, fontFamily: FONT }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-start gap-4">
          {wide.map((card) => (
            <div
              key={card.title}
              className="w-[367px] h-[146px] p-5 rounded-xl flex flex-col"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div className="pb-2 text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="flex-1 py-3 text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey58, fontFamily: FONT }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
