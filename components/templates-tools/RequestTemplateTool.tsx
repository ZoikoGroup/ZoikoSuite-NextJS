"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function RequestTemplateTool() {
  return (
    <section className="w-full bg-[#08222F] py-28 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1.5px] bg-[#D0AA55]"></span>
              <span className="text-[#D0AA55] text-xs font-semibold tracking-widest uppercase font-mono">
                Next step
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6">
              Tell us which<br />
              template would<br />
              actually save you a<br />
              week
            </h2>
            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
              The catalog is empty because nothing has cleared review yet, not
              because nothing is planned. The fastest way to influence what gets
              built is to describe the task you are stuck on — the readiness
              assessment you rebuilt from scratch, the governance design you did in
              a blank document.
            </p>
            {/* Disclaimer */}
            <div className="border-l-2 border-[#D0AA55] pl-4">
              <p className="text-gray-400 text-xs leading-relaxed max-w-lg">
                No utility availability, release date, file format, compatibility or entitlement is committed outside
                an approved commercial document.
              </p>
            </div>
          </div>
          
          {/* Right Column: Form Card */}
          <div className="bg-white text-[#111827] rounded-3xl p-8 lg:p-10 shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#111827] mb-2">
                Request a template or tool
              </h3>
              <p className="text-sm text-[#6B7280]">
                No account needed. This routes to the resource owner, not to sales.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Work email */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-[#111827]">
                    Work email <span className="font-normal text-[#6B7280]">(optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full h-12 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>

                {/* Your role */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-[#111827]">
                    Your role
                  </label>
                  <input
                    type="text"
                    defaultValue="Finance"
                    className="w-full h-12 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>
              </div>

              {/* Which task */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#111827]">
                  Which task are you trying to complete?
                </label>
                <input
                  type="text"
                  defaultValue="Plan an implementation"
                  className="w-full h-12 px-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                />
              </div>

              {/* Ideal resource */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#111827]">
                  What would the ideal resource do?
                </label>
                <textarea
                  className="w-full h-24 p-3.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-auto px-8 h-12 flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] hover:bg-[#C59B3F] text-[#20180A] font-semibold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <span>Send request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Footer Note */}
              <div className="pt-2">
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  We use your information to respond to this request and prioritise the utility backlog. Consent is
                  never pre-checked. Leave the email blank to send anonymously.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
