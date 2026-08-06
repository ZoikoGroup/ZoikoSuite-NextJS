"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ControlArea {
  title: string;
  description: string;
}

const controlAreas: ControlArea[] = [
  {
    title: "Policy Management",
    description:
      "Author, version, and effective-date the rules that govern each action.",
  },
  {
    title: "Jurisdiction Intelligence",
    description:
      "Resolve the rules that apply to this entity, this market, and this transaction.",
  },
  {
    title: "Workflow & Approvals",
    description:
      "Route work to the roles accountable for it, with deadlines and escalation.",
  },
  {
    title: "Delegated Authority",
    description:
      "Model who may authorize what, within which limits, for which period.",
  },
  {
    title: "Segregation of Duties",
    description:
      "Detect and block conflicting roles at the moment of the decision.",
  },
  {
    title: "Evidence Management",
    description:
      "Require, attach, and preserve the records a decision depends on.",
  },
  {
    title: "Audit Readiness",
    description:
      "Keep decisions, reasons, and outcomes retrievable for review.",
  },
];

export default function GovernanceControlPlane() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid: Title on Left, Instructional Subtext on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
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
                Governance Control Plane
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Put governance inside the work — not after it
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              ZoikoSuite is designed to evaluate policy, jurisdiction,
              authority, approvals, and evidence in the context of the action
              being proposed.
            </p>
          </motion.div>
        </div>

        {/* Two-Column Main Layout: Control Areas List on Left, Holographic Graphic on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Control Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#c5a059] mb-6">
              Control Areas
            </div>

            <div className="space-y-6 mb-10">
              {controlAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="pb-6 border-b border-[#E2E8F0] last:border-b-0"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] tracking-tight mb-1.5">
                    {area.title}
                  </h3>
                  <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed max-w-xl">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-md shadow-[#0F476A]/20"
              >
                Explore the governance control plane
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Holographic Control Plane Interface Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            <img
              src="/platform-overview/2.png"
              alt="Governance Control Plane interface displaying automated approval workflows and verification layers"
              className="w-full h-auto object-cover block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
