"use client"
import React, { useState } from "react";

export default function MediaEnquiriesSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    professionalEmail: "",
    inquiryType: "",
    deadline: "",
    country: "",
    questions: "",
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
    // Handle form submission
  };

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            MEDIA ENQUIRIES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-3">
            For journalists, editors, analysts, and broadcasters
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Requesting official ZoikoSuite information or comment.
          </p>
        </div>

        {/* Form Container */}
        <div
          style={{ borderRadius: "16px" }}
          className="w-full bg-white border border-[#DCD6C8] shadow-sm p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row 1: Full name & Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#0b1329] uppercase tracking-wider">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD6C8] text-[#0b1329] text-sm focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#0b1329] uppercase tracking-wider">
                  Organization / publication
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD6C8] text-[#0b1329] text-sm focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Row 2: Professional email & Inquiry type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#0b1329] uppercase tracking-wider">
                  Professional email
                </label>
                <input
                  type="email"
                  name="professionalEmail"
                  value={formData.professionalEmail}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD6C8] text-[#0b1329] text-sm focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#0b1329] uppercase tracking-wider">
                  Inquiry type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD6C8] text-gray-500 text-sm focus:outline-none focus:border-[#A8843A]"
                >
                  <option value="">Select...</option>
                  <option value="interview">Interview Request</option>
                  <option value="statement">Press Statement</option>
                  <option value="data">Data & Research Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3: Deadline & Country/region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#0b1329] uppercase tracking-wider">
                  Deadline
                </label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD6C8] text-[#0b1329] text-sm focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#0b1329] uppercase tracking-wider">
                  Country / region
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD6C8] text-[#0b1329] text-sm focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Row 4: Questions / request */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#0b1329] uppercase tracking-wider">
                Questions / request
              </label>
              <textarea
                name="questions"
                rows={5}
                value={formData.questions}
                onChange={handleChange}
                style={{ borderRadius: "8px" }}
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD6C8] text-[#0b1329] text-sm focus:outline-none focus:border-[#A8843A] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                style={{ borderRadius: "8px" }}
                className="px-6 py-3 bg-[#0A1D34] hover:bg-[#132E50] text-white font-semibold text-sm tracking-wide transition-colors"
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
