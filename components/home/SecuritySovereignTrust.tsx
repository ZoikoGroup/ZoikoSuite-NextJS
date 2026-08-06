"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const securityCards = [
  {
    title: "Zero trust",
    description:
      "Every human, service, workload, and action is authenticated and context-authorized.",
    tag: "ARCHITECTURE REQUIREMENT",
    tagStyle: "bg-[#EFF2F4] border-[#CFDEE7] text-[#5D6B75]",
  },
  {
    title: "Identity & segregation of duties",
    description:
      "Role, attribute, entity, delegation, and SoD controls operate together.",
    tag: "ARCHITECTURE REQUIREMENT",
    tagStyle: "bg-[#EFF2F4] border-[#CFDEE7] text-[#5D6B75]",
  },
  {
    title: "Encryption",
    description:
      "At rest and in transit, with field-level protection for restricted data classes.",
    tag: "IMPLEMENTATION STATUS STATED",
    tagStyle: "bg-[#FBF2DF] border-[#E8D6AC] text-[#9C6B12]",
  },
  {
    title: "Machine identity",
    description:
      "Short-lived workload identity and authenticated service-to-service trust.",
    tag: "ROADMAP · IMPLEMENTATION STATUS",
    tagStyle: "bg-[#FBF2DF] border-[#E8D6AC] text-[#9C6B12]",
  },
  {
    title: "Key custody",
    description:
      "Customer-controlled key options and sovereign trust tiers for qualifying deployments.",
    tag: "AVAILABILITY STATUS REQUIRED",
    tagStyle: "bg-[#EAF1F9] border-[#CFDEE7] text-[#2F6FB0]",
  },
  {
    title: "Residency",
    description:
      "Region-aware routing, storage, backup, and recovery controls.",
    tag: "BY DEPLOYMENT & JURISDICTION",
    tagStyle: "bg-[#EAF1F9] border-[#CFDEE7] text-[#2F6FB0]",
  },
  {
    title: "Supply chain",
    description:
      "Signed artifacts, vulnerability scanning, provenance, and SBOM generation.",
    tag: "ENGINEERING REQUIREMENT",
    tagStyle: "bg-[#EFF2F4] border-[#CFDEE7] text-[#5D6B75]",
  },
  {
    title: "Telemetry",
    description:
      "Security decisions and events linked to audit and evidence systems.",
    tag: "ARCHITECTURE REQUIREMENT",
    tagStyle: "bg-[#EFF2F4] border-[#CFDEE7] text-[#5D6B75]",
  },
] as const;

export default function SecuritySovereignTrust() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
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
                Security & Sovereign Trust
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Buyer-readable assurance, honestly labeled
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[460px]">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              Each control area carries its claim status: architecture
              requirement, implementation status, roadmap, or availability by
              deployment.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {securityCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#DBE3E8] rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-[5px] border text-[10px] font-semibold uppercase tracking-[1px] ${card.tagStyle}`}
                >
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#124d73] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
          >
            Review security & trust
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#DBE3E8] text-[#0F476A] font-semibold text-sm hover:bg-[#f8fafc] transition-all duration-200 shadow-sm"
          >
            Download the security architecture brief
          </a>
        </motion.div>
      </div>
    </section>
  );
}
