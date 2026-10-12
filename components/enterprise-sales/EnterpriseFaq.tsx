"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "01",
    question: "What should I include in an enterprise sales inquiry?",
    answer:
      "Provide your organization’s general goals, key stakeholders, priority evaluation areas (such as workforce, operations, IT, or finance), and any specific project timelines or operational requirements.",
  },
  {
    id: "02",
    question: "Can I ask about integrations or security review requirements?",
    answer:
      "Yes. You can outline your existing technology ecosystem, security questions, compliance requirements, or specific review criteria to ensure we connect you with the appropriate technical specialists.",
  },
  {
    id: "03",
    question: "Who should use the European enterprise sales link?",
    answer:
      "Organizations operating primarily in the UK or European Economic Area, or those evaluating European data residency, local compliance frameworks, or regional contract terms, should connect through our European headquarters.",
  },
  {
    id: "04",
    question: "Does making an inquiry create a purchase commitment?",
    answer:
      "No. An enterprise sales inquiry is solely for scoping your evaluation, discussing requirements, and answering questions. No purchase or commercial commitment is created.",
  },
];

export default function EnterpriseFaq() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="bg-white py-[82px] px-6 sm:px-12 font-sans">
      <div className="w-full max-w-[860px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-[18.6px] mb-[32px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
            <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
              Before you begin
            </span>
          </div>

          {/* H2 */}
          <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
            A few useful answers.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#DCE4E4] pt-[11.39px]">
          {faqData.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="border-b border-[#DCE4E4] transition-colors"
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => toggleFaq(item.id)}
                  className="w-full min-h-[83.59px] py-6 flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                >
                  <span className="font-semibold text-[15px] leading-[24.75px] text-[#13303B] pr-4 group-hover:text-[#1C7A78] transition-colors">
                    {item.question}
                  </span>

                  <span className="font-light text-[24px] leading-[39.6px] text-[#1C7A78] select-none flex-shrink-0 w-6 text-right">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 text-[14px] leading-[23.1px] text-[#64757C]">
                    <div className="p-4 bg-[#F6F5EF] rounded-[6px] border border-[#DCE4E4]">
                      {item.answer}
                    </div>
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
