import React from "react";

export default function UkPrivacyHeroSection() {
  return (
    <section className="w-full bg-[#FBFAF7] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-start gap-2.5 sm:gap-3">
          {/* Eyebrow */}
          <p
            className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#A8843A]"
            style={{ fontFamily: "var(--font-inter, sans-serif)", lineHeight: "17.6px" }}
          >
            UK PRIVACY NOTICE
          </p>

          {/* Heading */}
          <h1
            className="text-[26px] sm:text-[30px] font-bold text-[#16223A] tracking-[-0.01em] leading-[34px] sm:leading-[44px] md:leading-[48px]"
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            UK Privacy Notice
          </h1>

          {/* Subtext */}
          <div className="max-w-[700px]">
            <p
              className="text-[13px] sm:text-[14px] font-normal text-[#4B5872] leading-[20px] sm:leading-[22.4px]"
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              [ One Legal-approved sentence identifying the notice scope and controller/controller-group context. ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
