"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroBadges = [
  "MULTI-ENTITY",
  "MULTI-JURISDICTION",
  "AUDIT-READY ARCHITECTURE",
  "RESIDENCY-AWARE CONTROLS",
] as const;

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Main Grid: Left Content & Right Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title, Subtitle, CTAs, Badges & Footer Note */}
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
                Governed Business Operations Intelligence
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.08] text-white mb-6">
              Govern business operations from one intelligent platform
            </h1>

            {/* Subtitle Description */}
            <p className="text-[#9ba4b5] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Connect finance, workforce, legal, tax, compliance, procurement,
              evidence, analytics, and governed AI through policy-aware
              workflows built for multi-entity, multi-jurisdiction
              organizations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D0AA55] text-[#07131d] font-semibold text-sm hover:bg-[#c29c4c] transition-all duration-200 shadow-lg shadow-[#D0AA55]/20"
              >
                Book enterprise demo
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent border border-[#1e3a5f] text-white font-semibold text-sm hover:bg-[#0b1c2d] transition-all duration-200 shadow-sm"
              >
                Talk to a solutions architect
              </a>
            </div>

            {/* Platform Tour Text Link */}
            <div className="mb-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c5a059] hover:underline"
              >
                View platform tour
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Badges Grid / Row */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {heroBadges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-[#0b1c2d] border border-[#1e3a5f] rounded-lg px-3 py-1.5 text-[10px] font-semibold tracking-[1px] text-[#9ba4b5]"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Bottom Disclaimer Note with Left Golden Accent Border */}
            <div
              className="pl-3 py-1 border-l-3 border-l-[#D0AA55]"
            >
              <p className="text-[#9ba4b5] text-xs leading-relaxed">
                Capabilities, jurisdictions, integrations, and deployment
                options vary by market, configuration, subscription, and
                implementation status.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Holographic Platform Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative w-full rounded-xl"
          >
            <img
              src="/platform-overview/hero.png"
              alt="Executives collaborating around a holographic interface of governed business operations intelligence"
              className="w-full h-auto object-cover block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
