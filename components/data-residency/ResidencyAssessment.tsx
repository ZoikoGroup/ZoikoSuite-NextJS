"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface AssessmentProduceItem {
  title: string;
  description: string;
}

const assessmentProduceItems: AssessmentProduceItem[] = [
  {
    title: "Dimension-by-dimension answer",
    description: "— all seven, for your deployment",
  },
  {
    title: "Deployment recommendation",
    description: "— what your constraint actually requires",
  },
  {
    title: "Key custody eligibility",
    description: "— for your regions, with revocation consequences",
  },
  {
    title: "Backup and recovery position",
    description: "— including the residency-resilience trade",
  },
  {
    title: "Cross-border dependency list",
    description: "— subprocessors, telemetry, support",
  },
  {
    title: "Explicit gaps",
    description: "— requirements that cannot be met in approved scope",
  },
];

export default function ResidencyAssessment() {
  const [formData, setFormData] = useState({
    workEmail: "",
    fullName: "",
    organization: "",
    role: "Security / CISO",
    requiredJurisdictions: "",
    requirementDriver: "Regulatory requirement",
    dimensionsConstrained: "Storage only",
    deploymentPreference: "Not yet determined",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                RESIDENCY ASSESSMENT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Answers require your context
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              A residency answer depends on entity, jurisdiction, workload, data
              class and deployment. A generic pack cannot produce one, and this
              page will not pretend otherwise.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What an assessment produces */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#6B7280] uppercase">
                WHAT AN ASSESSMENT PRODUCES
              </span>
            </div>
            <ul className="space-y-4">
              {assessmentProduceItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[13px] text-[#4B5563]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                    style={{ backgroundColor: "#C9B07A" }}
                  ></span>
                  <span>
                    <strong className="text-[#111827] font-semibold">
                      {item.title}
                    </strong>{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Request a residency assessment form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E5E7EB] shadow-sm">
            <div className="mb-6">
              <h3 className="text-[18px] font-bold text-[#111827] mb-1">
                Request a residency assessment
              </h3>
              <p className="text-[13px] text-[#6B7280]">
                Enough to scope a response, nothing more.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5 uppercase">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                    className="w-full focus:bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5 uppercase">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full focus:bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5 uppercase">
                    Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full focus:bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5 uppercase">
                    Your role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full focus:bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5 uppercase">
                    Required jurisdictions
                  </label>
                  <input
                    type="text"
                    placeholder="Country or region names"
                    value={formData.requiredJurisdictions}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        requiredJurisdictions: e.target.value,
                      })
                    }
                    className="w-full focus:bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5 uppercase">
                    Requirement driver
                  </label>
                  <input
                    type="text"
                    value={formData.requirementDriver}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        requirementDriver: e.target.value,
                      })
                    }
                    className="w-full focus:bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5 uppercase">
                    Dimensions that must be constrained
                  </label>
                  <input
                    type="text"
                    value={formData.dimensionsConstrained}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dimensionsConstrained: e.target.value,
                      })
                    }
                    className="w-full focus:bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-[#4B5563] mb-1.5 uppercase">
                    Deployment preference
                  </label>
                  <input
                    type="text"
                    value={formData.deploymentPreference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        deploymentPreference: e.target.value,
                      })
                    }
                    className="w-full focus:bg-white border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 flex items-center justify-center gap-2 bg-[#D0AA55] hover:bg-[#C59B3F] text-[#111827] font-semibold rounded-full text-[13px] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Request residency assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-center text-[11px] text-[#6B7280] mt-3">
                We use your information to respond to this request. Consent is
                never pre-checked. See the{" "}
                <a href="#" className="underline hover:text-[#111827]">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
