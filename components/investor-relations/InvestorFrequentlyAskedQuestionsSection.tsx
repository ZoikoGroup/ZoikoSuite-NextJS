"use client"
import React, { useState } from "react";

export default function InvestorFrequentlyAskedQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is ZoikoSuite publicly traded?",
      answer:
        "Status follows the current capital-status registry. If private, this is stated plainly and no public-market UI is shown.",
    },
    {
      question: "Can I invest in ZoikoSuite?",
      answer:
        "Investment availability depends on the approved Group/entity structure; enquiries route to Group IR rather than a promise of access.",
    },
    {
      question: "Who owns ZoikoSuite?",
      answer:
        "The approved relationship among ZoikoSuite, Zoiko Tech, and Zoiko Group is stated; no cap-table detail is invented.",
    },
    {
      question: "Where can I find financial information?",
      answer:
        "Public disclosures appear only when approved; qualified materials may require eligibility and an NDA.",
    },
    {
      question: "Can I buy shares through this website?",
      answer:
        "No transaction flow is provided unless a future, legally approved public-market/transaction state requires it.",
    },
    {
      question: "How do I report suspected investor fraud?",
      answer:
        "Use the verified corporate contact/security route. Never send funds based on unsolicited messages.",
    },
  ] as const;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
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
