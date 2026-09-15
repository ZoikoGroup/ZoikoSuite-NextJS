"use client";

import React from "react";

export default function WhatZoikoSuiteDoesForBanksSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-6 lg:px-12">
      <div className="w-full max-w-5xl mx-auto">
        {/* Card Container with Golden/Bronze Border */}
        <div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          style={{
            border: "1px solid #D0AA55",
            borderTop: "3px solid #D0AA55",
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-4">
            What does ZoikoSuite do for banks?
          </h2>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            ZoikoSuite is a governance-first enterprise operations layer that
            sits{" "}
            <strong className="text-[#0F172A] font-semibold">around</strong>{" "}
            existing banking systems. It governs the internal operating actions
            that create risk, accountability, evidence and regulatory exposure
            &mdash; finance, workforce, legal and third-party, obligations,
            approvals and evidence &mdash; across banking entities and
            jurisdictions. The banking core and specialist risk systems remain
            external systems that ZoikoSuite integrates with or receives context
            from.
          </p>
        </div>
      </div>
    </section>
  );
}
