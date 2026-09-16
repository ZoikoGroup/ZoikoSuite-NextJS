"use client";

import React from "react";

const archetypes = [
  {
    title: "Discrete manufacturing",
    description:
      "Assembly and component production. Supplier dependency and engineering change dominate the business layer.",
  },
  {
    title: "Process manufacturing",
    description:
      "Continuous or batch production. Environmental obligations and specification control dominate.",
  },
  {
    title: "Contract manufacturing",
    description:
      "Production for third parties. Customer contract obligations and delegated authority dominate.",
  },
  {
    title: "Highly regulated production",
    description:
      "Sector obligations shape the operating model. Evidence and review states carry heavier weight.",
  },
  {
    title: "Distributed multi-plant group",
    description:
      "Many sites across jurisdictions. Local variance and group baseline must coexist explicitly.",
  },
  {
    title: "Outsourced or asset-light",
    description:
      "Production largely external. Third-party and contract governance carry most of the operating risk.",
  },
];

export default function ManufacturingOperatingModelsSection() {
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
                MANUFACTURING OPERATING MODELS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xl font-bold tracking-tight leading-[1.1]">
              Six archetypes, one governance model
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              The governance layer does not assume a single production strategy.
              What changes is scope and authority distribution, not the control
              model.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {archetypes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[13.5px] font-bold text-[#08222F] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
