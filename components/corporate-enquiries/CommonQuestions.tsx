"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const commonQuestionsData: FaqItem[] = [
  {
    id: "01",
    question: "How do I contact ZoikoSuite about a general corporate matter?",
    answer:
      "You can choose a corporate topic above to shape your message or use the corporate enquiry form to submit general organizational correspondence directly to headquarters.",
  },
  {
    id: "02",
    question: "Should I use this page for a product demo or purchase?",
    answer:
      "No. For product purchases, licensing, or sales inquiries, please visit the Enterprise Sales route to connect with the dedicated commercial team.",
  },
  {
    id: "03",
    question: "Can I submit an official legal notice here?",
    answer:
      "No. Physical and digital addresses on this directory do not constitute formal acceptance for legal service of process or regulatory notice.",
  },
  {
    id: "04",
    question: "Do I need to provide an organization or country?",
    answer:
      "Providing your organization and jurisdiction helps ensure your enquiry is directed to the appropriate regional contact or specialist team.",
  },
  {
    id: "05",
    question: "What information should I leave out?",
    answer:
      "Please do not include confidential employee data, personal health information, passwords, financial account credentials, or proprietary source code.",
  },
  {
    id: "06",
    question: "Is a response time guaranteed?",
    answer:
      "No response-time promises or guaranteed SLAs are provided for general corporate enquiries.",
  },
];

export default function CommonQuestions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              COMMON QUESTIONS
            </p>
          </div>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight">
            Before you send your enquiry.
          </h2>
        </div>

        {/* Minimal Bordered Accordion List */}
        <div className="border-t border-[#E2E8F0]/80">
          {commonQuestionsData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-[#E2E8F0]/80 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
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
                  <div className="pb-6 pt-1">
                    <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-3xl">
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
