import React from "react";
import SectionHead from "./SectionHead";
import { DECISION_QUESTIONS, FONT_INTER } from "./data";

export default function DecisionQuestionsSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[56px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[36px]">
        <SectionHead
          id="h-questions"
          title="Four questions a CIO tends to start with."
          body="Each one leads to the part of this page that frames it. They are buyer questions, not statements of current ZoikoSuite functionality."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {DECISION_QUESTIONS.map((q) => (
            <li key={q.code}>
              <a
                href={q.href}
                className="flex flex-col gap-[6px] h-full bg-white border border-[#E4E1D8] rounded-[14px] px-[24px] pt-[29.5px] pb-[24px] hover:border-[#CDA85B] transition-colors"
              >
                <span
                  className="text-[11px] font-bold tracking-[0.55px] text-[#B8913F]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {q.code}
                </span>
                <span
                  className="text-[19px] font-bold leading-[1.3] text-[#101E2B]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {q.question}
                </span>
                <span
                  className="pt-[2px] text-[14.5px] font-normal leading-[1.5] text-[#33424D]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {q.body}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
