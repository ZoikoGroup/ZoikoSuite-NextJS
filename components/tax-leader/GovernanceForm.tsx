"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function GovernanceForm() {
  const [fullName, setFullName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [orgSize, setOrgSize] = useState<string>("");
  const [evaluationFocus, setEvaluationFocus] = useState<string>("");
  const [regions, setRegions] = useState<string>("");
  const [mainQuestion, setMainQuestion] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="form"
      className="bg-white py-20 px-6 md:px-12 lg:px-20 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            LOCAL EVALUATION PREVIEW
          </p>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.15]">
            Start with a governance question.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed mb-4">
            Share general scope, decision ownership, and review needs. Tax
            Ladder describes a proposed operating model, available capabilities
            and jurisdiction coverage need confirmation.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#386665] hover:underline space-x-1"
          >
            <span>Open the Enterprise Sales local page</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Form Container */}
        <div className="bg-[#FAF6EF] rounded-2xl border border-[#E2E8F0] p-6 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-[#1E293B] text-lg font-bold mb-4">
              Evaluation context
            </h3>

            {/* Row 1: Full name, Work email, Organization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Full name*
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullName(e.target.value)
                  }
                  placeholder="Your name"
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Work email*
                </label>
                <input
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setWorkEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Organization (optional)
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setOrganization(e.target.value)
                  }
                  placeholder="Your organization"
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
                />
              </div>
            </div>

            {/* Row 2: Role / perspective & Organization size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Role / perspective (optional)
                </label>
                <div className="relative">
                  <select
                    value={role}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setRole(e.target.value)
                    }
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#64748B] appearance-none focus:outline-none focus:border-[#386665]"
                  >
                    <option value="">Choose a perspective</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-[#64748B] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2">
                  Organization size (optional)
                </label>
                <div className="relative">
                  <select
                    value={orgSize}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setOrgSize(e.target.value)
                    }
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#64748B] appearance-none focus:outline-none focus:border-[#386665]"
                  >
                    <option value="">Prefer not to say</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-[#64748B] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 3: Evaluation focus */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Evaluation focus (optional)
              </label>
              <div className="relative">
                <select
                  value={evaluationFocus}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setEvaluationFocus(e.target.value)
                  }
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#64748B] appearance-none focus:outline-none focus:border-[#386665]"
                >
                  <option value="">Choose an area</option>
                </select>
                <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            {/* Row 4: Regions of interest */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Regions of interest (optional)
              </label>
              <input
                type="text"
                value={regions}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRegions(e.target.value)
                }
                placeholder="General regions you want to discuss"
                className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665]"
              />
              <p className="text-[11px] text-[#64748B] mt-1.5">
                Contact info. No broadcast support is implied.
              </p>
            </div>

            {/* Row 5: Main governance question */}
            <div>
              <label className="block text-xs font-bold text-[#1E293B] mb-2">
                Main governance question (optional)
              </label>
              <textarea
                rows={4}
                value={mainQuestion}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMainQuestion(e.target.value)
                }
                placeholder="Share general goals, scope, and review questions."
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-4 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#386665] resize-none"
              />
              <p className="text-[11px] text-[#64748B] mt-1.5">
                If provided, use 75-1,500 characters. Do not include tax
                identifiers, payroll records, employee tax data, or confidential
                financial artifacts.
              </p>
            </div>

            {/* Footer note & Submit Button */}
            <div className="pt-2">
              <p className="text-[11px] text-[#64748B] mb-4">
                Required fields are marked *. No marketing consent is required;
                details remain on this page during your preview.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#CFA844] text-[#FFFFFF] text-xs font-bold hover:bg-[#C5A028] transition-colors duration-200 space-x-2 shadow-sm"
              >
                <span>Review evaluation context</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
