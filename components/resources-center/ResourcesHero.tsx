"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResourcesHero() {
  return (
    <section className="w-full bg-white pt-12 lg:pt-16 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-14 flex justify-center">
      <div className="max-w-[1320px] w-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-5 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#A07A2E] uppercase font-mono">
                RESOURCES
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold text-[#08222F] tracking-tight leading-[1.14] mb-5 sm:mb-6">
              Find the guidance you <br className="hidden sm:inline" /> need, faster.
            </h1>

            <p className="text-[#475569] text-sm sm:text-base leading-[1.75] max-w-[568.89px] font-normal">
              The ZoikoSuite Resource Center brings together Executive Briefs,{" "}
              <br className="hidden lg:inline" />
              Documentation, Knowledge Base resources, Training Academy materials,{" "}
              <br className="hidden lg:inline" />
              Webinars &amp; Events, Case Studies, Blog &amp; Insights, Templates &amp; Tools, and{" "}
              <br className="hidden lg:inline" />
              Support Center pathways in one place.
            </p>
          </motion.div>

          {/* Right column: resource discovery visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 w-full flex justify-end m-0 p-0"
          >
            <img
              src="/resources-center/ij.png"
              alt="Governed resource discovery visual"
              className="w-full max-w-[642px] h-auto block m-0 p-0 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}