import React from "react";
import Image from "next/image";

interface StepCard {
  number: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
}

const stepsData: StepCard[] = [
  {
    number: "01",
    label: "SHARE",
    title: "Share your enquiry",
    description:
      "Introduce your organization, the collaboration you have in mind, and the outcomes you want to pursue.",
    imageSrc: "/partner/2.png",
  },
  {
    number: "02",
    label: "ROUTE",
    title: "Routed for review",
    description:
      "Your selected topic and regional context help the appropriate team understand your proposal.",
    imageSrc: "/partner/3.png",
  },
  {
    number: "03",
    label: "CONSIDER",
    title: "Team determines next steps",
    description:
      "The team considers the enquiry and determines whether further information or a conversation is appropriate.",
    imageSrc: "/partner/4.png",
  },
];

export default function PartnerCollaborationPath() {
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
            A clear path for collaboration.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed">
            Describe your proposal, provide a business contact, and share where
            you operate. Each enquiry begins with context.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <div key={step.number} className="flex flex-col justify-between">
              {/* Top Text Content with Accent Gold Border Top */}
              <div className="border-t-[3px] border-[#C9A34C] pt-6 mb-6">
                <p className="text-[#C9A34C] text-xs font-bold tracking-wider mb-2 uppercase">
                  {step.number} / {step.label}
                </p>
                <h3 className="text-[#1E293B] text-xl font-bold mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* 3D Illustration Graphic Container */}
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] rounded-2xl overflow-hidden flex items-center justify-center">
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
