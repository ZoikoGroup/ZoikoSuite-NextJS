import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface StepItem {
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    title: "Explain the proposal",
    description: "Describe the systems, services, or initiative involved.",
  },
  {
    title: "Share where you operate",
    description: "Include relevant markets and customer segments.",
  },
  {
    title: "Keep the details appropriate",
    description: "Avoid passwords and confidential customer information.",
  },
];

export default function ThoughtfulCollaboration() {
  return (
    <section className="relative overflow-hidden bg-[#082834] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & List */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A34C]" />
              <p className="text-[#C9A34C] text-xs font-bold tracking-[0.2em] uppercase">
                THOUGHTFUL COLLABORATION
              </p>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] mb-4">
              Put your partnership idea in the right context.
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl font-normal">
              A useful enquiry starts with the opportunity, the organizations
              involved, and the intended outcome.
            </p>
          </div>

          {/* Steps / Checklist Points */}
          <div className="space-y-6">
            {stepsData.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-4 h-4 text-[#C9A34C] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white text-base font-bold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-[#1E3A4A]/50 bg-[#0A303F]">
            <Image
              src="/partner/5.png"
              alt="Thoughtful collaboration team discussion"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
