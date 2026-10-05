"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle2, ChevronDown } from "lucide-react";

export default function EvidenceAccessSection() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("Security");
  const [selectedEvidence, setSelectedEvidence] = useState<string[]>([
    "Readiness brief",
  ]);
  const [evaluationStage, setEvaluationStage] = useState("Security review");
  const [customerStatus, setCustomerStatus] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const evidenceOptions = [
    "Readiness brief",
    "Architecture evidence",
    "Framework mapping",
    "Penetration-test summary",
  ];

  const toggleEvidence = (opt: string) => {
    setSelectedEvidence((prev) =>
      prev.includes(opt) ? prev.filter((item) => item !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="request-evidence" className="w-full bg-color-white-solid py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-48" />
            <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
              EVIDENCE ACCESS &amp; DISTRIBUTION
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl lg:text-[32px] font-bold font-['Inter'] leading-tight">
              Public where it can be. Controlled where it must be.
            </h2>
          </div>
        </div>

        {/* 3D Graphic */}
        <div className="self-stretch w-full relative rounded-xl overflow-hidden border border-color-orange-87 shadow-xs bg-color-grey-95-12">
          <Image
            src="/certifications/card-evidence-access.png"
            alt="Evidence access and controlled distribution illustration"
            width={1136}
            height={561}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Request Evidence Form Card */}
        <div className="self-stretch w-full bg-color-white-solid rounded-2xl border border-color-orange-87 p-6 sm:p-10 shadow-xs">
          <div className="max-w-[1074px] mx-auto flex flex-col justify-start items-start gap-6">
            <div>
              <h3 className="text-color-azure-12-4 text-xl sm:text-2xl font-bold font-['Inter'] mb-1.5">
                Request assurance evidence
              </h3>
              <p className="text-color-grey-44 text-xs sm:text-sm font-normal font-['Inter'] leading-5">
                Tell us what you need to validate — we route it to the right team and
                share only current approved evidence.
              </p>
            </div>

            {isSubmitted ? (
              <div className="w-full py-12 px-6 rounded-xl bg-color-grey-95-12 border border-color-orange-87 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-color-azure-12-4">
                  Evidence Request Received
                </h4>
                <p className="text-xs text-color-grey-44 max-w-md">
                  Thank you. Your request for {selectedEvidence.join(", ")} has been
                  logged and routed to our Security &amp; Compliance team. We will review
                  your requirements and respond at {email || "your email"}.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-color-orange-48 underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                {/* Work email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="evidence-work-email" className="text-color-azure-25-3 text-xs font-semibold font-['Inter']">
                    Work email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="evidence-work-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 px-3.5 bg-color-grey-98-8 rounded-lg border border-color-orange-87 text-xs font-['Inter'] text-color-azure-12-4 focus:outline-none focus:ring-1 focus:ring-color-orange-48"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="evidence-company" className="text-color-azure-25-3 text-xs font-semibold font-['Inter']">
                    Company <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="evidence-company"
                    type="text"
                    required
                    placeholder="Acme Corporation"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full h-10 px-3.5 bg-color-grey-98-8 rounded-lg border border-color-orange-87 text-xs font-['Inter'] text-color-azure-12-4 focus:outline-none focus:ring-1 focus:ring-color-orange-48"
                  />
                </div>

                {/* Role / function */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="evidence-role" className="text-color-azure-25-3 text-xs font-semibold font-['Inter']">
                    Role / function
                  </label>
                  <div className="relative">
                    <select
                      id="evidence-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full h-10 appearance-none pl-4 pr-10 bg-color-grey-98-8 rounded-lg border border-color-orange-87 text-xs font-medium font-['Inter'] text-color-azure-12-4 focus:outline-none focus:ring-1 focus:ring-color-orange-48 cursor-pointer"
                    >
                      <option value="Security">Security</option>
                      <option value="Compliance">Compliance &amp; Governance</option>
                      <option value="Legal">Legal &amp; Privacy</option>
                      <option value="Procurement">Procurement &amp; Vendor Management</option>
                      <option value="Architecture">Architecture / Engineering</option>
                      <option value="Executive">Executive Leadership</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-color-grey-44 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Evidence requested */}
                <div className="flex flex-col gap-2 pt-1">
                  <label className="text-color-azure-25-3 text-xs font-semibold font-['Inter']">
                    Evidence requested
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {evidenceOptions.map((opt) => {
                      const active = selectedEvidence.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleEvidence(opt)}
                          className={`p-3 rounded-lg border text-left flex items-center gap-3 transition-colors cursor-pointer ${
                            active
                              ? "bg-color-white-solid border-color-orange-48 shadow-xs"
                              : "bg-color-grey-95-12 border-color-orange-87 hover:border-color-grey-44"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                              active
                                ? "bg-color-orange-58-2 border-color-orange-58-2 text-white"
                                : "bg-color-white-solid border-color-grey-58"
                            }`}
                          >
                            {active && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-xs font-semibold font-['Inter'] text-color-azure-25-3">
                            {opt}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Evaluation stage */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <label htmlFor="evidence-eval-stage" className="text-color-azure-25-3 text-xs font-semibold font-['Inter']">
                    Evaluation stage
                  </label>
                  <div className="relative">
                    <select
                      id="evidence-eval-stage"
                      value={evaluationStage}
                      onChange={(e) => setEvaluationStage(e.target.value)}
                      className="w-full h-10 appearance-none pl-4 pr-10 bg-color-grey-98-8 rounded-lg border border-color-orange-87 text-xs font-medium font-['Inter'] text-color-azure-12-4 focus:outline-none focus:ring-1 focus:ring-color-orange-48 cursor-pointer"
                    >
                      <option value="Security review">Security review</option>
                      <option value="Procurement diligence">Procurement diligence</option>
                      <option value="RFP / RFI evaluation">RFP / RFI evaluation</option>
                      <option value="Annual vendor renewal">Annual vendor renewal</option>
                      <option value="Architecture assessment">Architecture assessment</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-color-grey-44 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Contract/customer status (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="evidence-customer-status" className="text-xs font-['Inter']">
                    <span className="font-semibold text-color-azure-25-3">
                      Contract/customer status{" "}
                    </span>
                    <span className="text-color-grey-44 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="evidence-customer-status"
                      value={customerStatus}
                      onChange={(e) => setCustomerStatus(e.target.value)}
                      className="w-full h-10 appearance-none pl-4 pr-10 bg-color-grey-98-8 rounded-lg border border-color-orange-87 text-xs font-normal font-['Inter'] text-color-azure-12-4 focus:outline-none focus:ring-1 focus:ring-color-orange-48 cursor-pointer"
                    >
                      <option value="">Select…</option>
                      <option value="Prospective customer">Prospective customer</option>
                      <option value="Active enterprise customer">Active enterprise customer</option>
                      <option value="Implementation partner">Implementation partner</option>
                      <option value="External auditor / assessor">External auditor / assessor</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-color-grey-44 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Message (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="evidence-message" className="text-xs font-['Inter']">
                    <span className="font-semibold text-color-azure-25-3">Message </span>
                    <span className="text-color-grey-44 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="evidence-message"
                    rows={3}
                    placeholder="Provide specific assurance questions, requirements, or timelines…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-color-grey-98-8 rounded-lg border border-color-orange-87 text-xs font-['Inter'] text-color-azure-12-4 focus:outline-none focus:ring-1 focus:ring-color-orange-48 resize-none"
                  />
                </div>

                {/* Privacy Policy link */}
                <div className="pt-1 flex items-center gap-1 text-xs font-normal font-['Inter'] text-color-grey-58 flex-wrap">
                  <span>See our</span>
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-color-azure-24 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  <span>for how this request is routed and retained.</span>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-11 px-8 py-3 bg-color-orange-58-2 hover:bg-[#ba964c] transition-colors rounded-[10px] text-color-azure-11 text-sm font-semibold font-['Inter'] cursor-pointer shadow-xs"
                  >
                    Request assurance evidence
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
