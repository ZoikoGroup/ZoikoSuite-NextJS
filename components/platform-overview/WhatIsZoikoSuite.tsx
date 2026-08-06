"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, FileText } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Operations",
    description:
      "Coordinate business actions across functions, entities, and jurisdictions.",
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    description:
      "Apply policies, roles, approvals, delegated authority, and segregation of duties.",
  },
  {
    icon: FileText,
    title: "Evidence",
    description:
      "Preserve attributable decision records, supporting documents, and audit-ready context.",
  },
] as const;

export default function WhatIsZoikoSuite() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-[1280px] w-full flex flex-col items-center">
        {/* Main Card Wrapper with Golden Border & max-w-6xl constraint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-6xl bg-white border-2 border-t-4 border-t-[#D0AA55] border-[#D0AA55] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative"
        >
          {/* Subtitle with line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
              What is ZoikoSuite?
            </span>
          </div>

          {/* Main Description Paragraph */}
          <p className="text-[#0f172a] text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal mb-12 max-w-3xl">
            ZoikoSuite is a governed business operations intelligence platform
            that connects finance, workforce, legal, tax, compliance,
            procurement, evidence, analytics, and governed AI. It helps
            multi-entity and multi-jurisdiction organizations execute work
            through policy-aware workflows, approvals, delegated authority, and
            reviewable evidence.
          </p>

          {/* Three Column Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-col items-start">
                  <div className="mb-4 text-[#0F476A]">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
