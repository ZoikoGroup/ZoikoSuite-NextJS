"use client";
import React, { useState } from "react";

export default function CommonQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is ZoikoSuite open source?",
      answer:
        'Not stated as "yes" merely because some components are open source. The verified product licensing model is stated only after Legal approval; third-party open-source components retain their own licenses.',
    },
    {
      question: "Where can I find open-source notices?",
      answer:
        "The searchable registry above, plus a current notice download scoped by release/distribution.",
    },
    {
      question: "Do you use SPDX identifiers?",
      answer:
        "Yes, where applicable and verified — custom/proprietary licenses remain explicitly identified rather than forced into an SPDX label.",
    },
    {
      question: "Is the license registry the same as an SBOM?",
      answer:
        "No. A public license notice focuses on legal notices and obligations. A fuller SBOM can contain richer software-component/provenance detail, handled through controlled enterprise/security channels.",
    },
    {
      question: "Are all listed licenses OSI approved?",
      answer:
        "No. The registry may include open-source, source-available, proprietary/commercial, public-domain, content/data, fonts/assets, and first-party developer terms — OSI status is shown only where verified.",
    },
    {
      question: "Can I redistribute ZoikoSuite or its SDKs?",
      answer:
        "Only as allowed by the applicable ZoikoSuite agreement or the specific SDK/package license — third-party notices do not grant broader rights.",
    },
  ] as const;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* Accordion List Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border-b border-[#DCD6C8] last:border-b-0 py-6 transition-colors duration-200`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                >
                  <span className="text-base font-semibold text-[#0b1329] tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#A8843A] font-bold text-lg flex items-center justify-center w-6 h-6 shrink-0 transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-12">
                    <p className="text-sm text-gray-600 font-light max-w-3xl leading-relaxed">
                      {faq.answer}
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
