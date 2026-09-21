"use client";

import React from "react";
import { motion } from "framer-motion";

interface FieldProps {
  label: React.ReactNode;
  optionalText?: string;
  placeholder?: string;
  type?: string;
  name: string;
}

function Field({
  label,
  optionalText,
  placeholder,
  type = "text",
  name,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={`accessibility-${name}`}
        className="text-sm font-semibold text-[#111827] leading-5"
      >
        {label}
        {optionalText && (
          <span className="font-normal text-[#4B5563]"> {optionalText}</span>
        )}
      </label>
      <input
        id={`accessibility-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full min-h-12 px-3.5 rounded-lg border border-[#E5E7EB] bg-white text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#9CA3AF] transition-colors"
      />
    </div>
  );
}

export default function AccessibilityIssueReportSection() {
  return (
    <section
      id="accessibility-report-form"
      className="w-full py-14 px-6 lg:px-14 flex justify-center bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1320px] rounded-xl overflow-hidden border-2 border-[#0F476A] bg-[#EEF2F5] shadow-lg"
      >
        {/* Header band */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#0F476A] flex flex-col gap-[5px]">
          <h2 className="text-xl sm:text-2xl font-semibold text-white leading-7">
            Found an accessibility barrier? Tell us what happened.
          </h2>
          <p className="text-sm text-[#C5D1DE] leading-5 max-w-3xl">
            We want to understand the task you were trying to complete and the
            barrier you encountered.{" "}
            <strong className="font-bold">
              You do not need to be a customer or provide marketing consent to
              report an issue.
            </strong>
          </p>
        </div>

        {/* Form body */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="px-4 sm:px-6 py-4 bg-white flex flex-col gap-3.5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Field
              name="page-or-feature"
              label="Page or feature"
              placeholder="Where you encountered the barrier"
            />
            <Field
              name="what-you-were-trying-to-do"
              label="What you were trying to do"
              placeholder="The task you were completing"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="accessibility-what-happened"
              className="text-sm font-semibold text-[#111827] leading-5"
            >
              What happened
            </label>
            <textarea
              id="accessibility-what-happened"
              name="what-happened"
              rows={3}
              className="w-full px-3.5 py-3 rounded-lg border border-[#E5E7EB] bg-white text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#9CA3AF] transition-colors resize-y"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Field
              name="input-method"
              label="Input method or assistive technology"
              optionalText="(optional)"
              placeholder="For example: keyboard only, screen reader"
            />
            <Field
              name="browser-and-device"
              label="Browser and device"
              optionalText="(optional)"
              placeholder="If you know it"
            />
          </div>

          <Field
            name="contact-email"
            label="Contact email"
            optionalText="(optional — leave blank to report anonymously)"
            type="email"
            placeholder=""
          />

          <div className="w-full pt-1 flex flex-col items-start">
            <button
              type="submit"
              className="self-stretch min-h-12 px-6 py-3 bg-[#D0AA55] rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[#D0AA55] inline-flex justify-center items-center gap-2.5 transition-colors cursor-pointer hover:bg-[#c29c4c]"
            >
              <span className="text-center justify-center text-[#08222F] text-base font-semibold font-['Archivo']">
                Submit accessibility issue
              </span>
              <span className="pb-[3px] opacity-90 inline-flex flex-col justify-start items-center">
                <span className="text-center justify-center text-[#08222F] text-xs font-semibold font-['JetBrains_Mono']">
                  →
                </span>
              </span>
            </button>
          </div>

          <p className="text-xs text-[#4B5563] leading-5">
            We collect only what you enter above, to investigate and respond to
            the barrier you describe.{" "}
            <strong className="font-bold">
              Please do not include disability, medical or other health
              information
            </strong>{" "}
            — we do not need it and do not ask for it. If you provide an email
            we will use it solely to follow up on this report.
          </p>
        </form>
      </motion.div>
    </section>
  );
}