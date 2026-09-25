"use client"
import React, { useState } from "react";

export default function AStructuredMinimumDataCollectionReportSection() {
  const [feature, setFeature] = useState("");
  const [concernType, setConcernType] = useState("Inaccurate output");
  const [referenceId, setReferenceId] = useState("");
  const [description, setDescription] = useState("");
  const [identity, setIdentity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            HUMAN REVIEW, CORRECTION & AI CONCERNS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            A structured, minimum-data-collection report
          </h1>
        </div>

        {/* Form Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-8 md:p-12 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            {/* Row 1: AI feature or workflow & Concern type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                  AI feature or workflow
                </label>
                <div className="relative">
                  <select
                    value={feature}
                    onChange={(e) => setFeature(e.target.value)}
                    className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] appearance-none"
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="feature-1">Feature / Workflow 1</option>
                    <option value="feature-2">Feature / Workflow 2</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                  Concern type
                </label>
                <div className="relative">
                  <select
                    value={concernType}
                    onChange={(e) => setConcernType(e.target.value)}
                    className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] appearance-none"
                  >
                    <option value="Inaccurate output">Inaccurate output</option>
                    <option value="Biased output">Biased output</option>
                    <option value="Security risk">Security risk</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Output/event/reference ID */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                Output/event/reference ID (where available)
              </label>
              <input
                type="text"
                value={referenceId}
                onChange={(e) => setReferenceId(e.target.value)}
                className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329]"
              />
            </div>

            {/* Row 3: Description */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                Description
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please do not submit unnecessary sensitive data."
                className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] resize-none"
              />
            </div>

            {/* Row 4: Contact email or authenticated identity */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                Contact email or authenticated identity
              </label>
              <input
                type="text"
                value={identity}
                onChange={(e) => setIdentity(e.target.value)}
                className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                style={{ borderRadius: "8px" }}
                className="bg-white border border-[#0b1329] text-[#0b1329] px-6 py-3 text-sm font-semibold hover:bg-[#0b1329] hover:text-white transition-colors"
              >
                Submit concern
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
