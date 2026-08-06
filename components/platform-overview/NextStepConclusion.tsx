"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NextStepConclusion() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Content & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Next Step
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white mb-6">
                Build governed operations across entities, jurisdictions, and
                functions
              </h2>

              {/* Description */}
              <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed mb-8">
                See how ZoikoSuite can support your finance, workforce, legal,
                tax, compliance, procurement, evidence, analytics, integration,
                and deployment requirements.
              </p>

              {/* Prepared for text with vertical line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-[2px] h-8 bg-[#c5a059]" />
                <span className="text-xs text-[#9ba4b5] tracking-wide">
                  Prepared for multi-entity, multi-jurisdiction, regulated, and
                  operationally complex organizations.
                </span>
              </div>

              {/* CTA Link */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#c5a059] transition-all duration-200 group"
                >
                  Talk to a solutions architect
                  <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Global Command Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full overflow-hidden rounded-2xl bg-[#07131d]"
            >
              <img
                src="/platform-overview/12.png"
                alt="Global command center showing interactive dashboards, world map tracking, and governance network visualizations"
                className="w-full h-auto object-cover block rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
