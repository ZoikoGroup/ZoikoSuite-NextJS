import React from "react";

interface SearchResultCard {
  category: string;
  title: string;
  description: string;
  metadata: string;
}

const searchResultsData: SearchResultCard[] = [
  {
    category: "KNOWLEDGE BASE",
    title: "Resolving delayed evidence exports",
    description:
      "Symptom, likely cause, and fix for slow manifest export processing.",
    metadata: "EVIDENCE & AUDIT · UPDATED SEP 3",
  },
  {
    category: "DOCUMENTATION",
    title: "Configuring approval matrices by policy class",
    description: "Step-by-step setup for a new policy class matrix.",
    metadata: "GOVERNANCE & POLICY · UPDATED SEP 8",
  },
] as const;

export default function SearchResults() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            04 / SEARCH RESULTS
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-2">
          Search results
        </h2>

        {/* Subtext info */}
        <p className="text-[#4B5563] text-sm md:text-base mb-10 max-w-2xl">
          Ranked by task relevance and source authority — never by commercial
          popularity.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {searchResultsData.map((item, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="bg-white border border-[#0F476A] border-t-4 border-t-[#0F476A] p-6 md:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all min-h-[190px]"
            >
              <div>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#A07A2E] block mb-2">
                  {item.category}
                </span>
                <h3 className="text-[#111827] font-semibold text-lg md:text-xl mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] text-sm md:text-base mb-6">
                  {item.description}
                </p>
              </div>

              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6B7280]">
                {item.metadata}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
