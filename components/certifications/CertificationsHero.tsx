"use client"  
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CertificationsHeroProps {
  onRequestEvidence?: () => void;
}

export default function CertificationsHero({ onRequestEvidence }: CertificationsHeroProps) {
  return (
    <section className="w-full bg-color-azure-11 py-14 lg:py-20 flex justify-center text-white">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 w-full flex flex-col justify-start items-start gap-3.5">
          {/* Eyebrow */}
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-58-2" />
            <span className="text-color-orange-58-2 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
              CERTIFICATIONS &amp; INDEPENDENT ASSURANCE
            </span>
          </div>

          {/* Heading */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <h1 className="text-color-white-solid text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter'] leading-[1.2] tracking-tight">
              Proof should be specific
              <br />
              enough to verify.
            </h1>
          </div>

          {/* Description */}
          <div className="w-full max-w-[540px] pt-1">
            <p className="text-color-azure-82-2 text-base font-normal font-['Inter'] leading-6">
              Review ZoikoSuite certifications, attestations, independent assessments,
              and readiness status with the scope, dates, issuer, evidence-access path,
              and limitations needed for enterprise diligence.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="self-stretch pt-3 inline-flex justify-start items-center gap-3.5 flex-wrap">
            <a
              href="#request-evidence"
              onClick={(e) => {
                if (onRequestEvidence) {
                  e.preventDefault();
                  onRequestEvidence();
                }
              }}
              className="min-h-11 px-6 py-3 bg-color-orange-58-2 hover:bg-[#ba964c] transition-colors rounded-[10px] flex justify-center items-center cursor-pointer shadow-xs"
            >
              <span className="text-center text-color-azure-11 text-sm font-semibold font-['Inter']">
                Request assurance evidence
              </span>
            </a>
            <Link
              href="/solutions-architect"
              className="min-h-11 px-6 py-3 rounded-[10px] border border-white/35 hover:bg-white/10 transition-colors flex justify-center items-center cursor-pointer"
            >
              <span className="text-center text-color-white-solid text-sm font-semibold font-['Inter']">
                Talk to a solutions architect
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Illustration */}
        <div className="w-full lg:w-[511px] shrink-0 flex justify-center items-center">
          <div className="relative w-full max-w-[511px] aspect-square rounded-2xl overflow-hidden border border-color-azure-21 shadow-2xl bg-color-azure-12-3/40">
            <Image
              src="/certifications/assurance-panel.png"
              alt="Certifications and independent assurance proof illustration"
              fill
              sizes="(max-width: 768px) 100vw, 511px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
