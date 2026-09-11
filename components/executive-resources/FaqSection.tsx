"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answerParagraph1: string;
  answerParagraph2?: React.ReactNode;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What are ZoikoSuite Executive Resources?",
    answerParagraph1:
      "A decision-support hub providing decision-first discovery, source-approved resources, a neutral business-case framework, a transparent value-assessment method and direct routes to architecture, trust and customer evidence.",
    answerParagraph2: (
      <>
        Every resource carries its publication state, freshness, access level
        and accessibility state. Resources not approved for publication do not
        appear.{" "}
        <a
          href="#decision"
          className="font-semibold text-[#0F476A] hover:underline"
        >
          Start with a decision
        </a>
      </>
    ),
  },
  {
    question: "Why is the resource library empty?",
    answerParagraph1:
      "The resource library reflects the current state of publication. When assets are approved and published, they will appear here automatically.",
  },
  {
    question: "Why is there no search box?",
    answerParagraph1:
      "A search box encourages browsing keywords rather than evaluating structured decisions. We provide direct paths organized by role and stage instead.",
  },
  {
    question: "Will you give us an ROI figure or industry benchmark?",
    answerParagraph1:
      "No. ROI figures require an approved method version, source, owner, and formulas that do not currently exist.",
  },
  {
    question: "What happens when a numeric method is approved?",
    answerParagraph1:
      "When an approved numeric method becomes available, it will be published with its full source, owner, and sensitivity model.",
  },
  {
    question: "Does the business case builder recommend buying ZoikoSuite?",
    answerParagraph1:
      "No. The builder is completely neutral and generates no automatic recommendations or vendor conclusions.",
  },
  {
    question: "Can I download a business case template?",
    answerParagraph1:
      "Templates are only offered when they correspond to published, approved framework versions.",
  },
  {
    question: "Where are the CFO, CHRO and board resource hubs?",
    answerParagraph1:
      "Hubs that are not yet published route directly to the closest available material currently carrying that context.",
  },
  {
    question: "Are role filters used to profile me?",
    answerParagraph1:
      "No. Role paths simply route you to the relevant existing documentation without tracking or profiling.",
  },
  {
    question: "Why are there no customer stories or logos?",
    answerParagraph1:
      "Customer evidence is only linked when it connects directly to verified architectural or governance boundaries.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Availability, value, access and boundaries
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#CBD5E1]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#CBD5E1]">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0F476A] transition-colors pr-4">
                    {item.question}
                  </span>
                  <span className="text-[#A07A2E] font-mono font-bold text-lg shrink-0 w-6 h-6 flex items-center justify-center">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12 text-xs sm:text-sm text-[#475569] leading-relaxed space-y-3">
                    <p>{item.answerParagraph1}</p>
                    {item.answerParagraph2 && <p>{item.answerParagraph2}</p>}
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
