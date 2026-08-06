"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  AlertCircle,
  Settings,
  ShieldCheck,
} from "lucide-react";

interface DeploymentOption {
  optionNumber: string;
  title: string;
  description: string;
  status: string;
  statusType: "available" | "configuration" | "market" | "review" | "verified";
}

const deploymentOptions: DeploymentOption[] = [
  {
    optionNumber: "Option 01",
    title: "Regional hosting",
    description:
      "Processing and storage in a selected region with residency-aware routing.",
    status: "Available",
    statusType: "available",
  },
  {
    optionNumber: "Option 02",
    title: "Dedicated private cloud",
    description: "Isolated tenancy with enhanced operational controls.",
    status: "Available",
    statusType: "available",
  },
  {
    optionNumber: "Option 03",
    title: "Enterprise single-tenant",
    description: "Dedicated workload and data infrastructure per customer.",
    status: "Configuration required",
    statusType: "configuration",
  },
  {
    optionNumber: "Option 04",
    title: "Sovereign deployment",
    description:
      "Region-restricted operations, administration, and support model.",
    status: "Market dependent",
    statusType: "market",
  },
  {
    optionNumber: "Option 05",
    title: "On-premise deployment",
    description: "Customer-operated infrastructure within their own boundary.",
    status: "Review required",
    statusType: "review",
  },
  {
    optionNumber: "Option 06",
    title: "Customer-controlled keys",
    description:
      "Platform-managed keys, BYOK, HYOK, or customer-controlled keys.",
    status: "Verified per deployment",
    statusType: "verified",
  },
];

export default function DeploymentSovereignty() {
  const getStatusBadge = (
    status: string,
    type: DeploymentOption["statusType"],
  ) => {
    let styles = "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (type === "configuration" || type === "verified") {
      styles = "bg-amber-50 text-amber-800 border-amber-200";
    } else if (type === "market" || type === "review") {
      styles = "bg-blue-50 text-blue-700 border-blue-200";
    }

    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold border ${styles} uppercase tracking-wider`}
      >
        {type === "available" && <Check className="w-3 h-3" />}
        {type === "configuration" && <Settings className="w-3 h-3" />}
        {type === "verified" && <ShieldCheck className="w-3 h-3" />}
        {(type === "market" || type === "review") && (
          <AlertCircle className="w-3 h-3" />
        )}
        {status}
      </span>
    );
  };

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Deployment & Data Sovereignty
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Choose a deployment model aligned with organizational and
                regional requirements
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Unavailable options stay visible with an explanation rather than
                disappearing. No option is recommended without requirements you
                provide.
              </p>
            </motion.div>
          </div>

          {/* Grid of 6 Deployment Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {deploymentOptions.map((opt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * idx,
                  ease: "easeOut",
                }}
                className="bg-white border border-[#DBE3E8] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                    {opt.optionNumber}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f172a] tracking-tight mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed mb-6">
                    {opt.description}
                  </p>
                </div>
                <div>{getStatusBadge(opt.status, opt.statusType)}</div>
              </motion.div>
            ))}
          </div>

          {/* Deployment Architecture Showcase Image (No Border Added) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="relative w-full rounded-xl mb-10"
          >
            <img
              src="/platform-overview/8.png"
              alt="Deployment architecture dashboard demonstrating status evaluations across regional controls and security models"
              className="w-full h-auto object-cover block rounded-xl"
            />
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-4 w-full"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-md shadow-[#0F476A]/20"
            >
              View deployment options
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-[#DBE3E8] text-[#0f172a] font-semibold text-sm hover:bg-[#f8fafc] transition-all duration-200 shadow-xs"
            >
              Talk to a solutions architect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
