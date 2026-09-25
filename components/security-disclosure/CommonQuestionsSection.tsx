"use client"
import React, { useState } from "react";

export default function CommonQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I test ZoikoSuite without permission?",
      answer:
        "Only research expressly covered by the current published scope and authorization terms is authorized by this policy. If unsure, contact Product Security before testing.",
    },
    {
      question: "Does ZoikoSuite offer safe harbor for security research?",
      answer:
        "The current approved safe-harbor status and exact Legal-approved terms are shown above — safe harbor is never inferred from the existence of this page.",
    },
    {
      question: "Does ZoikoSuite pay bug bounties?",
      answer:
        "The current bounty-program state is shown above. Reporting a vulnerability does not by itself create reward eligibility unless published terms say so.",
    },
    {
      question: "What systems are in scope?",
      answer:
        "The effective-dated scope registry on this page. Third-party and customer-owned systems are not automatically in scope.",
    },
    {
      question: "What happens after I submit a report?",
      answer:
        "Product Security receives, triages, validates, and coordinates remediation and disclosure as appropriate; any public response targets are shown only when officially approved.",
    },
    {
      question:
        "What if I found active exploitation rather than a vulnerability?",
      answer:
        "Use the emergency security route above and stop testing if continued activity could increase harm.",
    },
  ] as const;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full border-b border-[#DCD6C8] pb-8">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#DCD6C8] py-6 w-full cursor-pointer transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-base font-semibold text-[#0b1329] tracking-tight pr-4">
                    {faq.question}
                  </h2>
                  <span className="text-[#A8843A] text-lg font-medium select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-gray-600 font-light leading-relaxed text-[15px]">
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
