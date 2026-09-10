"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MetricFamily {
  title: string;
  subtitle: string;
  fields: { label: string; value: string }[];
  isDark?: boolean;
}

const metricFamilies: MetricFamily[] = [
  {
    title: "Attention aging",
    subtitle: "Distribution of open-item age across the selected scope.",
    fields: [
      { label: "SCOPE", value: "Selected entity" },
      { label: "TIMEFRAME", value: "Rolling 90 days" },
      { label: "POPULATION", value: "Open attention items" },
      { label: "EXCLUSIONS", value: "Restricted items you cannot view" },
    ],
  },
  {
    title: "Obligation timeliness",
    subtitle: "Upcoming, due and overdue completion status.",
    fields: [
      { label: "EVENTS IN SCOPE", value: "Due date within period and in scope" },
      { label: "CRITERIA TO COMPLETE", value: "Evidence received and review closed" },
      { label: "SOURCE", value: "Obligation register" },
    ],
  },
  {
    title: "Policy exceptions",
    subtitle: "Count and trend by approved exception category.",
    fields: [
      { label: "POLICY SCOPE", value: "Version-specific" },
      { label: "DENOMINATOR", value: "Evaluations in period" },
      { label: "SOURCE", value: "Governance decision log" },
    ],
  },
  {
    title: "Evidence completeness",
    subtitle: "Required versus missing evidence counts.",
    fields: [
      { label: "REQUIREMENT SOURCE", value: "Control standard per action type" },
      { label: "DENOMINATOR", value: "Items requiring evidence" },
      { label: "NOTE", value: "Restricted count kept reserved, not missing" },
    ],
  },
  {
    title: "Review turnaround",
    subtitle: "Time from review assignment to recorded outcome.",
    fields: [
      { label: "START EVENT", value: "Review assigned" },
      { label: "END EVENT", value: "Decision recorded" },
      { label: "EXCLUSIONS", value: "Items waiting on external dependency" },
    ],
  },
  {
    title: "Control outcomes",
    subtitle: "Configured control outcomes requiring attention.",
    fields: [
      { label: "CONTROL DEFINITION", value: "Per control standard and version" },
      { label: "DENOMINATOR", value: "Control runs in period" },
      { label: "NOT PUBLISHED", value: "Any 'effectiveness score'" },
    ],
  },
  {
    title: "Source health",
    subtitle: "Availability and freshness trends for approved sources.",
    fields: [
      { label: "METRIC DEFINITION", value: "Per connection, per threshold" },
      { label: "TIMEFRAME", value: "Rolling 30 days" },
      { label: "SOURCE", value: "Integration health log" },
    ],
  },
  {
    title: "Where full reporting lives",
    subtitle:
      "Custom reports, scheduled exports and report-library administration belong to the dedicated Analytics & Reporting destination. This page shows operational trends with drill-down, not a report builder.",
    fields: [],
    isDark: true,
  },
];

export default function MetricDefinitionsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e6e2d8]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                TRENDS AND CONTROL OUTCOMES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Every metric publishes its
              <br />
              definition
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Seven metric families. Each carries a definition, a denominator
              where relevant, a timeframe, a scope, a source and drill-down — or
              it does not appear.
            </p>
          </div>
        </div>

        {/* 8-Card Metric Grid (2 cols on md/lg, responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {metricFamilies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: "easeOut" }}
              className={`rounded-xl border p-5 sm:p-6 shadow-xs flex flex-col justify-between ${
                item.isDark
                  ? "bg-[#08222F] border-[#1a3a4f] text-white"
                  : "bg-white border-[#dce5ec]"
              }`}
            >
              <div>
                <h3
                  className={`text-sm font-bold mb-1.5 ${
                    item.isDark ? "text-white" : "text-[#08222F]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[11.5px] leading-relaxed mb-4 ${
                    item.isDark ? "text-[#9ba4b5]" : "text-[#64748b]"
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>

              {item.fields.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-[#f1f5f9] text-[11px]">
                  {item.fields.map((f, fIdx) => (
                    <div
                      key={fIdx}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2"
                    >
                      <span className="sm:col-span-5 font-mono text-[9px] font-bold tracking-wider text-[#8fa4b2] uppercase">
                        {f.label}
                      </span>
                      <span className="sm:col-span-7 text-[#334155] font-medium text-left sm:text-right">
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-[#08222F] hover:bg-[#0e3448] text-white px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-colors shadow-sm">
            Explore analytics &amp; reporting
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
