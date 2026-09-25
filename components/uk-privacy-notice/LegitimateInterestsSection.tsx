import React from "react";

const legitRows = [
  {
    field: "Interest description",
    value: "[ Legal-approved plain-language interest — no Product-authored rationale. ]",
  },
  {
    field: "Balancing / safeguards",
    value: "[ Only approved summary — internal privileged analysis is never exposed. ]",
  },
  {
    field: "Opt-out / objection route",
    value: "[ Only if the approved Rights Registry provides an applicable path. ]",
  },
];

export default function LegitimateInterestsSection() {
  return (
    <section id="legit" className="py-5 sm:py-[26px] flex flex-col gap-3 sm:gap-[11.3px] border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Legitimate Interests
      </h2>

      {/* Intro text */}
      <p
        className="text-[13px] sm:text-[13.5px] font-normal text-[#4B5872] leading-[20px] sm:leading-[21.6px]"
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
        }}
      >
        Conditional — rendered only when approved processing records identify relevant legitimate-interest processing and Legal approves public detail.
      </p>

      {/* Table */}
      <div className="w-full flex flex-col border-t border-[#DCD6C8] mt-1 sm:mt-2">
        {/* Table Header */}
        <div className="hidden sm:flex flex-row items-center gap-[18px] py-[13px] pb-[10px] border-b border-[#DCD6C8]">
          <div className="w-[190px] shrink-0 text-[12.5px] font-bold uppercase tracking-[0.0504em] text-[#4B5872]">
            Field
          </div>
          <div className="flex-1 text-[12.5px] font-bold uppercase tracking-[0.0504em] text-[#4B5872]">
            Value
          </div>
        </div>

        {/* Rows */}
        {legitRows.map((row, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start gap-1 sm:gap-[18px] py-2.5 sm:py-[13px] border-b border-[#DCD6C8]"
          >
            <div className="w-full sm:w-[190px] shrink-0 text-[12px] sm:text-[12.5px] font-bold text-[#16223A] sm:text-[#4B5872] leading-[18px] sm:leading-[20px]">
              {row.field}
            </div>
            <div className="flex-1 text-[12px] sm:text-[12.5px] font-normal text-[#4B5872] leading-[19px] sm:leading-[20px]">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
