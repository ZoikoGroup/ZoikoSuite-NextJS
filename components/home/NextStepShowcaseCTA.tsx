"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NextStepShowcaseCTA() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Content Grid: Text on Left, Interactive Image Showcase on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Next Step
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white mb-6">
                Bring your operations under one governed system of record
              </h2>

              {/* Subtitle Description */}
              <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed mb-8">
                See how ZoikoSuite can govern your finance, workforce, legal,
                tax, compliance, and evidence flows across the entities and
                jurisdictions that matter to your organization.
              </p>

              {/* Text Link Action */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#c5a059] hover:underline"
                >
                  Talk to a solutions architect
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Image Showcase with Left Golden Accent Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full rounded-xl"
            >
              <img
                src="/home/last.png"
                alt="Executive team collaborating around holographic system records and governed data workflows"
                className="w-full h-auto object-cover block"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
