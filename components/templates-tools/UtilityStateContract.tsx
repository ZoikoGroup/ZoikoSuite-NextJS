"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UtilityStateContract() {
  return (
    <section className="w-full bg-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 text-white flex justify-center">
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
              className="text-xs font-medium tracking-widest text-orange-400 uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Utility state contract
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-white leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Eight states, eight public
              <br />
              behaviours
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#7a9ac4] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              A utility is never silently implied to be current. Each state
              <br />
              determines exactly what the public catalog does.
            </p>
          </div>
        </motion.div>

        {/* Diagram Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-200 overflow-hidden"
        >
          <img
            src="/templates-tools/table.legendtbl.png"
            alt="Utility State Contract Table"
            className="w-full h-[611px] object-cover block"
          />
        </motion.div>
      </div>
    </section>
  );
}
