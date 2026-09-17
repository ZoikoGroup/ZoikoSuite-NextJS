"use client";

import React from "react";

export default function GovernmentProcurementOwnershipSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                PROCUREMENT, VENDORS, POLICY AND RECORDS OBLIGATIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Named ownership that survives a staff change
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Vendor diligence, contract options, retention schedules and
              administrative policy obligations in one register with named
              owners.
            </p>
          </div>
        </div>

        {/* Central Display Card Container with Image */}
        <div className="relative overflow-hidden">
          <div className="w-full overflow-hidden shadow-sm">
            <img
              src="/government/2.png"
              alt="Procurement, vendors, policy and records obligations diagram"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
