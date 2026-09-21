import React from "react";

export default function SolutionsArchitectSection() {
  return (
    <section className="w-full bg-[#0F476A] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-5 flex flex-col items-start">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              NEXT STEP
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] tracking-tight mb-6">
            Ask what happens when the model is wrong
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-8">
            Most AI vendor conversations cover what the model does well. The
            more useful ones cover the failure path: who catches it, what state
            the output lands in, whether the workflow still runs, and what
            evidence exists afterwards. We will work through one of your use
            cases on those terms.
          </p>

          {/* Bottom Note with Left Border */}
          <div className="border-l-2 border-[#C29B38] pl-4 py-1">
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              No AI accuracy, bias, reliability, regulatory conformance or
              independent certification claim is made, and none is committed
              outside an approved commercial document.
            </p>
          </div>
        </div>

        {/* Right Column: Solutions Architect Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <h3 className="text-[#111827] font-bold text-lg sm:text-xl tracking-tight mb-1">
            Talk to a solutions architect
          </h3>
          <p className="text-[#6B7280] text-xs sm:text-sm mb-6">
            Every section of this page was readable without it.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#6B7280] mb-1.5">
                  Work email
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#C29B38]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#6B7280] mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#C29B38]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#6B7280] mb-1.5">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#C29B38]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#6B7280] mb-1.5">
                  Your role
                </label>
                <input
                  type="text"
                  defaultValue="AI governance / risk"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#C29B38]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#6B7280] mb-1.5">
                Primary question
              </label>
              <input
                type="text"
                defaultValue="Capability boundaries"
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#C29B38]"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#D4AF37] hover:bg-[#c29f30] text-[#111827] font-semibold text-sm py-3 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              Talk to a solutions architect →
            </button>
          </form>

          <p className="text-center text-[11px] text-[#6B7280] mt-4">
            We use your information to respond to this request. Consent is never
            pre-checked. See the{" "}
            <a href="#" className="underline text-[#111827]">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
