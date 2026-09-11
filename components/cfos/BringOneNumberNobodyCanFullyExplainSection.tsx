"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BringOneNumberNobodyCanFullyExplainSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#1E5B80]">
      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text & Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              NEXT STEP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15] mb-5">
            Bring one number nobody can fully explain
          </h2>

          <p className="text-sm sm:text-base text-[#D4E4ED] leading-relaxed mb-6">
            A cash figure whose definition varies by who you ask. A group total that quietly converts stale data. An approval nobody can reconstruct. We will trace one of those through the definition, source, authority and evidence model with you.
          </p>

          {/* Quote Callout */}
          <div className="border-l-2 border-[#c5a059] pl-4 py-1">
            <p className="text-xs sm:text-[13px] text-[#D4E4ED]/90 leading-relaxed font-light">
              No capability, integration, source ownership, freshness, jurisdiction coverage or savings commitment is made outside an approved commercial document.
            </p>
          </div>

          {/* Inspect Governed Finance Decision Link */}
          <div className="mt-6">
            <Link
              href="/platform-tour"
              className="text-xs sm:text-sm font-medium text-[#D0AA55] hover:underline inline-flex items-center gap-1.5"
            >
              Or inspect a governed finance decision in the tour →
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Visual Container (strictly desktop only, hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex lg:col-span-6 justify-center"
        >
          <div className="relative w-full max-w-[540px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-[#1E5B80] bg-[#0A3048]">
            <Image
              src="/cfos/cf7.png"
              alt="Finance leadership analyzing unexplained balance with interactive evidence verification diagram"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 540px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
