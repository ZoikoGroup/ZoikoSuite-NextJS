"use client";

import React from "react";
import { motion } from "framer-motion";

interface Commitment {
  title: string;
  description: string;
}

const commitments: Commitment[] = [
  {
    title: "Access first",
    description:
      "Core content, controls, support and reporting are usable without a mouse and without relying on colour, motion, sound or vision alone.",
  },
  {
    title: "Evidence before claim",
    description:
      "Conformance language is status-qualified and tied to scope, test date, method, exceptions and a named owner.",
  },
  {
    title: "No accessibility paywall",
    description:
      "Accessibility of the product and public site is not a premium-plan feature. Procurement artifacts may be sales-assisted; access itself is never gated.",
  },
  {
    title: "Native semantics first",
    description:
      "Semantic HTML before ARIA. Custom widgets require complete keyboard and assistive-technology behaviour.",
  },
  {
    title: "Complete journeys",
    description:
      "Accessibility applies to full workflows, not isolated components or hero sections.",
  },
  {
    title: "Support without friction",
    description:
      "Reporting an accessibility issue never requires a sales conversation, marketing consent or an account upgrade.",
  },
  {
    title: "Continuous governance",
    description:
      "Accessibility has owners, a test cadence, regression gates, issue severity, remediation targets and evidence.",
  },
];

export default function AccessibilityPrinciplesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header — eyebrow + h2 on left, subtitle on right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-12 sm:mb-14"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-5 h-[2px] bg-[#A07A2E]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#A07A2E] uppercase font-['JetBrains_Mono']">
              ACCESSIBILITY PRINCIPLES
            </span>
          </div>
          {/* Heading + Subtitle in a row — heading left, subtitle far right corner */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
              Seven commitments
            </h2>
            <p className="text-[15px] sm:text-xl text-[#3a5277] leading-8 mt-3 lg:mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              These govern how accessibility is built, tested and supported —<br />
              and how it is talked about.
            </p>
          </div>
        </motion.div>

        {/* Commitment rows */}
        <div className="flex flex-col gap-1.5">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border-l-[3px] border-l-[#2d4e88] border-y border-r border-[#c5d4e8] rounded-tr-lg rounded-br-lg px-3.5 py-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-3.5"
            >
              <div className="md:w-44 shrink-0">
                <h3 className="text-sm font-bold text-[#101828] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.title}
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#3a5277] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.description}
                </p>
              </div>
              <div className="shrink-0 self-start md:self-center">
                <span
                  className="inline-flex items-center justify-center"
                  style={{
                    width: '105px',
                    height: '18px',
                    backgroundColor: '#EAF3E8',
                    border: '1px solid #7BA05B',
                    borderRadius: '3px',
                  }}
                >
                  <span
                    className="text-[8.5px] font-medium uppercase leading-3 tracking-wide"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: '#19664C' }}
                  >
                    Locked principle
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
