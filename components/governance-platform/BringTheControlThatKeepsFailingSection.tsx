"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BringTheControlThatKeepsFailingSection() {
  return (
    <section className="lg:hidden w-full bg-[#08222F] text-white py-16 sm:py-20 px-4 sm:px-6 flex justify-center border-t border-[#12364c]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-5 h-[2px] bg-[#c5a059]" />
          <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
            NEXT STEP
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14] mb-6 max-w-xl">
          Bring the control that keeps failing
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-[13.5px] text-[#9ba4b5] leading-relaxed max-w-2xl mb-8">
          The most useful conversation starts from a specific control that is hard
          to evidence today — an approval nobody can prove occurred, a policy
          nobody can evaluate synchronously, an exception that went unrecorded. We
          will be candid about what is configurable and what needs validation.
        </p>

        {/* Bordered Footnote Callout */}
        <div className="border-l-2 border-[#D0AA55] pl-4 py-1 max-w-2xl mb-6">
          <p className="text-[11.5px] text-[#788e9d] leading-relaxed">
            All capability availability, jurisdiction coverage and implementation
            behavior depend on approved product and deployment status. No
            certification, guaranteed compliance or regulated-outcome claim is
            made on this page.
          </p>
        </div>

        {/* Action Link */}
        <div>
          <Link
            href="/platform-tour"
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#c5a059] hover:text-[#dfb76c] transition-colors"
          >
            <span>Bring your hard control to the platform tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
