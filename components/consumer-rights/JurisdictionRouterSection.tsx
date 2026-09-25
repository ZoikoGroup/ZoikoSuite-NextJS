"use client"
import React, { useState } from "react";

export default function JurisdictionRouterSection() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState<
    string | null
  >(null);

  const relationships = [
    "Individual / website visitor",
    "ZoikoSuite account user",
    "Customer employee / end user",
    "Job applicant / worker",
    "Vendor / partner contact",
    "Authorized agent / representative",
    "Not sure",
  ];

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            JURISDICTION & RELATIONSHIP ROUTER
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Determine the right path — without deceptive eligibility friction
          </h1>
        </div>

        {/* Card Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-6 md:p-10 shadow-sm flex flex-col gap-8"
        >
          {/* Step 1 */}
          <div className="flex flex-col gap-4 pb-8 border-b border-[#EAE4D7]">
            <h2 className="text-sm font-bold text-[#0b1329] uppercase tracking-wider">
              Step 1 — Where are you located?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <input
                type="text"
                placeholder="Country / region (typeahead)"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] placeholder-gray-400 focus:outline-none focus:border-[#A8843A]"
              />
              <input
                type="text"
                placeholder="State (if United States)"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DCD6C8] rounded-md py-3 px-4 text-sm text-[#0b1329] placeholder-gray-400 focus:outline-none focus:border-[#A8843A]"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold text-[#0b1329] uppercase tracking-wider">
              Step 2 — Your relationship with ZoikoSuite
            </h2>
            <div className="flex flex-wrap gap-3">
              {relationships.map((rel, index) => {
                const isSelected = selectedRelationship === rel;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedRelationship(rel)}
                    style={{ borderRadius: "8px" }}
                    className={`py-2.5 px-4 text-sm font-medium transition-colors duration-200 cursor-pointer border ${
                      isSelected
                        ? "bg-[#0b1329] text-white border-[#0b1329]"
                        : "bg-[#FAF7F2] text-[#0b1329] border-[#DCD6C8] hover:border-[#A8843A]"
                    }`}
                  >
                    {rel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
