"use client";

import React from "react";

export default function WhatIsZoikoSuiteSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-5xl mx-auto px-4">
        {/* Card Container with Golden/Bronze Border */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D0AA55] border-t-4 border-t-[#D0AA55] shadow-sm text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4">
            What is ZoikoSuite?
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            ZoikoSuite is a governed business operations intelligence platform
            that connects operational context, policy and obligations, delegated
            authority, accountable human decisions, execution in approved
            systems, preserved evidence and controlled intelligence. It is
            designed to be evaluated and adopted alongside the systems an
            organization already runs, rather than as a replacement programme.
          </p>
        </div>
      </div>
    </section>
  );
}
