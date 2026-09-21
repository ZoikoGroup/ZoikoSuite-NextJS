import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SecurityOverview() {
  return (
    <section className="w-full bg-[#08222F] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                TRUST · SECURITY OVERVIEW
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6">
              Security architecture you can inspect
            </h1>

            {/* Description */}
            <p className="text-[#93A2B8] text-base lg:text-[17px] leading-relaxed mb-10 max-w-xl">
              Understand how ZoikoSuite approaches identity, authorization,
              encryption, workload trust, isolation, supply-chain security,
              telemetry, incident response and sovereign deployment — with
              status and scope visible for every claim.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#"
                className="h-12 px-6 flex items-center justify-center gap-2 rounded-full bg-[#D0AA55] hover:bg-[#C59B3F] text-[#111827] font-semibold text-sm transition-colors shadow-sm cursor-pointer"
              >
                <span>Request security review</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="h-12 px-6 flex items-center justify-center rounded-full bg-transparent hover:bg-white/5 text-white border border-white/20 font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>Download Security &amp; Trust Brief</span>
              </a>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full overflow-hidden">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-xl overflow-hidden">
                <Image
                  src="/security/1.png"
                  alt="Security architecture you can inspect illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
