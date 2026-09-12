"use client";

import React from "react";
import { motion } from "framer-motion";

interface CapabilityItem {
  title: string;
  subtext: string;
}

interface CapabilityGroup {
  question: string;
  items: CapabilityItem[];
}

const capabilityGroups: CapabilityGroup[] = [
  {
    question: "How is enterprise scope structured and connected?",
    items: [
      {
        title: "Platform Architecture",
        subtext: "Route pending approval · see proof below",
      },
      {
        title: "Multi-Entity Operations",
        subtext: "Route pending approval · see proof below",
      },
      {
        title: "Multi-Jurisdiction Operations",
        subtext: "Route pending approval · see proof below",
      },
    ],
  },
  {
    question: "Where does data live, and how does it move through its lifecycle?",
    items: [
      {
        title: "Data Residency",
        subtext: "Proof rules \"Data Location & Lifecycle\" · Route pending",
      },
      {
        title: "Data and Event Architecture",
        subtext: "Route pending approval · see proof below",
      },
    ],
  },
  {
    question: "How can approved systems and technical users connect?",
    items: [
      {
        title: "API Platform",
        subtext: "Publication state governs each surface",
      },
      {
        title: "Integrations",
        subtext: "Named connectors only with Integration Registry",
      },
      {
        title: "Developer Platform",
        subtext: "Each resource has its own release state",
      },
    ],
  },
  {
    question: "How can change be controlled and evidence preserved?",
    items: [
      {
        title: "Migration & Shadow Mode",
        subtext: "Bridge only — cannot bypass by its own declaration",
      },
      {
        title: "Evidence Architecture",
        subtext: "Route pending approval · see proof below",
      },
    ],
  },
];

export default function OrganizedByQuestionCapabilitiesSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                TEN CANONICAL CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Organized by the question each one answers
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Grouped by evaluation question rather than by internal team. Each
              capability shows its publication state, and none links out until
              a route is approved.
            </p>
          </motion.div>
        </div>

        {/* 2x2 Grid of Question Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {capabilityGroups.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gIdx * 0.08 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between"
            >
              <h3 className="text-[14px] sm:text-[15px] font-bold text-[#08222F] mb-4">
                {group.question}
              </h3>

              <div className="flex flex-col gap-2.5">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="rounded-xl border border-[#ede9df] bg-[#FAF8F5] p-3.5 flex flex-col transition-colors hover:border-[#d4af37]/60"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#C5A059] font-bold text-xs select-none">
                        »
                      </span>
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#08222F]">
                        {item.title}
                      </h4>
                    </div>
                    <span className="font-mono text-[10.5px] text-slate-500 pl-4 mt-0.5">
                      {item.subtext}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only Operational resources navigation bar (lg:hidden) */}
        <div className="mt-8 flex flex-col space-y-3 lg:hidden pt-4 border-t border-slate-100">
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            OPERATIONAL RESOURCES
          </span>
          <h4 className="text-xs font-bold text-[#08222F]">
            Operational resources, before any commercial route
          </h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Non-negotiated technical baselines.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Sign in", "Documentation", "Support", "System status", "API resources"].map((pill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-[11px] font-medium text-slate-700 shadow-2xs hover:border-[#D0AA55] transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
