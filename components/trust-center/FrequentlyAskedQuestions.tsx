"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answerParagraphs: (string | { text: string; linkText: string })[];
}

const faqs: FaqItem[] = [
  {
    question: "Are you SOC 2 or ISO 27001 certified?",
    answerParagraphs: [
      "No. No independent certification is currently held, and no certification logo appears anywhere on this site.",
      'Control mapping and readiness work are underway for both, carrying the status "readiness" with a next evidence gate. A logo will appear only when an issuer, scope, period and access rule can be published alongside it. See the separation',
    ],
  },
  {
    question: "What do the nine claim statuses mean?",
    answerParagraphs: [
      "Claim statuses provide explicit transparency into what is currently public, controlled, or unavailable, avoiding misleading blanket compliance claims.",
    ],
  },
  {
    question: "Where does our data live?",
    answerParagraphs: [
      "Data residency is handled as a lifecycle question across storage, processing, and transit stages rather than a single static region.",
    ],
  },
  {
    question: "Can we see your penetration test or audit report?",
    answerParagraphs: [
      "Controlled-access evidence such as test reports and security questionnaires are released under NDA through a qualified security review.",
    ],
  },
  {
    question: "What is your uptime guarantee?",
    answerParagraphs: [
      "A live status source is the authoritative view of service health; uptime percentages are not restated here to prevent serving cached or outdated data.",
    ],
  },
  {
    question: "Why are most Trust destinations not linked?",
    answerParagraphs: [
      "Destinations remain unlinked when direct automated access is restricted or controlled to ensure proper context and security review before exposure.",
    ],
  },
  {
    question: "Is the product accessible?",
    answerParagraphs: [
      "The product is designed to WCAG 2.2 AA standards, with formal conformance documentation in validation before any official conformity claim is made.",
    ],
  },
  {
    question: "What can AI do without a human?",
    answerParagraphs: [
      "AI can detect anomalies, forecast exposure, and provide decision support, but it cannot make autonomous material decisions or alter source truth.",
    ],
  },
  {
    question: "Is the evidence legally admissible or tamper-proof?",
    answerParagraphs: [
      "Evidence features append-only records and cryptographic validation where implemented, supporting transparent accountability and audit lineage.",
    ],
  },
  {
    question: "Do you have customer references?",
    answerParagraphs: [
      "Approved customer stories with evidence class, period, and limitations are published strictly as they become available and verified.",
    ],
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Certification, privacy, residency, AI and access
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#E5E7EB]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E5E7EB]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base md:text-lg font-bold text-[#111827] group-hover:text-[#C9B07A] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-[#C9B07A] ml-4 shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12 space-y-4 text-[14px] md:text-[15px] text-[#4B5563] leading-relaxed animate-fadeIn">
                    {faq.answerParagraphs.map((para, pIndex) => {
                      if (index === 0 && pIndex === 1) {
                        return (
                          <p key={pIndex}>
                            Control mapping and readiness work are underway for
                            both, carrying the status &quot;readiness&quot; with
                            a next evidence gate. A logo will appear only when
                            an issuer, scope, period and access rule can be
                            published alongside it.{" "}
                            <a
                              href="#"
                              className="text-[#111827] font-medium underline hover:text-[#C9B07A]"
                            >
                              See the separation
                            </a>
                          </p>
                        );
                      }
                      return <p key={pIndex}>{para as string}</p>;
                    })}
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
