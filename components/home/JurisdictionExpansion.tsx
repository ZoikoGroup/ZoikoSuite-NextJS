"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const rowsData = [
  {
    level: "L1",
    title: "Legal entity",
    description:
      "Parent, subsidiary, branch, reporting hierarchy, delegated authority, fiscal calendar.",
    linkText: "Interactive entity tree",
  },
  {
    level: "L2",
    title: "Jurisdiction",
    description:
      "Country, state or province, tax, labor, filing, and regulatory boundaries.",
    linkText: "Rule-context chips",
  },
  {
    level: "L3",
    title: "Effective date",
    description:
      "Historical, current, and future-dated policy and rule states.",
    linkText: "Timeline control",
  },
  {
    level: "L4",
    title: "Residency",
    description:
      "Storage, processing, backup, replication, and sovereign deployment constraints.",
    linkText: "Residency status panel",
  },
  {
    level: "L5",
    title: "Coverage status",
    description:
      "Available · Limited · Partner-Supported · Planned · Not Available.",
    linkText: "Mandatory status labels",
  },
  {
    level: "L6",
    title: "Rule provenance",
    description: "Source, version, effective date, and review status.",
    linkText: "Expandable evidence drawer",
  },
] as const;

const cardsData = [
  {
    title: "United States",
    description:
      "Federal and state context; capability status published by workflow.",
    status: "AVAILABLE",
    statusStyle: "bg-[#EAF5F0] border-[#1E7A5A] text-[#1E7A5A]",
  },
  {
    title: "United Kingdom",
    description:
      "HMRC, payroll, employment, and filing context; status by workflow.",
    status: "AVAILABLE",
    statusStyle: "bg-[#EAF5F0] border-[#1E7A5A] text-[#1E7A5A]",
  },
  {
    title: "European Union",
    description:
      "Member-state requirements, GDPR, VAT and e-invoicing, residency context.",
    status: "LIMITED",
    statusStyle: "bg-[#FBF2DF] border-[#9C6B12] text-[#9C6B12]",
  },
  {
    title: "India",
    description:
      "GST, payroll and social obligations, corporate filings, withholding context.",
    status: "PARTNER-SUPPORTED",
    statusStyle: "bg-[#EAF1F9] border-[#2F6FB0] text-[#2F6FB0]",
  },
  {
    title: "APAC",
    description:
      "Presented through the same status methodology — never a blanket claim. narrative.",
    status: "PLANNED",
    statusStyle: "bg-[#EFF2F4] border-[#5D6B75] text-[#5D6B75]",
  },
  {
    title: "Middle East & Africa",
    description:
      "Reviewed by workflow and filing authority before any status is published.",
    status: "PLANNED",
    statusStyle: "bg-[#EFF2F4] border-[#5D6B75] text-[#5D6B75]",
  },
  {
    title: "Canada & Caribbean",
    description:
      "Entity and residency modeling available; workflow coverage under review.",
    status: "LIMITED",
    statusStyle: "bg-[#FBF2DF] border-[#9C6B12] text-[#9C6B12]",
  },
  {
    title: "Latin America",
    description:
      "Not published as covered until validated against the coverage methodology.",
    status: "NOT AVAILABLE",
    statusStyle: "bg-[#F9EDED] border-[#8A3B3B] text-[#8A3B3B]",
  },
] as const;

export default function JurisdictionExpansion() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-3xl">
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                Jurisdiction · Entity · Residency
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Operate locally. Expand across borders. Keep the rules attached to
              the action.
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[440px]">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              Coverage is published as a status, never as a blanket claim. Every
              jurisdiction page states the date of last review and separates
              software capability from professional advice.
            </p>
          </div>
        </motion.div>

        {/* Rows Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col border-t border-[#e2e8f0] mb-20"
        >
          {rowsData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 py-6 border-b border-[#e2e8f0] items-center gap-4 lg:gap-8 hover:bg-[#f8fafc]/60 transition-colors px-2"
            >
              <div className="lg:col-span-4 flex items-center gap-4">
                <span className="text-xs font-semibold tracking-wider text-[#c5a059]">
                  {row.level}
                </span>
                <span className="font-semibold text-[#0f172a] text-base">
                  {row.title}
                </span>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {row.description}
                </p>
              </div>

              <div className="lg:col-span-3 text-left lg:text-right">
                <a
                  href="#"
                  className="text-xs font-medium text-[#0f476a] hover:underline"
                >
                  {row.linkText}
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#DBE3E8] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-lg font-bold text-[#0f172a] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-[5px] border text-[10px] font-semibold uppercase tracking-[1px] ${card.statusStyle}`}
                >
                  {card.status}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#124d73] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
          >
            Check jurisdiction coverage
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
