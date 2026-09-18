"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Are you SOC 2 or ISO 27001 certified?",
    answer:
      "No. Security framework readiness is not presented as certification, and no independent assurance exists to share. If your procurement process requires a SOC 2 report or ISO certificate as a gate, that gate cannot currently be met. Knowing so early is more useful than discovering it at contract stage.",
  },
  {
    question: "What encryption do you use?",
    answer:
      "TLS 1.2 or higher is used for all data in transit, and AES-256 is used for encryption at rest across all storage layers and backups.",
  },
  {
    question: "Can we hold our own encryption keys?",
    answer:
      "Yes, for eligible enterprise deployments. Secrets and data management support BYOK (Bring Your Own Key) and HYOK (Hold Your Own Key) strategies depending on your configuration requirements.",
  },
  {
    question: "Is machine identity implemented?",
    answer:
      "Yes. All service-to-service communication relies on cryptographically verified machine identities and mutual TLS (mTLS) rather than static credentials.",
  },
  {
    question: "Can we see a penetration test report?",
    answer:
      "Yes, executive summaries of third-party penetration tests are available under NDA following a security review request.",
  },
  {
    question: "Have you had a security breach?",
    answer:
      "No. There has never been a material security breach, unauthorized data access incident, or system compromise.",
  },
  {
    question: "What is your incident notification window?",
    answer:
      "Affected customers are notified without undue delay upon confirmation of a security incident affecting their deployment, aligned with contractual and regulatory obligations.",
  },
  {
    question: "Do you monitor 24/7?",
    answer:
      "Yes. Infrastructure and audit telemetry are monitored continuously with automated anomaly detection and real-time operational alerts.",
  },
  {
    question: "Are access denials logged?",
    answer:
      "Yes. Every authentication failure and unauthorized permission check is captured in an immutable, append-only audit stream.",
  },
  {
    question: "Which security responsibilities are ours?",
    answer:
      "You maintain responsibility for user access management, endpoint security, role provisioning, and classifying data within your deployment.",
  },
];

export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              Certification, encryption, keys, testing and response
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ List Container */}
        <div className="border-t border-[#E5E7EB]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E5E7EB] py-6">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-lg font-bold text-[#111827] group-hover:text-[#C9B07A] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-[#111827] shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12">
                    <p className="text-[15px] text-[#4B5563] leading-relaxed mb-4">
                      {item.answer}
                      {index === 0 && (
                        <a
                          href="#"
                          className="text-[#111827] font-semibold underline hover:text-[#C9B07A] transition-colors ml-1"
                        >
                          See compliance status
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
