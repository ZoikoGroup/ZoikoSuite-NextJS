"use client"
import React, { useState } from "react";

export default function WhoThisPolicyAppliesToSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    "Website visitor",
    "Customer account user",
    "Customer-controlled data subject",
    "Prospect / business contact",
    "Applicant",
    "Partner / supplier",
  ] as const;

  const rows = [
    {
      context: "Website visitors",
      examples:
        "Public site browsing, forms, resource downloads, demo requests.",
      requiredDistinction: "Website and marketing technology practices.",
    },
    {
      context: "Customer account users",
      examples: "Named users with ZoikoSuite accounts.",
      requiredDistinction:
        "Account, authentication, support, usage, and administration data.",
    },
    {
      context: "Customer-controlled data subjects",
      examples: "People whose data a customer places in ZoikoSuite.",
      requiredDistinction:
        "Controller/processor relationship is explicit; rights are routed appropriately.",
    },
    {
      context: "Applicants",
      examples: "Careers and recruiting workflows.",
      requiredDistinction: "Linked to applicant-specific notice if separate.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHO THIS POLICY APPLIES TO
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            I am a...
          </h1>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{ borderRadius: "9999px" }}
                className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#0b1329] text-white shadow-sm"
                    : "bg-white text-[#0b1329] border border-[#DCD6C8] hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-3">Context</div>
            <div className="md:col-span-5">Examples</div>
            <div className="md:col-span-4">Required Distinction</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
            >
              {/* Context Column */}
              <div className="md:col-span-3 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.context}
              </div>

              {/* Examples Column */}
              <div className="md:col-span-5 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.examples}
              </div>

              {/* Required Distinction Column */}
              <div className="md:col-span-4 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.requiredDistinction}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
