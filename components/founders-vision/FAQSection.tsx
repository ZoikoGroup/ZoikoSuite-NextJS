"use client"
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "What is the founder's vision for ZoikoSuite?",
      answer:
        "ZoikoSuite is being built around governance before execution: material actions should carry policy, authority, entity, jurisdiction, and evidence context so organizations can move without separating speed from accountability.",
    },
    {
      question: "Who is the founder behind the vision?",
      answer:
        "Current public Zoiko Group sources identify Lennox McLeod as Founder & Executive Chairman of Zoiko Group. He is not described as Founder of ZoikoSuite unless that title is formally approved.",
    },
    {
      question: "What role does AI play in the vision?",
      answer:
        "AI supports analysis, forecasting, reconciliation, extraction, and decision support inside policy, provenance, and human-review boundaries. It must not bypass authority or silently replace source truth.",
    },
    {
      question: "Is every part of the founder's vision available today?",
      answer:
        "No blanket statement. Each capability remains status-qualified as current architecture, phased delivery, architecture target, roadmap, or availability by deployment/jurisdiction.",
    },
    {
      question: "How can an enterprise evaluate the vision?",
      answer:
        "Use architecture proof, product demonstrations, validation results, approved customer evidence when available, and independent assurance when verified. Routes to Trust, resources, and enterprise demo.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full py-6 border-b border-gray-200 flex flex-col cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight">
                    {faq.question}
                  </h3>
                  <span className="text-[#A8843A] text-xl font-bold shrink-0 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mt-3 pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
