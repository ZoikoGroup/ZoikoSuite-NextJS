"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EnterpriseOperationsCommandCenter() {
  return (
    <section className="w-full bg-[#07131d] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid: Title on Left, Instructional Subtext on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                Product Proof
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white">
              Enterprise Operations Command Center
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed">
              Role-aware attention management: what needs a decision, who is
              authorized to make it, what evidence exists, and what happens
              next.
            </p>
          </motion.div>
        </div>

        {/* Holographic Command Center Image Showcase with Left Golden Accent Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative w-full mb-10"
        >
          <img
            src="/platform-overview/1.png"
            alt="Enterprise Operations Command Center dashboard with holographic workflow metrics and team analysis"
            className="w-full h-auto object-cover block"
          />
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D0AA55] text-[#07131d] font-semibold text-sm hover:bg-[#c29c4c] transition-all duration-200 shadow-lg shadow-[#D0AA55]/20"
          >
            View platform tour
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent border border-[#1e3a5f] text-white font-semibold text-sm hover:bg-[#0b1c2d] transition-all duration-200 shadow-sm"
          >
            Book enterprise demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
