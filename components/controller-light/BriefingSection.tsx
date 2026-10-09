"use client";

import React, { useState } from "react";
import { FONT_ARCHIVO, FONT_INTER } from "./data";

const inputClass =
  "w-full h-[46px] px-[16px] bg-white border border-[#CCD8DF] rounded-[5px] text-[13px] text-[#263E49] outline-none focus:border-[#D0A644]";
const labelClass = "text-[12px] font-bold text-[#263E49]";

export default function BriefingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Per the design: "This form sends/stores no information and books no
    // meeting." No backend endpoint is wired up.
    setSubmitted(true);
  };

  return (
    <section
      id="briefing"
      className="scroll-mt-[100px] w-full bg-white flex justify-center px-4 md:px-8 lg:px-[170px] py-[52px] md:py-[70px]"
    >
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[395px_1fr] gap-[36px] lg:gap-[40px]">
        <div className="flex flex-col items-start gap-[17px]">
          <p
            className="text-[10px] font-bold tracking-[1.8px] uppercase text-[#B08A38]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Local briefing preview
          </p>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[39px] font-bold leading-[1.18] tracking-[-1px] text-[#233640]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Start with one operating decision.
          </h2>
          <p
            className="pt-[7px] max-w-[346px] text-[16px] font-normal leading-[26.4px] text-[#233640]"
            style={{ fontFamily: FONT_INTER }}
          >
            Approved briefing/provider and privacy routes were not supplied.
            This form sends/stores no information and books no meeting.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[14px] p-[24px] md:p-[30px] bg-white border border-[#DBE3E7] rounded-[7px]"
        >
          <h3
            className="text-[20px] font-bold leading-[26px] text-[#263E49]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Evaluation context
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="full-name" className={labelClass} style={{ fontFamily: FONT_ARCHIVO }}>
                Full name
              </label>
              <input id="full-name" name="full-name" type="text" className={inputClass} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="work-email" className={labelClass} style={{ fontFamily: FONT_ARCHIVO }}>
                Work email
              </label>
              <input id="work-email" name="work-email" type="email" className={inputClass} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="organization" className={labelClass} style={{ fontFamily: FONT_ARCHIVO }}>
                Organization
              </label>
              <input id="organization" name="organization" type="text" className={inputClass} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="role" className={labelClass} style={{ fontFamily: FONT_ARCHIVO }}>
                Role (optional)
              </label>
              <select id="role" name="role" defaultValue="" className={`${inputClass} font-bold`} style={{ fontFamily: FONT_ARCHIVO }}>
                <option value="" disabled>
                  Choose one
                </option>
                <option>Controller / CFO</option>
                <option>CIO</option>
                <option>CHRO</option>
                <option>COO</option>
                <option>Tax / Compliance</option>
                <option>Audit / Board</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label htmlFor="message" className={labelClass} style={{ fontFamily: FONT_ARCHIVO }}>
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className={`${inputClass} h-auto py-[12px] resize-y`}
            />
          </div>

          <p
            className="text-[11px] font-normal leading-[18.7px] text-[#778489]"
            style={{ fontFamily: FONT_INTER }}
          >
            No sensitive operational, personnel or customer data, credentials
            or confidential evidence.
          </p>

          <label className="flex items-start gap-[10px] text-[12px] text-[#263E49]" style={{ fontFamily: FONT_INTER }}>
            <input
              type="checkbox"
              required
              className="mt-[2px] w-[17px] h-[17px] rounded-[2.5px] border border-[#767676]"
            />
            I acknowledge this is a local preview.
          </label>
          <label className="flex items-start gap-[10px] text-[12px] text-[#263E49]" style={{ fontFamily: FONT_INTER }}>
            <input
              type="checkbox"
              className="mt-[2px] w-[17px] h-[17px] rounded-[2.5px] border border-[#767676]"
            />
            Optional updates when a live service is approved.
          </label>

          <button
            type="submit"
            className="self-start inline-flex items-center justify-center min-h-[44px] px-[19px] py-[12px] bg-[#D0A644] border border-[#D0A644] rounded-[6px] text-[12px] font-bold text-white hover:opacity-90 transition-opacity"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Review briefing context
          </button>

          {submitted && (
            <p
              role="status"
              className="text-[12px] font-normal text-[#3D7A52]"
              style={{ fontFamily: FONT_INTER }}
            >
              Noted locally — nothing was sent or stored.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
