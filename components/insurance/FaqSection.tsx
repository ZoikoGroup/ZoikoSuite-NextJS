"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Is ZoikoSuite a policy administration or claims platform?",
    answer:
      "No. It is a governance-first enterprise operations layer that sits around an insurer's existing systems of record. Policy administration, quoting, underwriting, rating, premium calculation, policy issuance, claims intake, adjudication, reserving, settlement and payment are all outside scope and not implied by any interface element.",
  },
  {
    question: "Does it write to our policy, claims or billing systems?",
    answer:
      "No. ZoikoSuite operates as a governance-first control layer and intelligence spine. It evaluates and records decisions, maintaining separation from your underlying core operational systems of record.",
  },
  {
    question: "What does it actually govern, then?",
    answer:
      "It governs the cross-domain workflows, contractual obligations, cross-border entity structures, compliance tracking, and audit trails that sit around your core transactional systems.",
  },
  {
    question: "Does it duplicate our core as a second master?",
    answer:
      "No. It does not replace or mirror core transactional ledgers; instead, it acts as a unified governance and evidence layer that connects disparate financial, workforce, legal, and compliance data.",
  },
  {
    question:
      "Do you handle producer licensing, commissions or distribution administration?",
    answer:
      "No. Producer compensation calculation, licensing validation status, and direct distribution execution remain within your designated core systems.",
  },
  {
    question: "Will it file with our regulator?",
    answer:
      "No. ZoikoSuite provides obligation tracking, compliance visibility, and audit-ready data extraction, but regulatory filings must be submitted through your official compliance channels.",
  },
  {
    question: "Can AI affect a policyholder or claimant outcome?",
    answer:
      "No. AI capabilities are strictly constrained to decision support, anomaly detection, forecasting, and document extraction. Automated or direct alterations to customer, policyholder, or claimant outcomes are prohibited.",
  },
  {
    question: "Are you SOC or ISO certified?",
    answer:
      "Compliance alignments and security standards such as encryption, zero-trust architecture, and role-based access control are built into the platform architecture. Specific certification documentation is available through formal procurement due diligence.",
  },
  {
    question: "Does your evidence satisfy our supervisor or auditor?",
    answer:
      "Yes. The platform is architected specifically to produce comprehensive audit trails, decision lineage, and immutable event logs designed to withstand rigorous internal audit and regulatory examination.",
  },
  {
    question: "Do you have insurance customers you can reference?",
    answer:
      "Reference availability and customer case studies are shared directly under appropriate commercial evaluation agreements and mutual non-disclosure frameworks.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0F172A] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
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
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1]">
              Scope, coexistence, AI, evidence and deployment
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="border-t border-gray-300">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gray-300 py-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left font-semibold text-base sm:text-lg text-[#0F172A] focus:outline-none cursor-pointer group"
                >
                  <span className="group-hover:text-[#C59B3F] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-xl font-mono text-[#C59B3F] ml-4 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-8 text-sm sm:text-base text-gray-600 leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                    {index === 0 && (
                      <p className="mt-3">
                        <a
                          href="#"
                          className="text-xs font-semibold underline text-[#08222F] hover:text-[#C59B3F]"
                        >
                          See the scope boundary
                        </a>
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
