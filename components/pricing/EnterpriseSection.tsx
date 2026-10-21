"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EnterpriseSection() {
  const [formData, setFormData] = useState({
    businessEmail: "",
    organization: "",
    country: "",
    usersOrEntities: "",
    primaryRequirement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enterprise" className="relative w-full bg-[#08222F] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#0d2e3e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, description & Skyscrapers Image */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#CDA85B]" />
              <span className="text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
                ENTERPRISE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-white mb-4 leading-tight">
              Complex structure should not mean fragmented systems.
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              For multi-entity groups, regulated operations and organizations with advanced governance requirements: consolidation, intercompany controls, SSO/SCIM, custom frameworks, enterprise integration, data-policy options and contracted service levels.
            </p>

            {/* Skyscrapers Image Card (pp8.png) */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 aspect-[16/9] w-full max-w-2xl">
              <Image
                src="/pricing-page/pp8.png"
                alt="Complex structure should not mean fragmented systems"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl w-full text-left">
              <h3 className="text-lg sm:text-xl font-bold text-[#08222F] mb-1">
                Tell us what you need
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal mb-6 leading-relaxed">
                Five short fields. This opens a sales conversation; it never creates a self-serve subscription.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#FBF9F4] border border-[#CDA85B] text-center">
                  <p className="text-sm font-bold text-[#08222F] mb-1">
                    Thank you for reaching out!
                  </p>
                  <p className="text-xs text-slate-600">
                    An enterprise specialist will follow up with your team shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Business email */}
                  <div>
                    <label className="block text-[11.5px] font-bold text-[#08222F] mb-1.5">
                      Business email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.businessEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, businessEmail: e.target.value })
                      }
                      className="w-full bg-[#FAF9F5] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#08222F] focus:outline-none focus:border-[#CDA85B] transition-colors"
                    />
                  </div>

                  {/* Field 2: Organization */}
                  <div>
                    <label className="block text-[11.5px] font-bold text-[#08222F] mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full bg-[#FAF9F5] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#08222F] focus:outline-none focus:border-[#CDA85B] transition-colors"
                    />
                  </div>

                  {/* Field 3 & 4: Country and Users/Entities in 2-column row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11.5px] font-bold text-[#08222F] mb-1.5">
                        Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full bg-[#FAF9F5] border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-[#CDA85B] transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="European Union">European Union</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11.5px] font-bold text-[#08222F] mb-1.5">
                        Approximate users / entities
                      </label>
                      <select
                        value={formData.usersOrEntities}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            usersOrEntities: e.target.value,
                          })
                        }
                        className="w-full bg-[#FAF9F5] border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-[#CDA85B] transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="25–100 users">25–100 users</option>
                        <option value="100–500 users">100–500 users</option>
                        <option value="500+ users">500+ users</option>
                        <option value="Multi-entity group (5+ entities)">
                          Multi-entity group (5+ entities)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Field 5: Primary requirement */}
                  <div>
                    <label className="block text-[11.5px] font-bold text-[#08222F] mb-1.5">
                      Primary requirement
                    </label>
                    <select
                      value={formData.primaryRequirement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryRequirement: e.target.value,
                        })
                      }
                      className="w-full bg-[#FAF9F5] border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-[#CDA85B] transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="Multi-entity consolidation">
                        Multi-entity consolidation
                      </option>
                      <option value="Advanced governance & SSO/SCIM">
                        Advanced governance & SSO/SCIM
                      </option>
                      <option value="Regulated reporting & controls">
                        Regulated reporting & controls
                      </option>
                      <option value="Custom integration & data architecture">
                        Custom integration & data architecture
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Fine print note */}
                  <p className="text-[10px] text-slate-400 leading-tight pt-1">
                    We use these details only to respond. See the{" "}
                    <Link
                      href="/trust/privacy-architecture"
                      className="underline hover:text-slate-600"
                    >
                      Privacy Notice
                    </Link>
                    . Please don&apos;t include financial records or personal data.
                  </p>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-[#CDA85B] hover:bg-[#d8b365] text-[#08222F] font-bold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
                    >
                      Talk to an enterprise specialist
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
