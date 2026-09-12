"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatDoesZoikoSuiteProvideExpansionSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#D0AA55]/80 bg-white p-6 sm:p-10 shadow-sm"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#08222F] tracking-tight mb-3">
            What does ZoikoSuite provide for expansion?
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            ZoikoSuite gives organizations managing geographic, entity, regulatory, transaction-driven or scale-driven operating change a governed way to evaluate and run that change. Each expansion pathway connects jurisdiction and source status, professional review, governance and delegated authority, evidence, systems ownership, phased transition and human accountability. Coverage, availability and implementation scope depend on approved sources and configuration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
