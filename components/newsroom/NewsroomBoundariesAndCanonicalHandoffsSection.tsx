import React from "react";

export default function NewsroomBoundariesAndCanonicalHandoffsSection() {
  const rows = [
    {
      topic: "Live service incident",
      canonicalDestination: "Trust → System Status",
      newsroomRole: "Link only; no parallel incident timeline.",
    },
    {
      topic: "Certification/attestation status",
      canonicalDestination: "Trust → Certifications",
      newsroomRole:
        "Announce verified milestone with exact scope; no badge-only claim.",
    },
    {
      topic: "Release notes",
      canonicalDestination: "Product / Documentation release-note system",
      newsroomRole: "Newsroom only for material changes.",
    },
    {
      topic: "Investor information",
      canonicalDestination: "Company → Investor Relations or Group IR",
      newsroomRole: "Never implies public-company reporting requirements.",
    },
    {
      topic: "Careers",
      canonicalDestination: "Company → Careers",
      newsroomRole:
        "Leadership/culture news may cross-link; employment facts stay in Careers/ATS.",
    },
    {
      topic: "Parent-company news",
      canonicalDestination: "Zoiko Group Newsroom",
      newsroomRole: "Cross-linked with explicit Zoiko Group attribution.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            NEWSROOM BOUNDARIES & CANONICAL HANDOFFS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            What lives here, and what belongs elsewhere
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">TOPIC</div>
            <div className="w-4/12">CANONICAL DESTINATION</div>
            <div className="w-5/12">NEWSROOM ROLE</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Topic */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Topic
                </span>
                {row.topic}
              </div>

              {/* Canonical Destination */}
              <div className="w-full md:w-4/12 text-gray-600 font-light leading-relaxed text-[16.5px] pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Canonical Destination
                </span>
                {row.canonicalDestination}
              </div>

              {/* Newsroom Role */}
              <div className="w-full md:w-5/12 text-gray-600 font-light leading-relaxed text-[16.5px]">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Newsroom Role
                </span>
                {row.newsroomRole}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
