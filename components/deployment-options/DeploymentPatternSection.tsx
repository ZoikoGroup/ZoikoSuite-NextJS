"use client";

import React from "react";
import Image from "next/image";

interface BadgeItem {
  label: string;
}

const BADGES: BadgeItem[] = [
  { label: "QUALIFIED AVAILABILITY" },
  { label: "EXPLICIT SHARED RESPONSIBILITY" },
  { label: "EVIDENCE-BACKED ACCEPTANCE" },
  { label: "CHANGE-CONTROLLED OPERATIONS" },
];

export default function DeploymentPatternSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#D0AA55]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
              DEPLOYMENT OPTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[60px] font-bold tracking-tight leading-[1.15]">
            Choose a deployment pattern with verified controls and
            responsibilities
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Evaluate tenancy, data residency, key control, network connectivity,
            administrative access, recovery, updates, support, migration, and
            evidence against your organization&apos;s approved requirements.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#D0AA55] hover:bg-[#b89445] text-[#0F172A] font-bold py-3.5 px-6 rounded-full transition-all shadow-sm flex items-center gap-2 cursor-pointer text-sm">
              <span>Talk to a solutions architect</span>
              <span>&rarr;</span>
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold py-3.5 px-6 rounded-full transition-all cursor-pointer text-sm">
              Book enterprise demo
            </button>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
            {BADGES.map((badge, index) => (
              <div
                key={index}
                className="border border-[#2E6D93] rounded-lg px-3 py-2 text-[10px] font-mono font-bold tracking-wider text-gray-300 uppercase flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D0AA55]" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          <p className="text-[12px] border-l-2 border-l-[#D0AA55] p-4 text-gray-400 leading-relaxed pt-2">
            Deployment patterns, regions, controls, integrations, recovery
            targets, support models, and key options vary by market,
            subscription, configuration, and implementation status.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6 w-full h-[450px] sm:h-[900px] relative rounded-2xl overflow-hidden">
          <Image
            src="/deployment/4.png"
            alt="Deployment pattern and verified controls illustration"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
