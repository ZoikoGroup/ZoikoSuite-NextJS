"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ObtainItem {
  boldText: string;
  normalText: string;
}

const obtainItems: ObtainItem[] = [
  {
    boldText: "Completed security questionnaire",
    normalText: "· scoped to your deployment",
  },
  {
    boldText: "Architecture brief",
    normalText: "· source ownership, data flows, integration contracts",
  },
  {
    boldText: "Test evidence",
    normalText: "· where it exists, under NDA, with scope and date stated",
  },
  {
    boldText: "Residency answer",
    normalText: "· per lifecycle stage for your deployment option",
  },
  {
    boldText: "Policy pack",
    normalText: "· DPA, subprocessors, retention and disclosure routes",
  },
  {
    boldText: "Gap statement",
    normalText: "· what is not available, said directly",
  },
];

export default function SecurityReviewHandoff() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                SECURITY REVIEW AND PROCUREMENT HANDOFF
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Route qualified diligence to the right evidence
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Minimum context so the response addresses your actual scope rather
              than a generic pack. Controlled-access evidence is released under
              NDA.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What a security review can obtain */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-6">
              WHAT A SECURITY REVIEW CAN OBTAIN
            </h3>
            <ul className="space-y-4">
              {obtainItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[14px] leading-relaxed"
                >
                  <span className="inline-block w-2 h-2 rounded-full border border-[#C9B07A] shrink-0 mt-1.5 bg-[#FDFBF7]"></span>
                  <span>
                    <strong className="font-semibold text-[#111827]">
                      {item.boldText}
                    </strong>{" "}
                    <span className="text-[#6B7280]">{item.normalText}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Start a security review Form Card */}
          <div className="lg:col-span-7 bg-white">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#111827] mb-1">
                Start a security review
              </h3>
              <p className="text-[14px] text-[#6B7280]">
                Six fields. Enough to scope a response, nothing more.
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
                    defaultValue="Security / CISO"
                    className="w-full h-11 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Evidence requested */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#374151]">
                    Evidence requested
                  </label>
                  <input
                    type="text"
                    defaultValue="Security questionnaire"
                    className="w-full h-11 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>

                {/* Deployment context */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#374151]">
                    Deployment context
                  </label>
                  <input
                    type="text"
                    defaultValue="Not yet determined"
                    className="w-full h-11 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#C59B3F] text-[#111827] font-semibold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <span>Start security review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Footer Note */}
              <div className="pt-2 text-center">
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
