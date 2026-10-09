import React from "react";

interface StepCard {
  step: string;
  title: string;
  subtitle: string;
}

export default function TaxLadderMeaningSection() {
  const steps: StepCard[] = [
    {
      step: "STEP 01",
      title: "Organize",
      subtitle: "Scope & Tax Responsibilities",
    },
    {
      step: "STEP 02",
      title: "Assign",
      subtitle: "Accountability & Assignment",
    },
    {
      step: "STEP 03",
      title: "Review",
      subtitle: "Obligations & Review Milestones",
    },
    {
      step: "STEP 04",
      title: "Escalate",
      subtitle: "Exceptions & Escalation",
    },
    {
      step: "STEP 05",
      title: "Document",
      subtitle: "Evidence & Review Trail",
    },
    {
      step: "STEP 06",
      title: "Oversee",
      subtitle: "Leadership Oversight & Handoffs",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-10 flex flex-col items-start max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            What the Tax Ladder means
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            A proposed operating model for talking about tax responsibility. The
            word &ldquo;ladder&rdquo; describes an order of governance stages,
            not a legal order.
          </p>
        </div>

        {/* Featured Callout Banner */}
        <div className="w-full bg-white rounded-2xl border-l-4 border-l-[#C8963D] border border-black/5 p-6 sm:p-8 shadow-sm mb-12 flex items-start">
          <p className="text-[#1F2421] text-base sm:text-lg leading-relaxed font-medium">
            Tax Ladder is a proposed way to describe the stages of organizing,
            assigning, reviewing, escalating, documenting and overseeing tax
            responsibilities. It is not a statutory tax hierarchy or tax advice.
          </p>
        </div>

        {/* Two Comparison Cards: What it is vs What it is not */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What it is */}
          <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#1F2421] tracking-tight mb-6">
                What it is
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    A proposed navigational and educational construct for six
                    stages of internal tax governance
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    A way to show who owns, reviews, approves and escalates a
                    tax responsibility
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    A common vocabulary for tax, finance, compliance, IT and
                    leadership
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* What it is not (bg #FDFAF4) */}
          <div className="bg-[#FDFAF4] rounded-2xl border border-black/10 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#1F2421] tracking-tight mb-6">
                What it is not
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    A legal hierarchy of tax authorities or a statutory priority
                    system
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    A productized filing engine, calculation tool or source of
                    regulatory updates
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    An alternative to licensed tax advice or legal review
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6 Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-black/10 p-6 flex flex-col justify-between shadow-sm"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-[#C8963D] tracking-wider mb-2">
                  {item.step}
                </span>
                <h4 className="text-lg font-bold text-[#1F2421] tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
