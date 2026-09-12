"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  linkText?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is ZoikoSuite, in one paragraph?",
    answer:
      "A governed business operations intelligence platform connecting operational context, policy and obligations, delegated authority, accountable human decisions, execution in approved systems, preserved evidence and controlled intelligence. It is designed to be evaluated and adopted alongside the systems you already run, rather than as a replacement programme.",
    linkText: "See the eight at-a-glance answers",
  },
  {
    question: "Does it replace our existing systems?",
    answer:
      "No. ZoikoSuite is designed to integrate and operate alongside your existing infrastructure, providing the governance, evidence, and intelligence layer without requiring a costly and disruptive replacement program.",
  },
  {
    question: "Can we download this brief as a PDF?",
    answer:
      "Yes, this entire solution brief can be printed or saved directly from your browser using standard print-to-PDF functionality.",
  },
  {
    question: "Is any of this content gated?",
    answer:
      "No. All chapters, claims, and architectural overviews on this page are fully open and ungated for evaluation by your committee.",
  },
  {
    question: "How is decision authority controlled?",
    answer:
      "Decision authority is governed by explicit role assignments, delegation schedules, and tracked human sign-offs, ensuring automated systems never hold autonomous corporate or legal authority.",
  },
  {
    question: "Can AI approve or execute anything?",
    answer:
      "No. AI operates strictly within a bounded boundary, providing proposed findings and analysis only. It cannot approve, execute, or mark anything ready.",
  },
  {
    question: "Does this establish audit certification or admissibility?",
    answer:
      "This brief outlines architectural capabilities and controls. Formal audit certification or regulatory admissibility is established through specific deployment agreements and verification audits.",
  },
  {
    question: "Is there a fit score or assessment of our organization?",
    answer:
      "No. There are no automated fit scores or subjective maturity assessments; evaluation is based on structural fit against your specific governance pathways.",
  },
  {
    question: "Where are the customer stories?",
    answer:
      "Customer stories are omitted when no approved record is currently referenced, maintaining strict factual accuracy without placeholder narratives.",
  },
  {
    question: "Will you give us an ROI figure?",
    answer:
      "ROI figures depend entirely on your organization's baseline operational scale, risk profile, and existing overhead, which are evaluated during custom enterprise discussions.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-5xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Objections a committee raises
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
              <div key={idx} className="border-b border-[#CBD5E1] py-5">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#A07A2E] transition-colors pr-4">
                    {item.question}
                  </span>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono font-bold text-[#A07A2E] shrink-0">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-8 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                      {item.answer}
                    </p>
                    {item.linkText && (
                      <a
                        href="#eight-steps"
                        className="text-xs font-bold text-[#0F476A9] hover:underline inline-block mt-1"
                      >
                        {item.linkText} &rarr;
                      </a>
                    )}
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
