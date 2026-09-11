"use client";

import React, { useState } from "react";

export default function BookDemoSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    fullName: "",
    organization: "",
    role: "CFO / finance",
    countryOrRegion: "",
    claimToVerify: "Coexistence and source ownership",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-[#0F476A] py-16 md:py-24 text-white font-sans">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#D0AA55]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
                NEXT STEP
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Take the brief to your committee, then bring their questions
            </h2>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-8">
              This page is designed to be read, printed and circulated without
              anyone filling in a form. When your evaluation team has worked
              through it, the useful conversation is about the specific claims
              they want verified against your own scope.
            </p>

            <div className="pl-4 border-l-2 border-[#D0AA55] mb-8">
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                No availability, integration, jurisdiction coverage, deployment
                option, timeline or outcome is committed outside an approved
                commercial document.
              </p>
            </div>

            <div>
              <a
                href="#synthetic-scenario"
                className="text-xs font-bold text-[#D0AA55] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Or inspect the synthetic scenario first</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: White Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-[#0F172A] shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1">
                Book enterprise demo
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-8">
                Every chapter of this brief was readable without it.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Work email
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Your role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Country or region
                    </label>
                    <input
                      type="text"
                      name="countryOrRegion"
                      value={formData.countryOrRegion}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Which claim do you want verified?
                    </label>
                    <input
                      type="text"
                      name="claimToVerify"
                      value={formData.claimToVerify}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#D0AA55] hover:bg-[#B89443] text-black font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5 mt-2"
                >
                  <span>Book enterprise demo</span>
                  <span>→</span>
                </button>

                <p className="text-[11px] text-[#64748B] text-center leading-relaxed pt-2">
                  We use your information to respond to this request. Consent is
                  never pre-checked. See the{" "}
                  <a href="#privacy" className="underline hover:text-[#0F172A]">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
