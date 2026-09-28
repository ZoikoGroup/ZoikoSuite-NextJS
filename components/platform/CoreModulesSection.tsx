"use client";

import React from "react";

interface CoreModuleItem {
  category: string;
  subCategory: string;
  description: string;
}

const coreModules: CoreModuleItem[] = [
  {
    category: "CATEGORY",
    subCategory: "Registry-driven",
    description:
      "One-line, outcome-focused purpose supplied by the approved module registry at runtime.",
  },
  {
    category: "CATEGORY",
    subCategory: "Registry-driven",
    description:
      "One-line, outcome-focused purpose supplied by the approved module registry at runtime.",
  },
  {
    category: "CATEGORY",
    subCategory: "Registry-driven",
    description:
      "One-line, outcome-focused purpose supplied by the approved module registry at runtime.",
  },
];

export default function CoreModulesSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#C59B3F" }}
            ></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#C59B3F" }}
            >
              CORE MODULES
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            Add capability without losing the platform context.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Core Modules extend ZoikoSuite with focused capabilities while using
            the shared platform foundation, governance patterns, evidence, and
            enterprise context available to that deployment.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreModules.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] border-dashed rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F]"
            >
              <div>
                <div className="text-xs font-mono font-bold tracking-wider mb-3">
                  <span className="text-[#08222F]">{item.category}</span>
                  <span className="text-gray-400 font-normal">
                    {" "}
                    · {item.subCategory}
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-mono">
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
