"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BadgeItem {
  text: string;
  variant?: "default" | "warning" | "danger";
}

const badges: BadgeItem[] = [
  { text: "Authorized sources only", variant: "default" },
  { text: "Permission-scoped", variant: "default" },
  { text: "Citations required", variant: "default" },
  { text: "Uncertainty disclosed", variant: "default" },
  { text: "Conflicts surfaced", variant: "default" },
  { text: "Human review threshold", variant: "warning" },
  { text: "No independent authority", variant: "danger" },
  { text: "No silent execution", variant: "danger" },
];

export default function GovernedAISection() {
  const getBadgeStyle = (variant?: "default" | "warning" | "danger") => {
    switch (variant) {
      case "warning":
        return "bg-[#F6EDD9] text-[#A07A2E] border border-[#D0AA55]";
      case "danger":
        return "bg-[#F9EDED] text-[#8A3B3B] border border-[#DFA9A9]";
      default:
        return "bg-white text-[#16262F] border border-[#DBE3E8]";
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Eyebrow, Title, Description, Badges, CTA Button */}
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
              GOVERNED AI
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
            Bounded decision support, not an assistant with authority
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
            Where AI capability varies by product and release, the distinction
            here is the boundary: authorized sources, permission scope,
            uncertainty disclosure, human review, and an audit record separate
            from the proposal.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 pt-1 max-w-110">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wide ${getBadgeStyle(
                  badge.variant,
                )}`}
              >
                {badge.text}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] border border-[#0F476A] hover:bg-[#0c3955] hover:border-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
            >
              Explore governed AI
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
              src="/not-an-erp/5.png"
              alt="Governed AI central brain node surrounded by human review and security boundary nodes with user operator"
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
