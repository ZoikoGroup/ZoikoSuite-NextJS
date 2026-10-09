"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FrequentlyAskedQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What is a defining property?",
      answer:
        "A defining property is a core structural characteristic or operational norm that governs how decisions, responsibilities, and handoffs are legally and procedurally structured across the enterprise.",
    },
    {
      question: "Are these properties features of ZoikoSuite?",
      answer:
        "These properties represent high-level governance frameworks and review lenses rather than direct software features, serving as evaluation criteria for operational design.",
    },
    {
      question: 'Why are the lenses marked "Concept for review"?',
      answer:
        "They are marked as concepts for review to indicate that they form a proposed framework requiring organizational stakeholder approval, validation, and contextualization before operational adoption.",
    },
    {
      question: "How should we use these properties in an evaluation?",
      answer:
        "You should use these properties as an inquiry checklist to evaluate vendor readiness, internal compliance boundaries, separation of duties, and traceability requirements.",
    },
    {
      question: "Does this page show customer results or metrics?",
      answer:
        "No, this page focuses entirely on governance models and review frameworks; it does not display specific customer testimonials, performance metrics, or quantitative case studies.",
    },
    {
      question: "Where can I see the evidence behind a claim?",
      answer:
        "Evidence artifacts can be requested through your dedicated governance representative or compliance officer as part of a formal vendor or architectural evaluation process.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-12 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Frequently asked questions
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg">
            Answer-first, and honest about what is not yet established.
          </p>
        </div>

        {/* FAQs Accordion Stack */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-2xl border border-[#CFCABB] overflow-hidden shadow-sm transition-all"
              >
                {/* Accordion Header / Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F2421] tracking-tight group-hover:text-[#B49347] transition-colors pr-4">
                    {faq.question}
                  </h3>

                  {/* Chevron Icon */}
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-transform">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#1F2421]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#1F2421]" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 pt-0 border-t border-[#CFCABB] mt-2">
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed pt-4">
                      {faq.answer}
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
