"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What types of partners can work with ZoikoSuite?",
    lines: [
      "Structured relationships across technology and integrations, implementation and delivery, professional or jurisdiction support,",
      "channel relationships, strategic alliances, and controlled design or validation collaboration. Public availability depends on approved",
      "partner records.",
    ],
  },
  {
    question: "What does Partner-Supported mean?",
    lines: [
      "A workflow or jurisdiction depends on an approved external provider for a defined part of delivery, expertise, filing, advice, or local",
      "execution. The exact dependency is shown, never treated as equivalent to direct platform availability.",
    ],
  },
  {
    question: "How do I become a ZoikoSuite partner?",
    lines: [
      "Choose the partnership path that matches your organization, provide capability and trust information, and submit the structured",
      "application. Submission does not guarantee acceptance or public listing.",
    ],
  },
  {
    question: "Does ZoikoSuite certify partners?",
    lines: [
      "No certification program is claimed unless one is formally defined and operational. Public partner designations reflect only the",
      "approved program and evidence that actually exists.",
    ],
  },
  {
    question: "Can partners access customer data?",
    lines: [
      "Only where the relevant integration or service requires it and contractual, security, privacy, and technical controls permit it. Partner",
      "profiles explain material data-processing boundaries where appropriate.",
    ],
  },
  {
    question: "What happens if a partner relationship changes?",
    lines: [
      "Public listings are updated or removed, internal history is preserved, and affected customer transitions are managed where",
      "applicable.",
    ],
  },
];

export default function PartnersFaqSection() {
  // All open by default as shown in Figma
  const [closedIndexes, setClosedIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setClosedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="become-a-partner"
      className="w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          FREQUENTLY ASKED
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
          Common questions
        </h2>

        <div className="w-full flex flex-col border-t border-[#DCD6C8] mt-8">
          {faqs.map((faq, index) => {
            const isOpen = !closedIndexes.includes(index);
            return (
              <div
                key={index}
                className="w-full py-6 border-b border-[#DCD6C8] cursor-pointer transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[#16223A] text-base md:text-lg font-bold tracking-tight">
                    {faq.question}
                  </h3>
                  <span className="text-[#A8843A] text-sm font-extrabold shrink-0">
                    +
                  </span>
                </div>
                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-[#4B5872] text-xs md:text-sm font-normal leading-relaxed">
                      {faq.lines.map((line, idx) => (
                        <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                          {line}
                        </span>
                      ))}
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
