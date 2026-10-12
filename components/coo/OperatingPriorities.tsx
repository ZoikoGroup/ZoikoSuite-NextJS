import React from "react";
import Image from "next/image";

interface QuestionCard {
  title: string;
  description: string;
  imageSrc: string;
}

const questionsData: QuestionCard[] = [
  {
    title: "What needs leadership attention?",
    description: "Scope, signal and source context before interpreting a risk.",
    imageSrc: "/chro/3.png",
  },
  {
    title: "Who owns the handoff?",
    description: "Accountability, dependencies and decision rights.",
    imageSrc: "/chro/4.png",
  },
  {
    title: "What confirms the outcome?",
    description: "Expected result, verification and unresolved evidence.",
    imageSrc: "/chro/5.png",
  },
];

export default function OperatingPriorities() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            OPERATING PRIORITIES
          </p>
          <h2 className="text-[#1E293B] text-3xl md:text-4xl font-bold tracking-tight">
            Three questions to start the review.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {questionsData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 bg-[#F1F5F9]">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#1E293B] text-lg font-bold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
