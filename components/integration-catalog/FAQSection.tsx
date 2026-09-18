"use client";

import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Zoiko Shield Integration Catalog?",
      answer:
        "A comprehensive registry of cloud, endpoint, identity, and security connectors built to ingest logs, map telemetry to framework controls, and generate compliance ledger evidence.",
    },
    {
      question: "Can Zoiko Shield work with my existing security stack?",
      answer:
        "Yes, our core design is platform-agnostic and functions by Escrow-consuming telemetry from your current systems without requiring any rip-and-replace.",
    },
    {
      question: "How are integration credentials protected?",
      answer:
        "Integrations utilize granular API client keys or secure AWS Role ARN assumptions. Secrets are escrowed inside our hardware security module Key Vaults.",
    },
    {
      question: "What data does an integration collect?",
      answer:
        "Only raw data necessary to substantiate framework controls. Data schemas are normalized immediately to prevent PII exposure.",
    },
    {
      question: "Do integrations create compliance evidence?",
      answer:
        "Yes. Ingested events are cryptographically committed to immutable ledgers as verified active evidence mapping directly to SOC 2, ISO 27001, or HIPAA.",
    },
    {
      question: "Can I request a connector that is not listed?",
      answer:
        "Absolutely. You can submit our Integration Request form; typical custom pipelines are scoped and priority-scheduled within three business days.",
    },
    {
      question: "How do I know whether an integration is production-ready?",
      answer:
        "All listed integrations feature clear status badges. Available and Partner-assisted labels represent fully verified and hardened production-ready paths.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="self-stretch px-20 py-16 bg-[#F7F5F0] inline-flex flex-col justify-start items-start gap-8 w-full max-w-[1440px] mx-auto">
      {/* Section Title */}
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <h2 className="text-[#0A2029] text-3xl font-extrabold font-['Hanken_Grotesk']">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Accordion List */}
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="self-stretch p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 flex flex-col justify-start items-start gap-3 cursor-pointer transition-all hover:outline-[#123B4C]/30 shadow-[0px_4px_16px_0px_rgba(11,37,48,0.03)]"
            >
              <div className="self-stretch inline-flex justify-between items-center">
                <h3 className="text-[#0A2029] text-base font-extrabold font-['Hanken_Grotesk']">
                  {faq.question}
                </h3>
                <div className="w-4 h-4 inline-flex flex-col justify-center items-center overflow-hidden">
                  <div className="w-4 h-4 relative overflow-hidden flex items-center justify-center">
                    <div
                      className={`w-2.5 h-2.5 border-t-2 border-r-2 border-[#C44242] transition-transform duration-200 ${
                        isOpen
                          ? "rotate-135 translate-y-[2px]"
                          : "rotate-45 -translate-y-[2px]"
                      }`}
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <p className="self-stretch text-[#5B6670] text-sm font-normal font-['Manrope'] leading-5 pt-1">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
