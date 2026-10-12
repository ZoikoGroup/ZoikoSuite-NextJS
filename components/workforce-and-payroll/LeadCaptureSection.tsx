"use client";

import React, { useState } from "react";
import { FONT_INTER, REGION_OPTIONS } from "./data";

const inputClass =
  "w-full h-[46px] px-[16px] bg-[#FBFAF7] border border-[#CFCABB] rounded-[9px] text-[14px] text-[#101E2B] outline-none focus:border-[#CDA85B]";
const labelClass = "text-[13px] font-semibold text-[#33424D]";

export default function LeadCaptureSection() {
  const [challenge, setChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend endpoint is wired up for this design-stage form.
    setSubmitted(true);
  };

  return (
    <section
      id="lead-capture"
      className="scroll-mt-[100px] w-full bg-[#08222F] flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[76px]"
    >
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[32px] lg:gap-[44px]">
        <div className="flex flex-col items-start gap-[11px]">
          <h2
            className="text-[26px] md:text-[30px] font-bold leading-[1.2] tracking-[-0.3px] text-white"
            style={{ fontFamily: FONT_INTER }}
          >
            See how your workforce-to-payroll workflow could be governed.
          </h2>
          <p
            className="text-[15px] font-normal leading-[1.5] text-[#A9B8C0]"
            style={{ fontFamily: FONT_INTER }}
          >
            Tell us your systems, regions and decision points so we can scope
            the right conversation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[16px] p-[20px] sm:p-[28px] flex flex-col gap-[18px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="email" className={labelClass} style={{ fontFamily: FONT_INTER }}>
                Work email
              </label>
              <input id="email" name="email" type="email" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="fullName" className={labelClass} style={{ fontFamily: FONT_INTER }}>
                Full name
              </label>
              <input id="fullName" name="fullName" type="text" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="org" className={labelClass} style={{ fontFamily: FONT_INTER }}>
                Organization
              </label>
              <input id="org" name="org" type="text" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="workRole" className={labelClass} style={{ fontFamily: FONT_INTER }}>
                Work role <span className="font-normal text-[#8B959D]">(optional)</span>
              </label>
              <select id="workRole" name="workRole" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select…
                </option>
                <option>CHRO</option>
                <option>Controller</option>
                <option>COO</option>
                <option>CIO</option>
                <option>Tax Leader</option>
                <option>Compliance Leader</option>
                <option>Audit Committee</option>
                <option>Board of Directors</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <fieldset className="flex flex-col gap-[10px]">
            <legend className={labelClass} style={{ fontFamily: FONT_INTER }}>
              Countries / regions of interest{" "}
              <span className="font-normal text-[#8B959D]">(optional)</span>
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[8px]">
              {REGION_OPTIONS.map((region) => (
                <label
                  key={region}
                  className="flex items-center gap-[10px] px-[12px] py-[10px] bg-white border border-[#E4E1D8] rounded-[8px] text-[13px] font-medium text-[#101E2B]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  <input
                    type="checkbox"
                    name="regions"
                    value={region}
                    className="w-[16px] h-[16px] rounded-[2.5px] border border-[#767676]"
                  />
                  {region}
                </label>
              ))}
            </div>
            <span
              className="text-[12px] font-normal text-[#5D6A74]"
              style={{ fontFamily: FONT_INTER }}
            >
              Regions you list tell us where to look — they are not a
              statement that the platform supports them.
            </span>
          </fieldset>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="payrollSystem" className={labelClass} style={{ fontFamily: FONT_INTER }}>
              Current payroll system <span className="font-normal text-[#8B959D]">(optional)</span>
            </label>
            <input id="payrollSystem" name="payrollSystem" type="text" className={inputClass} />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="challenge" className={labelClass} style={{ fontFamily: FONT_INTER }}>
              Primary challenge
            </label>
            <textarea
              id="challenge"
              name="challenge"
              required
              minLength={20}
              maxLength={1000}
              rows={4}
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              className={`${inputClass} h-auto py-[11px] resize-y`}
            />
            <span
              className="text-[12px] font-normal text-[#5D6A74]"
              style={{ fontFamily: FONT_INTER }}
            >
              20–1,000 characters. Please don&rsquo;t include sensitive
              employee or pay details. {challenge.length}/1000
            </span>
          </div>

          <label
            className="flex items-start gap-[10px] text-[13px] font-normal text-[#33424D]"
            style={{ fontFamily: FONT_INTER }}
          >
            <input
              type="checkbox"
              required
              className="mt-[2px] w-[20px] h-[20px] rounded-[2.5px] border border-[#767676]"
            />
            I agree that ZoikoSuite may process these details to respond to
            this request, as described in the{" "}
            <a href="/legal/privacy-policy" className="font-semibold text-[#0F476A] underline">
              Privacy Notice
            </a>
            .
          </label>

          <label
            className="flex items-start gap-[10px] text-[13px] font-normal text-[#33424D]"
            style={{ fontFamily: FONT_INTER }}
          >
            <input
              type="checkbox"
              className="mt-[2px] w-[20px] h-[20px] rounded-[2.5px] border border-[#767676]"
            />
            Send me relevant ZoikoSuite updates.{" "}
            <span className="text-[#8B959D]">
              (optional — separate from your request)
            </span>
          </label>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center min-h-[46px] px-[22px] py-[13px] bg-[#CDA85B] rounded-[10px] text-[14.5px] font-semibold text-[#08222F] hover:opacity-90 transition-opacity"
            style={{ fontFamily: FONT_INTER }}
          >
            Request a demo
          </button>

          <p
            className="text-[12px] font-normal leading-[1.5] text-[#5D6A74]"
            style={{ fontFamily: FONT_INTER }}
          >
            Your request is used to respond to you. No booking is implied
            until our scheduling confirms a time.
          </p>

          {submitted && (
            <p
              role="status"
              className="text-[13px] font-semibold text-[#3D7A52]"
              style={{ fontFamily: FONT_INTER }}
            >
              Thanks — this is a design preview, so nothing was actually sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
