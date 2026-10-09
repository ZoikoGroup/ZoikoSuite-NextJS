import React from "react";

interface StepCard {
  number: string;
  title: string;
  description: string;
}

export default function TraceDecision() {
  const steps: StepCard[] = [
    {
      number: "01",
      title: "Plan",
      description: "Planning decision and accountable sponsor.",
    },
    {
      number: "02",
      title: "Hire",
      description:
        "Source-owned hiring context; no automated recruitment claim.",
    },
    {
      number: "03",
      title: "Change",
      description: "Approved workforce change and owner.",
    },
    {
      number: "04",
      title: "Pay coordination",
      description: "Upstream review, not calculation or funds movement.",
    },
    {
      number: "05",
      title: "Transition",
      description: "Roles, handoffs and required evidence.",
    },
    {
      number: "06",
      title: "Exit",
      description: "Authorized source-system action and data boundaries.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          END-TO-END CONCEPT
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-12">
          Trace the decision, not the employee.
        </h2>

        {/* Grid (3x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F6F5F1] rounded-xl p-8 sm:p-10 flex flex-col justify-between border-t-4 border-[#C9A34C] shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#C85A47] tracking-wider mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2421] tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
