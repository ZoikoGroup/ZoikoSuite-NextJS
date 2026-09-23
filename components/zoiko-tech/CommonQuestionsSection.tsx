"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function CommonQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Zoiko Tech?",
      answer:
        "Zoiko Tech is a California-based global technology company building intelligent infrastructure, enterprise platforms, communications systems, security capabilities, developer technology, and domain-specific AI.",
    },
    {
      question: "What is the relationship between Zoiko Tech and ZoikoSuite?",
      answer:
        "ZoikoSuite's public site identifies ZoikoSuite as a Zoiko Tech platform and a Zoiko Group company. Contractual counterparties and legal terms are governed by the applicable agreement and legal notices.",
    },
    {
      question: "Is ZoikoSuite part of Zoiko Group?",
      answer:
        "ZoikoSuite publicly identifies itself as a Zoiko Group company through its Zoiko Tech relationship. Use the Zoiko Group destination for wider Group structure and portfolio context.",
    },
    {
      question: "Where is Zoiko Tech headquartered?",
      answer:
        "Current official sources identify Sacramento, California as Zoiko Tech's global headquarters. Granular address/contact details follow the current official corporate record.",
    },
    {
      question: "Does this page list Zoiko Tech certifications?",
      answer:
        "No. ZoikoSuite security, compliance, and certification claims are governed by the ZoikoSuite Trust surfaces, which publish status and scope.",
    },
    {
      question: "Where can I learn more about Zoiko Tech?",
      answer:
        "Use the official Zoiko Tech website for full corporate and technology information, and return to ZoikoSuite for product-specific architecture, Trust, resources, and enterprise engagement.",
    },
  ] as const;

  const toggleAccordion = (index: number) => {
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

        {/* Accordion List */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full border-b border-[#DCD6C8] py-6 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#0b1329]">
                    {faq.question}
                  </h3>
                  <div className="text-[#A8843A] shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 pr-12">
                    <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
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
