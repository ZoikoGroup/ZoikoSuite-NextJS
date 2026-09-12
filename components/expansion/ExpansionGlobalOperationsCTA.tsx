"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { LuInstagram, LuGlobe, LuGithub } from "react-icons/lu";

export default function ExpansionGlobalOperationsCTA() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full flex flex-col">
      {/* 1. Next Step CTA Banner */}
      <section className="w-full bg-[#0F476A] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#1E5B80]">
        <div className="max-w-[840px] w-full flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-5 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              NEXT STEP
            </span>
            <span className="w-5 h-[2px] bg-[#c5a059]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight mb-5"
          >
            Govern your global operations with confidence
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-[#D4E4ED] leading-relaxed max-w-[620px] mb-8 sm:mb-10 font-normal"
          >
            Unify finance, workforce, legal, tax, compliance, and commercial operations under one governed platform.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="#book-enterprise-demo"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D0AA55] hover:bg-[#b89547] text-[#08222F] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2"
            >
              <span>Book enterprise demo</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            <Link
              href="/platform-overview"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#1E5B80] bg-[#0A3854] hover:bg-[#124263] text-white text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center justify-center"
            >
              Talk to a solutions architect
            </Link>
          </motion.div>

          {/* Feature Pills (Matches Reference Exactly) */}
          <div className="mt-8 w-full">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]">
                MULTI-ENTITY
              </span>
              <span className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]">
                MULTI-JURISDICTION
              </span>
              <span className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]">
                MULTI-AUDIT ARCHITECTURE
              </span>
            </div>
            <div className="flex justify-center mt-2">
              <span className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]">
                RESIDENCY-AWARE CONTROLS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mobile Insights Subscription & Social Footer Section (Strictly lg:hidden) */}
      <section className="block lg:hidden w-full bg-[#051720] text-white py-12 px-6 flex justify-center border-t border-[#0d2a3a]">
        <div className="max-w-md w-full flex flex-col items-start text-left">
          {/* Top QA Box */}
          <div className="w-full border border-dashed border-[#c5a059]/60 rounded-xl p-3.5 mb-6 bg-[#071d29]/40">
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] block mb-1">
              BUILD QA - LOGO
            </span>
            <p className="text-[9.5px] font-mono text-[#7ea0b5] leading-relaxed">
              ZoikoSuite logo — reversed
              <br />
              zoikosuite-logo-reversed.svg / .eps
              <br />
              height: 34-38px - light/medium/all-light version
              <br />
              for the dark footer - slot: /brand/logo/
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
                className="px-6 py-2.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-xs hover:bg-[#c29c4c] transition-colors shrink-0 text-center"
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

          {/* Bottom QA Box */}
          <div className="w-full border border-dashed border-[#c5a059]/60 rounded-xl p-3.5 bg-[#071d29]/40">
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] block mb-1">
              BUILD QA - FLEX-SET
            </span>
            <p className="text-[9.5px] font-mono text-[#7ea0b5] leading-relaxed">
              Social icons UI spacing for inline flex-set
              <br />
              default 8-log - 28/28 viewBox - transparent supply path - surmountable +0.2 - low-flare pur-elements - width &amp; layout correct
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
