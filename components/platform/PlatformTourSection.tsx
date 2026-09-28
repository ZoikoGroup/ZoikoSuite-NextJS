"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface TourCard {
  number: string;
  title: string;
  description: string;
  actionText: string;
}

const tourCards: TourCard[] = [
  {
    number: "1",
    title: "Foundation",
    description:
      "See the shared platform architecture and services that support ZoikoSuite.",
    actionText: "Explore Foundation",
  },
  {
    number: "2",
    title: "Governance",
    description:
      "See how policies, approvals, controls, exceptions, and evidence connect to work.",
    actionText: "Explore Governance",
  },
  {
    number: "3",
    title: "Modules",
    description: "Understand how modular capabilities extend the platform.",
    actionText: "Explore Core Modules",
  },
  {
    number: "4",
    title: "Context & Evidence",
    description:
      "See how entity, jurisdiction, residency, source, and status remain visible when relevant.",
    actionText: "Continue Tour",
  },
  {
    number: "5",
    title: "Operating Intelligence",
    description:
      "See how signals, exceptions, evidence, and action paths come together.",
    actionText: "Explore Operating Intelligence",
  },
  {
    number: "6",
    title: "Deployment & Trust",
    description:
      "Understand coexistence, integration, shadow mode, and trust evidence.",
    actionText: "Book a demo",
  },
];

export default function PlatformTourSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#C59B3F" }}
            ></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#C59B3F" }}
            >
              PLATFORM TOUR
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            See how the platform fits together before you book a meeting.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Take a structured walkthrough of ZoikoSuite&apos;s key capabilities,
            workflows, and platform areas — from foundation and governance
            through modules, evidence, and operating intelligence.
          </p>
        </div>

        {/* Cards Grid Layout (3x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F]"
            >
              <div>
                {/* Number Badge */}
                <div className="w-7 h-7 rounded-full bg-[#08222F] text-white text-xs font-mono font-bold flex items-center justify-center mb-4 shadow-sm">
                  {item.number}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#08222F] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-gray-600 leading-relaxed font-mono mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Link / Footer */}
              <div className="">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F476A] hover:text-[#C59B3F] transition-colors group"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
