"use client";

import React from "react";

export default function WhatZoikoSuiteDoesForInsurersSection() {
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
            What does ZoikoSuite do for insurers?
          </h2>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            ZoikoSuite is a governance-first enterprise operations layer that
            sits around an insurer&apos;s existing systems of record. It governs
            the cross-functional actions that create accountability, regulatory
            exposure, operational risk and evidence requirements &mdash;
            finance, workforce, legal and distribution, third-party obligations,
            approvals and evidence &mdash; across entities, jurisdictions and
            business lines. Policy, claims and billing systems remain the
            validated systems of record.
          </p>
        </div>
      </div>
    </section>
  );
}
