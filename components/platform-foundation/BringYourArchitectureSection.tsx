"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BringYourArchitectureSection() {
  return (
    <section className="lg:hidden w-full bg-[#08222F] text-white py-14 sm:py-20 px-4 sm:px-6 flex justify-center border-t border-[#12364c]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-5 h-[2px] bg-[#c5a059]" />
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
            NEXT STEP
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-xl">
          Bring your architecture, not a feature list
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-[#9ba4b5] leading-relaxed max-w-2xl mb-6">
          The useful conversation starts from which systems stay authoritative, where you require record assertions to sit, what data may move, and which interfaces you would actually build against. We will be explicit about what is published, what is gated and what needs a view.
        </p>

        {/* Bordered Footnote Callout */}
        <div className="border-l-2 border-[#D0AA55] pl-4 py-1 max-w-2xl mb-6">
          <p className="text-[11.5px] text-[#788e9d] leading-relaxed">
            The capability availability, region, developer resources, deployment pattern or product commitment is strictly conditioned on agreed contractual scope and tier status.
          </p>
        </div>

        {/* Action Link */}
        <div>
          <Link
            href="/platform-tour"
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#c5a059] hover:text-[#dfb76c] transition-colors"
          >
            <span>Compare reality to platform</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
