"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function BookEnterpriseDemoSection() {
  const [workEmail, setWorkEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("CFO / finance");
  const [entitiesScope, setEntitiesScope] = useState("");
  const [patternsApply, setPatternsApply] = useState("Growing Companies");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="w-full bg-[#0F476A] py-16 md:py-24 text-white font-sans flex justify-center items-center px-6 lg:px-12">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Eyebrow */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#A07A2E]"></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#A07A2E" }}
            >
              NEXT STEP
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
            Bring your actual structure, not the closest label
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
            Most organizations match two or three patterns at once, and the
            interesting part is where they conflict &mdash; a partnership that
            has become multi-entity, or a nonprofit entering a regulated market.
            That tension is what an architecture conversation should start from.
          </p>

          {/* Bottom Note Box with Left Border */}
          <div
            className="pl-4 py-1"
            style={{
              borderLeft: "3px solid #D0AA55",
            }}
          >
            <p className="text-xs text-gray-300 leading-relaxed">
              No classification, eligibility, entitlement, pricing, plan
              assignment or capability commitment follows from any pattern
              selection on this page.
            </p>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-8 md:p-10 text-[#0F172A] shadow-2xl">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-1">
            Book enterprise demo
          </h3>
          <p className="text-xs text-[#64748B] mb-6">
            Every pattern was readable without this form.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Row 1: Work email & Full name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#0F172A]">
                  Work email
                </label>
                <input
                  type="email"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-all bg-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#0F172A]">
                  Full name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-all bg-white"
                />
              </div>
            </div>

            {/* Row 2: Organization & Your role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#0F172A]">
                  Organization
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-all bg-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#0F172A]">
                  Your role
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-all bg-white"
                />
              </div>
            </div>

            {/* Row 3: Entities and jurisdictions in scope & Which patterns apply? */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#0F172A]">
                  Entities and jurisdictions in scope
                </label>
                <input
                  type="text"
                  placeholder="Approximate counts are fine"
                  value={entitiesScope}
                  onChange={(e) => setEntitiesScope(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#94A3B8] focus:outline-none focus:border-[#0F476A] transition-all bg-white placeholder:text-[#94A3B8]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#0F172A]">
                  Which patterns apply?
                </label>
                <input
                  type="text"
                  value={patternsApply}
                  onChange={(e) => setPatternsApply(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0F476A] transition-all bg-white"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-medium text-gray-950 transition-all hover:opacity-90 shadow-md"
              style={{
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
              }}
            >
              Book enterprise demo
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>

            {/* Privacy Note */}
            <p className="text-[11px] text-[#64748B] mt-1 leading-relaxed">
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
