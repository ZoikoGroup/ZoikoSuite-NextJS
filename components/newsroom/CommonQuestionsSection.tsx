"use client"
import React, { useState } from "react";

export default function CommonQuestionsSection() {
  const faqs = [
    {
      question: "What is the ZoikoSuite Newsroom?",
      answer:
        "The official publication area for approved ZoikoSuite announcements, product and trust updates, company news, partnerships, research, and events.",
    },
    {
      question: "How is Newsroom different from release notes?",
      answer:
        "Newsroom covers material developments and institutional announcements; detailed implementation changes belong in documentation/release notes.",
    },
    {
      question: "Where do I check live service incidents?",
      answer:
        "Use System Status for current operational incidents and maintenance.",
    },
    {
      question: "How can journalists contact ZoikoSuite?",
      answer:
        "Use the Media enquiries route and provide organization, topic, questions, and deadline.",
    },
    {
      question: "Can I use ZoikoSuite logos or screenshots?",
      answer:
        "Only assets and terms published in Media Resources; other use requires permission.",
    },
    {
      question: "How are corrections handled?",
      answer:
        "Material corrections and updates remain dated and are identified on the canonical article.",
    },
    {
      question: "Does ZoikoSuite publish Zoiko Group news here?",
      answer:
        "Only when directly relevant and clearly attributed; Group-wide news remains on the Zoiko Group canonical source.",
    },
  ] as const;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <div className="w-full flex flex-col border-t border-gray-300">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full py-6 border-b border-gray-300 flex flex-col cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-[#0b1329] text-lg font-semibold tracking-tight pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-[#A8843A] font-bold text-xl select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <p className="text-gray-600 font-light leading-relaxed text-[16.5px] mt-3 pr-8">
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
