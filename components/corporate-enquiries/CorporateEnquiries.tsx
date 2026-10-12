import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Mail } from "lucide-react";

export default function CorporateEnquiries() {
  return (
    <section className="relative overflow-hidden bg-[#082834] py-20 px-6 md:px-12 font-sans">
      {/* Top Right Radial Gradient Background */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(15,71,106,0.85) 0%, rgba(15,71,106,0) 70%)",
        }}
      />

      {/* Bottom Left Radial Gradient Background */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(208,170,85,0.13) 0%, rgba(208,170,85,0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#C9A34C] text-xs font-bold tracking-[0.2em] uppercase">
              GLOBAL HEADQUARTERS · CORPORATE ENQUIRIES
            </p>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
            Corporate enquiries
          </h1>

          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl font-normal">
            Have a question about Zoiko Suite as an organization? Tell us what
            your enquiry concerns, or choose a dedicated team below.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D9B364] text-[#082834] text-xs font-bold hover:bg-[#C5A028] transition-colors duration-200 space-x-2 shadow-md"
            >
              <span>Send corporate enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-[#1E3A4A] bg-transparent text-white text-xs font-bold hover:bg-[#0F3A4B] transition-colors duration-200 space-x-2"
            >
              <span>Find the right contact</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Image with Floating Glass Overlay Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg h-[380px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#1E3A4A]/50">
            <Image
              src="/corporate/1.png"
              alt="Corporate Enquiries Global Headquarters"
              fill
              className="object-cover"
              priority
            />

            {/* Bottom Glass Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-lg flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#CBD5E1] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#386665]" />
              </div>
              <div>
                <h4 className="text-[#1E293B] text-sm font-bold">
                  A clear point of entry.
                </h4>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  General organizational and corporate correspondence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
