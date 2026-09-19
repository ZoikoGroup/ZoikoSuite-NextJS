"use client";

import React from "react";

const contractItems = [
  {
    title: "Intended use",
    desc: "The task this asset supports, and just as importantly the situations it is not built for.",
    tag: "Required block",
  },
  {
    title: "Prerequisites",
    desc: "What you need before starting — inputs, access, roles involved, or prior work.",
    tag: "Required block",
  },
  {
    title: "Owner and currentness",
    desc: "Named owner, version or last-reviewed date, and review cadence.",
    tag: "Required block",
  },
  {
    title: "Access and format",
    desc: "Access state, execution mode, and the file record where a download exists.",
    tag: "Required block",
  },
  {
    title: "Methodology and limitations",
    desc: "For anything that calculates: assumptions, units, boundaries and what the output does not tell you.",
    tag: "Required where applicable",
  },
  {
    title: "Data handling",
    desc: "What happens to anything you enter — where it goes, whether it is retained, and who can see it.",
    tag: "Required for interactive",
  },
];

export default function AssetDetailContract() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full mb-12">
          {/* Text Content */}
          <div className="flex flex-col flex-1">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1.5px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-xs font-semibold tracking-widest uppercase font-mono">
                Asset detail contract
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              What a detail page must answer<br className="hidden md:block" />
              before you act
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed max-w-xl">
              Fit and prerequisites come before the action. A visitor should be
              able to decide the asset is wrong for them without downloading it.
            </p>
          </div>
        </div>

        {/* List of items */}
        <div className="w-full flex flex-col gap-3">
          {contractItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center bg-white border-l-4 border-l-[#08222F] border border-[#E5E7EB] rounded-r-lg p-5 gap-4 md:gap-8 hover:bg-gray-50 transition-colors"
            >
              <div className="md:w-1/4">
                <h3 className="text-sm font-bold text-[#111827] leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="md:w-1/2 flex-1">
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="md:w-auto shrink-0 flex justify-start md:justify-end">
                <span className="inline-block px-2 py-1 bg-green-50 border border-green-200 text-green-700 text-[10px] font-semibold uppercase tracking-wider font-mono rounded">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
