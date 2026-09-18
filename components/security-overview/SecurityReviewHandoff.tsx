"use client"
import React from "react";

interface AvailableItem {
  title: string;
  description: string;
}

const availableItems: AvailableItem[] = [
  {
    title: "Completed security questionnaire",
    description: "— scoped to your deployment",
  },
  {
    title: "Architecture brief",
    description: "— zero trust, identity, isolation, telemetry",
  },
  {
    title: "Penetration test summary",
    description: "— under NDA, with scope and date",
  },
  {
    title: "Remediation targets",
    description: "— severity-based internal SLAs",
  },
  {
    title: "Key custody options",
    description: "— eligibility for your deployment and region",
  },
  {
    title: "Gap statement",
    description: "— what is not available, stated directly",
  },
];

export default function SecurityReviewHandoff() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans">
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
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              Route diligence to the evidence that exists
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Controlled-access evidence is released under NDA, scoped to your
              deployment. A review that returns &quot;not available&quot; is
              still a successful review.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Available through security review */}
          <div className="lg:col-span-5">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-6">
              AVAILABLE THROUGH SECURITY REVIEW
            </h3>
            <ul className="space-y-4">
              {availableItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[13px] text-[#4B5563]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9B07A] shrink-0 mt-2"></span>
                  <span>
                    <strong className="text-[#111827] font-semibold">
                      {item.title}
                    </strong>{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Request security review form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
            <div className="mb-6">
              <h3 className="text-[18px] font-bold text-[#111827] mb-1">
                Request security review
              </h3>
              <p className="text-[13px] text-[#6B7280]">
                Enough to scope a response, nothing more.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5">
                    Work email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#C9B07A]"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#C9B07A]"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#C9B07A]"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5">
                    Your role
                  </label>
                  <input
                    type="text"
                    defaultValue="Security / CISO"
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#C9B07A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5">
                    Evidence requested
                  </label>
                  <input
                    type="text"
                    defaultValue="Security questionnaire"
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#C9B07A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5">
                    Deployment context
                  </label>
                  <input
                    type="text"
                    defaultValue="Not yet determined"
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#C9B07A]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D0AA55] hover:bg-[#C5A028] text-black font-medium rounded-full text-[13px] transition-colors shadow-sm cursor-pointer"
                >
                  Request security review →
                </button>
              </div>

              <p className="text-center text-[11px] text-[#6B7280] mt-3">
                We use your information to respond to this request. Consent is
                never pre-checked. See the{" "}
                <a href="#" className="underline hover:text-[#111827]">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
