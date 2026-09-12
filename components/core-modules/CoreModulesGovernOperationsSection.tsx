"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn, FaYoutube, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { LuGlobe, LuGithub, LuInstagram } from "react-icons/lu";

const securityBadges = [
  "MULTI-ENTITY",
  "MULTI-JURISDICTION",
  "AUDIT-READY ARCHITECTURE",
  "RESIDENCY-AWARE CONTROLS",
];

export default function CoreModulesGovernOperationsSection() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full flex flex-col">
      {/* 1. Next Step CTA Section */}
      <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-20 flex justify-center text-center border-t border-[#12364c]">
        <div className="max-w-2xl w-full flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
              NEXT STEP
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14] mb-4">
            Govern your global
            <br />
            operations with
            <br />
            confidence
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-[13.5px] text-[#9ba4b5] leading-relaxed max-w-lg mb-8">
            Unify finance, workforce, legal, tax, compliance, and commercial operations under one governed platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mb-10">
            <Link
              href="/platform-tour"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#c5a059] text-[#08222F] font-semibold text-xs hover:bg-[#dfb76c] transition-colors shadow-sm"
            >
              Book an enterprise demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/platform-overview"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#1e445b] bg-[#0c2332] text-white font-medium text-xs hover:bg-[#12364a] transition-colors"
            >
              Talk to a solutions architect
            </Link>
          </div>

          {/* 4 Security / Architecture Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {securityBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded border border-[#1b3d52] bg-[#0c2230] text-[9px] sm:text-[9.5px] font-mono tracking-wider text-[#8fa7b7] uppercase"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Mobile Insights Subscription & Social Media Section (Visible strictly on mobile lg:hidden) */}
      <section className="lg:hidden w-full bg-[#051720] text-white py-12 px-6 flex justify-center border-t border-[#0d2a3a]">
        <div className="max-w-md w-full flex flex-col items-start text-left">
          {/* Brand Header */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white tracking-tight mb-1.5">
              ZoikoSuite®
            </h3>
            <p className="text-xs text-[#7e95a5] leading-relaxed">
              Governed Business Operations Intelligence Platform.
              <br />
              A Zoiko Tech platform. A Zoiko Group company.
            </p>
          </div>

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
                className="px-6 py-2.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-xs hover:bg-[#c29c4c] transition-colors shrink-0 text-center"
              >
                Subscribe
              </button>
            </div>

            <p className="text-[10px] text-[#6b8291] leading-relaxed">
              By subscribing you agree to receive ZoikoSuite insights. See the{" "}
              <Link href="/trust/privacy-architecture" className="underline hover:text-white">
                Privacy Policy
              </Link>
              . You can unsubscribe at any time.
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="w-full">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
              SOCIAL MEDIA
            </span>

            {/* 7 Social Icons: LinkedIn, YouTube, X, Facebook, Instagram, Globe, GitHub */}
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-[#1b3d52] bg-[#0c2332] flex items-center justify-center text-[#8da6b7] hover:text-white hover:border-[#c5a059] transition-colors"
              >
                <LuInstagram className="w-3.5 h-3.5" />
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
