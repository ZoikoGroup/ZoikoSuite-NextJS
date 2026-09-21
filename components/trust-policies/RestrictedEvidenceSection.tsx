"use client";

import React from "react";

export default function RestrictedEvidenceSection() {
  return (
    <section
      id="restricted-evidence"
      className="w-full bg-[#F7F5F0] font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center"
    >
      <div className="w-full max-w-[1320px] relative flex flex-col gap-12">
        {/* Header */}
        <div className="w-full max-w-[1224px] flex flex-col gap-4">
          <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
            <span
              className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              09 / RESTRICTED EVIDENCE
            </span>
          </div>
          <div className="self-stretch pt-[0.71px] flex flex-col justify-start items-start">
            <h2
              className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Request restricted policy evidence
            </h2>
          </div>
          <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Some buyers need full policy documents or standards that shouldn&apos;t be public. This routes to a governed request path, not a generic contact form.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <form
          className="w-full max-w-[1224px] flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Row 1: Work email & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[26px] gap-y-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="tp-email"
                className="text-[#0D2636] text-xs font-semibold leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Work email
              </label>
              <input
                id="tp-email"
                type="email"
                className="h-11 w-full bg-white rounded-lg border border-[#D6DEE3] px-4 text-sm text-[#0D2636] outline-none focus:border-[#3E5A6B]"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="tp-company"
                className="text-[#0D2636] text-xs font-semibold leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Company
              </label>
              <input
                id="tp-company"
                type="text"
                className="h-11 w-full bg-white rounded-lg border border-[#D6DEE3] px-4 text-sm text-[#0D2636] outline-none focus:border-[#3E5A6B]"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              />
            </div>
          </div>

          {/* Row 2: Role / function & Policy requested */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[26px] gap-y-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="tp-role"
                className="text-[#0D2636] text-xs font-semibold leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Role / function
              </label>
              <div className="relative">
                <select
                  id="tp-role"
                  defaultValue="Security"
                  className="w-full min-h-11 pl-4 pr-7 py-3.5 bg-white rounded-lg border border-[#D6DEE3] text-sm text-[#0D2636] outline-none appearance-none focus:border-[#3E5A6B]"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  <option>Security</option>
                  <option>Compliance</option>
                  <option>Procurement</option>
                  <option>Legal</option>
                  <option>Engineering</option>
                  <option>Executive leadership</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="tp-policy"
                className="text-[#0D2636] text-xs font-semibold leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Policy requested
              </label>
              <div className="relative">
                <select
                  id="tp-policy"
                  defaultValue="Third-Party Risk Standard"
                  className="w-full min-h-11 pl-4 pr-7 py-3.5 bg-white rounded-lg border border-[#D6DEE3] text-sm text-[#0D2636] outline-none appearance-none focus:border-[#3E5A6B]"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  <option>Information Security Policy</option>
                  <option>Privacy &amp; Data Governance Policy</option>
                  <option>Responsible AI Policy</option>
                  <option>Third-Party Risk Standard</option>
                  <option>Other / not listed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 3: Evaluation context */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="tp-context"
              className="text-[#0D2636] text-xs font-semibold leading-5"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Evaluation context
            </label>
            <div className="relative">
              <select
                id="tp-context"
                defaultValue="Security review"
                className="w-full min-h-11 pl-4 pr-7 py-3.5 bg-white rounded-lg border border-[#D6DEE3] text-sm text-[#0D2636] outline-none appearance-none focus:border-[#3E5A6B]"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                <option>Security review</option>
                <option>Procurement / vendor onboarding</option>
                <option>Regulatory or audit inquiry</option>
                <option>Customer diligence</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Row 4: Message (optional) */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="tp-message"
              className="text-[#0D2636] text-xs font-semibold leading-5"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Message (optional)
            </label>
            <textarea
              id="tp-message"
              rows={4}
              placeholder="Do not include secrets or sensitive data."
              className="w-full min-h-24 px-3 pt-2.5 pb-16 bg-white rounded-lg border border-[#D6DEE3] text-sm text-[#0D2636] placeholder-[#757575] outline-none focus:border-[#3E5A6B] resize-none"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            />
            <p
              className="text-[#3E5A6B] text-xs font-normal leading-5"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Your request is routed to the policy/evidence custodian under
              approved access rules. We won&apos;t invent a response-time
              promise here.
            </p>
          </div>

          {/* Submit Button (1224px width, 46px height) */}
          <div className="w-full max-w-[1224px] h-[46px] pt-2">
            <button
              type="submit"
              className="w-full h-[46px] bg-[#D0AA55] hover:bg-[#C59B3F] rounded-[999px] border border-[#D0AA55] inline-flex justify-center items-center gap-2 transition-colors"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              <span className="text-[#231B0D] text-base font-semibold">
                Request policy evidence
              </span>
              <span
                className="text-[#231B0D] text-xs font-semibold opacity-90 pb-[3px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}