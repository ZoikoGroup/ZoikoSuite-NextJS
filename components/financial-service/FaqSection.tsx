"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  linkText?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does ZoikoSuite do for financial services?",
    answer:
      "It governs financial operations — evaluating material actions against policy and delegated authority before they complete, and preserving the decision basis as evidence. Entity, jurisdiction and effective-date context are held at the point of action, and authoritative records remain in the systems that already hold them.",
    linkText: "See the capabilities",
  },
  {
    question: "Is this a core banking or payments platform?",
    answer:
      "No. Core banking, ledger posting, and payment rail processing belong to dedicated transaction systems. ZoikoSuite sits upstream or concurrently to evaluate policy compliance and delegated authority before those actions finalize.",
  },
  {
    question: "Are you SOC, ISO or PCI certified?",
    answer:
      "Compliance certifications are maintained in accordance with enterprise vendor onboarding standards. Specific attestation reports, SOC 2 type credentials, and scope boundaries are available under NDA during formal evaluation.",
  },
  {
    question: 'What does "audit-defensible evidence" actually mean?',
    answer:
      "It means every evaluated action preserves an immutable record of the exact policy version, delegated authority rule, temporal context, and identity credentials active at the exact timestamp of decision execution.",
  },
  {
    question: "Do you support our jurisdictions?",
    answer:
      "Jurisdictional coverage depends on your specific entity structure, cross-border transactional footprint, and local regulatory requirements. Multi-jurisdiction rules can be modeled explicitly within the platform architecture.",
  },
  {
    question: "Where is our data stored?",
    answer:
      "Data residency and storage locations are provisioned in alignment with your corporate governance requirements, regional compliance mandates, and deployment topology choices.",
  },
  {
    question: "Can AI approve a payment or post an entry?",
    answer:
      "No. AI components analyze patterns, assist with policy interpretation, and stage recommendations, but definitive financial approvals and transaction postings are strictly bound to human delegated authority and deterministic rules.",
  },
  {
    question: "Does Shadow Ledger touch production?",
    answer:
      "Shadow Ledger operates non-intrusively to model, analyze, and verify transactional state without modifying or disrupting live core production databases or active payment pipelines.",
  },
  {
    question: "Do we have to replace our ERP or ledger?",
    answer:
      "No. ZoikoSuite integrates with your existing ERPs, core systems, and databases, serving as an orchestration and governance layer rather than a replacement for your core financial systems of record.",
  },
  {
    question: "Are there customer results for financial services?",
    answer:
      "Approved customer proof outcomes for financial services are published strictly under verified case conditions. Where formal public case records do not exist, representative architectural models are discussed directly during evaluations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-6 lg:px-12">
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

            <h2 className="text-3xl sm:text-4xl md:text-[40px] max-w-xl font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Scope, certification, coverage and AI boundaries
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
        <div className="flex flex-col border-t border-[#E2E8F0]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#E2E8F0] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#0F476A] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-[#A07A2E] flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12 flex flex-col gap-3">
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {item.answer}
                    </p>
                    {item.linkText && (
                      <div>
                        <a
                          href="#"
                          className="text-xs font-semibold text-[#0F476A] hover:underline inline-flex items-center gap-1"
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
