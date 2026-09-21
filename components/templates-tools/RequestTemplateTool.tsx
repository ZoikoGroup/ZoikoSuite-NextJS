"use client";

import React from "react";

export default function RequestTemplateTool() {
  return (
    <section className="w-full bg-[#0F476A] py-16 sm:py-24 lg:py-28 px-6 sm:px-14 lg:px-28 text-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row gap-14 items-start">
        {/* Left column */}
        <div className="flex-1 pt-2.5 flex flex-col gap-4">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-[1.5px] bg-[#D4943A]" />
            <span
              className="text-xs font-medium tracking-widest text-[#D4943A] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Next step
            </span>
          </div>

          {/* Heading */}
          <h2
            className="w-full text-3xl sm:text-4xl lg:text-[48px] font-semibold text-white leading-[49.28px] whitespace-nowrap"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Tell us which<br/>template would<br/>actually save you a<br/>week
          </h2>

          {/* Body copy */}
          <div className="w-full pt-[4.8px] pb-1.5 flex flex-col">
            <p
              className="text-lg text-[#A8BFCC] leading-7 whitespace-nowrap"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              The catalog is empty because nothing has cleared review yet, not<br/>because nothing is planned. The fastest way to influence what gets<br/>built is to describe the task you are stuck on — the readiness<br/>assessment you rebuilt from scratch, the governance design you did in<br/>a blank document.
            </p>
          </div>

          {/* Content boundary */}
          <div className="w-full max-w-[566px] pl-3.5 border-l-2 border-[#D0AA55]">
            <p
              className="text-xs text-[#E6E2DA] leading-5 font-normal"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              No utility availability, release date, file format, compatibility
              or entitlement is committed outside
              <br />
              an approved commercial document.
            </p>
          </div>
        </div>

        {/* Form card */}
        <div className="flex-1 w-full bg-white rounded-2xl p-8 flex flex-col gap-[5px]">
          <h3
            className="text-xl font-semibold text-[#0D2636] leading-6"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Request a template or tool
          </h3>
          <p
            className="text-sm text-[#3E5A6B] leading-6 font-normal"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            No account needed. This routes to the resource owner, not to sales.
          </p>

          <form
            className="flex flex-col gap-3.5 pt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col md:flex-row gap-3.5">
              <div className="flex-1 flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-[#0D2636] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Work email{" "}
                  <span className="font-normal text-[#3E5A6B]">(optional)</span>
                </label>
                <input
                  type="email"
                  suppressHydrationWarning
                  className="w-full h-12 min-h-12 px-4 bg-white rounded-lg border border-[#D6DEE3] focus:outline-none focus:border-[#D0AA55] text-base"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-[#0D2636] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Your role
                </label>
                <select
                  suppressHydrationWarning
                  defaultValue="Finance"
                  className="w-full min-h-12 pl-4 pr-7 py-3.5 bg-white rounded-lg border border-[#D6DEE3] focus:outline-none focus:border-[#D0AA55] text-base text-[#0D2636] font-normal"
                >
                  <option>Finance</option>
                  <option>Operations</option>
                  <option>Legal / Compliance</option>
                  <option>IT / Security</option>
                  <option>Executive</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-sm font-semibold text-[#0D2636] leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Which task are you trying to complete?
              </label>
              <select
                suppressHydrationWarning
                defaultValue="Plan an implementation"
                className="w-full min-h-12 pl-4 pr-7 py-3.5 bg-white rounded-lg border border-[#D6DEE3] focus:outline-none focus:border-[#D0AA55] text-base text-[#0D2636] font-normal"
              >
                <option>Plan an implementation</option>
                <option>Assess readiness</option>
                <option>Build a business case</option>
                <option>Design governance</option>
                <option>Prepare for diligence</option>
                <option>Drive adoption</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-sm font-semibold text-[#0D2636] leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                What would the ideal resource do?
              </label>
              <textarea
                suppressHydrationWarning
                className="w-full h-16 px-4 py-3 bg-white rounded-lg border border-[#D6DEE3] focus:outline-none focus:border-[#D0AA55] text-base text-[#0D2636] resize-none"
              />
            </div>

            <div className="min-h-12 pt-1 flex flex-col">
              <button
                type="submit"
                suppressHydrationWarning
                className="w-full min-h-12 px-6 py-3 bg-[#D0AA55] rounded-full text-[#20180A] text-base font-semibold flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                <span>Send request</span>
                <span
                  className="text-xs font-semibold opacity-90"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  →
                </span>
              </button>
            </div>
          </form>

          <div className="pt-1.5">
            <p
              className="text-xs text-[#3E5A6B] leading-5 font-normal"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              We use your information to respond to this request and prioritise
              the utility backlog. Consent is
              <br />
              never pre-checked. Leave the email blank to send anonymously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
