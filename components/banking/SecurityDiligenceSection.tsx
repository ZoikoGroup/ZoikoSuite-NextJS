"use client";

import React from "react";

interface ControlItem {
  title: string;
  description: string;
}

const SECURITY_CONTROLS: ControlItem[] = [
  {
    title: "Zero-trust access",
    description: "Identity-verified access with no implicit network trust.",
  },
  {
    title: "Segregation of duties",
    description:
      "Preparer, reviewer, approver and executor independently permissioned.",
  },
  {
    title: "Workload identity",
    description: "Service principals are named actors in the evidence record.",
  },
  {
    title: "Encryption in transit and at rest",
    description: "Stated per deployment rather than as a universal claim.",
  },
  {
    title: "Customer-managed keys",
    description: "Depends on deployment option and approved region.",
  },
  {
    title: "Region-aware residency",
    description:
      "A primary storage region does not imply every lifecycle stage stays in region.",
  },
  {
    title: "Independent certification",
    description:
      "The control framework exists. No SOC, ISO or PCI certification is claimed.",
  },
  {
    title: "Sovereign deployment",
    description:
      "Not currently available. Requirements can be discussed with an architect.",
  },
  {
    title: "Penetration testing",
    description:
      "Conducted through approved partners; reports available under agreement.",
  },
];

export default function SecurityDiligenceSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                SECURITY, SEGREGATION OF DUTIES, RESIDENCY AND DEPLOYMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Bank-grade diligence without overclaiming certification
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Each control tile states whether it is an architecture
              requirement, a stated implementation status, a roadmap item or
              partner-supported.
            </p>
          </div>
        </div>

        {/* 3-Column Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECURITY_CONTROLS.map((control, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col shadow-sm border border-[#E2E8F0] hover:border-gray-300 transition-colors"
            >
              <div>
                <h3
                  className="font-bold text-[#0F172A] mb-2"
                  style={{ fontSize: "13.5px" }}
                >
                  {control.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontSize: "11.5px" }}
                >
                  {control.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
