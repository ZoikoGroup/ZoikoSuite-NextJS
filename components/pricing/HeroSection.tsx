"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="relative w-full bg-[#08222F] py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-[38px] max-w-2xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          One platform to run the financial and operational core of your business.
        </h1>

        {/* Subtitle */}
        <p className="text-base text-[#C7D3DA] mb-10 max-w-2xl font-normal leading-relaxed">
          Accounting, finance, tax, compliance, audit, legal workflows and business operations &mdash; connected by one governed platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#CDA85B] text-[#0a192f] font-semibold text-sm sm:text-base hover:bg-[#d4a85c] transition-colors duration-200 shadow-sm"
          >
            Start 30-day free trial
          </a>

          {/* Secondary Button */}
          <a
            href="/book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-transparent text-white font-medium text-sm sm:text-base border border-[#FFFFFF59] hover:bg-[#112240] transition-colors duration-200"
          >
            Book a demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}