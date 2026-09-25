"use client";

import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Can I use the ZoikoSuite name in an article or presentation?",
    answer:
      "You may refer to ZoikoSuite accurately in text. Logo, co-branding, sponsorship, advertising, merchandising, or other commercial brand use may require separate permission.",
  },
  {
    question: "Can I use the ZoikoSuite logo?",
    answer:
      "Use only approved current assets, and only where the asset's eligibility and your relationship/permission allow it. If unsure, request brand permission.",
  },
  {
    question: "Should I use TM or ® with ZoikoSuite?",
    answer:
      "Follow the symbol instruction shown in the verified Trademark Registry. Do not add ® unless the specific public instruction supports it.",
  },
  {
    question: 'Can I say my product "works with ZoikoSuite"?',
    answer:
      "Accurate compatibility references may be possible, but must not imply endorsement or official status. Follow the developer/integration naming rules and request review where required.",
  },
  {
    question: "Can partners use a ZoikoSuite badge?",
    answer:
      "Only current approved program participants may use the badge/version assigned to them, and only within the authorized term, territory, and channels.",
  },
  {
    question: "How do I report impersonation or misuse?",
    answer:
      "Use the brand misuse report above. Active phishing, credential theft, payment fraud, or security threats are escalated to the appropriate security route.",
  },
];

export default function TrademarkFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          FREQUENTLY ASKED
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] md:text-[26px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          Common questions
        </h2>

        {/* FAQ Accordion List */}
        <div className="w-full divide-y divide-[#DCD6C8] border-y border-[#DCD6C8]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div key={index} className="py-3.5 sm:py-4.5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                >
                  <h4 className="font-sans font-bold text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22.4px] text-[#16223A]">
                    {item.question}
                  </h4>
                  <span className="font-sans font-extrabold text-[15px] text-[#A8843A] select-none transition-transform duration-200 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-2 sm:pt-2.5 pr-2 sm:pr-8">
                    <p className="font-sans text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20px] text-[#4B5872]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
