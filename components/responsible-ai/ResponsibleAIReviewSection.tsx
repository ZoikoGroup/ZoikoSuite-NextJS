import React from "react";

export default function ResponsibleAIReviewSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Top Header Row with Title and Description */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-start">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              RESPONSIBLE AI REVIEW
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight max-w-xl">
            Bring the use case your AI committee rejected
          </h2>
        </div>

        {/* Right Description Text */}
        <div className="max-w-md">
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            The useful conversation is about a specific workflow: what boundary
            it would sit at, who reviews it, and what happens when it
            fails.
          </p>
        </div>
      </div>

      {/* Content Layout Grid (Left List / Right Form) */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: What a Review Produces */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-6">
            WHAT A REVIEW PRODUCES
          </span>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full border-2 border-[#C29B38] shrink-0 mt-0.5" />
              <p className="text-[#4B5563] text-sm leading-snug">
                <strong className="text-[#111827]">Boundary placement</strong> —
                which of the seven your use case sits at
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full border-2 border-[#C29B38] shrink-0 mt-0.5" />
              <p className="text-[#4B5563] text-sm leading-snug">
                <strong className="text-[#111827]">Data scope</strong> —
                permitted classes and restricted exclusions
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full border-2 border-[#C29B38] shrink-0 mt-0.5" />
              <p className="text-[#4B5563] text-sm leading-snug">
                <strong className="text-[#111827]">Oversight design</strong> —
                reviewer, threshold, timeout and escalation
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full border-2 border-[#C29B38] shrink-0 mt-0.5" />
              <p className="text-[#4B5563] text-sm leading-snug">
                <strong className="text-[#111827]">Evaluation approach</strong>{" "}
                — metrics, thresholds and known limitations
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full border-2 border-[#C29B38] shrink-0 mt-0.5" />
              <p className="text-[#4B5563] text-sm leading-snug">
                <strong className="text-[#111827]">Provider position</strong> —
                hosting mode and data-use posture
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full border-2 border-[#C29B38] shrink-0 mt-0.5" />
              <p className="text-[#4B5563] text-sm leading-snug">
                <strong className="text-[#111827]">Failure path</strong> —
                quarantine, disable, rollback and the non-AI route
              </p>
            </li>
          </ul>
        </div>

        {/* Right Column: Request Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h3 className="text-[#111827] font-bold text-lg sm:text-xl tracking-tight mb-1">
            Request a Responsible AI review
          </h3>
          <p className="text-[#6B7280] text-xs sm:text-sm mb-6">
            Enough to scope a response, nothing more.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#6B7280] mb-1.5">
                  Boundary of interest
                </label>
                <input
                  type="text"
                  defaultValue="Observe — detection only"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#C29B38]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#6B7280] mb-1.5">
                  Primary concern
                </label>
                <input
                  type="text"
                  defaultValue="Source-truth protection"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#C29B38]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#D0AA55] border border-[#D0AA55] hover:bg-[#c29f30] text-[#111827] font-semibold text-sm py-3 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              Request Responsible AI review →
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
