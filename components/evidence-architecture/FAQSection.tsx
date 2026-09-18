"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer?: string;
  detail?: string;
  linkText?: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is the evidence tamper-proof?",
    answer:
      "No. Tamper-evident is not tamper-proof, and the second term is never used.",
    detail:
      "Tamper-evident means a mechanism is designed to reveal specified changes. Tamper-proof is an absolute claim no storage system can honour. Each of the seven integrity states carries an explicit limit on what it must not be taken to mean.",
    linkText: "See the states",
  },
  {
    question: "Is your evidence legally admissible?",
    answer:
      "Admissibility depends entirely on jurisdiction, the nature of the proceeding, and the authenticity of the custody chain provided.",
    detail:
      "Our export packages are structured to maximize auditability and provide precise provenance metadata, but legal admissibility is determined by the court and governing body reviewing the case.",
  },
  {
    question: "What does append-only actually guarantee?",
    answer:
      "Append-only guarantees that existing records cannot be modified or deleted without leaving an algorithmic trace in the integrity log.",
    detail:
      "It does not prevent authorized actors from inserting new records or managing retention policies according to explicit lifecycle definitions.",
  },
  {
    question: "What happens when evidence is missing?",
    answer:
      "Missing evidence is explicitly stated rather than silently omitted or substituted with placeholders.",
    detail:
      "Completeness validation computes the expected manifest items against the current deployment state to clearly highlight gaps.",
  },
  {
    question: "Do you hold evidence from our other systems?",
    answer:
      "No. External evidence references point to records held in source systems where custody, retention, and deletion remain under your direct control.",
    detail:
      "We store only provenance metadata and linkage pointers necessary to construct audit packages upon request.",
  },
  {
    question: "Can we export an audit package?",
    answer:
      "Yes. Audit packages can be assembled automatically based on predefined scenario templates, capturing actor, purpose, destination, and approval state.",
    detail:
      "Restricted contents require explicit authorization before export packaging is finalized.",
  },
  {
    question: "What if an evidence record has not been verified recently?",
    answer:
      "The verification status flag updates automatically to reflect staleness or require a fresh integrity check before reliance.",
    detail:
      "Per-layer claim states clearly indicate whether records have active verification or require re-attestation.",
  },
  {
    question: "Has anyone independently verified this model?",
    answer:
      "Independent verification availability depends on your deployment tier and current audit status.",
    detail:
      "Third-party attestations are provided under strict NDA and scoped to specific verification periods.",
  },
  {
    question: "Is evidence deleted when data is deleted?",
    answer:
      "Evidence deletion follows governed-records positions and active legal holds rather than arbitrary user actions.",
    detail:
      "An active legal hold explicitly blocks evidence deletion across all dependent layers until the hold is released.",
  },
  {
    question: "Which layers are fully delivered today?",
    answer:
      "Architecture proof and product proof layers are fully delivered and publicly inspectable.",
    detail:
      "Customer proof and independent verification layers follow phased delivery schedules and depend on specific deployment approvals.",
  },
];

export default function FAQSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Integrity, completeness, admissibility and export
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
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E5E7EB]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-[16px] md:text-[18px] font-bold text-[#111827] group-hover:text-[#0F476A] transition-colors pr-4">
                    {item.question}
                  </span>
                  <span
                    className="text-lg font-mono font-semibold shrink-0 w-6 h-6 flex items-center justify-center rounded transition-colors"
                    style={{ color: "#C9B07A" }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 pr-12 space-y-4 animate-fadeIn">
                    {item.answer && (
                      <p className="text-[15px] text-[#111827] font-medium leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                    {item.detail && (
                      <p className="text-[14px] text-[#6B7280] leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                    {item.linkText && (
                      <div className="pt-2">
                        <a
                          href="#"
                          className="text-[13px] font-semibold text-[#0F476A] underline hover:text-[#111827] transition-colors"
                        >
                          {item.linkText}
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
