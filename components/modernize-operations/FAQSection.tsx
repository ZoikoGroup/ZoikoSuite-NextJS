"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  subtext?: string;
  linkText?: string;
}

const FAQS: FAQItem[] = [
  {
    question:
      "What does modernizing operations with ZoikoSuite actually involve?",
    answer:
      "Establishing source ownership, choosing a target outcome per scope, migrating and reconciling, comparing in Shadow Mode, passing readiness gates, activating on a named human decision, and keeping a defined recovery position.",
    subtext:
      "Seven migration phases apply to every path, and phases can overlap by workstream.",
    linkText: "See the pattern",
  },
  {
    question: "Do we have to replace our ERP or HCM?",
    answer:
      "No. Modernization can target specific operational scopes and workflows independently, allowing you to improve difficult areas without forcing a disruptive, universal system replacement.",
    subtext:
      "ERP / HCM replacement claims are handled object by object, not as a blanket rule.",
  },
  {
    question: "How long does modernization take?",
    answer:
      "Timelines depend entirely on the initial scope you choose. Because you start from a single bounded workstream rather than an enterprise-wide programme, tangible progress is measured in weeks rather than years.",
    subtext: "Phases overlap by workstream to maintain operational continuity.",
  },
  {
    question: "Does Shadow Mode change anything in production?",
    answer:
      "No. Shadow Mode is purely observational and comparative. It demonstrates what would have happened differently in a parallel environment without executing changes or writing to production data.",
  },
  {
    question: "How is activation readiness decided?",
    answer:
      "Readiness is evaluated across ten distinct gates, each requiring specific metadata fields. A single blocked gate stops activation entirely—there are no aggregate scores that allow bypasses.",
    subtext:
      "The final gate always requires a named accountable human decision.",
  },
  {
    question: "What happens if a source is stale, missing or conflicting?",
    answer:
      "Degraded conditions are surfaced explicitly. Stale or missing sources block readiness immediately, and data conflicts require documented professional review rather than relying on silent system precedence.",
  },
  {
    question: "Can everything be rolled back?",
    answer:
      "Yes. Every activated scope maintains a verified recovery position, last-good state, and defined step-by-step procedures to ensure safe fallback capabilities if operational parameters shift.",
  },
  {
    question: "Will you guarantee savings or an ROI?",
    answer:
      "No. There is no guaranteed ROI, cost saving, or financial timeline. ZoikoSuite provides a rigorous, governed operational methodology, but business outcomes depend on your internal execution.",
  },
  {
    question: "Does this guarantee compliance or audit acceptance?",
    answer:
      "No. While the platform establishes comprehensive audit readiness and evidence trails, it does not offer legal admissibility, official compliance certification, or regulator acceptance guarantees.",
  },
  {
    question: "Why can't I click through to the expansion path?",
    answer:
      "Expansion and specialized industry patterns carry strict point-of-claim boundaries. They require verified source data, professional review, and architectural scoping before access is unlocked.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

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
              Replacement, timelines, <br className="hidden sm:inline" />
              readiness and recovery
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
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#DBE3E8]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-[#0F172A] group-hover:text-[#A07A2E] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-xl font-mono text-[#A07A2E] font-bold ml-4 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 flex flex-col gap-3 text-sm text-[#475569] leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                    {faq.subtext && (
                      <p className="text-xs text-[#475569]">
                        {faq.subtext}{" "}
                        {faq.linkText && (
                          <a
                            href="#pattern"
                            className="text-[#0F172A] font-semibold underline hover:text-[#A07A2E]"
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
