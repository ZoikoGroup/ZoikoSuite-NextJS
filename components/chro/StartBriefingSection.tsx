"use client"
import React, { useState } from "react";

export default function StartBriefingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    role: "",
    message: "",
    acknowledgePreview: false,
    optionalUpdates: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Local preview only form submission handler
  };

  return (
    <section id="context" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
            LOCAL BRIEFING PREVIEW
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-6">
            Start with one operating decision.
          </h2>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-md">
            Approved briefing/provider and privacy routes were not supplied.
            This form sends/stores no information and books no meeting.
          </p>
        </div>

        {/* Right Column: Form Card */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-xl bg-white rounded-2xl border border-gray-200/80 p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight mb-6">
              Evaluation context
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Full Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#1F2421]">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#1F2421]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#1F2421]">
                    Work email
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#1F2421]"
                  />
                </div>
              </div>

              {/* Row 2: Organization & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#1F2421]">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#1F2421]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#1F2421]">
                    Role{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-[#1F2421]"
                  >
                    <option value="">Choose one</option>
                    <option value="chro">CHRO</option>
                    <option value="cio">CIO</option>
                    <option value="coo">COO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#1F2421]">
                  Message{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#1F2421] resize-none"
                />
              </div>

              {/* Security / Privacy Notice */}
              <p className="text-xs text-gray-500 leading-relaxed">
                No sensitive operational, personnel or customer data,
                credentials or confidential evidence.
              </p>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3 pt-1">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="acknowledgePreview"
                    checked={formData.acknowledgePreview}
                    onChange={handleChange}
                    className="w-4 h-4 rounded mt-0.5 border-gray-300 text-[#1F2421] focus:ring-0 cursor-pointer"
                  />
                  <span className="text-xs text-[#4B5563] leading-snug">
                    I acknowledge this is a local preview.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="optionalUpdates"
                    checked={formData.optionalUpdates}
                    onChange={handleChange}
                    className="w-4 h-4 rounded mt-0.5 border-gray-300 text-[#1F2421] focus:ring-0 cursor-pointer"
                  />
                  <span className="text-xs text-[#4B5563] leading-snug">
                    Optional updates when a live service is approved.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D9A74A] hover:bg-[#C8963D] text-black font-medium text-sm transition-colors shadow-sm"
                >
                  Review briefing context
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
