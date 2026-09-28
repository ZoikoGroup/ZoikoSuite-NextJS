"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is ZoikoSuite?",
    answer:
      "ZoikoSuite is a governed business operations intelligence platform that connects shared platform services, governance, modular capabilities, evidence, and operating insight across the enterprise.",
  },
  {
    question: "How is the ZoikoSuite platform organized?",
    answer:
      "The platform is organized around shared foundational services, governance frameworks, extensible core modules, context & evidence tracking, and operating intelligence capabilities.",
  },
  {
    question: "Does ZoikoSuite replace our existing systems?",
    answer:
      "No, ZoikoSuite is designed for non-disruptive adoption. You can connect existing systems, observe operations, introduce governance progressively, and expand modular capabilities without an all-at-once replacement.",
  },
  {
    question: "How does governance work?",
    answer:
      "Governance connects policies, approvals, controls, exceptions, and evidence directly to your daily work workflows, ensuring full transparency and accountability.",
  },
  {
    question: "What is Operating Intelligence?",
    answer:
      "Operating Intelligence brings together live operational signals, exceptions, evidence, and actionable paths to give leadership and teams clear enterprise-wide visibility.",
  },
  {
    question: "How does ZoikoSuite use AI?",
    answer:
      "ZoikoSuite uses intelligent assistance bounded strictly by permissions, policy, source visibility, and human review. AI provides insights and automation but is never positioned as an autonomous legal, financial, or compliance decision-maker.",
  },
  {
    question:
      "Can ZoikoSuite support different entities, jurisdictions, or residency needs?",
    answer:
      "Yes, the platform is built with deployment-aware architecture to handle multi-entity structures, diverse jurisdictional requirements, and data residency compliance.",
  },
  {
    question: "How can I evaluate the platform before a demo?",
    answer:
      "You can explore our structured platform tour, examine technical architecture documentation, review security & trust proofs, and follow role-specific evaluation paths.",
  },
];

export default function FAQSection() {
  // Index 0 open by default to match the screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F6F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-4xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2">
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
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
            Common questions about the platform
          </h2>
        </div>

        {/* Accordion List Container */}
        <div className="w-full border-t border-[#D9D3C7]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#D9D3C7] transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#08222F] group-hover:text-[#C59B3F] transition-colors pr-4">
                    {item.question}
                  </span>
                  <div className="w-7 h-7 flex items-center justify-center text-[#08222F] shrink-0 transition-transform group-hover:border-[#C59B3F]">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12 text-sm text-gray-600 font-mono leading-relaxed">
                    {item.answer}
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
