"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const privacyFaqsData: FaqItem[] = [
  {
    id: "01",
    question: "How do I contact ZoikoSuite about privacy?",
    answer:
      "You can submit a focused privacy enquiry through our dedicated intake form, selecting the appropriate category for policy questions, data rights, or enterprise requests.",
  },
  {
    id: "02",
    question: "Can I submit a rights request in the general form?",
    answer:
      "No. Personal data rights requests must go through the approved specialized intake pathway to ensure security, identity verification, and proper statutory handling.",
  },
  {
    id: "03",
    question: "Where can I change cookie preferences?",
    answer:
      "Cookie preferences can be adjusted directly through our consent banner controls or by visiting the privacy settings section in your account footer.",
  },
  {
    id: "04",
    question: "Can I request enterprise privacy documents?",
    answer:
      "Yes. Enterprise customers and partners can request data processing agreements, subprocessor lists, and policy documentation via the enterprise privacy enquiry route.",
  },
  {
    id: "05",
    question: "Where should security incidents go?",
    answer:
      "Security or privacy incidents must be reported through our dedicated incident response channel to keep urgent matters separate from ordinary enquiries.",
  },
  {
    id: "06",
    question: "Does the London office determine legal ownership?",
    answer:
      "No. The London office provides regional contact context but does not establish legal ownership, jurisdiction, service coverage, or walk-in availability.",
  },
];

export default function PrivacyCommonQuestions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              COMMON QUESTIONS
            </p>
          </div>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight">
            Before you send an enquiry.
          </h2>
        </div>

        {/* Full-width Accordion List */}
        <div className="space-y-4">
          {privacyFaqsData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className="text-[#1E293B] text-base md:text-lg font-bold pr-4 group-hover:text-[#386665] transition-colors duration-200">
                    {item.question}
                  </span>
                  <div className="text-[#386665] flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#386665]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#386665]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-2xl">
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
