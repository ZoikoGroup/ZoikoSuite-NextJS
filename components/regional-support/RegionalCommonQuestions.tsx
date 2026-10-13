"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const regionalFaqsData: FaqItem[] = [
  {
    id: "01",
    question: "How do I send a regional support enquiry?",
    answer:
      "Select your issue topic from the options above, fill out the focused regional support form with non-sensitive details, and submit your request for routing.",
  },
  {
    id: "02",
    question: "What should I include?",
    answer:
      "Provide a clear, safe description of the issue along with your work email, organization, and optional business impact or masked case references. Avoid sharing passwords, security codes, or payment card details.",
  },
  {
    id: "03",
    question: "Can I report a suspected disruption?",
    answer:
      "Yes, you can report service observations under 'Service Availability & Disruptions'. Note that submitting an observation does not assume or confirm an official system outage.",
  },
  {
    id: "04",
    question: "Where do privacy requests go?",
    answer:
      "Privacy, data protection, and statutory rights requests should be submitted through the dedicated Privacy & Data Protection intake pathway rather than the regional support form.",
  },
  {
    id: "05",
    question: "Can I upload logs or screenshots?",
    answer:
      "No attachments or file uploads are accepted on this public form. If required, your assigned support contact will provide a secure channel after initial review.",
  },
  {
    id: "06",
    question: "Does submission confirm support coverage?",
    answer:
      "No. A submission receipt confirms transmission only and does not establish support entitlement, SLA guarantees, or active coverage eligibility.",
  },
];

export default function RegionalCommonQuestions() {
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

        {/* Accordion Cards List */}
        <div className="space-y-4">
          {regionalFaqsData.map((item) => {
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
