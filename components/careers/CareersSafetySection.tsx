import React from "react";

const safetyMeasures = [
  {
    title: "No candidate fees",
    lines: [
      "Legitimate recruiting never requires payment for",
      "application, interview, equipment, or onboarding.",
    ],
  },
  {
    title: "Verified domains",
    lines: [
      "Official recruiting email domains are listed only",
      "after Security/People approval.",
    ],
  },
  {
    title: "Offer verification",
    lines: [
      "A method exists to verify suspicious offers or",
      "recruiter outreach.",
    ],
  },
  {
    title: "Job URL integrity",
    lines: [
      "All legitimate roles originate from the canonical",
      "careers domain or approved ATS.",
    ],
  },
  {
    title: "Sensitive data timing",
    lines: [
      "Bank/payment or identity documentation is",
      "requested only through approved secure",
      "processes at the right stage.",
    ],
  },
  {
    title: "Report route",
    lines: [
      "A dedicated fraud/security contact routes",
      "suspicious outreach to Security/People.",
    ],
  },
];

export default function CareersSafetySection() {
  return (
    <section className="relative w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-bold font-['Inter'] leading-4 tracking-widest uppercase mb-3 block">
            CAREERS SAFETY &amp; SCAM PREVENTION
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight max-w-3xl">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              Protecting candidates from impersonation and
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              fraud
            </span>
          </h2>
        </div>

        {/* Safety Measure Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {safetyMeasures.map((measure) => (
            <div
              key={measure.title}
              className="w-full p-6 sm:p-7 border border-[#DCD6C8] bg-white rounded-xl flex flex-col items-start justify-start hover:shadow-xs transition-shadow"
            >
              <h3 className="text-[#16223A] text-sm md:text-base font-bold leading-6 mb-2">
                {measure.title}
              </h3>
              <p className="text-[#4B5872] text-xs md:text-sm font-normal leading-5">
                {measure.lines.map((line, idx) => (
                  <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
