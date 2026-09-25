"use client"
import React, { useState } from "react";

export default function CommonQuestionsPrivacySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I submit a privacy request?",
      answer:
        "Start the Consumer Rights Request flow, choose your location and relationship, select the outcome you want, and provide only the information needed to route and process the request.",
    },
    {
      question: "Can I ask ZoikoSuite to delete my data?",
      answer:
        "You can submit a deletion request. Whether specific information can be deleted depends on applicable law, ZoikoSuite's role, and any valid retention exceptions.",
    },
    {
      question: "Do I need an account?",
      answer:
        "A new account should not be required solely to submit a privacy request. An existing authenticated account may be used when it makes verification safer or easier.",
    },
    {
      question: "How do I track my request?",
      answer:
        "Use the secure request-status path with your reference and the required verification step.",
    },
    {
      question: "What if I'm submitting on behalf of someone else?",
      answer:
        "Use the authorized agent/representative route, which requires proof of authority and may require direct confirmation from the individual.",
    },
    {
      question:
        "What if my request involves data my employer or a business controls?",
      answer:
        "The routing step determines whether ZoikoSuite or the organization using ZoikoSuite should handle the request, and directs you accordingly.",
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
                className="border-b border-[#DCD6C8] last:border-b-0 py-6 transition-colors duration-200"
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
                    <p className="text-sm text-gray-600 max-w-3xl font-light leading-relaxed">
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
