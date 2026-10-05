"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Is ZoikoSuite certified?",
    answer:
      "Current public posture is security framework readiness — not yet certified. This page lists only independently verified certifications or reports once issued and approved for publication.",
  },
  {
    question: "What is the difference between a certification and an attestation?",
    answer:
      "A certification is issued by an accredited certification body confirming conformity to a specific international standard (such as ISO/IEC 27001). An attestation (such as SOC 2) is an independent practitioner's report expressing an opinion on the fairness of presentation of management's description and the suitability and operating effectiveness of controls over an observation period.",
  },
  {
    question: "Does framework alignment mean ZoikoSuite is certified?",
    answer:
      "No. Framework alignment represents internal engineering mapping of system architecture, policies, and operational controls to published standard criteria. It indicates readiness and engineering alignment, not external accredited validation or issuance of a third-party certificate.",
  },
  {
    question: "Can I download your SOC 2 report?",
    answer:
      "ZoikoSuite is currently in framework readiness and gap assessment for SOC 2 Type II. When an independent examination report is issued, approved executive summaries or reports will be accessible to qualified enterprise evaluators under mutual non-disclosure agreements via our evidence request workflow.",
  },
  {
    question: "What does a certification cover?",
    answer:
      "Every valid certification defines a strict scope boundary, including the specific legal entity, product modules, deployment environments (such as multi-tenant or dedicated), geographic regions, and observation or validity periods. A badge without documented scope boundary is incomplete and cannot be relied upon.",
  },
  {
    question: "What happens when a certificate expires?",
    answer:
      "Certifications undergo periodic surveillance audits and scheduled recertification cycles. If a certificate passes its expiration date without renewal or transition, its public status transitions to expired or pending recertification; ZoikoSuite will never display an outdated certificate as active.",
  },
  {
    question: "Can procurement request a full assurance package?",
    answer:
      "Yes. Enterprise procurement and security teams conducting vendor diligence can request our assurance package—including readiness briefs, control mappings, architecture evidence, and penetration test executive summaries—using the assurance evidence request form above.",
  },
  {
    question: "Do you publish penetration-test results?",
    answer:
      "Third-party penetration testing summaries and vulnerability management overviews are provided under NDA upon approved diligence request. Full vulnerability assessment findings containing sensitive infrastructure details are never published on the public web.",
  },
  {
    question: "Are ISO 27001, ISO 27701, or ISO 42001 current ZoikoSuite certifications?",
    answer:
      "No. ISO/IEC 27001, ISO/IEC 27701, and ISO/IEC 42001 represent active readiness programs and control implementation milestones, not currently issued certificates. We state our status transparently rather than making unsupported assurance claims.",
  },
];

export default function CertificationsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-color-grey-95-12 py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[880px] px-6 sm:px-8 flex flex-col justify-start items-start">
        {/* Header */}
        <div className="self-stretch pb-8 flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-48" />
            <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
              FAQ
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
              Certifications &amp; assurance questions
            </h2>
          </div>
        </div>

        {/* Accordion List */}
        <div className="self-stretch divide-y divide-color-orange-87 border-t border-b border-color-orange-87">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer gap-4"
                >
                  <span className="text-color-azure-12-4 text-sm sm:text-base font-bold font-['Inter'] group-hover:text-color-orange-48 transition-colors">
                    {item.question}
                  </span>
                  <span className="text-color-grey-58 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-color-azure-12-4" />
                    ) : (
                      <Plus className="w-4 h-4 text-color-grey-58 group-hover:text-color-azure-12-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-color-grey-44 text-xs sm:text-sm font-normal font-['Inter'] leading-relaxed pr-6">
                    <p>{item.answer}</p>
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
