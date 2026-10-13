import React from "react";
import Image from "next/image";

interface ProcessStep {
  number: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
}

const privacyProcessData: ProcessStep[] = [
  {
    number: "01",
    label: "NEXT STEP",
    title: "Choose your request",
    description: "Select the purpose of your enquiry.",
    imageSrc: "/privacy/2.png",
  },
  {
    number: "02",
    label: "NEXT STEP",
    title: "Use the appropriate process",
    description:
      "General questions and specialist requests use different routes.",
    imageSrc: "/privacy/3.png",
  },
  {
    number: "03",
    label: "NEXT STEP",
    title: "Secure follow-up",
    description:
      "Verification and response depend on the approved request process.",
    imageSrc: "/privacy/4.png",
  },
];

export default function PrivacyProcess() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              WHAT HAPPENS NEXT
            </p>
          </div>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight">
            An appropriate process for your request.
          </h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {privacyProcessData.map((step) => (
            <div key={step.number} className="flex flex-col justify-between">
              {/* Top Text Block with Gold Accent Border */}
              <div className="border-t-[3px] border-[#C9A34C] pt-6 mb-6">
                <p className="text-[#207E83] text-xs font-bold tracking-wider mb-2 uppercase">
                  {step.number} / {step.label}
                </p>
                <h3 className="text-[#1E293B] text-xl font-bold mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* 3D Illustration Graphic Below Text */}
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] overflow-hidden flex items-center justify-center">
                <Image
                  src={step.imageSrc}
                  alt={step.title}
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
