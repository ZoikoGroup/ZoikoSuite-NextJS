"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { LuGlobe, LuGithub } from "react-icons/lu";

export default function GovernGlobalOperationsGeneralCounselCTA() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full flex flex-col">
      {/* 1. Next Step CTA Section */}
      <section className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center text-center border-t border-[#12364c]">
        <div className="max-w-2xl w-full flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              NEXT STEP
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Govern your global operations with confidence
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-[13.5px] text-[#9ba4b5] leading-relaxed max-w-lg mb-8 font-normal">
            Unify finance, workforce, legal, tax, compliance, and commercial operations under one governed platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mb-8">
            <Link
              href="/platform-tour"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-xs hover:bg-[#c29c4c] transition-colors shadow-sm"
            >
              <span>Book enterprise demo &rarr;</span>
            </Link>
            <Link
              href="/platform-overview"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#1e445b] bg-[#0c2332] text-white font-medium text-xs hover:bg-[#12364a] transition-colors"
            >
              Talk to a solutions architect
            </Link>
          </div>

          {/* Badges in 2 Rows */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded border border-[#184661] bg-[#071d29] text-[9.5px] font-mono font-bold tracking-wider text-[#7ea0b5] uppercase">
                MULTI-ENTITY
              </span>
              <span className="px-3 py-1.5 rounded border border-[#184661] bg-[#071d29] text-[9.5px] font-mono font-bold tracking-wider text-[#7ea0b5] uppercase">
                MULTI-JURISDICTION
              </span>
              <span className="px-3 py-1.5 rounded border border-[#184661] bg-[#071d29] text-[9.5px] font-mono font-bold tracking-wider text-[#7ea0b5] uppercase">
                AUDIT-READY ARCHITECTURE
              </span>
            </div>
            <div>
              <span className="px-3 py-1.5 rounded border border-[#184661] bg-[#071d29] text-[9.5px] font-mono font-bold tracking-wider text-[#7ea0b5] uppercase">
                RESIDENCY-AWARE CONTROLS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mobile Insights Subscription & Social Footer Section (Strictly lg:hidden) */}
      <section className="block lg:hidden w-full bg-[#051720] text-white py-12 px-5 sm:px-6 flex justify-center border-t border-[#0d2a3a]">
        <div className="max-w-md w-full flex flex-col items-start text-left">
          {/* Top QA Box */}
          <div className="w-full border border-amber-500/70 rounded-xl p-3.5 mb-6 bg-[#071d29]/70">
            <span className="inline-block px-2 py-0.5 rounded bg-[#D0AA55] text-[#08222F] text-[9.5px] font-mono font-bold uppercase tracking-wider mb-2">
              START 01 - LIVE
            </span>
            <p className="text-[10px] font-mono text-[#7ea0b5] leading-relaxed">
              <strong className="text-slate-200 font-semibold">ZoikoSuite App &mdash; preview</strong>
              <br />
              LC-MON-2024-Ops-Payment_v4.2 / LIVE
              <br />
              Applet Sandbox - Alpha/Pre-load version
              <br />
              Pre-live test. Version 1.42.0. &ldquo;Synthetic&rdquo;
            </p>
          </div>

          {/* Brand Header */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-white tracking-tight mb-1">
              ZoikoSuite®
            </h3>
            <p className="text-xs text-[#7ea0b5] leading-relaxed">
              Governed Business Operations Intelligence Platform.
              <br />
              A Zoiko Tech platform. A Zoiko Group company.
            </p>
          </div>

          {/* INSIGHTS SUBSCRIPTION Form */}
          <div className="w-full mb-8">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#c5a059] uppercase block mb-1">
              INSIGHTS SUBSCRIPTION
            </span>
            <p className="text-xs text-[#7ea0b5] leading-relaxed mb-3">
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
                className="px-6 py-2.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-xs hover:bg-[#c29c4c] transition-colors shrink-0 text-center shadow-sm"
              >
                Subscribe
              </button>
            </div>

            <p className="text-[10px] text-[#6b8291] leading-relaxed">
              By subscribing you agree to receive ZoikoSuite insights. See the{" "}
              <Link
                href="/trust/privacy-architecture"
                className="underline hover:text-white"
              >
                Privacy Policy
              </Link>
              . You can unsubscribe at any time.
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="w-full mb-6">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
              SOCIAL MEDIA
            </span>

            {/* 6 Social Icons */}
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

          {/* Bottom QA Box with Diagonal Hatching / Gold Accent */}
          <div className="w-full border border-amber-500/70 rounded-xl p-3.5 bg-[#071d29]/70 relative overflow-hidden">
            <span className="inline-block px-2 py-0.5 rounded bg-[#D0AA55] text-[#08222F] text-[9.5px] font-mono font-bold uppercase tracking-wider mb-2">
              STAT 01 - DOM ACT
            </span>
            <p className="text-[10px] font-mono text-[#7ea0b5] leading-relaxed">
              <strong className="text-slate-200 font-semibold">ZoikoScope [Visualizing Business Logic]</strong>
              <br />
              simpli &middot; scop &middot; ctx &middot; 24 monitor &middot; monotonic state path &middot; connection 4.01 &middot; raw data pre-release &middot; reserve receipt verif.ok
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
