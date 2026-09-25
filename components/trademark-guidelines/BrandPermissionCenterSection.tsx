"use client";

import React, { useState } from "react";

export default function BrandPermissionCenterSection() {
  const [formData, setFormData] = useState({
    relationship: "Customer",
    markAsset: "Select verified mark/asset…",
    useType: "Logo",
    commercialUse: "Yes",
    purpose: "",
    territory: "",
    dateRange: "",
    confirmed: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmed) {
      alert("Please confirm that the information is accurate before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#F6F1E6] py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          BRAND PERMISSION CENTER
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] md:text-[26px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          Fast, specific, evidence-linked
        </h2>

        {/* Form Box */}
        <div className="w-full bg-white border border-[#DCD6C8] rounded-[10px] p-4 sm:p-7 md:p-9 shadow-xs">
          {submitted ? (
            <div className="py-8 sm:py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F6F1E6] border border-[#DCD6C8] text-[#16223A] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                ✓
              </div>
              <h3 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#16223A] mb-2">
                Permission Request Submitted
              </h3>
              <p className="font-sans text-[12.5px] sm:text-[13px] text-[#4B5872] max-w-[500px] mx-auto mb-6">
                Your request has been routed to the ZoikoSuite Brand & IP Legal team. A formal tracking reference has been
                generated and sent to your email.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    relationship: "Customer",
                    markAsset: "Select verified mark/asset…",
                    useType: "Logo",
                    commercialUse: "Yes",
                    purpose: "",
                    territory: "",
                    dateRange: "",
                    confirmed: false,
                  });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-[5px] text-[13px] font-bold text-[#0E2843] border border-[#1A4270] hover:bg-[#0E2843] hover:text-white transition-colors cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                    Relationship
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                  >
                    <option value="Customer">Customer</option>
                    <option value="Technology Partner">Technology Partner</option>
                    <option value="Reseller">Reseller</option>
                    <option value="Developer">Developer</option>
                    <option value="Media">Media / Press</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                    Mark / asset
                  </label>
                  <select
                    value={formData.markAsset}
                    onChange={(e) => setFormData({ ...formData, markAsset: e.target.value })}
                    className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                  >
                    <option value="Select verified mark/asset…">Select verified mark/asset…</option>
                    <option value="ZoikoSuite Primary Logo">ZoikoSuite Primary Logo</option>
                    <option value="ZoikoSuite Monochrome Logo">ZoikoSuite Monochrome Variant</option>
                    <option value="ZoikoSuite Wordmark">ZoikoSuite Wordmark</option>
                    <option value="Partner Badge">Partner Badge</option>
                    <option value="UI Screenshot">UI Screenshot</option>
                  </select>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                    Use type
                  </label>
                  <select
                    value={formData.useType}
                    onChange={(e) => setFormData({ ...formData, useType: e.target.value })}
                    className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                  >
                    <option value="Logo">Logo</option>
                    <option value="Wordmark">Wordmark</option>
                    <option value="Screenshot">Screenshot</option>
                    <option value="Badge">Badge</option>
                    <option value="Marketing Collateral">Marketing Collateral</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                    Commercial use
                  </label>
                  <select
                    value={formData.commercialUse}
                    onChange={(e) => setFormData({ ...formData, commercialUse: e.target.value })}
                    className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Purpose / context */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                  Purpose / context
                </label>
                <textarea
                  rows={2}
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  placeholder="Describe exact context, placement, and purpose of mark use..."
                  className="w-full min-h-[52px] p-2.5 sm:p-3 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] placeholder-[#4B5872]/60 bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                />
              </div>

              {/* Row 4: Territory and Date Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                    Territory
                  </label>
                  <input
                    type="text"
                    value={formData.territory}
                    onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
                    placeholder="e.g. United Kingdom, Global, EU"
                    className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] placeholder-[#4B5872]/60 bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                    Start / end date
                  </label>
                  <input
                    type="text"
                    value={formData.dateRange}
                    onChange={(e) => setFormData({ ...formData, dateRange: e.target.value })}
                    placeholder="e.g. Nov 2026 – Nov 2027"
                    className="w-full h-[38px] sm:h-[40px] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-sans text-[#16223A] placeholder-[#4B5872]/60 bg-[#FBFAF7] border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
                  />
                </div>
              </div>

              {/* Row 5: Artwork / mockup upload */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#4B5872] uppercase tracking-[0.03em]">
                  Artwork / mockup upload
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    id="mockup-file"
                    className="w-full text-[11.5px] sm:text-[12px] text-[#4B5872] file:mr-3 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-[5px] file:border file:border-[#DCD6C8] file:text-[11.5px] sm:file:text-[12px] file:font-semibold file:bg-[#FBFAF7] file:text-[#16223A] hover:file:bg-[#F6F1E6] file:cursor-pointer cursor-pointer"
                  />
                </div>
              </div>

              {/* Confirmation Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.confirmed}
                    onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                    className="mt-0.5 rounded border-[#DCD6C8] text-[#16223A] focus:ring-0"
                  />
                  <span className="text-[11.5px] leading-[18.4px] text-[#4B5872]">
                    I confirm this information is accurate and understand submission is not approval
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-[18px] py-[11px] border border-[#1A4270] rounded-[5px] text-[13px] font-bold leading-[20.8px] text-[#0E2843] bg-transparent hover:bg-[#0E2843] hover:text-white transition-all cursor-pointer"
                >
                  Submit permission request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
