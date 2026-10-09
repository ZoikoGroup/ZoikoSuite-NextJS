import React from "react";
import Image from "next/image";

interface IntegrityPoint {
  title: string;
  description: string;
}

export default function EvidenceStateIntegritySection() {
  const points: IntegrityPoint[] = [
    {
      title: "Source and scope",
      description: "Authority, entity, jurisdiction and effective version.",
    },
    {
      title: "Owner and review",
      description: "Preparation, approval and segregation remain distinct.",
    },
    {
      title: "Evidence and oversight",
      description: "Currentness, access and unresolved decision context.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Structured Points */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
            EVIDENCE & STATE INTEGRITY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-6">
            A completed task <br />
            is not verified compliance.
          </h2>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
            Keep obligation, assignment, control mapping, exception and evidence
            references separately owned and versioned.
          </p>

          {/* Points List */}
          <div className="w-full flex flex-col gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="w-full pb-6 border-b border-gray-200/80 flex flex-col gap-1.5 last:border-b-0 last:pb-0"
              >
                <h3 className="text-lg font-bold text-[#1F2421] tracking-tight">
                  {point.title}
                </h3>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[580px] aspect-[4/4] rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-[#F8F7F4]">
            <Image
              src="/comp/c6.png"
              alt="Evidence and state integrity 3D isometric illustration"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
