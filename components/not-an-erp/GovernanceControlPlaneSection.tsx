"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ControlItem {
  label: string;
  description: string;
}

const controlItems: ControlItem[] = [
  {
    label: "POLICY",
    description: "Versioned rules with source authority and effective dates",
  },
  {
    label: "JURISDICTION",
    description: "Overlays resolved per entity and transaction",
  },
  {
    label: "AUTHORITY",
    description: "Delegated limits, scope, and expiry",
  },
  {
    label: "APPROVALS",
    description: "Routed to accountable roles with deadlines",
  },
  {
    label: "SEGREGATION",
    description: "Conflicts detected before the decision, not after",
  },
  {
    label: "EXCEPTIONS",
    description: "Reason, compensating control, owner, expiry, review",
  },
];

export default function GovernanceControlPlaneSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Eyebrow, Title, Description, Control List, CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-6 flex flex-col space-y-6"
        >
          {/* Eyebrow Header */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
              GOVERNANCE CONTROL PLANE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
            Controls that run at the decision, not beside it
          </h2>

          {/* Paragraph */}
          <p className="text-[19.4px] text-[#64748B] leading-relaxed font-normal">
            This is the difference most often mistaken for a configuration
            setting. The distinction is not whether controls exist &mdash; it is
            whether they are resolved for this action, this entity, and this
            jurisdiction at the moment of the decision.
          </p>

          {/* Key Controls List */}
          <div className="space-y-3 pt-2">
            {controlItems.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-12 items-baseline text-xs sm:text-sm md:ml-10"
              >
                <span className="col-span-4 sm:col-span-3 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#A07A2E] uppercase">
                  {item.label}
                </span>
                <span className="col-span-8 sm:col-span-9 text-[#64748B] font-normal leading-normal">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] hover:bg-[#0a2c3d] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
            >
              Explore the governance control plane
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image with NO outer div styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-6 flex justify-center"
        >
          <div>
            <img
              src="/not-an-erp/2.png"
              alt="Governance control plane visual showing decision node with surrounding authority, jurisdiction, policy, and compliance layers"
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
