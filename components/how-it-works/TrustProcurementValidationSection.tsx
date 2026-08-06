"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface VerificationCategory {
  title: string;
  items?: string[];
  description?: string;
  badgeText: string;
  badgeClass: string;
  isSpecialBg?: boolean;
}

const categories: VerificationCategory[] = [
  {
    title: "Security",
    items: [
      "Identity and access management",
      "Zero Trust architecture",
      "Encryption and key management",
      "Application and API security",
      "Infrastructure security",
      "Vulnerability management",
      "Incident response",
      "Business continuity",
    ],
    badgeText: "ARCHITECTURE REQUIREMENT",
    badgeClass: "bg-slate-500/10 text-slate-700 border-slate-500/20",
  },
  {
    title: "Compliance",
    items: [
      "Compliance overview",
      "SOC 2 readiness",
      "ISO 27001 alignment",
      "GDPR controls",
      "CCPA controls",
      "Data Processing Agreement (PDF)",
      "Subprocessor list",
      "Records retention",
      "Responsible AI",
      "Accessibility",
    ],
    badgeText: "READINESS - NOT CERTIFIED",
    badgeClass: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  },
  {
    title: "Evidence and assurance",
    items: [
      "Evidence architecture",
      "Immutable audit trails",
      "Policy decision logging",
      "Evidence manifests",
      "Document integrity",
      "Audit readiness",
      "Internal controls",
      "Segregation of duties",
    ],
    badgeText: "DESIGNED TO SUPPORT",
    badgeClass: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    title: "Data sovereignty",
    items: [
      "Data residency",
      "Regional hosting",
      "Private / single tenant",
      "Sovereign / on-premise",
      "Key options",
      "Recovery",
      "Deployment architecture",
    ],
    badgeText: "MARKET / CONFIGURATION DEPENDENT",
    badgeClass: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
  },
  {
    title: "Operational readiness",
    items: [
      "Architecture Library",
      "API documentation",
      "Integration guide",
      "Migration guide",
      "Documentation",
      "System status",
      "Support",
    ],
    badgeText: "AVAILABLE",
    badgeClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  {
    title: "Professional boundary",
    description:
      "ZoikoSuite provides infrastructure, workflow, analytics, evidence, and decision support. Qualified professionals remain responsible for final regulated decisions and use.",
    badgeText: "APPLIES TO EVERY STAGE",
    badgeClass: "bg-slate-500/10 text-slate-700 border-slate-500/20",
    isSpecialBg: true,
  },
];

export default function TrustProcurementValidationSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Eyebrow Style (with line) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Trust and procurement validation
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Verify the lifecycle claims
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Six diligence routes. Status terms distinguish verified,
                aligned, designed, pending, and unavailable — they are not
                decorative.
              </p>
            </motion.div>
          </div>

          {/* Diligence Routes Grid (6 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                className={`border border-[#CFDEE7] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${
                  cat.isSpecialBg ? "bg-[#F6EDD9]" : "bg-white"
                }`}
              >
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#c5a059] mb-4">
                    {cat.title}
                  </h3>

                  {cat.items ? (
                    <ul className="space-y-2 mb-6">
                      {cat.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="text-[#0f172a] text-xs sm:text-sm font-medium"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#0f172a] text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      {cat.description}
                    </p>
                  )}
                </div>

                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-wider border ${cat.badgeClass}`}
                  >
                    {cat.badgeText}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
            >
              Visit the Trust Center
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f172a] font-semibold text-sm border border-[#CFDEE7] hover:bg-[#EFECE6] transition-all duration-200 shadow-sm"
            >
              Talk to a solutions architect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
