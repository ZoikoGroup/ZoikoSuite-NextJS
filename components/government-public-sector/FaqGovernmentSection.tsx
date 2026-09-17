"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answerParagraphs: string[];
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is ZoikoSuite a case-management or benefits system?",
    answerParagraphs: [
      "No. It governs the administrative business layer around public-sector operations.",
      "Constituent casework, benefits eligibility and adjudication, permits and licensing, public-safety dispatch, justice and court cases, elections, tax calculation or collection, and authoritative public records are all outside scope. See the boundary",
    ],
  },
  {
    question: "Are you FedRAMP authorized?",
    answerParagraphs: [
      "No. ZoikoSuite does not hold a FedRAMP authorization. Deployment options depend on agency-specific evaluation and contractor arrangements.",
    ],
  },
  {
    question: "Do you have an ATO?",
    answerParagraphs: [
      "No. ZoikoSuite does not possess an Authority to Operate (ATO). Individual agencies determine their own authorization pathways.",
    ],
  },
  {
    question: "Is the product Section 508 compliant?",
    answerParagraphs: [
      "We provide accessibility conformance documentation and VPAT reviews, but final compliance determinations rest with the agency.",
    ],
  },
  {
    question: "What do the eight claim states mean?",
    answerParagraphs: [
      "The eight claim states define the strict progression of verification and evidence status within the administrative governance lifecycle.",
    ],
  },
  {
    question: "Do you offer a government or sovereign cloud?",
    answerParagraphs: [
      "Deployment is supported across various secure cloud architectures and dedicated environments subject to architecture review.",
    ],
  },
  {
    question: "Does it replace our financial management or procurement system?",
    answerParagraphs: [
      "No. ZoikoSuite sits alongside your incumbent financial management and procurement systems as an administrative control and evidence layer.",
    ],
  },
  {
    question: "Can AI make a determination affecting a constituent?",
    answerParagraphs: [
      "Never. AI is strictly bounded to administrative assistance and analysis; all determinations affecting persons are reserved exclusively for human officials.",
    ],
  },
  {
    question: "Does it help with records requests and transparency?",
    answerParagraphs: [
      "Yes. By maintaining robust audit trails and provenance tracking, it simplifies the compilation of evidence for transparency and records requests.",
    ],
  },
  {
    question: "Can you share agency references or a contract vehicle?",
    answerParagraphs: [
      "No approved public-sector references, case studies, or pre-negotiated contract vehicles are currently published.",
    ],
  },
];

export default function FaqGovernmentSection() {
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
              Scope, authorization, accessibility, AI and evidence
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

        {/* FAQ List */}
        <div className="flex flex-col border-t border-b border-[#E2E8F0]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#E2E8F0] last:border-b-0 py-5 transition-colors cursor-pointer"
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
                  <div className="mt-3 flex flex-col gap-2.5 pr-8">
                    {item.answerParagraphs.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                      >
                        {paragraph.endsWith("See the boundary") ? (
                          <>
                            {paragraph.replace("See the boundary", "")}
                            <a
                              href="#boundary"
                              className="text-[#08222F] font-semibold underline hover:text-[#C59B3F]"
                              onClick={(e) => e.stopPropagation()}
                            >
                              See the boundary
                            </a>
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
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
