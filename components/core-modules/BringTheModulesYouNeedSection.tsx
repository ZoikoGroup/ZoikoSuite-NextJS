"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BringTheModulesYouNeedSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-20 flex justify-center border-t border-[#12364c]">
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
          Bring the modules you need and the systems you keep
        </h2>

        {/* Description Paragraph */}
        <p className="text-xs sm:text-[13.5px] text-[#9ba4b5] leading-relaxed max-w-2xl mb-8">
          One audit conversation start here: which of the ten domains applies to your roles/systems now and later, and where your systems and authority already live. We will be explicit about what is available in your market and plan today.
        </p>

        {/* Bordered Footnote Callout */}
        <div className="border-l-2 border-[#D0AA55] pl-4 py-1 max-w-2xl mb-6">
          <p className="text-[11px] text-[#788e9d] leading-relaxed">
            All modules, licensing plans and 3rd party software referenced are described on this page solely as contextual or prospective features.
          </p>
        </div>

        {/* Action Link: Or see how it fits in the platform tour */}
        <div>
          <Link
            href="/platform-tour"
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#c5a059] hover:text-[#dfb76c] transition-colors"
          >
            <span>Or see how it fits in the platform tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
