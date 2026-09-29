import React from "react";
import { C, FONT } from "./tokens";
import { TRAINING_CARDS } from "./data";

export default function TrainingSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col lg:flex-row items-start gap-12">
        <div className="w-full lg:w-[420px] flex flex-col gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-px" style={{ background: C.orange48 }} />
            <div className="text-xs font-semibold tracking-wide" style={{ color: C.orange48, fontFamily: FONT }}>
              TRAINING ACADEMY
            </div>
          </div>
          <h2 className="text-3xl font-bold leading-9" style={{ color: C.azure11, fontFamily: FONT }}>
            Structured learning, by role
            <br />
            and use case.
          </h2>
          <p className="text-sm leading-6" style={{ color: C.grey44, fontFamily: FONT }}>
            &quot;Certified&quot; is used only where a formally approved credential
            <br />
            exists — otherwise: completion, course, workshop, or learning
            <br />
            path.
          </p>
        </div>

        <div className="flex-1 flex flex-wrap justify-center lg:justify-end gap-[26px]">
          {TRAINING_CARDS.map((card) => (
            <div
              key={card.title}
              className="w-[318px] h-[175px] p-5 rounded-xl flex flex-col justify-between"
              style={{ background: C.white, border: `1px solid ${C.orange87}` }}
            >
              <div className="pb-2.5 text-xs font-bold uppercase tracking-wide" style={{ color: "#123255", fontFamily: FONT }}>
                {card.eyebrow}
              </div>
              <div className="text-base font-bold leading-5 whitespace-nowrap" style={{ color: C.azure11, fontFamily: FONT }}>
                {card.title}
              </div>
              <div className="flex-1 py-3 text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey44, fontFamily: FONT }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
