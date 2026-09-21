"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TestThisPageSection() {
  return (
    <section
      id="solutions-architect"
      className="w-full bg-[#0F476A] py-16 sm:py-24 px-6 lg:px-14 text-white flex justify-center"
    >
      <div className="max-w-[1320px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#A07A2E] uppercase font-['JetBrains_Mono']">
                NEXT STEP
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
              Test the page you are reading
            </h2>

            {/* Description */}
            <p className="text-[#C5D1DE] text-[15px] leading-relaxed mb-10 max-w-lg">
              Everything claimed here applies to this page. Tab through it
              without a mouse. Zoom to 400%. Turn colour off and check that
              every status still reads. If something fails, the reporting form
              above needs no account, no consent and no contact details.
            </p>

            {/* Bottom Callout */}
            <div className="border-l-2 border-[#c5a059] pl-3.5 max-w-md">
              <p className="text-xs text-[#93A2B8] leading-5">
                No conformance is claimed for a scope that has not been fully
                evaluated and approved, and no independent accessibility
                certification exists.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 bg-white text-[#111827] rounded-2xl p-8 shadow-2xl"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#111827] mb-1">
                Talk to a solutions architect
              </h3>
              <p className="text-sm text-[#4B5563]">
                Every section of this page was readable without it.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="architect-work-email"
                    className="text-sm font-semibold text-[#111827] leading-5"
                  >
                    Work email
                  </label>
                  <input
                    id="architect-work-email"
                    name="work-email"
                    type="email"
                    className="w-full h-12 px-3.5 rounded-lg border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="architect-full-name"
                    className="text-sm font-semibold text-[#111827] leading-5"
                  >
                    Full name
                  </label>
                  <input
                    id="architect-full-name"
                    name="full-name"
                    type="text"
                    className="w-full h-12 px-3.5 rounded-lg border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="architect-organization"
                    className="text-sm font-semibold text-[#111827] leading-5"
                  >
                    Organization
                  </label>
                  <input
                    id="architect-organization"
                    name="organization"
                    type="text"
                    className="w-full h-12 px-3.5 rounded-lg border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="architect-your-role"
                    className="text-sm font-semibold text-[#111827] leading-5"
                  >
                    Your role
                  </label>
                  <select
                    id="architect-your-role"
                    name="your-role"
                    defaultValue="Accessibility lead"
                    className="w-full h-12 px-3 rounded-lg border border-[#E5E7EB] bg-white text-base text-[#111827] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  >
                    <option>Accessibility lead</option>
                    <option>CIO / CISO</option>
                    <option>Procurement</option>
                    <option>Legal / compliance</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full min-h-12 px-6 py-3 rounded-full bg-[#D0AA55] hover:bg-[#c29c4c] inline-flex justify-center items-center gap-2.5 font-semibold text-base text-[#08222F] transition-colors cursor-pointer"
                >
                  Talk to a solutions architect
                  <ArrowRight className="w-4 h-4 opacity-90" />
                </button>
              </div>

              {/* Footer Note */}
              <p className="pt-1.5 text-xs text-[#4B5563] leading-5">
                We use your information to respond to this request. Consent is
                never pre-checked.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
