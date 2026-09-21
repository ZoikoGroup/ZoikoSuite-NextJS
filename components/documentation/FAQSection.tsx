"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is ZoikoSuite Documentation?",
      answer:
        "A public Resources destination for approved ZoikoSuite documentation. Exact products, topics, and versions shown depend on the published Documentation Registry.",
    },
    {
      question: "How do I know whether an article is current?",
      answer:
        "Every article displays a status and version badge (such as Published Current, Review Due, or Deprecated) indicating its validity and currency state.",
    },
    {
      question: "Are code examples safe to copy?",
      answer:
        "Yes, all code snippets and configuration examples are validated against approved documentation sources and standard compliance rules.",
    },
    {
      question: "What if I can't complete a documented task?",
      answer:
        "You can check the related troubleshooting section or access the Open Support Center handoff for guided assistance.",
    },
    {
      question: "Does Documentation require a sales conversation?",
      answer:
        "No, documentation browsing, task guides, and library references are freely accessible without requiring a sales conversation.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            09 / FAQ
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          Frequently asked questions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[#111827] font-semibold text-base sm:text-lg tracking-tight">
                    {faq.question}
                  </span>
                  <span className="text-[#C29B38] shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
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
