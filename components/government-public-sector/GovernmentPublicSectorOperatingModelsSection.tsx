"use client";

import React from "react";

const models = [
  {
    title: "Federal / national",
    description:
      "Authority derives from statute and agency delegation. Oversight and evidence expectations are heaviest.",
    footer: "Agency determines authorization scope; never inferred here.",
  },
  {
    title: "State / provincial",
    description:
      "Statewide programs with delegated administration. Fund and program context drives approval routing.",
    footer: "No jurisdictional legal conclusion offered.",
  },
  {
    title: "Local / municipal",
    description:
      "Council or board delegation with lean administrative teams and broad functional scope per person.",
    footer: "Segregation of duties often the hardest constraint.",
  },
  {
    title: "Public authority / arms-length body",
    description:
      "Independent governance with a sponsoring department. Dual accountability lines must both be explicit.",
    footer: "Authority source recorded, not assumed.",
  },
];

export default function GovernmentPublicSectorOperatingModelsSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                PUBLIC-SECTOR OPERATING MODELS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Four models, one governance model
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Authority derivation and oversight expectations differ. The
              control model does not.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-[#2A6386] border-l-[4px] border-l-[#2A6386] shadow-sm flex flex-col"
            >
              <div>
                <h3 className="text-[14px] font-bold text-[#08222F] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-2">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-3">
                <p className="text-[11px] font-mono tracking-wider font-semibold text-[#8C4A4A] leading-relaxed">
                  {item.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
