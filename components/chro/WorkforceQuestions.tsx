import React from "react";
import Image from "next/image";

export default function WorkforceQuestions() {
  const cards = [
    {
      title: "Who owns workforce changes?",
      description:
        "Scope, signal and source context before interpreting a risk.",
      image: "/chro/3.png",
    },
    {
      title: "How do HR and payroll coordinate?",
      description: "Accountability, dependencies and decision rights.",
      image: "/chro/4.png",
    },
    {
      title: "Where do policy exceptions and evidence go?",
      description: "Expected result, verification and unresolved evidence.",
      image: "/chro/5.png",
    },
    {
      title: "How do leaders review evidence?",
      description:
        "Review source, freshness, authority and missing information without exposing employee records.",
      image: "/chro/6.png",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          WORKFORCE DECISION QUESTIONS
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-12">
          Three questions to start the review.
        </h2>

        {/* Cards Grid (2x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 flex flex-col transition-all duration-300 hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative w-full h-50 bg-gray-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#748087] text-sm leading-relaxed">
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
