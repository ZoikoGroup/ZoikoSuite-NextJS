"use client";

import React from "react";

interface EventItem {
  event: string;
  isRed?: boolean;
  automaticLabel: string;
  automaticDesc: string;
  humanLabel: string;
  humanDesc: string;
}

const EVENT_ITEMS: EventItem[] = [
  {
    event: "Quote right expires",
    automaticLabel: "AUTOMATIC",
    automaticDesc: "Quote suppressed everywhere it appears, by quote ID.",
    humanLabel: "HUMAN FOLLOW-UP",
    humanDesc: "Story owner reviews replacement or removal.",
  },
  {
    event: "Logo or media right expires",
    automaticLabel: "AUTOMATIC",
    automaticDesc:
      "Asset suppressed: an accessible neutral fallback preserves layout.",
    humanLabel: "HUMAN FOLLOW-UP",
    humanDesc: "Reapprove or remove.",
  },
  {
    event: "Metric permission withdrawn",
    automaticLabel: "AUTOMATIC",
    automaticDesc:
      "Metric and result suppressed; the narrative reflows around the gap.",
    humanLabel: "HUMAN FOLLOW-UP",
    humanDesc: "Revalidate the story's outcome copy.",
  },
  {
    event: "Full story withdrawn",
    isRed: true,
    automaticLabel: "AUTOMATIC",
    automaticDesc:
      "Hub, detail, featured, search, schema and social all suppressed; redirect or 410 per policy.",
    humanLabel: "HUMAN FOLLOW-UP",
    humanDesc: "Confirm caches, syndication and internal archival.",
  },
  {
    event: "Customer correction",
    automaticLabel: "AUTOMATIC",
    automaticDesc: "Affected block paused if the correction is material.",
    humanLabel: "HUMAN FOLLOW-UP",
    humanDesc: "Source check, customer review, then republish.",
  },
  {
    event: "Evidence challenged",
    isRed: true,
    automaticLabel: "AUTOMATIC",
    automaticDesc:
      "Claim or metric fails closed — it comes down rather than carrying a caveat.",
    humanLabel: "HUMAN FOLLOW-UP",
    humanDesc: "Evidence owner investigates.",
  },
  {
    event: "Product reference stale",
    automaticLabel: "AUTOMATIC",
    automaticDesc: "Historical label applied, or the reference is suppressed.",
    humanLabel: "HUMAN FOLLOW-UP",
    humanDesc: "Product owner validates current authority.",
  },
  {
    event: "Re-identification risk rises",
    isRed: true,
    automaticLabel: "AUTOMATIC",
    automaticDesc:
      "Affected story paused where an anonymized customer could become identifiable.",
    humanLabel: "HUMAN FOLLOW-UP",
    humanDesc: "Privacy and legal re-review the granularity.",
  },
];

export default function RightsAndWithdrawalSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                RIGHTS AND WITHDRAWAL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Eight events, each with an automatic behaviour
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Customer control is operational. Suppression happens on the event,
              not after someone notices and files a request.
            </p>
          </div>
        </div>

        {/* Event Items List */}
        <div className="flex flex-col gap-3">
          {EVENT_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#DBE3E8] grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center"
            >
              {/* Event Name */}
              <div className="lg:col-span-3">
                <h3
                  className={`text-sm font-bold ${
                    item.isRed ? "text-[#8A3B3B]" : "text-[#0F172A]"
                  }`}
                >
                  {item.event}
                </h3>
              </div>

              {/* Automatic Behavior Column */}
              <div className="lg:col-span-5 flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#94A3B8]">
                  {item.automaticLabel}
                </span>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.automaticDesc}
                </p>
              </div>

              {/* Human Follow-up Column */}
              <div className="lg:col-span-4 flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#94A3B8]">
                  {item.humanLabel}
                </span>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.humanDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
