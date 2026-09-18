"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answerParagraphs: string[];
  linkText?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is a solution pattern?",
    answerParagraphs: [
      "The common governance control model applied to a recurring operating challenge, with your sector's objects, obligations and systems resolved into it.",
      "It is not a separate product, a separate licence or a separate deployment. Eight patterns are published.",
    ],
    linkText: "See the library",
  },
  {
    question: "Does choosing my industry change what the product can do?",
    answerParagraphs: [
      "Choosing an industry filters capability availability, authority models, and terminology to match your sector's regulatory and operational reality.",
    ],
  },
  {
    question: "How is the recommendation generated?",
    answerParagraphs: [
      "Recommendations are produced dynamically based on the six inputs you provide, mapping your explicit constraints against our published solution patterns.",
    ],
  },
  {
    question: "Is any pattern unavailable to my sector?",
    answerParagraphs: [
      "Certain patterns or features may be restricted or require specific deployment options depending on regional regulations and sector requirements.",
    ],
  },
  {
    question: "Will we have to replace our core system?",
    answerParagraphs: [
      "No. The platform is designed to coexist with and wrap around your existing specialist systems of record rather than replace them.",
    ],
  },
  {
    question: "Are you certified or compliant for our industry?",
    answerParagraphs: [
      "No certified, compliant, authorized or attested claim is made universally. Validation status is stated per deployment option.",
    ],
  },
  {
    question: "What does the build tool produce?",
    answerParagraphs: [
      "The build tool produces a scoped conversation agenda naming the patterns, boundaries, and items that need validation—never a quote or timeline.",
    ],
  },
  {
    question: "Can AI resolve a challenge on its own?",
    answerParagraphs: [
      "No. AI provides decision support, analysis, and draft outputs, but never makes an autonomous material decision or bypasses human review.",
    ],
  },
  {
    question: "Is there a governance or risk score?",
    answerParagraphs: [
      "No metrics are averaged into a single posture score. Governance decisions are tracked explicitly per item and evidence record.",
    ],
  },
  {
    question: "What proof can you actually show today?",
    answerParagraphs: [
      "We separate architecture proof, product proof, validation status, customer proof, and independent proof rather than blending them together.",
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
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
              Patterns, availability, coexistence and proof
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
        <div className="flex flex-col border-t border-[#DBE3E8]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#DBE3E8] py-5 transition-all cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-bold text-[#08222F]">
                    {item.question}
                  </h3>
                  <span className="text-lg font-mono font-bold text-[#C59B3F] shrink-0 w-6 h-6 flex items-center justify-center">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div className="mt-3 flex flex-col gap-2 pr-12 animate-fadeIn">
                    <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                      {item.answerParagraphs[0]}
                    </p>
                    {item.answerParagraphs[1] && (
                      <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mt-2">
                        {item.answerParagraphs[1]}{" "}
                        {item.linkText && (
                          <a
                            href="#"
                            className="font-bold text-[#08222F] hover:text-[#C59B3F] transition-colors inline-block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.linkText}
                          </a>
                        )}
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
