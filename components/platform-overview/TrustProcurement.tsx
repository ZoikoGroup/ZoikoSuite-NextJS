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

interface DiligenceCategory {
  title: string;
  items: string[];
  badge: {
    text: string;
    type:
      | "requirement"
      | "readiness"
      | "align"
      | "dependent"
      | "available"
      | "review";
  };
}

const diligenceCategories: DiligenceCategory[] = [
  {
    title: "Security architecture",
    items: [
      "Zero-Trust Architecture",
      "Identity and Access Management",
      "Encryption and Key Management",
      "Application and API Security",
      "Incident Response",
      "Business Continuity",
    ],
    badge: { text: "Architecture requirement", type: "requirement" },
  },
  {
    title: "Compliance framework",
    items: [
      "Compliance overview",
      "SOC 2 readiness",
      "ISO 27001 alignment",
      "GDPR controls",
      "CCPA controls",
      "Data Processing Agreement",
      "Subprocessor list",
      "Records retention",
      "Responsible AI",
      "Accessibility",
    ],
    badge: { text: "Readiness - not certified", type: "readiness" },
  },
  {
    title: "Audit and assurance",
    items: [
      "Evidence Architecture",
      "Immutable Audit Trails",
      "Policy Decision Logging",
      "Evidence Manifests",
      "Audit Readiness",
      "Internal Controls",
      "Segregation of Duties",
    ],
    badge: { text: "Designed to align", type: "align" },
  },
  {
    title: "Data sovereignty",
    items: [
      "Data Residency",
      "Regional Hosting",
      "Dedicated Private Cloud",
      "Enterprise Single-Tenant",
      "Sovereign Deployment",
      "On-Premise Deployment",
      "Key options and recovery",
    ],
    badge: { text: "Market / configuration dependent", type: "dependent" },
  },
  {
    title: "Customer readiness",
    items: [
      "Documentation",
      "Architecture Library",
      "Integration Guide",
      "Migration Guide",
      "Support Center",
      "System Status",
    ],
    badge: { text: "Available", type: "available" },
  },
  {
    title: "Legal & disclosure",
    items: [
      "Security disclosure",
      "Data Processing Agreement (PDF - opens in a new tab)",
      "Accessibility statement",
      "Responsible AI policy",
      "Trust Center",
    ],
    badge: { text: "Review in progress", type: "review" },
  },
];

export default function TrustProcurement() {
  const getBadgeStyle = (type: DiligenceCategory["badge"]["type"]) => {
    switch (type) {
      case "available":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "readiness":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "dependent":
      case "requirement":
      case "review":
      case "align":
      default:
        return "bg-white text-[#0f172a] border-[#DBE3E8]";
    }
  };

  const getBadgeIcon = (type: DiligenceCategory["badge"]["type"]) => {
    switch (type) {
      case "available":
        return <Check className="w-3 h-3" />;
      case "readiness":
        return <Settings className="w-3 h-3" />;
      default:
        return null;
    }
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
                  Trust & Procurement
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Diligence pathways, with every claim qualified
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Security, compliance, assurance, sovereignty, customer
                readiness, and legal boundaries — each with its verified status
                and review date.
              </p>
            </motion.div>
          </div>

          {/* Grid of 6 Diligence Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {diligenceCategories.map((category, idx) => (
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
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a059] block mb-4">
                    {category.title}
                  </span>

                  <ul className="space-y-2.5 mb-6">
                    {category.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs sm:text-sm text-[#0f172a] font-normal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border uppercase tracking-wider ${getBadgeStyle(category.badge.type)}`}
                  >
                    {getBadgeIcon(category.badge.type)}
                    {category.badge.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-4 w-full"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-md shadow-[#0F476A]/20"
            >
              Visit the Trust Center
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
