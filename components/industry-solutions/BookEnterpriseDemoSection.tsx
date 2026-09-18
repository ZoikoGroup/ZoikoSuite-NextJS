"use client";

import React from "react";

export default function BookEnterpriseDemoSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Area */}
        <div className="lg:col-span-6 flex flex-col items-start">
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
              NEXT STEP
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            Name the sector, the challenge, and what must not change
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-8">
            The most productive first conversation covers three things: which
            operating challenge recurs most, which specialist systems must stay
            authoritative, and which constraint — residency, security review,
            accessibility, procurement — would stop a deployment. Those three
            shape everything else.
          </p>

          {/* Footer Note with Left Border */}
          <div className="border-l-2 border-[#C59B3F] pl-4 py-1">
            <p className="text-xs text-gray-400 leading-relaxed">
              No certification, compliance, capability availability,
              jurisdiction coverage, integration status, timeline or outcome is
              committed outside an approved commercial document.
            </p>
          </div>
        </div>

        {/* Right Form Card Area */}
        <div className="lg:col-span-6 bg-white text-[#08222F] rounded-2xl p-8 lg:p-10 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#08222F] mb-1">
              Book enterprise demo
            </h3>
            <p className="text-xs text-gray-500">
              Every section of this page was readable without it.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            {/* Row 1: Work email & Full name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-600 font-mono">
                  Work email
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#08222F]"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-600 font-mono">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#08222F]"
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 2: Organization & Your industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-600 font-mono">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#08222F]"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-600 font-mono">
                  Your industry
                </label>
                <input
                  type="text"
                  defaultValue="Financial service"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#08222F]"
                />
              </div>
            </div>

            {/* Row 3: Priority challenge & Systems that must stay authoritative */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9.5px] font-bold uppercase tracking-wider text-gray-600 font-mono">
                  Priority challenge
                </label>
                <input
                  type="text"
                  defaultValue="Multi-entity & cross-border"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#08222F]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9.5px] font-bold uppercase tracking-wider text-gray-600 font-mono">
                  Systems that must stay authoritative
                </label>
                <input
                  type="text"
                  placeholder="Category names are fine"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#08222F]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-[#D4AF37] hover:bg-[#C59B3F] text-[#08222F] font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              Book enterprise demo →
            </button>

            {/* Terms / Privacy Policy */}
            <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
              We use your information to respond to this request. Consent is
              never pre-checked. See the{" "}
              <a href="#" className="underline hover:text-[#08222F]">
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
