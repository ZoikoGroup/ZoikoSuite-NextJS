import React from "react";

interface DestinationCard {
  title: string;
  description: string;
  status: string;
}

export default function TaxLadderDestinationsSection() {
  const destinations: DestinationCard[] = [
    {
      title: "Controller",
      description:
        "Financial reconciliation and internal-controls perspective. Tax Ladder does not own the general ledger or close.",
      status: "Destination: not yet published",
    },
    {
      title: "Compliance Ladder",
      description:
        "Enterprise compliance policy and control framing. Tax Ladder covers only the tax responsibility and review perspective, with no second compliance engine.",
      status: "Destination: not yet published",
    },
    {
      title: "CIO",
      description:
        "Systems integration, security and data lineage. The CIO cannot authorize tax determinations.",
      status: "Destination: not yet published",
    },
    {
      title: "CHRO",
      description:
        "Workforce and payroll tax context only when lawful, relevant and product-confirmed.",
      status: "Destination: not yet published",
    },
    {
      title: "COO",
      description:
        "Operating process ownership and exception escalation, not statutory advice.",
      status: "Destination: not yet published",
    },
    {
      title: "Audit Committee",
      description:
        "Authorized oversight and evidentiary questions, not routine task assignment.",
      status: "Destination: not yet published",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-12 max-w-3xl flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Where the Tax Ladder stops and others begin.
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            Each related destination owns a different perspective. Tax Ladder
            covers only the tax responsibility and review view.
          </p>
        </div>

        {/* Grid of Destination Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl border border-[dashed] border-[#CFCABB] p-8 shadow-sm flex flex-col justify-between"
            >
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold text-[#1F2421] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-[#CFCABB]/50">
                <span className="w-2 h-2 rounded-full border border-[#4B5563]" />
                <span className="text-xs font-medium text-[#4B5563]">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
