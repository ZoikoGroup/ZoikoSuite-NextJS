"use client";

import React from "react";

const sources = [
  {
    title: "ERP / finance",
    badge: "CONNECTED",
    badgeBg: "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]",
    ownerLine: "Source owner: finance • observed 14:05",
    footerBadge: "DERIVED",
    footerBg: "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]",
    borderClass: "border-gray-200",
    bg:"bg-white"
  },
  {
    title: "HR / workforce",
    badge: "CONNECTED",
    badgeBg: "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]",
    ownerLine: "Source owner: people ops • observed 12:10",
    footerBadge: "DERIVED",
    footerBg: "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]",
    borderClass: "border-gray-200",
    bg:"bg-white"
  },
  {
    title: "Supply chain",
    badge: "CONNECTED",
    badgeBg: "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]",
    ownerLine: "Source owner: supply chain • observed 13:40",
    footerBadge: "DERIVED",
    footerBg: "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]",
    borderClass: "border-gray-200",
    bg:"bg-white"
  },
  {
    title: "Contract repository",
    badge: "SOURCE UNAVAILABLE",
    badgeBg: "bg-[#FAF0F0] text-[#8A3B3B] border-[#8A3B3B]",
    ownerLine: "Source owner: legal ops • last valid 15:48 previous day",
    footerBadge: "DERIVED",
    footerBg: "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]",
    borderClass: "border-gray-200",
    bg:"bg-white"
  },
  {
    title: "Credentialing system",
    badge: "LIMITED",
    badgeBg: "bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]",
    ownerLine: "Source owner: medical staff office • metadata only",
    footerBadge: "REFERENCE ONLY",
    footerBg: "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]",
    borderClass: "border-gray-200",
    bg:"bg-white"
  },
  {
    title: "Identity",
    badge: "CONNECTED",
    badgeBg: "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]",
    ownerLine: "Source owner: IT • observed 14:06",
    footerBadge: "DERIVED",
    footerBg: "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]",
    borderClass: "border-gray-200",
    bg:"bg-white"
  },
  {
    title: "Facility / asset register",
    badge: "REQUIRES SETUP",
    badgeBg: "bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]",
    ownerLine: "Source owner: facilities • not yet observed",
    footerBadge: "REFERENCE ONLY",
    footerBg: "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]",
    borderClass: "border-gray-200",
    bg:"bg-white"
  },
  {
    title: "EHR / EMR",
    badge: "NO CONNECTION",
    badgeBg: "bg-[#FAF0F0] text-[#8A3B3B] border-[#8A3B3B]",
    ownerLine: "Source owner: clinical systems • legal medical record",
    footerBadge: "NO INTEGRATION",
    footerBg: "bg-[#EEF2F5] text-[#6B2626] border-[#DFA9A9]",
    borderClass: "border-[#8A3B3B]",
    bg:"bg-[#FCF6F6]"
  },
  {
    title: "Clinical & ancillary systems",
    badge: "NO CONNECTION",
    badgeBg: "bg-[#FAF0F0] text-[#8A3B3B] border-[#8A3B3B]",
    ownerLine: "Pharmacy, laboratory, radiology, PACS, devices",
    footerBadge: "NO INTEGRATION",
    footerBg: "bg-[#EEF2F5] text-[#6B2626] border-[#DFA9A9]",
    borderClass: "border-[#8A3B3B]",
    bg:"bg-[#FCF6F6]"
  },
  {
    title: "Revenue cycle / claims",
    badge: "NO CONNECTION",
    badgeBg: "bg-[#FAF0F0] text-[#8A3B3B] border-[#8A3B3B]",
    ownerLine: "Source owner: revenue cycle",
    footerBadge: "NO INTEGRATION",
    footerBg: "bg-[#EEF2F5] text-[#6B2626] border-[#DFA9A9]",
    borderClass: "border-[#8A3B3B]",
    bg:"bg-[#FCF6F6]"
  },
  {
    title: "Policy, decision & evidence record",
    badge: "CONNECTED",
    badgeBg: "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]",
    ownerLine: "Source owner: ZolloSuite • current",
    footerBadge: "AUTHORITATIVE",
    footerBg: "bg-[#0F476A] text-white border-[#0F476A]",
    borderClass: "border-[#0F476A]",
    bg:"bg-[white]"
  },
];

export default function SourceOwnershipSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans">
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
                INTEGRATION AND COEXISTENCE WITH HEALTHCARE SYSTEMS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Source ownership, stated per system
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Metadata and reference-only integration are preferred wherever the
              workflow allows it.
            </p>
          </div>
        </div>

        {/* Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sources.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-xl p-5 border ${item.borderClass} shadow-sm flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[14px] font-bold text-[#08222F]">
                    {item.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeBg}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-[12px] text-gray-600 mb-4 font-mono">
                  {item.ownerLine}
                </p>
              </div>

              <div>
                <span
                  className={`inline-block text-[10px] font-mono font-bold w-full px-2 py-1 rounded border ${item.footerBg}`}
                >
                  {item.footerBadge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
