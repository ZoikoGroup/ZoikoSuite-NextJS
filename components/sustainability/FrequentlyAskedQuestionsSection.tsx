"use client"
import React, { useState } from "react";

export default function FrequentlyAskedQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does ZoikoSuite have a net-zero target?",
      answer:
        "Answered from the approved Sustainability Registry. If none is product-specific, this is stated plainly, distinguishing any Zoiko Group target.",
    },
    {
      question: "Is ZoikoSuite carbon neutral?",
      answer:
        "Not stated as yes unless independently supported for a defined period and boundary.",
    },
    {
      question: "Can ZoikoSuite calculate carbon emissions?",
      answer:
        "Only implemented/configurable capabilities and data dependencies are described — no universal emissions engine is implied unless product truth supports it.",
    },
    {
      question: "How does ZoikoSuite support ESG reporting?",
      answer:
        "Governed data, ownership, evidence, approvals, and reporting workflows where configured — without guaranteeing framework compliance.",
    },
    {
      question: "Are Zoiko Group commitments the same as ZoikoSuite targets?",
      answer:
        "No. Group context and product-specific targets are separately scoped and approved.",
    },
    {
      question: "How often is this page updated?",
      answer:
        "Following the review cadence set in the CMS, with last/next review dates displayed.",
    },
  ] as const;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ List Container */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full border-b border-[#DCD6C8] py-6 flex flex-col cursor-pointer transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold text-[#0b1329] tracking-tight">
                    {faq.question}
                  </h3>
                  <span className="text-[#A8843A] text-xl font-medium ml-4 transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <p className="text-gray-600 font-light leading-relaxed text-[15.5px] mt-4 max-w-4xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
