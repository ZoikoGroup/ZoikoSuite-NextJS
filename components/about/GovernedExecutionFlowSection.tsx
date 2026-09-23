import React from "react";
import Image from "next/image";

export default function GovernedExecutionFlowSection() {
  const steps = [
    {
      number: "1",
      title: "Context",
      description:
        "Entity, jurisdiction, user role, object, effective date — the platform resolves the governing business context.",
    },
    {
      number: "2",
      title: "Policy",
      description:
        "Applicable policy and rule basis — effective-dated controls and restrictions are selected.",
    },
    {
      number: "3",
      title: "Authority",
      description:
        "Approver, delegated authority, segregation-of-duties state — verifies whether the actor may proceed.",
    },
    {
      number: "4",
      title: "Decision",
      description:
        "Allow, deny, require approval, escalate, or exception — decision basis and outcome are recorded.",
    },
    {
      number: "5",
      title: "Execution",
      description:
        "Approved operational action executes through the responsible domain or service.",
    },
    {
      number: "6",
      title: "Evidence",
      description:
        "Decision, workflow, document, event, and integrity context are captured as part of execution.",
    },
    {
      number: "7",
      title: "Source truth",
      description:
        "The owning system is updated and dependent domains are notified — without creating competing truth.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            GOVERNED EXECUTION FLOW
          </span>

          {/* Main Headline (32px and bold) */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            The architectural difference, in one sequence
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base font-light leading-relaxed">
            An interactive linear sequence that can be understood at a glance
            and explored without requiring technical expertise. Every stage is
            keyboard accessible; an &quot;Architecture detail&quot; view reveals
            service/data behavior for technical reviewers.
          </p>
        </div>

        {/* Content Grid: Graphic + Steps */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Column: Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full aspect-[3/3] overflow-hidden">
              <Image
                src="/about/3.png"
                alt="Governed Execution Flow Architecture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Steps List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full py-6 border-t border-gray-200 flex items-start gap-5"
              >
                {/* Step Number Circle */}
                <div className="w-8 h-8 rounded-full border border-[#A8843A] text-[#A8843A] flex items-center justify-center font-medium text-sm shrink-0 mt-0.5">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex flex-col">
                  <h3 className="text-[#0b1329] text-sm font-semibold tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[12.5px] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Bottom border to close list */}
            <div className="w-full border-t border-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
