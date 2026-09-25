"use client";
import React, { useState } from "react";

export default function LicensingRequestsSection() {
  const [requestType, setRequestType] = useState("Licensing question");
  const [productRelease, setProductRelease] = useState("");
  const [componentLicense, setComponentLicense] = useState("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LICENSING QUESTIONS, SOURCE REQUESTS & CORRECTIONS
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            No sales routing by default
          </h1>
        </div>

        {/* Form Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-6 md:p-10 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            {/* Row 1: Request type & Product / release */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Request type
                </label>
                <div className="relative">
                  <select
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A] appearance-none cursor-pointer"
                  >
                    <option value="Licensing question">
                      Licensing question
                    </option>
                    <option value="Source request">Source request</option>
                    <option value="Correction">Correction</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Product / release
                </label>
                <input
                  type="text"
                  value={productRelease}
                  onChange={(e) => setProductRelease(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Row 2: Component / license (if known) */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                Component / license (if known)
              </label>
              <input
                type="text"
                value={componentLicense}
                onChange={(e) => setComponentLicense(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
              />
            </div>

            {/* Row 3: Details */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                Details
              </label>
              <textarea
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A] resize-none"
              />
            </div>

            {/* Row 4: Email & Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Organization (optional)
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                style={{ borderRadius: "8px" }}
                className="bg-white border border-[#0b1329] text-[#0b1329] font-semibold px-6 py-3 text-sm hover:bg-[#0b1329] hover:text-white transition-colors duration-200 cursor-pointer shadow-xs"
              >
                Submit request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
