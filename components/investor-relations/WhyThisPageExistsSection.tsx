import React from "react";

export default function WhyThisPageExistsSection() {
  const items = [
    {
      question: "Can I invest in ZoikoSuite directly?",
      answer:
        "Investment availability depends on the legal/capital structure published by Zoiko Group Investor Relations — not assumed here.",
    },
    {
      question: "Is ZoikoSuite publicly traded?",
      answer:
        "Status is rendered from the current registry. If private, there is no public-market trading path presented on this page.",
    },
    {
      question: "Does Zoiko Group guarantee ZoikoSuite obligations?",
      answer:
        "No inference is made. Applicable contracts and legal terms govern obligations.",
    },
    {
      question: "Where are the financials?",
      answer:
        "Only public disclosures are shown; qualified materials may require eligibility or an NDA.",
    },
    {
      question: "Who owns ZoikoSuite?",
      answer:
        "The approved corporate relationship is explained without inventing ownership percentages.",
    },
    {
      question: "Where do I send investor enquiries?",
      answer: "Use the Group Investor Relations contact path below.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHY THIS PAGE EXISTS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Clear corporate context. Clear investor route.
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            High-risk investor questions are answered directly, before any form
            is presented.
          </p>
        </div>

        {/* List Container */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-200 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8"
            >
              {/* Question */}
              <div className="w-full md:w-5/12 text-[#0b1329] text-base font-semibold tracking-tight">
                {item.question}
              </div>

              {/* Answer */}
              <div className="w-full md:w-7/12 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
