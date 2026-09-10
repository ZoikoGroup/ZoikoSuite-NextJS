"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NeutralArtifactSection() {
  const [questionText, setQuestionText] = useState("");

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-14 lg:py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 lg:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                ENTERPRISE EVALUATION SUMMARY
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.15]">
              A neutral artifact you can take to
              <br className="hidden sm:inline" />
              your own reviewers
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Ungated and generated locally. It records what the tour demonstrated
              and what still requires validation — and produces no score of any kind.
            </p>
          </div>
        </div>

        {/* Desktop View: Isometric Laptop and Checklist Graphic (unchanged) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#dce6ec] bg-[#edf2f8] shadow-sm"
        >
          <Image
            src="/platform-tour/pt4.png"
            alt="Neutral reviewable artifact export with verification progression"
            width={1224}
            height={612}
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* Mobile View: Evaluation Summary Document Card */}
        <div className="lg:hidden w-full flex flex-col items-center">
          <div className="w-full rounded-2xl border border-[#b8c9d3] bg-white overflow-hidden shadow-md">
            {/* Header Banner */}
            <div className="bg-[#0f476a] text-white p-4 sm:p-5">
              <div className="text-[10.5px] font-mono tracking-wider text-[#9fc2d7] uppercase mb-1">
                Enterprise evaluation summary
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Not a recommendation, fit score or contractual offer
              </h3>
            </div>

            {/* Document Body */}
            <div className="p-4 sm:p-6 flex flex-col gap-6 text-[12px] sm:text-[12.5px] text-[#334756] leading-relaxed">
              {/* Section 1: WHAT THE TOUR DEMONSTRATED */}
              <div>
                <h4 className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#a06810] uppercase mb-2">
                  WHAT THE TOUR DEMONSTRATED
                </h4>
                <ul className="space-y-1.5 list-disc pl-4 text-[#4a5e6d]">
                  <li>One action carried a single identity across twelve governed stops.</li>
                  <li>Priority was explained by named factors, never by a score.</li>
                  <li>Policy outcomes were traceable to version, source, owner and matched condition.</li>
                  <li>Approval was unavailable for two independently stated reasons.</li>
                  <li>Four separate parties covered prepare, review, approve and execute.</li>
                  <li>Evidence was reported as counts and states, with restricted kept distinct from missing.</li>
                  <li>The AI finding and the human decision remained separate records.</li>
                  <li>A local entity exception carried an owner, an approver and an expiry.</li>
                </ul>
              </div>

              {/* Section 2: WHAT REQUIRES VALIDATION FOR YOUR ORGANIZATION */}
              <div>
                <h4 className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#0f476a] uppercase mb-2">
                  WHAT REQUIRES VALIDATION FOR YOUR ORGANIZATION
                </h4>
                <ul className="space-y-1.5 list-disc pl-4 text-[#4a5e6d]">
                  <li>Which of your systems remain authoritative, and for which objects</li>
                  <li>Whether your policies can be expressed as versioned, sourced configured controls</li>
                  <li>How your delegated-authority matrix maps to the authority model</li>
                  <li>Which jurisdictions you need, and what coverage status each would carry</li>
                  <li>Your evidence requirements, retention classes and export needs</li>
                  <li>Deployment pattern, residency, key control and administrative access</li>
                  <li>Integration availability for your specific systems</li>
                  <li>Rollback position and recovery test evidence before any activation</li>
                </ul>
              </div>

              {/* Section 3: QUESTIONS WORTH ASKING US */}
              <div>
                <h4 className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#a06810] uppercase mb-2">
                  QUESTIONS WORTH ASKING US
                </h4>
                <ul className="space-y-1.5 list-disc pl-4 text-[#4a5e6d]">
                  <li>Which capabilities shown are available in our market and plan today</li>
                  <li>What configuration would our policies require</li>
                  <li>What does implementation actually involve for our estate</li>
                  <li>What evidence can we obtain during diligence</li>
                </ul>
              </div>

              {/* Section 4: REVIEWERS WHO SHOULD SEE THIS */}
              <div>
                <h4 className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#a06810] uppercase mb-2">
                  REVIEWERS WHO SHOULD SEE THIS
                </h4>
                <ul className="space-y-1.5 list-disc pl-4 text-[#4a5e6d]">
                  <li>Architecture • security • privacy and legal</li>
                  <li>Finance and controls • compliance • internal audit</li>
                  <li>Procurement • operations • business sponsor</li>
                </ul>
              </div>

              {/* Section 5: YOUR SESSION - GENERATED LOCALLY, STORED NOWHERE */}
              <div className="pt-2 border-t border-[#edf2f6]">
                <h4 className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#6b7f8c] uppercase mb-2">
                  YOUR SESSION – GENERATED LOCALLY, STORED NOWHERE
                </h4>
                <div className="space-y-1 text-[11.5px] text-[#4a5e6d]">
                  <div>
                    <span className="text-[#7c909e]">Path selected: </span>
                    <span className="font-semibold text-[#08222F]">Full Platform Tour</span>
                  </div>
                  <div>
                    <span className="text-[#7c909e]">Stops viewed: </span>
                    <span className="font-semibold text-[#08222F]">0 of 12</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#8c9ba5] italic mt-2">
                  • No stops viewed yet. Start the tour and this list fills in.
                </p>
              </div>

              {/* Section 6: ADD A QUESTION FOR THE ZOIKOSUITE TEAM (OPTIONAL) */}
              <div className="pt-2 border-t border-[#edf2f6]">
                <h4 className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#a06810] uppercase mb-2.5">
                  ADD A QUESTION FOR THE ZOIKOSUITE TEAM (OPTIONAL)
                </h4>

                {/* Warning note */}
                <div className="p-2.5 rounded-lg border border-[#fecaca] bg-[#fff5f5] text-[11px] text-[#b91c1c] mb-2.5">
                  Do not include confidential, regulated or personal operational data.
                </div>

                {/* Input box */}
                <input
                  type="text"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="e.g. Which of these capabilities are available in our market and plan today?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6e2e9] text-[11.5px] text-[#08222F] placeholder-[#9bb0be] focus:outline-none focus:border-[#0f476a] bg-white shadow-xs"
                />

                <p className="text-[10px] text-[#8c9ba5] mt-2">
                  Your question stays in this browser until you choose to send it. It is never written to tour progress or analytics.
                </p>
                <div className="text-[10px] font-mono text-[#8c9ba5] mt-1">
                  Question count: <span className="font-semibold text-[#526471]">No questions entered.</span>
                </div>
              </div>

              {/* Section 7: Bottom Disclaimer Box */}
              <div className="p-3.5 rounded-xl bg-[#fafcfe] border border-[#e2ecf2] text-[11px] text-[#64748b] leading-relaxed">
                <span className="font-semibold text-[#08222F]">
                  This summary contains no fit score, readiness score, compliance verdict, price or timeline.
                </span>{" "}
                It is generated from the stops you viewed and the questions the tour raises. Delivery by email is optional, requires an explicit submit, and enrolls you in nothing.
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-6">
            <button className="px-5 py-2.5 rounded-full bg-[#0f476a] text-white text-xs font-semibold hover:bg-[#0c3955] transition-colors shadow-xs text-center">
              Refresh preview
            </button>
            <button className="px-5 py-2.5 rounded-full bg-[#0f476a] text-white text-xs font-semibold hover:bg-[#0c3955] transition-colors shadow-xs text-center">
              Print or save summary
            </button>
            <button className="px-5 py-2.5 rounded-full border border-[#d6e2e9] bg-[#fdfdfd] text-[#08222F] text-xs font-semibold hover:bg-[#f3f7fa] transition-colors shadow-xs text-center">
              Discuss the summary with us
            </button>
          </div>

          {/* Subtext below buttons */}
          <p className="text-[10px] text-[#8c9ba5] text-center mt-3 leading-relaxed">
            Do not include confidential, regulated or personal operational data if you choose the optional email delivery step.
          </p>
        </div>
      </div>
    </section>
  );
}
