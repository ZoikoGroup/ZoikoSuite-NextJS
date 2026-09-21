"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RequestTemplateTool() {
  return (
    <section className="w-full bg-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 text-white flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col lg:flex-row gap-14 items-start">
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 pt-2.5">
            <span className="w-4 h-[1.5px] bg-orange-400" />
            <span
              className="text-xs font-medium tracking-widest text-orange-400 uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Next step
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-white leading-[49.28px] max-w-[400px]"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Tell us which
            <br />
            template would
            <br />
            actually save you a<br />
            week
          </h2>

          <p
            className="text-lg text-[#94A3B8] leading-7 max-w-[540px] mt-2"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            The catalog is empty because nothing has cleared review yet, not
            <br />
            because nothing is planned. The fastest way to influence what gets
            <br />
            built is to describe the task you are stuck on — the readiness
            <br />
            assessment you rebuilt from scratch, the governance design you did in
            <br />
            a blank document.
          </p>

          <div className="pl-3.5 border-l-2 border-orange-400 mt-2 max-w-[560px]">
            <p
              className="text-xs text-[#94A3B8] leading-5 font-normal"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              No utility availability, release date, file format, compatibility or
              entitlement is committed outside an approved commercial document.
            </p>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="flex-1 w-full bg-white text-[#101828] rounded-2xl p-8 flex flex-col gap-4 shadow-xl">
          <h3
            className="text-xl font-semibold text-[#101828] leading-6"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Request a template or tool
          </h3>
          <p
            className="text-sm text-[#475467] leading-6 font-normal"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            No account needed. This routes to the resource owner, not to sales.
          </p>

          <form className="flex flex-col gap-4 mt-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-3.5">
              <div className="flex-1 flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-[#101828] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Work email{" "}
                  <span className="font-normal text-[#475467]">(optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full h-12 px-4 bg-white rounded-lg border border-[#c5d4e8] focus:outline-none focus:border-orange-400 text-base"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-[#101828] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Your role
                </label>
                <select
                  className="w-full h-12 px-4 bg-white rounded-lg border border-[#c5d4e8] focus:outline-none focus:border-orange-400 text-base"
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
                className="text-sm font-semibold text-[#101828] leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Which task are you trying to complete?
              </label>
              <select
                className="w-full h-12 px-4 bg-white rounded-lg border border-[#c5d4e8] focus:outline-none focus:border-orange-400 text-base"
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
                className="text-sm font-semibold text-[#101828] leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                What would the ideal resource do?
              </label>
              <textarea
                rows={3}
                placeholder="Describe the task, inputs, and desired output..."
                className="w-full p-4 bg-white rounded-lg border border-[#c5d4e8] focus:outline-none focus:border-orange-400 text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 px-6 bg-[#D0AA55] rounded-full text-[#20180A] text-base font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-1"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              <span>Send request</span>
              <span className="font-mono text-xs font-semibold">→</span>
            </button>
          </form>

          <p
            className="text-xs text-[#475467] leading-5 font-normal pt-1"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            We use your information to respond to this request and prioritise the
            utility backlog. Consent is never pre-checked. Leave the email blank
            to send anonymously.
          </p>
        </div>
      </div>
    </section>
  );
}
