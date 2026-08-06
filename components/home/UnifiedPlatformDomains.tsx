"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  FileText,
  Shield,
  FileCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const domainsData = [
  {
    icon: BarChart3,
    title: "Finance & Tax",
    description:
      "Continuous financial truth with jurisdiction-aware treatment.",
    tags: ["Ledger", "AP / AR", "Close & consolidation"],
    cardBg: "bg-white",
    cardBorder: "border-[#DBE3E8]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#64748b]",
    iconColor: "text-[#0f476a]",
    tagBg: "bg-[#E8EFF4]",
    tagBorder: "border-[#CFDEE7]",
    tagRadius: "rounded-[5px]",
    tagText: "text-[#0f476a]",
    linkColor: "text-[#0F476A]",
  },
  {
    icon: Users,
    title: "Workforce & Payroll",
    description:
      "Governed employment and pay across local and cross-border operations.",
    tags: ["Payroll", "Benefits & leave", "Workforce compliance"],
    cardBg: "bg-[#F6EDD9]",
    cardBorder: "border-[#E8D6AC]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#475569]",
    iconColor: "text-[#0f476a]",
    tagBg: "bg-[#E8EFF4]",
    tagBorder: "border-[#CFDEE7]",
    tagRadius: "rounded-[5px]",
    tagText: "text-[#0f476a]",
    linkColor: "text-[#0F476A]",
  },
  {
    icon: FileText,
    title: "Legal & Commercial",
    description:
      "Move contracts, obligations, approvals, and spend through controlled execution.",
    tags: ["Contract lifecycle", "Clauses", "Vendor diligence"],
    cardBg: "bg-[#0F476A]",
    cardBorder: "border-[#0F476A]",
    textColor: "text-white",
    descColor: "text-[#cbd5e1]",
    iconColor: "text-[#D0AA55]",
    tagBg: "bg-[#E8EFF4]",
    tagBorder: "border-[#CFDEE7]",
    tagRadius: "rounded-[5px]",
    tagText: "text-[#0f476a]",
    linkColor: "text-[#D0AA55]",
  },
  {
    icon: FileCheck,
    title: "Compliance & Obligations",
    description:
      "Know what is due, why it is due, who owns it, and what evidence exists.",
    tags: ["Obligations registry", "Filing tracker", "Escalations"],
    cardBg: "bg-white",
    cardBorder: "border-[#DBE3E8]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#64748b]",
    iconColor: "text-[#0f476a]",
    tagBg: "bg-[#E8EFF4]",
    tagBorder: "border-[#CFDEE7]",
    tagRadius: "rounded-[5px]",
    tagText: "text-[#0f476a]",
    linkColor: "text-[#0F476A]",
  },
  {
    icon: Shield,
    title: "Evidence & Audit",
    description:
      "Retrieve the complete action, decision, rule, document, and approval lineage.",
    tags: ["Audit events", "Document vault", "Evidence manifests"],
    cardBg: "bg-white",
    cardBorder: "border-[#DBE3E8]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#64748b]",
    iconColor: "text-[#0f476a]",
    tagBg: "bg-[#E8EFF4]",
    tagBorder: "border-[#CFDEE7]",
    tagRadius: "rounded-[5px]",
    tagText: "text-[#0f476a]",
    linkColor: "text-[#0F476A]",
  },
  {
    icon: TrendingUp,
    title: "Intelligence & Reporting",
    description:
      "Forecast exposure and prioritize risk without changing source truth.",
    tags: ["Anomalies", "Forecasting", "Executive reporting"],
    cardBg: "bg-white",
    cardBorder: "border-[#DBE3E8]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#64748b]",
    iconColor: "text-[#0f476a]",
    tagBg: "bg-[#E8EFF4]",
    tagBorder: "border-[#CFDEE7]",
    tagRadius: "rounded-[5px]",
    tagText: "text-[#0f476a]",
    linkColor: "text-[#0F476A]",
  },
] as const;

export default function UnifiedPlatformDomains() {
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
          <div className="max-w-[560px]">
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                Unified Platform Domains
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Modular capability, unified control
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[420px]">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              Six domains, one governance model. Outcomes first — service detail
              opens only when you ask for it.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {domainsData.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <div
                key={index}
                className={`${domain.cardBg} border ${domain.cardBorder} rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200`}
              >
                <div>
                  {/* Icon */}
                  <div className={`${domain.iconColor} mb-6`}>
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold tracking-tight mb-3 ${domain.textColor}`}
                  >
                    {domain.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${domain.descColor}`}
                  >
                    {domain.description}
                  </p>

                  {/* Tags with max-w-[75%]` for the third card / element container if needed */}
                  <div className="flex flex-wrap gap-2 mb-8 max-w-[75%]">
                    {domain.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`${domain.tagBg} border ${domain.tagBorder} ${domain.tagRadius} px-2.5 py-1 text-[11px] tracking-[1px] font-medium ${domain.tagText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Link */}
                <div>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${domain.linkColor}`}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
