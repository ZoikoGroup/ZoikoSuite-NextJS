import React from "react";

export default function ThreeAreasPositions() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#B48A3A" }}
              ></span>
              <span
                className="text-[11px] font-bold tracking-[0.2em] uppercase"
                style={{ color: "#B48A3A" }}
              >
                ACCESSIBILITY, POLICIES AND RELIABILITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              Three areas, three honest positions
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-[15px] lg:text-[16px] text-[#6B7280] leading-relaxed">
              Each states what exists today, what does not, and how to obtain
              what is not published.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Accessibility */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-6">
              ACCESSIBILITY
            </h3>
            <p className="text-[14px] lg:text-[15px] text-[#111827] leading-relaxed mb-8">
              Product designed to WCAG 2.2 AA. Conformance documentation such as
              an ACR or VPAT is in validation, and no conformity claim is made
              without tested evidence.
            </p>
            <ul className="mt-auto space-y-3">
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                Keyboard operability and visible focus
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                Text-first status, never colour alone
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                44×44 minimum touch targets
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                Feedback path published with the documentation
              </li>
            </ul>
          </div>

          {/* Card 2: Policies and Legal Transparency */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-6">
              POLICIES AND LEGAL TRANSPARENCY
            </h3>
            <p className="text-[14px] lg:text-[15px] text-[#111827] leading-relaxed mb-8">
              Policy library, legal notices and processing documentation. Each
              carries a version, effective date and owner.
            </p>
            <ul className="mt-auto space-y-3">
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                Privacy Policy · Terms · Cookie notice
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                <span>
                  Data Processing Agreement{" "}
                  <span className="text-[11px] text-[#9CA3AF] ml-1">
                    on request
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                <span>
                  Subprocessor list{" "}
                  <span className="text-[11px] text-[#9CA3AF] ml-1">
                    with change notification
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                Vulnerability disclosure route
              </li>
            </ul>
          </div>

          {/* Card 3: Reliability and System Status */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-6">
              RELIABILITY AND SYSTEM STATUS
            </h3>
            <p className="text-[14px] lg:text-[15px] text-[#111827] leading-relaxed mb-8">
              A live status source is the authoritative view of service health.
              This page does not restate it, because a cached status is worse
              than none.
            </p>
            <ul className="mt-auto space-y-3">
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                Current component health
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                Incident history and post-incident reviews
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#6B7280] leading-snug">
                <span className="text-[#9CA3AF] mt-0.5">•</span>
                Scheduled maintenance notices
              </li>
              <li className="flex items-start gap-3 text-[13px] lg:text-[14px] leading-snug font-semibold text-[#4B5563]">
                <span className="text-[#9CA3AF] mt-0.5 font-normal">•</span>
                No uptime percentage or availability guarantee is published here
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
