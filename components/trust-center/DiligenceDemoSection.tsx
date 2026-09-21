"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function DiligenceDemoSection() {
  return (
    <section className="w-full bg-[#0F476A] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information & Eyebrow */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                NEXT STEP
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
              Diligence first, demo second
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#93A2B8] text-[15px] leading-relaxed mb-10 max-w-lg">
              If your security or procurement team needs evidence, start a
              review — it routes to the actual documents rather than a sales
              conversation. If you have what you need and want to see the
              product govern a real decision, book a demo.
            </p>

            {/* Bottom Callout / Disclaimer */}
            <div className="flex items-start gap-3 border-l border-[#C9B07A] pl-4 max-w-md">
              <p className="text-[12px] text-[#93A2B8] leading-relaxed">
                No certification, compliance status, uptime commitment,
                residency guarantee or capability availability is committed
                outside an approved commercial document.
              </p>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-6 bg-white text-[#111827] rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#111827] mb-1">
                Book enterprise demo
              </h3>
              <p className="text-[14px] text-[#6B7280]">
                Every section of this page was readable without it.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Work email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#374151]">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full h-11 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>

                {/* Full name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#374151]">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full h-11 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Organization */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#374151]">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full h-11 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>

                {/* Your role */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#374151]">
                    Your role
                  </label>
                  <input
                    type="text"
                    defaultValue="CFO / finance"
                    className="w-full h-11 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>
              </div>

              {/* Primary question */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#374151]">
                  Primary question
                </label>
                <input
                  type="text"
                  defaultValue="Security and trust posture"
                  className="w-full h-11 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#C59B3F] text-[#111827] font-semibold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <span>Book enterprise demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Footer Note */}
              <div className="pt-2">
                <p className="text-[12px] text-[#6B7280] leading-relaxed">
                  We use your information to respond to this request. Consent is
                  never pre-checked. See the{" "}
                  <a href="#" className="underline hover:text-[#111827]">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
