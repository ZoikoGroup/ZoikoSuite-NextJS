"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#08222F] text-white py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-[#0e3347]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#CDA85B]" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
                ZOIKOSUITE PRICING
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.12] mb-5">
              One platform to run the financial and operational core of your business.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#C7D3DA] leading-relaxed mb-8 max-w-xl font-normal">
              Accounting, finance, tax, compliance, audit, legal workflows and business operations &mdash; connected by one governed platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#CDA85B] hover:bg-[#d8b365] text-[#08222F] font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                Start 30-day free trial
              </Link>
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-transparent hover:bg-white/5 border border-white/30 hover:border-white text-white font-medium text-xs sm:text-sm transition-colors"
              >
                Book a demo
              </Link>
            </div>

            {/* Fine print note */}
            <p className="text-[11px] sm:text-xs text-[#8BA4B4] leading-relaxed max-w-lg font-normal">
              Choose Starter or Growth for a 30-day trial. Enterprise is sales-assisted. Prices and availability localize to your market.
            </p>
          </motion.div>

          {/* Right Column: Platform Diagram Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <Image
                src="/pricing-page/pp1.png"
                alt="One Connected Platform - Accounting, Tax, Audit, Business Operations"
                width={560}
                height={320}
                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}