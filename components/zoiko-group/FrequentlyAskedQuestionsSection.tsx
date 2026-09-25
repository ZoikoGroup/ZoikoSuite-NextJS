"use client";
import React, { useState } from "react";

export default function FrequentlyAskedQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Zoiko Group?",
      answer:
        "A technology-led venture and operating group building platforms and businesses across technology, connectivity, financial services, healthcare, mobility, real estate, commerce, media, and global trade.",
    },
    {
      question: "How is ZoikoSuite related to Zoiko Group?",
      answer:
        "ZoikoSuite is publicly presented as a Zoiko Tech platform and a Zoiko Group company — without implying contractual or data-sharing consequences that are not separately documented.",
    },
    {
      question: "Does Zoiko Group guarantee ZoikoSuite contracts?",
      answer:
        "No. Contractual obligations and any guarantees are determined by executed agreements and verified legal documents.",
    },
    {
      question:
        "Is ZoikoSuite customer data shared with other Zoiko Group companies?",
      answer:
        "Ownership alone does not create a data-sharing permission. ZoikoSuite data handling is governed by its contracts, privacy documentation, approved subprocessors, and technical architecture.",
    },
    {
      question: "Are all Zoiko Group businesses integrated with ZoikoSuite?",
      answer:
        "No. Only documented and available integrations may be presented as connected.",
    },
    {
      question: "Where does Zoiko Group operate?",
      answer:
        "Current public material references a Sacramento headquarters and teams or hubs in the United Kingdom, India, and Singapore.",
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
