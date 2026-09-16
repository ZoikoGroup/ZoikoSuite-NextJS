"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  hasLink?: boolean;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is an organization pattern?",
    answer:
      "A description of how an organization is structured and governed — delegation of authority, where accountability sits, entity and jurisdiction scope, and what oversight applies.\n\nNine patterns are published, and every one uses the same fit contract so they can be compared on equal terms. See the nine",
    hasLink: true,
  },
  {
    question: "Does selecting a pattern classify our organization?",
    answer:
      "No classification, eligibility, entitlement, pricing, plan assignment or capability commitment follows from any pattern selection.",
  },
  {
    question: "Is there a size threshold for any pattern?",
    answer:
      "Patterns describe structure and governance context rather than revenue, headcount, or asset size thresholds.",
  },
  {
    question: "Is there a fit or maturity score?",
    answer:
      "No. Every evaluation uses explicit structural criteria and text-based findings rather than composite scoring or ranking.",
  },
  {
    question: "How is organization type different from industry?",
    answer:
      "Organization type describes how an organization is structured and governed, whereas industry describes the sector in which it operates.",
  },
  {
    question: "Does the Multi-Entity pattern handle statutory consolidation?",
    answer:
      "The Multi-Entity pattern addresses scoped governance, shared services, and accountability contexts rather than automated statutory consolidation accounting.",
  },
  {
    question:
      "Does the Public Company pattern support SOX or securities filing?",
    answer:
      "It provides internal-control context and role separation for review, but does not assert formal securities compliance or automated filing capabilities.",
  },
  {
    question: "Does the Public-Sector pattern imply government authorization?",
    answer:
      "No. The pattern establishes public accountability diligence context, but does not grant government authorization or statutory certification.",
  },
  {
    question: "Does the Nonprofit pattern handle grants or restricted funds?",
    answer:
      "It supports stewardship and board oversight context, but does not provide dedicated fund-accounting or grant-management software execution.",
  },
  {
    question:
      "Does the Professional Partnership pattern cover trust accounts or licensing?",
    answer:
      "It addresses partner-led authority and workforce handoffs, but does not replace legal trust accounting systems or professional licensing boards.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Patterns, classification, thresholds and boundaries
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
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
                className="border-b border-[#DBE3E8] py-5 transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#A07A2E] transition-colors">
                    {item.question}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 ml-4 text-[#A07A2E]">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12">
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed whitespace-pre-line">
                      {item.answer.replace("See the nine", "")}
                      {item.hasLink && (
                        <a
                          href="#"
                          className="font-semibold text-[#0F172A] underline hover:text-[#A07A2E] ml-1"
                        >
                          See the nine
                        </a>
                      )}
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
