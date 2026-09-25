"use client";

import React, { useState } from "react";

const faqItems = [
  {
    question: "What is the UK Privacy Notice?",
    answer: "[ One concise answer sourced from approved scope/controller text. ]",
  },
  {
    question: "How can I submit a privacy request?",
    answer: "Use the same approved request route and wording shown in the rights section above.",
  },
  {
    question: "Why does ZoikoSuite process personal data?",
    answer: "Answered only from approved purpose/legal-basis content — never a general-law explanation detached from product truth.",
  },
  {
    question: "Does ZoikoSuite transfer personal data internationally?",
    answer: "Answered only when current approved transfer disclosure supports a safe, accurate summary.",
  },
  {
    question: "Where can I complain?",
    answer: "Uses the same approved internal/regulator wording and links as the complaints section above.",
  },
];

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="py-5 sm:py-[26px] flex flex-col gap-2.5 sm:gap-3 border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Frequently Asked
      </h2>

      {/* FAQ Items */}
      <div className="w-full flex flex-col">
        {faqItems.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          const isLast = idx === faqItems.length - 1;

          return (
            <div
              key={idx}
              className={`flex flex-col gap-3 sm:gap-[17px] py-4 sm:py-[26px] border-t border-[#DCD6C8] ${
                isLast ? "border-b" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full min-h-[44px] flex items-center justify-between text-left cursor-pointer group py-1"
              >
                <span
                  className="text-[13px] sm:text-[13.5px] font-bold text-[#16223A] group-hover:text-[#A8843A] transition-colors leading-[19px] sm:leading-[21.6px]"
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                  }}
                >
                  {item.question}
                </span>
                <span
                  className="w-6 h-6 flex items-center justify-center shrink-0 text-base sm:text-lg font-extrabold text-[#A8843A] ml-3 transition-transform select-none"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="max-w-[700px] pr-2">
                  <p
                    className="text-[11.5px] sm:text-[12px] font-normal text-[#4B5872] leading-[18px] sm:leading-[19.2px]"
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
