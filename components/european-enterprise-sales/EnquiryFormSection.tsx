"use client";

import React, { useState } from "react";
import {
  ENQUIRY_TOPICS,
  RELATIONSHIP_OPTIONS,
  ROLLOUT_COUNTRIES,
  ORG_SIZE_OPTIONS,
  EVALUATION_STAGE_OPTIONS,
  DECISION_TIMELINE_OPTIONS,
  FONT_ARCHIVO,
  COLORS,
} from "./data";

const labelClass = "text-[12px] font-bold";
const selectClass =
  "w-full min-h-[46px] px-[16px] pr-[28px] py-[12.5px] bg-white border rounded-[10px] text-[16px] outline-none";

const MIN_DETAILS = 10;
const MAX_DETAILS = 1500;

export default function EnquiryFormSection() {
  const [countries, setCountries] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleCountry = (country: string) => {
    setCountries((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    );
  };

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
      <div className="w-full max-w-[1240px] flex flex-col">
        <div className="flex flex-col gap-[17px] pb-[15px]">
          <div className="flex items-center gap-[12px]">
            <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[2px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
            >
              Discuss enterprise requirements
            </span>
          </div>
          <h2
            className="text-[26px] md:text-[34px] font-bold leading-[1.18] tracking-[-1px]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
          >
            Tell us about your enterprise enquiry
          </h2>
          <p
            className="text-[16px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
          >
            Two short stages help organize your requirements
            <br />
            and business contact.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border rounded-[4px] p-[22px] sm:p-[34px] flex flex-col gap-[28px]"
          style={{ borderColor: COLORS.border }}
        >
          <h3
            className="text-[18px] font-bold"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
          >
            Your business need
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="topic" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Enquiry topic *
              </label>
              <select id="topic" name="topic" required defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
                <option value="" disabled>
                  Choose your topic
                </option>
                {ENQUIRY_TOPICS.map((topic) => (
                  <option key={topic}>{topic}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="relationship" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Relationship *
              </label>
              <select id="relationship" name="relationship" required defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
                <option value="" disabled>
                  Select your relationship
                </option>
                {RELATIONSHIP_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <fieldset className="rounded-[3px] border pt-[22px] px-[13px] pb-[16px]" style={{ borderColor: COLORS.border }}>
            <legend className={`${labelClass} px-[2px]`} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
              Requested rollout countries (optional)
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[16px] gap-y-[8px] pb-[16px]">
              {ROLLOUT_COUNTRIES.map((country) => {
                const checked = countries.includes(country);
                return (
                  <label
                    key={country}
                    className="flex items-center gap-[10px] text-[12px] font-normal"
                    style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleCountry(country)}
                      className="w-[17px] h-[17px] rounded-[2.5px]"
                      style={{ borderColor: "#767676" }}
                    />
                    {country}
                  </label>
                );
              })}
            </div>
            <input
              type="text"
              name="additionalCountries"
              placeholder="Additional countries (optional)"
              className="w-full min-h-[46px] px-[12px] py-[16px] bg-white border rounded-[10px] text-[16px] outline-none"
              style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal, fontFamily: FONT_ARCHIVO }}
            />
          </fieldset>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="orgSize" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Organization size (optional)
              </label>
              <select id="orgSize" name="orgSize" defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
                <option value="" disabled>
                  Select a range
                </option>
                {ORG_SIZE_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="stage" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
                Evaluation stage *
              </label>
              <select id="stage" name="stage" required defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
                <option value="" disabled>
                  Select your stage
                </option>
                {EVALUATION_STAGE_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-[7px]">
            <label htmlFor="timeline" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
              Decision timeline (optional)
            </label>
            <select id="timeline" name="timeline" defaultValue="" className={selectClass} style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal }}>
              <option value="" disabled>
                Select a timeline
              </option>
              {DECISION_TIMELINE_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-[7px]">
            <label htmlFor="details" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
              Tell us what you need *
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={5}
              minLength={MIN_DETAILS}
              maxLength={MAX_DETAILS}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full min-h-[150px] px-[16px] py-[14px] bg-white border rounded-[10px] text-[16px] outline-none resize-y"
              style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal, fontFamily: FONT_ARCHIVO }}
            />
            <p className="text-[11px] font-normal" style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}>
              10–1,500 characters. Describe your goals and evaluation questions. {details.length}/{MAX_DETAILS}
            </p>
          </div>

          <div className="flex flex-col gap-[7px]">
            <label htmlFor="country" className={labelClass} style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}>
              Organization country / region *
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              className="w-full min-h-[46px] px-[12px] py-[14px] bg-white border rounded-[10px] text-[16px] outline-none"
              style={{ borderColor: COLORS.borderSoft, color: COLORS.headingTeal, fontFamily: FONT_ARCHIVO }}
            />
            <p className="text-[11px] font-normal" style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}>
              Choose a suggestion or type your country. Location does not confirm service coverage.
            </p>
          </div>

          <div className="flex items-center pt-[4px]">
            <button
              type="submit"
              className="inline-flex items-center gap-[8px] justify-center min-h-[46px] px-[20px] rounded-[10px] text-[12px] font-bold hover:opacity-90 transition-opacity"
              style={{ fontFamily: FONT_ARCHIVO, backgroundColor: COLORS.gold, color: COLORS.darkBg }}
            >
              Continue to contact
              <span aria-hidden="true">→</span>
            </button>
          </div>

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
