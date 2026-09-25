"use client"
import React, { useState } from "react";

export default function InvestorContactAndEngagementSection() {
  const [formData, setFormData] = useState({
    intent: "Institutional investment",
    investorType: "Institutional investor",
    organization: "",
    nameTitle: "",
    businessEmail: "",
    countryJurisdiction: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            INVESTOR CONTACT & ENGAGEMENT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Structured intake — never a transaction flow
          </h1>
        </div>

        {/* Form Container */}
        <div className="w-full bg-white border border-[#DCD6C8] rounded-2xl p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            {/* Row 1: Intent & Investor Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Intent
                </label>
                <input
                  type="text"
                  name="intent"
                  value={formData.intent}
                  onChange={handleChange}
                  className="w-full bg-[#FBFAF7] border border-[#DCD6C8] rounded-lg px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Investor type
                </label>
                <input
                  type="text"
                  name="investorType"
                  value={formData.investorType}
                  onChange={handleChange}
                  className="w-full bg-[#FBFAF7] border border-[#DCD6C8] rounded-lg px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Row 2: Organization & Name / Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full bg-[#FBFAF7] border border-[#DCD6C8] rounded-lg px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Name / title
                </label>
                <input
                  type="text"
                  name="nameTitle"
                  value={formData.nameTitle}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full bg-[#FBFAF7] border border-[#DCD6C8] rounded-lg px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Row 3: Business Email & Country / Jurisdiction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Business email
                </label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full bg-[#FBFAF7] border border-[#DCD6C8] rounded-lg px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Country / jurisdiction
                </label>
                <input
                  type="text"
                  name="countryJurisdiction"
                  value={formData.countryJurisdiction}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full bg-[#FBFAF7] border border-[#DCD6C8] rounded-lg px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                Message (optional)
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder=""
                className="w-full bg-[#FBFAF7] border border-[#DCD6C8] rounded-lg px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                style={{ borderRadius: "8px" }}
                className="px-6 py-3 bg-white border border-[#DCD6C8] text-[#0b1329] text-sm font-semibold tracking-wide hover:bg-gray-50 transition-colors shadow-xs"
              >
                Submit enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
