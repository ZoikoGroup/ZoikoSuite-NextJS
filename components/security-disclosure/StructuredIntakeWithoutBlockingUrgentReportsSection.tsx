"use client"
import React, { useState } from "react";

export default function StructuredIntakeWithoutBlockingUrgentReportsSection() {
  const [reportTitle, setReportTitle] = useState("");
  const [affectedAsset, setAffectedAsset] = useState("");
  const [summary, setSummary] = useState("");
  const [reproductionSteps, setReproductionSteps] = useState("");
  const [observedImpact, setObservedImpact] = useState("");
  const [publicDisclosurePlans, setPublicDisclosurePlans] = useState("None");
  const [researcherName, setResearcherName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SECURE REPORT FORM
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Structured intake without blocking urgent reports
          </h1>
        </div>

        {/* Form Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-8 md:p-12 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            {/* Row 1: Report title & Affected asset */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                  Report title
                </label>
                <input
                  type="text"
                  value={reportTitle}
                  onChange={(e) => setReportTitle(e.target.value)}
                  className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                  Affected asset
                </label>
                <input
                  type="text"
                  placeholder="Search/select from public scope..."
                  value={affectedAsset}
                  onChange={(e) => setAffectedAsset(e.target.value)}
                  className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329]"
                />
              </div>
            </div>

            {/* Row 2: Summary */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                Summary — what is wrong and why it matters
              </label>
              <textarea
                rows={3}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] resize-none"
              />
            </div>

            {/* Row 3: Reproduction steps */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                Reproduction steps
              </label>
              <textarea
                rows={4}
                value={reproductionSteps}
                onChange={(e) => setReproductionSteps(e.target.value)}
                placeholder="Ordered steps, requests, prerequisites"
                className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] resize-none"
              />
            </div>

            {/* Row 4: Observed impact & Public disclosure plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                  Observed impact
                </label>
                <input
                  type="text"
                  value={observedImpact}
                  onChange={(e) => setObservedImpact(e.target.value)}
                  className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                  Public disclosure plans
                </label>
                <div className="relative">
                  <select
                    value={publicDisclosurePlans}
                    onChange={(e) => setPublicDisclosurePlans(e.target.value)}
                    className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] appearance-none"
                  >
                    <option value="None">None</option>
                    <option value="Coordinated">Coordinated</option>
                    <option value="Immediate">Immediate</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: Researcher name & Contact email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                  Researcher name / handle (optional)
                </label>
                <input
                  type="text"
                  value={researcherName}
                  onChange={(e) => setResearcherName(e.target.value)}
                  className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1329]">
                  Contact email
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-[#FBF9F5] border border-[#DCD6C8] rounded-md px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329]"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="policy-confirm"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="w-4 h-4 text-[#0b1329] border-[#DCD6C8] rounded focus:ring-0"
              />
              <label
                htmlFor="policy-confirm"
                className="text-xs text-gray-600 font-light"
              >
                I confirm this report is submitted under the current published
                policy
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                style={{ borderRadius: "8px" }}
                className="bg-white border border-[#0b1329] text-[#0b1329] px-6 py-3 text-sm font-semibold hover:bg-[#0b1329] hover:text-white transition-colors"
              >
                Submit report
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
