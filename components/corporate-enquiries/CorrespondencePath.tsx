import React from "react";
import Image from "next/image";

interface StepCard {
  number: string;
  label: string;
  title: string;
  description: string;
}

const stepsData: StepCard[] = [
  {
    number: "01",
    label: "SUBMIT",
    title: "Share your question",
    description:
      "Provide a concise subject, general context, and your contact email.",
  },
  {
    number: "02",
    label: "TRIAGE",
    title: "Review the destination",
    description:
      "The enquiry is assessed to identify an appropriate accountable contact where a verified route is available.",
  },
  {
    number: "03",
    label: "FOLLOW UP",
    title: "Continue the correspondence",
    description:
      "The relevant team may follow up by email. No response deadline is promised.",
  },
];

export default function CorrespondencePath() {
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
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4">
            A clear path for correspondence.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed">
            Once a verified intake is connected, a corporate enquiry follows
            this proposed process.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stepsData.map((step) => (
            <div
              key={step.number}
              className="border-t-[3px] border-[#D9B364] py-5 flex flex-col justify-between"
            >
              <div>
                <p className="text-[#1C7A78] text-xs font-bold tracking-wider mb-3">
                  {step.number} / {step.label}
                </p>
                <h3 className="text-[#1E293B] text-xl font-bold mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Visualization Image */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] overflow-hidden">
          <Image
            src="/corporate/6.png"
            alt="A clear path for correspondence 3D workflow diagram"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
