import React from "react";

export default function PersonalDataWeCollectSection() {
  const rows = [
    {
      category: "Account & identity data",
      examples: "[ Verified examples from registry ]",
      source: "You",
      requiredOptional: "Required",
    },
    {
      category: "Usage & service data",
      examples: "[ Verified examples from registry ]",
      source: "Device / service",
      requiredOptional: "Required",
    },
    {
      category: "Support & communications",
      examples: "[ Verified examples from registry ]",
      source: "You",
      requiredOptional: "Optional",
    },
    {
      category: "Customer-controlled content",
      examples: "[ Verified examples from registry ]",
      source: "Customer",
      requiredOptional: "Context-dependent",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PERSONAL DATA WE COLLECT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Registry-backed categories — not generic SaaS patterns
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-3">Category</div>
            <div className="md:col-span-5">Examples</div>
            <div className="md:col-span-2">Source</div>
            <div className="md:col-span-2">Required / Optional</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center bg-[#F6F1E6]"
            >
              {/* Category Column */}
              <div className="md:col-span-3 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.category}
              </div>

              {/* Examples Column */}
              <div className="md:col-span-5 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.examples}
              </div>

              {/* Source Column */}
              <div className="md:col-span-2 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.source}
              </div>

              {/* Required / Optional Column */}
              <div className="md:col-span-2 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.requiredOptional}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
