import React from "react";
import Image from "next/image";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    number: "01",
    title: "Explain the purpose",
    description: "Share a concise subject and the nature of your question.",
  },
  {
    number: "02",
    title: "Keep details proportionate",
    description:
      "Include useful context without confidential or sensitive records.",
  },
  {
    number: "03",
    title: "Choose the appropriate route",
    description: "Use dedicated contacts for specialist requests.",
  },
];

export default function ThoughtfulCorrespondence() {
  return (
    <section className="relative overflow-hidden bg-[#082632] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Steps */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A34C]" />
              <p className="text-[#C9A34C] text-xs font-bold tracking-[0.2em] uppercase">
                THOUGHTFUL CORRESPONDENCE
              </p>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] mb-4">
              Put your question in the right context.
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl font-normal">
              General corporate matters deserve a clear point of entry. Keep
              your message focused on the organization and the information you
              need.
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-6">
            {stepsData.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-[#C9A34C] text-xs font-bold tracking-wider pt-1">
                  {step.number}
                </span>
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

        {/* Right Column: Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg h-[380px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#1E3A4A]/50">
            <Image
              src="/corporate/5.png"
              alt="Thoughtful correspondence global headquarters visualization"
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
