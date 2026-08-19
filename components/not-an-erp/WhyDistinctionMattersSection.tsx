"use client";

import React from "react";
import { motion } from "framer-motion";

interface ConsequenceCard {
  tag: string;
  title: string;
  description: string;
}

const consequences: ConsequenceCard[] = [
  {
    tag: "CONSEQUENCE 01",
    title: "Authority gaps",
    description:
      "The system holding the transaction may not hold the complete delegated-authority and review context.",
  },
  {
    tag: "CONSEQUENCE 02",
    title: "Cross-functional fragmentation",
    description:
      "One event can affect finance, legal, tax, workforce, compliance, and procurement at once.",
  },
  {
    tag: "CONSEQUENCE 03",
    title: "Evidence reconstruction",
    description:
      "Reviewers assemble policy reasons, approvals, source documents, and decisions after the fact.",
  },
  {
    tag: "CONSEQUENCE 04",
    title: "Change risk",
    description:
      "Replacing a system of record may be unnecessary when the gap is governed coordination across systems.",
  },
];

export default function WhyDistinctionMattersSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 text-[#0F172A] font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Eyebrow, Main Headline, and Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col space-y-4"
        >
          {/* Eyebrow Header */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
              WHY THE DISTINCTION MATTERS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[30px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
            The question is not &quot;ERP or no ERP.&quot; It is where governed
            execution should live.
          </h2>

          {/* Description Paragraph */}
          <p className="text-[16px] text-[#64748B] leading-relaxed font-normal pt-2">
            Organizations may have strong systems of record yet still coordinate
            approvals, obligations, policy decisions, evidence, and
            cross-functional exceptions through email, spreadsheets, tickets,
            and manual reconciliation.
          </p>
        </motion.div>

        {/* Right Column: 2x2 Grid of Consequence Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {consequences.map((item, idx) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-semibold tracking-wider text-[#c5a059] uppercase block">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
