"use client";

import React, { useState } from "react";

export default function ReportMisuseSection() {
  const [reportData, setReportData] = useState({
    category: "Impersonation",
    urgency: "Standard",
    locationUrl: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          REPORT TRADEMARK OR BRAND MISUSE
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] md:text-[26px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          Evidence-first, security-aware routing
        </h2>

        {/* Form Box */}
        <div className="w-full bg-white border border-[#DCD6C8] rounded-[10px] p-4 sm:p-7 md:p-9 shadow-xs">
          {submitted ? (
            <div className="py-8 sm:py-10 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F6F1E6] border border-[#DCD6C8] text-[#16223A] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                ✓
              </div>
              <h3 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#16223A] mb-2">
                Report Successfully Received
              </h3>
              <p className="font-sans text-[12.5px] sm:text-[13px] text-[#4B5872] max-w-[500px] mx-auto mb-6">
                Thank you for helping protect our customers and brand integrity. Our IP enforcement and security team has
                triaged your submission for priority investigation.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setReportData({
                    category: "Impersonation",
                    urgency: "Standard",
                    locationUrl: "",
                  });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-[5px] text-[13px] font-bold text-[#0E2843] border border-[#1A4270] hover:bg-[#0E2843] hover:text-white transition-colors cursor-pointer"
              >
                Submit another report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                    What happened?
                  </label>
                  <select
                    value={reportData.category}
                    onChange={(e) => setReportData({ ...reportData, category: e.target.value })}
                    className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                  >
                    <option value="Impersonation">Impersonation</option>
                    <option value="Unauthorized Logo Use">Unauthorized Logo Use</option>
                    <option value="Phishing / Fake Login">Phishing / Fake Login</option>
                    <option value="Counterfeit Service">Counterfeit Service</option>
                    <option value="Misleading Co-branding">Misleading Co-branding</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                    Urgency
                  </label>
                  <select
                    value={reportData.urgency}
                    onChange={(e) => setReportData({ ...reportData, urgency: e.target.value })}
                    className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                  >
                    <option value="Standard">Standard</option>
                    <option value="Urgent - Active Phishing">Urgent - Active Phishing</option>
                    <option value="Critical Impersonation">Critical Impersonation</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Location */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                  Where? (URL, app store, social account, marketplace, etc.)
                </label>
                <input
                  type="text"
                  required
                  value={reportData.locationUrl}
                  onChange={(e) => setReportData({ ...reportData, locationUrl: e.target.value })}
                  placeholder="https://example.com/suspicious-page or handle name"
                  className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] placeholder-[#4B5872]/60 bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                />
              </div>

              {/* Row 3: Evidence */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                  Evidence (screenshot/file upload)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    className="w-full text-[11.5px] sm:text-[12px] text-[#4B5872] file:mr-3 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-[5px] file:border file:border-[#DCD6C8] file:text-[11.5px] sm:file:text-[12px] file:font-semibold file:bg-[#FBFAF7] file:text-[#16223A] hover:file:bg-[#F6F1E6] file:cursor-pointer cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-[18px] py-[11px] border border-[#1A4270] rounded-[5px] text-[13px] font-bold leading-[20.8px] text-[#0E2843] bg-transparent hover:bg-[#0E2843] hover:text-white transition-all cursor-pointer"
                >
                  Submit report
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
