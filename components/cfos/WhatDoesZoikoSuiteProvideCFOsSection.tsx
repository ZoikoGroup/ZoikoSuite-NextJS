"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatDoesZoikoSuiteProvideCFOsSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-8 sm:py-12 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#D0AA55]/80 bg-white p-6 sm:p-10 shadow-sm"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#08222F] tracking-tight mb-3">
            What does ZoikoSuite provide for CFOs?
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            ZoikoSuite gives finance leaders governed context for material financial decisions: the entity, period and currency a value belongs to, the system it came from and how fresh it is, the policy and delegated authority that apply, the evidence supporting the decision, and the accountable person. It coordinates finance work across approved systems while authoritative records remain where they already sit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
