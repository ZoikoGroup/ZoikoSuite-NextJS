import React from "react";

export default function LatestNewsTimelineSection() {
  const newsItems = [
    {
      date: "19-09-2026",
      badge: "TRUST UPDATE",
      title: "Global Laws in Focus",
      description:
        "Track important legal developments, policy changes, and regulations shaping businesses and communities worldwide.",
      tags: ["Trust & Governance", "Enterprise"],
    },
    {
      date: "19-09-2026",
      badge: "COMPANY NEWS",
      title: "Law & Regulation Updates",
      description:
        "Stay current with key legal changes, regulatory decisions, and emerging compliance requirements.",
      tags: ["Company"],
    },
    {
      date: "19-09-2026",
      badge: "PARTNER ANNOUNCEMENT",
      title: "Legal Changes That Matter",
      description:
        "Explore major updates in laws and regulations affecting industries, organizations, and everyday life.",
      tags: ["Partners & Ecosystem"],
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-8">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LATEST NEWS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-3">
            Reverse chronological, by canonical published timestamp
          </h1>

          {/* Description (16.5px for lg devices) */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Pinned editorial importance never silently reorders historical
            dates.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#DCD6C8] mb-12"></div>

        {/* Timeline List */}
        <div className="w-full flex flex-col">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="w-full py-8 border-b border-[#DCD6C8] flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12"
            >
              {/* Date */}
              <div className="w-full md:w-2/12 text-gray-500 font-mono text-xs md:text-sm pt-1">
                {item.date}
              </div>

              {/* Content Block */}
              <div className="w-full md:w-10/12 flex flex-col items-start">
                {/* Badge Tag */}
                <span
                  style={{ borderRadius: "20px" }}
                  className="inline-flex items-center px-3 py-1 bg-[#E2DCB8]/50 text-[#816832] text-[11px] font-semibold tracking-wider uppercase mb-3"
                >
                  {item.badge}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-[#0b1329] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-light leading-relaxed text-[16.5px] mb-4">
                  {item.description}
                </p>

                {/* Sub-tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{ borderRadius: "6px" }}
                      className="px-2.5 py-1 bg-[#E5E0D5] text-gray-600 text-xs font-light border border-[#DCD6C8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
