"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    operationalUpdates: true,
    productUpdates: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16" id="registration">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-[11px] font-normal tracking-[0.1em] text-[#a07a2e] block mb-2">
            05 / REGISTRATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-semibold text-[#16262f] tracking-tight mb-3">
            Registration
          </h2>
          <p className="text-[15.8px] text-[#5a6d79] leading-relaxed">
            Minimum necessary fields, with marketing consent kept separate and
            unchecked by default.
          </p>
        </div>

        {/* Registration Form Container */}
        <div className="max-w-xl">
          {submitted ? (
            <div className="p-6 rounded-lg bg-[#eaf5f0] border border-[#1e7a5a]/30 text-[#1e7a5a]">
              <h4 className="font-semibold text-base mb-1">Registration Confirmed</h4>
              <p className="text-sm text-[#3b6654]">
                Thank you, {formData.fullName}. A confirmation email and calendar invitation have been sent to {formData.workEmail}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="ename"
                  className="text-[13px] font-semibold text-[#16262f]"
                >
                  Full name
                </label>
                <input
                  id="ename"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-[#dbe3e8] rounded text-[#16262f] text-sm focus:outline-none focus:border-[#0f476a] focus:ring-1 focus:ring-[#0f476a] transition-all"
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="eemail"
                  className="text-[13px] font-semibold text-[#16262f]"
                >
                  Work email
                </label>
                <input
                  id="eemail"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.workEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, workEmail: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-[#dbe3e8] rounded text-[#16262f] text-sm focus:outline-none focus:border-[#0f476a] focus:ring-1 focus:ring-[#0f476a] transition-all"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="ecomp"
                  className="text-[13px] font-semibold text-[#16262f]"
                >
                  Company
                </label>
                <input
                  id="ecomp"
                  type="text"
                  placeholder="Organization or team name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-[#dbe3e8] rounded text-[#16262f] text-sm focus:outline-none focus:border-[#0f476a] focus:ring-1 focus:ring-[#0f476a] transition-all"
                />
              </div>

              {/* Consent 1 (Required) */}
              <label className="flex items-start gap-3 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  required
                  checked={formData.operationalUpdates}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      operationalUpdates: e.target.checked,
                    })
                  }
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0075ff] focus:ring-[#0075ff]"
                />
                <span className="text-[13px] text-[#5a6d79] leading-snug">
                  I agree to receive operational updates about this event
                  (required to register).
                </span>
              </label>

              {/* Consent 2 (Optional) */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.productUpdates}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      productUpdates: e.target.checked,
                    })
                  }
                  className="mt-1 h-4 w-4 rounded border-[#767676] text-[#0f476a] focus:ring-[#0f476a]"
                />
                <span className="text-[13px] text-[#5a6d79] leading-snug">
                  I&apos;d also like to receive occasional ZoikoSuite product
                  updates (optional).
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded bg-[#0f476a] hover:bg-[#0c3954] text-white font-semibold text-[15px] border border-[#0f476a] transition-colors mt-2"
              >
                Register
              </button>

              {/* Footnote */}
              <p className="text-[13px] text-[#5a6d79] mt-1">
                See our{" "}
                <Link
                  href="/privacy-architecture"
                  className="font-semibold text-[#0f476a] hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                for how registration data is used.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
