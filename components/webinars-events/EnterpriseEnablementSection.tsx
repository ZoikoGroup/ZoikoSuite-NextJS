import React from "react";
import Link from "next/link";

export default function EnterpriseEnablementSection() {
  return (
    <section className="w-full bg-[#08222f] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-[2px] bg-[#d0aa55]" />
          <span className="font-mono text-[11.5px] font-medium tracking-[0.15em] uppercase text-[#d0aa55]">
            ENTERPRISE TEAMS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-semibold text-[#e4edf2] tracking-tight mb-3">
          Bring the conversation to your team
        </h2>

        {/* Lede */}
        <p className="text-[15.8px] text-[#a9bdc8] max-w-xl mb-8 leading-relaxed">
          Talk to sales about bringing this topic to your organization.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#d0aa55] hover:bg-[#c29b38] text-[#20180a] font-semibold text-[15px] border border-[#d0aa55] transition-colors"
          >
            <span>Talk to sales</span>
            <span className="font-mono text-sm font-semibold">→</span>
          </Link>

          <Link
            href="#catalog"
            className="inline-flex items-center px-6 py-2.5 rounded border border-[#4a7893] hover:bg-[#4a7893]/15 text-[#e4eff5] font-semibold text-[15px] transition-colors"
          >
            Browse more events
          </Link>
        </div>
      </div>
    </section>
  );
}
