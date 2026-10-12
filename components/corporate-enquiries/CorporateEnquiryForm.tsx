"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function CorporateEnquiryForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [enquiry, setEnquiry] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="enquiry" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              GENERAL CORPORATE CORRESPONDENCE
            </p>
          </div>

          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Tell us about your enquiry.
          </h2>

          <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
            Share your question and how to reach you by email.
            <br />
            Organization and country details are optional.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: First Name, Last Name, Work Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  First name <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
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
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Work email <span className="text-[#1E293B]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={workEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setWorkEmail(e.target.value)
                  }
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
                <p className="text-[11px] text-[#94A3B8] mt-1.5 font-normal">
                  Personal email is also accepted for individual correspondence.
                </p>
              </div>
            </div>

            {/* Row 2: Organization (optional) */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Organization{" "}
                <span className="text-[#64748B] font-normal">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="Your organization, if applicable"
                value={organization}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOrganization(e.target.value)
                }
                className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
              />
            </div>

            {/* Row 3: Enquiry Category */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Enquiry category <span className="text-[#1E293B]">*</span>
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setCategory(e.target.value)
                  }
                  required
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#94A3B8] appearance-none focus:outline-none focus:border-[#386665]"
                >
                  <option value="" disabled>
                    Select your topic
                  </option>
                  <option value="company-info" className="text-[#1E293B]">
                    Company and organizational information
                  </option>
                  <option value="governance" className="text-[#1E293B]">
                    Governance and corporate accountability
                  </option>
                  <option value="notices" className="text-[#1E293B]">
                    Official notices and documentation
                  </option>
                  <option value="events" className="text-[#1E293B]">
                    Corporate events and participation
                  </option>
                  <option value="general" className="text-[#1E293B]">
                    General business correspondence
                  </option>
                  <option value="routing" className="text-[#1E293B]">
                    Regional and special-purpose routing
                  </option>
                </select>
                <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            {/* Row 4: Subject */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Subject <span className="text-[#1E293B]">*</span>
              </label>
              <input
                type="text"
                placeholder="A concise subject for your enquiry"
                value={subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSubject(e.target.value)
                }
                required
                className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
              />
            </div>

            {/* Row 5: Your Enquiry Textarea */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Your enquiry <span className="text-[#1E293B]">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Explain your question and the general context."
                value={enquiry}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setEnquiry(e.target.value)
                }
                required
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-4 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665] resize-none"
              />
              <p className="text-[11px] text-[#94A3B8] mt-1.5 font-normal">
                20–3,000 characters. Do not include passwords, payment details,
                or sensitive personal information.
              </p>
            </div>

            {/* Row 6: Country / Region */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Country / region{" "}
                <span className="text-[#64748B] font-normal">(optional)</span>
              </label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setCountry(e.target.value)
                  }
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#1E293B] appearance-none focus:outline-none focus:border-[#386665]"
                >
                  <option value="">Prefer not to say</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="EU">European Union</option>
                  <option value="IN">India</option>
                  <option value="OTHER">Other Region</option>
                </select>
                <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-[#64748B] pointer-events-none" />
              </div>
              <p className="text-[11px] text-[#94A3B8] mt-1.5 font-normal">
                Optional context for choosing an appropriate destination.
              </p>
            </div>

            {/* Bottom Meta & Submit */}
            <div className="pt-4 space-y-4">
              <p className="text-[11px] text-[#64748B] font-normal">
                Required fields are marked *. Response channel: email. No
                marketing opt-in is required.
              </p>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D4AF37] text-[#1E293B] text-xs font-bold hover:bg-[#C5A028] transition-colors duration-200 space-x-2 shadow-sm"
                >
                  <span>Review enquiry</span>
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
