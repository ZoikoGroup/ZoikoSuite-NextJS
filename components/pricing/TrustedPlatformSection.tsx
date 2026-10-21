"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const baselineFeatures = [
  "Secure tenant isolation",
  "Encryption",
  "MFA capability",
  "Core audit logging",
  "Mobile/web access",
  "Data export controls",
  "Support access",
  "Privacy and security controls",
];

export default function TrustedPlatformSection() {
  return (
    <section className="relative w-full bg-[#FBF9F4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 8 baseline feature cards */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-2">
              {baselineFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E5E0D8] p-3.5 sm:p-4 flex items-center gap-3 shadow-xs hover:border-[#C59A41]/50 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#0284C7] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#08222F]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtext note */}
            <p className="text-[11px] sm:text-xs text-slate-500 font-normal mt-3">
              Advanced enterprise identity and governance can vary by plan. Baseline protection cannot.
            </p>
          </div>

          {/* Right Column: Platform photo card with overlay */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg w-full aspect-[4/3] sm:aspect-[16/11] border border-slate-200">
              <Image
                src="/pricing-page/pp2.png"
                alt="Built on the same trusted platform foundation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-[2px] bg-[#CDA85B]" />
                  <span className="text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
                    EVERY PLAN
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2">
                  Built on the same trusted platform foundation.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal">
                  Baseline protection is <span className="underline underline-offset-2 text-white">never</span> paywalled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
