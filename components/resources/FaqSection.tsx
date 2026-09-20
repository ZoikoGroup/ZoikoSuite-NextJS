"use client";

import React from "react";

interface FaqItem {
  question: string;
  answer?: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is the ZoikoSuite Resource Center?",
    answer:
      "The Resource Center is the central ZoikoSuite hub for finding Executive Briefs, Documentation, Knowledge Base<br />resources, Training Academy materials, Webinars &amp; Events, Case Studies, Blog &amp; Insights, Templates &amp; Tools, and<br />Support Center pathways.",
  },
  {
    question: "Where can I find ZoikoSuite documentation?",
  },
  {
    question: "Where can I find training and events?",
  },
  {
    question: "Where can I find case studies and executive material?",
  },
  {
    question: "Where can I get help?",
  },
];

export default function FaqSection() {
  return (
    <div className="w-full px-[288px] py-[96px] top-[2272px] absolute bg-[#F7F5F0] inline-flex flex-col justify-start items-start">
      <div className="w-full max-w-[352px] px-[48px] flex flex-col justify-start items-start gap-[10px]">
        <div className="self-stretch pb-[36px] flex flex-col justify-start items-start gap-[12px]">
          <div className="self-stretch pb-[2.36px] flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
              10 / FAQ
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
              Frequently asked questions
            </div>
          </div>
        </div>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="w-full h-[168px] bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#0F476A] flex flex-col justify-start items-start overflow-hidden"
          >
            <div className="w-full px-[20px] py-[16px] inline-flex justify-between items-center">
              <div className="flex flex-col justify-start items-start w-0 flex-1">
                <div className="justify-center text-[#1E293B] text-[14px] font-semibold font-['Archivo']">
                  {item.question}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="justify-center text-[#A07A2E] text-[14px] font-semibold font-['JetBrains_Mono']">
                  {index === 0 ? "\u2013" : "+"}
                </div>
              </div>
            </div>
            {index === 0 && (
              <div className="w-[292px] h-[64px] left-[80px] top-[56px] absolute overflow-hidden">
                <div className="w-full h-[56px] left-[80px] top-[56px] absolute justify-center text-[#475569] text-[12px] font-normal font-['Archivo'] leading-6">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
