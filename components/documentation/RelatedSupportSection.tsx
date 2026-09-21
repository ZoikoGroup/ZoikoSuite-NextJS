import React from "react";

export default function RelatedSupportSection() {
  const items = [
    {
      category: "NEXT STEP",
      title: "Requesting a policy exception",
      action: null,
      isSupport: false,
    },
    {
      category: "REFERENCE",
      title: "Policy object model field reference",
      action: null,
      isSupport: false,
    },
    {
      category: "TROUBLESHOOTING",
      title: "Resolving approval matrix conflicts",
      action: null,
      isSupport: false,
    },
    {
      category: "SUPPORT",
      title: "Can't complete this task?",
      action: "Open Support Center →",
      isSupport: true,
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            08 / RELATED & SUPPORT
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Related documentation & support handoff
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm border flex flex-col justify-between ${
                item.isSupport ? "border-[#A07A2E] border-t-3 border-t-[#A07A2E]" : "border-[#0F476A] border-t-3 border-t-[#0F476A]"
              }`}
            >
              <div>
                {/* Category */}
                <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-2">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-[#111827] font-semibold text-[15px] leading-snug tracking-tight mb-4">
                  {item.title}
                </h3>
              </div>

              {/* Optional Action Link */}
              {item.action && (
                <div>
                  <a
                    href="#"
                    className="text-[#0F476A] hover:underline text-sm font-semibold tracking-wide"
                  >
                    {item.action}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
