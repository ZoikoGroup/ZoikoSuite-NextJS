import React from "react";

export default function EnterpriseClosingCta() {
  return (
    <section
      className="py-[55px] px-6 sm:px-12 lg:px-[120px] font-sans border-t border-white/10 bg-color-azure-11"
      style={{
        backgroundColor: "var(--color-color-azure-11, #101E2B)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Column: Heading & Text */}
          <div className="flex flex-col gap-[11px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#D9B364]">
                Your next conversation
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-semibold text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.2] lg:leading-[39.1px] tracking-[-0.035em] text-[#FFFFFF] pt-[7.64px]">
              Let’s start with your priorities.
            </h2>

            {/* Paragraph */}
            <p className="font-normal text-[14px] leading-[23.1px] text-[#B7C9CE]">
              Bring your context. Begin an enterprise evaluation.
            </p>
          </div>

          {/* Right Column: CTA Button */}
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center gap-[25px] px-[22px] py-[13.7px] bg-[#D9B364] text-[#082632] rounded-[5px] border border-transparent font-semibold text-[13px] leading-[21.45px] hover:bg-[#cda653] transition-colors shadow-sm flex-shrink-0"
          >
            <span>Talk to enterprise sales</span>
            <svg
              className="w-3.5 h-3.5 shrink-0"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 10.5L10.5 3.5M10.5 3.5H5.5M10.5 3.5V8.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
