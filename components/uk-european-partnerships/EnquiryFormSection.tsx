"use client";

import React, { useState } from "react";
import {
  ENQUIRY_TYPES,
  CONTACT_METHOD_OPTIONS,
  COUNTRY_MARKET_OPTIONS,
  EXISTING_RELATIONSHIP_OPTIONS,
  FONT_ARCHIVO,
  COLORS,
} from "./data";

const labelClass = "text-[12px] font-bold";
const inputClass =
  "w-full min-h-[46px] px-[16px] py-[14px] bg-white border rounded-[10px] text-[16px] outline-none";
const selectClass =
  "w-full min-h-[46px] px-[16px] pr-[28px] py-[12.5px] bg-white border rounded-[10px] text-[16px] outline-none";

const MIN_GOAL = 30;
const MAX_GOAL = 3000;

export default function EnquiryFormSection() {
  const [goal, setGoal] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="enquiry"
      className="scroll-mt-[80px] w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[56px] md:py-[78px]"
      style={{ backgroundColor: COLORS.pageCream }}
    >
      <div className="w-full max-w-[1240px] flex flex-col gap-[21px]">
        <div className="flex flex-col gap-[17px]">
          <div className="flex items-center gap-[12px]">
            <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[2px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
            >
              Start with your idea
            </span>
          </div>
          <h2
            className="text-[26px] md:text-[34px] font-bold leading-[1.18] tracking-[-1px]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
          >
            Tell us about your partnership idea
          </h2>
          <p
            className="text-[14px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
          >
            Share a short overview. Please do not include confidential client
            information or sensitive personal data.
          </p>
          <div className="flex flex-col gap-[4px] pt-[2px]">
            <h3
              className="text-[16px] font-bold"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
            >
              Keep the first enquiry focused.
            </h3>
            <p
              className="text-[14px] font-normal leading-[1.65]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
            >
              We do not ask for budgets, financial accounts, ID documents,
              client datasets, employee details, or signed contracts.
            </p>
            <p
              className="text-[14px] font-normal leading-[1.65]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
            >
              Any later exchange of sensitive materials requires an approved
              secure channel.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border rounded-[4px] p-[22px] sm:p-[30px] flex flex-col gap-[18px]"
          style={{ borderColor: COLORS.border }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="method" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Preferred contact method
              </label>
              <select id="method" name="method" defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
                <option value="" disabled>
                  Select (optional)
                </option>
                {CONTACT_METHOD_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="type" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Enquiry type *
              </label>
              <select id="type" name="type" required defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
                <option value="" disabled>
                  Select a pathway
                </option>
                {ENQUIRY_TYPES.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="name" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Full name *
              </label>
              <input id="name" name="name" type="text" required className={inputClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }} />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="email" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Work email *
              </label>
              <input id="email" name="email" type="email" required className={inputClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }} />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="org" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Organization *
              </label>
              <input id="org" name="org" type="text" required className={inputClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }} />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="role" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Role / job title
              </label>
              <input id="role" name="role" type="text" className={inputClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }} />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="country" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Country / market *
              </label>
              <select id="country" name="country" required defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
                <option value="" disabled>
                  Choose a country / market
                </option>
                {COUNTRY_MARKET_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="relationship" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Existing relationship *
              </label>
              <select id="relationship" name="relationship" required defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
                <option value="" disabled>
                  Select
                </option>
                {EXISTING_RELATIONSHIP_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-[7px]">
            <label htmlFor="markets" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
              Intended markets (optional)
            </label>
            <input
              id="markets"
              name="markets"
              type="text"
              placeholder="Countries or regions relevant to your proposal"
              className={inputClass}
              style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal, fontFamily: FONT_ARCHIVO }}
            />
            <p className="text-[11px] font-normal" style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}>
              Selected locations express interest; they do not confirm availability or commercial arrangements.
            </p>
          </div>

          <div className="flex flex-col gap-[7px]">
            <label htmlFor="website" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
              Organization website
            </label>
            <input
              id="website"
              name="website"
              type="url"
              placeholder="https://"
              className={inputClass}
              style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal, fontFamily: FONT_ARCHIVO }}
            />
          </div>

          <div className="flex flex-col gap-[7px]">
            <label htmlFor="goal" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
              Partnership goal *
            </label>
            <textarea
              id="goal"
              name="goal"
              required
              rows={5}
              minLength={MIN_GOAL}
              maxLength={MAX_GOAL}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Describe the opportunity, the organizations involved, and your intended outcome."
              className="w-full min-h-[150px] px-[16px] py-[14px] bg-white border rounded-[10px] text-[16px] outline-none resize-y"
              style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal, fontFamily: FONT_ARCHIVO }}
            />
            <p className="text-[11px] font-normal" style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}>
              30–3,000 characters. No confidential client information or sensitive personal data. {goal.length}/{MAX_GOAL}
            </p>
          </div>

          <label className="flex items-start gap-[12px] pt-[2px]">
            <input
              type="checkbox"
              required
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="mt-[3px] w-[18px] h-[18px] rounded-[2.5px] shrink-0"
              style={{ borderColor: "#767676" }}
            />
            <span
              className="text-[12px] font-bold leading-[1.6]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
            >
              I understand that this is a local preview and my enquiry is not
              being sent. A verified privacy notice and processing
              acknowledgment must replace this preview statement before
              launch. *
            </span>
          </label>

          <p className="text-[11px] font-normal" style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}>
            Fields marked * are required. No marketing opt-in is included
            because an updates service has not been approved.
          </p>

          <button
            type="submit"
            disabled={!acknowledged}
            className="inline-flex items-center gap-[8px] justify-center min-h-[46px] px-[20px] rounded-[10px] text-[12px] font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed w-fit"
            style={{ fontFamily: FONT_ARCHIVO, backgroundColor: COLORS.gold, color: COLORS.darkBg }}
          >
            Send partnership enquiry
            <span aria-hidden="true">↗</span>
          </button>

          {submitted && (
            <p role="status" className="text-[13px] font-bold" style={{ fontFamily: FONT_ARCHIVO, color: "#3D7A52" }}>
              Thanks — this is a design preview, so nothing was actually sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
