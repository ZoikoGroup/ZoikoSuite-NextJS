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
    question: "How can journalists contact ZoikoSuite?",
    answer:
      "Journalists, editors, and producers can submit inquiries through this page by providing their outlet, editorial context, and specific questions. Submissions are routed directly to authorized corporate communications representatives.",
  },
  {
    id: "02",
    question: "How do I request an interview?",
    answer:
      "Select the Interviews & Spokesperson Requests topic on this page or specify interview details in your enquiry form, including topic, format (print, audio, video), intended audience, and publication deadline.",
  },
  {
    id: "03",
    question: "Can I request approved logos or images?",
    answer:
      "Yes. Select the Images, Logos & Media Assets category and describe your editorial placement. Our team provides verified corporate imagery, executive headshots, and logo files for approved editorial use.",
  },
  {
    id: "04",
    question: "Where do I send a correction request?",
    answer:
      "Select Corrections & Sensitive Media Requests to raise factual inaccuracies, time-sensitive press corrections, or reporting updates with the communications and legal teams.",
  },
  {
    id: "05",
    question: "Does a requested deadline guarantee a response?",
    answer:
      "No. While our team makes every effort to accommodate press deadlines, submitting an inquiry does not guarantee a response time or commercial SLA.",
  },
  {
    id: "06",
    question: "Can independent journalists and European correspondents enquire?",
    answer:
      "Yes. Freelance reporters, independent commentators, podcast hosts, and European regional correspondents are welcome to submit inquiries with relevant background on their publication platform.",
  },
];

export default function MediaEnquiriesFaq() {
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
              Useful answers
            </span>
          </div>

          {/* H2 */}
          <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
            Before your media enquiry.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#DCE4E4] pt-[11.4px]">
          {faqData.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="border-b border-[#DCE4E4] transition-colors"
              >
                <button
                  type="button"
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
