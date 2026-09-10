"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";

export default function WhatIsGovernancePlatformSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-14 lg:py-16 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[880px] bg-white border border-[#D0AA55] rounded-2xl p-6 sm:p-10 shadow-xs flex flex-col"
        >
          {/* Box Title */}
          <h2 className="text-xl sm:text-[22px] font-bold text-[#08222F] tracking-tight mb-4">
            What is the ZoikoSuite Governance Platform?
          </h2>

          {/* Box Description */}
          <p className="text-[#3b4953] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
            ZoikoSuite Governance Platform is designed to bring policy, jurisdiction context, approvals, delegated authority, segregation of duties, evidence, audit readiness, governed AI and analytics into business decision workflows. It helps authorized teams understand required controls, route appropriate human review and preserve decision evidence. Exact capability availability, coverage and implementation behavior depend on approved product and deployment status.
          </p>

          {/* Mobile-Only Info Callout Box */}
          <div className="lg:hidden mt-5 p-3.5 sm:p-4 rounded-xl bg-[#FEF9EE] border border-[#F3DFB5] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-950 leading-relaxed">
              <strong className="font-semibold">Four facts govern this page.</strong> The ten capability labels are canonical. Governance is evaluated around business actions, not only stored as documents. Control outcomes, human authorization, evidence and audit context are distinct things. And route, availability, jurisdiction, certification and regulated-outcome claims are source-governed rather than inferred from the taxonomy.
            </p>
          </div>

          {/* Mobile-Only See the ten capabilities Link */}
          <div className="lg:hidden mt-4">
            <Link
              href="#ten-capabilities"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e445b] hover:text-[#08222F] transition-colors"
            >
              <span>See the ten capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
