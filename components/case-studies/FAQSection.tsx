"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are ZoikoSuite case studies?",
    answer:
      "Public, source-approved customer stories describing an operating challenge, the ZoikoSuite capabilities used, implementation context, and approved outcomes. Only current approved evidence is published.",
  },
  {
    question: "Are the results guaranteed?",
    answer:
      "Results depend on individual organizational context, baseline maturity, and implementation scope. Case study metrics reflect specific past deployments and are shared as illustrative examples rather than guarantees.",
  },
  {
    question: "Where do the metrics come from?",
    answer:
      "Metrics are derived directly from verified customer telemetry, internal audit logs, and post-implementation reviews conducted in partnership with the customer stakeholders.",
  },
  {
    question: "Why is a customer name sometimes not shown?",
    answer:
      "Customer identities, specific quotes, and brand assets appear only when explicitly approved for public use by the organization's legal and communications teams.",
  },
  {
    question: "Can I download or print a case study?",
    answer:
      "Yes, structured PDF export options are available for all published case studies to facilitate internal reviews and stakeholder sharing.",
  },
] as const;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            09 / FAQ
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-10">
          Frequently asked questions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-4 w-full">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[#111827] font-semibold text-lg">
                    {item.question}
                  </span>
                  <span className="text-[#A07A2E] shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-[#F3F4F6]">
                    <p className="text-[#4B5563] text-base leading-relaxed">
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
