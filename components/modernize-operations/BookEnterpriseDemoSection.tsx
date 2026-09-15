"use client";

import React from "react";

export default function BookEnterpriseDemoSection() {
  return (
    <section className="w-full bg-[#0F476A] py-16 md:py-24 text-white font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Title, Description, and Disclaimer */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#D0AA55]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
              NEXT STEP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight leading-[1.15]">
            Start from one scope, not a programme
          </h2>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            Pick a single process where the current operating pattern is causing
            real difficulty. We will work through which target outcome fits,
            which system stays authoritative, what would have to reconcile, and
            what your recovery position would be &mdash; before anyone talks
            about a programme.
          </p>

          <div className="flex items-start gap-4 mt-4 border-l-2 border-[#D0AA55] pl-4 py-1">
            <p className="text-xs text-gray-300 leading-relaxed">
              No transformation outcome, timeline, cost, saving, capability
              availability or replacement scope is committed outside an approved
              commercial and implementation document.
            </p>
          </div>
        </div>

        {/* Right Column: Form Container */}
        <div className="lg:col-span-6 bg-white text-[#0F172A] rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Book enterprise demo
            </h3>
            <p className="text-xs sm:text-sm text-[#475569]">
              Nothing on this page was gated behind this form.
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0F172A]">
                  Work email
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-[#DBE3E8] rounded-lg px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0F172A]">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#DBE3E8] rounded-lg px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0F172A]">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#DBE3E8] rounded-lg px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0F172A]">
                  Your role
                </label>
                <input
                  type="text"
                  defaultValue="CIO / architecture"
                  className="w-full bg-white border border-[#DBE3E8] rounded-lg px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0F172A]">
                  Country or region
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#DBE3E8] rounded-lg px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0F172A]">
                  Which path is closest?
                </label>
                <input
                  type="text"
                  defaultValue="Replace fragmented ERP and HCM stacks"
                  className="w-full bg-white border border-[#DBE3E8] rounded-lg px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#D0AA55] hover:bg-[#b89445] text-[#0F172A] font-bold py-3.5 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <span>Book enterprise demo</span>
              <span>&rarr;</span>
            </button>
          </form>

          <p className="text-[11px] text-[#475569] leading-relaxed">
            We use your information to respond to this request. Consent is never
            pre-checked. See the{" "}
            <a href="#privacy" className="underline hover:text-[#0F172A]">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
