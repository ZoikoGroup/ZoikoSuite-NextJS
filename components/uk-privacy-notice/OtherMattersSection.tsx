import React from "react";

const otherRows = [
  {
    area: "Children / minors",
    requirement: "Conditional — publishes only counsel-approved scope, age-related wording, and request/consent mechanics; no threshold assumptions.",
  },
  {
    area: "Cookie Policy",
    requirement: "Contextual approved link — this notice avoids duplicating a volatile cookie inventory.",
  },
  {
    area: "Security Disclosure",
    requirement: "Contextual link only, describing safeguards with approved wording — never a guarantee.",
  },
  {
    area: "Responsible AI",
    requirement: "Contextual link where this notice references AI-related processing — no invented training/ADM/profiling claims.",
  },
  {
    area: "Data Processing Agreement",
    requirement: "Linked for enterprise/procurement context where approved — never presented as a consumer rights mechanism.",
  },
];

export default function OtherMattersSection() {
  return (
    <section id="other" className="py-5 sm:py-[26px] flex flex-col gap-4 sm:gap-5 border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Children, Cookies &amp; Security / Responsible AI
      </h2>

      {/* Row Table */}
      <div className="w-full flex flex-col border-t border-[#DCD6C8]">
        {/* Table Header */}
        <div className="hidden sm:flex flex-row items-center gap-[18px] py-[13px] pb-[10px] border-b border-[#DCD6C8]">
          <div className="w-[190px] shrink-0 text-[12.5px] font-bold uppercase tracking-[0.0504em] text-[#4B5872]">
            Area
          </div>
          <div className="flex-1 text-[12.5px] font-bold uppercase tracking-[0.0504em] text-[#4B5872]">
            Requirement
          </div>
        </div>

        {/* Data Rows */}
        {otherRows.map((row, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start gap-1 sm:gap-[18px] py-2.5 sm:py-[13px] border-b border-[#DCD6C8]"
          >
            <div className="w-full sm:w-[190px] shrink-0 text-[12px] sm:text-[12.5px] font-bold text-[#16223A] sm:text-[#4B5872] leading-[18px] sm:leading-[20px]">
              {row.area}
            </div>
            <div className="flex-1 text-[12px] sm:text-[12.5px] font-normal text-[#4B5872] leading-[19px] sm:leading-[20px]">
              {row.requirement}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
