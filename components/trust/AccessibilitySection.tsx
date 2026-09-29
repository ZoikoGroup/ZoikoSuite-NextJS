import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { A11Y_CARDS } from "./data";

export default function AccessibilitySection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey96 }}>
      <div className="w-full max-w-[1200px] px-8 py-16 flex flex-col gap-6">
        <div className="flex flex-col justify-end gap-4">
          <SectionHead
            eyebrow="ACCESSIBILITY"
            title="Evaluated, scoped, and continuously maintained."
          />
          <p className="w-full lg:w-[600px] pr-2 pt-3.5 pb-5 text-base leading-6 whitespace-nowrap" style={{ color: C.grey58, fontFamily: FONT }}>
            WCAG is treated as a technical standard, not a certification
            <br />
            program.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] py-4">
          {A11Y_CARDS.map((card) => (
            <div
              key={card.title}
              className="w-[270px] h-[156px] p-5 rounded-xl flex flex-col gap-2"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div className="text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey58, fontFamily: FONT }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
