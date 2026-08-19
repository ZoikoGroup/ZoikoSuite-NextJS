"use client";

import React from "react";
import { motion } from "framer-motion";

interface GovernanceCardProps {
  category: string;
  links?: { label: string; badge?: string }[];
  description?: string;
  tag: string;
  tagType?: "green" | "gray" | "yellow" | "highlight";
  isHighlighted?: boolean;
}

const cardsData: GovernanceCardProps[] = [
  {
    category: "Current capability",
    links: [
      { label: "Platform Overview" },
      { label: "Release notes" },
      { label: "Documentation" },
      { label: "System status" },
    ],
    tag: "• AVAILABLE NOW",
    tagType: "green",
  },
  {
    category: "Security",
    links: [
      { label: "Security overview" },
      { label: "Security disclosure route" },
      { label: "Incident response" },
      { label: "Business continuity" },
    ],
    tag: "• ARCHITECTED TO SUPPORT",
    tagType: "gray",
  },
  {
    category: "Compliance and privacy",
    links: [
      { label: "Compliance overview" },
      { label: "Data Processing Agreement", badge: "PDF · new tab" },
      { label: "Subprocessors" },
      { label: "Retention" },
      { label: "Responsible AI" },
      { label: "Accessibility" },
    ],
    tag: "• READINESS — NOT CERTIFIED",
    tagType: "yellow",
  },
  {
    category: "Architecture",
    links: [
      { label: "Technical direction" },
      { label: "API documentation" },
      { label: "Integration guide" },
      { label: "Migration guide" },
    ],
    tag: "• AVAILABLE",
    tagType: "green",
  },
  {
    category: "Roadmap governance",
    links: [
      { label: "Transparency principles" },
      { label: "Status definitions" },
      { label: "Governance lifecycle" },
      { label: "Readiness gates" },
      { label: "Change history" },
    ],
    tag: "• PUBLISHED ON THIS PAGE",
    tagType: "green",
  },
  {
    category: "Contractual boundary",
    description:
      "Your applicable agreement, order form, and approved documentation govern what your organization is entitled to. Nothing on this page modifies them, and no ZoikoSuite representative can commit a roadmap item outside that process.",
    tag: "• APPLIES TO THIS ENTIRE PAGE",
    tagType: "highlight",
    isHighlighted: true,
  },
];

export default function GovernanceEntitlementSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                TRUST, PROCUREMENT, AND FORWARD-LOOKING STATEMENT
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              What governs your entitlement &mdash; and what does not
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Roadmap content is not a contractual document. Current
              availability and commitments are governed by approved
              documentation and your agreement.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[300px] border shadow-xs ${
                card.isHighlighted
                  ? "bg-[#F6EDD9] border-[#E8DCB8]"
                  : "bg-white border-[#E2E8F0]"
              }`}
            >
              <div className="flex flex-col space-y-4">
                {/* Category Header */}
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#c5a059] uppercase block">
                  {card.category}
                </span>

                {/* Content: Links or Text */}
                {card.links ? (
                  <ul className="space-y-2.5">
                    {card.links.map((link, lIdx) => (
                      <li key={lIdx} className="flex items-center gap-2">
                        <a
                          href="#"
                          className="text-xs sm:text-sm text-[#334155] hover:text-[#0F172A] font-medium leading-tight transition-colors"
                        >
                          {link.label}
                        </a>
                        {link.badge && (
                          <span className="text-[9px] font-mono uppercase bg-[#F1F5F9] border border-[#CBD5E1] text-[#64748B] px-1.5 py-0.5 rounded">
                            {link.badge}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    {card.description}
                  </p>
                )}
              </div>

              {/* Bottom Status Tag */}
              <div className="pt-6">
                <span
                  className={`inline-block text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider px-3 py-1 rounded-full uppercase border ${
                    card.tagType === "green"
                      ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]"
                      : card.tagType === "yellow"
                        ? "bg-[#FEFCE8] border-[#FEF08A] text-[#854D0E]"
                        : card.tagType === "highlight"
                          ? "bg-[#EAE1CA]/60 border-[#D8CBAA] text-[#574828]"
                          : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569]"
                  }`}
                >
                  {card.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0F476A] hover:bg-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
          >
            Visit the Trust Center &rarr;
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full hover:bg-[#E2E8F0] border border-[#CBD5E1] text-[#334155] text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95"
          >
            Talk to a solutions architect
          </a>
        </div>
      </div>
    </section>
  );
}
