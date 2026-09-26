"use client"
import React, { useState } from "react";

export default function RequestFormSection() {
  const [requestType, setRequestType] = useState(
    "Prepopulated from selector — editable",
  );
  const [country, setCountry] = useState("");
  const [relationship, setRelationship] = useState("Consumer");
  const [responseChannel, setResponseChannel] = useState("Secure portal");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [requestScope, setRequestScope] = useState("");
  const [details, setDetails] = useState("");
  const [accessibility, setAccessibility] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
  };

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            REQUEST FORM
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Minimum data collection — one question per logical group
          </h1>
        </div>

        {/* Form Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-6 md:p-10 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            {/* Row 1: Request type & Country / region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Request type <span className="text-[#A8843A]">*</span>
                </label>
                <input
                  type="text"
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Country / region <span className="text-[#A8843A]">*</span>
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Row 2: Relationship & Preferred response channel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Relationship <span className="text-[#A8843A]">*</span>
                </label>
                <input
                  type="text"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Preferred response channel{" "}
                  <span className="text-[#A8843A]">*</span>
                </label>
                <input
                  type="text"
                  value={responseChannel}
                  onChange={(e) => setResponseChannel(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>
            </div>

            {/* Row 3: Full name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                  Full name (if needed to locate records)
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
                />
              </div>

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
            </div>

            {/* Row 4: Request scope */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                Request scope <span className="text-[#A8843A]">*</span>
              </label>
              <input
                type="text"
                placeholder="Plain-language: which data/product/context"
                value={requestScope}
                onChange={(e) => setRequestScope(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] placeholder-gray-400 focus:outline-none focus:border-[#A8843A]"
              />
            </div>

            {/* Row 5: Details */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                Details (optional)
              </label>
              <textarea
                rows={4}
                placeholder="Please do not include unnecessary sensitive data."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] placeholder-gray-400 focus:outline-none focus:border-[#A8843A] resize-none"
              />
            </div>

            {/* Row 6: Accessibility accommodation */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#0b1329] uppercase tracking-wider">
                Accessibility accommodation (optional)
              </label>
              <input
                type="text"
                value={accessibility}
                onChange={(e) => setAccessibility(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] focus:outline-none focus:border-[#A8843A]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                style={{ borderRadius: "8px" }}
                className="bg-white border border-[#0b1329] text-[#0b1329] font-semibold px-6 py-3 text-sm hover:bg-[#0b1329] hover:text-white transition-colors duration-200 cursor-pointer shadow-xs"
              >
                Continue to review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
