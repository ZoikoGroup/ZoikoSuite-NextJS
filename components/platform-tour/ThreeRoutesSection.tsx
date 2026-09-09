"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ThreeRoutesSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 lg:py-24 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-[2px] bg-[#c5a059]" />
          <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
            CHOOSE YOUR NEXT STEP
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.12] mb-10 max-w-xl">
          Three routes, by what you are actually doing
        </h2>

        {/* 3 Routes Stack */}
        <div className="flex flex-col gap-4 max-w-[840px] mb-8">
          {/* Card 1: CONTINUE EXPLORING */}
          <div className="rounded-2xl border border-[#1b3a4f] bg-[#0c1f2b] p-6 sm:p-7 flex flex-col items-start shadow-sm">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#6c8899] uppercase mb-2">
              CONTINUE EXPLORING
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5">
              No commercial requirement
            </h3>
            <p className="text-[13px] text-[#8fa7b7] leading-relaxed mb-5">
              Switch path, rerun step by step, or read the full transcript. Nothing is gated.
            </p>
            <a
              href="#choose-tour-path"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#2b516b] bg-transparent text-white text-xs font-semibold hover:bg-[#123146] transition-colors"
            >
              Compare paths
            </a>
          </div>

          {/* Card 2: EVALUATE A SCENARIO AND TEAM */}
          <div className="rounded-2xl border border-[#1b3a4f] bg-[#0c1f2b] p-6 sm:p-7 flex flex-col items-start shadow-sm">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#6c8899] uppercase mb-2">
              EVALUATE A SCENARIO AND TEAM
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5">
              Book enterprise demo
            </h3>
            <p className="text-[13px] text-[#8fa7b7] leading-relaxed mb-4">
              See the platform against your own functions, rules and operational entities.
            </p>
            <a
              href="/platform/deployment"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D0AA55] hover:underline"
            >
              <span>Confirm your scenario with us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: DEEPEN ARCHITECTURE */}
          <div className="rounded-2xl border border-[#1b3a4f] bg-[#0c1f2b] p-6 sm:p-7 flex flex-col items-start shadow-sm">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#6c8899] uppercase mb-2">
              DEEPEN ARCHITECTURE
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5">
              Talk to a solutions architect
            </h3>
            <p className="text-[13px] text-[#8fa7b7] leading-relaxed mb-4">
              Systems, integration, deployment, data residency, registration and technical diligence.
            </p>
            <a
              href="/platform/deployment"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D0AA55] hover:underline"
            >
              <span>Bring a scenario brief with you</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Left Bordered Disclaimer Callout */}
        <div className="pl-4 py-1 border-l-2 border-[#1e587a] max-w-[840px]">
          <p className="text-xs text-[#7e99ab] leading-relaxed">
            Existing customers can reach Documentation, Support and System Status from the Trust and Resources sections without a sales form.
          </p>
        </div>
      </div>
    </section>
  );
}
