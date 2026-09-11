"use client";

import React, { useState } from "react";

export default function NextStepEnterpriseDemoSection() {
  const [workEmail, setWorkEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("CFO / finance");
  const [country, setCountry] = useState("");
  const [decision, setDecision] = useState("Understand ZoikoSuite");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="w-full bg-[#0F476A] py-16 md:py-24 text-white font-sans">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#D0AA55]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
                NEXT STEP
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-[1.15] mb-6">
              Bring your evaluation criteria, not a shortlist
            </h2>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8">
              The most useful executive conversation starts from the criteria
              your approval body will actually apply &mdash; which decision
              needs evidence, which systems stay authoritative, what would have
              to be measurable, and who signs off. We will work through the
              ten-step framework with you.
            </p>

            {/* Note Callout */}
            <div className="flex items-start gap-3 border-l-2 border-[#D0AA55] pl-4 py-1">
              <p className="text-[11px] sm:text-xs text-[#94A3B8] leading-relaxed">
                No resource availability, value outcome, saving, return or
                capability commitment is made outside an approved commercial
                document.
              </p>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-[#0F172A] shadow-xl border border-[#E2E8F0]">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                  Book enterprise demo
                </h3>
                <p className="text-xs text-[#64748B]">
                  Every framework on this page was usable without this form.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0F172A] mb-1">
                      Work email
                    </label>
                    <input
                      type="email"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#0F172A] mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0F172A] mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#0F172A] mb-1">
                      Your role
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0F172A] mb-1">
                      Country or region
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#0F172A] mb-1">
                      What are you deciding?
                    </label>
                    <input
                      type="text"
                      value={decision}
                      onChange={(e) => setDecision(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F476A]/20 focus:border-[#0F476A]"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 px-6 rounded-full bg-[#D0AA55] hover:bg-[#B89443] text-[#20180A] font-bold text-xs transition-colors shadow-sm inline-flex items-center justify-center gap-1.5"
                >
                  <span>Book enterprise demo</span>
                  <span>→</span>
                </button>

                <p className="text-[10px] text-[#64748B] text-center mt-3 leading-relaxed">
                  We use your information to respond to this request. Consent is
                  never pre-checked. See the <br />
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
