"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExecutiveComparisonSnapshot() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 lg:px-24 text-[#0F172A] font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10">
        {/* Top Header Layout: 2 Columns */}
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
                EXECUTIVE COMPARISON SNAPSHOT
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Two organizing principles, seven dimensions
            </h2>
          </motion.div>

          {/* Right Column: Explanatory Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Every statement uses &quot;typically&quot; or &quot;designed
              to.&quot; There are no checkmarks, scores, winner badges, price
              claims, or performance claims on this page.
            </p>
          </motion.div>
        </div>

        {/* Main Image Banner Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full relative overflow-hidden rounded-2xl"
        >
          <img
            src="/not-an-erp/executive.png"
            alt="An executive evaluating governed organizational dimensions on a transparent workstation display"
            className="w-full h-auto object-cover block rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
