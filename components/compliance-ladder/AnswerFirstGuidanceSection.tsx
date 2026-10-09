import React from "react";

interface GuidanceItem {
  question: string;
}

export default function AnswerFirstGuidanceSection() {
  const guidanceItems: GuidanceItem[] = [
    {
      question: "What is a compliance ladder?",
    },
    {
      question: "Does ZoikoSuite guarantee compliance?",
    },
    {
      question: "Does this cover all countries or industries?",
    },
    {
      question: "How is this different from Tax Ladder?",
    },
    {
      question: "Can completed work be called compliant?",
    },
    {
      question: "Are evidence exports immutable or audit-ready?",
    },
  ];

  return (
    <section className="w-full bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          ANSWER-FIRST GUIDANCE
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-12">
          Know the limits before evaluating.
        </h2>

        {/* Guidance Cards Stack */}
        <div className="w-full flex flex-col gap-4">
          {guidanceItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-black/5 px-6 py-5 shadow-sm flex items-center gap-6 transition-all hover:shadow-md"
            >
              {/* Bullet / Dot Indicator */}
              <div className="w-2 h-2 rounded-full bg-[#1F2421] flex-shrink-0" />

              {/* Question Text */}
              <span className="text-base sm:text-lg font-bold text-[#1F2421] tracking-tight">
                {item.question}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
