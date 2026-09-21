"use client";

import React from "react";

const problems = [
  {
    number: "01",
    title: "Facility autonomy versus system control",
    description:
      "Hospitals, clinics and service lines develop local approval practice and local vendor relationships that never surface at system level.",
    footer: "Inconsistent control across the enterprise.",
  },
  {
    number: "02",
    title: "Vendor and supply dependency is invisible",
    description:
      "Critical vendors, lapsed diligence, expiring agreements and data-access arrangements sit in disconnected tools.",
    footer: "Third-party exposure discovered at renewal.",
  },
  {
    number: "03",
    title: "Obligations lose named ownership",
    description:
      "Regulatory, accreditation, contractual and policy obligations lose their owner as staff rotate between roles and facilities.",
    footer: "Late escalation and weak evidence at review.",
  },
  {
    number: "04",
    title: "Data-sharing scope is assumed",
    description:
      "Whether an enterprise workflow touches sensitive data is decided informally rather than classified and reviewed before access.",
    footer: "Unevidenced access and purpose decisions.",
  },
  {
    number: "05",
    title: "System sprawl across the enterprise",
    description:
      "EHR, ERP, HR, supply chain, credentialing and contract systems are each authoritative for their own domain.",
    footer: "No layer holds the cross-domain business decision.",
  },
];

export default function OperationalFragmentationSection() {
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
                OPERATIONAL FRAGMENTATION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Clinical systems are validated. The enterprise around them is not
              governed.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Five operating conditions with the accountability exposure each
              creates. No invented statistics, cost figures or outcome claims.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-[#8A3B3B] border-t-[3px] border-t-[#8A3B3B] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-[#8C4A4A] mb-3 block">
                  {item.number}
                </span>
                <h3 className="text-[14px] font-bold text-[#08222F] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-3">
                <p className="text-[12px] text-gray-700 font-medium leading-relaxed">
                  {item.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
