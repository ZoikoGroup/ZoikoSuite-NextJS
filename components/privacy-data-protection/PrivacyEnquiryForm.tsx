"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PrivacyEnquiryForm() {
  const [requestCategory, setRequestCategory] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [countryRegion, setCountryRegion] = useState<string>("");
  const [serviceContext, setServiceContext] = useState<string>("");
  const [enquirySummary, setEnquirySummary] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="request" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              A FOCUSED ENQUIRY
            </p>
          </div>

          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Send a privacy enquiry
          </h2>

          <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
            Local preview: use a concise, non-sensitive summary. No information
            is transmitted.
          </p>
        </div>

        {/* White Form Card Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Request category & Full name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Request category <span className="text-[#1E293B]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={requestCategory}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setRequestCategory(e.target.value)
                    }
                    required
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#94A3B8] appearance-none focus:outline-none focus:border-[#386665]"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="policy-questions" className="text-[#1E293B]">
                      Privacy Practices & Policy Questions
                    </option>
                    <option value="data-rights" className="text-[#1E293B]">
                      Personal Data Rights Requests
                    </option>
                    <option value="enterprise" className="text-[#1E293B]">
                      Enterprise Privacy & Data Processing
                    </option>
                    <option value="cookies" className="text-[#1E293B]">
                      Cookies, Preferences & Consent
                    </option>
                    <option value="complaints" className="text-[#1E293B]">
                      Data Concern, Correction & Complaints
                    </option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-[#64748B] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Full name <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullName(e.target.value)
                  }
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>
            </div>

            {/* Row 2: Email & Organization (optional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Email <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Organization{" "}
                  <span className="text-[#64748B] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setOrganization(e.target.value)
                  }
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>
            </div>

            {/* Row 3: Country / region (optional) & Service or policy context (optional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Country / region{" "}
                  <span className="text-[#64748B] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={countryRegion}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCountryRegion(e.target.value)
                  }
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Service or policy context{" "}
                  <span className="text-[#64748B] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Not sure is fine"
                  value={serviceContext}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setServiceContext(e.target.value)
                  }
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
              </div>
            </div>

            {/* Row 4: Enquiry summary */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Enquiry summary <span className="text-[#1E293B]">*</span>
              </label>
              <textarea
                rows={5}
                value={enquirySummary}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setEnquirySummary(e.target.value)
                }
                required
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-4 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665] resize-none"
              />
              <p className="text-[11px] text-[#94A3B8] mt-1.5 font-normal">
                20–1,500 characters. Please do not include passwords, identity
                documents, or sensitive personal information in a general
                enquiry.
              </p>
            </div>

            {/* Bottom Disclaimer & Submit */}
            <div className="pt-4 space-y-4">
              <p className="text-[11px] text-[#64748B] font-normal">
                Fields marked * are required. An approved contextual privacy
                notice and submission endpoint must be connected before launch.
              </p>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D4AF37] text-[#1E293B] text-xs font-bold hover:bg-[#C5A028] transition-colors duration-200 shadow-sm cursor-pointer"
                >
                  Send privacy enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
