"use client";
import React, { useState } from "react";

export default function ARouteThatWorksForPeopleCurrentlyBlockedByTheProductSection() {
  const [formData, setFormData] = useState({
    affectedUrl: "",
    preferredResponseMethod: "Email",
    whatWereYouTryingToDo: "",
    issueDescription: "",
    assistiveTechnology: "",
    contactDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full flex flex-col items-start mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FEEDBACK, ASSISTANCE & BARRIER REPORTING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            A route that works for people currently blocked by the product
          </h1>

          {/* Descriptive Quote Text */}
          <p className="text-gray-600 font-light italic leading-relaxed text-[15.5px] max-w-4xl">
            &quot;If you encounter an accessibility barrier, tell us what you
            were trying to do and where the problem occurred. You do not need to
            provide medical or disability information. We will use the
            information you provide to investigate the barrier and respond
            through your preferred contact method where possible.&quot;
          </p>
        </div>

        {/* Form Card Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-8 md:p-12 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            {/* Row 1: Affected URL & Preferred Response Method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                  Affected URL / screen
                </label>
                <input
                  type="text"
                  name="affectedUrl"
                  value={formData.affectedUrl}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full bg-[#FAFAFA] border border-[#DCD6C8] px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                  Preferred response method
                </label>
                <select
                  name="preferredResponseMethod"
                  value={formData.preferredResponseMethod}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full bg-[#FAFAFA] border border-[#DCD6C8] px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                >
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 2: What were you trying to do? */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                What were you trying to do?
              </label>
              <input
                type="text"
                name="whatWereYouTryingToDo"
                value={formData.whatWereYouTryingToDo}
                onChange={handleChange}
                style={{ borderRadius: "8px" }}
                className="w-full bg-[#FAFAFA] border border-[#DCD6C8] px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
              />
            </div>

            {/* Row 3: Issue description */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                Issue description
              </label>
              <textarea
                name="issueDescription"
                rows={4}
                value={formData.issueDescription}
                onChange={handleChange}
                style={{ borderRadius: "8px" }}
                className="w-full bg-[#FAFAFA] border border-[#DCD6C8] px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A] resize-none"
              />
            </div>

            {/* Row 4: Assistive technology & Contact details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                  Assistive technology / browser (optional)
                </label>
                <input
                  type="text"
                  name="assistiveTechnology"
                  value={formData.assistiveTechnology}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full bg-[#FAFAFA] border border-[#DCD6C8] px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                  Contact details
                </label>
                <input
                  type="text"
                  name="contactDetails"
                  value={formData.contactDetails}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                  className="w-full bg-[#FAFAFA] border border-[#DCD6C8] px-4 py-3 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                style={{ borderRadius: "8px" }}
                className="bg-white border-2 border-[#1A4270] text-black font-medium px-8 py-3.5 text-sm tracking-wide hover:bg-[#A8843A] transition-colors focus:outline-none"
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
