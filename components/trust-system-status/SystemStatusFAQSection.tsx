"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is ZoikoSuite down right now?",
    answer:
      'This page reflects the live overall state and affected scope. If status data is stale or unknown, that is stated explicitly rather than defaulting to "operational."',
  },
  {
    question: 'What does "degraded performance" mean?',
    answer:
      "Degraded performance means the service is operational but responding slower than normal or with elevated error rates. Core functionality remains available, but users may experience delays or intermittent issues.",
  },
  {
    question: "Does this page cover my dedicated environment?",
    answer:
      "This public status page covers shared multi-tenant services and published regions. Dedicated and customer-controlled environments have separate status channels arranged under your commercial agreement.",
  },
  {
    question: "Does the reliability history shown here equal my SLA?",
    answer:
      "No. The reliability history shown is an observational metric. Your contractual SLA terms, measurement methodology, and exclusions are defined in your commercial agreement and may differ from what is displayed here.",
  },
  {
    question: "Where do I report a security issue?",
    answer:
      "Security issues should be reported through the responsible disclosure process outlined in the Security Overview section of the Trust Center, or by contacting your account team directly.",
  },
];

export default function SystemStatusFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white font-sans py-20 md:py-24 px-6 md:px-14 lg:px-[288px]">
      <div className="max-w-[880px] mx-auto px-0 md:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 pb-10">
          <span
            className="text-xs font-normal tracking-wider"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#D4943A",
            }}
          >
            12 / FAQ
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold leading-10"
            style={{
              fontFamily: "'Archivo', sans-serif",
              color: "#0D2636",
            }}
          >
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden"
                style={{ border: "1px solid #D6DEE3" }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      color: "#0D2636",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="text-lg font-semibold ml-4 shrink-0"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#D4943A",
                    }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 overflow-hidden">
                    <p
                      className="text-sm font-normal leading-6"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        color: "#3E5A6B",
                      }}
                    >
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
