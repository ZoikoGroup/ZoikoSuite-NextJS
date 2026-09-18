"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answerSummary: string;
  answerDetail: string;
  linkText?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is ZolloSuite an EHR or clinical system?",
    answerSummary:
      "No. It governs the business of healthcare around the systems you already trust.",
    answerDetail:
      "Diagnosis, treatment, triage, prescribing, clinical documentation, the legal medical record, clinical decision support, care scheduling, pharmacy, laboratory, radiology, claims adjudication, medical coding and billing, patient identity and portals, and device monitoring are all outside scope.",
    linkText: "See the boundary",
  },
  {
    question: "Are you HIPAA compliant?",
    answerSummary:
      "ZolloSuite is structured to support enterprise compliance programs, but HIPAA compliance is a legal determination made by your organization based on your specific deployment, data classification, and BAA status.",
    answerDetail:
      "We provide the architecture, access controls, and audit trails necessary for diligence, but we do not issue blanket compliance certifications or pre-packaged legal guarantees.",
  },
  {
    question: "Can the platform hold PHI or ePHI?",
    answerSummary:
      "PHI/ePHI handling is deployment-dependent and requires explicit validation for the proposed use case.",
    answerDetail:
      "By default, non-clinical enterprise controls and administrative workflows are prioritized, and handling sensitive health information requires specific configuration, security review, and a signed Business Associate Agreement where applicable.",
  },
  {
    question: "Is a BAA available?",
    answerSummary:
      "BAA availability is confirmed only through product, privacy and legal review.",
    answerDetail:
      "It is not asserted universally across all deployments or trial tiers. A Business Associate Agreement is executed selectively based on your organization type, data scope, and infrastructure configuration.",
  },
  {
    question: "How is sensitive data scoped before a workflow runs?",
    answerSummary:
      "Where sensitive data is in scope, the recorded purpose precedes access and forms part of the evidence.",
    answerDetail:
      "Data excluded by classification or access scope stays excluded, with the exclusion stated explicitly rather than silently dropped, ensuring full transparency in every automated or manual step.",
  },
  {
    question: "Do you integrate with our EHR?",
    answerSummary:
      "EHR and EMR systems maintain a 'no connection' status by default, with metadata and reference-only integration preferred wherever workflows allow.",
    answerDetail:
      "Clinical systems act as independent sources of truth; ZolloSuite does not write back to the legal medical record, ensuring absolute separation between business governance and clinical care.",
  },
  {
    question: "Does it handle clinical credentialing?",
    answerSummary:
      "Clinical privileging and competency decisions remain strictly with the credentialing body.",
    answerDetail:
      "ZolloSuite handles workforce credential expiry and administrative tracking only, ensuring that clinical qualifications and determinations are never automated or overridden by business workflows.",
  },
  {
    question: "Can AI affect patient care in any way?",
    answerSummary:
      "No. The prohibitions on AI affecting patient care are absolute and non-negotiable.",
    answerDetail:
      "AI may propose obligations, detect anomalies, or summarize documentation with provenance cited, but it is strictly barred from affecting diagnosis, treatment, triage, care planning, or clinical decision support under any configuration.",
  },
  {
    question:
      "We're a health plan rather than a provider. Is this the right page?",
    answerSummary:
      "Yes, enterprise governance, vendor agreement tracking, and non-clinical workflow controls apply across both payer and provider operational models.",
    answerDetail:
      "Payer questions regarding network operations, policy compliance, and multi-facility oversight follow the same diligence framework and structured source ownership.",
  },
  {
    question: "Do you have healthcare customers you can reference?",
    answerSummary:
      "Not published. No approved health system or provider customer story exists.",
    answerDetail:
      "No anonymised composite, facility count, cost figure or representative outcome is substituted. We rely entirely on verifiable architecture and product proof rather than unsupported social proof.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Scope, PHI, EHR, evidence and AI
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed w-full">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-gray-200">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray-200 py-5 transition-colors cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#08222F]">
                    {item.question}
                  </h3>
                  <span className="text-lg font-mono font-bold text-[#A07A2E] select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div className="mt-4 flex flex-col gap-3 pr-12 animate-fadeIn">
                    <p className="text-sm font-semibold text-[#08222F] leading-relaxed">
                      {item.answerSummary}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.answerDetail}
                    </p>
                    {item.linkText && (
                      <div>
                        <a
                          href="#boundary"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-bold text-[#0F476A] hover:underline inline-flex items-center gap-1 mt-1"
                        >
                          {item.linkText} →
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
