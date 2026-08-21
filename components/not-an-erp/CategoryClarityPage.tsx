"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  conventionalErp: string;
  zoikoSuite: string;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: "Core Focus",
    conventionalErp: "Static transactional record-keeping and siloed modules",
    zoikoSuite: "Dynamic governed execution across connected workflows",
  },
  {
    feature: "Policy & Authority",
    conventionalErp:
      "Hardcoded approval rules within rigid organizational boundaries",
    zoikoSuite:
      "Multi-jurisdictional, policy-aware authority with auditable evidence",
  },
  {
    feature: "Intelligence Integration",
    conventionalErp: "Add-on reporting tools or basic un-governed AI features",
    zoikoSuite:
      "Native AI-governed business intelligence with human-in-the-loop controls",
  },
  {
    feature: "Entity Management",
    conventionalErp:
      "Complex, fragmented multi-entity setup requiring custom middleware",
    zoikoSuite:
      "Built-in multi-entity, multi-jurisdictional coordination out of the box",
  },
];

export default function CategoryClarityPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isArchitectModalOpen, setIsArchitectModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#08222F] text-white font-sans antialiased selection:bg-[#c5a059] selection:text-[#08222F]">
      {/* HERO SECTION */}
      <section className="w-full py-16 lg:py-24 px-6 lg:px-24 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Eyebrow Style */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  CATEGORY CLARITY
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.08] text-white mb-6">
                Why ZoikoSuite is not a conventional ERP
              </h1>

              {/* Subtitle / Description */}
              <p className="text-[#9ba4b5] max-w-xl text-base sm:text-lg leading-relaxed mb-8">
                Conventional ERP products generally organize transactional
                modules and records. ZoikoSuite is designed to coordinate
                governed execution across functions, systems, entities,
                jurisdictions, policies, authority, evidence, and governed AI.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#c5a059] text-[#0f172a] font-semibold text-sm hover:bg-[#b08d4b] transition-all duration-200 shadow-lg shadow-[#c5a059]/20 cursor-pointer active:scale-95"
                >
                  Book enterprise demo
                  <ArrowRight className="w-4 h-4 text-[#0f172a]" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsArchitectModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm border border-[#4A7893] hover:bg-[#0f1f2e] transition-all duration-200 cursor-pointer active:scale-95"
                >
                  Talk to a solutions architect
                </button>
              </div>

              {/* Left Bordered Disclaimer */}
              <div className="p-4 border-l-4 border-l-[#c5a059] text-xs text-[#9ba4b5] leading-relaxed rounded-r-md">
                ZoikoSuite may integrate with, complement, consolidate, or
                replace selected processes and systems depending on approved
                implementation scope.
              </div>
            </motion.div>

            {/* Right Column: Hero Split Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="w-full relative overflow-hidden rounded-2xl">
                <img
                  src="/not-an-erp/hero.png"
                  alt="Conventional cluttered ERP stack juxtaposed with modern holographic governed workflow console"
                  className="w-full h-auto object-cover block rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
