"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatIsPlatformTourSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-16 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[860px] bg-white border border-[#D0AA55] rounded-2xl p-8 sm:p-10 shadow-sm"
        >
          {/* Box Title */}
          <h2 className="text-xl sm:text-[22px] font-bold text-[#08222F] tracking-tight mb-3">
            What is the ZoikoSuite Platform Tour?
          </h2>

          {/* Box Description */}
          <p className="text-[#3b4953] text-sm sm:text-[14.5px] leading-relaxed font-normal">
            The ZoikoSuite Platform Tour is an interactive, fictitious evaluation
            environment that shows how one business action moves through
            context, policy, delegated authority, human review, controlled
            execution, evidence, governed AI, analytics and enterprise
            deployment. It uses synthetic records only, performs no live
            actions, and requires no account, email address or sales form.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
