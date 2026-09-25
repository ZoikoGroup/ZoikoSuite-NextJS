import React from "react";

const paths = [
  {
    title: "Technology / Integration",
    lines: [
      "Software, infrastructure, data,",
      "identity, developer, connectivity",
      "providers.",
    ],
  },
  {
    title: "Implementation / Delivery",
    lines: [
      "Consultancies, system",
      "integrators,",
      "transformation/adoption partners.",
    ],
  },
  {
    title: "Professional / Jurisdiction",
    lines: [
      "Local specialists and regulated-",
      "domain providers.",
    ],
  },
  {
    title: "Channel / Referral",
    lines: [
      "Commercial/channel",
      "organizations.",
    ],
  },
  {
    title: "Strategic / Institutional",
    lines: [
      "Enterprises, universities,",
      "infrastructure or ecosystem",
      "collaborators.",
    ],
  },
];

export default function ApplicationQualificationSection() {
  return (
    <section
      id="application-qualification"
      className="w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          APPLICATION &amp; QUALIFICATION
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
          Choose the path that matches your organization
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {paths.map((path) => (
            <div
              key={path.title}
              className="bg-white rounded-lg border border-[#DCD6C8] px-4 pt-5 pb-6 flex flex-col items-center text-center gap-2 transition-shadow hover:shadow-xs"
            >
              <h3 className="text-[#16223A] text-xs font-bold leading-5">
                {path.title}
              </h3>
              <p className="text-[#4B5872] text-xs font-normal leading-4">
                {path.lines.map((line, idx) => (
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
