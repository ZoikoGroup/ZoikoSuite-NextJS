import React from "react";

export default function FailClosedSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Top Header Row with Title and Description */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-start">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              TRANSPARENCY, INCIDENT, DISABLE AND ROLLBACK
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.2] tracking-tight max-w-xl">
            Fail closed, and say so
          </h2>
        </div>

        {/* Right Description Text */}
        <div className="max-w-md">
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Disclosure at the point of use, and a failure path that stops rather
            than degrades.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Disclosure at the Point of Use */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-4">
              DISCLOSURE AT THE POINT OF USE
            </span>
            <ul className="space-y-3 mb-8">
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  AI involvement labelled on the output itself
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  Model version and provider available on the record
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  Confidence or uncertainty shown where the boundary is
                  forecast
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  Known limitations surfaced with the output, not in a policy
                  page
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  Rationale and source references attached to
                  recommendations
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full bg-[#EEF2F5] rounded-lg px-4 py-2.5 text-[#6B7280] text-[11px] font-bold tracking-wider uppercase">
            ARCHITECTURE REQUIREMENT
          </div>
        </div>

        {/* Card 2: Incident and Rollback Path */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-4">
              INCIDENT AND ROLLBACK PATH
            </span>
            <ul className="space-y-3 mb-8">
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  <strong className="text-[#111827]">Quarantine</strong> —
                  outputs held, no further effect
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  <strong className="text-[#111827]">Disable</strong> — system
                  stops producing output entirely
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  <strong className="text-[#111827]">Rollback</strong> — to a
                  prior approved model version or to the non-AI path
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  <strong className="text-[#111827]">Invalidate</strong> —
                  affected outputs marked, reuse blocked
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  <strong className="text-[#111827]">Timeline</strong> —
                  incident record with detection, action and closure
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full bg-[#FBF2DF] border border-amber-200/60 rounded-lg px-4 py-2.5 text-[#C29B38] text-[11px] font-bold tracking-wider uppercase">
            PHASED DELIVERY
          </div>
        </div>
      </div>
    </section>
  );
}
