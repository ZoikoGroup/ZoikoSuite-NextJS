import React from "react";
import { FONT_GEORGIA, FONT_INTER, SUMMARY_CARDS } from "./data";

export default function AtAGlanceSummarySection() {
  return (
    <section
      aria-labelledby="at-a-glance-title"
      className="w-full bg-[#F6F1E6] border-y border-[#DCD6C8] py-16 px-6 md:px-12 lg:px-32"
      style={{ fontFamily: FONT_INTER }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8 flex flex-col gap-2.5">
        <p className="text-xs font-bold uppercase leading-4 tracking-wider text-[#A8843A]">
          At-a-glance privacy summary
        </p>
        <h2
          id="at-a-glance-title"
          className="w-full text-2xl font-bold leading-9 tracking-[-0.24px] text-[#16223A]"
          style={{ fontFamily: FONT_GEORGIA }}
        >
          A plain-language map — not a replacement for the legal body
        </h2>

        <div className="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          {SUMMARY_CARDS.map((card) => (
            <div
              key={card.label}
              className="flex flex-col gap-2 rounded-lg border border-[#DCD6C8] bg-white p-6"
            >
              <span className="text-xs font-bold uppercase leading-5 tracking-wider text-[#A8843A]">
                {card.label}
              </span>
              <span className="text-xs font-normal leading-5 text-[#4B5872]">
                {card.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
