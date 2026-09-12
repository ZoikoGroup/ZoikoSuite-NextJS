"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function StartWithJurisdictionLeastSureAboutSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    fullName: "",
    organization: "",
    role: "CFO / finance",
    scope: "",
    pathway: "Prepare for international expansion",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handled gracefully for demo
  };

  return (
    <section className="w-full bg-[#0F476A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#1E5B80]">
      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Headings, Paragraph & Notice */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              NEXT STEP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15] mb-5">
            Start with the jurisdiction you are least sure about
          </h2>

          <p className="text-sm sm:text-base text-[#D4E4ED] leading-relaxed mb-6">
            The most useful expansion conversation begins with one market or entity where you cannot currently name the authoritative source, the required professional review, or who would be accountable for activating the change. We will work through that scope with you.
          </p>

          {/* Quote Callout */}
          <div className="border-l-2 border-[#c5a059] pl-4 py-1 mb-6">
            <p className="text-xs sm:text-[13px] text-[#D4E4ED]/90 leading-relaxed font-light">
              No jurisdiction coverage, capability availability, integration, deployment advice, timeline or transaction outcome is committed outside an approved commercial document.
            </p>
          </div>

          <div>
            <Link
              href="#jurisdiction-registry"
              className="text-xs sm:text-sm font-medium text-[#D0AA55] hover:underline inline-flex items-center gap-1.5"
            >
              Or review the jurisdiction register first →
            </Link>
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
          <div className="w-full max-w-[540px] rounded-2xl sm:rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-100">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              Book enterprise demo
            </h3>
            <p className="text-xs text-slate-500 mb-5 font-normal">
              All expansion content and every pathway exploration above walk-through.
            </p>

            {/* Advisory Warning Callout Box */}
            <div className="rounded-xl border border-rose-200 bg-[#FFF9F9] p-3.5 sm:p-4 mb-5 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 text-[11px] text-slate-600 leading-relaxed">
                <span className="font-mono text-[9.5px] font-bold text-rose-700 tracking-wider uppercase">
                  ADVISORY AND LEGAL WARNING
                </span>
                <p>
                  No lawyer-client relationship is created by this walk-through. Real jurisdiction determinations require direct corporate legal and accounting review. No formal guarantees given without commercial contract.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F476A] transition-colors"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F476A] transition-colors"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F476A] transition-colors"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium text-slate-700 mb-1">
                    Entities and jurisdictions in scope
                  </label>
                  <input
                    type="text"
                    value={formData.scope}
                    onChange={(e) =>
                      setFormData({ ...formData, scope: e.target.value })
                    }
                    placeholder="Approximate counts are fine"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-700 mb-1">
                    Which pathway is closest?
                  </label>
                  <input
                    type="text"
                    value={formData.pathway}
                    onChange={(e) =>
                      setFormData({ ...formData, pathway: e.target.value })
                    }
                    placeholder="Prepare for international expansion"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0F476A] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#c5a059] hover:bg-[#b59048] text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  Book enterprise demo →
                </button>
              </div>

              <p className="text-[10px] text-slate-500 leading-normal pt-1">
                We use contact information to respond to this request. Consent is never pre-checked. See the{" "}
                <Link href="/privacy" className="text-slate-700 underline hover:text-slate-900">
                  Privacy Notice
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
