"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductRoadmapSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-6 flex flex-col space-y-6"
        >
          {/* Eyebrow Header */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
              PRODUCT ROADMAP
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
            See how ZoikoSuite product direction moves from evidence to release
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed font-normal">
            Explore approved public roadmap records, status definitions,
            release-readiness gates, dependencies, early-access pathways, and
            released outcomes across the ZoikoSuite platform.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#b38e48] text-[#08222F] text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 shadow-xs"
            >
              Get Demo
              <ArrowRight className="w-4 h-4 text-[#08222F]" />
            </a>
          </div>

          {/* Subtext with Gold Vertical Accent Line */}
          <div className="border-l-2 border-[#c5a059] pl-4 py-0.5 mt-2">
            <p className="text-[11px] sm:text-xs text-[#9ba4b5] font-normal leading-relaxed">
              Availability can vary by market, subscription, deployment,
              configuration, and implementation status.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Interactive Graphic Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-6 flex justify-center"
        >
          <div>
            <img
              src="/product-roadmap/hero.png"
              alt="ZoikoSuite product roadmap process showing pipeline flow from evidence to release"
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
