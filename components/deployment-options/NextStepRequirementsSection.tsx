"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NextStepRequirementsSection() {
  return (
    <section className="w-full bg-[#0F476A] py-16 md:py-24 text-white font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (col-span-5 or similar) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#D0AA55]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
                NEXT STEP
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-white">
              Bring your requirements, not a shortlist
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The most productive first conversation starts from your residency,
              isolation, key, access, recovery, and change requirements &mdash;
              including the ones that conflict with each other. We will tell you
              plainly which are verified, which need configuration, and which
              are not available.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-[#D0AA55] pl-4 py-1 my-2">
              <p className="text-[11px] sm:text-xs text-slate-400 italic leading-relaxed">
                No pricing, lead time, or availability commitment is made
                outside an approved commercial document.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#build-summary"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D0AA55] hover:text-[#e0bc6b] transition-colors group"
              >
                <span>Build a requirement summary first</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Graphic / Image (col-span-7) */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="w-full max-w-2xl">
              <Image
                src="/deployment/18.png"
                alt="Bring your requirements board and laptop workspace graphic"
                width={900}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
