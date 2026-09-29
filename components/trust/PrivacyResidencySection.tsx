import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { PRIVACY_CARDS } from "./data";

export default function PrivacyResidencySection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 pt-[43px] pb-[35px] flex flex-col gap-6">
        <div className="flex flex-wrap items-end justify-between">
          <SectionHead eyebrow="PRIVACY & DATA RESIDENCY" title="Make data boundaries visible." />
          <p className="w-full lg:w-[480px] pr-3 pt-3.5 pb-5 text-base leading-6 whitespace-nowrap" style={{ color: C.grey58, fontFamily: FONT }}>
            Complex regional data obligations are not compressed into
            <br />
            a universal location promise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] py-4">
          {PRIVACY_CARDS.map((card) => (
            <div
              key={card.title}
              className="min-h-32 p-5 rounded-xl flex flex-col gap-2"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div className="text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
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
