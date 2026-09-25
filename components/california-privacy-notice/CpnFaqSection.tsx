"use client";

import React, { useState } from "react";
import { FAQS, FONT_GEORGIA, FONT_INTER } from "./data";
import { ClauseSection } from "./NoticeSection";

export default function CpnFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ClauseSection id="faq" title="Frequently Asked">
      <div className="flex flex-col" style={{ fontFamily: FONT_INTER }}>
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`pt-8 pb-3.5 border-t border-[#DCD6C8] flex flex-col gap-4 ${
                index === FAQS.length - 1 ? "border-b" : ""
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`cpn-faq-panel-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-start justify-between gap-6 text-left"
              >
                <span
                  className="text-sm font-bold leading-5 text-[#16223A]"
                >
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="select-none text-sm font-extrabold leading-5 text-[#A8843A]"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div id={`cpn-faq-panel-${index}`} className="max-w-[700px]">
                  <p className="text-xs font-normal leading-5 text-[#4B5872]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </ClauseSection>
  );
}
