"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { FaLinkedinIn, FaYoutube, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { LuGlobe, LuGithub } from "react-icons/lu";

const badges = [
  "MULTI-ENTITY",
  "MULTI-JURISDICTION",
  "AUDIT-READY ARCHITECTURE",
  "RESIDENCY-AWARE CONTROLS",
];

export default function MobileNextStepSection() {
  const [email, setEmail] = useState("");

  return (
    <div className="lg:hidden w-full flex flex-col">
      {/* 1. Next Step CTA Section */}
      <section className="w-full bg-[#08222F] text-white py-16 px-6 flex justify-center text-center border-b border-[#0d2e3e]">
        <div className="max-w-md w-full flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
              NEXT STEP
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4">
            Govern your global operations with confidence
          </h2>

          {/* Subtext */}
          <p className="text-[13px] text-[#9ba4b5] leading-relaxed mb-8">
            Unify finance, workforce, legal, tax, compliance, and commercial operations under one governed platform.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mb-8">
            <a
              href="#choose-tour-path"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-xs hover:bg-[#c29c4c] transition-colors shadow-sm"
            >
              <span>Book enterprise demo</span>
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
            <a
              href="/platform/deployment"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#1e445b] bg-[#0d2a3a] text-white font-medium text-xs hover:bg-[#12364a] transition-colors"
            >
              Talk to a solutions architect
            </a>
          </div>

          {/* 4 Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded border border-[#1b3d52] bg-[#0c2230] text-[9.5px] font-mono tracking-wider text-[#8fa7b7] uppercase"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Mobile Insights Subscription & Social Footer Section */}
      <section className="w-full bg-[#051720] text-white py-12 px-6 flex justify-center">
        <div className="max-w-md w-full flex flex-col items-start text-left">
          {/* Brand Header */}
          <h3 className="text-base font-bold text-white mb-1.5">
            ZoikoSuite®
          </h3>
          <p className="text-xs text-[#7e95a5] leading-relaxed mb-8">
            Governed Business Operations Intelligence Platform.
            <br />
            A Zoiko Tech platform. A Zoiko Group company.
          </p>

          {/* INSIGHTS SUBSCRIPTION Form */}
          <div className="w-full mb-8">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#c5a059] uppercase block mb-1.5">
              INSIGHTS SUBSCRIPTION
            </span>
            <p className="text-xs text-[#7e95a5] leading-relaxed mb-3">
              Governance, compliance, and enterprise operations insights.
            </p>

            <label className="text-[11px] text-[#9ba4b5] block mb-1.5">
              Business email address
            </label>

            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 mb-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#1d3d52] bg-[#0b212f] text-xs text-white placeholder-[#557285] focus:outline-none focus:border-[#c5a059]"
              />
              <button
                type="button"
                className="px-6 py-2.5 rounded-xl bg-[#D0AA55] text-[#08222F] font-semibold text-xs hover:bg-[#c29c4c] transition-colors shrink-0 text-center"
              >
                Subscribe
              </button>
            </div>

            <p className="text-[10px] text-[#6b8291] leading-relaxed">
              By subscribing you agree to receive ZoikoSuite insights. See the{" "}
              <a href="/trust/privacy-architecture" className="underline hover:text-white">
                Privacy Policy
              </a>
              . You can unsubscribe at any time.
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="w-full">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
              SOCIAL MEDIA
            </span>

            <div className="flex items-center gap-2 mb-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-[#1b3d52] bg-[#0c2332] flex items-center justify-center text-[#8da6b7] hover:text-white hover:border-[#c5a059] transition-colors"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg border border-[#1b3d52] bg-[#0c2332] flex items-center justify-center text-[#8da6b7] hover:text-white hover:border-[#c5a059] transition-colors"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-lg border border-[#1b3d52] bg-[#0c2332] flex items-center justify-center text-[#8da6b7] hover:text-white hover:border-[#c5a059] transition-colors"
              >
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-[#1b3d52] bg-[#0c2332] flex items-center justify-center text-[#8da6b7] hover:text-white hover:border-[#c5a059] transition-colors"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Community"
                className="w-9 h-9 rounded-lg border border-[#1b3d52] bg-[#0c2332] flex items-center justify-center text-[#8da6b7] hover:text-white hover:border-[#c5a059] transition-colors"
              >
                <LuGlobe className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-[#1b3d52] bg-[#0c2332] flex items-center justify-center text-[#8da6b7] hover:text-white hover:border-[#c5a059] transition-colors"
              >
                <LuGithub className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[10px] text-[#6b8291] leading-relaxed">
              Medium and Vimeo icons stay hidden until the official accounts are active.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
