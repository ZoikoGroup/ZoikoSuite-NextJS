"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RegionalHero() {
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
    <section className="relative overflow-hidden bg-[#082834] py-20 px-6 md:px-12 font-sans">
      {/* Background Radial Gradients */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(15,71,106,0.85) 0%, rgba(15,71,106,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(208,170,85,0.13) 0%, rgba(208,170,85,0) 70%)",
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
              EUROPEAN HEADQUARTERS / REGIONAL SUPPORT
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]"
          >
            Get help with your regional ZoikoSuite enquiry
          </motion.h1>

          {/* Body Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl font-normal"
          >
            Choose the kind of help you need and describe the issue without
            including passwords or confidential records. Your request will be
            directed based on the support routes available.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <a
              href="#request"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#E3C065] text-[#082834] text-xs font-bold hover:bg-[#D4AF37] transition-colors duration-200 shadow-md"
            >
              Request regional support
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-[#5C7B84] bg-transparent text-white text-xs font-bold hover:bg-[#0F3A4B] transition-colors duration-200 space-x-2"
            >
              <span>Find the right contact</span>
              <ArrowRight className="h-4 w-4" />
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
              src="/regional/1.png"
              alt="European Headquarters Regional Support office visualization overlooking cityscape"
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
