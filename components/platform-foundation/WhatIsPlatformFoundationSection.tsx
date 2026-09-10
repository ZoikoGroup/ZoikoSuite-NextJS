"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatIsPlatformFoundationSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[880px] bg-white border border-[#D0AA55] rounded-2xl p-8 sm:p-10 shadow-xs"
        >
          {/* Box Title */}
          <h2 className="text-xl sm:text-[22px] font-bold text-[#08222F] tracking-tight mb-4">
            What is ZoikoSuite Platform Foundation?
          </h2>

          {/* Box Description */}
          <p className="text-[#3b4953] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
            ZoikoSuite Platform Foundation is the shared architecture layer for organizational scope, jurisdiction context, data location, APIs, integrations, developer access, evidence, events, and controlled adoption. It connects governed business operations across approved systems and deployment patterns while keeping source ownership, identities, failures, evidence and implementation boundaries visible. Availability varies by approved product and deployment scope.
          </p>

          {/* Mobile-only yellow warning card (lg:hidden) */}
          <div className="mt-5 rounded-xl border border-[#F6D896] bg-[#FFF8E7] p-3.5 flex items-start gap-2.5 lg:hidden">
            <span className="text-[#D97706] text-sm shrink-0 mt-0.5">ⓘ</span>
            <p className="text-[11.5px] text-[#78350F] leading-snug">
              <span className="font-semibold">Route and claim gates:</span> At least one canonical entity/asset form must exist in product availability, public documentation, backward-relations, deployable gate, deployment scope and controlled architecture. (Every core module features approved ingress and encapsulation).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
