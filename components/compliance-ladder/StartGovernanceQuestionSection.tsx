"use client"
import React, { useState } from "react";

export default function StartGovernanceQuestionSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    mainInterest: "",
    nonSensitiveQuestion: "",
    acknowledgeLocal: false,
    optionalUpdates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Local preview handling only
  };

  return (
    <section id="context" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
            LOCAL DEMO-INQUIRY PREVIEW
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-6">
            Start with a <br />
            governance question.
          </h2>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-md">
            Demo offers, canonical route, privacy notice and operational form
            provider require approval. This local form sends/stores no data and
            books no demo.
          </p>
        </div>

        {/* Right Column: Evaluation Context Form Card */}
        <div className="lg:col-span-7 flex justify-end w-full">
          <div className="bg-white rounded-2xl border border-black/10 p-8 sm:p-10 shadow-sm w-full max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight mb-6">
              Evaluation context
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Full name & Work email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1F2421] uppercase tracking-wider">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-[#1F2421] text-sm focus:outline-none focus:border-[#B49347]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1F2421] uppercase tracking-wider">
                    Work email
                  </label>
                  <input
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-[#1F2421] text-sm focus:outline-none focus:border-[#B49347]"
                  />
                </div>
              </div>

              {/* Row 2: Organization & Main interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1F2421] uppercase tracking-wider">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-[#1F2421] text-sm focus:outline-none focus:border-[#B49347]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1F2421] uppercase tracking-wider">
                    Main interest
                  </label>
                  <select
                    value={formData.mainInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, mainInterest: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-[#4B5563] text-sm focus:outline-none focus:border-[#B49347]"
                  >
                    <option value="">Choose one</option>
                    <option value="compliance">Compliance Ladder</option>
                    <option value="governance">Governance Model</option>
                    <option value="separation">Separation of Duties</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Non-sensitive question */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1F2421] uppercase tracking-wider">
                  Non-sensitive question
                </label>
                <textarea
                  rows={3}
                  value={formData.nonSensitiveQuestion}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      nonSensitiveQuestion: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-[#1F2421] text-sm focus:outline-none focus:border-[#B49347] resize-none"
                />
              </div>

              {/* Notice text */}
              <p className="text-xs text-[#4B5563] leading-relaxed">
                No credentials, compliance incidents, regulated records,
                customer or employee information, or confidential evidence.
              </p>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acknowledgeLocal}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acknowledgeLocal: e.target.checked,
                      })
                    }
                    className="mt-1 w-4 h-4 rounded border-black/20 text-[#B49347] focus:ring-[#B49347]"
                  />
                  <span className="text-xs sm:text-sm text-[#4B5563]">
                    I acknowledge this is a local preview.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.optionalUpdates}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        optionalUpdates: e.target.checked,
                      })
                    }
                    className="mt-1 w-4 h-4 rounded border-black/20 text-[#B49347] focus:ring-[#B49347]"
                  />
                  <span className="text-xs sm:text-sm text-[#4B5563]">
                    Optional updates when a live service is approved.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#D9A74A] hover:bg-[#C8963D] text-[#09232F] font-bold text-sm sm:text-base rounded-xl shadow-md transition-all text-center"
                >
                  Review demo context
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
