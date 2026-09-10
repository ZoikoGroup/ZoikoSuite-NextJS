"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function WhatIsOperatingIntelligenceSection() {
  return (
    <section id="what-is-operating-intelligence" className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[880px] bg-white border border-[#D0AA55] rounded-2xl p-8 sm:p-10 shadow-sm"
        >
          {/* Box Title */}
          <h2 className="text-xl sm:text-[22px] font-bold text-[#08222F] tracking-tight mb-3">
            What is ZoikoSuite Operating Intelligence?
          </h2>

          {/* Box Description */}
          <p className="text-[#3b4953] text-sm sm:text-[14.5px] leading-relaxed font-normal mb-8">
            ZoikoSuite Operating Intelligence is a role-aware view of business activity that connects operational
            signals with entity and jurisdiction context, obligations, policies, authority, evidence, exceptions, source
            status and governed AI findings. It helps authorized teams understand what needs attention, why it
            matters and which governed review or action path is available next.
          </p>

          {/* Side-by-side What It Is vs What It Is Not */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column: WHAT IT IS */}
            <div className="rounded-xl border border-[#d6e4ec] bg-[#f8fbfe] p-5 flex flex-col">
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-[0.14em] text-[#0f476a] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f476a]" />
                WHAT IT IS
              </div>
              <ul className="space-y-3 text-xs sm:text-[12.5px] text-[#334756] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#0f476a] mt-0.5">•</span>
                  <span>Contextual operational intelligence linked to policy, rules, authority and evidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f476a] mt-0.5">•</span>
                  <span>A step-by-step review path with clear signposts of who can act and authorize</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f476a] mt-0.5">•</span>
                  <span>Cross-functional visibility across multi-entity and commercial operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f476a] mt-0.5">•</span>
                  <span>Throughput & exception paths with traceable provenance and policy auditing</span>
                </li>
              </ul>
            </div>

            {/* Right Column: WHAT IT IS NOT */}
            <div className="rounded-xl border border-[#f3d9d9] bg-[#fdf8f8] p-5 flex flex-col">
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-[0.14em] text-[#b91c1c] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                WHAT IT IS NOT
              </div>
              <ul className="space-y-3 text-xs sm:text-[12.5px] text-[#523333] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#b91c1c] mt-0.5">•</span>
                  <span>A generic autonomous execution engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b91c1c] mt-0.5">•</span>
                  <span>A black-box AI model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b91c1c] mt-0.5">•</span>
                  <span>A digital marketing / social dashboard framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b91c1c] mt-0.5">•</span>
                  <span>A substitute for legal, tax, accounting, audit or regulatory compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
