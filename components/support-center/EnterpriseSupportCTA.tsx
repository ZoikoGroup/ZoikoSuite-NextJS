import React from "react";
import { ArrowRight } from "lucide-react";

export default function EnterpriseSupportCTA() {
  return (
    <section className="w-full bg-[#08222F] py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Subtitle with dashes */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-[#D0AA55]"></span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D0AA55]">
            ENTERPRISE SUPPORT
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
          Understand the ZoikoSuite enterprise support model
        </h2>

        {/* Subtitle description */}
        <p className="text-[#9CA3AF] text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
          Support tiers, escalation framework, and administration — shown only
          from approved commercial sources. This section never appears during an
          active support case.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          {/* Primary Button */}
          <a
            href="#"
            className="bg-[#D0AA55] hover:bg-[#8E6A26] text-[#111827] font-semibold text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-lg"
          >
            <span>Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Button */}
          <a
            href="#"
            className="bg-transparent hover:bg-white/5 border border-[#4A7893] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all"
          >
            Resource Center
          </a>
        </div>
      </div>
    </section>
  );
}
