import React from "react";

interface HelpItem {
  title: string;
  category: string;
}

const helpItemsData: HelpItem[] = [
  {
    title: "Resolving delayed evidence exports",
    category: "KNOWLEDGE BASE · EVIDENCE & AUDIT",
  },
  {
    title: "Fixing approval matrix conflicts",
    category: "KNOWLEDGE BASE · GOVERNANCE",
  },
  {
    title: "Resetting a policy review reminder",
    category: "DOCUMENTATION · GOVERNANCE",
  },
  {
    title: "Understanding permission-denied errors",
    category: "KNOWLEDGE BASE · IDENTITY & ACCESS",
  },
  {
    title: "Managing billing and subscription details",
    category: "ACCOUNT & BILLING",
  },
  {
    title: "Reporting a security concern",
    category: "SECURITY",
  },
] as const;

export default function PopularHelp() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            02 / POPULAR HELP
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-10">
          Popular help
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {helpItemsData.map((item, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="bg-white border border-[#DBE3E8] border-l-[3px] border-l-[#D0AA55] p-6 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all"
            >
              <div>
                <h3 className="text-[#111827] font-semibold text-[16px] leading-snug mb-3">
                  {item.title}
                </h3>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6B7280] block">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
