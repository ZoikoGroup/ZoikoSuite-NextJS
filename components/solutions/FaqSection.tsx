"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "What problems does ZoikoSuite solve?",
    answer:
      "ZoikoSuite addresses fragmentation across finance, workforce, legal, tax, compliance, evidence, and intelligence, using governance-before-execution and source-controlled proof rather than after-the-fact reconciliation.",
  },
  {
    question: "Who is ZoikoSuite designed for?",
    answer:
      "ZoikoSuite is designed for enterprise executives, boards, procurement teams, CFOs, CIOs, architecture leaders, risk officers, auditors, and CISOs seeking robust multi-entity governance and cross-border operational integrity.",
  },
  {
    question: "Is ZoikoSuite an ERP replacement?",
    answer:
      "No, ZoikoSuite is not an ERP replacement. It functions as a specialized governance, execution control, and evidence layer that coexists with and connects existing systems of record and transaction platforms.",
  },
  {
    question: "How does ZoikoSuite support multi-entity operations?",
    answer:
      "It supports complex multi-entity structures by managing parent-subsidiary-branch hierarchies, reporting lines, delegated authority limits, and localized operational context across organizational boundaries.",
  },
  {
    question: "How does ZoikoSuite handle different jurisdictions?",
    answer:
      "ZoikoSuite maps country, state, and regulatory boundaries directly into workflows, pairing them with explicit coverage statuses, residency constraints, and jurisdiction-specific rules without claiming universal global compliance.",
  },
  {
    question: "How is AI used in ZoikoSuite solutions?",
    answer:
      "AI is integrated under strict control boundaries to assist with data mapping, policy evaluation, and insight generation, ensuring all outputs remain fully auditable and bound to verified sources of truth.",
  },
  {
    question: "Can ZoikoSuite integrate with existing systems?",
    answer:
      "Yes, ZoikoSuite integrates via versioned APIs and event-driven architectures with built-in data provenance, idempotency controls, and governed external actions to work seamlessly alongside legacy infrastructure.",
  },
  {
    question: "How can I evaluate security, privacy, and compliance?",
    answer:
      "You can evaluate security, privacy, and compliance through our comprehensive Architecture Briefs, explicit claim statuses scoped to individual workflows, and transparent security overviews rather than blanket badge claims.",
  },
  {
    question: "How do I know which solution fits?",
    answer:
      "You can determine the right fit by reviewing our Solution Blueprint and Resource Center briefs tailored for specific executive, financial, architectural, and security roles before engaging in detailed discussions.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-5xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-8">
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
              FAQ
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15]">
            Common questions about ZoikoSuite solutions
          </h2>
        </div>

        {/* FAQ List Container */}
        <div className="w-full border-t border-[#D9D3C7]">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#D9D3C7] py-6 transition-colors px-4 rounded-xl"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex cursor-pointer items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-base font-bold text-[#08222F]">
                    {item.question}
                  </h3>
                  <div className="w-6 h-6 flex items-center justify-center text-gray-500 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#C59B3F]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && item.answer && (
                  <div className="mt-4 pr-12">
                    <p className="text-xs sm:text-sm text-gray-600 font-mono leading-relaxed">
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
