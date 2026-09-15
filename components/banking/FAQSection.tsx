"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answerParagraphs: string[];
  linkText?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is ZoikoSuite a core banking platform?",
    answerParagraphs: [
      "No. It is a governance-first enterprise operations layer that sits around existing banking systems.",
      "Account processing, deposit servicing, loan origination or servicing, payments processing, transaction banking, and card issuing or acquiring are not claimed and not implied by any interface element.",
    ],
    linkText: "See the scope boundary",
  },
  {
    question: "Does it do AML, KYC, sanctions screening or fraud detection?",
    answerParagraphs: [
      "No. ZoikoSuite is an operations governance layer, not a financial crime compliance engine.",
      "Anti-money laundering, know-your-customer, sanctions screening, and transaction-level fraud monitoring remain entirely within your designated systems of record and specialized compliance platforms.",
    ],
  },
  {
    question: "What exactly does it govern, then?",
    answerParagraphs: [
      "It governs enterprise operational actions, control handoffs, exception queues, and cross-functional obligations.",
      "This includes tracking human decision baselines, mapping contract and policy rules to operational workflows, and maintaining an immutable audit trail without altering underlying core data.",
    ],
  },
  {
    question: "Do we have to replace or modify our core?",
    answerParagraphs: [
      "No. ZoikoSuite operates via APIs and events alongside your existing infrastructure.",
      "It can run in shadow mode or integration mode without touching, altering, or disrupting core transaction processing logic.",
    ],
  },
  {
    question: "Does parallel run touch production?",
    answerParagraphs: [
      "No. A parallel run or shadow mode operates strictly on read-only event streams or mirrored data.",
      "It evaluates control execution and logs exceptions without writing back to production systems or altering live operational workflows.",
    ],
  },
  {
    question: "Are you SOC, ISO or PCI certified?",
    answerParagraphs: [
      "Compliance certifications and security posture documentation are provided directly through formal enterprise procurement and security review channels.",
      "We do not publish pre-packaged compliance badges or unverified attestations outside approved commercial evaluation agreements.",
    ],
  },
  {
    question: "Does your evidence model satisfy our supervisor or auditor?",
    answerParagraphs: [
      "ZoikoSuite provides complete decision lineage, timestamped workflow histories, and immutable operational audit logs designed to support internal and external review.",
      "However, final regulatory satisfaction or supervisory acceptance is always determined by your own compliance and audit authorities based on your specific implementation.",
    ],
  },
  {
    question: "Where is our data stored?",
    answerParagraphs: [
      "Data residency and deployment architecture are fully configurable based on your institutional jurisdiction and security mandates.",
      "Options include dedicated private cloud environments, localized regional instances, or customer-controlled infrastructure boundaries.",
    ],
  },
  {
    question: "Can AI approve an action or influence a risk decision?",
    answerParagraphs: [
      "No. AI within ZoikoSuite is strictly bounded to assistive and analytical roles.",
      "It may prioritize exceptions, detect anomalies, or suggest reconciliation matches, but it cannot approve actions, alter system truth, or influence AML, sanctions, fraud, or credit decisions.",
    ],
  },
  {
    question: "Do you have banking customers you can reference?",
    answerParagraphs: [
      "No approved banking customer story exists. No anonymized composite, representative outcome, or unnamed 'tier-1 bank' reference is substituted.",
      "References and case studies are disclosed exclusively through direct, confidential enterprise sales and legal channels under appropriate agreements.",
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Scope, coexistence, certification and boundaries
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
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
                className="border-b border-[#E2E8F0] py-6 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#C59B3F] transition-colors pr-4">
                    {item.question}
                  </h3>
                  <span className="text-xl font-mono font-bold text-[#C59B3F] shrink-0 w-6 h-6 flex items-center justify-center">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 flex flex-col gap-3 pr-8">
                    {item.answerParagraphs.map((p, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm text-gray-600 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                    {item.linkText && (
                      <div className="mt-1">
                        <a
                          href="#"
                          className="text-sm font-semibold text-[#0F172A] hover:text-[#C59B3F] underline underline-offset-4 transition-colors inline-flex items-center gap-1"
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
