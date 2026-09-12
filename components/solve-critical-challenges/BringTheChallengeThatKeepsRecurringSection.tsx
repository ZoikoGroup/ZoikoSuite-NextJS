"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function BringTheChallengeThatKeepsRecurringSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    fullName: "",
    organization: "",
    role: "CFO / Finance",
    countryOrRegion: "",
    whichChallenge: "Financial Governance",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#14425a]">
      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Headings, Paragraph, Notice & Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col text-left"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              NEXT STEP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15] mb-5">
            Bring the challenge that keeps recurring
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
            Most enterprise buyers arrive with one challenge that has been escalated more than once and never fully slowed &mdash; usually because the source, the authority or the evidence was never explicit. Name that one, and we will run it through the same ten proof fields you have just read.
          </p>

          {/* Quote Callout */}
          <div className="border-l-2 border-[#c5a059] pl-4 py-1 mb-5">
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-light">
              No capability, coverage, integration, jurisdiction, filing capability or outcome is committed outside an approved commercial instrument.
            </p>
          </div>

          {/* Or re-read a challenge first link */}
          <div>
            <a
              href="#the-ten-challenges"
              className="text-xs sm:text-sm font-medium text-[#D0AA55] hover:underline inline-flex items-center gap-1.5"
            >
              Or re-read a challenge first &rarr;
            </a>
          </div>
        </motion.div>

        {/* Right Column: Book Enterprise Demo Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[540px] rounded-2xl sm:rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-100 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              Book enterprise demo
            </h3>
            <p className="text-xs text-slate-500 mb-4 font-normal">
              All ten challenge explanations above are original.
            </p>

            {/* Synthetic Warning Box */}
            <div className="rounded-xl bg-rose-50/70 border border-rose-200 p-3.5 flex items-start gap-2.5 text-left mb-5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[9.5px] font-mono font-bold tracking-wider text-rose-700 uppercase">
                  SYNTHETIC EVALUATION SCENARIO — NO LIVE ACTION
                </span>
                <p className="text-[10.5px] text-rose-700/90 leading-relaxed font-normal">
                  Illustrative evaluation demo context: mock enterprise input, fictitious actor, synthetic governance scenario data. No live production action.
                </p>
              </div>
            </div>

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
                    Organisation
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
                    placeholder="CFO / Finance"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#08222F] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium text-slate-700 mb-1">
                    Country or region
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
                    Which challenge?
                  </label>
                  <input
                    type="text"
                    value={formData.whichChallenge}
                    onChange={(e) =>
                      setFormData({ ...formData, whichChallenge: e.target.value })
                    }
                    placeholder="Financial Governance"
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
                We will never sell or share your contact info. For more information, please read our{" "}
                <Link href="/privacy" className="text-slate-700 underline hover:text-slate-900">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
