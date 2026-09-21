"use client";

import React from "react";

export default function CustomerStoriesExplanation() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white border-t-4 border-t-[#D0AA55] border border-[#D0AA55] rounded-2xl p-8 md:p-12 shadow-sm relative">
          <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight mb-4">
            What are ZoikoSuite Customer Stories?
          </h3>
          <p className="text-sm md:text-base text-[#16262F] leading-relaxed max-w-4xl">
            Customer Stories is governed customer evidence: accounts of how
            organizations use ZoikoSuite, published only where an approved
            source, evidence and rights record supports every public fact.
            Stories may be narrative and human, but each material outcome
            exposes its evidence class, measured period and limitations. A story
            describes one organization&apos;s experience under its own conditions; it
            does not establish a guaranteed or equivalent outcome for anyone
            else.
          </p>
        </div>
      </div>
    </section>
  );
}
