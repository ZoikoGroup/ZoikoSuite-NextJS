"use client"
import React from "react";
import { Calendar } from "lucide-react";

export default function SubmitSupportRequest() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            07 / SUPPORT REQUEST
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-2">
          Submit a support request
        </h2>

        {/* Subtext info */}
        <p className="text-[#4B5563] text-sm md:text-base mb-10 max-w-2xl">
          Minimum necessary fields. Troubleshooting steps you&apos;ve already
          tried are prefilled from the guide above — edit or remove as needed.
        </p>

        {/* Form Container */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col gap-6"
        >
          {/* Row 1: Support topic & Product / area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Support topic
              </label>
              <input
                type="text"
                defaultValue="Troubleshooting"
                style={{ borderRadius: "10px" }}
                className="w-full bg-[#F3F4F6] border border-[#E5E7EB] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#A07A2E]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Product / area
              </label>
              <input
                type="text"
                defaultValue="Evidence & Audit"
                style={{ borderRadius: "10px" }}
                className="w-full bg-[#F3F4F6] border border-[#E5E7EB] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#A07A2E]"
              />
            </div>
          </div>

          {/* Row 2: Summary */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
              Summary
            </label>
            <input
              type="text"
              defaultValue="Evidence export stuck at Processing"
              style={{ borderRadius: "10px" }}
              className="w-full bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#A07A2E]"
            />
          </div>

          {/* Row 3: Description */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
              Description
            </label>
            <textarea
              rows={4}
              defaultValue="Export has been queued for over an hour in the EU region. I checked the queue status per the troubleshooting guide."
              style={{ borderRadius: "10px" }}
              className="w-full bg-white border border-[#E5E7EB] p-4 text-sm text-[#111827] focus:outline-none focus:border-[#A07A2E] resize-none"
            />
            <p className="text-xs text-[#6B7280] mt-1">
              Do not include passwords, verification codes, API secrets, or full
              payment-card information.
            </p>
          </div>

          {/* Row 4: Business impact & When did this start? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Business impact
              </label>
              <input
                type="text"
                defaultValue="Some impact"
                style={{ borderRadius: "10px" }}
                className="w-full bg-[#F3F4F6] border border-[#E5E7EB] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#A07A2E]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
                When did this start?
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="mm/dd/yyyy, --:-- --"
                  style={{ borderRadius: "10px" }}
                  className="w-full bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#A07A2E]"
                />
                <Calendar className="w-4 h-4 text-[#6B7280] absolute right-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 5: Attachments */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
              Attachments
            </label>
            <div
              style={{ borderRadius: "10px" }}
              className="w-full bg-white border border-[#E5E7EB] p-3 flex items-center gap-3"
            >
              <input type="file" id="file-upload" className="hidden" />
              <label
                htmlFor="file-upload"
                style={{ borderRadius: "6px" }}
                className="bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#111827] text-xs font-semibold px-3 py-2 cursor-pointer transition-colors"
              >
                Choose File
              </label>
              <span className="text-sm text-[#6B7280]">No file chosen</span>
            </div>
            <p className="text-xs text-[#6B7280] mt-1">
              Scanned before your case is created. Allowed types and size limits
              per policy.
            </p>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              style={{ borderRadius: "10px" }}
              className="w-full bg-[#D0AA55] hover:bg-[#BE9944] text-[#111827] font-semibold text-base py-4 transition-all shadow-md"
            >
              Submit request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
