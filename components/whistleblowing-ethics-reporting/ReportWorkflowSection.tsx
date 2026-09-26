"use client";

import React from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER } from "./data";

const inputClass =
  "w-full h-[37px] px-[13px] bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] text-[13px] text-[#16223A] placeholder:text-[#757575] outline-none focus:border-[#A8843A]";
const labelClass =
  "text-[11.5px] font-bold leading-[18.4px] text-[#4B5872]";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={id} className={labelClass} style={{ fontFamily: FONT_INTER }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ReportWorkflowSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a design-stage form: no backend endpoint is wired up yet.
    // Wire this up to the real intake/case-management API before launch.
  };

  return (
    <section
      id="report"
      aria-labelledby="report-workflow-title"
      className="scroll-mt-[100px] w-full bg-[#FBFAF7] flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="report-workflow-title"
          eyebrow="Start a report"
          title="Eligibility, location & concern details"
        />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[20px] p-[24px] md:px-[29px] md:py-[32px] bg-white border border-[#DCD6C8] rounded-[8px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <Field id="country" label="Country / region">
              <input id="country" name="country" type="text" className={inputClass} />
            </Field>
            <Field id="relationship" label="Relationship to ZoikoSuite">
              <select id="relationship" name="relationship" className={inputClass}>
                <option>Employee</option>
                <option>Contractor / consultant</option>
                <option>Customer</option>
                <option>Supplier / vendor</option>
                <option>Other</option>
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <Field id="entity" label="Relevant entity/business unit (if known)">
              <input id="entity" name="entity" type="text" className={inputClass} />
            </Field>
            <Field id="language" label="Preferred language">
              <input id="language" name="language" type="text" className={inputClass} />
            </Field>
          </div>

          <Field id="category" label="Concern category">
            <select id="category" name="category" defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select…
              </option>
              <option>Fraud or financial misconduct</option>
              <option>Bribery / corruption</option>
              <option>Conflicts of interest</option>
              <option>Harassment / discrimination where in scope</option>
              <option>Retaliation</option>
              <option>Safety or serious policy breaches</option>
              <option>Data / security misuse</option>
              <option>Human-rights or supply-chain concerns</option>
              <option>Other suspected unlawful or unethical conduct</option>
            </select>
          </Field>

          <Field id="details" label="What happened?">
            <textarea
              id="details"
              name="details"
              placeholder="Please do not include unnecessary sensitive data or passwords/secrets."
              className={`${inputClass} min-h-[71px] py-[9px] resize-y`}
            />
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <Field id="when" label="When did it happen? (approximate is fine)">
              <input id="when" name="when" type="text" className={inputClass} />
            </Field>
            <Field id="ongoing" label="Is this ongoing?">
              <select id="ongoing" name="ongoing" className={inputClass}>
                <option>Yes</option>
                <option>No</option>
                <option>Not sure</option>
              </select>
            </Field>
          </div>

          <Field id="evidence" label="Evidence / attachments (optional)">
            <input
              id="evidence"
              name="evidence"
              type="file"
              className="w-full py-[9px] px-[12px] bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] text-[13px] text-[#16223A] file:mr-[4px] file:px-[6px] file:py-[1px] file:rounded-[2px] file:border file:border-black file:bg-[#EFEFEF] file:text-[13px] file:font-normal file:text-black cursor-pointer"
              style={{ fontFamily: FONT_INTER }}
            />
          </Field>

          <button
            type="submit"
            className="self-start px-[20px] py-[11px] border border-[#1A4270] rounded-[5px] text-[13.5px] font-bold leading-[21.6px] text-[#0E2843] hover:bg-[#F6F1E6] transition-colors"
            style={{ fontFamily: FONT_INTER }}
          >
            Continue to review
          </button>
        </form>
      </div>
    </section>
  );
}
