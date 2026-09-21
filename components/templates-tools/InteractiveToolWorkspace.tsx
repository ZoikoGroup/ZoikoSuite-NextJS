"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InteractiveToolWorkspace() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-orange-400" />
            <span
              className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Interactive tool workspace
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Input, validate, calculate, result,
              <br />
              reset
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#475467] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              The execution surface for a registered interactive tool. It renders in
              <br />
              a disabled state because no calculation version is currently
              <br />
              approved.
            </p>
          </div>
        </motion.div>

        {/* Workspace Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full rounded-xl border border-stone-200 overflow-hidden bg-white"
        >
          <img
            src="/templates-tools/div.workspace.png"
            alt="Interactive Tool Workspace"
            className="w-full h-[612px] object-cover block"
          />
        </motion.div>
      </div>
    </section>
  );
}
