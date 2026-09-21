"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ExecutiveBriefsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are ZoikoSuite Executive Briefs?",
      answer:
        "Concise, source-governed ZoikoSuite resources for leadership evaluation and decision support. The published inventory, topics, audiences, claims, and access rules are controlled by the approved Executive Brief Registry.",
    },
    {
      question: "Do I need to register to read an executive brief?",
      answer:
        "Some briefs are publicly available while others require registration or authorization depending on the approved access rules.",
    },
    {
      question: "Can I download executive briefs as PDF files?",
      answer:
        "Yes, downloadable assets and printable views are supported for approved executive briefs.",
    },
    {
      question: "How do I know an executive brief is current?",
      answer:
        "Each brief displays update statuses, publication dates, and explicit review validation timestamps managed via governed records.",
    },
    {
      question:
        "Can I use executive briefs for procurement or leadership review?",
      answer:
        "Yes, they are specifically structured to support leadership decisions, procurement evaluation, and governance reviews.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-4xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            11 / FAQ
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
