"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

const faqData: FaqItem[] = [
  {
    question: "Are you SOC 2 or ISO 27001 certified?",
    answer:
      "No. Security framework readiness is not presented as certification, and no independent assurance exists to share. If your procurement process requires a SOC 2 report or ISO certificate as a gate, that gate cannot currently be met. Knowing so early is more useful than discovering it at contract stage.",
    linkText: "See compliance status",
    linkHref: "#",
  },
  {
    question: "What encryption do you use?",
    answer:
      "All data at rest is encrypted using industry-standard AES-256 encryption, and data in transit is protected using TLS 1.3. Key management procedures are scoped to your deployment tier and regional requirements.",
  },
  {
    question: "Can we hold our own encryption keys?",
    answer:
      "Yes, customer-managed keys (CMK) are supported for eligible enterprise deployments, allowing you to maintain direct control over key lifecycles and revocation.",
  },
  {
    question: "Is machine identity implemented?",
    answer:
      "Yes, automated machine identities utilizing short-lived cryptographic certificates are used for service-to-service authentication, minimizing long-lived credential risk.",
  },
  {
    question: "Can we see a penetration test report?",
    answer:
      "Penetration test summaries and executive readouts are available under NDA to qualified prospects during a structured security review.",
  },
  {
    question: "Have you had a security breach?",
    answer:
      "There have been no material security breaches or unauthorized data compromises affecting customer environments to date.",
  },
  {
    question: "What is your incident notification window?",
    answer:
      "Committed notification windows are defined strictly within approved commercial service-level agreements and enterprise contracts tailored to your deployment configuration.",
  },
  {
    question: "Do you monitor 24/7?",
    answer:
      "Infrastructure telemetry, anomaly detection, and automated alerting systems operate continuously, with engineering escalation paths active at all times.",
  },
  {
    question: "Are access denials logged?",
    answer:
      "Yes, all authorization failures and access denials are captured within immutable audit logs and routed to centralized monitoring systems.",
  },
  {
    question: "Which security responsibilities are ours?",
    answer:
      "You maintain responsibility for securing endpoint devices, managing user access credentials, configuring appropriate data governance, and defining organizational security policies.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Certification, encryption, keys, testing and response
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-[#6B7280] text-[14px] leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#E5E7EB]">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E5E7EB]">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-lg font-semibold text-[#111827] group-hover:text-[#0F476A] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-[#C9B07A] shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12 text-[#4B5563] text-[15px] leading-relaxed space-y-3">
                    <p>{faq.answer}</p>
                    {faq.linkText && faq.linkHref && (
                      <div>
                        <a
                          href={faq.linkHref}
                          className="text-[#0F476A] font-semibold text-[14px] hover:underline"
                        >
                          {faq.linkText}
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
