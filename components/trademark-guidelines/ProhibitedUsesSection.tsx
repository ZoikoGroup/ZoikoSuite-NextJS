import React from "react";

const PROHIBITED_ITEMS = [
  "Presenting a third-party company, app, website, account, support channel, login, payment flow, or service as if it were ZoikoSuite.",
  "Using a logo or mark to falsely imply sponsorship, certification, accreditation, partnership, reseller status, or endorsement.",
  "Using ® where the relevant mark/status/scope is not verified and approved for that use.",
  "Altering approved visual marks outside published variants.",
  "Combining ZoikoSuite identifiers with another mark into a new composite name/logo without permission.",
  "Using current partner badges or co-brand assets after relationship, program, territory, certification, or license expiration.",
  "Using brand assets in fraudulent, phishing, malicious, deceptive, unlawful, or impersonation activity.",
];

export default function ProhibitedUsesSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          PROHIBITED OR MISLEADING USES
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] md:text-[26px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          Bright-line risk patterns
        </h2>

        {/* List of Prohibited Items */}
        <div className="flex flex-col gap-2.5">
          {PROHIBITED_ITEMS.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white border border-[#DCD6C8] border-l-[3px] border-l-[#A8433A] rounded-[6px] px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xs hover:border-[#A8433A]/60 transition-colors"
            >
              <p className="font-sans text-[12px] sm:text-[13px] leading-[19px] sm:leading-[20.8px] text-[#4B5872]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
