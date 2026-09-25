import React from "react";

export default function AutomatedDecisionSection() {
  return (
    <section id="adm" className="py-5 sm:py-[26px] flex flex-col gap-3 sm:gap-[11.3px] border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Automated Decision-Making / Profiling
      </h2>

      {/* Description & Note */}
      <div className="flex flex-col gap-3 sm:gap-[14px]">
        <p
          className="text-[13px] sm:text-[13.5px] font-normal text-[#4B5872] leading-[20px] sm:leading-[21.6px]"
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          Conditional and Legal-controlled. State is approved-none / approved-applicable / conditional / unknown-blocked — all public wording from Legal only.
        </p>

        {/* Conditional Note Box */}
        <div className="w-full bg-[#EFE8D8] border-l-[3px] border-[#A8843A] rounded-[6px] px-3.5 sm:px-4 py-2.5 sm:py-[11.5px]">
          <p
            className="text-[11px] sm:text-[11.5px] italic text-[#4B5872] leading-[17px] sm:leading-[18.4px]"
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
            }}
          >
            Regulated automated decision-making is never inferred merely because Responsible AI or AI features exist elsewhere on the platform.
          </p>
        </div>
      </div>
    </section>
  );
}
