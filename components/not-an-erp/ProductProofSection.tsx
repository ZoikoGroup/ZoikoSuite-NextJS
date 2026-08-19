"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProductProofSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10">
        {/* Header Grid: Title Left, Description Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                PRODUCT PROOF
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
              One decision, four authoritative systems
            </h2>
          </motion.div>

          {/* Right Column: Subtext Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed font-normal">
              A cross-border vendor payment connected to a contract obligation,
              tax treatment, procurement approval, treasury position, and
              evidence requirement. Every source keeps its owner.
            </p>
          </motion.div>
        </div>

        {/* Main Graphic/Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="/not-an-erp/screen.png"
            alt="Interactive dashboard showing cross-border vendor payment connecting contracts, tax treatment, procurement, and treasury"
            className="w-full h-auto object-cover block rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
