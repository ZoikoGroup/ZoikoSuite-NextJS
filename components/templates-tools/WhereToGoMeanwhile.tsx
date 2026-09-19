"use client";

import React from "react";

const destinationCategories = [
  {
    title: "Evaluation material",
    links: ["Executive Resources", "Solution Brief", "Platform Tour"],
    status: "Published",
  },
  {
    title: "Governance and architecture",
    links: ["Governance Platform", "Platform Foundation", "Migration & Shadow Mode"],
    status: "Published",
  },
  {
    title: "Trust and diligence",
    links: ["Trust Center", "Security Overview", "Compliance Overview", "Accessibility"],
    status: "Published",
  },
  {
    title: "Challenge and industry routes",
    links: ["Solve Critical Challenges", "All Industries", "Industry Solutions"],
    status: "Published",
  },
];

export default function WhereToGoMeanwhile() {
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
                Where to go meanwhile
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Published destinations that<br className="hidden md:block" />
              exist today
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed max-w-xl">
              With no utilities in the catalog, the useful thing this page can do is
              route you to material that is actually published.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-stretch">
          {/* Main 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
            {destinationCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-4 font-mono">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {category.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-sm text-[#111827] hover:text-[#C9B07A] transition-colors leading-relaxed block py-1">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-200 text-green-700 text-[10px] font-semibold uppercase tracking-wider font-mono rounded">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    {category.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right 2 Stacked Boxes */}
          <div className="flex flex-col gap-6 lg:w-[320px] shrink-0">
            {/* Registry empty box */}
            <div className="bg-[#F7F5F0] rounded-2xl border border-gray-200 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-4 font-mono">
                  Templates & tools
                </h3>
                <h4 className="text-xl font-bold text-[#111827] mb-2 leading-tight">
                  Registry empty
                </h4>
                <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                  No approved utility records exist. Nothing is
                  substituted — no sample spreadsheets, no
                  placeholder calculators, no representative file
                  names.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-orange-50 border border-orange-200 text-[#B45309] text-[10px] font-semibold uppercase tracking-wider font-mono rounded">
                  <span className="w-1.5 h-1.5 bg-[#B45309] rounded-full"></span>
                  0 published
                </span>
              </div>
            </div>

            {/* Content boundary box */}
            <div className="bg-[#FFF8F1] rounded-2xl border border-[#FDBA74] p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#92400E] mb-4 font-mono">
                  Content boundary
                </h3>
                <p className="text-[#92400E] text-sm leading-relaxed mb-6">
                  Utilities published here support your own planning
                  and decision-making. They do not provide legal,
                  tax, accounting, audit or other regulated
                  professional advice, and no output constitutes a
                  recommendation.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-[#FDBA74] text-[#92400E] text-[10px] font-semibold uppercase tracking-wider font-mono rounded">
                  <span className="w-1.5 h-1.5 bg-[#92400E] rounded-full"></span>
                  Applies to all utilities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
