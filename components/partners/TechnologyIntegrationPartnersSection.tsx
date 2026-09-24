import React from "react";

const rows = [
  {
    field: "Integration statuses",
    lines: [
      "Available, Limited, Pilot, Planned, Deprecated, or Partner-managed",
      "—",
      "only if approved in the integration registry.",
    ],
  },
  {
    field: "Technical fields",
    lines: [
      "Integration pattern, authentication, data direction, supported",
      "objects/events, deployment constraints, owner, docs URL, last test",
      "date.",
    ],
  },
  {
    field: "Security boundary",
    lines: [
      "States whether the partner processes data, stores data, invokes",
      "APIs,",
      "receives webhooks, or operates only as an external endpoint.",
    ],
  },
];

export default function TechnologyIntegrationPartnersSection() {
  return (
    <section className="w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          TECHNOLOGY &amp; INTEGRATION PARTNERS
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight max-w-3xl">
          Connect the systems your operating model already depends on
        </h2>

        <p className="text-[#4B5872] text-base font-light leading-relaxed mt-3 max-w-3xl">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            Technology relationships are described through actual interfaces, supported workflows, data
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            boundaries, and availability &mdash; not vague &quot;seamless integration&quot; language.
          </span>
        </p>

        <div className="w-full mt-10 border-t border-[#DCD6C8]">
          {/* Header row */}
          <div className="flex gap-6 border-b border-[#DCD6C8] pt-4 pb-2.5">
            <div className="w-48 shrink-0">
              <span className="text-[#4B5872] text-sm font-bold uppercase leading-5 tracking-wide">
                Field
              </span>
            </div>
            <div className="flex-1">
              <span className="text-[#4B5872] text-sm font-bold uppercase leading-5 tracking-wide">
                Requirement
              </span>
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.field}
              className="flex flex-col md:flex-row gap-2 md:gap-6 border-b border-[#DCD6C8] py-4"
            >
              <div className="w-48 shrink-0">
                <span className="text-[#16223A] text-sm font-bold leading-5 block">
                  {row.field}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-[#16223A] text-sm font-normal leading-5">
                  {row.lines.map((line, idx) => (
                    <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
