"use client";

import React from "react";

const accountabilities = [
  {
    role: "Finance",
    question:
      "Was the commitment within delegated authority, and can the basis be reconstructed?",
  },
  {
    role: "Operations",
    question:
      "Which facility owns the action, and where is it blocked right now?",
  },
  {
    role: "Compliance",
    question:
      "What is due, who owns it, and what evidence supports completion?",
  },
  {
    role: "Privacy",
    question:
      "What data class, what purpose, what access scope, and what review state?",
  },
  {
    role: "Security",
    question:
      "Which controls are architecture requirements, implemented, or deployment-dependent?",
  },
  {
    role: "Architecture",
    question:
      "Which system owns source truth, and what is written back — and what is not?",
  },
  {
    role: "Workforce",
    question:
      "Which administrative obligations are tracked, and where does the clinical boundary sit?",
  },
  {
    role: "Audit",
    question:
      "Can we prove the control operated, without reconstructing it retrospectively?",
  },
];

const navigationCards = [
  {
    eyebrow: "CFO / FINANCE",
    title: "Published solution page",
    linkText: "Go to CFOs",
  },
  {
    eyebrow: "GENERAL COUNSEL / LEGAL",
    title: "Published solution page",
    linkText: "Go to General Counsel",
  },
  {
    eyebrow: "LEADERSHIP TEAMS",
    title: "Published solution page",
    linkText: "Go to Leadership Teams",
  },
];

export default function ExecutiveAlignmentSection() {
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
                EXECUTIVE ALIGNMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-[560px] font-bold tracking-tight leading-[1.1]">
              Eight accountabilities, one governed record
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Each role asks a different question of the same decision trail.
            </p>
          </div>
        </div>

        {/* 8 Accountabilities Grid (4x2 or responsive columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {accountabilities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[14px] font-bold text-[#08222F] mb-2">
                  {item.role}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  {item.question}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation / Role Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {navigationCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#0F476A] uppercase block mb-1">
                  {item.eyebrow}
                </span>
                <p className="text-[14px] text-gray-600">{item.title}</p>
              </div>

              <div>
                <div className="border-t border-dashed border-gray-200 pt-4">
                  <a
                    href="#link"
                    className="text-[13px] font-bold text-[#0F476A] hover:text-[#C59B3F] transition-colors inline-flex items-center gap-1.5"
                  >
                    {item.linkText} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
