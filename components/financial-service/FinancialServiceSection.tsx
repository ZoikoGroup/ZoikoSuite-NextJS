import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function FinancialServiceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#C59B3F" }}
            >
              FINANCIAL SERVICE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-6">
            Govern financial operations before risk becomes evidence you have to
            reconstruct
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
            ZoikoSuite connects finance, tax, compliance, evidence and
            cross-functional operations across entities and jurisdictions, so
            material actions can execute with policy, authority and auditability
            built in.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-[#1A150B] transition-all hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: "#D9B15A",
                border: "1px solid #D9B15A",
              }}
            >
              Book enterprise demo
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-transparent border border-gray-700 hover:border-gray-500 transition-all"
            >
              Talk to a solutions architect
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full aspect-[3/3] rounded-2xl overflow-hidden">
          <Image
            src="/financial/1.png"
            alt="Govern financial operations and risk management illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
