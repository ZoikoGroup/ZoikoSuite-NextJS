"use client";

import React, { useState } from "react";

export default function BookEnterpriseDemoSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    fullName: "",
    institution: "",
    role: "CFO / finance",
    entities: "",
    primaryQuestion: "Coexistence with our core",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-[#0F476A] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy & Disclaimer */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#C59B3F" }}
            >
              NEXT STEP
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-6">
            Bring the internal action your auditors asked you to reconstruct
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-10">
            A vendor contract signed without the second signature. An obligation
            that escalated late because nobody owned it. A payroll release
            approved outside the local mandate. We will trace one through
            context, authority and evidence against your own entity and
            jurisdiction structure.
          </p>

          {/* Left Footer Disclaimer */}
          <div className="flex items-start gap-4 border-l-2 border-[#C59B3F] pl-4 py-1">
            <p className="text-xs text-gray-400 leading-relaxed">
              No capability availability, jurisdiction coverage, residency
              option, certification, supervisory approval or regulated outcome
              is committed outside an approved commercial document.
            </p>
          </div>
        </div>

        {/* Right Side: Demo Form Card */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-8 lg:p-10 text-[#0F172A] shadow-xl">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-1">
            Book enterprise demo
          </h3>
          <p className="text-xs lg:text-sm text-gray-500 mb-8">
            Every section of this page was readable without it.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Row 1: Work email & Full name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Work email
                </label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#CBD5E1] px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C59B3F]/50 focus:border-[#C59B3F]"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#CBD5E1] px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C59B3F]/50 focus:border-[#C59B3F]"
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 2: Institution & Your role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#CBD5E1] px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C59B3F]/50 focus:border-[#C59B3F]"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Your role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#CBD5E1] px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C59B3F]/50 focus:border-[#C59B3F]"
                />
              </div>
            </div>

            {/* Row 3: Entities and jurisdictions in scope & Primary question */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Entities and jurisdictions in scope
                </label>
                <input
                  type="text"
                  name="entities"
                  value={formData.entities}
                  onChange={handleChange}
                  placeholder="Approximate counts are fine"
                  className="w-full rounded-lg border border-[#CBD5E1] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C59B3F]/50 focus:border-[#C59B3F]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Primary question
                </label>
                <input
                  type="text"
                  name="primaryQuestion"
                  value={formData.primaryQuestion}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#CBD5E1] px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C59B3F]/50 focus:border-[#C59B3F]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-[#D0AA55] hover:bg-[#C59B3F] text-[#08222F] font-bold py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm"
            >
              Book enterprise demo →
            </button>

            {/* Form Footer Note */}
            <p className="text-[11px] text-gray-500 leading-relaxed mt-1">
              We use your information to respond to this request. Consent is
              never pre-checked. See the{" "}
              <a href="#" className="underline hover:text-gray-700">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
