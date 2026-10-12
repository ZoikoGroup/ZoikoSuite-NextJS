"use client";

import React, { useState } from "react";
import { EVALUATION_PRIORITIES, FONT_INTER } from "./data";

const inputClass =
  "w-full h-[46px] px-[16px] bg-[#FBFAF7] border border-[#CFCABB] rounded-[9px] text-[14px] text-[#101E2B] outline-none focus:border-[#CDA85B]";
const labelClass = "text-[13px] font-semibold text-[#33424D]";

const MAX_PRIORITIES = 3;
const MAX_MESSAGE = 800;

export default function ConversionFormSection() {
  const [priorities, setPriorities] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const togglePriority = (priority: string) => {
    setPriorities((prev) => {
      if (prev.includes(priority)) return prev.filter((p) => p !== priority);
      if (prev.length >= MAX_PRIORITIES) return prev;
      return [...prev, priority];
    });
  };

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
            Review your operating model with a CIO-focused briefing.
          </h2>
          <p
            className="text-[15px] font-normal leading-[1.5] text-[#A9B8C0]"
            style={{ fontFamily: FONT_INTER }}
          >
            Bring your priorities, constraints, and architecture questions.
            We can discuss fit against verified product capabilities.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[16px] p-[20px] sm:p-[28px] flex flex-col gap-[14px]"
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
                Role <span className="font-normal text-[#8B959D]">(optional)</span>
              </label>
              <select id="workRole" name="workRole" defaultValue="CIO" className={inputClass}>
                <option>CIO</option>
                <option>COO</option>
                <option>Controller</option>
                <option>CHRO</option>
                <option>Compliance leader</option>
                <option>Tax leader</option>
                <option>Audit Committee</option>
                <option>Board</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <fieldset className="flex flex-col gap-[10px]">
            <legend className={labelClass} style={{ fontFamily: FONT_INTER }}>
              Evaluation priority{" "}
              <span className="font-normal text-[#8B959D]">
                (optional, choose up to {MAX_PRIORITIES})
              </span>
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[8px]">
              {EVALUATION_PRIORITIES.map((priority) => {
                const isChecked = priorities.includes(priority);
                const disabled =
                  !isChecked && priorities.length >= MAX_PRIORITIES;
                return (
                  <label
                    key={priority}
                    className={`flex items-center gap-[10px] px-[12px] py-[10px] bg-white border border-[#E4E1D8] rounded-[8px] text-[13px] font-medium text-[#101E2B] ${
                      disabled ? "opacity-50" : ""
                    }`}
                    style={{ fontFamily: FONT_INTER }}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      disabled={disabled}
                      onChange={() => togglePriority(priority)}
                      className="w-[16px] h-[16px] rounded-[2.5px] border border-[#767676]"
                    />
                    {priority}
                  </label>
                );
              })}
            </div>
            <span
              className="text-[12px] font-normal text-[#5D6A74]"
              style={{ fontFamily: FONT_INTER }}
            >
              The priorities you choose are included with your request.{" "}
              {priorities.length} of {MAX_PRIORITIES} selected.
            </span>
          </fieldset>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="region" className={labelClass} style={{ fontFamily: FONT_INTER }}>
              Region / market <span className="font-normal text-[#8B959D]">(optional)</span>
            </label>
            <select id="region" name="region" defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select…
              </option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>European Union</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>India</option>
              <option>Other</option>
            </select>
            <span
              className="text-[12px] font-normal text-[#5D6A74]"
              style={{ fontFamily: FONT_INTER }}
            >
              Used for routing only. It does not imply that any country or
              region is supported.
            </span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="message" className={labelClass} style={{ fontFamily: FONT_INTER }}>
              Message <span className="font-normal text-[#8B959D]">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={MAX_MESSAGE}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} h-auto py-[11px] resize-y`}
            />
            <span
              className="text-[12.5px] font-semibold text-[#9A6A22]"
              style={{ fontFamily: FONT_INTER }}
            >
              Please don&rsquo;t submit sensitive information, system
              credentials or employee data.{" "}
              <span className="font-normal text-[#5D6A74]">
                Up to {MAX_MESSAGE} characters. {message.length}/{MAX_MESSAGE}
              </span>
            </span>
          </div>

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

          <p
            className="text-[12px] font-normal leading-[1.5] text-[#5D6A74]"
            style={{ fontFamily: FONT_INTER }}
          >
            How we use your details: see the{" "}
            <a
              href="/legal/privacy-policy"
              className="font-medium text-[#8B959D] underline"
            >
              Privacy Notice
            </a>
            . This notice is informational; submitting is not a marketing
            opt-in.
          </p>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center min-h-[46px] px-[22px] py-[13px] bg-[#CDA85B] rounded-[10px] text-[14.5px] font-semibold text-[#08222F] hover:opacity-90 transition-opacity"
            style={{ fontFamily: FONT_INTER }}
          >
            Request a briefing
          </button>

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
