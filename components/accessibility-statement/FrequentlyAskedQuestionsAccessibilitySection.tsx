"use client"
import React, { useState } from "react";

export default function FrequentlyAskedQuestionsAccessibilitySection() {
  const faqs = [
    {
      question: "Is ZoikoSuite accessible?",
      answer:
        'Answered using current approved status and scope — never a blanket "yes."',
    },
    {
      question: "Does ZoikoSuite conform to WCAG 2.2 AA?",
      answer:
        "Rendered as target / assessment-in-progress / partial / full status from the registry, with scope and date explained.",
    },
    {
      question: "How do I report an accessibility issue?",
      answer:
        "Use the direct accessible reporting route above, or the alternate contact method if the form is inaccessible.",
    },
    {
      question: "Which assistive technologies are tested?",
      answer:
        "Only maintained test combinations are listed, or linked to current accessibility evidence.",
    },
    {
      question: "Does ZoikoSuite provide a VPAT or ACR?",
      answer:
        "Current artifact availability and request path are stated — one is never promised if not approved.",
    },
    {
      question: "Does this statement cover third-party integrations?",
      answer:
        "Scope and dependency boundaries are explained, along with known alternatives.",
    },
  ] as const;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#DCD6C8] py-6 first:border-t"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#A8843A] text-xl font-medium transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
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
