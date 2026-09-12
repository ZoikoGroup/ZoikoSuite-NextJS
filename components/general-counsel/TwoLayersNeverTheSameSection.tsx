"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TwoLayersNeverTheSameSection() {
  return (
    <section id="authority-model" className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#14425a]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                AUTHORITY MODEL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Two layers that are never the same thing
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end text-left"
          >
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A permission in software is not corporate authority. Conflating the two is the most common governance error in legal tooling, so the model keeps them structurally apart.
            </p>
          </motion.div>
        </div>

        {/* Graphic Presentation (gc3.png) - DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-[#061822]"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[2.1/1]">
            <Image
              src="/general-counsel/gc3.png"
              alt="Two layers that are never the same thing: permission vs authority"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1240px) 100vw, 1240px"
              priority
            />
          </div>
        </motion.div>

        {/* Mobile View: High-Fidelity Multi-Layer Authority Breakdown Cards */}
        <div className="block lg:hidden w-full flex flex-col gap-4 text-left">
          {/* Card 1: LAYER 01 Corporate / legal authority */}
          <div className="w-full rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm overflow-hidden">
            {/* Top Bar Header */}
            <div className="bg-[#EBF2F7] px-4 py-2.5 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
                LAYER 01
              </span>
              <span className="text-xs font-bold text-slate-900 tracking-tight">
                Corporate / legal authority
              </span>
            </div>

            {/* Subtitle */}
            <div className="px-4 pt-3 pb-2">
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Whether an individual or role has authority under an approved governance source
              </p>
            </div>

            {/* Key-Value Attributes List */}
            <div className="divide-y divide-slate-100 px-4 py-1 text-xs">
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  AUTHORITY SOURCE
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  Board delegation schedule §4
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  HOLDER
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  General Counsel
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  SCOPE
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  Contract approval · all jurisdictions
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  LIMIT / CONDITION
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  Orders above value threshold, escalates change of control
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  GOVERNING RULE
                </span>
                <span className="text-[11px] font-mono text-slate-700 font-medium text-right sm:text-left">
                  GC-AUTH-2024-01 | Rev 2024
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  DELEGATION
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  Cannot exceed the delegator&apos;s own scope
                </span>
              </div>
              <div className="py-2 flex items-center justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  STATUS
                </span>
                <span className="px-2.5 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border border-rose-300 bg-rose-50 text-rose-800">
                  EXTERNAL GOVERNANCE SOURCE SATISFIED
                </span>
              </div>
            </div>

            {/* Critical Rule Alert Box */}
            <div className="m-3 p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-left">
              <p className="text-[11px] text-rose-900 leading-relaxed font-normal">
                <strong className="font-semibold text-rose-950">Critical rule:</strong> ZoikoSuite does not create this authority. It reads and evaluates a source that must be valid in its own right.
              </p>
            </div>
          </div>

          {/* Card 2: LAYER 02 ZoikoSuite permission */}
          <div className="w-full rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm overflow-hidden">
            {/* Top Bar Header */}
            <div className="bg-[#FFFDF5] px-4 py-2.5 border-b border-amber-200/70 flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
                LAYER 02
              </span>
              <span className="text-xs font-bold text-slate-900 tracking-tight">
                ZoikoSuite permission
              </span>
            </div>

            {/* Subtitle */}
            <div className="px-4 pt-3 pb-2">
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Whether the user can view or operate the product control
              </p>
            </div>

            {/* Key-Value Attributes List */}
            <div className="divide-y divide-slate-100 px-4 py-1 text-xs">
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  ROLE
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  Legal reviewer &mdash; General Counsel
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  PERMISSION SET
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  View contracts &middot; record legal outcome &middot; request evidence
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  STATUS SCOPE
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  UK and EU &middot; legal records within permission
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  ACTION PERMISSION
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  Review &middot; comment &middot; record outcome
                </span>
              </div>
              <div className="py-2 flex items-start justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  NOT HELD
                </span>
                <span className="text-[11px] text-slate-800 font-medium text-right sm:text-left">
                  Execute &middot; override &middot; admin configuration
                </span>
              </div>
              <div className="py-2 flex items-center justify-between gap-3">
                <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider shrink-0 w-[110px]">
                  STATUS
                </span>
                <span className="px-2.5 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border border-emerald-400 bg-emerald-50 text-emerald-800">
                  ✔ SATISFIED
                </span>
              </div>
            </div>

            {/* Critical Rule Alert Box */}
            <div className="m-3 p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-left">
              <p className="text-[11px] text-rose-900 leading-relaxed font-normal">
                <strong className="font-semibold text-rose-950">Critical rule:</strong> Permission does not create corporate or legal authority. Holding the control does not mean holding the right to decide.
              </p>
            </div>
          </div>

          {/* Card 3: LAYER 03 — ACTION REQUIREMENT */}
          <div className="rounded-2xl border border-[#c5a059]/70 bg-[#072333] p-4 text-left shadow-lg">
            <span className="text-[10px] font-mono font-bold text-[#c5a059] tracking-wider uppercase block mb-2">
              LAYER 03 &mdash; ACTION REQUIREMENT
            </span>
            <p className="text-[11.5px] text-slate-200 leading-relaxed font-normal">
              A material product action is attempted only when <strong className="text-white font-semibold underline decoration-[#c5a059]">both</strong> layers are satisfied and the policy and evidence conditions are clear. In the example above, permission is satisfied but the authority condition is breached &mdash; so approval is blocked and the action routes to review instead. Missing either layer blocks as routine. There is no silent fallback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
