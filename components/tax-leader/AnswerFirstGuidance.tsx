"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "01",
    question: "What is the ZoikoSuite Tax Ladder?",
    answer:
      "The ZoikoSuite Tax Ladder outlines proposed internal governance stages for managing tax responsibilities, ensuring structured visibility across entities and jurisdictions.",
  },
  {
    id: "02",
    question: "Does Tax Ladder calculate or file taxes?",
    answer:
      "No, Tax Ladder is not a statutory tax hierarchy, calculation engine, or filing platform. It serves as a conceptual framework for internal governance and ownership.",
  },
  {
    id: "03",
    question: "How does Tax Ladder relate to Compliance Ladder?",
    answer:
      "While Tax Ladder focuses specifically on tax-related responsibilities, ownership, and review concepts, Compliance Ladder handles broader enterprise compliance governance.",
  },
  {
    id: "04",
    question: "Does this replace tax advisors or legal advice?",
    answer:
      "No, this framework does not replace qualified tax advice, legal counsel, or professional regulatory review.",
  },
  {
    id: "05",
    question: "Can we see examples for our countries and entities?",
    answer:
      "Jurisdictions, entities, and obligation applicability require scope-specific confirmation through authorized authoritative sources.",
  },
  {
    id: "06",
    question: "What can an audit committee review?",
    answer:
      "An audit committee can review authorized evidence questions and aggregate oversight summaries without routine task assignment.",
  },
];

export default function AnswerFirstGuidance() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-start">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            ANSWER-FIRST GUIDANCE
          </p>
          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Know the limits before evaluating.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[#1E293B] text-base md:text-lg font-bold">
                    {item.question}
                  </span>
                  <div className="text-[#64748B] flex-shrink-0 ml-4">
                    {isOpen ? (
                      <X className="w-5 h-5 text-[#64748B]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#64748B]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#F1F5F9]">
                    <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
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
