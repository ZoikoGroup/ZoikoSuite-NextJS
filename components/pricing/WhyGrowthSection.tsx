"use client";

import React from "react";
import Image from "next/image";

const growthFeatures = [
  {
    tag: "CONTROL",
    title: "Standardize approvals and governance.",
    description:
      "Advanced close, approval workflows, custom roles and control mapping keep every entity working the same way.",
    imageSrc: "/pricing-page/pp4.png",
    imageAlt: "Standardize approvals and governance",
  },
  {
    tag: "VISIBILITY",
    title: "See across entities, and ahead.",
    description:
      "Multi-entity reporting, budgets and forecasting give leaders one consolidated view of the business.",
    imageSrc: "/pricing-page/pp5.png",
    imageAlt: "See across entities, and ahead",
  },
  {
    tag: "AUTOMATION",
    title: "Let workflows do the repeat work.",
    description:
      "A workflow builder, standard integrations, and API and AI allowances remove manual reconciliation.",
    imageSrc: "/pricing-page/pp6.png",
    imageAlt: "Let workflows do the repeat work",
  },
];

export default function WhyGrowthSection() {
  return (
    <section className="relative w-full bg-[#FBF9F4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto text-left">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-4 h-[2px] bg-[#CDA85B]" />
          <span className="text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
            WHY GROWTH
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#08222F] mb-2 leading-tight">
          Why Growth is the plan most growing teams choose.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-10 sm:mb-12 max-w-2xl">
          Growth adds $150 a month over Starter, and this is what that step buys.
        </p>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {growthFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl border border-[#E5E0D8] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10.5px] font-mono font-bold tracking-[0.15em] text-[#CDA85B] uppercase block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#08222F] leading-snug mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
