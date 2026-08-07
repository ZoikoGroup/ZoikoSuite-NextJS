"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  subAnswer?: string;
  linkText?: string;
}

const faqItemsData: FaqItem[] = [
  {
    question: "What is Governed Business Operations Intelligence?",
    answer:
      "It is a software category connecting operational context, governance, authority, human review, controlled execution, evidence, exceptions, analytics, and governed AI.",
    subAnswer:
      "The category formula is business context plus governance plus authorized action plus evidence plus continuous intelligence. A product missing any one of those parts belongs to a different category.",
    linkText: "See the definition",
  },
  {
    question: "How is it different from business intelligence?",
    answer:
      "Business intelligence focuses on reporting and data visualization from historical logs, whereas Governed Business Operations Intelligence connects operational context directly with live governance, authority, and controlled execution prior to actions taking place.",
  },
  {
    question: "How is it different from ERP?",
    answer:
      "Traditional ERP systems manage transactional records and workflows within predefined enterprise structures, while Governed Business Operations Intelligence layers multi-entity authority boundaries, continuous evidence generation, and real-time policy evaluation across disparate systems.",
  },
  {
    question: "How is it different from GRC?",
    answer:
      "Governance, Risk, and Compliance (GRC) tools typically track policies, risks, and audits post-hoc or via documentation workflows. Governed Business Operations Intelligence integrates governance controls and policy enforcement directly inside the operational runtime loop.",
  },
  {
    question: "Does GBOI replace existing systems?",
    answer:
      "No. It acts as an intelligence and governance orchestration layer that integrates with your existing ERPs, CRMs, and custom databases without requiring core system replacement.",
  },
  {
    question: "How does governance work inside an action?",
    answer:
      "Every proposed operational action is evaluated against active policy frameworks, jurisdictional boundaries, and required approval routes before execution is authorized or blocked.",
  },
  {
    question: "What is evidence by default?",
    answer:
      "Evidence by default means that operational artifacts, decision logs, approvals, and context parameters are automatically captured and structured as tamper-evident records during standard execution.",
  },
  {
    question: "How is AI governed?",
    answer:
      "AI is restricted to read-only authorized sources within the requesting user's explicit permission scope, ensuring outputs adhere to deterministic policy limits without unvouched autonomous execution.",
  },
  {
    question: "Can it support multiple entities and jurisdictions?",
    answer:
      "Yes. The architecture is built natively for multi-entity, multi-jurisdiction isolation, managing disparate regulatory requirements and localized data boundaries within a unified control framework.",
  },
  {
    question: "Does ZoikoSuite provide regulated professional advice?",
    answer:
      "No. ZoikoSuite does not provide legal, tax, accounting, audit, investment, employment, or other regulated professional advice. Qualified professionals remain responsible for final review.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Category, differentiation, and boundaries
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Direct first sentences, then qualified detail. Every answer is
            present in the page source.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="w-full flex flex-col border-t border-[#DBE3E8]">
          {faqItemsData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="border-b border-[#DBE3E8]">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 flex items-center justify-between text-left group transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0f172a] group-hover:text-[#0F476A] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 flex items-center justify-center shrink-0 text-[#A07A2E] group-hover:border-[#0F476A] group-hover:text-[#0F476A] transition-colors">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12 flex flex-col gap-3">
                    <p className="text-xs max-w-3xl sm:text-sm text-[#0f172a] leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                    {faq.subAnswer && (
                      <p className="text-xs max-w-3xl sm:text-sm text-[#64748b] leading-relaxed">
                        {faq.subAnswer}
                        {faq.linkText && (
                          <a
                            href="#"
                            className="inline-block ml-1.5 text-[#0F476A] font-semibold hover:underline"
                          >
                            {faq.linkText}
                          </a>
                        )}
                      </p>
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
