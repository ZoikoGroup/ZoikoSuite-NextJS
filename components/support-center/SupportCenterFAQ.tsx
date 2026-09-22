"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the ZoikoSuite Support Center?",
    answer:
      "A public Resources destination for finding help resources, following guided troubleshooting, and reaching the right support pathway when self-service isn't enough.",
  },
  {
    question: "How do I know which support channels are available to me?",
    answer:
      "Available channels and service commitments are dynamically shown based on your verified plan, entitlements, and current context.",
  },
  {
    question: "Is my case data private?",
    answer:
      "Yes, all troubleshooting data and support requests are strictly encrypted and handled in compliance with rigorous security and privacy policies.",
  },
  {
    question: "Does response time come with a guarantee?",
    answer:
      "Service level agreements and guaranteed response times apply strictly to enterprise support entitlements as specified in your agreement.",
  },
  {
    question: "Where do I report a security issue?",
    answer:
      "Security concerns can be reported directly through our secure vulnerability reporting channel or designated security escalation path.",
  },
] as const;

export default function SupportCenterFAQ() {
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
            11 / FAQ
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
