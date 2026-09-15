"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function BookEnterpriseDemoSection() {
  return (
    <section className="w-full bg-[#0F476A] py-16 md:py-24 text-white font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Description */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#A07A2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
              NEXT STEP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15]">
            Ask for the evidence you would need to believe a story
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Since no story is published yet, the more useful conversation is
            about what would convince your evaluation team &mdash; which
            outcome, measured how, over what period, with which exclusions. That
            specification is worth more than a case study written to a template.
          </p>

          <div className="flex items-start gap-3 border-l-2 border-[#A07A2E] pl-4 mt-2">
            <p className="text-xs text-gray-400 leading-relaxed">
              No customer outcome, benchmark, timeline or equivalent result is
              promised. Availability, coverage and implementation scope depend
              on approved architecture and readiness.
            </p>
          </div>
        </div>

        {/* Right Column: Demo Form Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-[#0F172A] shadow-xl">
          <div className="flex flex-col gap-2 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">
              Book enterprise demo
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Nothing on this page was gated behind this form.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            {/* Row 1: Work email & Full name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono font-bold text-[#475569] uppercase">
                  Work email
                </label>
                <input
                  type="email"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm focus:outline-none focus:border-[#0F172A]"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono font-bold text-[#475569] uppercase">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm focus:outline-none focus:border-[#0F172A]"
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 2: Organization & Your role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono font-bold text-[#475569] uppercase">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm focus:outline-none focus:border-[#0F172A]"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono font-bold text-[#475569] uppercase">
                  Your role
                </label>
                <input
                  type="text"
                  defaultValue="CFO / finance"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
                />
              </div>
            </div>

            {/* Row 3: Country or region & Which challenge is closest? */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono font-bold text-[#475569] uppercase">
                  Country or region
                </label>
                <input
                  type="text"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm focus:outline-none focus:border-[#0F172A]"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono font-bold text-[#475569] uppercase">
                  Which challenge is closest?
                </label>
                <input
                  type="text"
                  defaultValue="Financial Governance"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full py-3 px-4 rounded-xl font-semibold text-sm text-[#0F172A] flex items-center justify-center gap-2 transition-all hover:opacity-95 shadow-sm"
              style={{ backgroundColor: "#D4AF37" }}
            >
              <span>Book enterprise demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Privacy note */}
            <p className="text-[11px] text-[#64748B] text-center mt-2 leading-relaxed">
              We use your information to respond to this request. Consent is
              never pre-checked. See the{" "}
              <a href="#" className="underline hover:text-[#0F172A]">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
