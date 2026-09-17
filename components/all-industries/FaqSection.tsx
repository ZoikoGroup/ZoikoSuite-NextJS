"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answerParagraphs: string[];
  linkText?: string;
  linkHref?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does ZoikoSuite do across industries?",
    answerParagraphs: [
      "It applies one governed operating model — entity, jurisdiction, authority, policy, obligations, evidence, integrations and governed intelligence — across sector-specific business contexts.",
      "The governance model stays consistent; the operating context does not. Your specialist industry systems keep doing their core jobs.",
    ],
    linkText: "See the seven common layers",
    linkHref: "#",
  },
  {
    question: "Why are two industries not linked?",
    answerParagraphs: [
      "Each industry profile stands on its own regulatory and operational basis. Linking them improperly risks masking specific compliance obligations and operational nuances that differ from sector to sector.",
    ],
  },
  {
    question: "Does ZoikoSuite replace our core industry system?",
    answerParagraphs: [
      "No. ZoikoSuite acts as a governance and operational layer that sits alongside your core systems, ensuring compliance and authority controls without replacing your specialist transaction or execution engines.",
    ],
  },
  {
    question: "Are you compliant with HIPAA, PCI DSS, NERC CIP or FedRAMP?",
    answerParagraphs: [
      "No blanket compliance or certification is claimed for any specific regulatory regime through a public webpage. Diligence is supported via architectural review, security documentation, and verification routes tailored to your security and procurement teams.",
    ],
  },
  {
    question: "Do you cover our jurisdiction?",
    answerParagraphs: [
      "Jurisdiction coverage depends entirely on your specific regulatory configuration and operational deployment model. Coverage is established and verified through formal commercial and architectural engagement rather than broad public claims.",
    ],
  },
  {
    question: "We span several industries. Which page applies?",
    answerParagraphs: [
      "For organizations operating across multiple sectors, conglomerates, or complex multi-entity structures, the organization-pattern view or a multi-industry approach serves as the appropriate entry point rather than forcing a single industry label.",
    ],
  },
  {
    question: "Our sector is not one of the nine. Are we covered?",
    answerParagraphs: [
      "An unlisted sector is not implicitly covered. If your sector is not among the published nine, the operating challenge or multi-industry perspective provides the correct entry point rather than an unlisted industry label.",
    ],
  },
  {
    question: "Can AI make decisions in any sector?",
    answerParagraphs: [
      "No. AI is strictly governed under universal boundaries: it may detect anomalies, forecast exposure, and provide decision support to named reviewers, but it may never make autonomous material decisions or substitute for professional judgment.",
    ],
  },
  {
    question: "Is the evidence model different per industry?",
    answerParagraphs: [
      "The underlying governance and evidence architecture remains consistent, but the specific metrics, compliance artifacts, and audit trails adapt to reflect the regulatory realities and operational priorities of each sector context.",
    ],
  },
  {
    question: "Can you share customer references for our sector?",
    answerParagraphs: [
      "No approved customer story, logo, reference, or outcome figure exists for any sector. We do not substitute real records with anonymised composites; diligence is anchored on architecture and product proof.",
    ],
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
              Coverage, coexistence, compliance and fit
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-gray-300">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-300 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#08222F] group-hover:text-[#C59B3F] transition-colors pr-4">
                    {item.question}
                  </span>
                  <span className="text-xl font-mono font-bold text-[#C59B3F] shrink-0 w-6 h-6 flex items-center justify-center">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12 flex flex-col gap-3">
                    {item.answerParagraphs.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm lg:text-base text-gray-700 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {item.linkText && item.linkHref && (
                      <div className="pt-1">
                        <a
                          href={item.linkHref}
                          className="text-sm font-semibold text-[#08222F] underline hover:text-[#C59B3F] transition-colors inline-flex items-center gap-1"
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
