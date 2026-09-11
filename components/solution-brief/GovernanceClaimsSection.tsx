"use client";

import React from "react";

export default function GovernanceClaimsSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#D0AA55]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
                CHAPTER 6 • GOVERNANCE, EVIDENCE, AI AND TRUST
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15]">
              Where the material claims are bounded
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Each area states the claim and the limit together, at the point
              the claim is made.
            </p>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Cards Stack */}
          <div className="lg:col-span-6 space-y-6">
            {/* Card 1: Policy and Authority */}
            <div className="bg-[#0C2A38] rounded-2xl p-6 border border-[#2A6386]/40 shadow-lg">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase block mb-2">
                POLICY AND AUTHORITY
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Policy source and status, delegated authority source and scope,
                and a separate human authorization record. Configured permission
                never constitutes corporate or legal authority.
              </p>
            </div>

            {/* Card 2: Segregation */}
            <div className="bg-[#0C2A38] rounded-2xl p-6 border border-[#2A6386]/40 shadow-lg">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase block mb-2">
                SEGREGATION
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Conflicts are visible before a decision is offered. There is no
                silent bypass &mdash; override requires an explicit, authorized
                exceptional path with reason, evidence and expiry.
              </p>
            </div>

            {/* Card 3: Evidence */}
            <div className="bg-[#0C2A38] rounded-2xl p-6 border border-[#2A6386]/40 shadow-lg">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase block mb-2">
                EVIDENCE
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Source, actor, time, relationship and verification state. Every
                public proof on this page is synthetic.
              </p>
            </div>
          </div>

          {/* Right Column: Governed AI Timeline & Boundary */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Timeline Box */}
            <div className="bg-[#0C2A38] rounded-2xl p-6 border border-[#2A6386]/40 shadow-lg">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase block mb-6">
                GOVERNED AI &mdash; FIXED ORDER
              </span>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#D0AA55]/40">
                <div className="relative">
                  <span className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#D0AA55] ring-4 ring-[#0C2A38]" />
                  <p className="text-xs text-white leading-relaxed">
                    <strong className="font-semibold text-white">
                      Sources
                    </strong>{" "}
                    &mdash; what the model was authorized to read, and what was
                    excluded
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#D0AA55] ring-4 ring-[#0C2A38]" />
                  <p className="text-xs text-white leading-relaxed">
                    <strong className="font-semibold text-white">
                      Limitations, conflicts, missing
                    </strong>{" "}
                    &mdash; stated before the finding, not after
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#D0AA55] ring-4 ring-[#0C2A38]" />
                  <p className="text-xs text-white leading-relaxed">
                    <strong className="font-semibold text-white">
                      Proposed finding
                    </strong>{" "}
                    &mdash; a proposal for a reviewer, creating no obligation
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#D0AA55] ring-4 ring-[#0C2A38]" />
                  <p className="text-xs text-white leading-relaxed">
                    <strong className="font-semibold text-white">
                      Required reviewer
                    </strong>{" "}
                    &mdash; named role, with the domain boundary that applies
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#D0AA55] ring-4 ring-[#0C2A38]" />
                  <p className="text-xs text-white leading-relaxed">
                    <strong className="font-semibold text-white">
                      Human decision
                    </strong>{" "}
                    &mdash; separate, attributable record
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#D0AA55] ring-4 ring-[#0C2A38]" />
                  <p className="text-xs text-white leading-relaxed">
                    <strong className="font-semibold text-white">
                      Audit record
                    </strong>{" "}
                    &mdash; output retained unaltered, edits stored as distinct
                    changes
                  </p>
                </div>
              </div>
            </div>

            {/* AI Boundary Box */}
            <div className="bg-[#0C2A38] rounded-2xl p-6 border border-[#2A6386]/40 shadow-lg">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase block mb-2">
                AI BOUNDARY
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                No independent material authority. AI cannot approve, execute or
                mark anything ready, and it never substitutes for professional
                judgment. If the AI service is unavailable, the non-AI
                governance path remains usable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
