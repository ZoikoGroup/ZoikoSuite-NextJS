import React from "react";

export default function AiAutomationAndProfilingSection() {
  const rows = [
    {
      question: "Is personal data used by AI features?",
      requiredDisclosure:
        "Context, categories, purpose, user/customer control, provider/model boundary, training status — only where verified.",
    },
    {
      question: "Is customer content used to train models?",
      requiredDisclosure:
        "A direct yes/no/context-dependent statement only if verified for every applicable product/deployment.",
    },
    {
      question: "Are decisions made solely by automation?",
      requiredDisclosure:
        "If applicable: logic, significance, consequences, and rights. If not, the negative statement requires evidence.",
    },
    {
      question: "Human oversight",
      requiredDisclosure: "Verified review/authority boundaries.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            AI, AUTOMATION & PROFILING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Generated from the AI/processing inventory, not marketing
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Question</div>
            <div className="md:col-span-8">Required Disclosure</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
            >
              {/* Question Column */}
              <div className="md:col-span-4 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.question}
              </div>

              {/* Required Disclosure Column */}
              <div className="md:col-span-8 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.requiredDisclosure}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
