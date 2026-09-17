"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  hasLink?: boolean;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does ZoikoSuite replace our POS, e-commerce or OMS?",
    answer:
      "No, ZoikoSuite does not compete with commerce engines. Checkout, POS transactions, catalog, pricing execution, order orchestration, inventory, fulfillment, returns processing and payment execution all stay with the systems that do them.",
    hasLink: true,
  },
  {
    question: "What does it govern, then?",
    answer:
      "ZoikoSuite governs policy, decision and evidence records, contract obligations, authority mappings, and cross-system audit trails while leaving operational transaction execution to your incumbent stack.",
  },
  {
    question: "Are you PCI or GDPR compliant?",
    answer:
      "We maintain rigorous security controls and readiness postures, but compliance certifications and applicability depend entirely on your specific enterprise deployment and data handling scope.",
  },
  {
    question: "How is payment scope handled?",
    answer:
      "Payment processing and merchant platforms remain completely outside ZoikoSuite integration scope as non-integrated boundaries.",
  },
  {
    question: "Does it touch cardholder or customer data?",
    answer:
      "No. Cardholder data and direct consumer personal data remain strictly within your POS, e-commerce, and payment gateway systems.",
  },
  {
    question: "Do you connect to payment processing?",
    answer:
      "No. Payment processing systems operate with no connection or integration into ZoikoSuite.",
  },
  {
    question: "Can AI price products or approve refunds?",
    answer:
      "No. AI is strictly bounded and is explicitly prohibited from pricing products, changing pricing, or approving refunds, credits, or customer remediation.",
  },
  {
    question: "How do you handle marketplace terms changing?",
    answer:
      "Marketplace terms and contractual changes are flagged as review exceptions for human evaluation against your governance and evidence records.",
  },
  {
    question: "Do we have to replatform to adopt this?",
    answer:
      "No. ZoikoSuite positions around your incumbent commerce stack via non-invasive integration and shadow mode without requiring any replatforming.",
  },
  {
    question: "Do you have retail customers you can reference?",
    answer:
      "No approved retail or commerce customer story exists. No anonymised composite, store count, conversion figure or representative outcome is substituted.",
  },
];

export default function RetailFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Scope, coexistence, payments, privacy and AI
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-[#DBE3E8]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#DBE3E8] py-5 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#C59B3F] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-lg font-mono font-bold text-gray-500 ml-4 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                    {item.hasLink && (
                      <div className="mt-2">
                        <a
                          href="#boundary"
                          className="text-xs font-mono font-bold text-[#0F476A] hover:underline inline-flex items-center gap-1"
                        >
                          See the boundary →
                        </a>
                      </div>
                    )}
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
