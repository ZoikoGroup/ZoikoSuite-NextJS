"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const riskCards = [
  {
    risk: "RISK 01",
    title: "Fragmented authority",
    description:
      "Approval limits, delegated authority, and ownership become difficult to verify at the moment of action.",
  },
  {
    risk: "RISK 02",
    title: "Jurisdictional inconsistency",
    description:
      "Rules, obligations, and deadlines vary across entities and markets.",
  },
  {
    risk: "RISK 03",
    title: "Evidence gaps",
    description:
      "Decisions, documents, policy reasons, and approvals are stored in different places.",
  },
  {
    risk: "RISK 04",
    title: "Delayed assurance",
    description:
      "Audit and compliance teams reconstruct events after the fact.",
  },
] as const;

export default function ExecutiveStakes() {
  return (
    <section className="w-full text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Main Grid: Left Side Text Content, Right Side 2x2 Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            {/* Left Column: Heading, Subtitle Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col max-w-xl"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Executive Stakes
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a] mb-6">
                Operations fragment when governance lives outside execution
              </h2>

              {/* Subtitle Description */}
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Finance, workforce, legal, tax, compliance, procurement, and
                reporting often operate across disconnected systems,
                spreadsheets, inboxes, and manual approvals. That separation
                makes authority harder to verify, obligations harder to track,
                and evidence harder to assemble.
              </p>
            </motion.div>

            {/* Right Column: 2x2 Grid of Risk Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {riskCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#DBE3E8] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <span className="text-[11px] font-medium tracking-[0.15em] text-[#c5a059] uppercase block mb-2">
                      {card.risk}
                    </span>
                    <h3 className="text-lg font-bold text-[#0f172a] tracking-tight mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Banner Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full bg-[#0F476A] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl mb-6"
          >
            <p className="text-white text-base sm:text-lg font-normal tracking-tight">
              ZoikoSuite is designed to bring execution, governance, and
              evidence into the same operating context.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#c5a059] hover:underline whitespace-nowrap shrink-0"
            >
              See how that works
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Bottom Disclaimer Note with Left Golden Accent Border */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="pl-3 py-1 border-l-4 border-[#D0AA55]"
          >
            <p className="text-[#64748b] text-xs leading-relaxed">
              These risks describe patterns commonly reported in multi-entity
              operations. Not every organization experiences all four.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
