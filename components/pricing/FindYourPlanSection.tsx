"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FindYourPlanSection() {
  const [entities, setEntities] = useState<string>("1");
  const [users, setUsers] = useState<string>("1–5");
  const [approvals, setApprovals] = useState<string>("No");
  const [sso, setSso] = useState<string>("No");
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleFindPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (sso === "Yes" || entities === "More than 5" || users === "More than 25") {
      setRecommendation("Enterprise");
    } else if (entities === "2–5" || users === "6–25" || approvals === "Yes") {
      setRecommendation("Growth");
    } else {
      setRecommendation("Starter");
    }
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Office photo card (pp3.png) */}
          <div className="lg:col-span-5 flex">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg w-full min-h-[380px] sm:min-h-[460px] lg:min-h-full border border-slate-200">
              <Image
                src="/pricing-page/pp3.png"
                alt="You decide - The selector shows its reasons and never hides the other plans."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: 4-Question Selector Card */}
          <div className="lg:col-span-7 flex">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E5E0D8] p-6 sm:p-10 shadow-sm w-full flex flex-col justify-between text-left">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-[2px] bg-[#CDA85B]" />
                  <span className="text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
                    FIND YOUR FIT
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-[#08222F] tracking-tight mb-2">
                  Not sure which plan fits? Answer four questions.
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-6 sm:mb-8">
                  We will recommend a plan and show why. You can always compare every plan yourself.
                </p>

                {/* Questions Form */}
                <form onSubmit={handleFindPlan} className="space-y-5 sm:space-y-6">
                  {/* Q1: Legal Entities */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-bold text-[#08222F] mb-2.5">
                      How many legal entities?
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {["1", "2–5", "More than 5"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setEntities(opt)}
                          className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-colors ${
                            entities === opt
                              ? "bg-[#08222F] text-white border border-[#08222F] shadow-xs"
                              : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q2: Platform Users */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-bold text-[#08222F] mb-2.5">
                      How many full platform users?
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {["1–5", "6–25", "More than 25"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setUsers(opt)}
                          className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-colors ${
                            users === opt
                              ? "bg-[#08222F] text-white border border-[#08222F] shadow-xs"
                              : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q3: Approvals / Automation */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-bold text-[#08222F] mb-2.5">
                      Do you need advanced approvals or automation?
                    </label>
                    <div className="flex items-center gap-2">
                      {["No", "Yes"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setApprovals(opt)}
                          className={`px-5 py-1.5 sm:px-6 sm:py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-colors ${
                            approvals === opt
                              ? "bg-[#08222F] text-white border border-[#08222F] shadow-xs"
                              : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q4: SSO / Group Consolidation */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-bold text-[#08222F] mb-2.5">
                      Do you require SSO, group consolidation or custom governance?
                    </label>
                    <div className="flex items-center gap-2">
                      {["No", "Yes"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSso(opt)}
                          className={`px-5 py-1.5 sm:px-6 sm:py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-colors ${
                            sso === opt
                              ? "bg-[#08222F] text-white border border-[#08222F] shadow-xs"
                              : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recommendation Box if calculated */}
                  {recommendation && (
                    <div className="p-4 rounded-xl bg-[#FBF9F4] border border-[#CDA85B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#CDA85B] shrink-0" />
                        <div>
                          <p className="text-xs font-mono font-semibold uppercase text-[#CDA85B]">
                            Recommended Fit
                          </p>
                          <p className="text-sm font-bold text-[#08222F]">
                            {recommendation} Plan
                          </p>
                        </div>
                      </div>
                      <Link
                        href="#plans"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#08222F] hover:text-[#CDA85B] transition-colors"
                      >
                        <span>View {recommendation} details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[#CDA85B] hover:bg-[#d8b365] text-[#08222F] font-bold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
                    >
                      Find my plan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
