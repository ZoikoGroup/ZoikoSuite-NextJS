"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LocalBriefingForm() {
  const [fullName, setFullName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [acknowledge, setAcknowledge] = useState<boolean>(false);
  const [updates, setUpdates] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="context" className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            LOCAL BRIEFING PREVIEW
          </p>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.15]">
            Start with one operating decision.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed">
            Approved briefing/provider and privacy routes were not supplied.
            This form sends/stores no information and books no meeting.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#FAF6EF] rounded-2xl border border-[#E2E8F0] p-6 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-[#1E293B] text-lg font-bold mb-4">
              Evaluation context
            </h3>

            {/* Row 1: Full name & Work email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullName(e.target.value)
                  }
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  value={workEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setWorkEmail(e.target.value)
                  }
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>
            </div>

            {/* Row 2: Organization & Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setOrganization(e.target.value)
                  }
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Role (optional)
                </label>
                <div className="relative">
                  <select
                    value={role}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setRole(e.target.value)
                    }
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#64748B] appearance-none focus:outline-none focus:border-[#386665]"
                  >
                    <option value="">Choose one</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-[#64748B] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 3: Message */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Message (optional)
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-4 text-sm text-[#1E293B] focus:outline-none focus:border-[#386665] resize-none"
              />
              <p className="text-[11px] text-[#64748B] mt-1.5">
                No sensitive operational, personnel or customer data,
                credentials or confidential evidence.
              </p>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acknowledge}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAcknowledge(e.target.checked)
                  }
                  className="mt-0.5 rounded border-[#CBD5E1] text-[#386665] focus:ring-[#386665]"
                />
                <span className="text-xs text-[#1E293B]">
                  I acknowledge this is a local preview.
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={updates}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUpdates(e.target.checked)
                  }
                  className="mt-0.5 rounded border-[#CBD5E1] text-[#386665] focus:ring-[#386665]"
                />
                <span className="text-xs text-[#1E293B]">
                  Optional updates when a live service is approved.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#D0A644] text-[#FFFFFF] text-xs font-bold hover:bg-[#C5A028] transition-colors duration-200 shadow-sm"
              >
                Review briefing context
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
