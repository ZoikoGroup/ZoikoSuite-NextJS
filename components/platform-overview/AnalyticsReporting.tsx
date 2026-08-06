"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AnalyticsCard {
  category: string;
  title: string;
  description: string;
}

const analyticsCards: AnalyticsCard[] = [
  {
    category: "Operational",
    title: "Flow and timeliness",
    description:
      "Actions in progress · approvals pending · obligations due · cycle time · exceptions · overdue items.",
  },
  {
    category: "Governance",
    title: "Control behavior",
    description:
      "Policy decisions · approval routes · delegated authority usage · segregation conflicts · overrides · escalations.",
  },
  {
    category: "Evidence",
    title: "Assurance state",
    description:
      "Evidence completeness · manifest status · missing sources · exports · retention locks · verification state.",
  },
];

const reportCatalogueItems: string[] = [
  "Executive operations",
  "Finance governance",
  "Contract obligations",
  "Workforce compliance",
  "Jurisdiction obligations",
  "Audit readiness",
  "Integration health",
];

export default function AnalyticsReporting() {
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
                  Analytics & Reporting
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                See where operations, controls, and evidence need attention
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Every metric carries a definition, source status, time range,
                and scope. There is no individual productivity score and no
                behavior-policing metric.
              </p>
            </motion.div>
          </div>

          {/* Grid of 3 Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {analyticsCards.map((card, idx) => (
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
                    {card.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f172a] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Grid: Analytics Dashboard Image on Left, Report Catalogue & CTA on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            {/* Left Column: Analytics Dashboard Image (No border, no shadow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full overflow-hidden bg-white"
            >
              <img
                src="/platform-overview/10.png"
                alt="Analytics and reporting dashboard showcasing operational metrics, control behavior stats, and assurance states"
                className="w-full h-auto object-cover block rounded-xl"
              />
            </motion.div>

            {/* Right Column: Report Catalogue & CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="lg:col-span-6 bg-white border border-[#DBE3E8] rounded-2xl p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c5a059] mb-6">
                  Report Catalogue
                </div>

                <ul className="space-y-3 mb-8">
                  {reportCatalogueItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm font-medium text-[#0f172a]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-[#64748b] leading-relaxed mb-8">
                  Portfolio dimensions: entity · jurisdiction · function ·
                  module · workflow · role · date · status. Views are
                  role-aware; exports are permission-gated, scoped, and audited.
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-md shadow-[#0F476A]/20"
                >
                  Explore analytics & reporting
                  <ArrowRight className="w-4 h-4 text-[#c5a059]" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
