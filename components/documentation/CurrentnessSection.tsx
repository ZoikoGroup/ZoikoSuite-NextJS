import React from "react";

export default function CurrentnessSection() {
  const states = [
    {
      badgeText: "PUBLISHED CURRENT",
      badgeBg: "bg-[#EAF5F0]",
      badgeBorder: "border-[#1E7A5A]",
      badgeTextCol: "text-[#1E7A5A]",
      dotBg: "bg-[#1E7A5A]",
      description: "Read and perform the task normally.",
    },
    {
      badgeText: "REVIEW DUE",
      badgeBg: "bg-[#FBF2DF]",
      badgeBorder: "border-[#9C6B12]",
      badgeTextCol: "text-[#9C6B12]",
      dotBg: "bg-[#9C6B12]",
      description: "Read with caution; not known to be incorrect.",
    },
    {
      badgeText: "DEPRECATED",
      badgeBg: "bg-[#F9EDED]",
      badgeBorder: "border-[#8A3B3B]",
      badgeTextCol: "text-[#8A3B3B]",
      dotBg: "bg-[#8A3B3B]",
      description: "Persistent warning; open replacement if available.",
    },
    {
      badgeText: "SUPERSEDED",
      badgeBg: "bg-[#EFF2F4]",
      badgeBorder: "border-[#5D6B75]",
      badgeTextCol: "text-[#5D6B75]",
      dotBg: "bg-[#5D6B75]",
      description: "Historical banner routes to current guidance.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            07 / CURRENTNESS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Status, version & currentness states
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Current, review-due, deprecated, superseded, and withdrawn states can
          never be mistaken for one another.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {states.map((state, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Status Badge */}
                <div
                  className={`inline-flex w-full items-center gap-2 px-3 py-1.5 rounded-md border ${state.badgeBg} ${state.badgeBorder} mb-4`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${state.dotBg}`} />
                  <span
                    className={`text-[11px] font-bold tracking-wider uppercase ${state.badgeTextCol}`}
                  >
                    {state.badgeText}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#4B5563] text-[13px] leading-relaxed">
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
