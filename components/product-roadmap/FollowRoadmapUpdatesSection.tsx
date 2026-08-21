"use client";

import React from "react";
import { motion } from "framer-motion";

interface PreferenceCard {
  label: string;
  description: string;
}

const preferenceCards: PreferenceCard[] = [
  {
    label: "WHAT A NOTIFICATION CONTAINS",
    description:
      "The record title, a change summary, the current status, the applicable qualification, the date, and a link. Nothing else — no promotional content bundled into a roadmap update.",
  },
  {
    label: "SUPPRESSION",
    description:
      "You will not be notified about internal-only work, unapproved records, or trivial editorial changes. Material status, scope, and target changes only.",
  },
  {
    label: "IDENTITY",
    description:
      "A business email address or your authenticated preference centre. There is no hidden cross-site profiling behind this form.",
  },
];

export default function FollowRoadmapUpdatesSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: Left Title + Eyebrow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                FOLLOW ROADMAP UPDATES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] max-w-xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Choose exactly what you receive
            </h2>
          </motion.div>
        </div>

        {/* Content Grid: Left Cards + Right Graphic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Preference Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col space-y-4"
          >
            {preferenceCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white/70 rounded-2xl p-6 border border-[#E2E8F0] shadow-xs flex flex-col space-y-2.5"
              >
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#94A3B8] uppercase block">
                  {card.label}
                </span>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Side: Graphic Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div>
              <img
                src="/product-roadmap/p8.png"
                alt="3D illustration showing notification preferences, security shield, and email delivery settings"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
