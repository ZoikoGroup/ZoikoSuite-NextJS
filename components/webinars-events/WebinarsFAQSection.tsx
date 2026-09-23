"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "What are ZoikoSuite Webinars & Events?",
    answer:
      "A public Resources destination for approved ZoikoSuite webinar/event records and eligible replays. Inventory and cadence are not guaranteed to any fixed schedule.",
  },
  {
    question: "Will a webinar be recorded?",
    answer:
      "Eligible webinars are recorded and made available in the On-Demand Replay library following production processing and source verification.",
  },
  {
    question: "Are captions or transcripts available?",
    answer:
      "Yes, confirmed replays and recorded sessions include machine-verified transcripts and closed captions.",
  },
  {
    question: "What if an event is rescheduled or cancelled?",
    answer:
      "Registered attendees receive immediate operational notifications via their confirmed email, and the event record is updated with the revised schedule.",
  },
  {
    question: "Can my organization request a private session?",
    answer:
      "Yes. Enterprise teams can contact sales or their partnership architect to arrange dedicated private briefings and executive workshops.",
  },
];

export default function WebinarsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7f5f0] py-20 px-6 md:px-12 lg:px-16" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-[11px] font-normal tracking-[0.1em] text-[#a07a2e] block mb-2">
            10 / FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-semibold text-[#16262f] tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#dbe3e8] rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#fafbfc] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-[#16262f] pr-4">
                    {item.question}
                  </span>
                  <span className="font-mono text-[18px] font-semibold text-[#a07a2e] shrink-0">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[14.5px] text-[#5a6d79] leading-relaxed border-t border-[#f0f4f7]">
                    {item.answer}
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
