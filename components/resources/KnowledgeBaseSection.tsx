import React from "react";
import { C, FONT } from "./tokens";
import { KB_ARTICLES } from "./data";

export default function KnowledgeBaseSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey95 }}>
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1 flex flex-wrap gap-4">
          {KB_ARTICLES.map((card) => (
            <div
              key={card.title}
              className="w-80 min-h-44 p-5 rounded-xl flex flex-col justify-between"
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
            </div>
          ))}
        </div>

        <div className="w-full lg:w-96 flex flex-col gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-px" style={{ background: C.orange48 }} />
            <div className="text-xs font-semibold tracking-wide" style={{ color: C.orange48, fontFamily: FONT }}>
              KNOWLEDGE BASE
            </div>
          </div>
          <h2 className="text-3xl font-bold leading-9" style={{ color: C.azure11, fontFamily: FONT }}>
            Task-based self-service.
          </h2>
          <p className="text-sm leading-6" style={{ color: C.grey44, fontFamily: FONT }}>
            Symptom and task language, with escalation to Support when
            <br />
            self-service isn&apos;t enough — never a dead end.
          </p>
        </div>
      </div>
    </section>
  );
}
