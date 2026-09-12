"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatDoesZoikoSuiteProvideSection() {
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
            What does ZoikoSuite provide for leadership teams?
          </h2>

          {/* Box Description */}
          <p className="text-[#3b4953] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
            ZoikoSuite gives executive and control leaders a shared operating context in which business activity is connected to the policies and obligations that apply, the delegated authority required to act, the evidence that supports the decision, the accountable owner, and the state of the underlying source systems. It helps leadership teams see what needs a decision, why it matters, who may decide, and what the permitted next step is — across functions, entities, and jurisdictions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
