import React from "react";
import Image from "next/image";

interface SourceDoc {
  title: string;
  status: string;
}

const sourcesData: SourceDoc[] = [
  {
    title: "Privacy Policy",
    status: "Approved destination not supplied",
  },
  {
    title: "UK Privacy Notice",
    status: "Approved destination not supplied",
  },
  {
    title: "Cookie Preferences",
    status: "Approved destination not supplied",
  },
  {
    title: "Data Processing Agreement",
    status: "Approved destination not supplied",
  },
  {
    title: "Subprocessor List",
    status: "Approved destination not supplied",
  },
  {
    title: "Cookie Policy",
    status: "Approved destination not supplied",
  },
];

export default function ApprovedPrivacySources() {
  return (
    <section id="information" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              AUTHORITY AND REFERENCES
            </p>
          </div>

          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Privacy information from approved sources.
          </h2>

          <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
            Document destinations must be verified before launch. No unpublished
            policy or agreement is presented as available.
          </p>
        </div>

        {/* 6 Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sourcesData.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[#1E293B] text-base font-bold mb-2">
                  {doc.title}
                </h3>
                <p className="text-[#94A3B8] text-xs font-normal">
                  {doc.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Interactive Diagram Container */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[650px] overflow-hidden">
          <Image
            src="/privacy/5.png"
            alt="Privacy information network architecture from approved sources"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
