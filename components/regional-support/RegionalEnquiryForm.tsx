"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function RegionalEnquiryForm() {
  const [supportTopic, setSupportTopic] = useState<string>("");
  const [relationship, setRelationship] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [countryRegion, setCountryRegion] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [issueDescription, setIssueDescription] = useState<string>("");
  const [businessImpact, setBusinessImpact] = useState<string>("");
  const [accountReference, setAccountReference] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="request" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              A FOCUSED ENQUIRY
            </p>
          </div>

          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Send a regional support enquiry
          </h2>

          <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
            Local preview: use a concise, non-sensitive summary. No information
            is transmitted.
          </p>
        </div>

        {/* White Form Card Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Support topic, Relationship, Full name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Support topic <span className="text-[#1E293B]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={supportTopic}
                    onChange={(e) => setSupportTopic(e.target.value)}
                    required
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#94A3B8] appearance-none focus:outline-none focus:border-[#386665]"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="access" className="text-[#1E293B]">
                      Account Access & Sign-In
                    </option>
                    <option value="usage" className="text-[#1E293B]">
                      Platform Usage & Configuration
                    </option>
                    <option value="technical" className="text-[#1E293B]">
                      Integrations & Technical Issues
                    </option>
                    <option value="availability" className="text-[#1E293B]">
                      Service Availability & Disruptions
                    </option>
                    <option value="billing" className="text-[#1E293B]">
                      Billing, Account & Commercial Support
                    </option>
                    <option value="general" className="text-[#1E293B]">
                      Regional Routing & General Assistance
                    </option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-[#64748B] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Relationship to ZoikoSuite{" "}
                  <span className="text-[#1E293B]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    required
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#94A3B8] appearance-none focus:outline-none focus:border-[#386665]"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="customer" className="text-[#1E293B]">
                      Active Customer
                    </option>
                    <option value="partner" className="text-[#1E293B]">
                      Registered Partner
                    </option>
                    <option value="evaluator" className="text-[#1E293B]">
                      Evaluating Platform
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
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>
            </div>

            {/* Row 2: Work email & Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Work email <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="email"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Organization <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>
            </div>

            {/* Row 3: Country / region & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Country / region <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="text"
                  value={countryRegion}
                  onChange={(e) => setCountryRegion(e.target.value)}
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Subject <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>
            </div>

            {/* Row 4: Issue description */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-[#1E293B]">
                  Issue description <span className="text-[#1E293B]">*</span>
                </label>
              </div>
              <textarea
                rows={6}
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
                required
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-4 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665] resize-none"
              />
              <div className="flex justify-between items-center mt-1.5">
                <p className="text-[11px] text-[#94A3B8] font-normal">
                  30–3,000 characters. Please do not share passwords, security
                  codes, payment card details, or sensitive employee
                  information.
                </p>
                <p className="text-[11px] text-[#94A3B8] font-mono">
                  {issueDescription.length} / 3000
                </p>
              </div>
            </div>

            {/* Row 5: Business impact & Account reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Business impact
                </label>
                <div className="relative">
                  <select
                    value={businessImpact}
                    onChange={(e) => setBusinessImpact(e.target.value)}
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#94A3B8] appearance-none focus:outline-none focus:border-[#386665]"
                  >
                    <option value="">Select (optional)</option>
                    <option value="low" className="text-[#1E293B]">
                      Low Impact / Minor Inconvenience
                    </option>
                    <option value="medium" className="text-[#1E293B]">
                      Moderate Impact / Workaround Available
                    </option>
                    <option value="high" className="text-[#1E293B]">
                      High Impact / Core Function Impaired
                    </option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-[#64748B] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Account or case reference{" "}
                  <span className="text-[#64748B] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Safely masked reference only"
                  value={accountReference}
                  onChange={(e) => setAccountReference(e.target.value)}
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
              </div>
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
                  Submit support enquiry
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Bottom Dark Info Footer Card */}
        <div className="bg-[#082834] rounded-2xl p-8 md:p-10 border border-[#1E3A4A]/50 text-white space-y-6">
          <h3 className="text-lg font-bold">Help starts with safe context.</h3>

          <div className="space-y-2 text-[#94A3B8] text-xs md:text-sm leading-relaxed">
            <p>
              Please do not share passwords, security codes, payment card
              details, or sensitive employee information.
            </p>
            <p>
              No attachments, marketing consent, public case lookup, or account
              authentication is provided.
            </p>
            <p>
              This public form does not confirm support entitlement or act as an
              emergency reporting service.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#destination"
              className="inline-flex items-center space-x-2 text-[#E3C065] text-xs font-bold hover:underline"
            >
              <span>Find another destination</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
