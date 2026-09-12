"use client";

import React from "react";
import { motion } from "framer-motion";

interface StageItem {
  stage: string;
  name: string;
  desc: string;
  ownershipBadge: string;
  badgeStyle: "gold" | "blue" | "dark";
}

const moduleStages: StageItem[] = [
  {
    stage: "STAGE 01",
    name: "Prepare",
    desc: "Ingest, map and balance against canonical data model.",
    ownershipBadge: "IMPLEMENTATION BOUND",
    badgeStyle: "gold",
  },
  {
    stage: "STAGE 02",
    name: "Evaluate",
    desc: "Evaluate statutory, policy, contractual and jurisdictional obligations and thresholds.",
    ownershipBadge: "EXTERNAL",
    badgeStyle: "blue",
  },
  {
    stage: "STAGE 03",
    name: "Authorize",
    desc: "Test delegated human approval authority matrix and policy boundaries.",
    ownershipBadge: "EXTERNAL",
    badgeStyle: "blue",
  },
  {
    stage: "STAGE 04",
    name: "Execute",
    desc: "Record human action, seal evidence and execute permitted transition.",
    ownershipBadge: "EXTERNAL",
    badgeStyle: "blue",
  },
  {
    stage: "STAGE 05",
    name: "Record & Reconcile",
    desc: "Contribute to governed subledger and post immutable decision & policy provenance record.",
    ownershipBadge: "SHARED",
    badgeStyle: "dark",
  },
  {
    stage: "STAGE 06",
    name: "Assure",
    desc: "Provide real-time auditability, exception elevation and continuous provenance verification.",
    ownershipBadge: "EXTERNAL",
    badgeStyle: "blue",
  },
];

export default function AllTenModulesWorkSameWaySection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#103448]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                SHARED GOVERNED LIFECYCLE MODEL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14]">
              All ten modules run work the
              <br />
              same way
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#9ba4b5] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Six stages, each carrying an ownership badge. The badge describes execution and source responsibility — not legal accountability.
            </p>
          </div>
        </div>

        {/* 6 Stage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-8">
          {moduleStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              className="rounded-2xl bg-white text-[#08222F] p-5 flex flex-col justify-between shadow-md"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#92400e] uppercase block mb-1">
                  {stage.stage}
                </span>
                <h3 className="text-base font-bold text-[#08222F] tracking-tight mb-2">
                  {stage.name}
                </h3>
                <p className="text-[11.5px] text-[#475569] leading-relaxed mb-6">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-2">
                {stage.badgeStyle === "gold" && (
                  <span className="inline-block px-2 py-1 rounded bg-[#fef3c7] border border-[#fde68a] text-[9.5px] font-mono font-bold text-[#92400e] uppercase tracking-wider">
                    {stage.ownershipBadge}
                  </span>
                )}
                {stage.badgeStyle === "blue" && (
                  <span className="inline-block px-2 py-1 rounded bg-[#eff6ff] border border-[#dbeafe] text-[9.5px] font-mono font-bold text-[#1d4ed8] uppercase tracking-wider">
                    {stage.ownershipBadge}
                  </span>
                )}
                {stage.badgeStyle === "dark" && (
                  <span className="inline-block px-2 py-1 rounded bg-[#f1f5f9] border border-[#e2e8f0] text-[9.5px] font-mono font-bold text-[#334155] uppercase tracking-wider">
                    {stage.ownershipBadge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2 Bottom Callout Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Box */}
          <div className="rounded-xl border border-[#1a3f55] bg-[#0c2a3c] p-5">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.16em] text-[#c5a059] uppercase block mb-2">
              BOUNDARY AT WORK
            </span>
            <p className="text-xs sm:text-[12.5px] text-[#9ba4b5] leading-relaxed">
              Stage 03 is the stage that differs most by deployment. In one customer it is a ZoikoSuite approval gateway; in another ZoikoSuite evaluates rules and boundaries and sends humans into a downstream system that is the primary owner.
            </p>
          </div>

          {/* Right Box */}
          <div className="rounded-xl border border-[#1a3f55] bg-[#0c2a3c] p-5">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.16em] text-[#c5a059] uppercase block mb-2">
              AI BOUNDARY
            </span>
            <p className="text-xs sm:text-[12.5px] text-[#9ba4b5] leading-relaxed">
              No stage grants AI autonomous or non-reviewable authority. Where AI is used to correlate sources, flags policy exceptions or suggest review order, human approval is distinctly stamped and recorded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
