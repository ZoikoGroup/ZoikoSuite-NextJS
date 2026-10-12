import React from "react";
import Image from "next/image";

interface StepCard {
  number: string;
  title: string;
  description: string;
}

const stepsData: StepCard[] = [
  {
    number: "01",
    title: "Intake",
    description: "Identify issue and origin.",
  },
  {
    number: "02",
    title: "Assess",
    description: "Scope, impact and uncertainty.",
  },
  {
    number: "03",
    title: "Assign",
    description: "Accountable owner and next handoff.",
  },
  {
    number: "04",
    title: "Approve",
    description: "Required policy/authorization.",
  },
  {
    number: "05",
    title: "Execute",
    description: "Bounded assigned action, not automatic execution.",
  },
  {
    number: "06",
    title: "Verify",
    description: "Closure criteria, reviewer and date.",
  },
  {
    number: "07",
    title: "Review",
    description: "Retrospective and unresolved follow-up.",
  },
];

export default function EndToEndConcept() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            END-TO-END CONCEPT
          </p>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight">
            From exception to reviewed outcome.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stepsData.map((step) => (
            <div
              key={step.number}
              className="bg-[#F6F5F1] border-t-[3px] border-[#C9A34C] rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[#C9A34C] text-xs font-bold block mb-3">
                  {step.number}
                </span>
                <h3 className="text-[#1E293B] text-lg font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Single Image Section */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[800px] overflow-hidden">
          <Image
            src="/coo/3.png"
            alt="End to end process workflow visualization"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
