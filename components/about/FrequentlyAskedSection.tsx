"use client"
import React, { useState } from "react";

export default function FrequentlyAskedSection() {
  const faqs = [
    {
      question: "What is ZoikoSuite?",
      answer:
        "A governed business operations intelligence platform that connects finance, workforce, legal, tax, compliance, and intelligence under one policy-aware, entity-aware, jurisdiction-aware control model.",
    },
    {
      question: "Is ZoikoSuite an ERP?",
      answer:
        "No — it is a governance-first operating platform that can coexist with existing systems, govern actions across them, and progressively replace components where justified.",
    },
    {
      question: "Does ZoikoSuite use AI?",
      answer:
        "Yes, as governed intelligence — operating within policy, approval, evidence, provenance, and human-review boundaries.",
    },
    {
      question: "What deployment models are supported?",
      answer:
        "Multi-tenant SaaS, dedicated environment, single-tenant enterprise, and sovereign/customer-controlled options, each explicitly qualified by availability.",
    },
    {
      question: "Who develops and operates ZoikoSuite?",
      answer:
        "Zoiko Tech, a Zoiko Group company, headquartered in Sacramento, California, with a European headquarters in London, United Kingdom.",
    },
  ] as const;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline (32px and bold) */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full py-6 border-b border-gray-300 flex flex-col cursor-pointer transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight">
                    {faq.question}
                  </h3>
                  <span className="text-[#A8843A] text-xl font-bold transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
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
