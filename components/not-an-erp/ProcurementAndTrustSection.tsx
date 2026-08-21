"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCard {
  title: string;
  items: { text: string; badge?: string }[];
  statusBadge: string;
  statusVariant?: "gray" | "warning" | "blue" | "green";
}

const diligenceCategories: CategoryCard[] = [
  {
    title: "Security",
    statusBadge: "ARCHITECTED TO SUPPORT",
    statusVariant: "gray",
    items: [
      { text: "Zero Trust" },
      { text: "Identity and access" },
      { text: "Encryption and key management" },
      { text: "Application / API security" },
      { text: "Incident response" },
      { text: "Business continuity" },
    ],
  },
  {
    title: "Compliance",
    statusBadge: "READINESS — NOT CERTIFIED",
    statusVariant: "warning",
    items: [
      { text: "Compliance overview" },
      { text: "SOC 2 readiness" },
      { text: "ISO 27001 alignment" },
      { text: "GDPR / CCPA controls" },
      { text: "Data Processing Agreement", badge: "PDF · new tab" },
      { text: "Subprocessors" },
      { text: "Retention" },
      { text: "Responsible AI" },
      { text: "Accessibility" },
    ],
  },
  {
    title: "Evidence and assurance",
    statusBadge: "DESIGNED TO ALIGN",
    statusVariant: "gray",
    items: [
      { text: "Evidence architecture" },
      { text: "Audit trails" },
      { text: "Policy decisions" },
      { text: "Manifests" },
      { text: "Internal controls" },
      { text: "Segregation" },
      { text: "Reporting" },
    ],
  },
  {
    title: "Data sovereignty",
    statusBadge: "MARKET / CONFIGURATION DEPENDENT",
    statusVariant: "blue",
    items: [
      { text: "Residency" },
      { text: "Regional hosting" },
      { text: "Private / single-tenant" },
      { text: "Sovereign / on-premise" },
      { text: "Key options" },
      { text: "Recovery" },
    ],
  },
  {
    title: "Architecture",
    statusBadge: "AVAILABLE",
    statusVariant: "green",
    items: [
      { text: "Architecture Library" },
      { text: "Integration guide" },
      { text: "Migration guide" },
      { text: "API documentation" },
      { text: "Deployment options" },
    ],
  },
  {
    title: "Customer operations",
    statusBadge: "AVAILABLE",
    statusVariant: "green",
    items: [
      { text: "Documentation" },
      { text: "System status" },
      { text: "Support" },
      { text: "Release notes" },
      { text: "Training" },
    ],
  },
];

export default function ProcurementAndTrustSection() {
  const getBadgeStyle = (variant?: string) => {
    switch (variant) {
      case "warning":
        return "bg-[#FDF6E2] text-[#8C6B2D] border border-[#F3E3B6]";
      case "blue":
        return "bg-[#EBF5FF] text-[#1D4ED8] border border-[#BFDBFE]";
      case "green":
        return "bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]";
      case "gray":
      default:
        return "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]";
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
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
                PROCUREMENT AND TRUST
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Diligence routes for the teams who will ask
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
              Every claim carries its status. Certification marks are absent
              until independently verified and approved.
            </p>
          </motion.div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diligenceCategories.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] flex flex-col justify-between space-y-6 shadow-xs"
            >
              <div className="space-y-4">
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#c5a059] uppercase block">
                  {card.title}
                </span>

                <ul className="space-y-2.5">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#334155] font-normal flex items-center justify-between group hover:text-[#0F172A] transition-colors cursor-pointer"
                    >
                      <span>{item.text}</span>
                      {item.badge && (
                        <span className="text-[10px] font-mono text-[#94A3B8] font-normal tracking-tight">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Badge at Bottom of Card */}
              <div className="pt-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase ${getBadgeStyle(
                    card.statusVariant,
                  )}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                  {card.statusBadge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] border border-[#0F476A] hover:bg-[#0c3955] hover:border-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
          >
            Visit the Trust Center
            <ArrowRight className="w-4 h-4 text-white" />
          </a>

          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] text-[#0F172A] text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
          >
            Talk to a solutions architect
          </a>
        </div>
      </div>
    </section>
  );
}
