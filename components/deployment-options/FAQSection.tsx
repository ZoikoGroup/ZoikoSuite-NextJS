"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  linkText?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What deployment options does ZoikoSuite offer?",
    answer:
      "The canonical architecture includes regional hosting, enterprise single-tenant, dedicated private cloud, sovereign, and on-premise patterns, with customer-controlled key options where approved. Exact availability and controls require verification for your market, subscription, configuration, and implementation scope. A named option is a taxonomy item, not proof of availability.",
    linkText: "See the pattern comparison",
  },
  {
    question: "Is single-tenant the same as a dedicated private cloud?",
    answer:
      "Single-tenant deployment ensures your application instances and data stores are completely isolated from other customers within shared regional infrastructure, whereas a dedicated private cloud allocates physically or logically isolated hardware tiers exclusively for your organization. Both architectures provide enhanced boundary control, but underlying infrastructure provisioning and management planes differ.",
  },
  {
    question:
      "Does regional hosting guarantee that all data stays in one country?",
    answer:
      "Regional hosting ensures data residency within a specified geographic boundary or jurisdiction according to your selected configuration. However, complete compliance depends on auxiliary routing, cross-border telemetry settings, and third-party integrations, which must be verified independently during the architecture review stage.",
  },
  {
    question: "What is sovereign deployment?",
    answer:
      "Sovereign deployment provides advanced operational control, local data residency, and protection against extraterrestrial legal jurisdiction over data access. It restricts administrative support access to vetted local personnel and ensures that operational telemetry cannot be transferred outside the designated sovereign zone without explicit authorization.",
  },
  {
    question: "Does ZoikoSuite support on-premise deployment?",
    answer:
      "Yes, on-premise deployment patterns are supported for organizations maintaining strict air-gapped environments or local data center requirements. This pattern requires customer-managed infrastructure capacity, localized update pipelines, and adherence to specific hardware compatibility baselines.",
  },
  {
    question: "What are BYOK and HYOK?",
    answer:
      "BYOK (Bring Your Own Key) allows customers to provision and manage their root encryption keys within an external key management service while the provider handles data encryption operations. HYOK (Hold Your Own Key) ensures that encryption keys remain entirely within infrastructure controlled exclusively by the customer, meaning data cannot be decrypted or accessed without direct customer intervention.",
  },
  {
    question: "How are backups and disaster recovery handled?",
    answer:
      "Backups and disaster recovery are structured around defined service schedules, immutable storage retention policies, and documented recovery runbooks. Recovery time objectives (RTO) and recovery point objectives (RPO) are established based on contractually approved scopes rather than generic platform averages.",
  },
  {
    question: "Can this page tell us which deployment is compliant?",
    answer:
      "No single web page can certify regulatory compliance for your specific operating environment. Compliance requires a joint evaluation of your jurisdictional obligations, chosen data classifications, integration patterns, and executed legal agreements.",
  },
  {
    question: "How does migration work?",
    answer:
      "Migration follows a structured ten-stage lifecycle ranging from initial qualification and architecture discovery to non-production building, validation, shadow mode testing, and formal operational handover. Every migration path requires explicit sign-offs and evidence confirmation per domain.",
  },
  {
    question: "How do we start an evaluation?",
    answer:
      "Evaluations begin by submitting your specific technical residency, isolation, security, and change requirements rather than starting from a generic product shortlist. Our technical team reviews these parameters to provide a transparent assessment of verified capabilities versus required custom configurations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
              Architecture, privacy, security, and availability
            </h2>
          </div>

          <div className="max-w-xs">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-[#DBE3E8]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-[#DBE3E8] py-6 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#A07A2E] transition-colors">
                    {item.question}
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center text-[#A07A2E] shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 flex flex-col gap-3 pr-8 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.answer}
                    </p>
                    {item.linkText && (
                      <div>
                        <a
                          href="#pattern-comparison"
                          className="text-xs sm:text-sm font-bold text-[#A07A2E] hover:underline inline-flex items-center gap-1"
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
