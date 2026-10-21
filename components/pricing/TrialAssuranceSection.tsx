"use client";

import React from "react";
import Image from "next/image";

const assuranceCards = [
  {
    title: "Upgrade",
    description:
      "Upgrades can take effect immediately after successful commercial authorisation. New entitlements become available without rebuilding the workspace.",
  },
  {
    title: "Downgrade",
    description:
      "Downgrades are preflighted and generally take effect at the end of the paid period. Existing records are preserved; features and resources above the lower-plan entitlement become restricted, paused or read-only rather than silently deleted.",
  },
  {
    title: "Cancel",
    description:
      "Renewal and effective dates are shown clearly. There is no hidden cancellation fees and no cancellation fee, unless a contracted Enterprise term explicitly says otherwise.",
  },
  {
    title: "Reactivation",
    description:
      "Restores eligible plan entitlements to the retained workspace after successful payment or approved contract activation.",
  },
];

export default function TrialAssuranceSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, description & Handshake Photo */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#CDA85B]" />
              <span className="text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
                TRIAL ASSURANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#08222F] mb-4 leading-tight">
              Try Starter or Growth for 30 days. Keep your workspace when you subscribe.
            </h2>

            {/* Subtitle / Description */}
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              Your trial uses the selected plan&apos;s eligible capabilities and controlled trial allowances. At the end of the trial, paid service begins only after you explicitly accept the plan and billing terms. If you do not subscribe, the workspace moves to the governed post-trial state under ZoikoSuite retention policy.
            </p>

            {/* Handshake Image Card (pp9.png) */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/8] sm:aspect-[16/7] w-full max-w-xl">
              <Image
                src="/pricing-page/pp9.png"
                alt="Try Starter or Growth for 30 days"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

          {/* Right Column: 4 Policy Guarantee Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4 text-left">
            {assuranceCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-[#CDA85B]/50 transition-colors"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#08222F] mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
