"use client";

import React from "react";
import Image from "next/image";

export default function TrustPoliciesHeroSection() {
  return (
    <section
      className="w-full text-white font-sans relative overflow-hidden py-16 lg:py-24 px-6 md:px-14 flex justify-center"
      style={{
        background: "linear-gradient(to bottom, #08222F, #0A304B)",
      }}
    >
      <div className="max-w-[1320px] w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        {/* Left Content */}
        <div className="flex flex-col items-start max-w-[633px] z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 pt-2.5 mb-4">
            <span className="w-4 h-[1.5px] bg-[#D0AA55]" />
            <span
              className="text-xs font-medium tracking-[0.15em] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#D0AA55",
              }}
            >
              Policies
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.19] tracking-tight text-[#EDE9E1]"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Know which policy is
            <br />
            current, what it
            <br />
            governs, and what
            <br />
            changed.
          </h1>

          {/* Subtext */}
          <p
            className="w-full text-lg font-normal leading-7 text-[#9DB4C4] mt-4"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Review ZoikoSuite policy governance through versioned records with
            ownership, approval, scope, effective dates, review status, change
            history, and controlled access to supporting evidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <a
              href="#registry"
              className="inline-flex items-center justify-center gap-2 px-6 min-h-11 rounded-full text-base font-semibold transition-all hover:opacity-90"
              style={{
                fontFamily: "'Archivo', sans-serif",
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
                color: "#231B0D",
              }}
            >
              Review policies
              <span
                className="text-xs font-semibold opacity-90"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                →
              </span>
            </a>
            <a
              href="#restricted-evidence"
              className="inline-flex items-center justify-center px-6 min-h-11 rounded-full text-base font-semibold transition-all hover:border-gray-400"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#E8E4DC",
                border: "1px solid #3E5A6B",
              }}
            >
              Request policy evidence
            </a>
          </div>
        </div>

        {/* Hero Artwork — exact 653x637 dimensions */}
        <div className="hidden lg:block shrink-0 w-[653px] h-[637px] rounded-2xl shadow-[0px_30px_70px_-30px_rgba(0,0,0,0.60)] overflow-hidden relative">
          <Image
            src="/trust-policies/po.png"
            alt="Policy Governance"
            fill
            priority
            sizes="653px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}