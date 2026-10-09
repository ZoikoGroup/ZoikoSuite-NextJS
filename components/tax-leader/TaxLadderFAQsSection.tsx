"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function TaxLadderFAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is the ZoikoSuite Tax Ladder?",
      answer:
        "The Tax Ladder is a proposed navigational and educational construct for six stages of internal tax governance, providing a common vocabulary for tax, finance, compliance, IT, and leadership.",
    },
    {
      question: "Does Tax Ladder calculate or file taxes?",
      answer:
        "No. The Tax Ladder is not a productized filing engine, calculation tool, or source of regulatory updates, and it performs no automated tax determination, calculation, filing, or payment.",
    },
    {
      question: "How does Tax Ladder relate to Compliance Ladder?",
      answer:
        "Each related destination owns a different perspective. Tax Ladder covers only the tax responsibility and review view, while enterprise compliance policy and control framing are handled separately with no second compliance engine.",
    },
    {
      question: "Does this replace tax advisors or legal advice?",
      answer:
        "No. The Tax Ladder is an internal governance framework and is not an alternative to licensed tax advice, legal opinion, or professional guidance.",
    },
    {
      question: "Can we see examples for our countries and entities?",
      answer:
        "Currently, all examples use conceptual illustrations with fictional, masked data, as there is no jurisdiction coverage, supported-country list, or regulatory-compliance claim established on this page.",
    },
    {
      question: "What can an audit committee review?",
      answer:
        "An audit committee has authorized oversight and evidentiary questions for governance review, rather than routine task assignment or statutory certification.",
    },
  ] as const;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-30 flex items-center">
      <div className="max-w-5xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-12 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Frequently asked questions
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            Answer-first, and honest about what is not yet established.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#1F2421] tracking-tight">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#1F2421]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-black/5">
                    <p className="pt-4">{faq.answer}</p>
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
