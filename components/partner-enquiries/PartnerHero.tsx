"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#092B35] py-20 px-6 md:px-12 font-sans">
      {/* Background Radial Gradients */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(15,71,106,0.85) 0%, rgba(15,71,106,0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Staggered Entrance Content */}
        <motion.div
          className="lg:col-span-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#C9A34C] text-xs font-bold tracking-[0.2em] uppercase">
              GLOBAL HEADQUARTERS · PARTNERSHIPS
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]"
          >
            Explore a partnership with ZoikoSuite.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl font-normal"
          >
            Tell us about your organization and the collaboration you’d like to
            explore. We’ll direct your enquiry to the appropriate team for
            review.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D4AF37] text-[#082834] text-xs font-bold hover:bg-[#C5A028] transition-colors duration-200 shadow-md"
            >
              Make a partner enquiry
            </a>

            <a
              href="#topics"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-[#5C7B84] bg-transparent text-white text-xs font-bold hover:bg-[#0F3A4B] transition-colors duration-200 space-x-2"
            >
              <span>Explore partnership topics</span>
              <ArrowDown className="w-4 h-4 text-[#FFFFFF]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image with Motion Entrance */}
        <motion.div
          className="lg:col-span-6 flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <div className="relative w-full max-w-lg h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-[#1E3A4A]/50 bg-[#0A303F]">
            <Image
              src="/partner/1.png"
              alt="Explore a partnership with ZoikoSuite process visualization"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
