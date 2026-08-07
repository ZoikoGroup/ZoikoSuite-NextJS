"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function NextStepSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content Side */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
              NEXT STEP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-110 font-bold tracking-tight leading-[1.1] text-white mb-6">
            See what governed business operations intelligence could look like
            in your organization
          </h2>

          <p className="text-xs sm:text-sm text-[#CFDEE7] leading-relaxed mb-8">
            Explore how ZoikoSuite can connect operational context, governance,
            authority, evidence, intelligence, and governed AI across your
            entities, jurisdictions, functions, and systems.
          </p>

          <div className="flex items-center gap-3 mb-8 p-2 border-l-3 border-l-[#D0AA55]">
            <span className="text-xs text-[#CFDEE7]">
              Built for multi-entity, multi-jurisdiction, regulated, and
              operationally complex organizations.
            </span>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D0AA55] hover:text-[#e2be6b] transition-colors"
          >
            Talk to a solutions architect
            <ArrowRight className="w-4 h-4 text-[#D0AA55]" />
          </a>
        </div>

        {/* Right Image Display Container */}
        <div className="lg:col-span-6 w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a3848] bg-[#0c2735]">
          <img
            src="/governed-business-operations/13.png"
            alt="Business operations intelligence dashboard view"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
