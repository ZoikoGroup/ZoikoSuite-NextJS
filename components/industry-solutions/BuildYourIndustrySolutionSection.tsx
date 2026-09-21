"use client";

import React from "react";

interface InputItem {
  number: string;
  title: string;
  description: string;
  highlightText?: string;
  variant?: "default" | "gold";
}

const INPUT_ITEMS: InputItem[] = [
  {
    number: "01",
    title: "Industry and operating model",
    description:
      "Which of the nine sectors, or diversified. Sub-model where it changes the authority structure.",
    variant: "default",
  },
  {
    number: "02",
    title: "Entity and jurisdiction scope",
    description:
      "Approximate entity count, jurisdictions in scope, and which carry the least clarity today.",
    variant: "default",
  },
  {
    number: "03",
    title: "Priority challenges",
    description:
      "Up to three of the eight patterns, ordered by which recurs most in your operation.",
    variant: "default",
  },
  {
    number: "04",
    title: "Systems that must stay authoritative",
    description:
      "The specialist platforms that will not be replaced. This constrains the design more than anything else.",
    variant: "default",
  },
  {
    number: "05",
    title: "Known constraints",
    description:
      "Residency, deployment, security review, accessibility or procurement constraints.",
    highlightText: " Stated, not assumed away.",
    variant: "gold",
  },
  {
    number: "06",
    title: "Output",
    description:
      "A scoped agenda naming the patterns, the boundaries that apply, and what would need validating.",
    highlightText: " No quote, timeline or ROI is generated.",
    variant: "gold",
  },
];

export default function BuildYourIndustrySolutionSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
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
                BUILD YOUR INDUSTRY SOLUTION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Six inputs, no generated commitment
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed w-full">
              The configuration below produces a scoped conversation agenda —
              not a quote, a timeline, a capability commitment or an ROI
              figure.
            </p>
          </div>
        </div>

        {/* Rows List */}
        <div className="flex flex-col gap-4">
          {INPUT_ITEMS.map((item, index) => {
            const isGold = item.variant === "gold";

            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 shadow-sm border border-[#DBE3E8] flex flex-col sm:flex-row sm:items-cente gap-4 transition-all ${
                  isGold ? "border-l-4 border-l-[#C59B3F]" : ""
                }`}
              >
                {/* Left: Number and Title */}
                <div className="flex items-center gap-4 sm:w-1/4 shrink-0">
                  <span className="w-8 h-8 rounded bg-[#0F476A] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {item.number}
                  </span>
                  <h3 className="text-sm font-bold text-[#08222F]">
                    {item.title}
                  </h3>
                </div>

                {/* Right: Description */}
                <div className="sm:w-3/4">
                  <p className="text-xs lg:text-[13px] text-gray-600 leading-relaxed">
                    {item.description}
                    {item.highlightText && (
                      <span className="font-semibold text-[#8A671F]">
                        {item.highlightText}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
