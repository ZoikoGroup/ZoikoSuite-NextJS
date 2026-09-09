"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TwoRoutesEvaluationSection() {
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
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14] mb-8">
          Two routes,
          <br />
          depending on what
          <br />
          you are evaluating
        </h2>

        {/* 2 Routes Cards */}
        <div className="space-y-4 max-w-2xl mb-6">
          {/* Card 1 */}
          <div className="rounded-xl border border-[#1a3a4f] bg-[#0c2a3b] p-5 sm:p-6 shadow-xs hover:border-[#244f6d] transition-colors">
            <span className="text-[10px] font-mono font-bold tracking-[0.16em] text-[#c5a059] uppercase block mb-2">
              SEE WHERE IT FITS · PRODUCT EVALUATION
            </span>
            <p className="text-xs sm:text-[13px] text-[#9ba4b5] leading-relaxed">
              See Operating Intelligence the context of your organisation, roles and operational priorities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-[#1a3a4f] bg-[#0c2a3b] p-5 sm:p-6 shadow-xs hover:border-[#244f6d] transition-colors">
            <span className="text-[10px] font-mono font-bold tracking-[0.16em] text-[#c5a059] uppercase block mb-2">
              ARCHITECTURAL INTEGRATION OR DEPLOYMENT EVALUATION
            </span>
            <p className="text-xs sm:text-[13px] text-[#9ba4b5] leading-relaxed">
              Discuss systems of record, integration patterns, source governance, deployment and scope.
            </p>
          </div>
        </div>

        {/* Explore Platform Tour Link */}
        <div className="mb-6">
          <Link
            href="/platform-tour"
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#c5a059] hover:text-[#dfb76c] transition-colors"
          >
            Explore the broader platform tour
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Existing Users Notice */}
        <div className="border-l-2 border-[#1a3a4f] pl-4 py-1 max-w-2xl">
          <p className="text-[11px] text-[#788e9d] leading-relaxed">
            Existing users should reach Documentation, Support and System Status from the Trust and User Resource Footnote — never through this form.
          </p>
        </div>
      </div>
    </section>
  );
}
