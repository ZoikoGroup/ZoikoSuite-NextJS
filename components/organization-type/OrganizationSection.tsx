"tsx";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function OrganizationSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#A07A2E]"></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#A07A2E" }}
            >
              ORGANIZATION TYPE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-[56px] font-bold tracking-tight leading-[1.15] mb-6">
            Govern operations for the organization you are today — and the
            structure you <br /> are becoming
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
            ZoikoSuite applies one governed operating architecture across
            different organization patterns, with explicit authority, evidence,
            entity and jurisdiction context, source-of-record ownership and
            scalable controls.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-[#20180A] transition-all hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
              }}
            >
              Book enterprise demo
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-transparent border border-gray-700 hover:border-gray-500 transition-all"
            >
              Talk to a solutions architect
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full aspect-[3/3] rounded-2xl overflow-hidden">
          <Image
            src="/organization/1.png"
            alt="Govern operations and organization structure illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
