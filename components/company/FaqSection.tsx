"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is ZoikoSuite?",
    answer:
      "ZoikoSuite is a governance-first business operations platform that connects finance, workforce, legal, tax, compliance, evidence, and intelligence under a policy-aware operating model.",
  },
  {
    question: "Who operates ZoikoSuite?",
    answer:
      "ZoikoSuite is operated by Zoiko Tech, the technology organization responsible for the platform. Exact legal/operator wording follows the current approved company registry.",
  },
  {
    question: "Is ZoikoSuite part of Zoiko Group?",
    answer:
      "ZoikoSuite sits within the wider Zoiko Group portfolio context. Exact ownership wording follows approved relationship language and the current company registry.",
  },
  {
    question: "Where is ZoikoSuite based?",
    answer:
      "Current public-site signals show Sacramento, California, United States and London, United Kingdom. Location types and addresses are shown only once validated in the location registry.",
  },
  {
    question: "Who leads ZoikoSuite?",
    answer:
      "Verified leadership and governance roles are published on the Leadership page, without invented counts or titles.",
  },
  {
    question: "How can I partner with ZoikoSuite?",
    answer:
      "Partnership models and verified ecosystem relationships are described on the Partners page, with routing based on partnership type.",
  },
  {
    question: "Where can I find open roles?",
    answer:
      "Culture, teams, locations, and live opportunities are listed on the Careers page, without unsupported culture or growth claims.",
  },
  {
    question: "Where can I find security and compliance information?",
    answer:
      "Detailed controls and claim statuses live in Trust, covering security, privacy, and responsible AI boundaries.",
  },
  {
    question: "Where can journalists get official information?",
    answer:
      "Official announcements, media resources, and contacts are available in the Newsroom.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="self-stretch px-64 py-24 bg-color-grey-95-12 flex flex-col justify-start items-start">
      <div className="w-full max-w-[900px] px-8 flex flex-col justify-start items-start">
        {/* Header */}
        <div className="self-stretch pb-9 inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-yellow-600" />
              <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
                FAQ
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Common questions about ZoikoSuite as a company
              </h2>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`self-stretch pt-4 pb-7 border-b border-color-orange-87 flex flex-col justify-start items-start gap-2 cursor-pointer ${
                isOpen ? "" : "py-4"
              }`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
                  {faq.question}
                </div>
                <div className="w-3.5 h-6 inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-color-grey-58 text-xl font-normal font-['Inter']">
                    {isOpen ? "–" : "+"}
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="w-[760px] max-w-[760px] flex flex-col justify-start items-start">
                  <p className="justify-center text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
