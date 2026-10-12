"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function PartnerEnquiryForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [businessEmail, setBusinessEmail] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [roleTitle, setRoleTitle] = useState<string>("");
  const [companyWebsite, setCompanyWebsite] = useState<string>("");
  const [countryRegion, setCountryRegion] = useState<string>("");
  const [partnershipInterest, setPartnershipInterest] = useState<string>("");
  const [additionalContext, setAdditionalContext] = useState<string>("");
  const [partnershipGeography, setPartnershipGeography] = useState<string>("");
  const [collaborationSummary, setCollaborationSummary] = useState<string>("");
  const [desiredNextStep, setDesiredNextStep] = useState<string>("");
  const [existingPartner, setExistingPartner] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="enquiry" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              BEGIN A CONVERSATION
            </p>
          </div>

          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Tell us about your partnership idea
          </h2>

          <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
            Share the details that help a team understand your proposed
            collaboration.
          </p>
        </div>

        {/* White Form Card */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Group 1: Your organization */}
            <div className="space-y-6">
              <h3 className="text-[#1E293B] text-xl font-bold border-b border-[#F1F5F9] pb-3">
                Your organization
              </h3>

              {/* First Name, Last Name, Business Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-2">
                    First name <span className="text-[#1E293B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-2">
                    Last name <span className="text-[#1E293B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-2">
                    Business email <span className="text-[#1E293B]">*</span>
                  </label>
                  <input
                    type="email"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Organization <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
              </div>

              {/* Role/title & Company website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-2">
                    Role / title
                  </label>
                  <input
                    type="text"
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-2">
                    Company website
                  </label>
                  <input
                    type="url"
                    placeholder="https://"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                  />
                </div>
              </div>

              {/* Country / region */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Country / region <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="text"
                  value={countryRegion}
                  onChange={(e) => setCountryRegion(e.target.value)}
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
                <p className="text-[11px] text-[#94A3B8] mt-1.5 font-normal">
                  Choose a suggestion or type your country / region.
                </p>
              </div>
            </div>

            {/* Group 2: Your collaboration */}
            <div className="space-y-6 pt-2">
              <h3 className="text-[#1E293B] text-xl font-bold border-b border-[#F1F5F9] pb-3">
                Your collaboration
              </h3>

              {/* Partnership interest */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Partnership interest <span className="text-[#1E293B]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={partnershipInterest}
                    onChange={(e) => setPartnershipInterest(e.target.value)}
                    required
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#94A3B8] appearance-none focus:outline-none focus:border-[#386665]"
                  >
                    <option value="" disabled>
                      Select a partnership topic
                    </option>
                    <option value="tech" className="text-[#1E293B]">
                      Technology & Integration Partnerships
                    </option>
                    <option value="channel" className="text-[#1E293B]">
                      Channel & Referral Relationships
                    </option>
                    <option value="services" className="text-[#1E293B]">
                      Services & Implementation Partners
                    </option>
                    <option value="strategic" className="text-[#1E293B]">
                      Strategic & Enterprise Alliances
                    </option>
                    <option value="marketing" className="text-[#1E293B]">
                      Co-Marketing & Ecosystem Initiatives
                    </option>
                    <option value="existing" className="text-[#1E293B]">
                      Existing Partner Questions & Changes
                    </option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-[#64748B] pointer-events-none" />
                </div>
              </div>

              {/* Additional context (optional) */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Additional context{" "}
                  <span className="text-[#64748B] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={additionalContext}
                  onChange={(e) => setAdditionalContext(e.target.value)}
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
                <p className="text-[11px] text-[#94A3B8] mt-1.5 font-normal">
                  Share a relevant system, service, market, or initiative.
                </p>
              </div>

              {/* Partnership geography */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Partnership geography
                </label>
                <input
                  type="text"
                  placeholder="Markets or regions you would like to cover"
                  value={partnershipGeography}
                  onChange={(e) => setPartnershipGeography(e.target.value)}
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
              </div>

              {/* Collaboration summary */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Collaboration summary{" "}
                  <span className="text-[#1E293B]">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your proposal and the outcomes you would like to explore."
                  value={collaborationSummary}
                  onChange={(e) => setCollaborationSummary(e.target.value)}
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg p-4 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665] resize-none"
                />
                <p className="text-[11px] text-[#94A3B8] mt-1.5 font-normal">
                  100–2,000 characters. Do not include passwords, employee data,
                  or confidential customer information.
                </p>
              </div>

              {/* Desired next step & Existing partner? */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-2">
                    Desired next step
                  </label>
                  <div className="relative">
                    <select
                      value={desiredNextStep}
                      onChange={(e) => setDesiredNextStep(e.target.value)}
                      className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#94A3B8] appearance-none focus:outline-none focus:border-[#386665]"
                    >
                      <option value="">Select (optional)</option>
                      <option value="call" className="text-[#1E293B]">
                        Introductory Call
                      </option>
                      <option value="deck" className="text-[#1E293B]">
                        Share Proposal Deck
                      </option>
                      <option value="demo" className="text-[#1E293B]">
                        Technical Demo
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-[#64748B] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-2">
                    Existing partner?
                  </label>
                  <div className="relative">
                    <select
                      value={existingPartner}
                      onChange={(e) => setExistingPartner(e.target.value)}
                      className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#94A3B8] appearance-none focus:outline-none focus:border-[#386665]"
                    >
                      <option value="">Select (optional)</option>
                      <option value="yes" className="text-[#1E293B]">
                        Yes
                      </option>
                      <option value="no" className="text-[#1E293B]">
                        No
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-[#64748B] pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-4 space-y-4">
              <p className="text-[11px] text-[#64748B] font-normal">
                Fields marked * are required. Please share only information
                relevant to your enquiry.
              </p>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D4AF37] text-[#1E293B] text-xs font-bold hover:bg-[#C5A028] transition-colors duration-200 space-x-2 shadow-sm"
                >
                  <span>Review partner enquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
