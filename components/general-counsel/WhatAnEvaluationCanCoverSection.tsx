"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CapabilityCard {
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    title: "Legal and commercial processes",
    description:
      "Customer and salesperson reviews, approvals, transfers, breaches and renewals patterns.",
  },
  {
    title: "Systems architecture",
    description:
      "Contract and document systems, procurement, ERP, identity and integration architecture at a high level.",
  },
  {
    title: "Entity and jurisdiction scope",
    description:
      "Organizational structure and the jurisdictions you operate in that could create cross-border issues.",
  },
  {
    title: "Authority and governance",
    description:
      "Delegation schedules, segregation policy sources and governance control model.",
  },
  {
    title: "Evidence and operational",
    description:
      "Where decision evidence must reside, access levels and audit retention rules.",
  },
  {
    title: "Deployment, data and migration",
    description:
      "Residency needs, exposure mitigation requirements, and evaluation environment choice alternative in advance of formal staging.",
  },
];

export default function WhatAnEvaluationCanCoverSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    fullName: "",
    organization: "",
    role: "General Counsel / CLO",
    countryOrRegion: "",
    primaryLegalConcern: "Obligation scoping and compliance...",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#14425a]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="flex flex-col text-left mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              TESTING YOUR READINESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight mb-3">
            What an evaluation can cover without confidential detail
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
            No matter details, counterparty names or strategical material are needed to run a powerful first conversation.
          </p>
        </div>

        {/* 6 Checkmark Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-14 sm:mb-16">
          {capabilities.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-xl border border-slate-700/60 bg-white text-slate-900 p-4 sm:p-5 flex items-start gap-3.5 text-left shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug mb-1">
                  {c.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                  {c.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2-Column Section: Bring One Obligation on Left, Form Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-6 border-t border-slate-800">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col text-left"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-tight mb-4">
              Bring one obligation nobody can currently trace
            </h3>

            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed mb-6 font-normal">
              A policy requirement buried in a schedule. An approval that was approved by someone whose authority nobody checked. An obligation with six names attached but was through the cracks. Authority and evidence models with you.
            </p>

            {/* Gold Callout Quote */}
            <div className="border-l-2 border-[#c5a059] pl-4 py-1">
              <p className="text-xs sm:text-[12.5px] text-slate-400 leading-relaxed font-light italic">
                &ldquo;The capability challenges, obligation, schedule or framework with as few as three sources: a live demo can be run and tested.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right Column: Book Enterprise Demo Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-[540px] rounded-2xl sm:rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-100 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                Book enterprise demo
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-normal">
                Nothing on this page will ever be transferred out.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, workEmail: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#08222F] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#08222F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      placeholder="Company Ltd."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#08222F] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Your role
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      placeholder="General Counsel / CLO"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#08222F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Country / workplace
                    </label>
                    <input
                      type="text"
                      value={formData.countryOrRegion}
                      onChange={(e) =>
                        setFormData({ ...formData, countryOrRegion: e.target.value })
                      }
                      placeholder="Global / Multi-region"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#08222F] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Primary legal question
                    </label>
                    <input
                      type="text"
                      value={formData.primaryLegalConcern}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryLegalConcern: e.target.value,
                        })
                      }
                      placeholder="Obligation scoping and compliance..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#08222F] transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#c5a059] hover:bg-[#b89345] text-[#08222F] font-bold text-xs transition-colors shadow-sm"
                  >
                    Book enterprise demo &rarr;
                  </button>
                </div>

                <p className="text-[10px] text-slate-500 leading-normal pt-1">
                  Do not include privileged, confidential or matters-specific information. To see our commitments on research, please read our{" "}
                  <Link
                    href="/trust/privacy-architecture"
                    className="text-slate-700 underline hover:text-slate-900"
                  >
                    Partner &amp; Customer Information Security Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
