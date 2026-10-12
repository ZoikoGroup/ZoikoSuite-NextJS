"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const partnerFaqsData: FaqItem[] = [
  {
    id: "01",
    question: "Does an enquiry establish a partnership?",
    answer:
      "No. Submitting an enquiry or proposal initiates an initial review process but does not constitute a legal partnership or binding commercial agreement.",
  },
  {
    id: "02",
    question: "Which topic should I choose?",
    answer:
      "Select the category that best matches your primary objective—such as technical integration, channel distribution, or services implementation. If unsure, choose 'Strategic & Enterprise Alliances'.",
  },
  {
    id: "03",
    question: "Should I use this page to buy a product?",
    answer:
      "No. This page is strictly for organizational collaboration and partnership proposals. For sales and product purchasing, please direct your request to Enterprise Sales.",
  },
  {
    id: "04",
    question: "What if I already have a partner relationship?",
    answer:
      "Select 'Existing Partner Questions & Changes' in the enquiry form or reach out directly through your dedicated account channel.",
  },
  {
    id: "05",
    question: "What information should I avoid sharing?",
    answer:
      "Please refrain from submitting confidential customer data, internal security credentials, trade secrets, or sensitive non-public financial records.",
  },
  {
    id: "06",
    question: "Is a response time or outcome guaranteed?",
    answer:
      "All enquiries are reviewed by our partnerships team, but response timelines and outcomes depend on strategic alignment and evaluation capacity.",
  },
];

export default function PartnerCommonQuestions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: FAQ Accordion */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A34C]" />
              <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
                COMMON QUESTIONS
              </p>
            </div>
            <h2 className="text-[#1E293B] text-3xl md:text-4xl font-bold tracking-tight">
              Before you send your enquiry.
            </h2>
          </div>

          {/* Minimal Accordion List */}
          <div className="border-t border-[#E2E8F0]">
            {partnerFaqsData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-[#E2E8F0] transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  >
                    <span className="text-[#1E293B] text-sm md:text-base font-bold pr-4 group-hover:text-[#386665] transition-colors duration-200">
                      {item.question}
                    </span>
                    <div className="text-[#386665] flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#386665]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#386665]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pt-1">
                      <p className="text-[#64748B] text-xs md:text-sm leading-relaxed max-w-xl">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Image Container */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-[450px] sm:h-[550px] md:h-[600px] rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0]">
            <Image
              src="/partner/6.png"
              alt="Question mark imagery before submitting partnership enquiry"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
