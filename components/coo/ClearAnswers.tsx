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
    question: "Is this a live operating dashboard?",
    answer:
      "This section represents a conceptual governance model. Live signals, integrations, and operational feeds are evaluated and configured according to enterprise requirements.",
  },
  {
    id: "02",
    question: "Can a COO access all workforce or financial records?",
    answer:
      "No. Operations governance maintains strict role segregation. Sensitive workforce, payroll, and financial records remain under HR and Finance domain authority.",
  },
  {
    id: "03",
    question: "Are exceptions resolved automatically?",
    answer:
      "Exceptions are triaged, tracked, and assigned to accountable owners. Resolution requires explicit verification and human sign-off rather than automatic overrides.",
  },
  {
    id: "04",
    question: "Does continuity mean guaranteed uptime?",
    answer:
      "Continuity frameworks define dependency mapping, failover pathways, and incident logging—they establish governance structures rather than operational SLAs.",
  },
];

export default function ClearAnswers() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#F6F5F1] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight">
            Clear answers before evaluation.
          </h2>
        </div>

        {/* Accordion / FAQ List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-2 h-2 rounded-full bg-[#1E293B] inline-block flex-shrink-0" />
                    <span className="text-[#1E293B] text-base md:text-lg font-bold">
                      {item.question}
                    </span>
                  </div>
                  <div className="text-[#64748B] flex-shrink-0 ml-4">
                    {isOpen ? (
                      <X className="w-5 h-5 text-[#64748B]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#64748B]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-6 pt-2 border-t border-[#F1F5F9]">
                    <p className="text-[#64748B] text-sm md:text-base leading-relaxed pl-6">
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
