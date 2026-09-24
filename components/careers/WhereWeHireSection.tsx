import React from "react";

const hireDimensions = [
  {
    title: "HIRING COUNTRY / REGION",
    lines: ["Only locations enabled on the requisition are shown."],
  },
  {
    title: "WORK MODEL",
    lines: [
      "On-site \u00B7 Hybrid \u00B7 Remote within approved geography \u00B7",
      "Distributed \u00B7 Field/Customer-site.",
    ],
  },
  {
    title: "RELOCATION",
    lines: [
      "Yes / No / Case-by-case / Not specified \u2014 no",
      "promises in generic page copy.",
    ],
  },
  {
    title: "VISA / WORK AUTHORIZATION",
    lines: [
      "Required authorization; sponsorship considered;",
      "sponsorship unavailable; ask recruiting.",
    ],
  },
  {
    title: "EMPLOYMENT ENTITY",
    lines: ["Mandatory and explicit on every role."],
  },
  {
    title: "CROSS-BORDER REMOTE",
    lines: [
      "Never assumed \u2014 must be supported by employing",
      "entity, tax, payroll, security, and immigration rules.",
    ],
  },
];

export default function WhereWeHireSection() {
  return (
    <section className="relative w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            WHERE WE HIRE
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              Office presence does not mean every role is hireable
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              everywhere
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#4B5872] text-sm md:text-base font-normal leading-relaxed mt-3">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              Every job detail states its own employment entity, location, and eligibility &mdash; nothing is inferred from a general
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              office list.
            </span>
          </p>
        </div>

        {/* Hire Dimension Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {hireDimensions.map((dimension) => (
            <div
              key={dimension.title}
              className="w-full p-6 sm:p-7 border border-[#DCD6C8] bg-white rounded-xl flex flex-col items-start justify-start hover:shadow-xs transition-shadow"
            >
              <span className="text-[#A8843A] text-xs font-bold tracking-wider uppercase mb-3 block">
                {dimension.title}
              </span>
              <p className="text-[#4B5872] text-xs md:text-sm font-normal leading-5">
                {dimension.lines.map((line, idx) => (
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
