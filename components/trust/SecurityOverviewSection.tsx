import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { SECURITY_CARDS } from "./data";

export default function SecurityOverviewSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-[55px] flex flex-col gap-5">
        <div className="flex flex-wrap items-end justify-between">
          <SectionHead eyebrow="SECURITY OVERVIEW" title="Security is a control system, not a slogan." />
          <p className="w-full lg:w-[480px] pr-4 pt-3.5 pb-5 text-base leading-6 whitespace-nowrap" style={{ color: C.grey58, fontFamily: FONT }}>
            A concise, approved view of security architecture and
            <br />
            operating controls — deeper technical questions route to
            <br />
            Security Overview and Trust Center evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] py-4">
          {SECURITY_CARDS.map((card) => (
            <div
              key={card.title}
              className="h-40 p-5 rounded-xl flex flex-col gap-2"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <img src={card.icon} alt="" className="w-[34px] h-[34px]" />
              <div className="pt-1 text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="text-xs leading-5" style={{ color: C.grey58, fontFamily: FONT }}>
                {card.body.split("\n").map((line, idx) => (
                  <span key={idx} className="block whitespace-nowrap">{line}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
